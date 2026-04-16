import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Slide8_SkitWalkway({ currentSubStep }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-12 overflow-hidden relative">
      
      <AnimatePresence mode="wait">
        {/* SKIT */}
        {currentSubStep === 0 && (
          <motion.div
            key="skit"
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 1.2, opacity: 0, rotate: 5 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="flex flex-col items-center"
          >
            <span className="text-9xl mb-8">🎭</span>
            <h2 className="text-[12rem] font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-ifd-gold via-ifd-coral to-ifd-coral drop-shadow-[0_0_50px_rgba(255,107,107,0.5)]">
              Skit !
            </h2>
          </motion.div>
        )}

        {/* CULTURAL WALKWAY */}
        {currentSubStep === 1 && (
          <motion.div
            key="walkway"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="flex flex-col items-center"
          >
            <span className="text-9xl mb-8">🚶🏽‍♀️⛩️</span>
            <h2 className="text-[8rem] font-display font-black text-white text-center leading-none">
              Cultural <br/>
              <span className="text-ifd-emerald">Walkway !</span>
            </h2>
          </motion.div>
        )}

        {/* THAILAND FESTIVALS */}
        {currentSubStep === 2 && (
          <motion.div
            key="thailand"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-6xl flex flex-col items-center"
          >
            <h2 className="text-6xl font-display font-bold mb-12 text-center drop-shadow-xl">
              <span className="text-8xl mr-4">🇹🇭</span>
              Festivals of <span className="text-ifd-gold">Thailand</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              
              {/* Loy Krathong */}
              <div className="relative p-10 rounded-3xl bg-black/50 border border-ifd-gold/30 backdrop-blur-md flex flex-col items-center text-center group overflow-hidden shadow-[0_0_50px_rgba(255,209,102,0.1)]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542194680-a6122d25080c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 mix-blend-overlay" />
                
                <div className="relative z-10 w-full flex flex-col items-center">
                  <span className="text-8xl mb-6 group-hover:scale-125 transition-transform duration-500 drop-shadow-2xl">🕯️</span>
                  <h3 className="text-4xl font-display font-bold text-white mb-2 drop-shadow-lg">Loy Krathong</h3>
                  <p className="text-xl text-ifd-gold font-sans drop-shadow-lg font-medium">Festival of Colors & Lights</p>
                </div>
              </div>

              {/* Songkran */}
              <div className="relative p-10 rounded-3xl bg-black/50 border border-ifd-emerald/30 backdrop-blur-md flex flex-col items-center text-center group overflow-hidden shadow-[0_0_50px_rgba(6,214,160,0.1)]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555416246-86c5f7e7a3e7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 mix-blend-overlay" />
                
                <div className="relative z-10 w-full flex flex-col items-center">
                  <span className="text-8xl mb-6 group-hover:scale-125 transition-transform duration-500 drop-shadow-2xl">💧</span>
                  <h3 className="text-4xl font-display font-bold text-white mb-2 drop-shadow-lg">Songkran</h3>
                  <p className="text-xl text-ifd-emerald font-sans drop-shadow-lg font-medium">Water Festival</p>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
