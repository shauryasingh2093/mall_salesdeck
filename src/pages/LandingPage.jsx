import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(20px)' }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="relative w-full h-screen overflow-hidden bg-dark-900 cursor-none flex items-center justify-center"
    >
      
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full relative filter contrast-110 brightness-75"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/assets/Luxury_Mall_Opening_Shot_Generation.mp4"
          />
        </motion.div>
        <div className="absolute inset-0 bg-dark-900/40 z-20" />
      </div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center px-6 -mt-48">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center relative"
        >
          {/* Subtle glow behind logo to make dark text visible without altering original image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-80 md:h-80 bg-white/15 blur-[60px] rounded-full pointer-events-none z-0" />
          
          <img src="/assets/wem-logo.png" alt="WEM" className="w-32 h-32 md:w-56 md:h-56 object-contain mb-12 cursor-hover-logo relative z-10" />
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          onClick={() => navigate('/prologue')}
          className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 rounded-full transition-all duration-500 cursor-hover"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-white font-medium">
            Enter Experience
          </span>
          <ChevronRight className="text-white group-hover:translate-x-1 transition-transform duration-500" size={16} />
        </motion.button>
      </div>

    </motion.main>
  );
}
