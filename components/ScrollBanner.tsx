'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { hotNow } from '@/data/foodItems';

export default function ScrollBanner() {
  const { scrollY } = useScroll();
  const rawX = useTransform(scrollY, [0, 700], [100, -500]);
  const x = useSpring(rawX, {
    stiffness: 1000,
    damping: 50,
    mass: 0.5,
  });

  return (
    <div className="w-full px-8 md:px-10 py-12 bg-white">
      <div className="w-full overflow-hidden h-[180px] px-4 justify-center items-center relative bg-gradient-to-b from-green-950/90 from-60% to-black to-140% rounded-2xl">
        <div 
          className="absolute inset-0 object-cover mix-blend-overlay opacity-50 bg-[url('/imgs/green-noise.png')]"
        />
      <div className='flex justify-center items-center bg-white/90 text-green-900 rounded-xl px-4 py-1 w-fit mx-auto mt-2 shadow-lg'>
        <p className="text-2xl font-bold text-shadow-lg">🔥 Hot Now</p>
      </div>
        <motion.div 
          className="absolute whitespace-nowrap flex items-center gap-8 py-4 mt-2 will-change-transform" 
          style={{ x }}
          initial={{ x: 0 }}
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-12">
              {hotNow.map((item) => (
                <div key={item.id} className="flex flex-col items-center gap-2">
                  <Image 
                    src={item.image}
                    alt={item.alt}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                    priority
                  />
                  <span className="text-sm font-normal text-white text-center">{item.name}</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 