import React from 'react';
import { Sparkles } from '@react-three/drei';

export const Particulates: React.FC = () => {
  return (
    // @ts-ignore
    <group>
      {/* Ethereal sky dust (light, sparse) */}
      <Sparkles 
        count={50}
        scale={10}
        size={4}
        speed={0.4}
        opacity={0.5}
        color="#e0f7fa"
        position={[0, 5, 0]}
      />

      {/* Ground data particles (green, dense, tech-feel) */}
      <Sparkles 
        count={200}
        scale={[20, 5, 20]}
        size={6}
        speed={0.2}
        opacity={0.8}
        color="#34d399" // emerald-400
        position={[0, -2, 0]}
      />
    </group>
  );
};