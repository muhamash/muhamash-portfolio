import CardContainer from "@/components/animations/TiledCard/CardContainer";
import Link from "next/link";

export default async function ProjectsContainer ({data})
{

    // const size = useWindowSize();
    // console.log( data );
    return (
        <div className="flex flex-wrap gap-10 justify-center items-center w-full">
            {
                data && data?.map( ( d, i ) => (
                    <Link className="w-fit h-fit shadow-md rounded-[20px] shadow-black" href={`/projects/${i}`} key={i}>
                        <CardContainer src={ d?.image } name={ d?.title } height={ "280px" } width={ "520px" } />
                    </Link>
                ) )
            }
        </div>
    );
}