import Filter from "@/components/pages/projects/filterPage/Filter";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function FilterPage ({searchParams})
{
  const getSearchParams = await searchParams;
    
  if ( !getSearchParams?.page )
  {
    redirect("/projects?type=all&page=1");
  }
  
  return (
    <div className="relative flex items-center justify-between md:w-1/3 w-full h-full">
      <Suspense fallback={ <p>loading filter!!</p> }>
        <Filter />
      </Suspense>
    </div>
  );
}