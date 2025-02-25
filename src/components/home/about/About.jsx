"use client"

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (!sectionRef.current) return;
      const heightInVh = (sectionRef.current.offsetHeight / window.innerHeight) * 100;
      sectionRef.current.style.top = `-${heightInVh - 100}vh`;
    };
    
    updateHeight();
    window.addEventListener("scroll", updateHeight);
    return () => window.removeEventListener("scroll", updateHeight);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen min-w-screen sticky top-0 z-20 w-full bg-gradient-to-br from-black via-green-900 to-emerald-400 py-24"
    >
      {/* Your about content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-6xl mx-auto text-white"
      >
        <h2 className="text-4xl font-bold">About Me</h2>
        working on!!! it is under construction
      </motion.div>
    </section>
  );
};

export default About;