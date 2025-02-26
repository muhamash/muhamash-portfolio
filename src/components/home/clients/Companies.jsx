"use client";

import { motion } from "framer-motion";

const companies = [
    {
        name: "XpeedLab",
        role: "Software Developer",
        duration: "2024 - Present",
        logo: "/logos/flyte.png",
        description: "XpeedLab is a leading IT solutions company specializing in SaaS products, AI-based systems, and enterprise software solutions.",
        projects: [
            {
                title: "Swachchhota (স্বচ্ছতা)",
                tech: ["MERN Stack", "Next.js", "GraphQL", "NextAuth"],
                details: "Developed a cloud-based anti-corruption platform with secure reporting and case tracking."
            },
            {
                title: "AI-Based ATS System",
                tech: ["Next.js", "Node.js", "MySQL", "Prisma"],
                details: "Building an automated cloud-based CV Analysis Applicant Tracking System."
            }
        ]
    },
    {
        name: "DesignLadder",
        role: "Full-Stack Developer",
        duration: "2022 - 2024",
        logo: "/logos/techstartup.png",
        description: "DesignLadder is a creative agency providing web solutions, branding, and SaaS product development.",
        projects: [
            {
                title: "Task Management System",
                tech: ["Next.js", "Node.js", "Prisma", "MySQL"],
                details: "Built a full-stack task management system with JWT-based authentication and task tracking."
            },
            {
                title: "E-Commerce Platform",
                tech: ["React.js", "Node.js", "MongoDB"],
                details: "Developed an e-commerce platform with admin dashboards and product management features."
            }
        ]
    }
];

export default function CompaniesWorked() {
    return (
        <div className="mt-10 text-center relative">
            {/* Background Gradient */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-gray-900/30 blur-2xl opacity-50 z-[-1]"></div>

            <h2 className="text-2xl md:text-3xl font-bold text-white">
                Companies I Have Worked With
            </h2>

            {/* Grid Layout */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                {companies.map((company, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ scale: 1.05 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.3 }}
                        className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg hover:shadow-xl cursor-pointer"
                    >
                        {/* Company Header */}
                        <div className="flex items-center gap-4 mb-4">
                            <img src={company.logo} alt={company.name} className="w-14 h-14 rounded-full border border-white/30 p-1 bg-white/10" />
                            <div className="text-left">
                                <h3 className="text-2xl font-semibold text-blue-400">{company.name}</h3>
                                <p className="text-gray-300">{company.role}</p>
                                <p className="text-sm text-gray-400">{company.duration}</p>
                            </div>
                        </div>

                        {/* Company Description */}
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            {company.description}
                        </p>

                        {/* Projects List */}
                        <h4 className="text-lg text-blue-300 font-semibold mb-2">Projects & Highlights:</h4>
                        <div className="space-y-3">
                            {company.projects.map((project, i) => (
                                <div key={i} className="bg-white/5 p-3 rounded-lg">
                                    <h5 className="text-blue-400 text-sm font-semibold">{project.title}</h5>
                                    <p className="text-sm text-gray-400">{project.details}</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.tech.map((tech, j) => (
                                            <span key={j} className="text-xs bg-blue-500/20 px-2 py-1 rounded-full text-blue-400">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}