"use client"

import dynamic from "next/dynamic";


const WaterShader = dynamic( () => import( "./Water" ) );

export default function WaterConatainer() {
  return (
    <div className="absolute opacity-70">
      <WaterShader/>
    </div>
  )
}
