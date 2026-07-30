"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";

function LipstickBody({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const capRef = useRef<THREE.Group>(null);
  const bulletRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.08;
    const breathe = Math.sin(Date.now() * 0.001) * 0.02;
    groupRef.current.position.y = breathe;
  });

  const capY = 1.75 - scrollProgress * 2.2;
  const bulletVisible = Math.max(0, (scrollProgress - 0.3) / 0.4);
  const bulletY = 1.55 + bulletVisible * 0.3;

  return (
    <group ref={groupRef} position={[0, -0.3, 0]} rotation={[0.08, 0, 0]}>
      {/* Shadow */}
      <mesh position={[0, -1.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.2, 1.2]} />
        <meshBasicMaterial color="black" transparent opacity={0.08} />
      </mesh>

      {/* Body - main metallic tube */}
      <group>
        <mesh position={[0, 0.5, 0]} castShadow>
          <cylinderGeometry args={[0.28, 0.28, 1.0, 64]} />
          <meshPhysicalMaterial
            color="#B8001A"
            metalness={0.9}
            roughness={0.12}
            envMapIntensity={2.5}
            clearcoat={0.4}
            clearcoatRoughness={0.2}
          />
        </mesh>

        {/* Gold ring */}
        <mesh position={[0, 0.0, 0]} castShadow>
          <cylinderGeometry args={[0.3, 0.3, 0.06, 64]} />
          <meshPhysicalMaterial
            color="#D4AF37"
            metalness={0.95}
            roughness={0.08}
            envMapIntensity={3}
          />
        </mesh>

        {/* Bottom ring */}
        <mesh position={[0, -0.55, 0]} castShadow>
          <cylinderGeometry args={[0.31, 0.33, 0.06, 64]} />
          <meshPhysicalMaterial
            color="#8B6914"
            metalness={0.85}
            roughness={0.15}
            envMapIntensity={2}
          />
        </mesh>

        {/* Top ring */}
        <mesh position={[0, 1.05, 0]} castShadow>
          <cylinderGeometry args={[0.26, 0.24, 0.08, 64]} />
          <meshPhysicalMaterial
            color="#D4AF37"
            metalness={0.9}
            roughness={0.1}
            envMapIntensity={2.5}
          />
        </mesh>
      </group>

      {/* Lipstick bullet */}
      <group ref={bulletRef} position={[0, bulletY, 0]}>
        <mesh castShadow>
          <coneGeometry args={[0.22, 0.5, 48]} />
          <meshPhysicalMaterial
            color="#C41020"
            metalness={0.15}
            roughness={0.25}
            clearcoat={0.5}
            clearcoatRoughness={0.15}
            envMapIntensity={1.5}
          />
        </mesh>
        <mesh position={[0, -0.2, 0]} castShadow>
          <cylinderGeometry args={[0.22, 0.22, 0.1, 48]} />
          <meshPhysicalMaterial
            color="#A00018"
            metalness={0.2}
            roughness={0.3}
          />
        </mesh>
      </group>

      {/* Cap */}
      <group ref={capRef} position={[0, capY, 0]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.32, 0.34, 0.55, 64]} />
          <meshPhysicalMaterial
            color="#1A1A1A"
            metalness={0.75}
            roughness={0.25}
            envMapIntensity={1.5}
          />
        </mesh>
        <mesh position={[0, 0.32, 0]} castShadow>
          <cylinderGeometry args={[0.3, 0.28, 0.06, 64]} />
          <meshPhysicalMaterial
            color="#D4AF37"
            metalness={0.95}
            roughness={0.08}
            envMapIntensity={3}
          />
        </mesh>
        <mesh position={[0, -0.3, 0]} castShadow>
          <cylinderGeometry args={[0.3, 0.3, 0.04, 64]} />
          <meshPhysicalMaterial
            color="#333"
            metalness={0.5}
            roughness={0.3}
          />
        </mesh>
      </group>
    </group>
  );
}

function FloatingParticles({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const count = useMemo(() => Math.floor(30 + scrollProgress * 40), []);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 4;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 3;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2;
    }
    return pos;
  }, [count]);
  const ref = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.02;
    const positions = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.0005;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#A00018"
        transparent
        opacity={0.3 + scrollProgress * 0.3}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function GlassBlobs() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.01;
  });

  return (
    <group ref={ref}>
      {([
        { pos: [-1.5, 0.5, -1], scale: 0.6, color: "#A00018" },
        { pos: [1.8, -0.3, -0.8], scale: 0.4, color: "#D4AF37" },
        { pos: [-1.2, -0.8, -1.2], scale: 0.5, color: "#fff" },
        { pos: [2.0, 0.8, -1.5], scale: 0.35, color: "#A00018" },
      ] as { pos: [number, number, number]; scale: number; color: string }[]).map((blob, i) => (
        <mesh key={i} position={blob.pos} scale={blob.scale}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshPhysicalMaterial
            color={blob.color}
            transparent
            opacity={0.06}
            roughness={0.1}
            metalness={0.0}
            envMapIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

function CameraController({ scrollProgress = 0 }) {
  const { camera } = useThree();

  useFrame(() => {
    const zoom = 3.5 - scrollProgress * 0.4;
    const yOffset = 0.5 + scrollProgress * 0.3;
    camera.position.lerp(new THREE.Vector3(0, yOffset, zoom), 0.05);
  });

  return null;
}

function MouseTracker({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const targetRotation = useRef({ x: 0, y: 0 });
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.05;
  });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 0.08;
      const y = (e.clientY / window.innerHeight - 0.5) * 0.08;
      targetRotation.current = { x: y, y: x };
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <group ref={groupRef}>
      <LipstickBody scrollProgress={scrollProgress} />
    </group>
  );
}

export default function LipstickScene({ scrollProgress = 0 }) {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 3.5], fov: 25 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <CameraController scrollProgress={scrollProgress} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 5, 4]} intensity={1.0} />
      <directionalLight position={[-2, 3, 3]} intensity={0.3} />
      <pointLight position={[0, 3, 2]} intensity={0.2} />
      <spotLight position={[0, 4, 2]} intensity={0.2} angle={0.3} penumbra={0.5} />
      <Environment preset="studio" />
      <GlassBlobs />
      <FloatingParticles scrollProgress={scrollProgress} />
      <Float speed={0.3} rotationIntensity={0} floatIntensity={0.08}>
        <MouseTracker scrollProgress={scrollProgress} />
      </Float>
    </Canvas>
  );
}
