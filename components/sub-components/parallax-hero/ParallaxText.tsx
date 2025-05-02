'use client';

import { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface ParallaxTextProps {
  text: string;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
  handwritten?: boolean;
  italic?: boolean;
}

export default function ParallaxText({ 
  text, 
  speed = 0.5, 
  className,
  style,
  // handwritten = false,
  italic = false
}: ParallaxTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !textRef.current || !shadowRef.current) return;
      
      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;
      
      // Move main text up
      textRef.current.style.transform = `translate3d(0, ${-rate * 0.5}px, 0)`;
      
      // Move shadow text down and add blur for depth effect
      shadowRef.current.style.transform = `translate3d(0, ${rate * 0.5}px, 0)`;
      shadowRef.current.style.filter = `blur(${Math.min(rate * 0.05, 5)}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  const baseTextClass = "relative z-20 text-white font-bold transition-transform duration-200 text-shadow-black text-shadow-md";
  const italicClass = italic ? "italic" : "";

  return (
    <div ref={containerRef} className="relative">
      {/* Main text */}
      <div
        ref={textRef}
        className={twMerge(baseTextClass, italicClass, className)}
        style={style}
      >
        {text}
      </div>
    </div>
  );
} 