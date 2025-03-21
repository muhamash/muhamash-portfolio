import dynamic from "next/dynamic";

const ParticleBackground = dynamic( () => import( "@/components/animations/bg/gasap/CanvaGsap" ) );
const DemoSlide = dynamic(()=> import("@/components/pages/conatct/DemoSlide"));
const HireMe = dynamic(()=> import("@/components/pages/conatct/HireMe"));
const Footer = dynamic( () => import( "@/components/pages/home/footer/Footer" ) );
const SectionScrollLayout = dynamic( () => import( '@/components/layouts/SectionScrollLayout' ) );
const ParticlesContainer = dynamic(
    () => import( "@/components/animations/bg/particles/ParticlesContainer" ) );

export default async function ContactPage ()
{
    return (
        <>
            <SectionScrollLayout className={ "min-h-screen sticky z-40 w-full text-black px-4 md:p-0 md:m-0 min-w-screen flex md:flex-row flex-col-reverse justify-between justify-center items-center mx-auto backdrop-blur-sm overflow-hidden bg-white" }>


                <HireMe />

                {/* slider */ }
                <div className="relative md:w-1/2 hidden md:flex items-center justify-center  h-full bg-gray-950">

                    <div className="absolute  w-full h-full overflow-hidden flex items-center justify-center">
                        <ParticlesContainer />
                    </div>
                    <DemoSlide />
                </div>

            </SectionScrollLayout>
            <Footer />
        </>
    );
}