"use client"

import { useSearchParams } from "next/navigation";
import { Badge } from "../ui/badge";

export default function ActiveFilters() {
    const searchParams = useSearchParams();

    const typeParam = searchParams.get("type") || "all";
    const techParam = searchParams.get("tech") || ""; 
    const selectedTech = techParam ? techParam.split(",") : [];

    const hasActiveFilters = typeParam !== "all" || selectedTech.length > 0;

    return (
        <>
            {hasActiveFilters && (
                <div className="flex flex-wrap items-center place-self-start px-4 sm:px-6 md:px-10 w-full  bg-gradient-to-r from-slate-600 via-sky-900 to-violet-950 p-2 z-20 overflow-x-auto whitespace-nowrap shadow-sm shadow-black/50 border-[0.5px] border-slate-700">
                    <span className="text-sm mr-2 text-yellow-50 font-outfit">Active filters:</span>

                    {typeParam !== "all" && (
                        <Badge variant="danger" className="capitalize mr-2">
                            {typeParam}
                        </Badge>
                    )}

                    {/* Make badges responsive */}
                    <div className="flex flex-wrap gap-2 py-2">
                        {selectedTech.map((tech, i) => (
                            <Badge variant="success" key={i} className="capitalize">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}