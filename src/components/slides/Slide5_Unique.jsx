import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../Slide';
import { Cpu, Smartphone, MessageSquareHeart } from 'lucide-react';

export default function Slide5_Unique() {
    const features = [
        { icon: <Smartphone className="w-16 h-16 text-neon-cyan" />, title: "Smart App", desc: "A connected mobile app acts as our game master." },
        { icon: <Cpu className="w-16 h-16 text-warm-amber" />, title: "AI Analysis", desc: "Analyses discussions to dynamically suggest common topics." },
        { icon: <MessageSquareHeart className="w-16 h-16 text-purple-400" />, title: "Guided Bonding", desc: "Calculates moves and focuses players purely on interaction." },
    ];

    return (
        <Slide>
            <div className="w-full flex flex-col items-center z-10 relative mt-10">
                <motion.h2 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-white to-warm-amber drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] mb-16 uppercase tracking-wider"
                >
                    What Makes Us Unique?
                </motion.h2>

                <div className="grid grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
                            whileHover={{ y: -10, scale: 1.05 }}
                            className="flex flex-col items-center text-center bg-black/30 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-lg ring-1 ring-white/5 hover:bg-black/50 hover:ring-neon-cyan/50"
                        >
                            <div className="mb-6 p-4 bg-white/5 rounded-full ring-1 ring-white/10">
                                {feature.icon}
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">{feature.title}</h3>
                            <p className="text-xl text-gray-300 font-light leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
