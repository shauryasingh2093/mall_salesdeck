import { motion } from 'framer-motion';

export default function YouTubeBackground({ videoId, className = "", start = 0 }) {
  if (!videoId) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}>
      {/* 
        We use aspect-ratio math to create a perfect "object-fit: cover" effect 
        for the iframe without excessive zooming, preserving quality and framing.
      */}
      <motion.iframe
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${videoId}&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3&start=${start}&vq=hd1080`}
        title="YouTube Background"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] pointer-events-none"
        style={{ border: 'none' }}
      />
    </div>
  );
}
