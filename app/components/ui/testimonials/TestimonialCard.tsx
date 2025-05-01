import { motion } from 'framer-motion';
import { Avatar } from './Avatar';
import { Rating } from './Rating';
import { platformStyles, platformIcons } from './constants';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  platform: 'google' | 'twitter' | 'facebook' | 'instagram';
  avatar: string;
  rating?: number;
  date: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  showAll: boolean;
}

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95,
    rotateX: 0
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10
    }
  },
  hover: {
    scale: 1.02,
    y: -5,
    rotateX: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  continuousAnimation: {
    y: [0, 30, 0],
    rotateX: [0, 10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const TestimonialCard = ({ testimonial, index, showAll }: TestimonialCardProps) => (
  <motion.div
    key={testimonial.id}
    variants={cardVariants}
    initial="hidden"
    whileInView="show"
    whileHover="hover"
    animate={!showAll ? "continuousAnimation" : undefined}
    style={{
      animationDelay: `${index * 0.8}s`,
      transformStyle: "preserve-3d",
      transformOrigin: "center center",
      willChange: "transform"
    }}
    viewport={{ once: true }}
    className={`${platformStyles[testimonial.platform]} p-6 rounded-xl cursor-pointer transform-gpu shadow-lg hover:shadow-xl`}
  >
    <motion.div 
      className="flex items-center justify-between mb-4"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex items-center">
        <Avatar name={testimonial.name} avatar={testimonial.avatar} />
        <div>
          <h4 className="text-black">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
      <motion.div 
        className="text-gray-400"
        whileHover={{ scale: 1.2, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {platformIcons[testimonial.platform]}
      </motion.div>
    </motion.div>
    <motion.p 
      className="text-gray-600 mb-4"
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {testimonial.content}
    </motion.p>
    <motion.div 
      className="flex items-center justify-between text-sm text-gray-400"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {testimonial.rating && <Rating rating={testimonial.rating} />}
      <span>{testimonial.date}</span>
    </motion.div>
  </motion.div>
); 