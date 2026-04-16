import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, UtensilsCrossed } from 'lucide-react';
import Slide from '../Slide';

export default function Slide4_Solution({ currentSubStep }) {
    const activePopup = currentSubStep === 2 ? 'senior' : currentSubStep === 1 ? 'youth' : null;

    return (
        <Slide>
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-white mb-16 uppercase tracking-wider">OUR SOLUTION</h1>

            <div className="relative w-[600px] h-[400px] flex items-center justify-center">
                {/* Orbit 1: Youth */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[300px] h-[300px] rounded-full border border-neon-cyan/30"
                >
                    <motion.div
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 pointer-events-auto"
                        onClick={() => setActivePopup('youth')}
                        whileHover={{ scale: 1.2 }}
                    >
                        <div className="w-16 h-16 rounded-full bg-neon-cyan flex items-center justify-center shadow-[0_0_20px_#00f2ff]">
                            <Smartphone className="text-black" />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Orbit 2: Senior */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[450px] h-[450px] rounded-full border border-warm-amber/30"
                >
                    <motion.div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 cursor-pointer z-20 pointer-events-auto"
                        onClick={() => setActivePopup('senior')}
                        whileHover={{ scale: 1.2 }}
                    >
                        <div className="w-16 h-16 rounded-full bg-warm-amber flex items-center justify-center shadow-[0_0_20px_#ff9f1c]">
                            <UtensilsCrossed className="text-black" />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Central Hub */}
                <div className="absolute z-10 text-center">
                    <h2 className="text-3xl font-bold text-white">EXCHANGE</h2>
                </div>

                {/* Popups */}
                {activePopup === 'youth' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-0 right-[-200px] w-64 p-4 bg-neon-cyan/10 border border-neon-cyan rounded-xl backdrop-blur-md"
                    >
                        <h3 className="font-bold text-neon-cyan mb-2">TEENAGER</h3>
                        <p className="text-sm">Teaches Technology.<br />Digital Native.</p>
                    </motion.div>
                )}

                {activePopup === 'senior' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-0 left-[-200px] w-64 p-4 bg-warm-amber/10 border border-warm-amber rounded-xl backdrop-blur-md"
                    >
                        <h3 className="font-bold text-warm-amber mb-2">ELDERLY</h3>
                        <p className="text-sm">Teaches Culinary Skills.<br />Cultural Wisdom.</p>
                    </motion.div>
                )}
            </div>
        </Slide>
    );
}
