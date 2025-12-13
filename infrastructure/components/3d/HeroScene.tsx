import React, { Suspense, ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera, Stars, ScrollControls, Scroll } from '@react-three/drei';
import { FloatingRing } from './FloatingRing';
import { Atmosphere } from './Atmosphere';
import { AtmosphereRig } from './AtmosphereRig';

// Add missing type definitions for R3F elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      spotLight: any;
      pointLight: any;
      fog: any;
    }
  }
}

interface HeroSceneProps {
  children?: ReactNode;
}

export const HeroScene: React.FC<HeroSceneProps> = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-forest-900">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 6, 10]} fov={50} />
        
        {/* Cinematic Lighting */}
        {/* @ts-ignore */}
        <ambientLight intensity={0.2} color="#0f1c15" />
        {/* @ts-ignore */}
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1} 
          castShadow 
          color="#c2d1cc"
        />
        {/* @ts-ignore */}
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#264033" />

        <ScrollControls pages={3} damping={0.3}>
            {/* Logic Layer */}
            <AtmosphereRig />

            {/* 3D Content Layer */}
            <Suspense fallback={null}>
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <Atmosphere />
                <FloatingRing />
                <Environment preset="city" /> 
            </Suspense>
            
            {/* @ts-ignore */}
            <fog attach="fog" args={['#e0f7fa', 5, 20]} />

            {/* DOM/UI Layer */}
            <Scroll html style={{ width: '100%' }}>
                {children}
            </Scroll>
        </ScrollControls>

      </Canvas>
    </div>
  );
};