"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function LInks({ sub, currentUrl, setIsOpen }) {
    const [ active, setActive ] = useState( false );

    useEffect(() => {
        if (currentUrl && sub?.url) {
            setActive( currentUrl.includes( sub.url ) );
        }
    }, [ currentUrl ] );

    return (
        <li onClick={ () => setIsOpen( false ) } className={ `flex items-center p-2 hover:bg-gray-800 rounded transition-all ${active
            ? "bg-slate-700 text-green-400 shadow-sm shadow-green-300"
            : "text-white/80 hover:bg-white/20"
            }` }>
            { sub?.icon }
            <Link
                href={ sub?.url }
                className={ `ml-2 w-full` }
            >
                { sub?.text }
            </Link>
        </li>
    );
}