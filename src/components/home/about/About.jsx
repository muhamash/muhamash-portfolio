"use client"

import AuoraContainer from "@/components/animations/bg/auora/AuoraContainer";
import TechSlider from "@/components/animations/sliders/techStacks/TechSlider";
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
      className="min-h-screen min-w-screen sticky top-0 z-20 w-full bg-gradient-to-br from-slate-900 via-gray-800 backdrop-blur-[3px]"
    >
      <AuoraContainer />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-6xl mx-auto text-white relative pt-20 md:px-10 px-5"
      >
        
        <h2 className="text-4xl font-bold">About Me</h2>
        working on!!! it is under construction

        <TechSlider/>
      </motion.div>
    </section>
  );
};

export default About;