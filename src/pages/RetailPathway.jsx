import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import YouTubeBackground from '../components/Interactive/YouTubeBackground';
import AudienceLens from '../components/Interactive/AudienceLens';
import ScrollControls from '../components/Layout/ScrollControls';
import BrandSandbox from '../components/Interactive/BrandSandbox';

export default function RetailPathway() {
  const containerRef = useRef(null);
  
  // Track overall page scroll progress for the ScrollControls indicator
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1 Parallax
  const section1Ref = useRef(null);
  const { scrollYProgress: s1Progress } = useScroll({
    target: section1Ref,
    offset: ["start start", "end start"]
  });
  const s1Y = useTransform(s1Progress, [0, 1], ["0%", "50%"]);
  const s1Opacity = useTransform(s1Progress, [0, 0.8], [1, 0]);

  // Section 2 Parallax
  const section2Ref = useRef(null);
  const { scrollYProgress: s2Progress } = useScroll({
    target: section2Ref,
    offset: ["start end", "center center"]
  });
  const s2Y = useTransform(s2Progress, [0, 1], ["20%", "0%"]);
  const s2Opacity = useTransform(s2Progress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="bg-dark-900 min-h-screen cursor-none">
      <ScrollControls pathwayName="Retail Ecosystem" scrollProgress={scrollYProgress} />
      
      {/* SECTION 1: Intro */}
      <section ref={section1Ref} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: s1Y, opacity: s1Opacity }} className="absolute inset-0 z-0 filter contrast-125 brightness-50">
          <YouTubeBackground videoId="PLACEHOLDER_RETAIL_ID" />
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-purple-400 font-sans tracking-[0.3em] uppercase text-sm mb-6 block"
          >
            The Retail Ecosystem
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-9xl font-display font-light mb-8 leading-none"
          >
            800+ Brands. <br/>
            <span className="italic font-serif text-white/70">One Destination.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto"
          >
            A curated collection of the world's most sought-after flagship stores, 
            exclusive boutiques, and first-to-market concepts.
          </motion.p>
        </div>
        
        {/* Scroll prompt */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-white/40">Scroll to Explore</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* SECTION 2: Theme Streets */}
      <section ref={section2Ref} className="relative min-h-screen py-32 px-6 lg:px-24 flex items-center bg-dark-900 z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div style={{ y: s2Y, opacity: s2Opacity }}>
            <h2 className="text-5xl lg:text-7xl font-display font-light mb-8">
              Bespoke <br/><span className="italic text-white/60">Theme Streets</span>
            </h2>
            <p className="text-xl text-white/70 leading-relaxed font-light mb-12 max-w-md">
              Distinctive retail districts designed to transport shoppers and elevate brand presence.
            </p>
            
            <div className="space-y-8 pl-8 border-l border-white/20">
              <div>
                <h3 className="text-2xl font-display text-white mb-2">Europa Boulevard</h3>
                <p className="text-sm text-white/50">Cobblestone streets and Parisian-inspired storefronts catering to premium and luxury boutiques.</p>
              </div>
              <div>
                <h3 className="text-2xl font-display text-white mb-2">BRBN St.</h3>
                <p className="text-sm text-white/50">High-energy dining and retail inspired by the vibrant nightlife of New Orleans.</p>
              </div>
              <div>
                <h3 className="text-2xl font-display text-white mb-2">Chinatown</h3>
                <p className="text-sm text-white/50">An authentic, bustling marketplace featuring specialty Asian retailers and grocers.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            style={{ y: s2Y, opacity: s2Opacity }}
            className="aspect-[3/4] relative rounded-[2rem] overflow-hidden shadow-2xl filter contrast-125"
          >
            <YouTubeBackground videoId="PLACEHOLDER_EUROPA_ID" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Audience Lens (Data Visualization) */}
      <section className="relative min-h-screen py-32 bg-dark-800 z-10 border-t border-white/10 flex items-center">
        <div className="w-full">
          <div className="text-center mb-16">
            <span className="text-purple-400 font-sans tracking-[0.3em] uppercase text-xs block mb-4">Interactive Demographics</span>
            <h2 className="text-5xl font-display font-light">The Audience Lens</h2>
          </div>
          <AudienceLens />
        </div>
      </section>

      {/* SECTION 4: The Brand Sandbox ("I Need to Be Here" Moment) */}
      <section className="relative z-10">
        <BrandSandbox />
      </section>

    </div>
  );
}
