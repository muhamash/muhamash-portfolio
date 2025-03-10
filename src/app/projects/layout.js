import Footer from "@/components/pages/home/footer/Footer";
import dynamic from "next/dynamic";

const ClientLayout = dynamic( () => import( '@/components/layouts/AboutLayout' ) );
const SectionScrollLayout = dynamic( () => import( '@/components/layouts/SectionScrollLayout' ) );

export default async function ProjectLayout ( { filters, allProjects , children} )
{
  return (
    <div className="flex flex-col items-center justify-center w-full h-full pt-[100px] bg-gradient-to-r from-slate-600 via-slate-600 to-cyan-900">
      <div>
          
      </div>

      <SectionScrollLayout className={ "flex md:flex-row flex-col justify-center items-start w-full h-full py-20 px-10 gap-10" }>
        { filters }
        { allProjects }
        {/* {children} */ }
      </SectionScrollLayout>
      <Footer />
    </div>
  );
}