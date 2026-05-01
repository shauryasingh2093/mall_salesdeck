import { Link } from 'react-router-dom';
import { ChevronUp, ChevronDown, Grid, PhoneCall, Map } from 'lucide-react';

export default function DeckControls({ currentSlide, totalSlides, onNext, onPrev, pathwayName }) {
  return (
    <>
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50 mix-blend-difference text-white">
        <Link to="/hub" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <Grid size={20} />
          <span className="text-sm font-semibold tracking-widest uppercase">Central Hub</span>
        </Link>
        <div className="flex items-center gap-6">
          <button 
            onClick={() => window.dispatchEvent(new Event('openMap'))}
            className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-hover"
          >
            <Map size={20} />
            <span className="text-sm font-semibold tracking-widest uppercase">Directory Map</span>
          </button>
          <div className="text-sm tracking-widest uppercase font-semibold text-white/50 border-l border-white/20 pl-6">
            {pathwayName}
          </div>
        </div>
      </div>

      {/* Right Controls */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-50 mix-blend-difference text-white">
        <button 
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="p-2 hover:bg-white/10 rounded-full transition-colors disabled:opacity-20"
        >
          <ChevronUp size={24} />
        </button>
        
        <div className="flex flex-col items-center gap-1 font-display text-lg">
          <span>{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="w-6 h-[1px] bg-white/50 my-1"></span>
          <span className="text-white/50">{String(totalSlides).padStart(2, '0')}</span>
        </div>

        <button 
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="p-2 hover:bg-white/10 rounded-full transition-colors disabled:opacity-20"
        >
          <ChevronDown size={24} />
        </button>
      </div>

      {/* Bottom Floating CTA */}
      <div className="absolute bottom-6 right-6 z-50">
        <button className="flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-dark-900 transition-all duration-300 px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-gold-500/20">
          <PhoneCall size={16} />
          <span>Schedule Call</span>
        </button>
      </div>
    </>
  );
}
