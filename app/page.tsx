"use client"

import Image from "next/image";
import Link from "next/link";
import ParallaxHero from "./components/ParallaxHero";
import FoodCarousel from "./components/FoodCarousel";
import ScrollBanner from "./components/ScrollBanner";
import FeatureSection from "./components/FeatureSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Parallax */}
      <ParallaxHero />

      {/* Food Banner */}
      <ScrollBanner />

      {/* Featured Section */}
      <FeatureSection />

      {/* Special Offers */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-12">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Happy Hour</h3>
              <p className="text-gray-600 mb-4">4 PM - 6 PM Daily</p>
              <p className="text-sm text-gray-500">50% off on selected drinks and appetizers</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Weekend Brunch</h3>
              <p className="text-gray-600 mb-4">Saturday & Sunday</p>
              <p className="text-sm text-gray-500">Complimentary mimosa with any brunch entrée</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Private Events</h3>
              <p className="text-gray-600 mb-4">Book Your Event</p>
              <p className="text-sm text-gray-500">Special packages for groups of 10 or more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-12">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4" />
                <div>
                  <h4 className="font-serif">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Food Critic</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The culinary experience at Taste Magic is nothing short of extraordinary. Each dish tells a story of passion and innovation."
              </p>
            </div>
            <div className="glass-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4" />
                <div>
                  <h4 className="font-serif">Michael Chen</h4>
                  <p className="text-sm text-gray-500">Regular Guest</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The attention to detail in every aspect of the dining experience is remarkable. A true gem in the city."
              </p>
            </div>
            <div className="glass-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4" />
                <div>
                  <h4 className="font-serif">Emily Rodriguez</h4>
                  <p className="text-sm text-gray-500">Food Blogger</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The fusion of traditional and modern techniques creates a unique dining experience that keeps me coming back."
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
