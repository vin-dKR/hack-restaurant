import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TestimonialCard } from './sub-components/testimonials/TestimonialCard';
import { ShowMoreButton } from './sub-components/testimonials/ShowMoreButton';
import { testimonials } from '@/data/testimonials';

export const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displayedTestimonials = showAll 
    ? testimonials 
    : testimonials.slice(0, isMobile ? 3 : 6);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">
            Discover why people love dining with us
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
                showAll={showAll}
              />
            ))}
          </div>
          {!showAll && (
            <div className="absolute md:w-[120%] w-[100%] left-1/2 transform -translate-x-1/2 -bottom-6 left-0 right-0 h-40 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
          )}
        </div>

        <ShowMoreButton
          showAll={showAll}
          onClick={() => setShowAll(!showAll)}
        />
      </div>
    </section>
  );
}; 