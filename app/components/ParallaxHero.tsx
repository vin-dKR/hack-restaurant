'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ParallaxText from './ParallaxText';

export default function ParallaxHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [rotationCount, setRotationCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.5;
      heroRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero/hero3.jpg" 
          alt="Hero Background"

          quality={100}
          priority
          sizes="100vw"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-20%" />
      </div>

      {/* Parallax Content */}
      <div
        ref={heroRef}
        className="relative z-10 h-full flex items-center justify-center text-center px-4"
      >
        <div className="max-w-4xl mb-90 xl:mb-0 xl:mx-auto">
          <div className='xl:mb-50'>
          <div className="mb-6">
            <div className="text-6xl xl:text-7xl font-bold tracking-tight font-heading">
              <div className='flex flex-row gap-2 items-baseline justify-center'>
                <ParallaxText text="A" speed={0.3} className="font-heading text-shadow-xs" />
                <ParallaxText 
                  text="taste" 
                  speed={0.3} 
                  className="text-5xl xl:text-7xl font-bold font-angelos mx-5 text-shadow-xs" 
                  style={{ fontFamily: 'Angelos, sans-serif' }}
                />
                <ParallaxText text="of" speed={0.3} className="font-merriweather text-shadow-xs" />
              </div>
              <ParallaxText text="Artistry" speed={0.5} className="font-raleway text-shadow-xs" />
            </div>
          </div>
          
          <div className="mb-8 text-md md:text-xl font-light tracking-wide font-sans text-shadow-md">
            <ParallaxText text="Where Flavor Meets Passion" speed={0.4} />
          </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className='absolute top-0 md:top-6 flex flex-col md:flex-row md:gap-4 gap-3 justify-center'>
              <button className="bg-green-950 rounded-full border-4 border-white/40 md:w-[250px] group relative overflow-hidden py-2">
                <span className="relative z-10 text-sm md:text-base">Reserve a Table</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
              <button className="border-4 border-white/90 rounded-full py-2 md:py-3 w-[160px] md:w-[200px] group relative overflow-hidden">
                <span className="relative z-10 text-sm md:text-base">Order Now</span>
                <div className="absolute inset-0 bg-green-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}