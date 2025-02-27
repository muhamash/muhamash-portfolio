"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TrueFocus = ({
  sentence = "True Focus",
  manualMode = false,
  blurAmount = 5,
  borderColor = "green",
  glowColor = "rgba(0, 255, 0, 0.6)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
}) => {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastActiveIndex = useRef(null);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const focusRectRef = useRef({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);
      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    requestAnimationFrame(() => {
      const parentRect = containerRef.current.getBoundingClientRect();
      const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();

      focusRectRef.current = {
        x: activeRect.left - parentRect.left,
        y: activeRect.top - parentRect.top,
        width: activeRect.width,
        height: activeRect.height,
      };
    });
  }, [currentIndex]);

  const handleMouseEnter = (index) => {
    if (manualMode) {
      lastActiveIndex.current = index;
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex.current);
    }
  };

  return (
    <div className="relative flex gap-4 justify-center items-center flex-wrap" ref={containerRef}>
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={(el) => (wordRefs.current[index] = el)}
            className="relative md:text-[3rem] font-black cursor-pointer"
            style={{
              filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
              transition: `filter ${animationDuration}s ease`,
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="absolute top-0 left-0 pointer-events-none box-border border-0"
        animate={focusRectRef.current}
        transition={{ duration: animationDuration }}
      >
        {["top-left", "top-right", "bottom-left", "bottom-right"].map((pos, idx) => (
          <span
            key={idx}
            className={`absolute w-4 h-4 border-[3px] rounded-[3px] ${
              pos.includes("top") ? "top-[-10px]" : "bottom-[-10px]"
            } ${pos.includes("left") ? "left-[-10px]" : "right-[-10px]"}
            ${pos.includes("top") ? "border-b-0" : "border-t-0"}
            ${pos.includes("left") ? "border-r-0" : "border-l-0"}`}
            style={{
              borderColor: borderColor,
              filter: "drop-shadow(0 0 4px var(--border-color))",
            }}
          ></span>
        ))}
      </motion.div>
    </div>
  );
};

export default TrueFocus;