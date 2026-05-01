import { motion, AnimatePresence } from 'framer-motion';

const FallbackImage = ({ src, alt, className, style, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden bg-white/5 border border-white/10 ${className}`}
      style={style}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] hover:scale-110"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      <div className="absolute inset-0 hidden flex-col items-center justify-center text-center p-4 bg-dark-800" style={{ display: 'none' }}>
        <span className="text-white/20 text-xs font-mono mb-2">Missing Asset</span>
        <span className="text-white/40 text-sm font-semibold">{src}</span>
      </div>
    </motion.div>
  );
};

export default function EventsPathway() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative w-full h-screen bg-dark-900 overflow-hidden flex cursor-none"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-dark-900 via-dark-900 to-[#1a1118] opacity-80" />

      <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-50 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <img src="/assets/wem-logo.png" alt="WEM" className="w-10 h-10 object-contain" />
          <div className="flex flex-col">
            <span className="font-sans font-semibold tracking-[0.2em] text-xs uppercase text-white/80">West Edmonton Mall</span>
            <span className="text-white/40 text-[10px] tracking-widest uppercase">Commercial Deck</span>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-between">
        
        <div className="w-full lg:w-[45%] h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-32 pb-16 relative z-20">
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
            className="w-12 h-[1px] bg-gold-500 mb-8 origin-left"
          />

          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gold-500 text-xs font-semibold tracking-[0.3em] uppercase mb-4"
          >
            Experiences
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl lg:text-6xl xl:text-7xl font-display font-light text-white mb-6 leading-[1.1]"
          >
            Venues of <br />
            <span className="italic text-white/60">Magnitude.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-base text-white/50 leading-relaxed max-w-md font-light mb-12"
          >
            From high-capacity arenas to intimate corporate venues, our event spaces are engineered for spectacle. We host world-class concerts, international trade shows, and brand activations that demand a global audience.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-8 border-t border-white/10 pt-8 mb-10"
          >
            <div>
              <p className="text-3xl font-display text-white mb-1">5+</p>
              <p className="text-[9px] uppercase tracking-widest text-white/40 font-semibold">Premium Venues</p>
            </div>
            <div className="w-[1px] h-12 bg-white/10" />
            <div>
              <p className="text-3xl font-display text-white mb-1">2M+</p>
              <p className="text-[9px] uppercase tracking-widest text-white/40 font-semibold">Annual Event Attendees</p>
            </div>
          </motion.div>

          {/* Groups section */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
          >
            <p className="text-white/30 text-[9px] font-bold tracking-[0.3em] uppercase mb-4">Groups &amp; Entertainment</p>
            <div className="flex flex-wrap gap-2">
              {['Birthdays', 'Educational', 'Corporate & Team', 'Fundraisers', 'Adult Parties & Groups', 'Tour Groups'].map(g => (
                <span key={g} className="px-3 py-1 rounded-full text-[10px] text-white/70 border border-white/15 bg-white/5 tracking-wide">
                  {g}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

        <div className="w-full lg:w-[55%] h-full relative">
          <FallbackImage 
            src="/assets/crowd_event.png" 
            alt="Events Hero" 
            className="w-full h-full"
            delay={0.2}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/40 to-transparent pointer-events-none" />
        </div>

      </div>

      <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
        <FallbackImage 
          src="/assets/brbn_street.png" 
          alt="Events Editorial 1" 
          className="absolute bottom-16 left-[40%] w-64 h-80 lg:w-72 lg:h-96 rounded-sm shadow-2xl shadow-black/50 hidden md:block"
          delay={1.8}
        />
        <FallbackImage 
          src="/assets/ice_rink.png" 
          alt="Events Editorial 2" 
          className="absolute top-32 right-[25%] w-48 h-64 lg:w-56 lg:h-72 rounded-sm shadow-2xl shadow-black/50 hidden lg:block"
          delay={2.1}
        />
      </div>

    </motion.main>
  );
}
