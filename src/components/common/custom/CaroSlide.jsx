"use client";

import { firstLayout } from '@/utils/helper/slide';
import { useWindowSize } from '@uidotdev/usehooks';
import { Carousel } from 'react-responsive-3d-carousel';
import 'react-responsive-3d-carousel/dist/styles.css';
import CaroCard from "./CaroCard";

const items = [
    <CaroCard />,
    <CaroCard />,
    <CaroCard />,
    <CaroCard />,
    <CaroCard />,
    <CaroCard />,
    <CaroCard />,
];


export default function CaroSlide ()
{
    const size = useWindowSize();
    const isMobile = size?.width < 550;

    return (
        <div className="w-full py-10">
            <Carousel
                layout={ firstLayout }
                perspective={ 1000 }
                height={ "220px" }
                width={ isMobile ? "300px" : "450px" }
                containerPadding='1rem'
                containerHeight='100%'
                containerWidth='100%'
                items={ items }
                startIndex={ 0 }
                showIndicators={ false }
                showStatus={ false }
                showArrows={false}
            />
        </div>
    );
}
