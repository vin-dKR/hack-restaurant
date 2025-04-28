'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const foodItems = [
  {
    name: "Burger Combo",
    image: "/food/burger-combo.jpg",
    description: "Deluxe burger with fries and drink"
  },
  {
    name: "Classic Burger",
    image: "/food/burger.jpg",
    description: "Signature beef burger"
  },
  {
    name: "Burger Combo Deluxe",
    image: "/food/burger-combo-deluxe.jpg",
    description: "Double burger with extra fries and drink"
  }
];

export default function FoodCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollY = window.scrollY;
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      if (scrollY + windowHeight < containerTop || scrollY > containerTop + containerHeight) {
        return;
      }

      const progress = (scrollY - containerTop + windowHeight) / (containerHeight + windowHeight);
      const maxRotation = 90; // Quarter circle rotation for curved arrangement

      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        // Calculate position in the curve
        const angle = (index * (90 / (foodItems.length - 1)) + progress * maxRotation) % 90;
        const radius = 400; // Increased radius for wider curve
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        // Apply transformations with scale effect
        const scale = 1 + Math.sin((angle * Math.PI) / 180) * 0.2; // Scale effect based on position
        item.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative h-[600px] overflow-hidden bg-gradient-to-b from-white to-gray-100"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="relative w-full h-full">
          {foodItems.map((item, index) => (
            <div
              key={item.name}
              ref={el => {
                itemsRef.current[index] = el;
              }}
              className="absolute w-72 transition-all duration-500 hover:scale-105"
              style={{
                transform: `translate(${Math.cos((index * (90 / (foodItems.length - 1)) * Math.PI) / 180) * 400}px, 
                           ${Math.sin((index * (90 / (foodItems.length - 1)) * Math.PI) / 180) * 400}px)`
              }}
            >
              <div className="glass-card p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
                <div className="relative h-56 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transform hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 