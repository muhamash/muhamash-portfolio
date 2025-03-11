"use client";

import { cn } from "@/utils/helper/helper";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const ProjectSlider = ({
  images,
  className,
  autoplay = true,
  autoplaySpeed = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(
    Array(images.length).fill(false)
  );
  const autoplayRef = useRef(null);
  const touchStartX = useRef(0);
  const sliderRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleImageLoad = (index) => {
    setIsLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    // If the swipe is significant enough (more than 50px)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  // Set up autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(nextSlide, autoplaySpeed);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, autoplaySpeed, nextSlide]);

  // Reset autoplay when manually navigating
  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    if (autoplay) {
      autoplayRef.current = setInterval(nextSlide, autoplaySpeed);
    }
  };

  const handleNextClick = () => {
    nextSlide();
    resetAutoplay();
  };

  const handlePrevClick = () => {
    prevSlide();
    resetAutoplay();
  };

  const handleIndicatorClick = (index) => {
    goToSlide(index);
    resetAutoplay();
  };

  // Pause autoplay when hovering over the slider
  const handleMouseEnter = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (autoplay) {
      autoplayRef.current = setInterval(nextSlide, autoplaySpeed);
    }
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl shadow-lg",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={image.id} className=" flex-none w-full relative">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
              <img
                src={image.src}
                alt={image.alt}
                className={cn(
                  "w-full h-full object-cover transition-all lazy-image",
                  isLoaded[index] ? "loaded animate-image-fade" : "loading"
                )}
                onLoad={() => handleImageLoad(index)}
              />
              {!isLoaded[index] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse-slow">
                  <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={handlePrevClick}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm text-black p-2 rounded-full shadow-md opacity-80 hover:opacity-100 transition-opacity focus:outline-none"
        aria-label="Previous slide"
      >
        <ArrowLeft size={18} />
      </button>
      <button
        onClick={handleNextClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm text-black p-2 rounded-full shadow-md opacity-80 hover:opacity-100 transition-opacity focus:outline-none"
        aria-label="Next slide"
      >
        <ArrowRight size={18} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={cn(
              "slider-indicator",
              index === currentIndex ? "active" : ""
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;