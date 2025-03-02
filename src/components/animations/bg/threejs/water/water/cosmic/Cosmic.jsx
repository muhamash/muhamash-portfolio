"use client";

import { shaderMaterial } from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const CosmicShaderMaterial = shaderMaterial(
  {
    time: 0,
    resolution: new THREE.Vector2(),
  },
  `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  `
  varying vec2 vUv;
  uniform float time;
  void main() {
    vec2 uv = vUv - 0.5;
    float wave = sin(uv.x * 10.0 + time * 2.0) * 0.1;
    float starfield = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
    starfield = step(0.995, starfield);
    vec3 color = vec3(0.0);
    color.r = sin(uv.x * 10.0 + time) * 0.5 + 0.5 + wave;
    color.g = cos(uv.y * 10.0 + time) * 0.5 + 0.5 + wave;
    color.b = sin(uv.x * uv.y * 5.0 + time) * 0.5 + 0.5 + wave;
    color += vec3(starfield);
    gl_FragColor = vec4(color, 1.0);
  }
  `
);

extend({ CosmicShaderMaterial });

const CosmicBackground = () => {
  const materialRef = useRef();
  useFrame(({ clock }) => {
    materialRef.current.time = clock.getElapsedTime();
  });

  return (
    <mesh>
      <planeGeometry args={[5, 5, 32, 32]} />
      <cosmicShaderMaterial ref={materialRef} />
    </mesh>
  );
};

export default function App() {
  return (
    <Canvas>
      <CosmicBackground />
    </Canvas>
  );
}