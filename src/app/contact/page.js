import dynamic from "next/dynamic";

const ParticleBackground = dynamic( () => import( "@/components/animations/bg/gasap/CanvaGsap" ) );
const DemoSlide = dynamic(()=> import("@/components/pages/conatct/DemoSlide"));
const HireMe = dynamic(()=> import("@/components/pages/conatct/HireMe"));
const Footer = dynamic( () => import( "@/components/pages/home/footer/Footer" ) );
const SectionScrollLayout = dynamic( () => import( '@/components/layouts/SectionScrollLayout' ) );

export default async function ContactPage ()
{
    return (
        <>
            <SectionScrollLayout className={ "min-h-screen sticky z-40 w-full bg-white text-black px-4 md:p-0 md:m-0 min-w-screen flex md:flex-row flex-col-reverse justify-between justify-center items-center mx-auto backdrop-blur-sm overflow-hidden" }>
                {/* <ParticleBackground/> */ }


                <HireMe />

                {/* slider */ }
                <div className="relative md:w-1/2 hidden md:flex items-center justify-center  h-full">
                    <ParticleBackground /> 
                    <DemoSlide />
                </div>

            </SectionScrollLayout>
            <Footer />
        </>
    );
}