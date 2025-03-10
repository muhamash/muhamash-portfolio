"use client";

import { technologies } from "@/utils/demo/projectsDemo";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const ProjectFilter = ({ selectedType, setSelectedTech, selectedTech }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    // const size = useWindowSize();

    // const isMobile = size < 767;

    const updateSearchParams = (key, value) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value && value.length > 0) {
            params.set( key, value );
            params.set("page", "1");
        } else {
            params.delete(key);
        }

        // console.log(`${pathname}?${params.toString()}`)
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const handleTypeClick = (type) => {
        updateSearchParams("type", type);
    };

    // console.log( selectedTech );
    const handleTechToggle = (techName) => {
        const updatedTechs = selectedTech.includes(techName)
            ? selectedTech.filter((t) => t !== techName)
            : [...selectedTech, techName];

        setSelectedTech(updatedTechs);
        updateSearchParams("tech", updatedTechs.length > 0 ? updatedTechs.join(",") : "");
    };

    const techByCategory = {};
    technologies.forEach((tech) => {
        if (!techByCategory[tech.category]) {
            techByCategory[tech.category] = [];
        }
        techByCategory[tech.category].push(tech);
    });

    return (
        <div className="w-full transition-all rounded-[8px] bg-gradient-to-r from-violet-500 via-cyan-600 via-sky-400 to-slate-400 bg-opacity-70  p-[2px]">
            <div className="space-y-6 rounded-[8px] shadow-[10px]  p-4 bg-slate-100 backdrop-blur-md bg-opacity-90">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-700 font-arsenal">Project Type</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {["all", "frontend", "backend", "fullstack", "mobile", "desktop", "other"].map((type) => (
                            <Button
                                key={type}
                                variant={selectedType === type ? "destructive" : "secondary"}
                                size="sm"
                                onClick={() => handleTypeClick(type)}
                                className="text-xs h-auto py-1 capitalize transition-all font-nunito hover:bg-yellow-100 hover:text-black"
                            >
                                {type}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="space-y-3">
                    <h3 className="text-lg font-medium font-arsenal">Technologies</h3>
                    {Object.entries(techByCategory).map(([category, techs]) => (
                        <div key={category} className="space-y-2">
                            <h4 className="text-md text-muted-foreground capitalize font-edu font-semibold">{category}</h4>
                            <div className="flex flex-wrap gap-1.5 font-nunito font-semibold">
                                {techs.map((tech) => (
                                    <Badge
                                        key={tech.name}
                                        variant={selectedTech.includes(tech.name) ? "default" : "outline"}
                                        className="cursor-pointer transition-all"
                                        onClick={() => handleTechToggle(tech.name)}
                                    >
                                        {tech.name}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectFilter;