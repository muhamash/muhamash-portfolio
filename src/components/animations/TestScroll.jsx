"use client";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const VerticalImageLoop = () => {
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);
  
  const images = [
    "https://images.pexels.com/photos/10324713/pexels-photo-10324713.jpeg",
    "https://images.pexels.com/photos/10533885/pexels-photo-10533885.jpeg",
    "https://images.pexels.com/photos/10253213/pexels-photo-10253213.jpeg",
    "https://images.pexels.com/photos/10050979/pexels-photo-10050979.jpeg",
    "https://images.pexels.com/photos/1128660/pexels-photo-1128660.jpeg",
    "https://images.pexels.com/photos/9699293/pexels-photo-9699293.jpeg",
    "https://images.pexels.com/photos/6405575/pexels-photo-6405575.jpeg",
    "https://images.pexels.com/photos/10162526/pexels-photo-10162526.jpeg",
    "https://images.pexels.com/photos/4394807/pexels-photo-4394807.jpeg",
  ];

  useEffect(() => {
    const additionalY = { val: 0 };
    let additionalYAnim;
    let offset = 0;
    
    // Get all columns
    const cols = gsap.utils.toArray('.col');
    
    cols.forEach((col, i) => {
      const images = col.childNodes;
      
      // Set animation for each image
      images.forEach((item) => {
        const columnHeight = item.parentElement.clientHeight;
        const direction = i % 2 !== 0 ? '+=' : '-='; // Change direction for odd columns
        
        gsap.to(item, {
          y: direction + Number(columnHeight / 2),
          duration: 20,
          repeat: -1,
          ease: 'none',
          modifiers: {
            y: gsap.utils.unitize((y) => {
              if (direction === '+=') {
                offset += additionalY.val;
                y = (parseFloat(y) - offset) % (columnHeight * 0.5);
              } else {
                offset += additionalY.val;
                y = (parseFloat(y) + offset) % -Number(columnHeight * 0.5);
              }
              return y;
            })
          }
        });
      });
    });

    // Create scroll trigger
    const imagesScrollerTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 50%',
      end: 'bottom 50%',
      onUpdate: function(self) {
        const velocity = self.getVelocity();
        if (velocity > 0) {
          if (additionalYAnim) additionalYAnim.kill();
          additionalY.val = -velocity / 2000;
          additionalYAnim = gsap.to(additionalY, { val: 0 });
        }
        if (velocity < 0) {
          if (additionalYAnim) additionalYAnim.kill();
          additionalY.val = -velocity / 3000;
          additionalYAnim = gsap.to(additionalY, { val: 0 });
        }
      }
    });

    return () => {
      // Clean up animations when component unmounts
      if (imagesScrollerTrigger) imagesScrollerTrigger.kill();
    };
  }, []);

  // Distribute images into 3 columns
  const column1 = [images[0], images[1], images[2]];
  const column2 = [images[3], images[4], images[5]];
  const column3 = [images[6], images[7], images[8]];

  return (
    <>
      <section 
        ref={sectionRef} 
        className="p-[10vw] h-full min-h-[500vh] overflow-visible flex flex-col justify-center"
      >
        <h1 className="font-extrabold mx-auto my-8 text-[clamp(3vw,2rem,4rem)] text-center z-[999] max-w-[800px] mix-blend-difference pointer-events-none text-white fixed top-0 left-0 right-0 bottom-0 grid place-items-center">
          Vertical image loop with scroll acceleration with gsap
        </h1>
        <h2 className="text-center z-[999] text-xs fixed bottom-4 right-4 [writing-mode:vertical-rl] [text-orientation:mixed]">
          <a href="https://thisisadvantage.com" target="_blank" rel="noreferrer" className="text-white">
            Made by Advantage
          </a>
        </h2>
      </section>

      <div 
        ref={galleryRef} 
        className="z-[1] flex flex-row justify-center w-full h-full fixed top-0 left-1/2 -translate-x-1/2 overflow-visible md:w-full sm:w-[160%]"
      >
        <div className="col flex flex-1 flex-col w-full self-start justify-self-start">
          {column1.map((src, index) => (
            <div key={`col1-${index}`} className="w-full saturate-0 hover:saturate-100 p-4 image hover:z-[99999999999]">
              <img 
                src={src} 
                alt={`Image ${index + 1}`}
                className="transition-all duration-300 ease-out overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)] w-full"
              />
            </div>
          ))}
          {column1.map((src, index) => (
            <div key={`col1-clone-${index}`} className="w-full saturate-0 hover:saturate-100 p-4 image hover:z-[99999999999]">
              <img 
                src={src} 
                alt={`Image ${index + 1}`}
                className="transition-all duration-300 ease-out overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)] w-full"
              />
            </div>
          ))}
        </div>

        <div className="col flex flex-1 flex-col w-full self-end justify-self-end">
          {column2.map((src, index) => (
            <div key={`col2-${index}`} className="w-full saturate-0 hover:saturate-100 p-4 image hover:z-[99999999999]">
              <img 
                src={src} 
                alt={`Image ${index + 1}`}
                className="transition-all duration-300 ease-out overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)] w-full"
              />
            </div>
          ))}
          {column2.map((src, index) => (
            <div key={`col2-clone-${index}`} className="w-full saturate-0 hover:saturate-100 p-4 image hover:z-[99999999999]">
              <img 
                src={src} 
                alt={`Image ${index + 1}`}
                className="transition-all duration-300 ease-out overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)] w-full"
              />
            </div>
          ))}
        </div>

        <div className="col flex flex-1 flex-col w-full self-start justify-self-start">
          {column3.map((src, index) => (
            <div key={`col3-${index}`} className="w-full saturate-0 hover:saturate-100 p-4 image hover:z-[99999999999]">
              <img 
                src={src} 
                alt={`Image ${index + 1}`}
                className="transition-all duration-300 ease-out overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)] w-full"
              />
            </div>
          ))}
          {column3.map((src, index) => (
            <div key={`col3-clone-${index}`} className="w-full saturate-0 hover:saturate-100 p-4 image hover:z-[99999999999]">
              <img 
                src={src} 
                alt={`Image ${index + 1}`}
                className="transition-all duration-300 ease-out overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)] w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VerticalImageLoop;