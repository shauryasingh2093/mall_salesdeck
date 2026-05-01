import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import CentralHub from './pages/CentralHub';
import RetailPathway from './pages/RetailPathway';
import EventsPathway from './pages/EventsPathway';
import EntertainmentPathway from './pages/EntertainmentPathway';
import CustomCursor from './components/Interactive/CustomCursor';
import MapModal from './components/Interactive/MapModal';
import LandingPage from './pages/LandingPage';
import Prologue from './pages/Prologue';
import { useState, useEffect } from 'react';

function App() {
  const location = useLocation();
  const [isMapOpen, setIsMapOpen] = useState(false);

  useEffect(() => {
    const handleOpenMap = () => setIsMapOpen(true);
    window.addEventListener('openMap', handleOpenMap);
    return () => window.removeEventListener('openMap', handleOpenMap);
  }, []);

  return (
    <div className="w-screen h-screen bg-dark-900 text-white selection:bg-gold-500/30 overflow-hidden cursor-none">
      <CustomCursor />
      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/prologue" element={<Prologue />} />
          <Route path="/hub" element={<CentralHub />} />
          <Route path="/retail" element={<RetailPathway />} />
          <Route path="/events" element={<EventsPathway />} />
          <Route path="/entertainment" element={<EntertainmentPathway />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
