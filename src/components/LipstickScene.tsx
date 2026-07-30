"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function LipstickModel({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const capRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.15;
    groupRef.current.position.y = Math.sin(Date.now() * 0.0008) * 0.05;
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      <group ref={bodyRef}>
        <mesh position={[0, 0.6, 0]}>
          <cylinderGeometry args={[0.28, 0.28, 1.2, 48]} />
          <meshPhysicalMaterial
            color="#C0C0C0"
            metalness={0.85}
            roughness={0.15}
            envMapIntensity={1.5}
          />
        </mesh>

        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.08, 48]} />
          <meshPhysicalMaterial
            color="#D4AF37"
            metalness={0.9}
            roughness={0.1}
            envMapIntensity={2}
          />
        </mesh>

        <mesh position={[0, -0.64, 0]}>
          <cylinderGeometry args={[0.32, 0.34, 0.08, 48]} />
          <meshPhysicalMaterial
            color="#B8860B"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        <mesh position={[0, 1.25, 0]}>
          <cylinderGeometry args={[0.24, 0.26, 0.12, 48]} />
          <meshPhysicalMaterial
            color="#A00018"
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>

        <mesh position={[0, 1.55, 0]}>
          <coneGeometry args={[0.24, 0.4, 48]} />
          <meshPhysicalMaterial
            color="#C41020"
            metalness={0.2}
            roughness={0.3}
            clearcoat={0.3}
          />
        </mesh>
      </group>

      <group
        ref={capRef}
        position={[0, 1.75 - scrollProgress * 1.5, 0]}
      >
        <mesh>
          <cylinderGeometry args={[0.32, 0.34, 0.5, 48]} />
          <meshPhysicalMaterial
            color="#1A1A1A"
            metalness={0.7}
            roughness={0.3}
            envMapIntensity={1}
          />
        </mesh>
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.3, 0.28, 0.08, 48]} />
          <meshPhysicalMaterial
            color="#D4AF37"
            metalness={0.9}
            roughness={0.1}
            envMapIntensity={2}
          />
        </mesh>
      </group>
    </group>
  );
}

export default function LipstickScene({ scrollProgress = 0 }) {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 3.5], fov: 30 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[-3, 2, 4]} intensity={0.4} />
      <pointLight position={[0, 3, 2]} intensity={0.3} />
      <Environment preset="studio" />
      <Float speed={0.5} rotationIntensity={0} floatIntensity={0.1}>
        <LipstickModel scrollProgress={scrollProgress} />
      </Float>
    </Canvas>
  );
}
