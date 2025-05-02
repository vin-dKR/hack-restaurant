'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/sub-components/Button';

const sections = [
  {
    title: "Our Story",
    description: "Founded in 2010, our restaurant has been serving exceptional cuisine in a warm and inviting atmosphere. Our journey began with a simple mission: to create memorable dining experiences through carefully crafted dishes and impeccable service.",
    image: "/images/about/restaurant-interior.jpg",
    imageAlt: "Restaurant interior with elegant decor",
    reverse: false
  },
  {
    title: "Our Philosophy",
    description: "We believe in the power of fresh, locally-sourced ingredients and the art of traditional cooking techniques. Every dish tells a story, and we're committed to preserving the authenticity of flavors while adding our unique contemporary twist.",
    image: "/images/about/chef-preparing.jpg",
    imageAlt: "Chef preparing food in our kitchen",
    reverse: true
  },
  {
    title: "Our Team",
    description: "Our team of passionate chefs and dedicated staff work together to create an unforgettable dining experience. With years of expertise and a shared love for culinary excellence, we strive to exceed your expectations with every visit.",
    image: "/images/about/kitchen-team.jpg",
    imageAlt: "Our professional kitchen team",
    reverse: false
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const Section = ({ title, description, image, imageAlt, reverse }: typeof sections[0]) => (
  <motion.div 
    {...fadeInUp}
    className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center mb-16 md:mb-24`}
  >
    <div className="w-full md:w-1/2">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-xl"
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </motion.div>
    </div>
    <div className="w-full md:w-1/2">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-gray-600 text-lg leading-relaxed"
      >
        {description}
      </motion.p>
    </div>
  </motion.div>
);

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 -top-12 lg:-top-5 z-0 mx-4 lg:mx-10 rounded rounded-[30px] lg:rounded-[60px] overflow-hidden">
          <Image
            src="/images/about/restaurant-interior.jpg"
            alt="Restaurant interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto"
          >
            Discover the story behind our passion for exceptional dining
          </motion.p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Experience Our Cuisine?
          </h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button href="/reservations" variant="green" size="lg">
              Make a Reservation
            </Button>
            <Button href="/menu" variant="orange" size="lg">
              View Our Menu
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
} 