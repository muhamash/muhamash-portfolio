"use client";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sliderData = [
  { id: 1, title: "Web Development", description: "Building responsive and scalable web applications." },
  { id: 2, title: "Backend Development", description: "Robust backend services with modern technologies." },
  { id: 3, title: "API Integration", description: "Seamless integration of third-party services & APIs." },
  { id: 4, title: "Ecommerce Solutions", description: "Custom online stores with high performance." },
];

export default function DemoSlide() {
    return (
        <div className="h-screen py-20 md:flex items-center justify-center bg-gray-700 hidden w-fit overflow-hidden">
            <Swiper
                effect="coverflow"
                grabCursor={ true }
                centeredSlides={ true }
                slidesPerView="auto"
                loop={ true }
                autoplay={ { delay: 2000, disableOnInteraction: false } }
                coverflowEffect={ {
                    rotate: 10, // Rotation angle
                    stretch: 0, // Space between slides
                    depth: 400, // 3D Depth effect
                    modifier: 3,
                    slideShadows: true,
                } }
                modules={ [ Autoplay, EffectCoverflow ] }
                className="w-full max-w-4xl"
            >
                { sliderData.map( ( item ) => (
                    <SwiperSlide key={ item.id } className="p-6 bg-white rounded-xl shadow-xl text-center max-w-xs">
                        <h3 className="text-xl font-semibold text-gray-800">{ item.title }</h3>
                        <p className="text-gray-600 mt-2">{ item.description }</p>
                        <p className="text-gray-600 mt-2">{ item.description }</p>
                        <h3 className="text-xl font-semibold text-gray-800">{ item.title }</h3>
                        <p className="text-gray-600 mt-2">{ item.description }</p>
                        <p className="text-gray-600 mt-2">{ item.description }</p>
                    </SwiperSlide>
                ) ) }
            </Swiper>
        </div>
    );
}