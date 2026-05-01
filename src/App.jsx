import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import CentralHub from './pages/CentralHub';
import RetailPathway from './pages/RetailPathway';
import EventsPathway from './pages/EventsPathway';
import EntertainmentPathway from './pages/EntertainmentPathway';
import EntertainmentWaterpark from './pages/EntertainmentWaterpark';
import EntertainmentGalaxyland from './pages/EntertainmentGalaxyland';
import EntertainmentIcePalace from './pages/EntertainmentIcePalace';
import EntertainmentMarineLife from './pages/EntertainmentMarineLife';
import ScaleMontagePathway from './pages/ScaleMontagePathway';
import WhyWemPathway from './pages/WhyWemPathway';
import AudienceDemographicsPathway from './pages/AudienceDemographicsPathway';
import DigitalOOHPathway from './pages/DigitalOOHPathway';
import EntertainmentDrive from './pages/EntertainmentDrive';
import EntertainmentBowling from './pages/EntertainmentBowling';
import PrimeZonesPathway from './pages/PrimeZonesPathway';
import CaseStudyPathway from './pages/CaseStudyPathway';
import DiningPathway from './pages/DiningPathway';
import HospitalityPathway from './pages/HospitalityPathway';
import DemographicsPathway from './pages/DemographicsPathway';
import CustomCursor from './components/Interactive/CustomCursor';
import MapModal from './components/Interactive/MapModal';
import LandingPage from './pages/LandingPage';
import Prologue from './pages/Prologue';
import SlideController from './components/Interactive/SlideController';
import CategoryNavigationBar from './components/Interactive/CategoryNavigationBar';
import LoadingScreen from './components/Interactive/LoadingScreen';
import { useDeckNavigation } from './hooks/useDeckNavigation';
import { useState, useEffect } from 'react';

function App() {
  const location = useLocation();
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Initialize the global keyboard deck navigation
  useDeckNavigation();

  useEffect(() => {
    const handleOpenMap = () => setIsMapOpen(true);
    window.addEventListener('openMap', handleOpenMap);
    return () => window.removeEventListener('openMap', handleOpenMap);
  }, []);

  return (
    <div className={`w-screen h-screen bg-dark-900 text-white selection:bg-gold-500/30 overflow-hidden ${isMapOpen ? 'cursor-auto' : 'cursor-none'}`}>
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      {!isMapOpen && <CustomCursor />}
      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
      <CategoryNavigationBar />
      <SlideController />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/prologue" element={<Prologue />} />
          <Route path="/hub" element={<CentralHub />} />
          <Route path="/scale" element={<ScaleMontagePathway />} />
          <Route path="/retail" element={<RetailPathway />} />
          <Route path="/events" element={<EventsPathway />} />
          <Route path="/entertainment" element={<EntertainmentPathway />} />
          <Route path="/entertainment-waterpark" element={<EntertainmentWaterpark />} />
          <Route path="/entertainment-galaxyland" element={<EntertainmentGalaxyland />} />
          <Route path="/entertainment-icepalace" element={<EntertainmentIcePalace />} />
          <Route path="/entertainment-marinelife" element={<EntertainmentMarineLife />} />
          <Route path="/entertainment-drive" element={<EntertainmentDrive />} />
          <Route path="/entertainment-bowling" element={<EntertainmentBowling />} />
          <Route path="/why-wem" element={<WhyWemPathway />} />
          <Route path="/audience" element={<AudienceDemographicsPathway />} />
          <Route path="/digital-ooh" element={<DigitalOOHPathway />} />
          <Route path="/prime-zones" element={<PrimeZonesPathway />} />
          <Route path="/case-study" element={<CaseStudyPathway />} />
          <Route path="/dining" element={<DiningPathway />} />
          <Route path="/hospitality" element={<HospitalityPathway />} />
          <Route path="/demographics" element={<DemographicsPathway />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
