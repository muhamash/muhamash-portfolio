export default async function ProjectDetailsPage ( { params } )
{
    const projectParams = await params;
    console.log( projectParams );


    
    return (
        <div className="bg-gray-200 text-black">
            {projectParams?.id}
        </div>
    );
}
