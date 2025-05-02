'use client';

import BlureCard from './sub-components/BlureCard';
import Toast from './sub-components/Toast';
import { useState } from 'react';
import { cardsData } from '@/data/offersData';

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
    <div className='bg-gray-50'>
      <div className='relative bg-green-950 mx-4 lg:mx-10 p-10 rounded-3xl'>
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