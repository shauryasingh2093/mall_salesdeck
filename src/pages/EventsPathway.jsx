import { motion } from 'framer-motion';
import DeckContainer from '../components/Layout/DeckContainer';
import YouTubeBackground from '../components/Interactive/YouTubeBackground';

const textReveal = {
  hidden: { y: '100%' },
  show: { y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const Slide1 = () => (
  <div className="w-full h-full flex flex-col justify-center px-12 lg:px-24 max-w-7xl mx-auto relative cursor-hover">
    <div className="overflow-hidden mb-4">
      <motion.span variants={textReveal} className="text-blue-400 font-sans tracking-[0.3em] uppercase text-xs block">
        Events & Sponsorships
      </motion.span>
    </div>
    <div className="overflow-hidden mb-12">
      <motion.h2 variants={textReveal} className="text-7xl lg:text-9xl font-display font-light leading-[0.9]">
        Where Moments <br/>
        <span className="italic text-white/70">Are Made</span>
      </motion.h2>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="w-full aspect-[16/9] relative rounded-[2rem] overflow-hidden filter contrast-125"
      >
        <YouTubeBackground videoId="PLACEHOLDER_EVENTS_ID" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="pt-8 md:pt-24"
      >
        <p className="text-xl text-white/60 leading-relaxed font-light mb-8">
          200+ programmed events per year. Concerts, summits, product launches, and fashion shows set against the backdrop of 12 world-class attractions.
        </p>
        <div className="flex gap-12">
          <div>
            <p className="text-4xl font-display font-light text-white">8,000</p>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 mt-1">Max Capacity</p>
          </div>
          <div>
            <p className="text-4xl font-display font-light text-white">400K</p>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 mt-1">Event-Day Reach</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const Slide2 = () => (
  <div className="w-full h-full flex flex-col justify-center px-12 lg:px-24 max-w-7xl mx-auto relative cursor-hover">
    <div className="flex flex-col md:flex-row gap-16 items-center">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex-1 w-full aspect-[3/4] relative rounded-[2rem] overflow-hidden order-2 md:order-1 filter contrast-125 brightness-90"
      >
        <YouTubeBackground videoId="PLACEHOLDER_ICEPALACE_ID" />
      </motion.div>
      <div className="flex-1 order-1 md:order-2">
        <div className="overflow-hidden mb-6">
          <motion.h3 variants={textReveal} className="text-6xl lg:text-7xl font-display font-light">Ice Palace</motion.h3>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="pl-8 border-l border-white/20"
        >
          <p className="text-lg text-white/60 mb-10 leading-relaxed font-light">
            Full NHL-regulation ice rink used by the Edmonton Oilers for practice sessions. 2,500 event capacity, 52-week availability, and premium visibility.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <span className="text-blue-400 font-sans text-xs tracking-widest mt-1">01</span>
              <div>
                <p className="text-white font-medium mb-1">Naming Rights</p>
                <p className="text-sm text-white/40">Exclusive venue sponsorship opportunities.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-blue-400 font-sans text-xs tracking-widest mt-1">02</span>
              <div>
                <p className="text-white font-medium mb-1">Dasherboard Ads</p>
                <p className="text-sm text-white/40">High-visibility placement during 200+ annual events.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

const Slide3 = () => (
  <div className="w-full h-full flex flex-col justify-center px-12 lg:px-24 max-w-7xl mx-auto relative cursor-hover">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-5 relative z-10">
        <div className="overflow-hidden mb-6">
          <motion.h3 variants={textReveal} className="text-6xl font-display font-light">Grand Central Atrium</motion.h3>
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg text-white/60 leading-relaxed font-light mb-12"
        >
          The beating heart of WEM. A soaring glass atrium with 30M+ annual footfall, premium event activation space, and maximum brand visibility from all four floors.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-2 gap-8"
        >
          <div className="border-t border-white/20 pt-4">
            <p className="text-2xl font-display text-white mb-2">Prime OOH</p>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">Digital Signage</p>
          </div>
          <div className="border-t border-white/20 pt-4">
            <p className="text-2xl font-display text-white mb-2">Pop-Up</p>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">Seasonal Kiosks</p>
          </div>
        </motion.div>
      </div>
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="lg:col-span-7 relative rounded-[2rem] overflow-hidden aspect-[4/3] filter contrast-125"
      >
        <YouTubeBackground videoId="PLACEHOLDER_ATRIUM_ID" />
      </motion.div>
    </div>
  </div>
);

export default function EventsPathway() {
  const slides = [<Slide1 key="1" />, <Slide2 key="2" />, <Slide3 key="3" />];

  return <DeckContainer slides={slides} pathwayName="Events & Venues" />;
}
