import { motion, AnimatePresence } from 'framer-motion';

// Luxury brands for marquee
const LUXURY_BRANDS = [
  'LOUIS VUITTON', 'GUCCI', 'TIFFANY & CO.', 'APPLE', 'NIKE', 'ROLEX', 
  'HOLT RENFREW', 'CANADA GOOSE', 'PRADA', 'SAINT LAURENT', 'LULULEMON'
];

const Marquee = ({ items }) => (
  <div className="relative flex overflow-hidden border-y border-white/5 py-2.5 bg-white/2">
    <motion.div
      animate={{ x: [0, -1000] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="flex whitespace-nowrap gap-12 items-center"
    >
      {[...items, ...items].map((item, i) => (
        <span key={i} className="text-white/20 text-[10px] font-bold tracking-[0.4em] uppercase">
          {item}
        </span>
      ))}
    </motion.div>
  </div>
);

// Helper component for graceful image placeholders
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

export default function RetailPathway() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="relative w-full h-screen bg-dark-900 overflow-hidden flex cursor-none"
    >
      {/* Background ambient gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-dark-900 via-dark-900 to-[#1a1510] opacity-80" />

      {/* Global Header Element (Keeps branding consistent) */}
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

      {/* Main Split Content */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Typography Panel */}
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
            Ecosystem
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl lg:text-6xl xl:text-7xl font-display font-light text-white mb-6 leading-[1.1]"
          >
            The Pinnacle of <br />
            <span className="italic text-white/60">Global Retail.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-base text-white/50 leading-relaxed max-w-md font-light mb-6"
          >
            Housing over 800 stores and services, WEM represents the highest concentration of premium retail brands in the region. Our curated tenant mix creates an unmatched shopping destination that consistently breaks global sales-per-square-foot metrics.
          </motion.p>

          {/* Mini Data Callout */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-8 border-t border-white/10 pt-6 mb-6"
          >
            <div>
              <p className="text-3xl font-display text-white mb-1">Top 5</p>
              <p className="text-[9px] uppercase tracking-widest text-white/40 font-semibold">Global Retail Hubs</p>
            </div>
            <div className="w-[1px] h-12 bg-white/10" />
            <div>
              <p className="text-3xl font-display text-white mb-1">100%</p>
              <p className="text-[9px] uppercase tracking-widest text-white/40 font-semibold">Prime Occupancy</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 mb-8"
          >
            <p className="text-white/20 text-[8px] font-bold tracking-[0.3em] uppercase mb-2">Global Anchor Tenants</p>
            <Marquee items={LUXURY_BRANDS} />
          </motion.div>

          {/* Theme Streets */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
          >
            <p className="text-white/30 text-[9px] font-bold tracking-[0.3em] uppercase mb-4">Signature Theme Streets</p>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'BRBN St.', desc: 'Nightlife & Entertainment District' },
                { name: 'Europa Boulevard', desc: 'Luxury European Retail' },
                { name: 'Chinatown', desc: 'Authentic Asian Culture & Cuisine' },
                { name: 'Bridal Boulevard', desc: 'Premier Wedding & Event Retail' },
              ].map(({ name, desc }) => (
                <div key={name} className="px-4 py-2 border border-white/15 bg-white/5 group hover:border-gold-500/40 transition-colors duration-300 cursor-hover">
                  <p className="text-white/90 text-[11px] font-semibold tracking-wide">{name}</p>
                  <p className="text-white/35 text-[9px] mt-0.5">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Right Hero Image Panel */}
        <div className="w-full lg:w-[55%] h-full relative">
          
          <FallbackImage 
            src="/assets/luxury_retail.png" 
            alt="Retail Hero" 
            className="w-full h-full"
            delay={0.2}
          />

          {/* Gradient overlay to smoothly blend the image into the dark left panel */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/40 to-transparent pointer-events-none" />
          
        </div>

      </div>

      {/* Overlapping Editorial Images (Floating) */}
      <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
        
        {/* Floating Sub Image 1 - Bottom Center/Left */}
        <FallbackImage 
          src="/assets/luxury_shoppers.png" 
          alt="Retail Editorial 1" 
          className="absolute bottom-16 left-[40%] w-64 h-80 lg:w-72 lg:h-96 rounded-sm shadow-2xl shadow-black/50 hidden md:block"
          delay={1.8}
        />

        {/* Floating Sub Image 2 - Top Center/Right */}
        <FallbackImage 
          src="/assets/europa.png" 
          alt="Retail Editorial 2" 
          className="absolute top-32 right-[25%] w-48 h-64 lg:w-56 lg:h-72 rounded-sm shadow-2xl shadow-black/50 hidden lg:block"
          delay={2.1}
        />

      </div>

    </motion.main>
  );
}
