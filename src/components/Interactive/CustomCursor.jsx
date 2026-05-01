import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverState, setHoverState] = useState("default");

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('.cursor-hover-logo')) {
        setHoverState("hoverLogo");
      } else if (e.target.closest('a, button, .cursor-hover')) {
        setHoverState("hover");
      } else {
        setHoverState("default");
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      mixBlendMode: 'difference',
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      mixBlendMode: 'difference',
    },
    hoverLogo: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.8)',
      mixBlendMode: 'normal',
    },
    hoverLarge: {
      x: mousePosition.x - 64,
      y: mousePosition.y - 64,
      height: 128,
      width: 128,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.8)',
      mixBlendMode: 'difference',
    }
  };

  return (
    <motion.div
      variants={variants}
      animate={hoverState}
      transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[100]"
    />
  );
}
