import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const FLOORS = ['B', 'L1', 'L2', 'L3'];

export default function MapModal({ isOpen, onClose }) {
  const [activeFloor, setActiveFloor] = useState('L1');

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
                <span className="font-display text-2xl">Map</span>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-hover"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Image Viewer Container */}
            <div className="flex-1 w-full bg-white relative flex items-center justify-center overflow-hidden">
              
              {/* Image Placeholder (User will provide images named map-B.png, map-L1.png, etc) */}
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeFloor}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  src={`/assets/map-${activeFloor}.png`} 
                  alt={`Map Floor ${activeFloor}`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback visually if image doesn't exist yet
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback Text if image fails to load */}
                <div className="absolute inset-0 hidden items-center justify-center text-dark-900/40 font-display text-2xl" style={{ display: 'none' }}>
                  Please place map-{activeFloor}.png in /public/assets/
                </div>
              </AnimatePresence>

              {/* Floor Selection Pill */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-2xl shadow-black/20 flex p-1 border border-dark-900/10">
                {FLOORS.map((floor) => (
                  <button
                    key={floor}
                    onClick={() => setActiveFloor(floor)}
                    className={`relative px-8 py-3 text-sm font-medium rounded-full transition-colors duration-300 ${
                      activeFloor === floor 
                        ? 'text-dark-900' 
                        : 'text-dark-900/50 hover:text-dark-900/80 hover:bg-dark-900/5'
                    }`}
                  >
                    {activeFloor === floor && (
                      <motion.div 
                        layoutId="activeFloorIndicator"
                        className="absolute inset-0 bg-dark-900/10 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{floor}</span>
                  </button>
                ))}
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
