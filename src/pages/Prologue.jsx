import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Volume2, VolumeX } from 'lucide-react';

export default function Prologue() {
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.main 
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, filter: 'blur(20px)' }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative w-full h-screen overflow-hidden bg-dark-900 cursor-none flex items-center justify-center"
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

          {/* Dedicated Background Audio */}
          <audio 
            ref={audioRef}
            autoPlay 
            src="/assets/prologue.mp3" 
            onEnded={() => console.log('Audio finished')} 
          />
        </motion.div>
      </div>

      <div className="max-w-4xl px-8 md:px-16 text-center z-10">


      </div>

      {/* Dark gradient at the bottom so buttons are visible */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent z-10 pointer-events-none" />

      {/* Audio & Skip Controls Container */}
      <div className="absolute bottom-12 right-12 z-20 flex flex-col items-end gap-4">
        
        {/* Sound Toggle Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2.2 }}
        >
          <button 
            onClick={toggleMute}
            className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full transition-all duration-300 cursor-hover shadow-xl"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </motion.div>

        {/* Skip Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
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
      </div>

    </motion.main>
  );
}
