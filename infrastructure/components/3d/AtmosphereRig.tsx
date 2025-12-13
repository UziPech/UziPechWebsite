import React, { useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

// Define colors for transition
const SKY_COLOR = new THREE.Color('#e0f7fa'); // Pale Cyan / Mist (Start)
const GROUND_COLOR = new THREE.Color('#0f1c15'); // Deep Forest (End)

export const AtmosphereRig: React.FC = () => {
  const scroll = useScroll();
  const { scene, camera } = useThree();

  useFrame((state, delta) => {
    // 1. Get scroll offset (0 to 1)
    const r1 = scroll.range(0, 1);
    
    // 2. Background Color & Fog Transition
    // Smooth Lerp between sky and ground colors
    scene.background = scene.background instanceof THREE.Color 
      ? scene.background 
      : new THREE.Color();
      
    scene.background.lerpColors(SKY_COLOR, GROUND_COLOR, r1);
    
    // Update fog to match background for seamless atmosphere
    if (scene.fog) {
      scene.fog.color.copy(scene.background);
      
      // Fog density changes as we descend
      // Near top (0): Fog is moderate
      // Near bottom (1): Fog opens up slightly or changes distance
      const fogNear = THREE.MathUtils.lerp(5, 8, r1); 
      const fogFar = THREE.MathUtils.lerp(20, 35, r1);
      scene.fog.near = fogNear;
      scene.fog.far = fogFar;
    }

    // 3. Camera Movement (Descent)
    // Start high (Y=6) and descend to center/below (Y=0 or -2)
    const targetY = THREE.MathUtils.lerp(6, -1, r1);
    
    // Smooth damping for cinematic camera motion
    camera.position.y = THREE.MathUtils.damp(camera.position.y, targetY, 4, delta);
    
    // Optional: Camera looks slightly down initially, then levels out?
    // For now, look at center
    camera.lookAt(0, 0, 0);
  });

  return null;
};