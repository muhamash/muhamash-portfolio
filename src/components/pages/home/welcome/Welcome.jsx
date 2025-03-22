import dynamic from "next/dynamic";
import ScrollButton from "../../landing/ScrollDown";

const TextContainerBlackHole = dynamic(
    () => import( "@/components/animations/bg/threejs/text/TextContainerBlackHole" ) );
const Socialicons = dynamic( () => import( "../header/Stamp" ) );
const ParticlesContainer = dynamic(
    () => import( "@/components/animations/bg/particles/ParticlesContainer" ) );
const HireMeButton = dynamic( () => import( "@/components/common/HireMeButton" ) );
const Resume = dynamic( () => import( "@/components/common/Resume" ) );

export default async function Welcome() {
    return (
        <div className="relative h-screen min-w-screen w-full flex md:flex-row flex-col md:justify-between justify-center gap-10 items-center mx-auto bg-black">
      
            <div className="w-screen h-screen -translate-y-20">
                <TextContainerBlackHole />
            </div>

            <div className="absolute flex flex-col justify-center items-center gap-1 md:bottom-10 md:right-0 md:left-0 bottom-[50px] text-center z-30">
                <p className="text-[#B069DB] text-2xl md:text-5xl font-arsenal font-semibold">Md Ashraful Alam</p>
                <p className="text-violet-400 font-nunito font-semibold">Full stack Software Engineer</p>
                <p className="text-violet-300 font-nunito font-semibold">muhammad-ashraful@outlook.com</p>

                <div className="flex gap-5 font-edu mt-3">
                    <HireMeButton />
                    <Resume />
                </div>
                <div className="translate-y-5">
                    <ScrollButton />
                </div>
            </div>
        </div>
    );
}