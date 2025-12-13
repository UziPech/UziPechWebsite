import React from 'react';
import { MeshReflectorMaterial } from '@react-three/drei';

export const Ground: React.FC = () => {
  return (
    // Positioned at -2.5 to match the ContactShadows y-level of the HeroModel
    // @ts-ignore
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
      {/* Large plane to ensure infinite feel within fog range */}
      {/* @ts-ignore */}
      <planeGeometry args={[100, 100]} />
      
      {/* @ts-ignore */}
      <MeshReflectorMaterial
        color="#0b1d15"
        blur={[300, 100]}
        resolution={1024}
        mixBlur={1}
        mixStrength={40} // Enhances visibility of reflections
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        metalness={0.5}
        mirror={0.5}
      />
    </mesh>
  );
};