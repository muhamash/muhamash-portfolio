"use client"

import dynamic from "next/dynamic";

const DecryptedText = dynamic( () => import( "./Text" ), { ssr: false } );

export default function TextContainer({text}) {
    return (
        <div>
            <DecryptedText
                text={text}
                animateOn="view"
                speed={50}
                maxIterations={20}
                revealDirection="center"
                className="revealed w-full md:text-[20px] text-[14px] pb-1 text-violet-200 font-eduFont"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
            />
        </div>
    );
}
