import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DeckControls from './DeckControls';

export default function DeckContainer({ slides, pathwayName }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, slides.length]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  const slideVariants = {
    initial: (direction) => ({
      y: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (direction) => ({
      y: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-dark-900">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 w-full h-full flex items-center justify-center"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      <DeckControls 
        currentSlide={currentSlide} 
        totalSlides={slides.length} 
        onNext={nextSlide} 
        onPrev={prevSlide}
        pathwayName={pathwayName}
      />
    </div>
  );
}
