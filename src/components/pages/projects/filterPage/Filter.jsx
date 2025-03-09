"use client";

import { projects } from "@/utils/demo/projectsDemo";
import { useWindowSize } from "@uidotdev/usehooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";
import { Badge } from "../ui/badge";
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

  const hasActiveFilters = typeParam !== "all" || selectedTech.length > 0;

  return (
    <div className=" flex flex-col gap-5">
      { hasActiveFilters && (
        <div className="flex items-center">
          <span className="text-sm font-medium mr-2">Active filters:</span>
          { typeParam !== "all" && (
            <Badge variant="danger" className="capitalize mr-2">
              { typeParam }
            </Badge>
          ) }
          { selectedTech.map( ( tech, i ) => (
            <Badge variant="success" key={ i } className="mr-2">
              { tech }
            </Badge>
          ) ) }
        </div>
      ) }

      { !isMobile && (
        <div className="w-fit rounded-[10px]">
          <div className="sticky top-24 bg-background p-4 rounded-[8px] border">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-medium text-black">Filters</h2>
            </div>

            <Suspense fallback={ <p>Loading project filters!!!</p> }>
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