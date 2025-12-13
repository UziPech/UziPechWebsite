import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

export const Particles: React.FC = () => {
  const scroll = useScroll();
  
  // Refs to access the underlying Three.js objects for performant animation
  const bgRef = useRef<THREE.Points>(null);
  const fgRef = useRef<THREE.Points>(null);

  // Define color palette as Three.js Color objects for lerping
  const colors = useMemo(() => ({
    top: new THREE.Color('#4a5568'),   // Dark subtle dust (Sky)
    bottom: new THREE.Color('#39ff14') // Neon Green (Digital Ground)
  }), []);

  useFrame(() => {
    // Get scroll progress (0 = Top, 1 = Bottom)
    const r = scroll.range(0, 1);
    
    // Calculate current color based on scroll position
    const currentColor = colors.top.clone().lerp(colors.bottom, r);

    // Apply color to Background Layer
    if (bgRef.current) {
        // Cast to any to bypass TS checks on union types (Material | Material[])
        const mat = bgRef.current.material as any;
        if (mat) {
             // Handle Sparkles ShaderMaterial (uses uniforms) or standard PointsMaterial
             if (mat.color && mat.color.isColor) {
                 mat.color.copy(currentColor);
             } else if (mat.uniforms?.color) {
                 mat.uniforms.color.value.copy(currentColor);
             }

            // Increase opacity as we go deeper
            const targetOpacity = THREE.MathUtils.lerp(0.4, 0.8, r);
            mat.opacity = targetOpacity;
            
            // Also update uniform if it exists (common in ShaderMaterials)
            if (mat.uniforms?.opacity) {
                mat.uniforms.opacity.value = targetOpacity;
            }
        }
    }

    // Apply color to Foreground Layer
    if (fgRef.current) {
        const mat = fgRef.current.material as any;
        if (mat) {
             if (mat.color && mat.color.isColor) {
                 mat.color.copy(currentColor);
             } else if (mat.uniforms?.color) {
                 mat.uniforms.color.value.copy(currentColor);
             }

            const targetOpacity = THREE.MathUtils.lerp(0.6, 1.0, r);
            mat.opacity = targetOpacity;

            if (mat.uniforms?.opacity) {
                mat.uniforms.opacity.value = targetOpacity;
            }
        }
    }
  });

  return (
    // @ts-ignore
    <group>
      {/* LAYER 1: Background Atmosphere
          High count, slow, small, spread wide */}
      <Sparkles 
        ref={bgRef}
        count={100}
        scale={[25, 25, 25]} // Wide distribution
        size={3}
        speed={0.4}
        opacity={0.5}
        color="#4a5568" // Initial color
        position={[0, 0, 0]}
      />

      {/* LAYER 2: Foreground "Life"
          Lower count, fast, large, close to camera */}
      <Sparkles 
        ref={fgRef}
        count={40}
        scale={[12, 12, 12]} // Concentrated around center
        size={6}
        speed={1.5} // Active/Alive feel
        opacity={0.8}
        noise={0.5} // Organic movement
        color="#4a5568" // Initial color
        position={[0, 0, 2]}
      />
    </group>
  );
};