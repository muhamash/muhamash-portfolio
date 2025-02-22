"use client"

import
    {
        motion,
        useAnimationFrame,
        useMotionValue,
        useScroll,
        useSpring,
        useTransform,
        useVelocity,
    } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) setWidth(ref.current.offsetWidth);
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

export const ScrollVelocity = ({
  scrollContainerRef,
  children,
  velocity = 100,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,
}) => {
  const baseX = useMotionValue(0);
  const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
  const { scrollY } = useScroll(scrollOptions);
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: damping,
    stiffness: stiffness,
  });
  const velocityFactor = useTransform(
    smoothVelocity,
    velocityMapping.input,
    velocityMapping.output,
    { clamp: false }
  );

  const copyRef = useRef(null);
  const copyWidth = useElementWidth(copyRef);

  function wrap(min, max, v) {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  }

  const x = useTransform(baseX, (v) => {
    if (!copyWidth) return "0px";
    return `${wrap(-copyWidth, 0, v)}px`;
  });

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * velocity * (delta / 1000);

    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const copies = [];
  for (let i = 0; i < numCopies; i++) {
    copies.push(
      <div
        key={i}
        ref={i === 0 ? copyRef : null}
        className={`flex-shrink-0 flex gap-4 ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div className={`${parallaxClassName} relative overflow-hidden w-full`} style={parallaxStyle}>
      <motion.div
        className={`${scrollerClassName} flex whitespace-nowrap`}
        style={{ x, ...scrollerStyle }}
      >
        {copies}
      </motion.div>
    </div>
  );
};

export default ScrollVelocity;