"use client";

import { projects } from "@/utils/demo/projectsDemo";
import { useWindowSize } from "@uidotdev/usehooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";
import { Button } from "../ui/button";
import ProjectFilter from "./Filters";

export default function Filter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 500;

  const typeParam = searchParams.get("type") || "all";
  const techParam = searchParams.get("tech");
  const selectedTech = techParam ? techParam.split(",") : [];

  // Memoized filtered projects to prevent unnecessary re-renders
  const filteredProjects = useMemo( () =>
  {
    return projects.filter( ( project ) =>
    {
      if ( typeParam !== "all" && project.type !== typeParam ) return false;
      if ( selectedTech.length > 0 )
      {
        return selectedTech.every( ( tech ) =>
          project.technologies.some( ( t ) => t.name === tech )
        );
      }
      return true;
    } );
  }, [ typeParam, selectedTech ] );

  const updateSearchParams = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value && value.length > 0) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };
  
  // console.log( searchParams );

  const handleClearFilters = () =>
  {
    const params = new URLSearchParams( searchParams.toString() );
    params.delete( "tech" );
    params.set( "type", "all" );

    router.replace( `${pathname}?${params.toString()}`, { scroll: false } );
  };

  return (
    <div className="w-full h-full flex flex-col gap-5  backdrop-blur-sm rounded-[8px]">

      { !isMobile && (
        <div className="w-fit rounded-[8px]">
          <div className="sticky top-24 bg-sky-950 p-4 rounded-[8px] border-slate-600 border-[0.5px]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold font-arsenal text-[20px] text-violet-100">Filters</h2>

              { ( typeParam !== "all" || selectedTech.length > 0 ) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={ handleClearFilters }
                  className="text-xs text-rose-50 h-auto py-1 px-2  font-nunito hover:text-foreground bg-rose-700"
                >
                  Clear filters
                </Button>
              ) }
            </div>

            <Suspense fallback={ <div className="loaderFetch"></div> }>
              <ProjectFilter
                selectedType={ typeParam }
                selectedTech={ selectedTech }
                setSelectedTech={ ( value ) =>
                  updateSearchParams( "tech", value.join( "," ) )
                }
              />
            </Suspense>
          </div>
        </div>
      ) }
    </div>
  );
}