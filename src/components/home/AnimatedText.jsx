"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const texts = [
  "A professional full stack web developer",
  "Creating beautiful websites",
  "Building scalable applications!!",
  "Writing Next.js Optimized Code!!",
  "Enhancing Performance...",
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
      className="font-bold w-full bg-gradient-to-r from-cyan-400 via-purple-500  to-cyan-400 bg-clip-text text-transparent flex h-md:[105px] h-[60px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div className="md:text-[40px] text-[20px] w-full">
        {texts[index].substring(0, subIndex)}
      </motion.div>
    </motion.div>
  );
}