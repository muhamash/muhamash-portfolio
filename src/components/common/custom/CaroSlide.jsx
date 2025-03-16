"use client";

import { firstLayout } from '@/utils/helper/slide';
import { Carousel } from 'react-responsive-3d-carousel';
import 'react-responsive-3d-carousel/dist/styles.css';

const items = [
  <img src="logos/kubec.png" alt="Image 1" />,
    <img src="ss/hotel.png" alt="Image 1" />,
  <img src="logos/reneta.png" alt="Image 1" />,
    <img src="logos/xpeedlab.jpg" alt="Image 1" />,
    <img src="logos/rucc.jpg" alt="Image 1" />,
    <img src="ss/web.png" alt="Image 1" />,
  <img src="ss/movie.png" alt="Image 1" />,
];


export default function CaroSlide ()
{
    
    return (
        <div className="w-full">
            <Carousel
                layout={ firstLayout }
                perspective={ 1000 }
                height={ "200px" }
                width={ "320px" }
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
