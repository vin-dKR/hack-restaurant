import { motion, AnimatePresence } from 'framer-motion';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, isVisible, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-15 right-4 z-50"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-4 shadow-lg">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500 text-shadow-lg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-white lg:text-black text-shadow-lg">{message}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 