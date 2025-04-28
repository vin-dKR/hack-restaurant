'use client';

import { motion } from 'framer-motion';

interface WaveAnimationProps {
  borderColor?: string;
  className?: string;
  waveCount?: number;
  duration?: number;
  scale?: number;
}

const WaveAnimation = ({
  borderColor = "border-green-900/20",
  className = "",
  waveCount = 6,
  duration = 3,
  scale = 1.5
}: WaveAnimationProps) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {[...Array(waveCount)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute inset-0 rounded-full border ${borderColor}`}
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ 
            scale: [0, scale],
            opacity: [1, 0]
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            delay: i * (duration / waveCount),
            ease: [0.4, 0, 0.2, 1],
            repeatDelay: 0
          }}
        />
      ))}
    </div>
  );
};

export default WaveAnimation; 