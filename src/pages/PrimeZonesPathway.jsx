import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ZONES = [
  {
    id: 'luxury',
    title: 'Luxury Row (Europa Blvd)',
    desc: 'The epicenter of high-end retail. Home to Gucci, Tiffany & Co, and Holt Renfrew.',
    highlights: ['High-net-worth traffic', 'Premium storefront design', 'Valet proximity']
  },
  {
    id: 'entertainment',
    title: 'The Entertainment Wing',
    desc: 'Anchored by Galaxyland and the World Waterpark. Massive family footfall.',
    highlights: ['Multi-day tourists', 'Peak weekend volume', 'Active brand activation zones']
  },
  {
    id: 'central',
    title: 'The Grand Atrium',
    desc: 'WEM\'s highest-traffic intersection. Every visitor passes through this zone.',
    highlights: ['360° visibility', 'Digital OOH dominance', 'Event & Pop-up prime space']
  },
  {
    id: 'nightlife',
    title: 'Bourbon Street (BRBN St.)',
    desc: 'The nightlife and upscale dining corridor. Capturing the evening & adult demographic.',
    highlights: ['Extended dwell time', 'Patio culture', 'Corporate group bookings']
  }
];

export default function PrimeZonesPathway() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-screen bg-dark-900 overflow-hidden flex cursor-none"
    >
      {/* Background Stylized Map (Visual Placeholder) */}
      <div className="absolute inset-0 z-0">
        <img src="/assets/mall_exterior_placeholder_1777549971367.png" alt="" className="w-full h-full object-cover opacity-10 blur-sm" />
        <div className="absolute inset-0 bg-dark-900/90" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col px-10 md:px-16 lg:px-20 pt-28 pb-12 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <p className="text-gold-500 text-[10px] font-bold tracking-[0.35em] uppercase mb-4 flex items-center gap-3">
            <span className="w-6 h-[1px] bg-gold-500 inline-block" />
            Visual Architecture
          </p>
          <h1 className="font-display font-light text-white leading-[1.1]" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}>
            The Prime <span className="italic text-white/70">Zones.</span>
          </h1>
          <p className="text-white/40 text-sm mt-4 max-w-xl font-light">
            Strategic brand placement across WEM\'s distinct commercial ecosystems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ZONES.map((zone, i) => (
            <motion.div
              key={zone.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="bg-white/3 border border-white/10 p-6 hover:border-gold-500/30 transition-all duration-500 group"
            >
              <h3 className="text-white font-semibold text-base mb-2 group-hover:text-gold-300 transition-colors">{zone.title}</h3>
              <p className="text-white/50 text-[11px] mb-4 leading-relaxed">{zone.desc}</p>
              <div className="flex flex-wrap gap-2">
                {zone.highlights.map(h => (
                  <span key={h} className="text-[9px] uppercase tracking-wider text-white/30 border border-white/10 px-2 py-0.5 rounded-sm">
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Gallery Wrapper */}
        <div className="mt-12 relative group/gallery">
          <div className="flex items-center justify-between absolute -top-12 right-0 gap-4">
            <p className="text-white/20 text-[10px] font-bold tracking-widest uppercase">Slide to explore</p>
          </div>
          
          <div className="w-full h-[300px] overflow-hidden rounded-2xl">
            <motion.div 
              drag="x"
              dragConstraints={{ left: -1800, right: 0 }}
              className="flex gap-6 cursor-grab active:cursor-grabbing"
              animate={{ x: [0, -1800] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[
                '/assets/street1.png',
                '/assets/street2.png',
                '/assets/europa.png',
                '/assets/brbn_street.png',
                '/assets/atrium.png',
                '/assets/street.png',
                '/assets/street1.png',
                '/assets/street2.png',
                '/assets/europa.png',
                '/assets/brbn_street.png',
                '/assets/atrium.png',
                '/assets/street.png'
              ].map((img, i) => (
                <div key={i} className="w-[450px] h-[300px] relative rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 group">
                  <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white/40 text-[9px] uppercase tracking-widest font-bold">Zone Highlight 0{ (i % 6) + 1 }</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Overlay Hints */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-dark-900 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-dark-900 to-transparent pointer-events-none" />
        </div>
      </div>
    </motion.main>
  );
}
