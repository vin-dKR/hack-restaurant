import { motion } from 'framer-motion';

interface ShowMoreButtonProps {
  showAll: boolean;
  onClick: () => void;
}

export const ShowMoreButton = ({ showAll, onClick }: ShowMoreButtonProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex justify-center mt-8"
  >
    <motion.button
      onClick={onClick}
      className="px-8 py-3 bg-green-950 text-white rounded-full font-medium hover:bg-green-900 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {showAll ? "Show Less" : "Show More Reviews"}
    </motion.button>
  </motion.div>
); 