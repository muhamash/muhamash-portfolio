"use client";

import dynamic from 'next/dynamic.js';


const StarFieldAnimation = dynamic( () => import( './Star.jsx' ), {
    ssr: false
} );

export default function StarConatiner() {
    return (
        <div className='w-screen h-screen'>
            <StarFieldAnimation />
        </div>
    );
}
