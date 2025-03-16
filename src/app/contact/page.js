import HireMe from "@/components/pages/conatct/HireMe";
import dynamic from "next/dynamic";

const Footer = dynamic( () => import( "@/components/pages/home/footer/Footer" ) );
const SectionScrollLayout = dynamic( () => import( '@/components/layouts/SectionScrollLayout' ) );

export default async function ContactPage ()
{
    return (
        <>
            <SectionScrollLayout className={ "min-h-screen sticky z-40 w-full bg-white text-black px-4 md:p-0 md:m-0 min-w-screen flex justify-between justify-center items-center mx-auto backdrop-blur-sm" }>
                <HireMe />

                {/* slider */ }
                <div className="hidden w-1/2 bg-red-300 min-h-screen h-full py-20 md:flex items-center justify-center">
                    
                    <p>hello</p>
                    
                </div>
            </SectionScrollLayout>
            <Footer />
        </>
    );
}