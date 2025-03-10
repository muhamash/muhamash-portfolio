import Footer from "@/components/pages/home/footer/Footer";
import ActiveFilters from "@/components/pages/projects/filterPage/ActiveFilters";
import ProjectHeader from "@/components/pages/projects/ProjectHeader";
import dynamic from "next/dynamic";

const ClientLayout = dynamic( () => import( '@/components/layouts/AboutLayout' ) );
const SectionScrollLayout = dynamic( () => import( '@/components/layouts/SectionScrollLayout' ) );

export default async function ProjectLayout ( { filters, allProjects , children} )
{
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full pt-[100px] bg-gradient-to-r from-slate-600 via-slate-600 to-cyan-900 gap-10">
      <ProjectHeader />

      <ActiveFilters/>
      {/* css circle */ }
      <div className="bg-violet-950 bg-opacity-50 h-[1000px] w-[1000px] rounded-full absolute blur-3xl -top-40 -right-40 z-0 overflow-hidden hover:blur-xl">

      </div>

      <SectionScrollLayout className={ "flex md:flex-row flex-col justify-center items-start w-full h-full pb-20 px-10 gap-10" }>
        { filters }
        { allProjects }
        {/* {children} */ }
      </SectionScrollLayout>

      <div className="bg-green-950 bg-opacity-50 h-[1000px] w-[1000px] rounded-full absolute blur-3xl bottom-20 -left-40 z-0 overflow-hidden hover:blur-xl">

      </div>
      <Footer />
    </div>
  );
}