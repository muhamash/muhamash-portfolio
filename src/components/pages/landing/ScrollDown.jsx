"use client";

import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const ScrollButton = () =>
{
  const handleScrollDown = () =>
  {
    document.getElementById( "next-section" )?.scrollIntoView( { behavior: "smooth" } );
    // console.log( "Scrolling down" );
  };

  return (
    <div className="flex justify-center mt-5">
      <motion.button
        onClick={ handleScrollDown }
        className="p-3 bg-purple-700 text-white rounded-full"
        whileHover={ { scale: 1.2 } }
        whileTap={ { scale: 0.9 } }
      >
        <motion.div
          animate={ { y: [ 0, 10, 0 ] } }
          transition={ { repeat: Infinity, duration: 1.2, ease: "easeInOut" } }
        >
          <FaArrowDown size={ 24 } />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default ScrollButton;