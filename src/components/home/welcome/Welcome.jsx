import dynamic from "next/dynamic";

const TextContainerBlackHole = dynamic(
    () => import( "@/components/animations/bg/threejs/text/TextContainerBlackHole" ) );
const Socialicons = dynamic( () => import( "../header/Stamp" ) );
const ParticlesContainer = dynamic(
    () => import( "@/components/animations/bg/particles/ParticlesContainer" ) );

export default async function Welcome() {
    return (
        <div className="relative min-h-screen min-w-screen flex md:flex-row flex-col md:justify-between justify-center gap-10 items-center mx-auto py-20 mb-10">
      
            {/* Background animations */ }
            <div className="absolute -z-50 w-screen h-screen pointer-events-none">
                <ParticlesContainer />
            </div>
      
            <div className="absolute -z-50 top-0 md:-left-20 w-screen h-screen font-arsenal">
                <TextContainerBlackHole />
            </div>

            <div className="absolute flex flex-col gap-1 md:bottom-20 md:right-0 md:left-0  bottom-10 text-center">
                <p className="text-yellow-300 text-2xl md:text-5xl font-edu font-bold">Md Ashraful Alam</p>
                <p className="text-yellow-100 font-arsenal font-semibold">Full stack Software Engineer</p>
                <p className="text-yellow-100 font-arsenal font-semibold">muhammad-ashraful@outlook.com</p>
            </div>
        </div>
    );
}