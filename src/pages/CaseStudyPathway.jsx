import { motion } from 'framer-motion';

export default function CaseStudyPathway() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-screen bg-dark-900 overflow-hidden flex cursor-none"
    >
      <div className="absolute inset-0 z-0">
        <img src="/assets/crowd_event.png" alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-dark-900/90" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center px-10 md:px-16 lg:px-20 pt-28 pb-12 gap-16">
        
        {/* Left: Case Content */}
        <div className="flex-1 max-w-xl">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <p className="text-gold-500 text-[10px] font-bold tracking-[0.35em] uppercase mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-gold-500 inline-block" />
              Brand in Action
            </p>
            <h1 className="font-display font-light text-white leading-[1.1] mb-6" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}>
              The Hasbro <br/>
              <span className="italic text-white/70">Transformation.</span>
            </h1>
            <p className="text-white/50 text-sm leading-relaxed mb-10 font-light">
              In 2021, Galaxyland became the first Hasbro-themed amusement park in North America. This full-scale brand integration transformed WEM\'s most iconic attraction into an immersive, multi-brand experience ecosystem.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-gold-500 font-display text-4xl font-light mb-1">3.5M+</p>
                <p className="text-white/40 text-[9px] uppercase tracking-widest font-bold">Annual Impressions</p>
              </div>
              <div>
                <p className="text-gold-500 font-display text-4xl font-light mb-1">22%</p>
                <p className="text-white/40 text-[9px] uppercase tracking-widest font-bold">Foot Traffic Lift</p>
              </div>
              <div>
                <p className="text-gold-500 font-display text-4xl font-light mb-1">94%</p>
                <p className="text-white/40 text-[9px] uppercase tracking-widest font-bold">Positive Sentiment</p>
              </div>
              <div>
                <p className="text-gold-500 font-display text-4xl font-light mb-1">Top 10</p>
                <p className="text-white/40 text-[9px] uppercase tracking-widest font-bold">Global Ranking</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Visual Montage */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex-1 h-[60%] bg-white/5 border border-white/10 rounded-2xl p-4 relative overflow-hidden"
        >
          <img src="/assets/galaxyland.png" alt="Hasbro Galaxyland" className="w-full h-full object-cover opacity-50 rounded-lg" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8">
            <span className="bg-gold-500 text-dark-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Hasbro × Galaxyland Case Study</span>
          </div>
        </motion.div>

      </div>
    </motion.main>
  );
}
