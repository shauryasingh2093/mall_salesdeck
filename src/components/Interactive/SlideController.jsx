import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useDeckNavigation } from '../../hooks/useDeckNavigation';

export default function SlideController() {
  const { currentIndex, totalSlides, hasNext, hasPrev, next, prev } = useDeckNavigation();

  // Hide the controller completely on the Video (Prologue) page so it doesn't distract
  if (currentIndex === 1) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-[100] flex items-center gap-4 mix-blend-difference pointer-events-auto"
    >
      
      {/* Slide Progress Indicator */}
      <div className="flex items-center gap-2 mr-4 hidden md:flex text-white/50 font-mono text-xs">
        <span>0{currentIndex + 1}</span>
        <div className="w-8 h-[1px] bg-white/20" />
        <span>0{totalSlides}</span>
      </div>

      <button
        onClick={prev}
        disabled={!hasPrev}
        className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
          hasPrev 
            ? 'border-white/20 text-white hover:bg-white hover:text-black cursor-hover' 
            : 'border-white/5 text-white/10 cursor-not-allowed'
        }`}
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={next}
        disabled={!hasNext}
        className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
          hasNext 
            ? 'border-white/20 text-white hover:bg-white hover:text-black cursor-hover' 
            : 'border-white/5 text-white/10 cursor-not-allowed'
        }`}
      >
        <ChevronRight size={20} />
      </button>

    </motion.div>
  );
}
