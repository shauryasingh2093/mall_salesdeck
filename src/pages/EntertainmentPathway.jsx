import { motion } from 'framer-motion';
import DeckContainer from '../components/Layout/DeckContainer';
import YouTubeBackground from '../components/Interactive/YouTubeBackground';

const textReveal = {
  hidden: { y: '100%' },
  show: { y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const Slide1 = () => (
  <div className="w-full h-full flex flex-col justify-center px-12 lg:px-24 max-w-7xl mx-auto relative cursor-hover">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="relative z-10">
        <div className="overflow-hidden mb-6">
          <motion.span variants={textReveal} className="text-purple-400 font-sans tracking-[0.3em] uppercase text-xs block">
            Entertainment Ecosystem
          </motion.span>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h2 variants={textReveal} className="text-6xl lg:text-8xl font-display font-light leading-[0.9]">
            Stay, Meet <br />
            <span className="italic text-white/70">& Experience</span>
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="pl-8 border-l border-white/20"
        >
          <p className="text-lg text-white/60 max-w-md leading-relaxed font-light mb-6">
            Two distinct hotels—Fantasyland Hotel and West Edmonton Mall Inn—offer premium lodging. Combine this with our 110+ dining concepts and 12 world-class attractions for ultimate corporate retreats.
          </p>
          <div className="flex gap-8">
            <div>
              <p className="text-2xl font-display text-white">2</p>
              <p className="text-xs font-sans uppercase tracking-[0.2em] text-white/40">Hotels</p>
            </div>
            <div>
              <p className="text-2xl font-display text-white">12</p>
              <p className="text-xs font-sans uppercase tracking-[0.2em] text-white/40">Attractions</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="relative h-[70vh] rounded-[2rem] overflow-hidden -mt-12 lg:mt-0 shadow-2xl">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full filter contrast-125 brightness-90 relative"
        >
          <YouTubeBackground videoId="PLACEHOLDER_HOTEL_ID" />
        </motion.div>
      </div>
    </div>
  </div>
);

const Slide2 = () => (
  <div className="w-full h-full flex flex-col justify-center px-12 lg:px-24 max-w-7xl mx-auto relative cursor-hover">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="lg:col-span-7 relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl filter contrast-125"
      >
        <YouTubeBackground videoId="PLACEHOLDER_DINING_ID" />
      </motion.div>

      <div className="lg:col-span-5 relative z-10">
        <div className="overflow-hidden mb-6">
          <motion.h3 variants={textReveal} className="text-5xl font-display font-light">BRBN St. Dining</motion.h3>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg text-white/60 leading-relaxed font-light mb-12"
        >
          The region's premier nightlife and F&B district. 110+ concepts ranging from fast casual to elevated dining, perfect for corporate dining packages.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-2 gap-8"
        >
          <div className="border-t border-white/20 pt-4">
            <p className="text-3xl font-display text-white mb-2">110+</p>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">Dining Options</p>
          </div>
          <div className="border-t border-white/20 pt-4">
            <p className="text-3xl font-display text-white mb-2">L2 Grill</p>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">Signature Dining</p>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

const Slide3 = () => (
  <div className="w-full h-full flex flex-col justify-center px-12 lg:px-24 max-w-7xl mx-auto relative cursor-hover">
    <div className="flex flex-col md:flex-row gap-16 items-center">
      <div className="flex-1">
        <div className="overflow-hidden mb-6">
          <motion.h3 variants={textReveal} className="text-6xl lg:text-7xl font-display font-light">World Waterpark</motion.h3>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="pl-8 border-l border-white/20"
        >
          <p className="text-lg text-white/60 mb-10 leading-relaxed font-light">
            One of 12 world-class attractions. Secure exclusive evening buyouts for massive corporate events, accommodating thousands of guests in a tropical environment.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <span className="text-purple-400 font-sans text-xs tracking-widest mt-1">01</span>
              <div>
                <p className="text-white font-medium mb-1">5 Acres Indoor</p>
                <p className="text-sm text-white/40">Largest in North America.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-purple-400 font-sans text-xs tracking-widest mt-1">02</span>
              <div>
                <p className="text-white font-medium mb-1">Corporate Buyouts</p>
                <p className="text-sm text-white/40">Exclusive after-hours access.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="flex-1 w-full aspect-[3/4] relative rounded-[2rem] overflow-hidden filter contrast-125 brightness-90"
      >
        <YouTubeBackground videoId="7MDeaCvshj4" />
      </motion.div>
    </div>
  </div>
);

const Slide4 = () => (
  <div className="w-full h-full flex flex-col justify-center px-12 lg:px-24 max-w-7xl mx-auto relative cursor-hover">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-5 relative z-10 order-2 lg:order-1">
        <div className="overflow-hidden mb-6">
          <motion.h3 variants={textReveal} className="text-6xl lg:text-7xl font-display font-light">Galaxyland</motion.h3>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg text-white/60 leading-relaxed font-light mb-12"
        >
          North America's largest indoor amusement park, powered by Hasbro. With 27 thrilling rides and attractions, it's the ultimate venue for unforgettable corporate team building or brand takeover events.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-2 gap-8"
        >
          <div className="border-t border-white/20 pt-4">
            <p className="text-3xl font-display text-white mb-2">27</p>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">Rides & Attractions</p>
          </div>
          <div className="border-t border-white/20 pt-4">
            <p className="text-3xl font-display text-white mb-2">Hasbro</p>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">Official Partnership</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="lg:col-span-7 relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl filter contrast-125 order-1 lg:order-2"
      >
        <YouTubeBackground videoId="rYhuQAFVx6g" />
      </motion.div>
    </div>
  </div>
);

const Slide5 = () => {
  const attractions = [
    { name: 'World Waterpark', id: 'waterpark' },
    { name: 'Galaxyland', id: 'galaxyland' },
    { name: 'Ice Palace', id: 'icepalace' },
    { name: 'Marine Life', id: 'marinelife' },
    { name: 'Drive!', id: 'drive' },
    { name: "Ed's Bowling", id: 'bowling' }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center px-12 lg:px-24 max-w-7xl mx-auto relative cursor-hover">
      <div className="text-center mb-16">
        <div className="overflow-hidden mb-4 flex justify-center">
          <motion.span variants={textReveal} className="text-purple-400 font-sans tracking-[0.3em] uppercase text-xs block">
            Entertainment Ecosystem
          </motion.span>
        </div>
        <div className="overflow-hidden">
          <motion.h3 variants={textReveal} className="text-5xl lg:text-7xl font-display font-light">Featured Attractions</motion.h3>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-12"
      >
        {attractions.map((attr) => (
          <div key={attr.id} className="relative group rounded-3xl overflow-hidden aspect-[16/9] md:aspect-video border border-white/10 hover:border-purple-500/50 transition-colors duration-500 shadow-2xl cursor-pointer">
            <div className="absolute inset-0 bg-dark-800">
              <YouTubeBackground videoId={`PLACEHOLDER_${attr.id.toUpperCase()}_ID`} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-2xl font-display font-medium text-white tracking-wide group-hover:-translate-y-1 transition-transform duration-500">{attr.name}</h4>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function EntertainmentPathway() {
  const slides = [<Slide1 key="1" />, <Slide5 key="5" />, <Slide3 key="3" />, <Slide4 key="4" />, <Slide2 key="2" />];

  return <DeckContainer slides={slides} pathwayName="Hospitality Ecosystem" />;
}
