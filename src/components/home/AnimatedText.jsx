"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const texts = [
  "Writing Next.js Optimized Code...",
  "Enhancing Performance...",
  "Deploying to Vercel...",
];

export default function AnimatedText() {
  const [index, setIndex] = useState(0); 
  const [subIndex, setSubIndex] = useState(0); 
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorBlink);
  }, []);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1000); 
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length); 
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 50 : 100); 

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  return (
    <motion.div
      className="font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div className="text-[6vw] sm:text-[8vw] md:text-[10vw] lg:text-[40px] xl:text-[50px]">
        {texts[index].substring(0, subIndex)}
      </motion.div>
      <motion.span
        className={`ml-1 w-1 h-auto inline-block ${
          blink ? "bg-slate-600" : "bg-transparent"
        }`}
      ></motion.span>
    </motion.div>
  );
}