"use client"

import ParallaxHero from "./components/ParallaxHero";
import ScrollBanner from "./components/ScrollBanner";
import FeatureSection from "./components/FeatureSection";
import SpecialOffers from "./components/SpecialOffers";
import {Testimonials} from "./components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax */}
      <ParallaxHero />

      {/* Food Banner */}
      <ScrollBanner />

      {/* Featured Section */}
      <FeatureSection />

      {/* Special Offers */}
      <SpecialOffers />

      {/* Testimonials */}
      <Testimonials />
    </main>
  );
}
