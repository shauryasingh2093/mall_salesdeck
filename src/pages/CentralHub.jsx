import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Map, ArrowRight } from 'lucide-react';
import AssetPreloader from '../components/Interactive/AssetPreloader';

const PATHWAYS = [
  { id: 'retail', title: 'Retail & Luxury', path: '/retail' },
  { id: 'events', title: 'Events & Venues', path: '/events' },
  { id: 'entertainment', title: 'Attractions & Recreation', path: '/entertainment' },
  { id: 'dining', title: 'Dining & Culinary', path: '/dining' },
  { id: 'hospitality', title: 'Hospitality & Hotels', path: '/hospitality' },
  { id: 'demographics', title: 'Audience & Demographics', path: '/demographics' }
];

const STATS = [
  { label: 'Annual Visitors', num: 30, suffix: 'M+' },
  { label: 'Square Feet', num: 5.3, suffix: 'M' },
  { label: 'Retail Stores', num: 800, suffix: '+' },
  { label: 'Dining Venues', num: 100, suffix: '+' }
];

function AnimatedNumber({ value, suffix, delay }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const isDecimal = value % 1 !== 0;
    return `${isDecimal ? latest.toFixed(1) : Math.round(latest)}${suffix}`;
  });

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2.5,
      delay: delay,
      ease: [0.16, 1, 0.3, 1]
    });
    return controls.stop;
  }, [value, delay, count]);

  return <motion.span>{rounded}</motion.span>;
}

export default function CentralHub() {
  const [activePath, setActivePath] = useState(null);

  return (
    <motion.main 
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(20px)' }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative w-full h-screen flex flex-col justify-center overflow-hidden bg-dark-900 cursor-none"
    >
      <AssetPreloader assets={[
        '/assets/luxury_retail.png',
        '/assets/crowd_event.png',
        '/assets/galaxyland.png',
        '/assets/dining_elegant.png',
        '/assets/hotel.png',
        '/assets/genz_trendsetters.png'
      ]} />

      {/* Background: hub.png full-bleed + overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/hub.png"
          alt="Central Hub"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-dark-900/70" />
        {/* Aurora glows on top */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#1a365d]/30 rounded-full blur-[140px] mix-blend-screen pointer-events-none" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-gold-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-dark-900/60" />
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-50">
        <div className="flex items-center gap-4">
          <img src="/assets/wem-logo.png" alt="WEM" className="w-10 h-10 object-contain" />
          <div className="flex flex-col">
            <span className="font-sans font-semibold tracking-[0.2em] text-xs uppercase text-white/80">West Edmonton Mall</span>
            <span className="text-white/40 text-[10px] tracking-widest uppercase">Commercial Deck</span>
          </div>
        </div>
        <button
          onClick={() => window.dispatchEvent(new Event('openMap'))}
          className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-hover text-white"
        >
          <Map size={20} />
          <span className="text-sm font-semibold tracking-widest uppercase">Map</span>
        </button>
      </div>

      {/* Split Layout Content */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 h-full pt-32 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Mall Description */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col max-w-xl"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-gold-500" />
            <p className="text-gold-500 text-xs font-semibold tracking-[0.3em] uppercase">
              The Destination
            </p>
          </div>
          
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-light text-white mb-4 leading-[1.1]">
            More than a mall. <br/>
            <span className="italic text-white/60">A self-contained city.</span>
          </h1>
          <p className="text-xs md:text-sm text-white/50 leading-relaxed mb-10 font-light max-w-md">
            West Edmonton Mall is the most comprehensive retail, hospitality, and entertainment complex in North America. A premier commercial ecosystem designed to captivate a captive audience and drive unprecedented brand engagement.
          </p>

          {/* Glassmorphism Stat Cards */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {STATS.map((stat, idx) => (
              <div 
                key={idx} 
                className="flex flex-col justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors duration-500 group"
              >
                <span className="text-3xl lg:text-4xl font-display text-gold-500 mb-1 group-hover:scale-105 transition-transform duration-500 origin-left">
                  <AnimatedNumber value={stat.num} suffix={stat.suffix} delay={0.5 + (idx * 0.1)} />
                </span>
                <span className="text-[9px] uppercase tracking-widest text-white/40 font-semibold group-hover:text-white/60 transition-colors duration-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Pathways Menu */}
        <div className="flex flex-col items-start lg:items-end justify-center w-full">
          <nav className="flex flex-col gap-6 lg:gap-10 w-full max-w-md">
            {PATHWAYS.map((path, i) => (
              <Link
                key={path.id}
                to={path.path}
                onMouseEnter={() => setActivePath(path)}
                onMouseLeave={() => setActivePath(null)}
                className="group cursor-hover flex items-center justify-between w-full border-b border-white/10 pb-6 hover:border-gold-500/50 transition-colors duration-500"
              >
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-6"
                >
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-light text-white/50 group-hover:text-white group-hover:scale-[1.02] transform origin-left transition-all duration-500">
                    {path.title}
                  </h2>
                </motion.div>
                <div className="relative overflow-hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-gold-500 transition-colors duration-500">
                  <ArrowRight className="text-white transform -translate-x-10 group-hover:translate-x-0 transition-transform duration-500" size={20} />
                  <ArrowRight className="text-white/40 absolute transform group-hover:translate-x-10 transition-transform duration-500" size={20} />
                </div>
              </Link>
            ))}
          </nav>
        </div>

      </div>

    </motion.main>
  );
}
