"use client"

import dynamic from "next/dynamic";

const WaterShader = dynamic( () => import( "./Water" ) );

export default function WaterConatainer() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden opacity-70 z-0">
      <WaterShader/> 
    </div>
  )
}