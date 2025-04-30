'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const foodItems = [
  {
    id: 1,
    name: 'Fresh Pasta',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=120&h=120&fit=crop',
    alt: 'Pasta'
  },
  {
    id: 2,
    name: 'Wood-fired Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=120&h=120&fit=crop',
    alt: 'Pizza'
  },
  {
    id: 3,
    name: 'Prime Steak',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=120&h=120&fit=crop',
    alt: 'Steak'
  },
  {
    id: 4,
    name: 'Garden Salad',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=120&h=120&fit=crop',
    alt: 'Salad'
  },
  {
    id: 5,
    name: 'Sweet Desserts',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=120&h=120&fit=crop',
    alt: 'Dessert'
  }
];

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
              {foodItems.map((item) => (
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