import React from 'react';
import { motion } from 'framer-motion';

export default function Slide1_Title({ currentSubStep }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-12">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Background ambient glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-ifd-blue/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: currentSubStep >= 2 ? 1.5 : 1,
            opacity: currentSubStep >= 2 ? 0.4 : 0.1,
          }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-ifd-gold/10 rounded-full blur-[80px]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{
            opacity: currentSubStep >= 1 ? 1 : 0,
            y: currentSubStep >= 1 ? 0 : 50,
            scale: currentSubStep >= 1 ? 1 : 0.9
          }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="mb-6 px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md"
        >
          <span className="text-ifd-coral font-sans font-medium tracking-widest uppercase text-sm">
            Admiralty Secondary School
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: currentSubStep >= 1 ? 1 : 0,
            y: currentSubStep >= 1 ? 0 : 40,
            textShadow: currentSubStep >= 2 ? "0 0 40px rgba(255, 209, 102, 0.5)" : "0 0 0px rgba(0,0,0,0)"
          }}
          transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.3 }}
          className="text-7xl md:text-9xl font-display font-bold text-white mb-6 leading-tight"
        >
          International <br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-ifd-gold to-ifd-coral">
            Friendship Day
          </span>
          <br/> 2026
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSubStep >= 2 ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-3xl font-sans text-blue-100 max-w-3xl font-light"
        >
          Singapore: Forging Friendships in a Complex World
        </motion.p>
      </div>
    </div>
  );
}
