import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CRITICAL_ASSETS = [
  '/assets/wem-logo.png',
  '/assets/Luxury_Mall_Opening_Shot_Generation.mp4',
  '/assets/hub.png'
];

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [isExit, setIsExit] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const totalAssets = CRITICAL_ASSETS.length;

    const updateProgress = () => {
      loadedCount++;
      const newProgress = Math.round((loadedCount / totalAssets) * 100);
      setProgress(newProgress);
      
      if (loadedCount === totalAssets) {
        setTimeout(() => {
          setIsExit(true);
          setTimeout(onLoadingComplete, 800);
        }, 500);
      }
    };

    CRITICAL_ASSETS.forEach(asset => {
      if (asset.endsWith('.mp4')) {
        const video = document.createElement('video');
        video.src = asset;
        video.oncanplaythrough = updateProgress;
        video.onerror = updateProgress; // Don't block if one fails
      } else {
        const img = new Image();
        img.src = asset;
        img.onload = updateProgress;
        img.onerror = updateProgress;
      }
    });

    // Fallback timeout in case something hangs
    const timer = setTimeout(() => {
      if (loadedCount < totalAssets) {
        setProgress(100);
        setIsExit(true);
        setTimeout(onLoadingComplete, 800);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isExit && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(20px)' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-dark-900 flex flex-col items-center justify-center cursor-none"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo Glow */}
            <motion.div
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-32 h-32 bg-gold-500/20 rounded-full blur-3xl -z-10"
            />
            
            <motion.img 
              src="/assets/wem-logo.png" 
              alt="WEM" 
              className="w-16 h-16 object-contain mb-12 filter brightness-110"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden mb-4">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gold-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-[10px] tracking-[0.5em] uppercase text-white/40 font-bold">
                Initializing Experience
              </span>
              <span className="text-[8px] tracking-[0.2em] text-gold-500/60 font-mono">
                {progress}%
              </span>
            </motion.div>
          </div>

          {/* Luxury Accents */}
          <div className="absolute top-12 left-12">
            <span className="text-[9px] tracking-[0.4em] uppercase text-white/20">WEM Digital</span>
          </div>
          <div className="absolute bottom-12 right-12">
            <span className="text-[9px] tracking-[0.4em] uppercase text-white/20">B2B Sales Deck</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
