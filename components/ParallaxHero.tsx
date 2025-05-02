'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ParallaxText from './sub-components/parallax-hero/ParallaxText';
import Button from './sub-components/Button';

export default function ParallaxHero() {
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  // const [rotationCount, setRotationCount] = useState(0);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative h-[95vh] md:h-[100vh] overflow-hidden bg-white">
      {/* Image Background */}
      <div className="absolutez inset-0 z-0 rounded rounded-lg">
        <Image 
          src={isMobile ? "/hero/mobhero.jpg" : "/hero/hero3.jpg"} 
          alt="Hero Background"

          quality={100}
          priority
          sizes="100vw"
          fill
          className="object-cover object-center py-4 xl:py-8 px-4 xl:px-12 rounded-[45px] md:rounded-[90px] p-2"
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
      

      {/* Parallax Content */}
      <div
        ref={heroRef}
        className="relative z-10 h-full flex items-center justify-center text-center px-4 mt-5 lg:mt-20"
      >
        <div className="max-w-4xl">
          <div className='mb-60 xl:mb-50'>
          <div className="mb-2">
            <div className="text-5xl xl:text-7xl font-bold tracking-tight font-heading">
                <ParallaxText 
                  text="Fuel Your Hunger" 
                  speed={0.3} 
                  className="text-shadow-xs" 
                  style={{
                    fontFamily: 'Questrial',
                    // fontSize: "80px"
                  }}
                />
            </div>
          </div>
          
          <div className="mb-8 text-lg md:text-3xl font-light tracking-wide font-sans text-shadow-md">
            <ParallaxText 
              text="eat like a legend" 
              speed={0.4} 
              className="text-lg bg-gradient-to-b from-orange-700 to-yellow-300 md:from-[#244021] md:from-40% md:to-[#83A580] bg-clip-text text-transparent text-shadow-md text-shadow-black"
              style={{
                fontFamily: 'SeoulNamsanCondensed-Black',
                fontSize: "30px",
                textShadow: '1px 1px 1px rgba(234, 234, 234, 0.15)'
              }}
            />
          </div>
          </div>

          <div className="relative flex justify-end md:items-center md:justify-center">
            <div className='absolute top-0 md:top-6 flex flex-col md:flex-row md:gap-4 gap-3 justify-end md:justify-center lg:justify-center'>
              <Button href="/reservations" variant="green" size="lg">
                Reserve a Table
              </Button>
              <Button href="/menu" variant="white" size="lg">
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}