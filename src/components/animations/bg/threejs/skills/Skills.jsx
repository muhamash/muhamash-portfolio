"use client";

import { Instance, Instances, OrbitControls, Sparkles, shaderMaterial } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import Noise from 'noisejs';
import { useRef } from 'react';
import * as THREE from 'three';

// Remove TypeScript type annotations
const SkillOrbMaterial = new THREE.MeshPhysicalMaterial({
  metalness: 0.3,
  roughness: 0.2,
  transparent: true,
  opacity: 0.9,
  emissive: new THREE.Color(0x33aaff),
  emissiveIntensity: 0.2,
})

const TerrainShaderMaterial = shaderMaterial(
  { time: 0, color1: new THREE.Color('#6B46C1'), color2: new THREE.Color('#4299E1') },
  `
    varying vec2 vUv;
    varying vec3 vPosition;
    void main() {
      vUv = uv;
      vPosition = position;
      gl_Position = projectionMatrix * modelMatrix * viewMatrix * vec4(position, 1.0);
    }
  `,
  `
    uniform float time;
    uniform vec3 color1;
    uniform vec3 color2;
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      float noise = sin(vPosition.x * 2.0 + time) * cos(vPosition.z * 2.0 + time);
      vec3 color = mix(color1, color2, smoothstep(-1.0, 1.0, noise));
      gl_FragColor = vec4(color, 0.15 + noise * 0.1);
    }
  `
)

function FloatingTerrain() {
  const meshRef = useRef() // Remove TypeScript type annotation
  const noise = new Noise(Math.random())
  
  useFrame(({ clock }) => {
    const material = meshRef.current.material
    material.time = clock.getElapsedTime() * 0.5
  })

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[20, 20, 50, 50]} />
      <TerrainShaderMaterial />
    </mesh>
  )
}

function SkillOrbs() {
  const skills = ['React', 'Three.js', 'Node.js', 'TypeScript', 'AWS', 'GraphQL']
  return (
    <Instances range={100} material={SkillOrbMaterial}>
      <sphereGeometry args={[0.3, 32, 32]} />
      {skills.map((_, i) => (
        <group key={i}>
          <Instance 
            position={[
              Math.sin(i) * 4,
              Math.cos(i * 2) * 2 + 3,
              Math.cos(i) * 4
            ]}
          />
          <pointLight 
            intensity={0.5} 
            color="#4299E1" 
            position={[
              Math.sin(i) * 4,
              Math.cos(i * 2) * 2 + 3,
              Math.cos(i) * 4
            ]}
          />
        </group>
      ))}
    </Instances>
  )
}

function Particles() {
  const particles = useRef()
  const count = 500
  const positions = new Float32Array(count * 3)
  
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10
    positions[i + 1] = Math.random() * 5
    positions[i + 2] = (Math.random() - 0.5) * 10
  }

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    particles.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={particles} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.05]}>
        <instancedBufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </sphereGeometry>
      <meshBasicMaterial color="#63B3ED" transparent opacity={0.6} />
    </instancedMesh>
  )
}

export default function SkillsScene() {
  return (
    <div className="w-full h-screen fixed top-0 left-0">
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <FloatingTerrain />
        <SkillOrbs />
        <Particles />
        <Sparkles count={100} speed={0.1} size={2} color="#4299E1" />
        
        <OrbitControls 
          enableZoom={false} 
          enableRotate={false}
          enablePan={true}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  )
}