"use client";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
// You'll need to install locomotive-scroll
// npm install locomotive-scroll

const HorizontalScrollWithColors = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Import locomotive-scroll dynamically to avoid SSR issues
    const importLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      
      gsap.registerPlugin(ScrollTrigger);
      
      const pageContainer = containerRef.current;
      pageContainer.setAttribute("data-scroll-container", "");
      
      const scroller = new LocomotiveScroll({
        el: pageContainer,
        smooth: true,
        getDirection: true
      });
      
      scroller.on("scroll", function(t) {
        document.documentElement.setAttribute("data-direction", t.direction);
      });
      
      scroller.on("scroll", ScrollTrigger.update);
      
      ScrollTrigger.scrollerProxy(pageContainer, {
        scrollTop(value) {
          return arguments.length
            ? scroller.scrollTo(value, 0, 0)
            : scroller.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        },
        pinType: pageContainer.style.transform ? "transform" : "fixed"
      });
      
      // Pinning and horizontal scrolling
      let horizontalSections = pageContainer.querySelectorAll(".horizontal-scroll");
      horizontalSections.forEach((horizontalSection) => {
        let pinWrap = horizontalSection.querySelector(".pin-wrap");
        let pinWrapWidth = pinWrap.offsetWidth;
        let horizontalScrollLength = pinWrapWidth - window.innerWidth;
        
        gsap.to(pinWrap, {
          scrollTrigger: {
            scroller: "[data-scroll-container]",
            scrub: true,
            trigger: horizontalSection,
            pin: true,
            start: "top top",
            end: () => `+=${pinWrapWidth}`,
            invalidateOnRefresh: true
          },
          x: -horizontalScrollLength,
          ease: "none"
        });
      });
      
      /* COLOR CHANGER */
      const scrollColorElems = pageContainer.querySelectorAll("[data-bgcolor]");
      scrollColorElems.forEach((colorSection, i) => {
        const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
        const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;
        
        ScrollTrigger.create({
          trigger: colorSection,
          scroller: "[data-scroll-container]",
          start: "top 50%",
          onEnter: () =>
            gsap.to("body", {
              backgroundColor: colorSection.dataset.bgcolor,
              color: colorSection.dataset.textcolor,
              overwrite: "auto"
            }),
          onLeaveBack: () =>
            gsap.to("body", {
              backgroundColor: prevBg,
              color: prevText,
              overwrite: "auto"
            })
        });
      });
      
      ScrollTrigger.addEventListener("refresh", () => scroller.update());
      ScrollTrigger.refresh();
      
      // Cleanup function
      return () => {
        scroller.destroy();
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    };
    
    importLocomotiveScroll();
  }, []);
  
  return (
    <div className="container" ref={containerRef}>
      <section data-textcolor="#bcb8ad" data-bgcolor="#032f35" className="min-h-screen w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-[50px_10vw] m-auto place-items-center">
        <div>
          <h1 className="text-5xl leading-none font-extrabold mb-4 absolute top-[10vw] left-[10vw] z-10 break-words hyphens-auto md:text-[16vw]">
            <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="-1" className="block">Horizontal</span> 
            <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2" className="block">scroll</span> 
            <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="-3" className="block">+ colors</span>
          </h1>
          <p data-scroll data-scroll-speed="2" data-scroll-delay="0.2" className="absolute bottom-[10vw] right-[10vw] w-[200px] leading-normal">
            with GSAP ScrollTrigger & Locomotive Scroll.
          </p>
        </div>
      </section>
      
      <section className="horizontal-scroll h-screen overflow-hidden flex left-0" data-textcolor="#bcb8ad" data-bgcolor="#815946">
        <div className="pin-wrap h-screen flex justify-start items-center p-[50px_10vw]">
          <h2 className="min-w-[60vw] p-[0_5vw] text-2xl max-w-[400px]">This whole horizontal section should be brown</h2>
          <img src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="" className="h-[80vh] w-auto object-cover min-w-[60vw] p-[0_5vw]" />
          <img src="https://images.pexels.com/photos/3371358/pexels-photo-3371358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="" className="h-[80vh] w-auto object-cover min-w-[60vw] p-[0_5vw]" />
          <img src="https://images.pexels.com/photos/3618545/pexels-photo-3618545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="" className="h-[80vh] w-auto object-cover min-w-[60vw] p-[0_5vw]" />
        </div>
      </section>
      
      <section data-textcolor="#032f35" data-bgcolor="#bcb8ad" className="min-h-screen w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-[50px_10vw] m-auto place-items-center">
        <div>
          <h2 data-scroll data-scroll-speed="1" className="text-2xl max-w-[400px]">
            <span>This should be a light cream background</span>
          </h2>
        </div>
      </section>
      
      <section data-bgcolor="#e3857a" data-textcolor="#f1dba7" className="min-h-screen w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-[50px_10vw] m-auto place-items-center">
        <img src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="h-[80vh] w-auto object-cover" />
        <h2 data-scroll data-scroll-speed="1" className="text-2xl max-w-[400px]">This should be a pink background</h2>
      </section>
      
      <section className="horizontal-scroll h-screen overflow-hidden flex left-0" data-textcolor="#bcb8ad" data-bgcolor="#815946">
        <div className="pin-wrap h-screen flex justify-start items-center p-[50px_10vw]">
          <h2 className="min-w-[60vw] p-[0_5vw] text-2xl max-w-[400px]">This whole horizontal section should be brown</h2>
          <img src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="" className="h-[80vh] w-auto object-cover min-w-[60vw] p-[0_5vw]" />
          <img src="https://images.pexels.com/photos/3371358/pexels-photo-3371358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="" className="h-[80vh] w-auto object-cover min-w-[60vw] p-[0_5vw]" />
          <img src="https://images.pexels.com/photos/3618545/pexels-photo-3618545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="" className="h-[80vh] w-auto object-cover min-w-[60vw] p-[0_5vw]" />
        </div>
      </section>
      
      <section data-textcolor="#032f35" data-bgcolor="#bcb8ad" className="min-h-screen w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-[50px_10vw] m-auto place-items-center">
        <div>
          <h2 data-scroll data-scroll-speed="1" className="text-2xl max-w-[400px]">
            <span>This should be a light cream background</span>
          </h2>
        </div>
      </section>
      
      <section data-bgcolor="#e3857a" data-textcolor="#f1dba7" className="min-h-screen w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-[50px_10vw] m-auto place-items-center">
        <img src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="h-[80vh] w-auto object-cover" />
        <h2 data-scroll data-scroll-speed="1" className="text-2xl max-w-[400px]">This should be a pink background</h2>
      </section>
    </div>
  );
};

export default HorizontalScrollWithColors;