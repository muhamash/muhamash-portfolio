import BackButton from "@/components/common/BackButton";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Button } from "../../projects/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../projects/ui/Card";
import ReadmeOutput from "./ReadmeStyles";

export default async function ProjectDetails() {
    return (
        <div className="container mx-auto px-4 py-10 max-w-5xl">
            {/* Project Details */ }
            <Card className="mt-10 md:p-6 p-2 bg-slate-900  bg-opacity-80 text-white border-gray-700 rounded-lg">
                {/* Project Banner */ }
                <BackButton/>
                <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                        layout="fill"
                        objectFit="cover"
                        alt="Project Image"
                    />
                </div>
                <CardHeader>
                    <CardTitle className="text-3xl font-bold">Project Name</CardTitle>
                    <CardDescription className="text-gray-400">An innovative solution built with modern web technologies.</CardDescription>
                </CardHeader>
                
                <CardContent>
                    <h2 className="text-xl font-semibold mb-4">Overview</h2>
                    <p className="text-gray-300">
                        This project is a cutting-edge web application designed to streamline workflows, enhance efficiency, and provide an intuitive user experience. Built using the latest technologies, it offers scalability and performance tailored for modern applications.
                    </p>
                    
                    <h2 className="text-xl font-semibold mt-6 mb-4">Technologies Used</h2>
                    <div className="flex flex-wrap gap-2">
                        { [ 'Next.js', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB' ].map( ( tech, index ) => (
                            <span key={ index } className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">{ tech }</span>
                        ) ) }
                    </div>
                </CardContent>

                <CardFooter className="flex justify-between items-center border-t border-gray-700 pt-4">
                    <div className="flex gap-4">
                        <Button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg">
                            <FaGithub /> View on GitHub
                        </Button>
                        <Button className="flex items-center gap-2 bg-sky-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg">
                            <FaExternalLinkAlt /> Live Demo
                        </Button>
                    </div>
                </CardFooter>

                
                <CardFooter className="flex justify-between items-center border-t border-gray-700 pt-4 flex-col gap-5">
                    <div className="w-full mx-auto my-10">
                        <ReadmeOutput
                            title="Swachchhota (স্বচ্ছতা)"
                            badges={ [
                                "https://img.shields.io/badge/version-1.0.0-blue",
                                "https://img.shields.io/badge/license-MIT-green"
                            ] }
                            description="An anti-corruption platform for Bangladesh, built using the MERN stack with secure reporting, case tracking, and AI-driven insights."
                            features={ [
                                "Secure corruption reporting with encryption",
                                "Role-based dashboards for different authorities",
                                "Real-time case tracking and updates",
                                "AI-driven fraud detection and insights"
                            ] }
                            installation="git clone https://github.com/yourrepo.git && cd yourrepo && npm install"
                            usage="npm run dev"
                            envVariables={ [ "NEXT_PUBLIC_API_URL=https://api.example.com", "NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX" ] }
                            apiEndpoints={ [
                                { method: "GET", endpoint: "/api/cases", description: "Fetch all reported corruption cases" },
                                { method: "POST", endpoint: "/api/report", description: "Submit a new corruption report" },
                            ] }
                            externalLibraries={ [
                                { name: "React.js", link: "https://react.dev/", description: "Frontend UI library" },
                                { name: "Next.js", link: "https://nextjs.org/", description: "React-based framework with SSR and API routes" },
                                { name: "Tailwind CSS", link: "https://tailwindcss.com/", description: "Utility-first CSS framework" },
                                { name: "Prisma", link: "https://www.prisma.io/", description: "Next-generation ORM for Node.js & TypeScript" },
                            ] }
                            externalSources={ [
                                { name: "MDN Docs", link: "https://developer.mozilla.org/", description: "Comprehensive web development documentation" },
                                { name: "Node.js Docs", link: "https://nodejs.org/en/docs", description: "Official documentation for Node.js runtime" },
                                { name: "MongoDB Docs", link: "https://www.mongodb.com/docs/", description: "Official MongoDB documentation" },
                            ] }
                            contributing="To contribute, fork the repository and create a pull request with your changes."
                            license="MIT"
                        />
                    </div>
                </CardFooter>

                <p className="text-center text-gray-400 text-sm mt-8 border-t border-gray-700 pt-4">
                    © { new Date().getFullYear() } <span className="text-violet-400 font-semibold">Swacchata™</span>.
                    All rights reserved. Made with <span className="text-red-500">❤️</span> by
                    <Link href="https://guthub.com/muhamash" target="_blank" rel="noopener noreferrer" className="text-sky-300 hover:underline"> Muhammad Ashraful Alam™</Link> and .
                </p>
            </Card>
        </div>
    );
}
