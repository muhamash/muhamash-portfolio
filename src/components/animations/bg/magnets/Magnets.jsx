"use client";

import { useEffect, useRef } from "react";

export default function MagnetLines({
  rows = 50,
  columns = 50,
  lineWidth = "0.5vmin",
  lineHeight = "5vmin",
  baseAngle = -10,
  className = "",
  style = {},
}) {
  const containerRef = useRef(null);

    useEffect( () =>
    {
        const container = containerRef.current;
        if ( !container ) return;

        const items = container.querySelectorAll( "span" );

        const onPointerMove = ( pointer ) =>
        {
            items.forEach( ( item ) =>
            {
                const rect = item.getBoundingClientRect();
                const centerX = rect.x + rect.width / 2;
                const centerY = rect.y + rect.height / 2;

                const b = pointer.x - centerX;
                const a = pointer.y - centerY;
                const c = Math.sqrt( a * a + b * b ) || 1;
                const r =
                    ( ( Math.acos( b / c ) * 180 ) / Math.PI ) * ( pointer.y > centerY ? 1 : -1 );

                item.style.setProperty( "--rotate", `${r}deg` );
            } );
        };

        window.addEventListener( "pointermove", onPointerMove );

        if ( items.length )
        {
            const middleIndex = Math.floor( items.length / 2 );
            const rect = items[ middleIndex ].getBoundingClientRect();
            onPointerMove( { x: rect.x, y: rect.y } );
        }

        return () =>
        {
            window.removeEventListener( "pointermove", onPointerMove );
        };
    }, [] );

    const total = rows * columns;
    
    const spans = Array.from( { length: total }, ( _, i ) => (
        <span
            key={ i }
            className="block origin-center"
            style={ {
                background: "linear-gradient(45deg, cyan, skyblue, violet, black)",
                width: lineWidth,
                height: lineHeight,
                "--rotate": `${baseAngle}deg`,
                transform: "rotate(var(--rotate))",
                willChange: "transform",
            } }
        />
    ) );

    return (
        <div
            ref={ containerRef }
            className={ `fixed top-0 left-0 w-screen h-screen gap-0.5 grid place-items-center blur-sm backdrop-blur-lg ${className}` }
            style={ {
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, 1fr)`,
                ...style,
            } }
        >
            { spans }
        </div>
    );
}