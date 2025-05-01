import { motion } from 'framer-motion';
import Image from 'next/image';

interface AvatarProps {
  name: string;
  avatar: string;
}

export const Avatar = ({ name, avatar }: AvatarProps) => (
  <motion.div 
    className="relative w-12 h-12 rounded-full overflow-hidden mr-4"
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    {avatar ? (
      <Image
        src={avatar}
        alt={name}
        fill
        className="object-cover"
      />
    ) : (
      <div className="w-full h-full bg-green-950 flex items-center justify-center text-white text-xl">
        {name[0]}
      </div>
    )}
  </motion.div>
); 