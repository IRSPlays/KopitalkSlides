import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../Slide';

export default function Slide10_Summary() {
    return (
        <Slide>
            <div className="w-full h-full flex flex-col items-center justify-center relative z-10 px-20">
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="flex flex-col items-center text-center max-w-4xl"
                >
                    {/* Subtle structural line to ground the design */}
                    <div className="w-px h-24 bg-gradient-to-b from-transparent to-neon-cyan/50 mb-10" />

                    <h1 className="text-5xl font-light tracking-[0.2em] text-white mb-6 uppercase">
                        Bridging the <br className="lg:hidden" />
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-400">
                            Generational Gap
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 font-light tracking-wide mb-16 max-w-2xl leading-relaxed">
                        KopiTalk is a digital bridge built to resolve a physical disconnect.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <button
                            className="px-8 py-3 border border-white/20 rounded-full text-white tracking-widest text-sm uppercase hover:bg-white hover:text-black transition-all duration-500"
                        >
                            Thank You
                        </button>
                    </motion.div>
                </motion.div>
                
            </div>
        </Slide>
    );
}
