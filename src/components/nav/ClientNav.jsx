"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaEnvelope, FaFolderOpen, FaHome, FaTimes } from "react-icons/fa";
import NavItem from "./NavItems";

const ClientNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Hamburger Menu Button */}
            <button 
                className="text-white text-2xl p-2 rounded-md hover:bg-gray-700 transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute top-12 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg p-6 rounded-b-xl flex flex-col space-y-4"
                    >
                        <NavItem icon={<FaHome />} text="Home" />
                        {/* <AboutItem /> */}
                        <NavItem icon={<FaEnvelope />} text="Contact" />
                        <NavItem icon={<FaFolderOpen />} text="Projects" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ClientNav;