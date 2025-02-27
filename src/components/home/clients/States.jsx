"use client";

import { motion } from "framer-motion";
import CountUp from "./Counter";

const stats = [
    { label: "Years of Experience", value: 2.5 },
    { label: "Clients", value: 10 },
    { label: "Companies", value: 2 },
    { label: "Projects", value: 20 },
];

export default function States() {
    return (
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-white font-nunito">
            { stats.map( ( stat, index ) => (
                <motion.div
                    key={ index }
                    initial={ { opacity: 0, y: 20 } }
                    animate={ { opacity: 1, y: 0 } }
                    transition={ { duration: 0.8, delay: index * 0.2 } }
                    className="p-5 bg-black/30 rounded-2xl shadow-md backdrop-blur-sm"
                >
                    <CountUp
                        from={ 0 }
                        to={ stat.value }
                        separator=","
                        direction="up"
                        duration={ 1 }
                        className="count-up-text text-4xl font-bold bg-gradient-to-r from-sky-500 via-purple-500 to-green-600 bg-clip-text text-transparent"
                    />
                    <p className="text-gray-300">{ stat.label }</p>
                </motion.div>
            ) ) }
        </div>
    );
}
