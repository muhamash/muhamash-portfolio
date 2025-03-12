"use client";

import { cn } from '@/utils/helper/helper';
import { useEffect, useRef } from 'react';

// interface AnimatedSectionProps {
//   children: React.ReactNode;
//   className?: string;
//   delay?: number;
//   threshold?: number;
//   animation?: 'fade-in' | 'slide-in' | 'slide-from-left' | 'slide-from-right';
// }

const AnimatedSection = ({
  children,
  className,
  delay = 0,
  threshold = 0.2,
  animation = 'fade-in'
}) => {
  const sectionRef = useRef(null);

    useEffect( () =>
    {
        const section = sectionRef.current;
        if ( !section ) return;

        const observer = new IntersectionObserver(
            ( entries ) =>
            {
                entries.forEach( ( entry ) =>
                {
                    if ( entry.isIntersecting )
                    {
                        setTimeout( () =>
                        {
                            section.classList.add( animation );
                        }, delay );
                        observer.unobserve( section );
                    }
                } );
            },
            { threshold }
        );

        observer.observe( section );

        return () =>
        {
            if ( section ) observer.unobserve( section );
        };
    }, [ animation, delay, threshold ] );

    return (
        <div
            ref={ sectionRef }
            className={ cn( 'opacity-0', className ) }
            style={ { animationDelay: `${delay}ms` } }
        >
            { children }
        </div>
    );
};

export default AnimatedSection;