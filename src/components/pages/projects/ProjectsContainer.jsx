import CardContainer from "@/components/animations/TiledCard/CardContainer";
import dynamic from "next/dynamic";
import Link from "next/link";

const Pagination = dynamic( () => import( "@/components/pages/projects/Pagination" ) );

export default async function ProjectsContainer ({projectPromise})
{

    const projects = await projectPromise;
    // const size = useWindowSize();
    // console.log( projects );
    return (
        <div className="flex flex-col gap-10 justify-center items-center">
            <div className="flex flex-wrap gap-10 justify-center items-center w-full">
                {
                    projects?.data?.map( ( d, i ) => (
                        <Link className="w-fit h-fit shadow-md rounded-[20px] shadow-black" href={ `/projects/${i}` } key={ i }>
                            <CardContainer src={ d?.image } name={ d?.title } height={ "280px" } width={ "520px" } />
                        </Link>
                    ) )
                }
            </div>

            <Pagination totalPages={ projects?.pageData?.totalPages } />
        </div>
    );
}