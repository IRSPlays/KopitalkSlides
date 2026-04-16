import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Utensils } from 'lucide-react';

export default function Slide4_Cambodia({ currentSubStep }) {
  return (
    <div className="w-full h-full flex flex-col items-center p-12 overflow-hidden">
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="mb-12 flex flex-col items-center"
      >
        <span className="text-8xl drop-shadow-2xl mb-4">🇰🇭</span>
        <h2 className="text-6xl md:text-8xl font-display font-extrabold tracking-tight">
          Cam<span className="text-ifd-emerald">bo</span>dia
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mt-4">
        
        {/* Khmer New Year */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ 
            opacity: currentSubStep >= 1 ? 1 : 0,
            x: currentSubStep >= 1 ? 0 : -100
          }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
          className="relative p-8 rounded-3xl border border-ifd-gold/30 bg-black/40 backdrop-blur-md overflow-hidden group shadow-[0_0_50px_rgba(255,209,102,0.1)]"
        >
          {/* Unsplash Background Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542361131-ab1bd6aab54f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 mix-blend-overlay" />
          
          <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
            <Sparkles size={100} className="text-ifd-gold" />
          </div>
          
          <div className="relative z-10">
            <h4 className="text-ifd-gold font-sans uppercase tracking-widest text-sm mb-2 font-semibold drop-shadow-md">Holiday Celebration</h4>
            <h3 className="text-3xl font-display font-bold text-white mb-4 leading-tight drop-shadow-lg">
              Khmer New Year <br/>
              <span className="text-xl font-medium text-white/90 drop-shadow-md">(Chaul Chnam Thmey)</span>
            </h3>
            <p className="text-lg font-sans text-white/90 leading-relaxed font-light drop-shadow-md">
              <strong className="text-white font-medium">In April</strong>, this is the premier time for strengthening bonds. It is a time for friends and family to gather, exchange gifts, play traditional games, and visit pagodas together.
            </p>
          </div>
        </motion.div>

        {/* Fish Amok */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ 
            opacity: currentSubStep >= 2 ? 1 : 0,
            x: currentSubStep >= 2 ? 0 : 100
          }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
          className="relative p-8 rounded-3xl border border-ifd-coral/30 bg-black/40 backdrop-blur-md overflow-hidden group shadow-[0_0_50px_rgba(255,107,107,0.1)]"
        >
          {/* Unsplash Background Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 mix-blend-overlay" />

          <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
            <Utensils size={100} className="text-ifd-coral" />
          </div>
          
          <div className="relative z-10">
            <h4 className="text-ifd-coral font-sans uppercase tracking-widest text-sm mb-2 font-semibold drop-shadow-md">Traditional Dish</h4>
            <h3 className="text-3xl font-display font-bold text-white mb-4 drop-shadow-lg">
              Fish Amok
            </h3>
            <p className="text-lg font-sans text-white/90 leading-relaxed font-light drop-shadow-md">
              A creamy, coconut curry steamed in banana leaves, featuring lemongrass, turmeric, and lime leaves. A true staple of Cambodian cultural cuisine.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
