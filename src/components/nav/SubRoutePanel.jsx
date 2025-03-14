"use client";

import { useEffect, useRef, useState } from "react";
import LInks from "./LInks";

export default function SubRoutePanel ( { isOpen, subRoutes, setIsOpen } )
{
    const [ currentUrl, setCurrentUrl ] = useState( "" );
    const linkRef = useRef( null );

    useEffect( () =>
    {
        if ( typeof window !== "undefined" )
        {
            setCurrentUrl( window.location.href );
        }
    }, [ isOpen ] );

    useEffect( () =>
    {
        function handleClickOutside ( event )
        {
            if ( linkRef.current && !linkRef.current.contains( event.target ) )
            {
                setIsOpen( false );
            }
        }

        document.addEventListener( "mousedown", handleClickOutside );
        return () =>
        {
            document.removeEventListener( "mousedown", handleClickOutside );
        };
    }, [] );
    
    return (
        <>
            { isOpen && (
                <ul ref={linkRef} className="absolute left-0 mt-3 w-40 bg-black  shadow-md text-white rounded-md p-2 transition-all duration-300 transform  origin-top">
                    { subRoutes?.map( ( sub ) => (
                        <LInks key={ sub.text } sub={ sub } currentUrl={ currentUrl } setIsOpen={setIsOpen} />
                    ) ) }
                </ul>
            ) }
        </>
    );
};