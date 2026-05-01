import { motion } from 'framer-motion';

const AD_FORMATS = [
  {
    title: 'Digital Kiosks & Screens',
    desc: 'High-traffic interactive digital kiosks across all 3 levels and key mall intersections.',
    specs: '4K Ultra HD · 60+ placements · Full motion video',
    reach: '30M+ annual impressions',
  },
  {
    title: 'Atrium Takeovers',
    desc: 'Dominate the iconic central atrium — WEM\'s highest-footfall zone. Available for full brand immersion.',
    specs: 'Custom installation · Multi-day activations',
    reach: '10M+ dwell exposures',
  },
  {
    title: 'Entrance & Anchor OOH',
    desc: 'Large-format static and backlit panels at all major mall entrances and anchor brand corridors.',
    specs: '8 main entrances · 20+ anchor positions',
    reach: 'Every single visitor',
  },
  {
    title: 'In-Attraction Branding',
    desc: 'Branded placements inside World Waterpark, Galaxyland, Ice Palace, and Marine Life.',
    specs: 'Ride naming · Boards · Digital screens · Floor wraps',
    reach: '12M+ attraction visitors/yr',
  },
  {
    title: 'WEM Digital Network',
    desc: 'Programmatic ad network across WEM\'s own website, app, and email list of 500K+ subscribers.',
    specs: 'Geo-targeted · Behavioural · Re-targetable',
    reach: '500K+ subscribers',
  },
  {
    title: 'Event Sponsorship',
    desc: 'Title sponsor, presenting sponsor, or activation partner for 200+ annual events at WEM.',
    specs: 'Naming rights · On-site presence · PR coverage',
    reach: '2M+ annual event attendees',
  },
];

export default function DigitalOOHPathway() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="relative w-full h-screen bg-dark-900 overflow-hidden flex cursor-none"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/assets/Screenshot 2026-05-01 at 1.20.44 PM.png" alt="" className="w-full h-full object-cover opacity-40 filter contrast-110" />
        <div className="absolute inset-0 bg-dark-900/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#001020]/40 via-transparent to-transparent" />
      </div>

      {/* WEM Logo */}
      <div className="absolute top-8 left-8 z-50 pointer-events-none">
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex items-center gap-3">
          <img src="/assets/wem-logo.png" alt="WEM" className="w-9 h-9 object-contain" />
          <div>
            <p className="font-sans font-semibold tracking-[0.2em] text-[10px] uppercase text-white/80">West Edmonton Mall</p>
            <p className="text-white/40 text-[9px] tracking-widest uppercase">Commercial Deck</p>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col px-10 md:px-16 lg:px-20 pt-28 pb-12 overflow-y-auto">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-gold-500 text-[10px] font-bold tracking-[0.35em] uppercase mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-gold-500 inline-block" />
              Advertising & Media
            </p>
            <h1 className="font-display font-light text-white leading-[1.1]" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}>
              Own the Space.<br />
              <span className="italic text-white/70">Move the Audience.</span>
            </h1>
          </div>
          <div className="hidden md:flex gap-8 text-right">
            <div>
              <p className="text-gold-500 font-display text-3xl font-light">60+</p>
              <p className="text-white/40 text-[9px] uppercase tracking-widest">Digital Placements</p>
            </div>
            <div>
              <p className="text-gold-500 font-display text-3xl font-light">30M+</p>
              <p className="text-white/40 text-[9px] uppercase tracking-widest">Annual Reach</p>
            </div>
          </div>
        </motion.div>

        {/* Ad Formats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {AD_FORMATS.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 + (i * 0.08) }}
              className="border border-white/10 bg-white/3 p-5 hover:border-gold-500/30 transition-all duration-300 group cursor-hover"
            >
              <p className="text-white font-semibold text-[12px] tracking-wide mb-2 group-hover:text-gold-300 transition-colors duration-300">{f.title}</p>
              <p className="text-white/45 text-[10px] leading-relaxed mb-4">{f.desc}</p>
              <div className="border-t border-white/8 pt-3">
                <p className="text-white/25 text-[9px] uppercase tracking-widest mb-1">Specs</p>
                <p className="text-white/50 text-[10px] mb-2">{f.specs}</p>
                <p className="text-white/25 text-[9px] uppercase tracking-widest mb-1">Reach</p>
                <p className="text-gold-500/80 text-[10px] font-semibold">{f.reach}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.main>
  );
}
