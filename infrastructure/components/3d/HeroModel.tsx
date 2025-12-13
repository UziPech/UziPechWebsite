import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

export const HeroModel: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
        // Parallax effect: Smoothly rotate towards mouse pointer
        // state.pointer.x and y are normalized coordinates (-1 to 1)
        const targetX = state.pointer.y * 0.4; 
        const targetY = state.pointer.x * 0.4;

        // Lerp current rotation to target rotation for smooth inertia
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX, 0.1);
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetY, 0.1);
    }
  });

  return (
    <group>
        <Float
            speed={2} 
            rotationIntensity={0.2} 
            floatIntensity={1}
            floatingRange={[-0.2, 0.2]}
        >
            {/* @ts-ignore */}
            <Sphere ref={meshRef} args={[1.8, 64, 64]} castShadow receiveShadow>
                <MeshDistortMaterial
                    color="#ffffff"
                    roughness={0.1}
                    metalness={0.1}
                    distort={0.5}
                    speed={2}
                />
            </Sphere>
        </Float>
        
        {/* Grounding shadow to create depth against the background/fog */}
        <ContactShadows 
            position={[0, -2.5, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2.5} 
            far={4} 
            color="#050a07"
        />
    </group>
  );
};