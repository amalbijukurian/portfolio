import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { MorphShaderMaterial } from '../shaders/MorphShader.js';

export default function ParticleScene({ activeState }) {
  const meshRef = useRef();
  const count = 25000; // Particle density

  const [posA, posB, posC] = useMemo(() => {
    const positionsA = new Float32Array(count * 3);
    const positionsB = new Float32Array(count * 3);
    const positionsC = new Float32Array(count * 3); 

    // Calculate grid parameters for Shape C
    const gridSize = Math.floor(Math.sqrt(count)); 

    for (let i = 0; i < count; i++) {
      // -------------------------------------------------------------
      // Shape A: Perfect Hollow Ring (Hone the thickness and radii)
      // -------------------------------------------------------------
      const angleA = (i / count) * Math.PI * 2;
      const radiusA = 2.2 + (Math.random() - 0.5) * 0.15; 
      positionsA[i * 3]     = Math.cos(angleA) * radiusA;
      positionsA[i * 3 + 1] = Math.sin(angleA) * radiusA;
      positionsA[i * 3 + 2] = (Math.random() - 0.5) * 0.1;

      // -------------------------------------------------------------
      // Shape B: Expanding Vortex Spiral 
      // -------------------------------------------------------------
      const radiusB = Math.sqrt(Math.random()) * 4.5; 
      const spinB = radiusB * 1.8;
      const angleB = (i / count) * Math.PI * 2 + spinB;
      positionsB[i * 3]     = Math.cos(angleB) * radiusB;
      positionsB[i * 3 + 1] = Math.sin(angleB) * radiusB;
      positionsB[i * 3 + 2] = (Math.random() - 0.5) * 0.8;

      // -------------------------------------------------------------
      // Shape C: Flat Geometric Data Plane (The Matrix Grid)
      // -------------------------------------------------------------
      const xGrid = i % gridSize;
      const yGrid = Math.floor(i / gridSize);
      
      // Map grid nodes uniformly between -4.0 and +4.0 across dimensions
      positionsC[i * 3]     = ((xGrid / gridSize) - 0.5) * 8.0;
      positionsC[i * 3 + 1] = ((yGrid / gridSize) - 0.5) * 8.0;
      positionsC[i * 3 + 2] = -1.0; // Recessed slightly backward on Z depth plane
    }
    
    return [positionsA, positionsB, positionsC];
  }, []);

  useFrame((state) => {
    const { clock } = state;
    const material = meshRef.current.material;
    
    // Pass elapsed running execution timeline to GPU
    material.uniforms.uTime.value = clock.getElapsedTime();

    // Mapping activeStates 0, 1, 2, 3 smoothly onto targetProgress values
    let targetProgress = 0.0;
    if (activeState === 1) targetProgress = 0.5; // Turbulent/unravelling setup
    if (activeState === 2) targetProgress = 1.0; // Pure Vortex
    if (activeState === 3) targetProgress = 2.0; // Structured Data Matrix Plane

    // Smoothly interpolate uniform step towards mapped scalar value
    material.uniforms.uProgress.value = THREE.MathUtils.lerp(
      material.uniforms.uProgress.value,
      targetProgress,
      0.05
    );

    // Continuous ambient orbital drift (deactivates progressively as it hits the terminal grid)
    const driftFactor = THREE.MathUtils.mapLinear(material.uniforms.uProgress.value, 1.0, 2.0, 1.0, 0.0);
    const clampedDrift = Math.max(0, driftFactor);
    meshRef.current.rotation.z = clock.getElapsedTime() * 0.02 * clampedDrift;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        {/* Basic source positional coordinates (Shape A) */}
        <bufferAttribute attach="attributes-position" args={[posA, 3]} />
        
        {/* Target structural configurations mapped by custom vertex shader arrays */}
        <bufferAttribute attach="attributes-targetPosition" args={[posB, 3]} />
        <bufferAttribute attach="attributes-matrixPosition" args={[posC, 3]} />
      </bufferGeometry>
      <shaderMaterial
        args={[MorphShaderMaterial]}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}