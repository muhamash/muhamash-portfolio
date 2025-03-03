"use client"

import { useWindowSize } from "@uidotdev/usehooks";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const AnimatedBackground = dynamic( () => import( "./Text" ) );

export default function TextContainerBlackHole() {
  const [ textSize, setTextSize ] = useState( 5 );
  const size = useWindowSize();
  // const isSmallDevice = useMediaQuery( "only screen and (max-width : 768px)" );
  // console.log( size );
  
  useEffect( () =>
  {
    if ( size?.width > 650 )
    {
      setTextSize(10)
    }
    else
    {
      setTextSize(4)
    }
  }, [ size ] );

  return (
    <div className='w-screen h-screen relative'>
      <AnimatedBackground text={ 'Welcome to\nMuhamash!!' } textSize={ textSize }
        particleSize={ 0.6 } />
    </div>
  );
}