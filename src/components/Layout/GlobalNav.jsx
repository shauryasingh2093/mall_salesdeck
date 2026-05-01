import { Link, useLocation } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GlobalNav() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-500 ${
        isHome ? 'bg-transparent' : 'bg-dark-900/80 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <Link to="/" className="flex items-center gap-3 group">
        <img src="/assets/wem-logo.png" alt="WEM Logo" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform" />
        <div>
          <h1 className="font-sans font-semibold tracking-wide text-sm uppercase">West Edmonton Mall</h1>
          <p className="text-white/60 text-xs tracking-wider">Commercial Opportunities</p>
        </div>
      </Link>

      <div className="flex items-center gap-6">
        {!isHome && (
          <div className="hidden md:flex items-center gap-6 text-sm font-medium mr-4">
            <Link to="/retail" className="text-white/70 hover:text-white transition-colors">Retail & Luxury</Link>
            <Link to="/events" className="text-white/70 hover:text-white transition-colors">Events & Venues</Link>
            <Link to="/entertainment" className="text-white/70 hover:text-white transition-colors">Hospitality</Link>
          </div>
        )}
        <button className="flex items-center gap-2 bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 transition-all duration-300 px-5 py-2.5 rounded-full text-sm font-medium">
          <PhoneCall size={16} />
          <span>Schedule Call</span>
        </button>
      </div>
    </motion.nav>
  );
}
