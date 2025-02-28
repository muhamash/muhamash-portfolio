"use client";

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NavLinks } from "./NavLinks";

export const Sidebar = ({ activePage, setActivePage }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
    const closeDrawer = () => setIsDrawerOpen(false);

    return (
        <>
            <motion.button
                onClick={toggleDrawer}
                className="md:hidden fixed top-7 left-5 z-50 p-3 rounded-full shadow-lg"
                aria-label="Toggle navigation menu"
            >
                <FontAwesomeIcon 
                    icon={faBars} 
                    className="text-xl text-violet-600"
                    beatFade={!isDrawerOpen}
                />
            </motion.button>

            {/* Desktop Sidebar */}
            <div className="hidden md:block md:col-span-1 bg-gray-900 backdrop-blur-md pt-[100px] px-6 shadow-xl h-screen z-50">
                <NavLinks activePage={activePage} setActivePage={setActivePage} />
            </div>

            {/* Mobile Drawer with AnimatePresence */}
            <AnimatePresence mode='wait'>
                {isDrawerOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={closeDrawer}
                    >
                        <motion.div
                            className="absolute left-0 top-0 w-64 h-full bg-white/10 backdrop-blur-lg shadow-xl p-6"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.button
                                onClick={closeDrawer}
                                className="text-white mb-4 flex items-center gap-2"
                                whileHover={{ scale: 1.1 }}
                                aria-label="Close navigation menu"
                            >
                                <FontAwesomeIcon 
                                    icon={faTimes} 
                                    className="transition-transform hover:rotate-90"
                                />
                                Close
                            </motion.button>

                            <NavLinks
                                activePage={activePage}
                                setActivePage={setActivePage}
                                closeDrawer={closeDrawer}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};