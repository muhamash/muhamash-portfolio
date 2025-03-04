import dynamic from "next/dynamic";

const TiltedCard = dynamic( () => import( "./Crad.jsx" ) );

export default async function CardContainer({src, name, height = '300px', width = '300px'}) {
    return (
        <TiltedCard
            imageSrc={src}
            altText={name}
            captionText={name}
            containerHeight={height}
            containerWidth={width}
            imageHeight={height}
            imageWidth={width}
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
