'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import WaveAnimation from './WaveAnimation';
import Button from './ui/Button';

export default function FeatureSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Blurred Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute -inset-4 bg-white/30 backdrop-blur-sm rounded-3xl border border-white/50 shadow-[0_0_20px_rgba(255,255,255,0.3)]"></div>
      </div>

      {/* Decorative Food Illustrations */}
      {/* <div 
        className="absolute -top-10 lg:top-0 -left-4 w-120 h-70 select-none"
        onDragStart={(e) => e.preventDefault()}
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className="relative w-full h-full">
          <Image 
            src="/imgs/leaf2.png" 
            alt="Decorative leaf" 
            fill 
            className="object-contain pointer-events-none"
            unoptimized
            onContextMenu={(e) => e.preventDefault()}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            draggable="false"
          />
        </div>
      </div> */}
      {/* <div 
        className="absolute -bottom-40 lg:-bottom-20 -right-5 w-102 h-102 -rotate-90 select-none"
        onDragStart={(e) => e.preventDefault()}
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className="relative w-full h-full">
          <Image 
            src="/imgs/leaf4.png" 
            alt="Decorative herb" 
            fill 
            className="object-contain pointer-events-none"
            unoptimized
            onContextMenu={(e) => e.preventDefault()}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            draggable="false"
          />
        </div>
      </div> */}
      
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
        <p className='text-center text-gray-950 text-5xl md:text-8xl mb-4'>feature of the day</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16 gap-10 items-center">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden group"
          >
            <div className="absolute -inset-1 bg-white/20 backdrop-blur-sm rounded-2xl"></div>
            <div className="relative h-full border-8 border-black/10 rounded-3xl overflow-hidden group-hover:scale-120 transition-transform duration-700">
              <Image
                src="/featured-dish.jpg"
                alt="Signature dish"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-30" />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-40">
              <h3 className="text-3xl text-white mb-2">Chef's Special</h3>
              <p className="text-gray-200">Handcrafted with passion and precision</p>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative"
          >
            <div className="absolute -inset-4 bg-white/20 backdrop-blur-sm rounded-2xl"></div>
            <div className="relative z-10 space-y-4">
              <h2 style={{fontFamily: 'Happy'}} className="text-5xl font-serif text-gray-900">Our Signature Experience</h2>
              <div className="w-20 h-1 bg-green-900"></div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed relative z-10">
              Indulge in a culinary journey that combines traditional flavors with modern innovation. Our chefs craft each dish with precision and passion, using only the finest ingredients sourced from local producers.
            </p>

            <div className="grid grid-cols-2 gap-6 relative z-10">
              <div className="space-y-2">
                <motion.div 
                  className="relative w-12 h-12 rounded-full bg-green-900 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <WaveAnimation 
                    borderColor="border-white"
                    waveCount={3}
                    duration={2}
                    scale={1.5}
                  />
                </motion.div>
                <h3 className="text-lg font-medium text-gray-900">Fresh Ingredients</h3>
                <p className="text-gray-600">Sourced daily from local farms</p>
              </div>
              <div className="space-y-2">
                <motion.div 
                  className="relative w-12 h-12 rounded-full bg-green-900 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <WaveAnimation 
                    borderColor="border-white"
                    waveCount={3}
                    duration={2}
                    scale={1.5}
                  />
                </motion.div>
                <h3 className="text-lg font-medium text-gray-900">Perfect Timing</h3>
                <p className="text-gray-600">Prepared to order with care</p>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-6'>
            <Link 
              href="/reservations" 
            >
              <Button variant="green" size="lg" className='w-[200px]'>
                Book a Table
              </Button>
            </Link>
            <Link href="/menu">
              <Button variant="orange" size="lg" className='w-[200px]'>
                Order Now
              </Button>
            </Link>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
} 