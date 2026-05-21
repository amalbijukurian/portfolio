import * as THREE from 'three';

export const MorphShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uProgress: { value: 0 }, // Ranges from 0.0 (Circle) -> 1.0 (Vortex) -> 2.0 (Matrix Grid)
    uColor: { value: new THREE.Color('#10b981') } // Emerald Green
  },
  
  vertexShader: `
    uniform float uTime;
    uniform float uProgress;
    
    attribute vec3 targetPosition; // Shape B: Vortex
    attribute vec3 matrixPosition; // Shape C: Grid Matrix
    
    varying vec3 vPosition;

    // Simple pseudo-random/noise function for procedural turbulence
    float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    void main() {
        vec3 mixedPosition;
        
        // Piecewise interpolation based on the scroll progress uniform
        if (uProgress <= 1.0) {
            // Section 1 to 3: Morph from Circle (0.0) to Vortex (1.0)
            mixedPosition = mix(position, targetPosition, uProgress);
        } else {
            // Section 3 to 4: Morph from Vortex (1.0) to Matrix Grid (2.0)
            // (uProgress - 1.0) normalizes the range back to 0.0 - 1.0 for the mix function
            mixedPosition = mix(targetPosition, matrixPosition, uProgress - 1.0);
        }
        
        // Add organic micro-movements so the mesh feels "alive"
        float noise = hash(mixedPosition.xy);
        
        // We progressively scale down the turbulence as it approaches the flat matrix grid
        // to make the final terminal state look stable and precise
        float turbulenceFactor = smoothstep(2.0, 1.2, uProgress); 
        
        mixedPosition.x += sin(mixedPosition.y + uTime * 1.5) * 0.04 * turbulenceFactor;
        mixedPosition.y += cos(mixedPosition.x + uTime * 1.5) * 0.04 * turbulenceFactor;
        mixedPosition.z += sin(uTime + noise) * 0.05 * turbulenceFactor;

        vec4 modelPosition = modelMatrix * vec4(mixedPosition, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        
        gl_Position = projectionMatrix * viewPosition;
        
        // Size attenuation: closer particles appear slightly larger
        gl_PointSize = 25.0 / -viewPosition.z;
    }
  `,

  fragmentShader: `
    uniform vec3 uColor;

    void main() {
        // Reshape square pixels into smooth circular points
        float distanceToCenter = length(gl_PointCoord - vec2(0.5));
        if (distanceToCenter > 0.5) discard;
        
        // Produce a soft glowing core effect
        float strength = 0.05 / distanceToCenter;
        strength = pow(strength, 2.0);

        gl_FragColor = vec4(uColor * strength, 1.0);
    }
  `
};