import { motion } from 'framer-motion';

const STATS = [
  { value: '30M+', label: 'Annual Visitors', sub: 'More than Canada\'s entire tourist arrivals' },
  { value: '#1', label: 'Most Visited', sub: 'Attraction in all of Alberta' },
  { value: '2.5hr', label: 'Avg Dwell Time', sub: '3× the national mall average' },
  { value: '4+', label: 'Major Attractions', sub: 'Under one roof — unmatched in NA' },
];

const DIFFERENTIATORS = [
  {
    title: 'Only Mall in NA',
    desc: 'With an indoor waterpark, amusement park, NHL-rink, and aquarium all under one roof.',
    icon: '🏆'
  },
  {
    title: 'Built-In Captive Audience',
    desc: '30M annual visitors who spend 2.5+ hours on property — unprecedented dwell-time for brand exposure.',
    icon: '👥'
  },
  {
    title: 'Year-Round Operation',
    desc: 'Unlike outdoor destinations, WEM drives consistent foot traffic 365 days a year regardless of weather.',
    icon: '📅'
  },
  {
    title: '800+ Brand Neighbours',
    desc: 'Your brand sits alongside global names like Gucci, Tiffany & Co., Holt Renfrew, and H&M.',
    icon: '✦'
  },
  {
    title: 'Destination Tourism',
    desc: 'Visitors travel specifically to WEM from across Canada, USA, and internationally.',
    icon: '✈️'
  },
  {
    title: 'Two On-Site Hotels',
    desc: 'Fantasyland Hotel and WEM Inn drive multi-day stays that multiply brand touchpoints.',
    icon: '🏨'
  },
];

export default function WhyWemPathway() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="relative w-full h-screen bg-dark-900 overflow-hidden flex cursor-none"
    >
      {/* Ambient bg */}
      <div className="absolute inset-0 z-0">
        <img src="/assets/ship.png" alt="" className="w-full h-full object-cover opacity-40 filter saturate-75" />
        <div className="absolute inset-0 bg-dark-900/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-transparent to-transparent opacity-60" />
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mb-10">
          <p className="text-gold-500 text-[10px] font-bold tracking-[0.35em] uppercase mb-4 flex items-center gap-3">
            <span className="w-6 h-[1px] bg-gold-500 inline-block" />
            Competitive Advantage
          </p>
          <h1 className="font-display font-light text-white leading-[1.1]" style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)' }}>
            Why <span className="italic text-white/70">West Edmonton Mall?</span>
          </h1>
        </motion.div>

        {/* Stats Row */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {STATS.map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/10 px-5 py-4 hover:border-gold-500/30 transition-colors duration-300">
              <p className="text-gold-500 font-display text-3xl font-light mb-1">{s.value}</p>
              <p className="text-white text-[11px] font-semibold tracking-wide mb-1">{s.label}</p>
              <p className="text-white/35 text-[10px] leading-relaxed">{s.sub}</p>
            </div>
          ))}
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DIFFERENTIATORS.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + (i * 0.07) }}
              className="flex gap-4 border-l border-gold-500/30 pl-4 hover:border-gold-500/70 transition-colors duration-300 group"
            >
              <div>
                <p className="text-white text-[11px] font-bold tracking-wide mb-1 group-hover:text-gold-300 transition-colors duration-300">{d.title}</p>
                <p className="text-white/45 text-[10px] leading-relaxed">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.main>
  );
}
