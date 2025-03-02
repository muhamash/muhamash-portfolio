"use client";

import dynamic from "next/dynamic";

const MonsterForestAnimation = dynamic( () => import( "./Forest" ) );

export default function ForestContainer() {
  return (
    <div className="-z-10">
      <MonsterForestAnimation/>
    </div>
  )
}
