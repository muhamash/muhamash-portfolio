import Footer from "@/components/pages/home/footer/Footer";
import dynamic from "next/dynamic";

const ClientLayout = dynamic( () => import( '@/components/layouts/AboutLayout' ) );
const SectionScrollLayout = dynamic( () => import( '@/components/layouts/SectionScrollLayout' ) );

export default async function ProjectLayout ( { filters, allProjects , children} )
{
  return (
    <>
      <SectionScrollLayout className={ "flex md:flex-row flex-col justify-center items-start w-full h-full py-20 bg-white px-10 gap-10" }>
        { filters }
        { allProjects }
        {/* {children} */}
      </SectionScrollLayout>
      <Footer />
    </>
  );
}