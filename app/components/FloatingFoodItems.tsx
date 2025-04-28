import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { foodItems } from '@/data/foodItems';

export default function FloatingFoodItems() {
  const ingredientsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      ingredientsRef.current.forEach((item, index) => {
        if (!item) return;
        const radius = 300;
        const totalItems = foodItems.length;
        const angle = ((scrolled * 0.3) + (index * (360 / totalItems))) % 360;
        const radian = (angle * Math.PI) / 180;
        
        const x = Math.cos(radian) * radius;
        const y = Math.sin(radian) * radius;
        
        const offsetX = window.innerWidth - radius;
        
        item.style.transform = `translate(${offsetX + x}px, ${y}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 right-0 z-20 pointer-events-none">
      {foodItems.slice(0, 6).map((item, index) => (
        <div
          key={item.id}
          ref={el => { ingredientsRef.current[index] = el; }}
          className="absolute top-1/2 -translate-y-1/2 w-24 h-24 transition-transform duration-300"
        >
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover scale-150"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      ))}
      
      {/* Semi-transparent gradient to hide part of the circle */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-black/60 to-transparent" />
    </div>
  );
} 