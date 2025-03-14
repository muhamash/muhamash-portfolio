import dynamic from "next/dynamic";

const Footer = dynamic( () => import( "@/components/pages/home/footer/Footer" ) );
const SectionScrollLayout = dynamic( () => import( '@/components/layouts/SectionScrollLayout' ) );

export default async function ContactPage ()
{
    return (
        <>
            <SectionScrollLayout className={"min-h-screen w-screen bg-white flex items-start justify-center py-24 md:px-20 px-10"}>
                <p className="text-rose-600 text-center">Hello world</p>
            </SectionScrollLayout>
            <Footer />
        </>
    );
}