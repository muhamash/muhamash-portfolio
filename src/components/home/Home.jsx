"use client";

import CursorContainer from "@/components/animations/cursor/CursorContainer";
import GridContainer from "@/components/animations/grid/GridContainer";
import About from "@/components/home/about/About";
import Footer from "@/components/home/contact/Contact";
import HeaderComponent from "@/components/home/header/Header";
import ServiceSection from "@/components/home/services/ServiceSection";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Home ()
{
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const sectionRef = useRef( null );
  const [scrolled, setScrolled] = useState(false);

  useEffect( () =>
  {
    window.addEventListener( "scroll", handleScroll );

    return () => window.removeEventListener( "scroll", handleScroll );
  }, [] );

  const handleScroll = () => {
    setScrolled(window.scrollY > window.innerHeight / 2);
  };

  return (
    <div ref={sectionRef} className="pt-[110px] flex flex-col items-center justify-center">
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="bg-gradient-to-br from-slate-200 via-green-200 via-violet-200 fixed top-0 w-screen h-[5px] border border-black origin-left z-[100] rounded-full"
      />

      {/* Cursor and Background */}
      <CursorContainer />
      <div className="absolute top-0 left-0 w-full h-full -z-20 opacity-20">
        <GridContainer />
      </div>

      {/* Main Content Sections */}
      <div id="header" className="w-full sticky top-0 z-10 md:px-20 px-5 md:pb-10 pb-5">
        <HeaderComponent />
        <ServiceSection />
      </div>

      <div className="w-full relative">
        <About />
      </div>

      <Footer />
    </div>
  );
}