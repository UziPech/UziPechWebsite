import React, { Suspense, ReactNode, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera, Stars, ScrollControls, Scroll } from '@react-three/drei';
import { HeroModel } from './HeroModel';
import { Atmosphere } from './Atmosphere';
import { AtmosphereRig } from './AtmosphereRig';
import { Ground } from './Ground';
import { Particulates } from './Particulates';
import * as THREE from 'three';

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
  // Ref for Stars to control opacity via AtmosphereRig
  const starsRef = useRef<THREE.Points>(null);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-forest-900">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 6, 12]} fov={50} />
        
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

        <ScrollControls pages={3} damping={0.2}>
            {/* Logic Layer - Drives Scene State */}
            <AtmosphereRig starsRef={starsRef} />

            {/* 3D Content Layer */}
            <Suspense fallback={null}>
                {/* Stars - Controlled by Rig */}
                <Stars 
                  ref={starsRef}
                  radius={100} 
                  depth={50} 
                  count={5000} 
                  factor={4} 
                  saturation={0} 
                  fade 
                  speed={1} 
                />
                
                <Atmosphere />
                
                {/* Hero Model: Procedural Liquid Sphere */}
                <HeroModel />
                
                {/* Ground Elements - Clean, no grids */}
                <Particulates />
                <Ground />
                
                <Environment preset="city" /> 
            </Suspense>
            
            {/* Fog - Initial args, but Color/Near/Far are strictly controlled by AtmosphereRig */}
            {/* @ts-ignore */}
            <fog attach="fog" args={['#e0f7fa', 5, 40]} />

            {/* DOM/UI Layer */}
            <Scroll html style={{ width: '100%' }}>
                {children}
            </Scroll>
        </ScrollControls>

      </Canvas>
    </div>
  );
};