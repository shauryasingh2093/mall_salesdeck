import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative w-full h-screen overflow-hidden bg-dark-900 cursor-none flex items-center justify-center"
    >
      
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
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
      <div className="relative z-30 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center relative mb-12"
        >
          <img 
            src="/assets/wem-logo.png" 
            alt="WEM" 
            className="w-16 h-16 md:w-20 md:h-20 object-contain mb-8 filter brightness-110" 
          />
          <h1 className="font-display text-white text-3xl md:text-4xl tracking-[0.4em] uppercase font-light">
            West Edmonton Mall
          </h1>
          <div className="w-12 h-[1px] bg-gold-500/50 mt-6" />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={() => navigate('/prologue')}
          className="group relative flex items-center justify-center gap-4 px-10 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 cursor-hover overflow-hidden"
        >
          <span className="text-[10px] tracking-[0.5em] uppercase text-white/80 group-hover:text-white transition-colors">
            Enter Experience
          </span>
          <ChevronRight className="text-white/40 group-hover:text-gold-500 group-hover:translate-x-1 transition-all duration-500" size={14} />
          
          {/* Subtle button border animation */}
          <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-500 group-hover:w-full transition-all duration-700" />
        </motion.button>
      </div>

    </motion.main>
  );
}
