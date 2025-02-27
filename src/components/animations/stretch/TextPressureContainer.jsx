"use client";

import dynamic from "next/dynamic";

const FuzzyText = dynamic( () => import( "./TextPressure.jsx" ), { ssr: false } );

export default function TextPressureContainer() {
    return (
        <FuzzyText
            baseIntensity={ 0.01 }
            hoverIntensity={ 0.5 }
            enableHover={ 10 }
            className={"text-center"}
        >
            See My works!!
        </FuzzyText>
    );
}
