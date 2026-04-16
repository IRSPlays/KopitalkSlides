import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function Slide3_ASEAN({ currentSubStep }) {
  const countries = [
    { name: "Singapore", flag: "🇸🇬" },
    { name: "Philippines", flag: "🇵🇭" },
    { name: "Vietnam", flag: "🇻🇳" },
    { name: "Malaysia", flag: "🇲🇾" },
    { name: "Indonesia", flag: "🇮🇩" },
    { name: "Myanmar", flag: "🇲🇲" },
    { name: "Laos", flag: "🇱🇦" },
    { name: "Brunei", flag: "🇧🇳" },
    { name: "Thailand", flag: "🇹🇭" },
    { name: "Cambodia", flag: "🇰🇭" },
    { name: "Timor-Leste", flag: "🇹🇱", note: "Joined 26 Oct 2025" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 15 } }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <span className="text-ifd-gold font-sans tracking-[0.2em] uppercase text-sm mb-4 block">Our Neighbors</span>
        <h2 className="text-5xl md:text-7xl font-display font-bold">
          <span className="text-ifd-blue">ASEAN</span> Countries
        </h2>
      </motion.div>

      {currentSubStep >= 1 && (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl"
        >
          {countries.map((country, idx) => (
            <motion.div
              key={country.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className={`p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center gap-3 relative overflow-hidden group ${
                country.name === 'Cambodia' ? 'border-ifd-emerald/50 bg-ifd-emerald/10' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="text-5xl drop-shadow-lg mb-2">
                {country.flag}
              </div>
              
              <h3 className="text-xl font-display font-medium text-white text-center">
                {country.name}
              </h3>

              {country.note && (
                <div className="absolute top-2 right-2 flex items-center justify-center w-6 h-6 rounded-full bg-ifd-coral/20 text-ifd-coral" title={country.note}>
                  <MapPin size={12} />
                </div>
              )}
              {country.note && (
                <p className="text-xs text-ifd-coral font-sans font-medium text-center mt-1">
                  {country.note}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
