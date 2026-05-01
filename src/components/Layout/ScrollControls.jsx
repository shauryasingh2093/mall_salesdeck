import { Link } from 'react-router-dom';
import { Grid, PhoneCall, Map } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ScrollControls({ pathwayName, scrollProgress }) {
  return (
    <>
      {/* Top Bar - Fixed to viewport */}
      <div className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-[100] mix-blend-difference text-white pointer-events-none">
        <div className="pointer-events-auto">
          <Link to="/hub" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <Grid size={20} />
            <span className="text-sm font-semibold tracking-widest uppercase">Central Hub</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-6 pointer-events-auto">
          <button 
            onClick={() => window.dispatchEvent(new Event('openMap'))}
            className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-hover"
          >
            <Map size={20} />
            <span className="text-sm font-semibold tracking-widest uppercase">Directory Map</span>
          </button>
          <div className="text-sm tracking-widest uppercase font-semibold text-white/50 border-l border-white/20 pl-6 hidden md:block">
            {pathwayName}
          </div>
        </div>
      </div>

      {/* Right Scroll Progress Indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-[100] mix-blend-difference text-white">
        <div className="h-32 w-[2px] bg-white/20 rounded-full relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 right-0 bg-white"
            style={{ 
              height: '100%',
              scaleY: scrollProgress,
              transformOrigin: 'top'
            }}
          />
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] font-sans -rotate-90 origin-center mt-8 whitespace-nowrap opacity-50">
          Scroll
        </span>
      </div>

      {/* Bottom Floating CTA */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <button className="flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-dark-900 transition-all duration-300 px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-gold-500/20 cursor-hover">
          <PhoneCall size={16} />
          <span>Schedule Call</span>
        </button>
      </div>
    </>
  );
}
