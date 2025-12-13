import React from 'react';
import { MeshReflectorMaterial } from '@react-three/drei';

export const Ground: React.FC = () => {
  return (
    // Positioned at -2.0 to sit slightly below the floating hero object
    // @ts-ignore
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      {/* Huge plane to ensure the horizon looks infinite */}
      {/* @ts-ignore */}
      <planeGeometry args={[100, 100]} />
      
      {/* High-quality reflection material tuned for dark environments */}
      {/* @ts-ignore */}
      <MeshReflectorMaterial
        color="#0b1d15"        // Deep Forest Green
        blur={[400, 100]}      // Soft, diffuse reflections
        resolution={1024}      // High resolution reflection map
        mixBlur={1}            // Maximum blur mixing
        mixStrength={40}       // Stronger reflection visibility
        roughness={1}          // Surface roughness
        depthScale={1}         // Depth perception scale
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        metalness={0.5}        // Metallic tint
        mirror={0.5}           // Mirror intensity
      />
    </mesh>
  );
};