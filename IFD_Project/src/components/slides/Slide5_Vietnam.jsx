import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, Coffee } from 'lucide-react';

export default function Slide5_Vietnam({ currentSubStep }) {
  return (
    <div className="w-full h-full flex flex-col items-center p-12 overflow-hidden">
      
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="mb-10 flex flex-col items-center"
      >
        <span className="text-8xl drop-shadow-2xl mb-4">🇻🇳</span>
        <h2 className="text-6xl md:text-8xl font-display font-extrabold tracking-tight">
          Viet<span className="text-ifd-coral">nam</span>
        </h2>
      </motion.div>

      <div className="flex flex-col gap-8 w-full max-w-5xl mt-2 relative">
        
        {/* Tết */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ 
            opacity: currentSubStep >= 1 ? 1 : 0,
            scale: currentSubStep >= 1 ? 1 : 0.9,
            y: currentSubStep >= 1 ? 0 : 50
          }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
          className="relative p-8 rounded-3xl border border-ifd-coral/40 bg-black/40 backdrop-blur-md overflow-hidden group shadow-[0_0_50px_rgba(255,107,107,0.1)]"
        >
          {/* Unsplash Background Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598305886548-261622328114?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 mix-blend-overlay" />

          <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20 group-hover:scale-125 group-hover:opacity-40 transition-all duration-500">
            <PartyPopper size={120} className="text-ifd-coral" />
          </div>
          
          <div className="relative z-10 w-3/4">
            <h4 className="text-ifd-coral font-sans uppercase tracking-[0.3em] text-sm mb-2 font-bold drop-shadow-md">Holiday Celebration</h4>
            <h3 className="text-4xl font-display font-bold text-white mb-3 drop-shadow-lg">
              Tết <span className="text-2xl font-medium text-white/80 drop-shadow-md">(Lunar New Year)</span>
            </h3>
            <p className="text-lg font-sans text-white/90 leading-relaxed font-light drop-shadow-md">
              Friends are honoured alongside family, with the second day of Tết often dedicated to visiting, exchanging greetings, and strengthening bonds through shared traditional activities and gatherings.
            </p>
          </div>
        </motion.div>

        {/* Phở */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ 
            opacity: currentSubStep >= 2 ? 1 : 0,
            scale: currentSubStep >= 2 ? 1 : 0.9,
            y: currentSubStep >= 2 ? 0 : 50
          }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
          className="relative p-8 rounded-3xl border border-ifd-gold/40 bg-black/40 backdrop-blur-md overflow-hidden group self-end w-[90%] shadow-[0_0_50px_rgba(255,209,102,0.1)]"
        >
          {/* Unsplash Background Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 mix-blend-overlay" />

          <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20 group-hover:rotate-12 group-hover:opacity-40 transition-all duration-500">
            <Coffee size={120} className="text-ifd-gold" />
          </div>
          
          <div className="relative z-10 w-3/4">
            <h4 className="text-ifd-gold font-sans uppercase tracking-[0.3em] text-sm mb-2 font-bold drop-shadow-md">Traditional Dish</h4>
            <h3 className="text-4xl font-display font-bold text-white mb-3 drop-shadow-lg">
              Phở <span className="text-2xl font-medium text-white/80 drop-shadow-md">(Noodle Soup)</span>
            </h3>
            <p className="text-lg font-sans text-white/90 leading-relaxed font-light drop-shadow-md">
              The national dish, typically beef or chicken broth, rice noodles, and fresh herbs. A warm bowl that brings people together.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
