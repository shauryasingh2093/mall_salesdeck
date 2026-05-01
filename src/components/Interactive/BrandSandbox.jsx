import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import YouTubeBackground from './YouTubeBackground';

// Simple hash function to generate a hue based on the string
const stringToHue = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % 360;
};

// Generate an array of random particles
const generateParticles = (count) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, // percentage
    y: Math.random() * 100, // percentage
    size: Math.random() * 4 + 1, // 1px to 5px
    duration: Math.random() * 20 + 10, // 10s to 30s
    delay: Math.random() * -20 // random start time
  }));
};

export default function BrandSandbox() {
  const [brandName, setBrandName] = useState('');
  const [particles, setParticles] = useState([]);
  const hue = brandName ? stringToHue(brandName) : 260; // Default purple-ish

  useEffect(() => {
    setParticles(generateParticles(150));
  }, []);

  return (
    <div className="relative w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-dark-900 border-t border-white/10">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0 filter contrast-125 brightness-50">
        <YouTubeBackground videoId="PLACEHOLDER_ATRIUM_ID" />
      </div>

      {/* Reactive Color Overlay */}
      <motion.div 
        animate={{ backgroundColor: `hsla(${hue}, 80%, 30%, 0.4)` }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 z-10 mix-blend-color"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark-900 via-transparent to-dark-900 opacity-80" />

      {/* Particle Swarm */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{ 
              width: p.size, 
              height: p.size, 
              left: `${p.x}%`, 
              top: `${p.y}%`,
              boxShadow: `0 0 ${p.size * 2}px hsla(${hue}, 100%, 70%, 0.8)`
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, -50, 0],
              opacity: brandName ? [0.2, 0.8, 0.2] : [0.1, 0.3, 0.1],
              scale: brandName ? [1, 1.5, 1] : 1
            }}
            transition={{
              duration: brandName ? p.duration * 0.3 : p.duration, // Speed up when typing
              repeat: Infinity,
              ease: "linear",
              delay: p.delay
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30 w-full max-w-5xl px-8 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-white/50 uppercase tracking-[0.3em] text-xs font-semibold block mb-4">
            The Power of 30 Million
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-light">
            Visualize Your <span className="italic font-serif">Domination</span>
          </h2>
        </motion.div>

        <input
          type="text"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
          placeholder="ENTER YOUR BRAND NAME"
          className="bg-transparent border-b-2 border-white/20 text-center text-2xl md:text-4xl font-display uppercase tracking-widest text-white placeholder-white/20 focus:outline-none focus:border-white/80 transition-colors w-full max-w-2xl py-4 mb-16 cursor-hover"
          maxLength={20}
        />

        {/* 3D Typographic Centerpiece */}
        <div className="h-40 flex items-center justify-center w-full">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ 
              scale: brandName ? 1 : 0.9, 
              opacity: brandName ? 1 : 0,
              textShadow: `0 0 40px hsla(${hue}, 80%, 50%, 0.8), 0 0 100px hsla(${hue}, 80%, 50%, 0.4)`
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[10vw] md:text-[8vw] font-display font-bold leading-none uppercase tracking-tighter text-white whitespace-nowrap"
            style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)', color: 'transparent' }}
          >
            {brandName || 'BRAND'}
          </motion.div>
        </div>

        <motion.p 
          animate={{ opacity: brandName ? 1 : 0 }}
          className="mt-12 text-lg text-white/60 font-light max-w-2xl"
        >
          Watch the environment react. Imagine your brand claiming the highest-traffic retail ecosystem in North America. This is what it means to be at the center of energy.
        </motion.p>
      </div>
    </div>
  );
}
