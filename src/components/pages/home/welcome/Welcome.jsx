import dynamic from "next/dynamic";
import ScrollButton from "../../landing/ScrollDown";

const TextContainerBlackHole = dynamic(
    () => import( "@/components/animations/bg/threejs/text/TextContainerBlackHole" ) );
const Socialicons = dynamic( () => import( "../header/Stamp" ) );
const ParticlesContainer = dynamic(
    () => import( "@/components/animations/bg/particles/ParticlesContainer" ) );

export default async function Welcome() {
    return (
        <div className="relative min-h-screen min-w-screen flex md:flex-row flex-col md:justify-between justify-center gap-10 items-center mx-auto">
      
            <div className=" w-screen h-screen">
                <TextContainerBlackHole />
            </div>

            <div className="absolute flex flex-col gap-1 md:bottom-20 md:right-0 md:left-0 bottom-[60px] text-center z-30">
                <p className="text-[#B069DB] text-2xl md:text-5xl font-arsenal font-semibold">Md Ashraful Alam</p>
                <p className="text-violet-400 font-nunito font-semibold">Full stack Software Engineer</p>
                <p className="text-violet-300 font-nunito font-semibold">muhammad-ashraful@outlook.com</p>

                <div className="translate-y-10">
                    <ScrollButton />
                </div>
            </div>
        </div>
    );
}