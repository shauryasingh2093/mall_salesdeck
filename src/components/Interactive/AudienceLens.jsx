import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PERSONAS = {
  luxury: {
    id: 'luxury',
    title: 'High-Net-Worth Shoppers',
    stats: { income: '$120K+', dwell: '3.4 hrs', age: '35-55' },
    zones: ['Europa Boulevard', 'Dining Atrium'],
    insight: 'This demographic seeks exclusivity. They bypass main thoroughfares for curated luxury corridors, valuing brand prestige and personalized service.'
  },
  families: {
    id: 'families',
    title: 'Young Families',
    stats: { income: '$85K+', dwell: '5.2 hrs', age: '28-45' },
    zones: ['Galaxyland', 'World Waterpark', 'Food Court'],
    insight: 'Families treat the mall as a full-day destination. They represent the highest total spend per visit due to cross-category purchasing (entertainment + food + retail).'
  },
  genz: {
    id: 'genz',
    title: 'Gen-Z Trendsetters',
    stats: { income: '$45K+', dwell: '4.1 hrs', age: '16-24' },
    zones: ['Ice Palace', 'Sneaker Boutiques', 'BRBN St.'],
    insight: 'Driven by social media and experiential retail. They engage heavily with brand activations, pop-ups, and highly photogenic mall zones.'
  }
};

export default function AudienceLens() {
  const [activePersona, setActivePersona] = useState('luxury');
  const persona = PERSONAS[activePersona];

  return (
    <div className="w-full h-full flex flex-col justify-center px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 h-full items-center">
        
        {/* Left: Persona Selection & Abstract Visual */}
        <div className="flex-1 flex flex-col justify-center h-full border-r border-white/10 pr-16 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h3 className="font-sans text-xs tracking-[0.3em] uppercase text-white/50 mb-2">Audience Lens</h3>
            <p className="font-display text-4xl text-white">Select Demographic</p>
          </motion.div>

          <div className="flex flex-col gap-6 relative z-10">
            {Object.values(PERSONAS).map(p => (
              <button
                key={p.id}
                onClick={() => setActivePersona(p.id)}
                className={`text-left group cursor-hover transition-all duration-500 flex items-center gap-6 ${
                  activePersona === p.id ? 'opacity-100' : 'opacity-30 hover:opacity-70'
                }`}
              >
                <span className="text-sm font-sans tracking-widest text-gold-500 w-6">
                  {activePersona === p.id ? '—' : ''}
                </span>
                <span className="font-display text-5xl font-light transform transition-transform duration-500 group-hover:translate-x-2">
                  {p.title}
                </span>
              </button>
            ))}
          </div>
          
          {/* Abstract Grid Graphic */}
          <div className="absolute bottom-0 right-16 w-64 h-64 opacity-5 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        {/* Right: Data Focus */}
        <div className="flex-1 flex flex-col justify-center relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={persona.id + '-data'}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-12"
            >
              <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                <div className="flex flex-col border-t border-white/20 pt-4">
                  <span className="text-xs text-white/50 uppercase tracking-[0.2em] mb-2">Avg Income</span>
                  <span className="font-display text-4xl text-white">{persona.stats.income}</span>
                </div>
                <div className="flex flex-col border-t border-white/20 pt-4">
                  <span className="text-xs text-white/50 uppercase tracking-[0.2em] mb-2">Dwell Time</span>
                  <span className="font-display text-4xl text-white">{persona.stats.dwell}</span>
                </div>
                <div className="flex flex-col border-t border-white/20 pt-4">
                  <span className="text-xs text-white/50 uppercase tracking-[0.2em] mb-2">Age Group</span>
                  <span className="font-display text-4xl text-white">{persona.stats.age}</span>
                </div>
                <div className="flex flex-col border-t border-white/20 pt-4">
                  <span className="text-xs text-white/50 uppercase tracking-[0.2em] mb-2">Primary Zones</span>
                  <span className="font-display text-2xl text-white pt-1 leading-snug">
                    {persona.zones.join(', ')}
                  </span>
                </div>
              </div>

              <div className="pt-8 relative">
                <div className="absolute top-0 left-0 w-8 h-[1px] bg-gold-500" />
                <p className="text-white/70 leading-relaxed font-light text-lg italic">
                  "{persona.insight}"
                </p>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
