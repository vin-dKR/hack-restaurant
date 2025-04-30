'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navigationItems = [
  { name: 'Menu', href: '/menu' },
  { name: 'Reservations', href: '/reservations' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 100], [60, 60]);
  const opacity = useTransform(scrollY, [0, 100], [0.7, 0.9]);
  const width = useTransform(scrollY, [0, 100], [isMobile ? '90%' : '60%', isMobile ? '85%' : '50%']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <motion.nav 
        className="fixed left-1/2 -translate-x-1/2 z-50 rounded-xl mt-10 md:mt-15"
        style={{ 
          height,
          width,
          backgroundColor: 'rgba(164, 164, 164, 0.07)',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl md:text-2xl font-serif text-white">
                <Image src="/imgs/logo.png" alt="Logo" width={40} height={40} />
              </Link>
            </div>

            {/* Navigation Links - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-4 lg:space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative text-white hover:text-gray-200 transition-colors group"
                  >
                    <span className="relative z-10 font-medium tracking-wide hover:scale-105 transition-transform text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] hover:drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Order Now Button */}
            <div className="hidden md:block relative">
              <Link
                href="/order"
                className="relative bg-green-900/80 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl hover:bg-green-700 transition-all duration-300 group overflow-hidden backdrop-blur-sm border-4 border-white/20 hover:border-white/30"
              >
                <span className="relative z-10 font-medium">Order Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-700 transform rounded-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="absolute -inset-1 bg-white/10 backdrop-blur-sm rounded-xl -z-10"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                className="text-white p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[100px] left-1/2 -translate-x-1/2 z-40 w-[85%] md:hidden"
          >
            <div className="relative bg-white/10 backdrop-blur-sm rounded-xl border border-white/70 p-4 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>
              <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]"></div>
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-white/30 to-transparent blur-sm opacity-30"></div>
              <div className="relative flex flex-col justify-center items-center space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-800 hover:text-gray-950 transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/order"
                  className="bg-green-900/80 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition-colors text-center border border-4 border-white/50 w-[60%] shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Order Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 