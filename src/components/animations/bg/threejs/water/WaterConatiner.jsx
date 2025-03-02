"use client" 

import dynamic from 'next/dynamic';
import Head from 'next/head';

const WaterShader = dynamic(
    () => import( './Water.jsx' ),
    { ssr: false }
);

export default function WaterShaderPage() {
  return (
    <>
      <Head>
        <title>Three.js Water Shader by muhamash</title>
        <meta name="description" content="Water shader demo using Three.js in Next.js" />
      </Head>
      
      <WaterShader />
    </>
  );
}