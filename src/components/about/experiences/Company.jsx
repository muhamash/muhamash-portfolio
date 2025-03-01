"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Company({index, company}) {
    return (
        <motion.div
            initial={ { opacity: 0, y: 20 } }
            whileHover={ { scale: 1.05 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8, delay: index * 0.3 } }
            className="p-6 bg-white/10 relative backdrop-blur-md border border-white/20 rounded-2xl shadow-lg hover:shadow-xl cursor-pointer">
      
            {/*company header  */ }
            <div className="flex items-center gap-4 mb-4">
                <Image src={ company?.logo } alt={ company?.name } width={ '50' } height={ "50" } className="w-14 h-14 rounded-full border border-white/30 p-1 bg-white/10" />
                <div className="text-left">
                    <h3 className="text-2xl font-semibold text-blue-400">{ company?.name }</h3>
                    <p className="text-gray-300">{ company?.role }</p>
                    <p className="text-sm text-gray-400">{ company?.duration }</p>
                </div>
            </div>

            {/* Company Description */ }
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                { company?.description }
            </p>

            {/* Projects List */ }
            <h4 className="text-lg text-blue-300 font-semibold mb-2">Projects & Highlights:</h4>
            <div className="space-y-3">
                { company?.projects.map( ( project, i ) => (
                    <div key={ i } className="bg-white/5 p-3 rounded-lg">
                        <h5 className="text-blue-400 text-sm font-semibold">{ project?.title }</h5>
                        <p className="text-sm text-gray-400">{ project?.details }</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            { project?.tech?.map( ( tech, j ) => (
                                <span key={ j } className="text-xs bg-blue-500/20 px-2 py-1 rounded-full text-blue-400">
                                    { tech }
                                </span>
                            ) ) }
                        </div>
                    </div>
                ) ) }
            </div>
        </motion.div>
    );
}
