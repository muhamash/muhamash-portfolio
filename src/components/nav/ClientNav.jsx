"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaEnvelope, FaFolderOpen, FaHome, FaTimes } from "react-icons/fa";

const buttonVariants = {
    open: { rotate: 180, scale: 1.2, transition: { type: "spring", stiffness: 300, damping: 10 } },
    closed: { rotate: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 10 } }
};

const itemVariants = {
    hidden: (i) => ({
        opacity: 0,
        x: 0, 
        y: 0,
        scale: 0.5,
        filter: "blur(5px)",
        transition: { type: "spring", stiffness: 120, damping: 12, delay: (2 - i) * 0.1 }
    }),
    visible: (i) => ({
        opacity: 1,
        x: Math.cos(i * (Math.PI / 3)) * 60, 
        y: Math.sin(i * (Math.PI / 3)) * 60,
        scale: 1,
        filter: "blur(0px)",
        transition: { type: "spring", stiffness: 120, damping: 10, delay: i * 0.1 }
    }),
    exit: (i) => ({
        opacity: 0,
        x: 0, 
        y: 0,
        scale: 0.5,
        filter: "blur(5px)",
        transition: { duration: 0.4, delay: (2 - i) * 0.1 }
    })
};

const ClientNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        { icon: <FaHome />, text: "Home", url: "/" },
        { icon: <FaEnvelope />, text: "Contact", url: "/contact" },
        { icon: <FaFolderOpen />, text: "Projects", url: "/projects" }
    ];

    return (
        <div className="relative">
            {/* Hamburger Menu Button */ }
            <motion.button
                className="text-white text-2xl p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg z-10"
                onClick={ () => setIsOpen( !isOpen ) }
                variants={ buttonVariants }
                animate={ isOpen ? "open" : "closed" }
            >
                <motion.div
                    key={ isOpen ? "close" : "menu" }
                    initial={ { scale: 0.5, opacity: 0 } }
                    animate={ { scale: 1, opacity: 1, transition: { duration: 0.3 } } }
                    exit={ { scale: 0.5, opacity: 0 } }
                >
                    { isOpen ? <FaTimes className="text-violet-500"/> : <FaBars /> }
                </motion.div>
            </motion.button>

            {/* Floating Animated Circular Icons */ }
            <AnimatePresence>
                { isOpen &&
                    items.map( ( item, i ) => (
                        <motion.div
                            key={ item.text }
                            custom={ i }
                            onClick={ () => setIsOpen( !isOpen ) }
                            initial={ { y: -25, opacity: 0 } }
                            animate="visible"
                            exit="exit"
                            variants={ itemVariants }
                            className="absolute flex items-center justify-center text-white text-xl cursor-pointer -z-10
                                       w-12 h-12 rounded-full bg-violet-800/50 shadow-md transition-all 
                                       hover:scale-110 hover:bg-green-500/90 hover:shadow-lg hover:shadow-violet-500/70"
                        >
                            <Link href={ item.url }>
                                { item.icon }
                            </Link>
                        </motion.div>
                    ) ) }
            </AnimatePresence>
        </div>
    );
};

export default ClientNav;