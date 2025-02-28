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
      className=" font-thin w-full bg-clip-text flex h-md:[105px] h-[60px] md:text-[16px] text-[14px] text-violet-200 font-code"
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