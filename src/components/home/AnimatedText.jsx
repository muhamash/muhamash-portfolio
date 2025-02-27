"use client";

import Typewriter from 'typewriter-effect';

const texts = [
  "A professional full stack web developer",
  "Creating beautiful websites!!",
  "Building scalable applications!!",
  "Writing Next.js Optimized Code!!",
  "Enhancing Performance...",
];

export default function AnimatedText() {

  return (
    <div
      className="font-semibold font-mono w-full bg-clip-text flex h-md:[105px] h-[60px] text-xl text-violet-200 source_code_pro_54d47b2a-module__pcAarq__className font-thin"
    >
      <Typewriter
        options={ {
          strings: texts,
          autoStart: true,
          loop: true,
          pauseFor: 10,
          deleteSpeed: 10,
        } }
      />
    </div>
  );
}