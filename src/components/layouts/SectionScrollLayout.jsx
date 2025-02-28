"use client";

import { useEffect, useRef } from "react";

export default function SectionScrollLayout ( { className, children } )
{
    const sectionRef = useRef( null );

    useEffect( () =>
    {
        const updateHeight = () =>
        {
            if ( !sectionRef.current ) return;
            const heightInVh = ( sectionRef.current.offsetHeight / window.innerHeight ) * 100;
            sectionRef.current.style.top = `-${heightInVh - 100}vh`;
        };
    
        updateHeight();
        window.addEventListener( "scroll", updateHeight );
    
        return () => window.removeEventListener( "scroll", updateHeight );
    }, [] );
    
    return (
        <section
            ref={ sectionRef }
            className={`${className} sticky top-0 z-30`}
        >
            {children}
        </section>
    );
}
