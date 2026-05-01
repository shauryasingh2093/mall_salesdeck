import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Prologue() {
  const navigate = useNavigate();

  return (
    <motion.main 
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, filter: 'blur(20px)' }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="relative w-full h-screen overflow-hidden bg-dark-900 cursor-none"
    >
      
      {/* Fullscreen Video Presentation */}
      <div className="absolute inset-0 z-0 bg-dark-900">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full h-full overflow-hidden"
        >
          {/* Play the local story.mp4 video */}
          <video
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="/assets/story.mp4"
            onEnded={() => navigate('/hub')} // Automatically navigate when video finishes
          />
        </motion.div>
      </div>

      {/* Dark gradient at the bottom so the skip button is visible */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent z-10 pointer-events-none" />

      {/* Skip Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 right-12 z-20"
      >
        <button 
          onClick={() => navigate('/hub')}
          className="group inline-flex items-center justify-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full transition-all duration-500 cursor-hover shadow-xl"
        >
          <span className="text-xs tracking-[0.2em] uppercase font-bold">
            Skip Intro
          </span>
          <ChevronRight className="group-hover:translate-x-1 transition-transform duration-500" size={16} />
        </button>
      </motion.div>

    </motion.main>
  );
}
