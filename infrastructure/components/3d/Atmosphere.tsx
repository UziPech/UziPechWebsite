import React, { useRef } from 'react';
import { Cloud } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Add missing type definition for R3F group element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
    }
  }
}

export const Atmosphere: React.FC = () => {
  const cloudGroup = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (cloudGroup.current) {
      cloudGroup.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    // @ts-ignore
    <group ref={cloudGroup}>
      {/* Deep background clouds */}
      <Cloud 
        opacity={0.3} 
        speed={0.2} 
        width={20} 
        depth={1.5} 
        segments={20} 
        position={[0, -5, -10]}
        color="#8ca39b" 
      />
      <Cloud 
        opacity={0.3} 
        speed={0.2} 
        width={10} 
        depth={1.5} 
        segments={10} 
        position={[0, 5, -10]}
        color="#1a2e24" 
      />
      
      {/* Foreground mist */}
      <Cloud 
        opacity={0.2} 
        speed={0.4} 
        width={10} 
        depth={2} 
        segments={10} 
        position={[4, 0, 0]}
        color="#e0e7e4"
      />
      <Cloud 
        opacity={0.2} 
        speed={0.4} 
        width={10} 
        depth={2} 
        segments={10} 
        position={[-4, -2, 0]}
        color="#e0e7e4"
      />
    </group>
  );
};