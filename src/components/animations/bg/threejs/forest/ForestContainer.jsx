"use client";

import dynamic from "next/dynamic";

const MonsterForestAnimation = dynamic( () => import( "./Forest" ), { ssr: false } );

export default function ForestContainer() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
      <MonsterForestAnimation/>
    </div>
  )
}