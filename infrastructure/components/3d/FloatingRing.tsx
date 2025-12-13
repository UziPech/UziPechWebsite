import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// Add missing type definitions for R3F elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      torusGeometry: any;
    }
  }
}

export const FloatingRing: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);

  useFrame((state) => {
    if (meshRef.current) {
        // Slow organic rotation
        // The vertical movement is now handled by the Camera Rig (AtmosphereRig) 
        // effectively moving the camera past this object.
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Float 
      speed={2} 
      rotationIntensity={0.5} 
      floatIntensity={0.5}
      floatingRange={[-0.2, 0.2]}
    >
      {/* @ts-ignore */}
      <mesh ref={meshRef} castShadow receiveShadow>
        {/* @ts-ignore */}
        <torusGeometry args={[2.5, 0.6, 64, 128]} />
        <MeshDistortMaterial
            ref={materialRef}
            color="#e0e7e4"
            roughness={0.4}
            metalness={0.8}
            distort={0.4}
            speed={2}
        />
      </mesh>
    </Float>
  );
};