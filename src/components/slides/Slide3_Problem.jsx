import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Box } from 'lucide-react';
import Slide from '../Slide';

export default function Slide3_Problem({ currentSubStep }) {
    const isRevealed = currentSubStep >= 1;

    return (
        <Slide>
            <div className="flex w-full max-w-7xl items-center justify-between relative h-[60vh]">
                {/* Left Side: Teenager */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="w-1/3 p-8 text-neon-cyan border-l-4 border-neon-cyan bg-void-black/50 backdrop-blur-sm flex flex-col items-center"
                >
                    <Globe size={64} className="mb-4 animate-pulse" />
                    <h2 className="text-5xl font-bold mb-4">TEENAGER</h2>
                    <p className="text-xl text-gray-300 text-center">Fast-paced digital world.<br />Memes & online trends.</p>
                </motion.div>

                {/* The Gap (Interactive) */}
                <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                    onClick={() => setIsRevealed(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {!isRevealed ? (
                        <div className="w-40 h-40 rounded-full border-4 border-dashed border-white/30 flex items-center justify-center bg-black/50 backdrop-blur-md hover:border-red-500 hover:text-red-500 transition-colors">
                            <span className="font-bold text-xl">THE GAP</span>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1.5, rotate: 0 }}
                            className="w-72 h-72 rounded-full bg-red-600/20 border-4 border-red-500 flex flex-col items-center justify-center text-center p-4 backdrop-blur-xl shadow-[0_0_50px_rgba(220,38,38,0.5)] cursor-pointer"
                            onClick={(e) => { e.stopPropagation(); setIsRevealed(false); }}
                        >
                            <h3 className="text-3xl font-bold text-white mb-2">NO COMMON GROUND</h3>
                            <p className="text-sm text-white font-bold">Without shared experiences,<br />building relationships<br />takes extra effort.</p>
                        </motion.div>
                    )}
                </motion.div>

                {/* Right Side: Elderly */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="w-1/3 p-8 text-right text-warm-amber border-r-4 border-warm-amber bg-void-black/50 backdrop-blur-sm flex flex-col items-center"
                >
                    <Box size={64} className="mb-4" />
                    <h2 className="text-5xl font-bold mb-4">ELDERLY</h2>
                    <p className="text-xl text-gray-300 text-center">Unrelatable stories.<br />Different life pace.</p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-20 text-center"
            >
                <p className="text-2xl text-gray-400">Gen Z is online. Seniors are offline. The gap is widening.</p>
            </motion.div>
        </Slide>
    );
}
