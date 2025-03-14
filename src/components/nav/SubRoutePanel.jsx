"use client";

import { useEffect, useRef, useState } from "react";
import LInks from "./LInks";

export default function SubRoutePanel ( { isOpen, subRoutes, setIsOpen } )
{
    const [ currentUrl, setCurrentUrl ] = useState( "" );

    useEffect( () =>
    {
        if ( typeof window !== "undefined" )
        {
            setCurrentUrl( window.location.href );
        }
    }, [ isOpen ] );
    
    return (
        <>
            { isOpen && (
                <ul className="absolute left-0 mt-3 w-40 bg-black  shadow-md text-white rounded-md p-2 transition-all duration-300 transform  origin-top">
                    { subRoutes?.map( ( sub ) => (
                        <LInks key={ sub.text } sub={ sub } currentUrl={ currentUrl } setIsOpen={setIsOpen} />
                    ) ) }
                </ul>
            ) }
        </>
    );
};