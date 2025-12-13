import React from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

// Define colors for transition
const SKY_COLOR = new THREE.Color('#e0f7fa'); // Light Cyan / Sky
// STRICTLY MATCHES Ground.tsx color to create infinite horizon effect
const GROUND_COLOR = new THREE.Color('#0b1d15'); 

interface AtmosphereRigProps {
  starsRef: React.RefObject<THREE.Points>;
}

export const AtmosphereRig: React.FC<AtmosphereRigProps> = ({ starsRef }) => {
  const scroll = useScroll();
  const { scene, camera } = useThree();

  useFrame((state, delta) => {
    // 1. Get scroll offset (0 at top, 1 at bottom)
    const r1 = scroll.range(0, 1);
    
    // 2. Background Color Transition
    // Ensure background is a Color object before lerping
    if (!(scene.background instanceof THREE.Color)) {
      scene.background = new THREE.Color(SKY_COLOR);
    }
    // Lerp from Sky to Ground
    (scene.background as THREE.Color).lerpColors(SKY_COLOR, GROUND_COLOR, r1);
    
    // 3. Fog Transition
    // Starts light/far (Sky), becomes dense/dark (Ground)
    if (scene.fog) {
      scene.fog.color.copy(scene.background as THREE.Color);
      
      // Sky (0): Fog is far, barely visible
      // Ground (1): Fog is closer, creating atmosphere and hiding the floor edge
      // Decreased far plane at bottom to ensure seamless blend with background
      const fogNear = THREE.MathUtils.lerp(10, 5, r1); 
      const fogFar = THREE.MathUtils.lerp(40, 30, r1);
      
      // @ts-ignore - fog properties exist on Three.Fog
      scene.fog.near = fogNear;
      // @ts-ignore
      scene.fog.far = fogFar;
    }

    // 4. Camera Movement (Descent)
    // Start high (Y=6) and descend to Ground (Y=0)
    const targetY = THREE.MathUtils.lerp(6, 0, r1);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, targetY, 4, delta);
    
    // Maintain lookAt to center for stability
    camera.lookAt(0, 0, 0);

    // 5. Stars Fade Logic
    // Only visible in the dark section (bottom half)
    if (starsRef.current) {
        const mat = starsRef.current.material as THREE.PointsMaterial;
        // Start fading in after 50% scroll, fully visible at 90%
        const starOpacity = THREE.MathUtils.smoothstep(r1, 0.5, 0.9);
        
        if (mat) {
            mat.transparent = true;
            mat.opacity = starOpacity;
        }
    }
  });

  return null;
};