'use client';

import { motion } from 'framer-motion';
import BlureCard from './ui/BlureCard';
import Image from 'next/image';
import Toast from './ui/Toast';
import { useState } from 'react';

const offers = [
  {
    title: "Happy Hour",
    time: "4 PM - 6 PM Daily", 
    description: "50% off on selected drinks and appetizers",
    icon: (
      <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Weekend Brunch",
    time: "Saturday & Sunday",
    description: "Complimentary mimosa with any brunch entrée",
    icon: (
      <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Private Events",
    time: "Book Your Event",
    description: "Special packages for groups of 10 or more",
    icon: (
      <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    )
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10
    }
  }
};

const cardVariants = {
  initial: {
    scale: 1
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  }
};

const cardsData = [
  {
    id: 1,
    title: "Happy Hours",
    description: "4 PM - 6 PM",
    paragraph: "50% off on selected drinks and appetizers",
    image: "/imgs/cards/card1.png",
  },
  {
    id: 2,
    title: "Weekend Brunch",
    description: "Saturday & Sunday",
    paragraph: "Complimentary mimosa with any brunch entrée",
    image: "/imgs/cards/card2.png",
  },
  {
    id: 3,
    title: "Private Events",
    description: "Book an event",
    paragraph: "Special packages for groups of 10 or more",
    image: "/imgs/cards/card3.png",
  },
]

export default function SpecialOffers() {
  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    const textToCopy = 'DELICIOUS40';
    
    // Create a temporary input element
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    
    // Make the textarea out of viewport
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    
    // Select and copy the text
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
    
    // Clean up
    document.body.removeChild(textArea);
  };

  return (
    <div className='bg-white'>
      <div className='relative bg-green-950 mx-4 lg:mx-10 p-10 rounded-xl'>
      <div 
          className="absolute inset-0 object-cover mix-blend-overlay opacity-50 bg-[url('/imgs/green-noise.png')]"
        />
        <div className='flex flex-col justify-between lg:flex-row lg:justify-between lg:items-center'>
          <h1 className='text-white text-center lg:text-left text-6xl text-shadow-lg mb-15'>Special Offers</h1>

          <div className='flex justify-center items-center mb-10'>
            <div className="relative w-[300px] h-[80px] bg-white/10 rounded-lg overflow-hidden">
              {/* Left semi-circle cutout */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-green-950 rounded-full" />
              
              {/* Right semi-circle cutout */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-green-950 rounded-full" />
              
              {/* Dashed line down the middle */}
              <div className="absolute left-6 top-1/2 w-[calc(100%-48px)] border-t-2 border-dashed border-white/20" />

              {/* Coupon code text */}
              <div className="absolute top-0 left-0 w-full h-1/2 flex items-center justify-center gap-2">
                <span className="text-white font-bold text-xl">DELICIOUS40</span>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                  </svg>
                </button>
              </div>

              {/* Offer text */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 flex items-center justify-center">
                <span className="text-white/80 text-sm">flat 40% off on 1st order</span>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-10 xl:gap-15 2xl:gap-20 mx-10 lg:mx-4 xl:mx-20 2xl:mx-60 place-items-center justify-items-center'>
          {cardsData.map((card) => (
            <BlureCard key={card.id} card={card} />
          ))}
        </div>
      </div>
      <Toast 
        message="Coupon code copied to clipboard!" 
        isVisible={showToast} 
        onClose={() => setShowToast(false)} 
      />
    </div>
  );
}