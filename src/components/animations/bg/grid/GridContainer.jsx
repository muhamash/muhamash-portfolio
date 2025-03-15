"use client"

import { useWindowSize } from "@uidotdev/usehooks";
import dynamic from "next/dynamic";

const Squares = dynamic( () => import( "./Grid" ), {ssr: false} );

export default function GridContainer ()
{
    const size = useWindowSize();
    const isMobile = size.width < 550;
    // console.log( isMobile );

    return (
        <>
            {
                !isMobile ? (
                    <Squares
                        speed={ 0.7 }
                        squareSize={ 40 }
                        direction='diagonal' 
                        borderColor='#fff'
                        hoverFillColor='#92a1a2'
                    />
                ) : (
                    <></>
                )
            }
        </>
    );
}
