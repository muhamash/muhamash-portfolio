export default async function AllProjectsPage ( { searchParams } )
{
  const getSearchParams = await searchParams;
  console.log( getSearchParams );
  return (
    <div>
      All projects
    </div>
  );
}