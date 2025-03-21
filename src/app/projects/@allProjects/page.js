import ProjectCard from "@/components/pages/projects/filterPage/ProjectCard";
import Pagination from "@/components/pages/projects/Pagination";
import { getAllProjects } from "@/utils/functions/product";

export default async function AllProjectsPage ( { searchParams } )
{
  const getSearchParams = await searchParams;
  // console.log( getSearchParams );

  const projectsData = await getAllProjects( getSearchParams?.type, getSearchParams?.tech, getSearchParams?.page );
  // console.log( projectsData );

  return (
    <div className="flex flex-col items-center justify-between gap-20 w-full h-full">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5 w-full h-full">
        {
          projectsData?.data?.map( ( project, i ) => (
            <ProjectCard key={ i } project={ project } index={ i } />
          ) )
        }
      </div>
      {
          projectsData?.data?.length === 0 && (
            <div className="flex flex-col items-center justify-between gap-20 w-full h-full mx-auto">
              <div className="loaderNotFound"></div>
              <p className="text-2xl font-edu font-semibold text-rose-700 bg-slate-400 p-2 rounded-md">May be the user is working harder, Stay tuned! he will update his latest projects on his website ☺️</p>
            </div>
          )
        }
      <Pagination totalPages={ projectsData?.pageData?.totalPages } />
    </div>
  );
}