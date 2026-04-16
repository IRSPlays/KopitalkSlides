import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, UtensilsCrossed } from 'lucide-react';

export default function Slide6_Laos({ currentSubStep }) {
  return (
    <div className="w-full h-full flex flex-col items-center p-12 overflow-hidden">
      
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="mb-8 flex flex-col items-center"
      >
        <span className="text-8xl drop-shadow-2xl mb-4">🇱🇦</span>
        <h2 className="text-6xl md:text-8xl font-display font-extrabold tracking-widest text-shadow-xl">
          L A O S
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mt-2">
        
        {/* Baci Ceremony */}
        <motion.div
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ 
            opacity: currentSubStep >= 1 ? 1 : 0,
            rotateY: currentSubStep >= 1 ? 0 : 90
          }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
          className="relative p-8 rounded-3xl border border-ifd-emerald/30 bg-black/40 backdrop-blur-md overflow-hidden group shadow-[0_0_50px_rgba(6,214,160,0.1)]"
          style={{ transformOrigin: "left center" }}
        >
          {/* Unsplash Background Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616053303780-eb2125bb7958?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 mix-blend-overlay" />

          <div className="absolute opacity-10 -top-4 -right-4 group-hover:scale-110 transition-transform duration-700">
            <HeartHandshake size={200} className="text-ifd-emerald" />
          </div>
          
          <div className="relative z-10">
            <h4 className="text-ifd-emerald font-sans uppercase tracking-widest text-sm mb-2 font-bold bg-ifd-emerald/20 inline-block px-3 py-1 rounded-full drop-shadow-md">Holiday / Ritual</h4>
            <h3 className="text-3xl font-display font-bold text-white mb-4 mt-2 drop-shadow-lg">
              Baci Ceremony
            </h3>
            <p className="text-lg font-sans text-white/90 leading-relaxed font-light drop-shadow-md">
              A fundamental ritual to celebrate life events, welcome guests, and bring good luck. Elders tie <strong className="text-ifd-emerald font-semibold">white cotton strings</strong> around wrists while offering blessings for health and happiness, strengthening family and friendship bonds.
            </p>
          </div>
        </motion.div>

        {/* Larb */}
        <motion.div
          initial={{ opacity: 0, rotateY: -90 }}
          animate={{ 
            opacity: currentSubStep >= 2 ? 1 : 0,
            rotateY: currentSubStep >= 2 ? 0 : -90
          }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
          className="relative p-8 rounded-3xl border border-ifd-gold/30 bg-black/40 backdrop-blur-md overflow-hidden group shadow-[0_0_50px_rgba(255,209,102,0.1)]"
          style={{ transformOrigin: "right center" }}
        >
          {/* Unsplash Background Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548943487-a2e4e42a0f8b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 mix-blend-overlay" />

          <div className="absolute opacity-10 -bottom-8 -left-8 group-hover:rotate-12 transition-transform duration-700">
            <UtensilsCrossed size={200} className="text-ifd-gold" />
          </div>
          
          <div className="relative z-10 flex flex-col h-full justify-end">
            <div>
              <h4 className="text-ifd-gold font-sans uppercase tracking-widest text-sm mb-2 font-bold bg-ifd-gold/20 inline-block px-3 py-1 rounded-full drop-shadow-md">Traditional Dish</h4>
              <h3 className="text-3xl font-display font-bold text-white mb-4 mt-2 drop-shadow-lg">
                Larb (Laap)
              </h3>
              <p className="text-lg font-sans text-white/90 leading-relaxed font-light drop-shadow-md">
                The national dish: A spicy minced meat salad mixed with lime, chili, fresh herbs, and toasted rice powder. A vibrant and deeply flavorful sharing dish.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
