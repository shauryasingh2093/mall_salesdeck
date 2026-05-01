import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DIRECTORY_DATA = [
  {
    category: "Featured Attractions",
    items: [
      { name: "WORLD WATERPARK", image: "/assets/waterpark1.png" },
      { name: "GALAXYLAND POWERED BY HASBRO", image: "/assets/galaxyland.png" },
      { name: "ICE PALACE", image: "/assets/iceplace.png" },
      { name: "MARINE LIFE", image: "/assets/marinelife.png" },
      { name: "DRIVE", image: null },
      { name: "ED'S BOWLING", image: null }
    ]
  },
  {
    category: "Attractions",
    items: [
      { name: "LEGO", image: "/assets/lego.png" },
      { name: "DRAGON'S TALE", image: null },
      { name: "SPLATTERVERSE", image: null },
      { name: "BIRDS OF PARADISE", image: null },
      { name: "THE SHIP", image: "/assets/ship.png" },
      { name: "PROFESSOR WEM'S ADVENTURE GOLF", image: null }
    ]
  },
  {
    category: "Tickets & Passes",
    items: [
      { name: "TICKETS", image: null },
      { name: "MULTI-PLAY PASS", image: null },
      { name: "TWO-DAY MULTI PARK PASS", image: null }
    ]
  },
  {
    category: "Groups & Entertainment",
    items: [
      { name: "BIRTHDAYS", image: null },
      { name: "EDUCATIONAL", image: null },
      { name: "CORPORATE & TEAM", image: null },
      { name: "FUNDRAISERS", image: null },
      { name: "ADULT PARTIES & GROUPS", image: null },
      { name: "TOUR GROUPS", image: null }
    ]
  }
];

export default function AttractionsDirectoryPathway() {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative w-full min-h-screen bg-dark-900 overflow-y-auto overflow-x-hidden cursor-none"
    >
      {/* Base ambient gradient */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-dark-900 via-[#0a1215] to-dark-900 pointer-events-none" />

      {/* Dynamic Hover Image Reveal */}
      <AnimatePresence>
        {hoveredImage && (
          <motion.div
            key={hoveredImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-0 pointer-events-none"
          >
            <img 
              src={hoveredImage} 
              alt="Attraction Background" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Overlay gradient to ensure text readability */}
            <div className="absolute inset-0 bg-dark-900/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-dark-900/80" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Header */}
      <div className="fixed top-0 left-0 right-0 p-8 flex justify-between items-center z-50 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <img src="/assets/wem-logo.png" alt="WEM" className="w-10 h-10 object-contain" />
          <div className="flex flex-col">
            <span className="font-sans font-semibold tracking-[0.2em] text-xs uppercase text-white/80">West Edmonton Mall</span>
            <span className="text-white/40 text-[10px] tracking-widest uppercase">Commercial Deck</span>
          </div>
        </motion.div>
      </div>

      {/* Directory Content */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-8 md:px-16 pt-40 pb-32 flex flex-col items-center">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-24 w-full"
        >
          <p className="text-gold-500 text-xs font-semibold tracking-[0.3em] uppercase mb-6 drop-shadow-md">
            Directory
          </p>
          <h1 className="text-4xl lg:text-6xl font-display font-light text-white mb-6 drop-shadow-xl">
            Ecosystem of <span className="italic text-white/80">Entertainment.</span>
          </h1>
          <div className="w-12 h-[1px] bg-gold-500 mx-auto shadow-gold-500 shadow-lg" />
        </motion.div>

        {/* Directory Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {DIRECTORY_DATA.map((column, colIndex) => (
            <motion.div 
              key={column.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + (colIndex * 0.1) }}
              className="flex flex-col border-t border-white/20 pt-8"
            >
              <h3 className="text-gold-500 font-sans font-bold text-xs tracking-[0.25em] uppercase mb-8 drop-shadow-md">
                {column.category}
              </h3>
              <ul className="flex flex-col gap-5">
                {column.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex}
                    onMouseEnter={() => item.image && setHoveredImage(item.image)}
                    onMouseLeave={() => setHoveredImage(null)}
                    className="text-white/80 hover:text-white transition-all duration-300 font-light text-sm md:text-base tracking-wide cursor-hover group flex items-center drop-shadow-md"
                  >
                    <span className={`w-0 overflow-hidden group-hover:w-3 group-hover:mr-2 transition-all duration-300 text-gold-500 ${item.image ? 'font-bold' : ''}`}>
                      &mdash;
                    </span>
                    <span className={`${item.image ? 'group-hover:translate-x-1 group-hover:text-gold-300' : ''} transition-all duration-300`}>
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Subcategory if exists */}
              {column.subCategory && (
                <div className="mt-12">
                  <h3 className="text-gold-500 font-sans font-bold text-xs tracking-[0.25em] uppercase mb-8 drop-shadow-md">
                    {column.subCategory}
                  </h3>
                  <ul className="flex flex-col gap-5">
                    {column.subItems.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className="text-white/80 hover:text-white transition-colors duration-300 font-light text-sm md:text-base tracking-wide cursor-hover group flex items-center drop-shadow-md"
                      >
                        <span className="w-0 overflow-hidden group-hover:w-3 group-hover:mr-2 transition-all duration-300 text-gold-500">
                          &mdash;
                        </span>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </motion.main>
  );
}
