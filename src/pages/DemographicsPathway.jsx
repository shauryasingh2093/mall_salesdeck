import { motion } from 'framer-motion';
import { useState } from 'react';

export default function DemographicsPathway() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="relative w-full h-screen bg-dark-900 overflow-hidden flex cursor-none"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/atrium.png"
          alt="WEM Atrium"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/80 to-dark-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-dark-900/60" />
      </div>

      {/* WEM Logo */}
      <div className="absolute top-8 left-8 z-50 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <img src="/assets/wem-logo.png" alt="WEM" className="w-9 h-9 object-contain" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-between px-10 md:px-16 lg:px-24 gap-12 lg:gap-20 pt-20 pb-10">

        {/* Left: Copy + Contact */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex flex-col justify-center max-w-xl"
        >
          <p className="text-gold-500 text-[10px] font-bold tracking-[0.35em] uppercase mb-6 flex items-center gap-3">
            <span className="w-6 h-[1px] bg-gold-500 inline-block" />
            Start the Conversation
          </p>

          <h1
            className="font-display font-light text-white leading-[1.15] mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.6rem)' }}
          >
            Bring Your Brand to{' '}
            <span className="italic text-white/70">
              North America's Ultimate Destination
            </span>
          </h1>

          <p className="text-white/55 text-sm leading-relaxed mb-10 font-light max-w-sm">
            Our commercial team responds within one business day. Tell us what you're
            exploring and we'll craft a proposal to match your ambition.
          </p>

          {/* Contact Details */}
          <div className="flex flex-col gap-5">
            {[
              { label: 'Commercial Leasing', value: '+1 (780) 444-5321' },
              { label: 'Events & Venue Booking', value: 'events@wem.ca' },
              { label: 'Sponsorship', value: 'sponsorship@wem.ca' },
              { label: 'Address', value: '8882 170 St NW, Edmonton AB T5T 4J2' },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-white/30 text-[9px] font-bold tracking-[0.25em] uppercase mb-1">{label}</p>
                <p className="text-white/80 text-sm font-light">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Enquiry Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-sm lg:max-w-md flex-shrink-0"
        >
          <div className="bg-dark-800/80 backdrop-blur-xl border border-white/10 p-8 rounded-sm">

            <p className="text-white/60 text-[10px] font-bold tracking-[0.25em] uppercase mb-8">
              Request a Commercial Briefing
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gold-500/20 border border-gold-500/50 flex items-center justify-center mb-4">
                  <span className="text-gold-500 text-xl">✓</span>
                </div>
                <p className="text-white text-base font-display font-light mb-2">Thank you!</p>
                <p className="text-white/50 text-xs leading-relaxed">
                  Our commercial team will respond within one business day.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-white/40 text-[10px] uppercase tracking-widest font-semibold mb-1.5 block">
                    Full Name <span className="text-gold-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full bg-white/5 border border-white/10 text-white text-sm placeholder-white/25 px-4 py-3 outline-none focus:border-gold-500/60 transition-colors duration-300 cursor-auto"
                  />
                </div>

                <div>
                  <label className="text-white/40 text-[10px] uppercase tracking-widest font-semibold mb-1.5 block">
                    Company <span className="text-gold-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Brand / Organisation"
                    className="w-full bg-white/5 border border-white/10 text-white text-sm placeholder-white/25 px-4 py-3 outline-none focus:border-gold-500/60 transition-colors duration-300 cursor-auto"
                  />
                </div>

                <div>
                  <label className="text-white/40 text-[10px] uppercase tracking-widest font-semibold mb-1.5 block">
                    Email <span className="text-gold-500">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="jane@yourbrand.com"
                    className="w-full bg-white/5 border border-white/10 text-white text-sm placeholder-white/25 px-4 py-3 outline-none focus:border-gold-500/60 transition-colors duration-300 cursor-auto"
                  />
                </div>

                <div>
                  <label className="text-white/40 text-[10px] uppercase tracking-widest font-semibold mb-1.5 block">
                    I'm Interested In...
                  </label>
                  <select
                    className="w-full bg-dark-900 border border-white/10 text-white/70 text-sm px-4 py-3 outline-none focus:border-gold-500/60 transition-colors duration-300 cursor-auto appearance-none"
                  >
                    <option value="">Select area of interest</option>
                    <option>Commercial Leasing</option>
                    <option>Sponsorship & Brand Activation</option>
                    <option>Events & Venue Booking</option>
                    <option>Retail Partnership</option>
                    <option>Hospitality & Hotels</option>
                    <option>Entertainment Sponsorship</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gold-500 text-dark-900 text-[11px] font-bold tracking-[0.25em] uppercase mt-2 hover:bg-gold-400 transition-colors duration-300 cursor-hover"
                >
                  Submit Enquiry
                </button>

                <p className="text-white/25 text-[10px] text-center leading-relaxed">
                  24-hour response guarantee · All enquiries treated with full confidentiality
                </p>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </motion.main>
  );
}
