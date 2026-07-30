"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  AdaptiveDpr,
  ContactShadows,
  Environment,
  PerspectiveCamera,
  PerformanceMonitor,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

export type SceneQuality = "desktop" | "mobile";
export type SceneProgressRef = { current: number };

interface LipstickSceneProps {
  progressRef: SceneProgressRef;
  quality: SceneQuality;
  reducedMotion: boolean;
  active: boolean;
}

type ExperienceProps = Omit<LipstickSceneProps, "active">;

type PointerRef = {
  current: {
    x: number;
    y: number;
  };
};

function stageProgress(value: number, start: number, end: number) {
  return THREE.MathUtils.smoothstep(value, start, end);
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

function createBulletGeometry(quality: SceneQuality) {
  const segments = quality === "mobile" ? 24 : 48;
  const heightSteps = 10;
  const radius = 0.20;
  const height = 0.35;
  const slant = 0.12;

  const positions: number[] = [];
  const indices: number[] = [];

  const halfH = height / 2;
  const sideCols = segments + 1;
  const sideRows = heightSteps + 1;

  for (let j = 0; j < sideRows; j++) {
    const t = j / heightSteps;
    const yBase = -halfH + t * height;
    const r = radius * (1 - t * 0.08);
    for (let i = 0; i < sideCols; i++) {
      const theta = (i / segments) * Math.PI * 2;
      positions.push(
        r * Math.cos(theta),
        yBase + t * slant * Math.cos(theta),
        r * Math.sin(theta),
      );
    }
  }

  for (let j = 0; j < heightSteps; j++) {
    for (let i = 0; i < segments; i++) {
      const a = j * sideCols + i;
      const b = a + 1;
      const c = (j + 1) * sideCols + i;
      const d = c + 1;
      indices.push(a, c, b);
      indices.push(b, c, d);
    }
  }

  const sideVerts = sideRows * sideCols;

  const bcCenter = positions.length / 3;
  positions.push(0, -halfH, 0);
  for (let i = 0; i < sideCols; i++) {
    const theta = (i / segments) * Math.PI * 2;
    positions.push(radius * Math.cos(theta), -halfH, radius * Math.sin(theta));
  }
  for (let i = 0; i < segments; i++) {
    indices.push(bcCenter, bcCenter + 1 + i, bcCenter + 1 + ((i + 1) % segments));
  }

  const topEdgeStart = heightSteps * sideCols;
  const tcCenter = positions.length / 3;

  let cx = 0, cy = 0, cz = 0;
  for (let i = 0; i < sideCols; i++) {
    const idx = topEdgeStart + i;
    cx += positions[idx * 3];
    cy += positions[idx * 3 + 1];
    cz += positions[idx * 3 + 2];
  }
  cx /= sideCols;
  cy /= sideCols;
  cz /= sideCols;

  positions.push(cx, cy, cz);
  for (let i = 0; i < sideCols; i++) {
    const idx = topEdgeStart + i;
    positions.push(positions[idx * 3], positions[idx * 3 + 1], positions[idx * 3 + 2]);
  }
  for (let i = 0; i < segments; i++) {
    indices.push(tcCenter, tcCenter + 1 + i, tcCenter + 1 + ((i + 1) % segments));
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

function ProductRig({
  progressRef,
  quality,
  reducedMotion,
  pointerRef,
}: ExperienceProps & { pointerRef: PointerRef }) {
  const rigRef = useRef<THREE.Group>(null);
  const capRef = useRef<THREE.Group>(null);
  const bulletRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Group>(null);
  const bodyReflectionRef = useRef<THREE.MeshBasicMaterial>(null);
  const bulletReflectionRef = useRef<THREE.MeshBasicMaterial>(null);
  const smoothedProgress = useRef(reducedMotion ? 1 : 0);
  const brandTexture = useTexture("/mahalaxmi-mark.svg");
  const bulletGeometry = useMemo(() => createBulletGeometry(quality), [quality]);
  const radialSegments = quality === "mobile" ? 32 : 64;

  useEffect(() => () => bulletGeometry.dispose(), [bulletGeometry]);

  useFrame(({ clock }, delta) => {
    const rig = rigRef.current;
    const cap = capRef.current;
    const bullet = bulletRef.current;
    const inner = innerRef.current;
    if (!rig || !cap || !bullet || !inner) return;

    const targetProgress = reducedMotion ? 1 : progressRef.current;
    const rawProgress = THREE.MathUtils.damp(
      smoothedProgress.current,
      targetProgress,
      reducedMotion ? 20 : 5.5,
      delta,
    );
    smoothedProgress.current = rawProgress;

    const progress = easeInOutCubic(rawProgress);

    const rotationStage = stageProgress(progress, 0.04, 0.22);
    const capLiftStage = stageProgress(progress, 0.15, 0.35);
    const capMoveStage = stageProgress(progress, 0.35, 0.58);
    const bulletStage = stageProgress(progress, 0.52, 0.80);
    const reflectionStage = stageProgress(progress, 0.70, 0.92);
    const floating = reducedMotion ? 0 : Math.sin(clock.elapsedTime * 0.72) * 0.024;
    const pointerX = reducedMotion ? 0 : pointerRef.current.x;
    const pointerY = reducedMotion ? 0 : pointerRef.current.y;

    const isMobile = quality === "mobile";
    const openCapX = isMobile ? 0.65 : 1.45;
    const openCapY = isMobile ? 0.80 : 1.30;
    const openCapZ = isMobile ? -0.20 : -0.40;
    const bulletRise = isMobile ? 0.15 : 0.23;

    rig.position.y = THREE.MathUtils.damp(rig.position.y, floating - 0.01, 4, delta);
    rig.rotation.x = THREE.MathUtils.damp(
      rig.rotation.x,
      0.022 + pointerY * 0.025,
      4.5,
      delta,
    );
    rig.rotation.y = THREE.MathUtils.damp(
      rig.rotation.y,
      -0.08 + rotationStage * 0.35 + pointerX * 0.04,
      4.2,
      delta,
    );
    rig.rotation.z = THREE.MathUtils.damp(
      rig.rotation.z,
      -0.02 + capMoveStage * -0.01 + pointerX * 0.012,
      4,
      delta,
    );

    cap.position.x = THREE.MathUtils.damp(cap.position.x, capMoveStage * openCapX, 5.5, delta);
    cap.position.y = THREE.MathUtils.damp(
      cap.position.y,
      1.20 + (capLiftStage + capMoveStage * 0.4) * openCapY,
      5.5,
      delta,
    );
    cap.position.z = THREE.MathUtils.damp(cap.position.z, capMoveStage * openCapZ, 5.5, delta);
    cap.rotation.x = THREE.MathUtils.damp(cap.rotation.x, capMoveStage * -0.07, 4.5, delta);
    cap.rotation.y = THREE.MathUtils.damp(cap.rotation.y, capMoveStage * 0.25, 4.5, delta);
    cap.rotation.z = THREE.MathUtils.damp(cap.rotation.z, capMoveStage * 0.12, 4.5, delta);

    bullet.position.y = THREE.MathUtils.damp(
      bullet.position.y,
      0.72 + bulletStage * bulletRise,
      5.5,
      delta,
    );
    bullet.rotation.z = THREE.MathUtils.damp(
      bullet.rotation.z,
      -0.01 + bulletStage * -0.01,
      4,
      delta,
    );

    inner.rotation.y = THREE.MathUtils.damp(
      inner.rotation.y,
      bulletStage * 0.25,
      4.5,
      delta,
    );

    if (bodyReflectionRef.current) {
      bodyReflectionRef.current.opacity = 0.08 + reflectionStage * 0.1;
    }
    if (bulletReflectionRef.current) {
      bulletReflectionRef.current.opacity = 0.05 + reflectionStage * 0.1;
    }
  });

  return (
    <group ref={rigRef} position={[0.06, 0, 0]} rotation={[0.022, -0.08, -0.02]} scale={0.58}>
      <group>
        <mesh position={[0, -0.18, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.44, 0.46, 1.6, radialSegments, 1]} />
          <meshPhysicalMaterial
            color="#7a0014"
            metalness={0.85}
            roughness={0.12}
            clearcoat={0.9}
            clearcoatRoughness={0.06}
            envMapIntensity={2.0}
          />
        </mesh>

        <mesh position={[0, -1.03, 0]} castShadow>
          <cylinderGeometry args={[0.46, 0.47, 0.10, radialSegments]} />
          <meshPhysicalMaterial
            color="#310005"
            metalness={0.82}
            roughness={0.14}
            clearcoat={0.7}
            envMapIntensity={1.4}
          />
        </mesh>

        <mesh position={[0, 0.50, 0]} castShadow>
          <cylinderGeometry args={[0.46, 0.45, 0.15, radialSegments]} />
          <meshPhysicalMaterial
            color="#d4a94b"
            metalness={0.95}
            roughness={0.10}
            clearcoat={0.4}
            envMapIntensity={2.2}
          />
        </mesh>

        <mesh position={[0, -0.24, 0.42]} renderOrder={3}>
          <planeGeometry args={[0.5, 0.22]} />
          <meshBasicMaterial
            map={brandTexture}
            transparent
            alphaTest={0.06}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>

        <mesh position={[-0.16, -0.18, 0.43]} rotation={[0, 0, -0.02]} renderOrder={4}>
          <planeGeometry args={[0.045, 0.96]} />
          <meshBasicMaterial
            ref={bodyReflectionRef}
            color="#fff4eb"
            transparent
            opacity={0.08}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>
      </group>

      <group ref={innerRef}>
        <mesh position={[0, 0.82, 0]} castShadow>
          <cylinderGeometry args={[0.30, 0.32, 0.42, radialSegments]} />
          <meshPhysicalMaterial
            color="#d4a94b"
            metalness={0.95}
            roughness={0.10}
            clearcoat={0.4}
            envMapIntensity={2.2}
          />
        </mesh>

        <group ref={bulletRef} position={[0, 0.72, 0]} rotation={[0, 0, -0.01]}>
          <mesh geometry={bulletGeometry} castShadow>
            <meshPhysicalMaterial
              color="#a80e24"
              metalness={0.05}
              roughness={0.18}
              clearcoat={0.6}
              clearcoatRoughness={0.15}
              sheen={0.25}
              sheenColor="#ffb0bf"
              envMapIntensity={0.8}
            />
          </mesh>
          <mesh position={[-0.075, 0.04, 0.045]} rotation={[0, 0, -0.02]} renderOrder={4}>
            <planeGeometry args={[0.04, 0.50]} />
            <meshBasicMaterial
              ref={bulletReflectionRef}
              color="#ffd9de"
              transparent
              opacity={0.05}
              depthWrite={false}
              toneMapped={false}
            />
          </mesh>
        </group>
      </group>

      <group ref={capRef} position={[0, 1.20, 0]} rotation={[0, 0, -0.01]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.42, 0.45, 1.40, radialSegments, 1]} />
          <meshPhysicalMaterial
            color="#66000d"
            metalness={0.9}
            roughness={0.12}
            clearcoat={0.94}
            clearcoatRoughness={0.08}
            envMapIntensity={1.85}
          />
        </mesh>
        <mesh position={[0, 0.72, 0]} castShadow>
          <cylinderGeometry args={[0.43, 0.435, 0.06, radialSegments]} />
          <meshPhysicalMaterial
            color="#430008"
            metalness={0.88}
            roughness={0.12}
            clearcoat={0.8}
            envMapIntensity={1.45}
          />
        </mesh>
        <mesh position={[0, -0.78, 0]} castShadow>
          <cylinderGeometry args={[0.475, 0.475, 0.06, radialSegments]} />
          <meshPhysicalMaterial
            color="#d4a94b"
            metalness={0.95}
            roughness={0.10}
            clearcoat={0.4}
            envMapIntensity={2.2}
          />
        </mesh>
        <mesh position={[-0.15, 0.1, 0.432]} rotation={[0, 0, -0.02]} renderOrder={4}>
          <planeGeometry args={[0.04, 0.94]} />
          <meshBasicMaterial
            color="#fff6f0"
            transparent
            opacity={0.1}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>
      </group>
    </group>
  );
}

function LuxuryParticles({
  progressRef,
  quality,
}: Pick<ExperienceProps, "progressRef" | "quality">) {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);
  const count = quality === "mobile" ? 18 : 48;
  const positions = useMemo(() => {
    const base = new Float32Array(count * 3);
    let seed = 37;
    const random = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    for (let index = 0; index < count; index += 1) {
      base[index * 3] = (random() - 0.5) * 5.2;
      base[index * 3 + 1] = (random() - 0.5) * 4;
      base[index * 3 + 2] = (random() - 0.5) * 2.2 - 0.4;
    }

    return base;
  }, [count]);

  useFrame(({ clock }, delta) => {
    const points = pointsRef.current;
    const material = materialRef.current;
    if (!points || !material) return;

    const richness = stageProgress(progressRef.current, 0.7, 0.92);
    points.rotation.y += delta * (0.025 + richness * 0.035);
    material.opacity = 0.08 + richness * 0.4;
    material.size = 0.012 + richness * 0.012;

    points.position.y = Math.sin(clock.elapsedTime * 0.42) * (0.03 + richness * 0.04);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        color="#b30b2d"
        size={0.012}
        transparent
        opacity={0.08}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

function GlassForms({ progressRef }: Pick<ExperienceProps, "progressRef">) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const richness = stageProgress(progressRef.current, 0.62, 0.94);
    groupRef.current.rotation.y += delta * (0.008 + richness * 0.016);
    groupRef.current.rotation.z = THREE.MathUtils.damp(
      groupRef.current.rotation.z,
      richness * 0.05,
      2,
      delta,
    );
  });

  return (
    <group ref={groupRef}>
      <mesh position={[-1.35, 0.82, -1.1]} scale={[0.52, 0.82, 0.45]}>
        <sphereGeometry args={[1, 32, 24]} />
        <meshPhysicalMaterial
          color="#f4d9dc"
          transparent
          opacity={0.12}
          transmission={0.78}
          thickness={0.65}
          roughness={0.08}
          ior={1.18}
          depthWrite={false}
        />
      </mesh>
      <mesh position={[1.42, -0.58, -0.9]} scale={[0.72, 0.42, 0.5]}>
        <sphereGeometry args={[1, 32, 24]} />
        <meshPhysicalMaterial
          color="#ebc7c9"
          transparent
          opacity={0.1}
          transmission={0.82}
          thickness={0.55}
          roughness={0.06}
          ior={1.16}
          depthWrite={false}
        />
      </mesh>
      <mesh position={[1.55, 1.06, -1.35]} scale={[0.32, 0.5, 0.3]}>
        <sphereGeometry args={[1, 24, 20]} />
        <meshPhysicalMaterial
          color="#fff8f3"
          transparent
          opacity={0.1}
          transmission={0.9}
          thickness={0.45}
          roughness={0.04}
          ior={1.15}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function CameraRig({
  progressRef,
  quality,
  reducedMotion,
  pointerRef,
}: Pick<ExperienceProps, "progressRef" | "quality" | "reducedMotion"> & { pointerRef: PointerRef }) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const smoothedProgress = useRef(reducedMotion ? 1 : 0);

  useFrame((_, delta) => {
    const camera = cameraRef.current;
    if (!camera) return;

    const targetProgress = reducedMotion ? 1 : progressRef.current;
    const progress = THREE.MathUtils.damp(smoothedProgress.current, targetProgress, 4.5, delta);
    smoothedProgress.current = progress;

    const cameraStage = stageProgress(progress, 0.18, 0.56);
    const revealStage = stageProgress(progress, 0.3, 0.78);
    const pointerX = reducedMotion ? 0 : pointerRef.current.x;
    const pointerY = reducedMotion ? 0 : pointerRef.current.y;

    camera.position.x = THREE.MathUtils.damp(
      camera.position.x,
      0.08 + cameraStage * 0.12 + pointerX * 0.08,
      3.8,
      delta,
    );
    camera.position.y = THREE.MathUtils.damp(
      camera.position.y,
      0.18 + cameraStage * 0.12 + pointerY * 0.04,
      3.8,
      delta,
    );
    camera.position.z = THREE.MathUtils.damp(
      camera.position.z,
      7.5 - cameraStage * 0.2 + revealStage * 0.35,
      3.6,
      delta,
    );
    camera.lookAt(0, 0.60, 0);
  });

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={[0.08, 0.18, 7.5]}
      fov={quality === "mobile" ? 30 : 26}
    />
  );
}

function LightRig({
  progressRef,
  reducedMotion,
  pointerRef,
}: Pick<ExperienceProps, "progressRef" | "reducedMotion"> & { pointerRef: PointerRef }) {
  const keyLightRef = useRef<THREE.DirectionalLight>(null);
  const rimLightRef = useRef<THREE.PointLight>(null);

  useFrame((_, delta) => {
    const key = keyLightRef.current;
    const rim = rimLightRef.current;
    if (!key || !rim) return;

    const reflectionStage = stageProgress(reducedMotion ? 1 : progressRef.current, 0.68, 0.93);
    const pointerX = reducedMotion ? 0 : pointerRef.current.x;
    const pointerY = reducedMotion ? 0 : pointerRef.current.y;

    key.position.x = THREE.MathUtils.damp(key.position.x, 3.0 + pointerX * 0.42, 4, delta);
    key.position.y = THREE.MathUtils.damp(key.position.y, 4.35 - pointerY * 0.25, 4, delta);
    key.intensity = THREE.MathUtils.damp(key.intensity, 3 + reflectionStage * 1.2, 3, delta);
    rim.intensity = THREE.MathUtils.damp(rim.intensity, 0.95 + reflectionStage * 1.05, 3, delta);
  });

  return (
    <>
      <ambientLight intensity={0.72} />
      <directionalLight
        ref={keyLightRef}
        position={[3.0, 4.35, 4.5]}
        intensity={3}
        color="#fff4e5"
        castShadow
      />
      <directionalLight position={[-3.4, 1.8, 2.4]} intensity={1.35} color="#b3233c" />
      <pointLight ref={rimLightRef} position={[1.8, 1.7, -2]} intensity={0.95} color="#ffd8a0" />
      <spotLight position={[0, 5, 2]} intensity={0.85} angle={0.32} penumbra={0.85} color="#ffffff" />
    </>
  );
}

function Experience({ progressRef, quality, reducedMotion }: ExperienceProps) {
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (reducedMotion || quality === "mobile") {
      pointerRef.current = { x: 0, y: 0 };
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current = {
        x: THREE.MathUtils.clamp((event.clientX / window.innerWidth - 0.5) * 2, -1, 1),
        y: THREE.MathUtils.clamp((event.clientY / window.innerHeight - 0.5) * 2, -1, 1),
      };
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [quality, reducedMotion]);

  return (
    <>
      <CameraRig
        progressRef={progressRef}
        quality={quality}
        reducedMotion={reducedMotion}
        pointerRef={pointerRef}
      />
      <LightRig progressRef={progressRef} reducedMotion={reducedMotion} pointerRef={pointerRef} />
      <Environment preset="studio" background={false} />
      {reducedMotion ? null : <GlassForms progressRef={progressRef} />}
      {reducedMotion ? null : <LuxuryParticles progressRef={progressRef} quality={quality} />}
      <ProductRig
        progressRef={progressRef}
        quality={quality}
        reducedMotion={reducedMotion}
        pointerRef={pointerRef}
      />
      <ContactShadows
        position={[0, -1.38, 0]}
        opacity={0.34}
        scale={3.2}
        blur={2.8}
        far={3.5}
        resolution={quality === "mobile" ? 256 : 512}
        frames={quality === "mobile" || reducedMotion ? 1 : Infinity}
        color="#5b0b18"
      />
    </>
  );
}

function CanvasFallback() {
  return <div className="hero-canvas-fallback" aria-hidden="true" />;
}

export default function LipstickScene({
  progressRef,
  quality,
  reducedMotion,
  active,
}: LipstickSceneProps) {
  const preferredDpr = quality === "mobile" ? 1.1 : 1.5;
  const [dpr, setDpr] = useState(1.5);
  const renderedDpr = Math.min(dpr, preferredDpr);

  return (
    <Canvas
      aria-hidden="true"
      dpr={renderedDpr}
      frameloop={active ? "always" : "demand"}
      fallback={<CanvasFallback />}
      shadows
      gl={{
        alpha: true,
        antialias: quality === "desktop",
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.12,
      }}
      onCreated={({ gl }) => {
        gl.outputColorSpace = THREE.SRGBColorSpace;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <PerformanceMonitor
        flipflops={3}
        onDecline={() => setDpr(1)}
        onIncline={() => setDpr(preferredDpr)}
        onFallback={() => setDpr(1)}
      />
      <AdaptiveDpr pixelated />
      <Experience
        progressRef={progressRef}
        quality={quality}
        reducedMotion={reducedMotion}
      />
    </Canvas>
  );
}
