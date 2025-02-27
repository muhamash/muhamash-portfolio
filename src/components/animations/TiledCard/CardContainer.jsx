"use client"

import dynamic from "next/dynamic";

const TiltedCard = dynamic( () => import( "./Crad.jsx" ), { ssr: false } );

export default function CardContainer({src, name}) {
    return (
        <TiltedCard
            imageSrc={src}
            altText={name}
            captionText={name}
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={ 12 }
            scaleOnHover={ 1.2 }
            showMobileWarning={ false }
            showTooltip={ true }
            displayOverlayContent={ true }
            // overlayContent={
            //     <p className="bg-gray-500 mx-7 my-7 pl-3 w-full rounded-md shadow-sm">
            //         {name}
            //     </p>
            // }
        />
    );
}
