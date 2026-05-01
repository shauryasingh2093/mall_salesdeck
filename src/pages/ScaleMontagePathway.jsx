import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const STAT_CHIPS = [
  '110+ Dining Concepts',
  '4 Major Attractions',
  '354 Hotel Rooms',
  '200+ Annual Events',
];

const DESTINATION_THUMBS = [
  { label: 'Attractions', src: '/assets/waterpark.png' },
  { label: 'Dining', src: '/assets/dining.png' },
  { label: 'Hospitality', src: '/assets/hotel.png' },
  { label: 'Events', src: '/assets/crowd_event.png' },
];

export default function ScaleMontagePathway() {
  const navigate = useNavigate();
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(8px)' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="relative w-full h-screen bg-dark-900 overflow-hidden flex cursor-none"
    >
      {/* Left: Full-bleed hero image */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="w-[52%] h-full relative overflow-hidden flex-shrink-0"
      >
        <img
          src="/assets/atrium.png"
          alt="West Edmonton Mall Atrium"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-dark-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-dark-900/20" />
      </motion.div>

      {/* Right: Content Panel */}
      <div className="flex-1 h-full flex flex-col justify-center px-12 lg:px-16 pt-28 pb-12 overflow-hidden">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-gold-500 text-[10px] font-bold tracking-[0.35em] uppercase mb-6 flex items-center gap-3"
        >
          <span className="w-8 h-[1px] bg-gold-500 inline-block" />
          Scale &amp; Presence
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-light text-white leading-[1.1] mb-6"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
        >
          800+ Stores<br />
          <span className="italic text-white/80">&amp; Experiences</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-white/55 text-sm leading-relaxed max-w-sm mb-8 font-light"
        >
          North America's largest enclosed mall — an ecosystem beyond retail.
          Entertainment, dining, attractions, and hospitality converge under one
          iconic roof in Edmonton, Alberta.
        </motion.p>

        {/* Stat Chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {STAT_CHIPS.map((chip) => (
            <span
              key={chip}
              className="px-3 py-1 rounded-full text-[11px] text-white/70 border border-white/15 bg-white/5 tracking-wide"
            >
              {chip}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap gap-4 mb-14"
        >
          <button 
            onClick={() => navigate('/demographics')}
            className="flex items-center gap-2 px-6 py-3 bg-white text-dark-900 text-xs font-bold tracking-[0.15em] uppercase hover:bg-gold-500 transition-colors duration-300 cursor-hover"
          >
            Explore Leasing <ArrowRight size={13} />
          </button>
          <button 
            onClick={() => navigate('/demographics')}
            className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white text-xs font-bold tracking-[0.15em] uppercase hover:border-gold-500 hover:text-gold-500 transition-colors duration-300 cursor-hover"
          >
            Talk to a Leasing Expert
          </button>
        </motion.div>

        {/* Experience the Destination mini-carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.25 }}
        >
          <p className="text-white/30 text-[9px] font-bold tracking-[0.3em] uppercase mb-4">
            Experience the Destination
          </p>
          <div className="flex gap-3">
            {DESTINATION_THUMBS.map((thumb) => (
              <div key={thumb.label} className="relative flex-1 aspect-video overflow-hidden rounded-sm cursor-hover group">
                <img
                  src={thumb.src}
                  alt={thumb.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-dark-900/50 group-hover:bg-dark-900/30 transition-colors duration-300" />
                <span className="absolute bottom-2 left-2 text-white text-[10px] font-semibold tracking-wider">
                  {thumb.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* WEM logo top-left */}
      <div className="absolute top-8 left-8 z-50 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-3"
        >
          <img src="/assets/wem-logo.png" alt="WEM" className="w-9 h-9 object-contain" />
          <div>
            <p className="font-sans font-semibold tracking-[0.2em] text-[10px] uppercase text-white/80">West Edmonton Mall</p>
            <p className="text-white/40 text-[9px] tracking-widest uppercase">Commercial Deck</p>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}
