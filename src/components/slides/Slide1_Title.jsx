import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../Slide';

export default function Slide1_Title() {
    const team = [
        { name: 'Haziq', role: 'Lead' },
        { name: 'Irfan', role: 'Hardware' },
        { name: 'Adam', role: 'Ops' },
        { name: 'Andre', role: 'Research' },
    ];

    return (
        <Slide>
            <div className="text-center z-10 relative">
                {/* Blur Backdrop - Lighter */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl -z-10 scale-125 border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.1)]" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="p-12 pb-4" // Reduced bottom padding
                >
                    <h1 className="text-[10rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-warm-amber mb-2 tracking-tighter leading-none drop-shadow-[0_0_30px_rgba(255,255,255,0.6)] animate-pulse">
                        KOPITALK
                    </h1>
                    <p className="text-3xl text-gray-200 tracking-[0.4em] uppercase mb-8 font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                        By Admiralty Secondary Design Force
                    </p>
                </motion.div>

                <div className="flex gap-8 justify-center mt-8"> {/* Reduced top margin */}
                    {team.map((member, i) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            whileHover={{ scale: 1.1, color: '#00f2ff' }}
                            className="text-center cursor-pointer"
                        >
                            <p className="font-bold text-lg text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{member.name}</p>
                            <p className="text-xs text-gray-400 uppercase">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
