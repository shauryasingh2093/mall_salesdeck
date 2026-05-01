import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CATEGORIES = [
  {
    id: 'intro',
    label: 'INTRODUCTION',
    routes: ['/', '/prologue', '/hub', '/scale', '/prime-zones', '/why-wem']
  },
  {
    id: 'ecosystem',
    label: 'ECOSYSTEM',
    routes: ['/retail', '/dining', '/hospitality']
  },
  {
    id: 'attractions',
    label: 'ATTRACTIONS & EVENTS',
    routes: ['/events', '/entertainment', '/entertainment-waterpark', '/entertainment-galaxyland', '/entertainment-icepalace', '/entertainment-marinelife', '/entertainment-drive', '/entertainment-bowling']
  },
  {
    id: 'audience',
    label: 'THE AUDIENCE',
    routes: ['/audience', '/digital-ooh', '/case-study']
  },
  {
    id: 'contact',
    label: 'CONTACT SALES',
    routes: ['/demographics']
  }
];

export default function CategoryNavigationBar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Hide the bar entirely on the landing, video, and scale pages to keep them cinematic
  if (location.pathname === '/' || location.pathname === '/prologue' || location.pathname === '/scale') return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] hidden md:flex items-center bg-dark-800/80 backdrop-blur-md rounded-sm overflow-hidden border border-white/10 pointer-events-auto"
    >
      {CATEGORIES.map((cat, index) => {
        const isActive = cat.routes.includes(location.pathname);
        
        return (
          <button 
            key={cat.id}
            onClick={() => {
              // Navigate to the first route of the category if it has routes
              if (cat.routes.length > 0) {
                navigate(cat.routes[0]);
              }
            }}
            className={`
              px-6 py-2 transition-all duration-500 ease-in-out border-r border-white/5 last:border-0 cursor-hover
              ${isActive ? 'bg-gold-500' : 'hover:bg-white/5'}
            `}
          >
            <span 
              className={`
                text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap
                ${isActive ? 'text-dark-900' : 'text-white/60'}
              `}
            >
              {cat.label}
            </span>
          </button>
        );
      })}
    </motion.div>
  );
}
