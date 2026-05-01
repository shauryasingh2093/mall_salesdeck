import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function MapModal({ isOpen, onClose }) {
  // Prevent keyboard events from passing to the deck when map is open
  useEffect(() => {
    if (isOpen) {
      const preventNavigation = (e) => e.stopPropagation();
      window.addEventListener('keydown', preventNavigation, { capture: true });
      return () => window.removeEventListener('keydown', preventNavigation, { capture: true });
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 bg-dark-900/90 backdrop-blur-xl"
        >
          <div className="absolute inset-0 cursor-pointer" onClick={onClose} />
          
          <motion.div 
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-7xl h-full max-h-[90vh] bg-dark-800 rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10 bg-dark-900/50">
              <div className="flex items-center gap-4">
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-gold-500">WEM Directory</span>
                <span className="font-display text-2xl">Interactive Map</span>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-hover"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* IFrame Container */}
            <div className="flex-1 w-full bg-white relative">
              <iframe 
                src="https://www.wem.ca/directory/map" 
                title="WEM Interactive Map"
                className="absolute inset-0 w-full h-full border-none"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
