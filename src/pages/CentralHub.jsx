import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Map, ArrowRight } from 'lucide-react';

const PATHWAYS = [
  { id: 'retail', title: 'Retail & Luxury', path: '/retail' },
  { id: 'events', title: 'Events & Venues', path: '/events' },
  { id: 'entertainment', title: 'Attractions & Hospitality', path: '/entertainment' }
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
      duration: 2,
      delay: delay,
      ease: "easeOut"
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
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="relative w-full h-screen flex flex-col justify-center overflow-hidden bg-dark-900 cursor-none"
    >

      {/* Background Media */}
      <div className="absolute inset-0 z-0 bg-dark-900">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900" />
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
          className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-hover text-white mix-blend-difference"
        >
          <Map size={20} />
          <span className="text-sm font-semibold tracking-widest uppercase">Directory Map</span>
        </button>
      </div>

      {/* Split Layout Content */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 h-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Mall Description */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex flex-col max-w-xl"
        >
          <p className="text-gold-500 text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-4">
            The Destination
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-white mb-6 leading-tight">
            More than a mall. <br/>
            <span className="italic text-white/70">A self-contained city.</span>
          </h1>
          <p className="text-sm md:text-base text-white/60 leading-relaxed mb-10 font-light">
            West Edmonton Mall is the most comprehensive retail, hospitality, and entertainment complex in North America. It is a premier commercial ecosystem designed to captivate a captive audience and drive unprecedented brand engagement.
          </p>

          <div className="grid grid-cols-2 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col border-l border-white/20 pl-4">
                <span className="text-3xl md:text-4xl font-display text-white mb-1">
                  <AnimatedNumber value={stat.num} suffix={stat.suffix} delay={0.5 + (idx * 0.1)} />
                </span>
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Pathways Menu */}
        <div className="flex flex-col items-start lg:items-end justify-center w-full">
          <nav className="flex flex-col gap-6 lg:gap-8 w-full max-w-md">
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
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-light text-white/60 group-hover:text-white transition-colors duration-500">
                    {path.title}
                  </h2>
                </motion.div>
                <ArrowRight className="text-white/0 group-hover:text-gold-500 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500" size={24} />
              </Link>
            ))}
          </nav>
        </div>

      </div>

    </motion.main>
  );
}
