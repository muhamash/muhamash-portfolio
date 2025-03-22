"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const texts = [
    "Muhammad Ashraful Alam",
    "Full Stack Software Engineer",
    "Front-End Engineer",
    "Back-End Engineer",
    "Cloud Computing",
    "MERN Stack Expert",
    "Serverless Architect",
    "Server-Based Architect",
    "System-Level Enthusiast",
    "Cybersecurity Enthusiast",
    "Tech Innovator",
];

export const AnimatedInsights = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -12, filter: "blur(5px)" }}
        animate={{ opacity: 1, x: 10, filter: "blur(0px)" }}
        exit={{ opacity: 0, x: -10, filter: "blur(5px)" }}
        transition={{ 
          duration: 0.6, 
          ease: "easeInOut",
          x: { type: "spring", stiffness: 100, damping: 15 }
        }}
        className="absolute text-[10px] md:text-lg font-code font-semibold text-violet-200 whitespace-nowrap md:left-14 left-10 -z-10"
      >
        {texts[index]}
      </motion.div>
    </AnimatePresence>
  );
};