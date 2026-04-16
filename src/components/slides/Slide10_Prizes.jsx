import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide from '../Slide';

export default function Slide10_Prizes({ currentSubStep = 0 }) {
    // 0: Intro (Idle, out of focus)
    // 1: Adam
    // 2: Andre
    // 3: Irfan
    // 4: Haziq
    const activeIndex = currentSubStep > 0 ? currentSubStep - 1 : 0; 

    const team = [
        { id: 1, name: "Adam", role: "The Visionary", desc: "Crafting the core concept and generational story." },
        { id: 2, name: "Andre", role: "The Storyteller", desc: "Translating the physical disconnect into design." },
        { id: 3, name: "Irfan", role: "The Architect", desc: "Engineering the custom hardware and 3D prints." },
        { id: 4, name: "Haziq", role: "Director & Coder", desc: "Leading and Building the Custom APP, 3d models and more." }
    ];

    return (
        <Slide>
            <div className="w-full h-full flex flex-col items-center justify-center relative z-10 px-8 pt-10">
                
                {/* Title */}
                <motion.div 
                    className="absolute top-16 left-0 right-0 flex flex-col items-center"
                    animate={{ 
                        opacity: currentSubStep === 0 ? 1 : 0.8,
                        y: currentSubStep === 0 ? 0 : -20 
                    }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-6xl font-black text-white uppercase tracking-[0.4em] drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] mb-4">
                        Award Presentation
                    </h2>
                    <p className="text-neon-cyan tracking-[0.4em] font-mono font-bold uppercase text-sm">
                        Recognizing the Force Behind Kopitalk
                    </p>
                </motion.div>

                {/* 3D Coverflow Carousel (Opaque Cards to prevent particle clashing) */}
                <div className="relative w-full h-[70vh] mt-32 flex justify-center items-center perspective-[2500px]">
                    <AnimatePresence>
                        {team.map((member, idx) => {
                            const offset = idx - activeIndex;
                            const isActive = offset === 0 && currentSubStep > 0;
                            const isIdle = currentSubStep === 0;
                            
                            // High performance GPU calculations
                            const xPos = isIdle ? (idx - 1.5) * 300 : offset * 400;
                            const zPos = isIdle ? -400 : (isActive ? 150 : -200 - Math.abs(offset) * 150);
                            const rotateY = isIdle ? 0 : offset * -20; 
                            const scale = isActive ? 1.05 : 0.85;
                            const opacity = Math.abs(offset) > 2 ? 0 : (isIdle ? 0.4 : (isActive ? 1 : 0.3));
                            const zIndex = 50 - Math.abs(offset);

                            return (
                                <motion.div
                                    key={member.id}
                                    initial={false}
                                    animate={{ 
                                        x: xPos, 
                                        z: zPos, 
                                        rotateY: rotateY, 
                                        scale: scale, 
                                        opacity: opacity,
                                        zIndex: zIndex,
                                        y: isActive ? -20 : 0
                                    }}
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 150, 
                                        damping: 20,
                                        mass: 0.8
                                    }}
                                    className={`absolute w-[450px] h-[650px] rounded-[2.5rem] flex flex-col items-center overflow-hidden transition-shadow duration-500 border border-white/10
                                        ${isActive 
                                            ? 'shadow-[0_0_80px_rgba(0,242,255,0.4)] ring-2 ring-neon-cyan bg-gradient-to-b from-gray-900 to-black' 
                                            : 'shadow-2xl bg-[#080808]'}
                                    `}
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    {/* Geometric Award Graphic */}
                                    <div className="w-full h-2/5 flex items-center justify-center bg-black/50 relative border-b border-white/5">
                                        <motion.div 
                                            animate={{ 
                                                rotate: isActive ? 360 : 0, 
                                                scale: isActive ? 1.2 : 0.8 
                                            }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                            className="absolute w-40 h-40 opacity-20 border-2 border-neon-cyan rounded-full border-dashed"
                                        />
                                        <motion.div 
                                            animate={{ scale: isActive ? [1, 1.1, 1] : 1 }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                            className={`w-32 h-32 rounded-3xl rotate-45 flex items-center justify-center shadow-2xl transition-all duration-700
                                                ${isActive ? 'bg-gradient-to-tr from-neon-cyan to-blue-700 shadow-[0_0_50px_rgba(0,242,255,0.5)]' : 'bg-gray-800'}
                                            `}
                                        >
                                            <div className="w-16 h-16 rounded-full bg-black/60 shadow-inner" />
                                        </motion.div>
                                    </div>

                                    {/* Text Block */}
                                    <div className="w-full flex-1 p-10 flex flex-col items-center justify-start text-center relative">
                                        
                                        <motion.div 
                                            animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0.5 }}
                                            className="px-6 py-2 rounded-full border border-neon-cyan/40 bg-neon-cyan/10 mb-8"
                                        >
                                            <span className="text-neon-cyan text-sm font-black tracking-[0.25em] uppercase drop-shadow-md">
                                                {member.role}
                                            </span>
                                        </motion.div>

                                        <h3 className={`text-6xl font-black uppercase tracking-widest transition-colors duration-500 mb-6
                                            ${isActive ? 'text-white' : 'text-gray-500'}
                                        `}>
                                            {member.name}
                                        </h3>

                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.p 
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.9 }}
                                                    className="text-gray-300 text-lg font-light leading-relaxed max-w-[80%]"
                                                >
                                                    {member.desc}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                        
                                        {isActive && (
                                            <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/10 to-transparent pointer-events-none" />
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
                
            </div>
        </Slide>
    );
}
