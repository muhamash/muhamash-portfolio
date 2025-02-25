"use client"

import { useEffect, useRef } from "react";
import HypeContainer from "../../animations/bg/hyper/HypeContainer";

const Contact = () => {
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
    <div 
      ref={sectionRef}
      className="min-h-screen sticky top-0 z-40 w-full bg-black text-white px-4 py-24 backdrop-blur-sm"
    >
      <div className="-z-20 opacity-60">
        <HypeContainer/>
      </div>
      <div className="max-w-6xl mx-auto z-50">
        <h2 className="text-4xl font-bold">Contact</h2>
        working on!!! it is under construction
        <p>working on!!! it is under construction</p>
        <p>working on!!! it is under construction</p>
        <p>working on!!! it is under construction</p>
        <p>working on!!! it is under construction</p>
        <p>working on!!! it is under construction</p>
        <p>working on!!! it is under construction</p>
        <p>working on!!! it is under construction</p>
        <p>working on!!! it is under construction</p>
        <p>working on!!! it is under construction</p>

      </div>

    </div>
  );
};

export default Contact;