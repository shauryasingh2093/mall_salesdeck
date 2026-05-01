import { motion } from 'framer-motion';

const DEMOGRAPHICS = [
  { label: 'Families', pct: 42, color: 'bg-gold-500' },
  { label: 'Young Adults (18–35)', pct: 31, color: 'bg-white/60' },
  { label: 'Teens (13–17)', pct: 14, color: 'bg-white/40' },
  { label: '35–54', pct: 9, color: 'bg-white/25' },
  { label: '55+', pct: 4, color: 'bg-white/15' },
];

const KEY_STATS = [
  { value: '30M+', label: 'Annual Visitors' },
  { value: '65%', label: 'Return Visitors' },
  { value: '$85K+', label: 'Avg HH Income' },
  { value: '40%', label: 'Out-of-Region Visitors' },
  { value: '2.5hr', label: 'Avg Dwell Time' },
  { value: '87%', label: 'Brand Recall Rate' },
];

const SEGMENTS = [
  { title: 'Families', desc: 'The core audience. Multi-generational groups spending full days across attractions, dining, and retail.', tags: ['Waterpark', 'Galaxyland', 'Ice Palace', 'Food Court'] },
  { title: 'Youth & Teens', desc: 'High social-media influence. Trend-forward shoppers driving viral reach for brand activations.', tags: ['Entertainment', 'Fast Fashion', 'Gaming', 'Events'] },
  { title: 'Tourists & Travelers', desc: '40% of visitors are from outside the region. On-site hotels extend exposure to multi-day brand touchpoints.', tags: ['Hotels', 'Marine Life', 'Europa Blvd', 'Fine Dining'] },
  { title: 'Affluent Shoppers', desc: 'Luxury retail spenders drawn by anchor tenants Gucci, Tiffany & Co., Holt Renfrew. High lifetime value.', tags: ['Luxury Retail', 'Dining', 'Personal Styling', 'Valet'] },
];

export default function AudienceDemographicsPathway() {
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
        <img src="/assets/genz_trendsetters.png" alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-dark-900/85" />
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
      <div className="relative z-10 w-full h-full flex gap-12 px-10 md:px-16 lg:px-20 pt-28 pb-12 overflow-hidden">

        {/* Left Column */}
        <div className="flex flex-col w-[38%] flex-shrink-0">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mb-8">
            <p className="text-gold-500 text-[10px] font-bold tracking-[0.35em] uppercase mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-gold-500 inline-block" />
              The Audience
            </p>
            <h1 className="font-display font-light text-white leading-[1.1] mb-4" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}>
              Reach Millions.<br />
              <span className="italic text-white/70">Convert the Right Ones.</span>
            </h1>
            <p className="text-white/50 text-sm leading-relaxed font-light">
              WEM's 30M+ annual visitors represent one of the most diverse and high-intent consumer audiences in North America.
            </p>
          </motion.div>

          {/* Visitor Breakdown Bar */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="mb-8">
            <p className="text-white/30 text-[9px] font-bold tracking-[0.3em] uppercase mb-4">Visitor Breakdown</p>
            <div className="flex h-3 rounded-full overflow-hidden gap-[2px] mb-4">
              {DEMOGRAPHICS.map(d => (
                <motion.div
                  key={d.label}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className={`${d.color} origin-left`}
                  style={{ width: `${d.pct}%` }}
                />
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {DEMOGRAPHICS.map(d => (
                <div key={d.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${d.color}`} />
                    <span className="text-white/60 text-[10px]">{d.label}</span>
                  </div>
                  <span className="text-white/40 text-[10px] font-mono">{d.pct}%</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Key Stats Grid */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.65 }} className="grid grid-cols-2 gap-3">
            {KEY_STATS.map((s, i) => (
              <div key={i} className="border border-white/10 px-3 py-2 bg-white/3">
                <p className="text-gold-500 font-display text-lg font-light">{s.value}</p>
                <p className="text-white/40 text-[9px] uppercase tracking-wider font-semibold">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Segments */}
        <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-white/30 text-[9px] font-bold tracking-[0.3em] uppercase mb-2">Key Audience Segments</motion.p>
          {SEGMENTS.map((seg, i) => (
            <motion.div
              key={seg.title}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.55 + (i * 0.1) }}
              className="border border-white/10 bg-white/3 p-5 hover:border-gold-500/30 transition-colors duration-300 group cursor-hover"
            >
              <p className="text-white font-semibold text-sm tracking-wide mb-1.5 group-hover:text-gold-300 transition-colors duration-300">{seg.title}</p>
              <p className="text-white/45 text-[11px] leading-relaxed mb-3">{seg.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {seg.tags.map(t => (
                  <span key={t} className="px-2 py-0.5 text-[9px] text-white/50 border border-white/10 tracking-wide">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.main>
  );
}
