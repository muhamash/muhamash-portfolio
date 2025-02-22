"use client"

import ScrollVelocity from "./Tech";

export default function TechSlider() {
  return (
    <div className="w-screen px-4 py-8">
      <ScrollVelocity
        velocity={100}
        className="min-w-[50%] px-2" // Controls card width for 2 columns
        scrollerClassName="gap-4" // Space between cards
        numCopies={8} // Increased copies for better continuity
        parallaxClassName="w-full"
      >
        <div className="card bg-white p-6 rounded-xl shadow-lg h-48 flex items-center justify-center">
          <h3 className="text-2xl font-bold">React</h3>
        </div>
        <div className="card bg-white p-6 rounded-xl shadow-lg h-48 flex items-center justify-center">
          <h3 className="text-2xl font-bold">TypeScript</h3>
        </div>
        <div className="card bg-white p-6 rounded-xl shadow-lg h-48 flex items-center justify-center">
          <h3 className="text-2xl font-bold">Next.js</h3>
        </div>
        <div className="card bg-white p-6 rounded-xl shadow-lg h-48 flex items-center justify-center">
          <h3 className="text-2xl font-bold">Node.js</h3>
        </div>
        <div className="card bg-white p-6 rounded-xl shadow-lg h-48 flex items-center justify-center">
          <h3 className="text-2xl font-bold">Tailwind CSS</h3>
        </div>
        <div className="card bg-white p-6 rounded-xl shadow-lg h-48 flex items-center justify-center">
          <h3 className="text-2xl font-bold">GraphQL</h3>
        </div>
      </ScrollVelocity>
    </div>
  );
}