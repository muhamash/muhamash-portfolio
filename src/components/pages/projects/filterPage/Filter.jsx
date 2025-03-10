"use client";

import { projects } from "@/utils/demo/projectsDemo";
import { useWindowSize } from "@uidotdev/usehooks";
import { Filter } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/Sheet";
import ProjectFilter from "./Filters";

export default function FilterProject() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const windowSize = useWindowSize();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const isMobile = windowSize.width <= 767;

  const typeParam = searchParams.get("type") || "all";
  const techParam = searchParams.get("tech");
  const selectedTech = techParam ? techParam.split( "," ) : [];
  const hasActiveFilters = typeParam !== "all" || selectedTech.length > 0;

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
                  className="text-xs text-rose-50 h-auto py-1 px-2  font-nunito hover:text-slate-700 bg-rose-700"
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
      )
      }

      {
        isMobile && (
          <Sheet open={ isFilterOpen } onOpenChange={ setIsFilterOpen }>
            <SheetTrigger asChild>
              <Button variant="primary" className="w-fit font-arsenal font-bold">
                <Filter size={ 10 } className="mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 sm:w-[350px]">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex items-center justify-between my-4">
                    <h2 className="font-bold font-arsenal text-[20px] text-violet-100">Filters</h2>

                    { ( typeParam !== "all" || selectedTech.length > 0 ) && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={ handleClearFilters }
                        className="text-xs text-rose-50 h-auto py-1 px-2  font-nunito hover:text-slate-700 bg-rose-700"
                      >
                        Clear filters
                      </Button>
                    ) }
                  </div>
                </SheetTitle>
              </SheetHeader>
              <ProjectFilter
                selectedType={ typeParam }
                selectedTech={ selectedTech }
                setSelectedTech={ ( value ) =>
                  updateSearchParams( "tech", value.join( "," ) )
                }
              />
            </SheetContent>
          </Sheet>
        )
      }
    </div>
  );
}