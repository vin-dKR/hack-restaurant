'use client';

import { motion } from 'framer-motion';

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

export default function SpecialOffers() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Special Offers
          </h2>
          <div className="w-24 h-px bg-gray-300 mx-auto"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {offers.map((offer) => (
            <motion.div
              key={offer.title}
              variants={itemVariants}
              whileHover="hover"
              className="relative group"
            >
              <motion.div
                variants={cardVariants}
                className="bg-white rounded-2xl p-8 shadow-[0_0_20px_rgba(0,0,0,0.05)] backdrop-blur-sm border border-gray-100/50 
                          transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] 
                          hover:border-gray-200/50 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gray-50 to-gray-100 
                              rounded-2xl flex items-center justify-center shadow-inner">
                  {offer.icon}
                </div>

                <h3 className="text-2xl font-light text-gray-900 mb-2 text-center">{offer.title}</h3>
                <p className="text-gray-600 font-medium mb-3 text-sm text-center">{offer.time}</p>
                <p className="text-gray-500 text-sm text-center leading-relaxed">{offer.description}</p>
                
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white/20 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}