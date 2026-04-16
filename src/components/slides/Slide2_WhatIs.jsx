import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../Slide';

export default function Slide2_WhatIs() {
    return (
        <Slide>
            <div className="w-full flex justify-center items-center h-full relative">
                {/* Immersive Background Glow */}
                <div className="absolute inset-x-0 bottom-0 top-[20%] bg-gradient-to-t from-neon-cyan/10 to-transparent blur-3xl -z-10" />

                <motion.div 
                    initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative w-full max-w-5xl bg-white/5 border border-white/20 p-16 rounded-[3rem] backdrop-blur-2xl shadow-[0_0_80px_rgba(0,242,255,0.15)] flex flex-col items-center text-center overflow-hidden"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/20 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-warm-amber/20 blur-[100px] rounded-full pointer-events-none" />

                    <h2 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 mb-12 tracking-tighter drop-shadow-2xl z-10">
                        WHAT IS KOPITALK?
                    </h2>

                    <div className="flex gap-8 relative z-10 w-full mt-4">
                        <motion.div 
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="flex-1 bg-black/40 border border-neon-cyan/40 p-8 rounded-3xl backdrop-blur-md relative group"
                        >
                            <div className="absolute inset-0 bg-neon-cyan/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h3 className="text-3xl font-bold text-neon-cyan mb-3 tracking-widest uppercase">The Bridge</h3>
                            <p className="text-xl text-gray-300 font-light leading-relaxed">
                                A highly interactive DIY family board game designed to connect generations seamlessly.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="flex-1 bg-black/40 border border-warm-amber/40 p-8 rounded-3xl backdrop-blur-md relative group"
                        >
                            <div className="absolute inset-0 bg-warm-amber/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h3 className="text-3xl font-bold text-warm-amber mb-3 tracking-widest uppercase">The Culture</h3>
                            <p className="text-xl text-gray-300 font-light leading-relaxed">
                                Players solve challenges centered entirely around Singapore's rich food heritage.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </Slide>
    );
}
