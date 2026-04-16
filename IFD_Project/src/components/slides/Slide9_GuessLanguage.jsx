import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Slide9_GuessLanguage({ currentSubStep }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-12 overflow-hidden">
      
      <AnimatePresence mode="wait">
        {currentSubStep === 0 && (
          <motion.div
            key="guess-intro"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-9xl mb-8 animate-bounce">🗣️</span>
            <h2 className="text-6xl md:text-8xl font-display font-black text-white mb-6">
              Guess the <span className="text-ifd-coral">Language</span>
            </h2>
            <p className="text-3xl font-sans text-ifd-gold mt-4 font-light uppercase tracking-[0.3em]">
              Quiz Time !!
            </p>
          </motion.div>
        )}

        {currentSubStep === 1 && (
          <motion.div
            key="what-language"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
            className="flex flex-col items-center justify-center relative w-full max-w-4xl"
          >
            {/* Audio wave animation visualization */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
              <div className="w-96 h-96 bg-white rounded-full blur-[100px] animate-pulse" />
            </div>

            <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-16 rounded-[3rem] w-full text-center shadow-2xl">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-8xl mb-10 inline-block"
              >
                ❓
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
                What language <br/> is this?
              </h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
