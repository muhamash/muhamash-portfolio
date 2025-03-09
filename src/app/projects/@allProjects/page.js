import ProjectCard from "@/components/pages/projects/filterPage/ProjectCard";
import { getAllProjects } from "@/utils/functions/product";

export default async function AllProjectsPage ( { searchParams } )
{
  const getSearchParams = await searchParams;
  console.log( getSearchParams );

  const projectsData = await getAllProjects( getSearchParams?.type, getSearchParams?.tech, getSearchParams?.page );
  // console.log( projectsData );

  return (
    <div className="flex items-center justify-between md:w-2/3 w-full">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 w-full">
        {
          projectsData?.data?.map( ( project, i ) => (
            <ProjectCard key={ i } project={ project } index={ i } />
          ) )
        }
      </div>
    </div>
  );
}