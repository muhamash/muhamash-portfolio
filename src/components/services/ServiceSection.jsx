"use client"

import GlitchText from "../animations/glitch/Glitch";
import TechSlider from "../animations/sliders/techStacks/TechSlider";

export default function ServiceSection() {
  return (
    <div className="md:my-[120px] my-[300px]">
      

      <div>
        <div className="text-center w-fit mx-auto flex gap-3 items-center">
          <p className="text-white text-[39px] font-extrabold">Creative</p>
          <GlitchText
            texts={ [ 'Thinking!!', 'Coding!!', 'Features!!', 'Design!!!' ] }
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={ "last" }
            initial={ { y: "100%" } }
            animate={ { y: 0 } }
            exit={ { y: "-120%" } }
            staggerDuration={ 0.025 }
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={ { type: "spring", damping: 30, stiffness: 400 } }
            rotationInterval={ 2000 } />
        </div>
        <TechSlider />
      </div>
    </div>
  );
}
