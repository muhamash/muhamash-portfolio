import HireMe from "@/components/pages/conatct/HireMe";
import dynamic from "next/dynamic";

const Footer = dynamic( () => import( "@/components/pages/home/footer/Footer" ) );
const SectionScrollLayout = dynamic( () => import( '@/components/layouts/SectionScrollLayout' ) );

export default async function ContactPage ()
{
    return (
        <>
            <SectionScrollLayout className={"min-h-screen sticky top-0 z-40 w-full bg-black text-white px-4 min-w-screen flex justify-between justify-center gap-10 items-center mx-auto backdrop-blur-sm py-10 mb-5"}>
                <div>
                    <HireMe/>
                </div>

                {/* slider */}
                <div className="md:block hidden">

                    
                </div>
            </SectionScrollLayout>
            <Footer />
        </>
    );
}