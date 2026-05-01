import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';

const ATTRACTIONS = [
  {
    id: 'waterpark',
    label: 'World Waterpark',
    image: '/assets/waterpark1.png',
    headline: 'World Waterpark',
    description: "North America's largest indoor waterpark. 5 acres, 17 water slides, a wave pool and beach area — delivering 2M+ annual visits and 400K event-day brand reach.",
    stats: [
      { value: '5 Acres', label: 'Indoor Space' },
      { value: '2M+', label: 'Annual Visits' },
      { value: '17', label: 'Water Slides' },
      { value: '400K', label: 'Event-Day Reach' },
    ],
    opportunities: ['Naming Rights', 'Branded Slides', 'Splash Zone Sponsor', 'Exclusive Buyout', 'In-Park Digital OOH'],
  },
  {
    id: 'galaxyland',
    label: 'Galaxyland',
    image: '/assets/galaxyland.png',
    headline: 'Galaxyland',
    description: "North America's largest indoor amusement park. 27+ rides including a triple-loop roller coaster. 1.5M+ annual riders with massive youth and family brand reach.",
    stats: [
      { value: '27+', label: 'Rides & Attractions' },
      { value: '1.5M+', label: 'Annual Riders' },
      { value: '2.5 Ac', label: 'Indoor Footprint' },
      { value: 'All Yr', label: 'Year-Round' },
    ],
    opportunities: ['Ride Naming Rights', 'Entrance Arch Branding', 'Gaming Zone Activation', 'Youth Loyalty Program', 'Event Day Co-Sponsor'],
  },
  {
    id: 'icepalace',
    label: 'Ice Palace',
    image: '/assets/iceplace.png',
    headline: 'Ice Palace',
    description: "A full NHL-sized ice rink in the heart of the mall. 350+ days of skating, leagues, and programming. A premier activation surface for sports and lifestyle brands.",
    stats: [
      { value: 'NHL', label: 'Regulation Size' },
      { value: '350+', label: 'Operating Days' },
      { value: '500K+', label: 'Annual Skaters' },
      { value: '12K sq ft', label: 'Rink Surface' },
    ],
    opportunities: ['Ice Surface Branding', 'Boards & Glass Ads', 'Skate School Partner', 'Event Naming Rights', 'Locker Room Sponsor'],
  },
  {
    id: 'marinelife',
    label: 'Marine Life',
    image: '/assets/marinelife.png',
    headline: 'Marine Life',
    description: "Western Canada's largest aquarium. 100+ species, shark tanks, touch pools, and educational programming reaching 1M+ visitors annually across all demographics.",
    stats: [
      { value: '100+', label: 'Species' },
      { value: '1M+', label: 'Annual Visitors' },
      { value: 'All Ages', label: 'Audience' },
      { value: '365', label: 'Days Open' },
    ],
    opportunities: ['Aquarium Naming Rights', 'Digital Immersion Sponsor', 'Education Program Partner', 'Tank Branding', 'VIP Experience Sponsor'],
  },
  {
    id: 'drive',
    label: 'Drive',
    image: '/assets/drive.png',
    headline: 'Drive',
    description: "WEM's premium indoor go-kart racing experience. High-speed track with professional-grade karts delivering an adrenaline-fuelled brand activation canvas year-round.",
    stats: [
      { value: '800m', label: 'Track Length' },
      { value: '50+', label: 'Karts' },
      { value: 'All Ages', label: 'Audience' },
      { value: 'Year-Round', label: 'Operation' },
    ],
    opportunities: ['Track Naming Rights', 'Kart Branding', 'Pit Lane Signage', 'Race Day Sponsorship', 'Digital Leaderboard Partner'],
  },
  {
    id: 'bowling',
    label: "Ed's Bowling",
    image: '/assets/ed_vowling.png',
    headline: "Ed's Bowling",
    description: 'Your all-in-one entertainment destination. Tenpin & Kingpin Bowling, arcade games, private karaoke, billiards, and great food & drinks — perfect for parties, corporate events, and unforgettable nights out.',
    stats: [
      { value: '2', label: 'Bowling Formats' },
      { value: 'Karaoke', label: 'Private Rooms' },
      { value: 'F&B', label: 'Full Bar & Dining' },
      { value: 'Year-Round', label: 'Operation' },
    ],
    opportunities: ['Lane Naming Rights', 'Corporate League Partner', 'Karaoke Room Sponsor', 'Event Night Buyout', 'F&B Brand Partnership'],
  },
];

export default function EntertainmentEcosystem({ attractionId }) {
  const navigate = useNavigate();
  const attraction = ATTRACTIONS.find(a => a.id === attractionId) || ATTRACTIONS[0];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(8px)' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="relative w-full h-screen bg-dark-900 overflow-hidden cursor-none"
    >
      {/* Full-bleed Hero Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={attraction.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
        >
          <img
            src={attraction.image}
            alt={attraction.label}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-dark-900/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/40 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* WEM Logo */}
      <div className="absolute top-8 left-8 z-50 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-3"
        >
          <img src="/assets/wem-logo.png" alt="WEM" className="w-9 h-9 object-contain" />
          <div>
            <p className="font-sans font-semibold tracking-[0.2em] text-[10px] uppercase text-white/80">West Edmonton Mall</p>
            <p className="text-white/40 text-[9px] tracking-widest uppercase">Commercial Deck</p>
          </div>
        </motion.div>
      </div>

      {/* Top Sub-Tab Navigation */}
      <div className="absolute top-0 left-0 right-0 z-40 flex flex-col items-center pt-10 pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gold-500 text-[9px] font-bold tracking-[0.4em] uppercase mb-3"
        >
          Entertainment Ecosystem
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-1 pointer-events-auto"
        >
          {ATTRACTIONS.map((a) => (
            <button
              key={a.id}
              onClick={() => navigate(`/entertainment-${a.id}`)}
              className={`px-5 py-1.5 rounded-full text-[11px] font-semibold tracking-wide transition-all duration-300 cursor-hover ${
                a.id === attraction.id
                  ? 'bg-gold-500 text-dark-900'
                  : 'text-white/60 hover:text-white border border-transparent hover:border-white/20'
              }`}
            >
              {a.label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-10 md:px-16 pb-16">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={attraction.id + '-content'}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Headline */}
            <h1 className="font-display font-light text-white leading-none mb-4"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}>
              {attraction.headline}
            </h1>

            {/* Description */}
            <p className="text-white/65 text-sm leading-relaxed max-w-xl mb-6 font-light">
              {attraction.description}
            </p>

            {/* Stats Row */}
            <div className="flex gap-8 mb-6">
              {attraction.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-white text-xl font-display font-light leading-none mb-1">{stat.value}</p>
                  <p className="text-white/40 text-[9px] uppercase tracking-widest font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Opportunities */}
            <div className="mb-8">
              <p className="text-white/30 text-[9px] font-bold tracking-[0.3em] uppercase mb-3">Opportunities:</p>
              <div className="flex flex-wrap gap-2">
                {attraction.opportunities.map((opp) => (
                  <span key={opp} className="px-3 py-1 rounded-full text-[10px] text-white/70 border border-white/20 bg-white/5 tracking-wide">
                    {opp}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={() => navigate('/demographics')}
                className="px-7 py-3 bg-white text-dark-900 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gold-500 transition-colors duration-300 cursor-hover"
              >
                Book Activation
              </button>
              <button 
                onClick={() => navigate('/demographics')}
                className="px-7 py-3 border border-white/40 text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:border-gold-500 hover:text-gold-500 transition-colors duration-300 cursor-hover"
              >
                Request Sponsorship Deck
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.main>
  );
}
