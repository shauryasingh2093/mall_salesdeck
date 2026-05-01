import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const DECK_SLIDES = [
  '/',
  '/prologue',
  '/hub',
  '/scale',
  '/prime-zones',
  '/why-wem',
  '/retail',
  '/dining',
  '/hospitality',
  '/events',
  '/entertainment-waterpark',
  '/entertainment-galaxyland',
  '/entertainment-icepalace',
  '/entertainment-marinelife',
  '/entertainment-drive',
  '/entertainment-bowling',
  '/audience',
  '/digital-ooh',
  '/case-study',
  '/demographics'
];

export function useDeckNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if they are typing in an input (not that we have any, but good practice)
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      const currentIndex = DECK_SLIDES.indexOf(location.pathname);
      if (currentIndex === -1) return; // Unknown route

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (currentIndex < DECK_SLIDES.length - 1) {
          navigate(DECK_SLIDES[currentIndex + 1]);
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentIndex > 0) {
          navigate(DECK_SLIDES[currentIndex - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [location.pathname, navigate]);

  const currentIndex = DECK_SLIDES.indexOf(location.pathname);
  
  return {
    currentIndex,
    totalSlides: DECK_SLIDES.length,
    hasNext: currentIndex < DECK_SLIDES.length - 1,
    hasPrev: currentIndex > 0,
    next: () => {
      if (currentIndex < DECK_SLIDES.length - 1) navigate(DECK_SLIDES[currentIndex + 1]);
    },
    prev: () => {
      if (currentIndex > 0) navigate(DECK_SLIDES[currentIndex - 1]);
    }
  };
}
