import dynamic from "next/dynamic";

const GridContainer = dynamic(() => import("@/components/animations/bg/grid/GridContainer"));
const HireMeButton = dynamic(() => import("@/components/common/HireMeButton"));
const Resume = dynamic(() => import("@/components/common/Resume"));
const GlitchText = dynamic(() => import("../../animations/glitch/Glitch"));
const SplitTextContainer = dynamic(() => import("../../animations/splitText/SplitTextContainer"));
const CodeEditor = dynamic(() => import("../AnimatedCode"));
const AnimatedText = dynamic(() => import("../AnimatedText"));
const Socialicons = dynamic(() => import("./Stamp"));

// export const dynamic = "force-static"; 

export default async function HeaderComponent() {
    return (
        <div className="relative z-10 min-h-screen min-w-screen flex md:flex-row flex-col md:justify-between justify-center gap-10 items-center mx-auto py-20 mb-10">
            
            <div className="absolute top-0 md:-left-20 w-screen h-screen -z-20 opacity-30">
                <GridContainer />
            </div>
            
            <div className="absolute md:-left-20 -left-[17px] top-[70px]">
                <Socialicons />
            </div>

            <div className="w-[300px] md:w-[500px] h-fit flex flex-col gap-3 text-left items-center md:items-start justify-center">
                <div className="h-fit">
                    {/* animation */}
                    <SplitTextContainer text="Assalamu alaikum, I am Ashraful" />
                </div>
                {/* animation */}
                <AnimatedText />

                <div className="flex flex-row gap-5 my-5 font-edu">
                    <HireMeButton />
                    <Resume />
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <div className="text-center w-fit mx-auto flex gap-[10px] items-center">
                    <p className="text-white text-[28px] md:text-[35px] font-extrabold font-outfit">Creative</p>
                    {/* animation */}
                    <GlitchText
                        texts={["Thinking!!", "Coding!!", "Features!!", "Design!!!"]}
                        mainClassName="px-1 font-nunito md:px-2 bg-cyan-300 text-black overflow-hidden py-1 md:py-1 justify-center rounded-lg text-[16px] font-arsenal_SC"
                        staggerFrom="last"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                </div>

                {/* animation */}
                <CodeEditor />
            </div>
        </div>
    );
}
