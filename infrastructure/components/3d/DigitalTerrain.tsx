import React, { useRef } from 'react';
import { Grid } from '@react-three/drei';

export const DigitalTerrain: React.FC = () => {
  return (
    // @ts-ignore
    <group position={[0, -4, 0]}>
      {/* Primary structural grid */}
      <Grid
        renderOrder={-1}
        position={[0, 0, 0]}
        infiniteGrid
        cellSize={1}
        sectionSize={3}
        sectionThickness={1.5}
        cellThickness={0.5}
        cellColor="#10b981" // emerald-500
        sectionColor="#064e3b" // emerald-900
        fadeDistance={25}
        fadeStrength={1}
      />
      
      {/* Subtle reflection plane to catch the ring's light */}
      {/* @ts-ignore */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        {/* @ts-ignore */}
        <planeGeometry args={[50, 50]} />
        {/* @ts-ignore */}
        <meshStandardMaterial 
            color="#050a07" 
            transparent 
            opacity={0.8} 
            roughness={0.1} 
            metalness={0.8} 
        />
      </mesh>
    </group>
  );
};