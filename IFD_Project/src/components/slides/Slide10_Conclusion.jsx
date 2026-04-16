import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Slide10_Conclusion({ currentSubStep }) {
  const sharedConcepts = [
    "Family", "Friends", "Celebration", "Food", 
    "Shelter", "Community", "Universal Values", "Common Needs"
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-12 overflow-hidden">
      <AnimatePresence mode="wait">
        
        {/* WHAT WE SHARE */}
        {currentSubStep === 0 && (
          <motion.div
            key="shared"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-5xl flex flex-col items-center"
          >
            <h2 className="text-6xl md:text-8xl font-display font-bold text-white mb-12">
              What We <span className="text-ifd-gold">Share</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {sharedConcepts.map((concept, i) => (
                <motion.div
                  key={concept}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="px-8 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-2xl font-sans"
                >
                  {concept}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CONCLUSION */}
        {currentSubStep === 1 && (
          <motion.div
            key="conclusion"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-5xl text-center bg-ifd-blue/10 backdrop-blur-xl border border-ifd-blue/30 p-16 rounded-[3rem]"
          >
            <h2 className="text-5xl font-display font-bold text-ifd-blue mb-8 uppercase tracking-widest">
              In Conclusion
            </h2>
            <p className="text-3xl font-sans text-white/90 leading-relaxed font-light">
              International Friendship day is dedicated to the understanding of relations neighbouring Singapore and allows us to understand the spirit of friendship and collaboration among different people.
            </p>
          </motion.div>
        )}

        {/* CREDITS */}
        {currentSubStep === 2 && (
          <motion.div
            key="credits"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="w-full max-w-4xl text-center"
          >
            <h2 className="text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-ifd-gold to-ifd-coral mb-12">
              Credits !
            </h2>
            
            <div className="grid grid-cols-1 gap-6 text-2xl font-sans font-light text-white/80">
              <p><strong className="text-white">Teachers:</strong> Ms Uma, Mr Siva, Mr Chua, Mdm Yam</p>
              <p><strong className="text-white">Students:</strong> Eryna (A6), Catherine (A7), Panita (O2), Sofhea (A6), Alex (P7)</p>
              <p><strong className="text-ifd-emerald">Production:</strong> Shengnan and Jurgen (Lighthouse Productions)</p>
            </div>
            
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-16 text-ifd-gold text-xl tracking-[0.5em] uppercase"
            >
              Thank You
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
