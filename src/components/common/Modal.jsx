"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";


const Modal = ({ children }) => {
    const [isVisible, setIsVisible] = useState(true);
    const overlay = useRef(null);
    const wrapper = useRef(null);
    const router = useRouter();

    console.log(router)

    const onDismiss = useCallback(() => {
        setIsVisible(false);
        router.back();
    }, [router]);

    const onKeyDown = useCallback(
        (e) => {
            if (e.key === "Escape") onDismiss();
        },
        [onDismiss]
    );

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onKeyDown]);

    const handleClose = useCallback(() => {
        setIsVisible(false);
        router.back();
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div
                    ref={overlay}
                    className="fixed z-50 left-0 right-0 top-0 bottom-0 mx-auto bg-black/50 md:px-5 backdrop-blur-lg w-screen flex items-center justify-center p-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        ref={wrapper}
                        className="flex items-center justify-center w-fit h-full flex-col"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <button
                            onClick={handleClose}
                            className="text-red-700 font-extrabold font-lg py-2 px-4 bg-gray-100 rounded-md mb-2 self-start hover:scale-110 transition duration-200 hover:shadow-md shadow-red-500"
                        >
                            X
                        </button>
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;