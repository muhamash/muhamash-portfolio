import Footer from "@/components/pages/home/footer/Footer";
import dynamic from "next/dynamic";

const ClientLayout = dynamic( () => import( '@/components/layouts/AboutLayout' ) );
const SectionScrollLayout = dynamic( () => import( '@/components/layouts/SectionScrollLayout' ) );

export default async function ProjectLayout ( { filters, allProjects } )
{
  return (
    <>
      <SectionScrollLayout className={ "flex md:flex-row flex-col justify-center items-center w-full h-screen py-20 bg-white px-10" }>
        { filters }
        { allProjects }
      </SectionScrollLayout>
      <Footer />
    </>
  );
}