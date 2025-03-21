"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollBar ()
{
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring( scrollYProgress );
    
    return (
        <motion.div
            style={ { scaleX } }
            className="bg-gradient-to-br from-slate-400 via-sky-600 via-violet-400 fixed top-0 w-screen h-[5px] border border-black origin-left z-[100] rounded-full"
        />
    );
}
