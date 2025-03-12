"use client";

import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function CallToAction ( { project } )
{
    const handleLearnMoreRefresh = () => window.location.reload();

    return (
        <div className="mt-6 flex flex-col gap-4 w-fit">
            {/* Live Project */ }
            <div className="flex gap-3">
                <Link
                    href={ project?.liveDemo }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center justify-center font-nunito bg-teal-500 text-teal-950 shadow-md hover:scale-105 transition-all duration-200 text-sm px-2 w-[100px] h-[30px] rounded-md"
                >
                    <ExternalLink size={ 12 } />
                    Demo
                </Link>

                {/* GitHub Source Code */ }
                <Link
                    href={ project?.githubRepo }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center justify-center font-nunito bg-sky-700 text-teal-50 shadow-md hover:scale-105 transition-all duration-200 text-sm px-2 w-[100px] h-[30px] rounded-md"
                >
                    <Github size={ 12 } />
                    Source
                </Link>
            </div>

            {/* Learn More */ }
            <div onClick={handleLearnMoreRefresh} className="block bg-gradient-to-r from-yellow-500 via-cyan-600 via-blue-400 to-green-600 w-[210px] p-[1px] rounded-lg">
                <button className="relative px-6 py-3 font-semibold text-white bg-gray-900 rounded-lg w-full group">
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-green-500 rounded-lg blur-md opacity-50 group-hover:opacity-100 transition duration-300"></span>
                    <span className="relative z-10 font-edu">View details!</span>
                </button>
            </div>
        </div>
    );
}
