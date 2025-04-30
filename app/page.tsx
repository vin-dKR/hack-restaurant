"use client"

import Image from "next/image";
import Link from "next/link";
import ParallaxHero from "./components/ParallaxHero";
import FoodCarousel from "./components/FoodCarousel";
import ScrollBanner from "./components/ScrollBanner";
import FeatureSection from "./components/FeatureSection";
import SpecialOffers from "./components/SpecialOffers";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Parallax */}
      <ParallaxHero />

      {/* Food Banner */}
      <div className="">
        <ScrollBanner />
      </div>

      {/* Featured Section */}
      <FeatureSection />

      {/* Special Offers */}
      <SpecialOffers />

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
