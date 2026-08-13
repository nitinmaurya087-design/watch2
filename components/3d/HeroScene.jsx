'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, Float, Html, OrbitControls, Sparkles } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingGeometry({ mouse }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    const x = (state.mouse.x * 0.3) / 2;
    const y = (state.mouse.y * 0.3) / 2;
    ref.current.rotation.x += 0.005;
    ref.current.rotation.y += 0.007;
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, x, 0.08);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, y, 0.08);
  });
  return (
    <Float rotationIntensity={0.8} floatIntensity={1.3} speed={1.1}>
      <mesh ref={ref} scale={[1.2, 1.2, 1.2]}>
        <icosahedronGeometry args={[1.25, 2]} />
        <meshStandardMaterial
          color="#7c86ff"
          roughness={0.15}
          metalness={0.5}
          emissive="#3b3d7d"
          emissiveIntensity={0.3}
          opacity={0.88}
          transparent
        />
      </mesh>
    </Float>
  );
}

function BackgroundStructure() {
  return (
    <group>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
        <ringGeometry args={[3.8, 4.5, 64]} />
        <meshBasicMaterial color="#3f4268" transparent opacity={0.18} side={THREE.DoubleSide} />
      </mesh>
      <Sparkles count={35} size={1.2} opacity={0.25} speed={0.2} color="#9ea7ff" />
    </group>
  );
}

export default function HeroScene() {
  const [isClient, setIsClient] = useState(false);
  const [isWebGL, setIsWebGL] = useState(true);

  useEffect(() => {
    setIsClient(true);
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    setIsWebGL(!!gl);
  }, []);

  if (!isClient) return null;

  return (
    <div className="hero-3d relative h-full min-h-[520px] w-full overflow-hidden rounded-[32px] bg-[#090a10]/80 shadow-soft">
      {isWebGL ? (
        <Canvas camera={{ position: [0, 0, 6], fov: 35 }}>
          <ambientLight intensity={0.55} />
          <directionalLight position={[3, 3, 2]} intensity={1.1} />
          <Float floatIntensity={0.7} rotationIntensity={0.6} speed={0.8}>
            <FloatingGeometry />
          </Float>
          <BackgroundStructure />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <Environment preset="city" />
        </Canvas>
      ) : (
        <div className="grid h-full place-items-center text-center text-sm leading-relaxed text-slate-400">
          3D preview unavailable. Enjoy the portfolio content.
        </div>
      )}
    </div>
  );
}
