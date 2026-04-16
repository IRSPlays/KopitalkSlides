import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide from '../Slide';

export default function Slide8_Prototype({ currentSubStep = 0 }) {
    const activeIndex = currentSubStep; // Ranges from 0 to 4 based on App.jsx allocating 5 sub-steps

    const images = [
        { src: '/images/proto1.png', label: 'Tile Board Prototype', desc: 'Physical testing of grid layout' },
        { src: '/images/proto2.png', label: 'Modular Structural Frame', desc: 'Stackable base components' },
        { src: '/images/proto3.png', label: 'MRT Station (3D Print)', desc: 'Scale model of the transport hub' },
        { src: '/images/proto4.png', label: 'Facade Assembly', desc: 'Architectural side-wall detailing' },
        { src: '/images/proto5.png', label: 'HDB Block (3D Print)', desc: 'Residential block scale model' }
    ];

    return (
        <Slide>
            <div className="w-full h-full flex flex-col items-center justify-center relative z-10 px-8">
                
                {/* Header that slides away to give space if needed, but we keep it here */}
                <motion.div 
                    className="absolute top-12 left-0 right-0 flex flex-col items-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-white to-neon-cyan uppercase tracking-[0.3em] drop-shadow-[0_0_20px_rgba(0,242,255,0.4)] mb-4">
                        Prototype Gallery
                    </h2>
                    <div className="flex gap-2">
                        {images.map((_, i) => (
                            <div 
                                key={i} 
                                className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-12 bg-neon-cyan shadow-[0_0_10px_#00f2ff]' : 'w-4 bg-white/20'}`} 
                            />
                        ))}
                    </div>
                </motion.div>

                {/* 3D Coverflow Carousel (High Performance & GPU Accelerated) */}
                <div className="relative w-full h-[65vh] mt-24 flex justify-center items-center perspective-[2000px]">
                    <AnimatePresence>
                        {images.map((img, idx) => {
                            const offset = idx - activeIndex;
                            const isActive = offset === 0;
                            
                            // High performance GPU calculations
                            const xPos = offset * 320;
                            const zPos = isActive ? 0 : -150 - Math.abs(offset) * 100;
                            // Angle them slightly inwards towards the center
                            const rotateY = offset * -15; 
                            const scale = isActive ? 1 : 0.8;
                            const opacity = Math.abs(offset) > 2 ? 0 : (isActive ? 1 : 0.4);
                            const zIndex = 50 - Math.abs(offset);

                            return (
                                <motion.div
                                    key={idx}
                                    initial={false}
                                    animate={{ 
                                        x: xPos, 
                                        z: zPos, 
                                        rotateY: rotateY, 
                                        scale: scale, 
                                        opacity: opacity,
                                        zIndex: zIndex
                                    }}
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 200, 
                                        damping: 25,
                                        mass: 0.8
                                    }}
                                    className={`absolute w-[450px] aspect-[4/5] rounded-[2rem] flex flex-col items-center overflow-hidden transition-shadow duration-500 bg-[#0a0a0a] border border-white/10
                                        ${isActive ? 'shadow-[0_0_50px_rgba(0,242,255,0.3)] ring-2 ring-neon-cyan/50' : 'shadow-2xl'}
                                    `}
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    {/* Image Container */}
                                    <div className="w-full flex-1 relative bg-gradient-to-b from-gray-800 to-black overflow-hidden flex items-center justify-center p-8">
                                        <motion.img 
                                            src={img.src} 
                                            alt={img.label} 
                                            animate={{ scale: isActive ? 1.05 : 1 }}
                                            transition={{ duration: 3, ease: 'linear' }} // Slow idle zoom when active
                                            className="w-full h-full object-contain filter drop-shadow-2xl"
                                        />
                                        
                                        {!isActive && <div className="absolute inset-0 bg-black/50 z-10" />}
                                    </div>

                                    {/* Label Container */}
                                    <div className={`w-full p-6 bg-gradient-to-t from-black via-gray-950 to-transparent transition-colors duration-500 flex flex-col items-center justify-center
                                        ${isActive ? 'border-t border-neon-cyan/30' : ''}
                                    `}>
                                        <h3 className={`text-2xl font-black uppercase tracking-widest text-center transition-colors duration-500
                                            ${isActive ? 'text-neon-cyan drop-shadow-[0_0_10px_#00f2ff]' : 'text-gray-500'}
                                        `}>
                                            {img.label}
                                        </h3>
                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.p 
                                                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                                    animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                                                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                                    className="text-gray-400 text-sm font-mono tracking-wider text-center"
                                                >
                                                    {img.desc}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-10 flex items-center gap-4 text-gray-500 font-medium tracking-[0.3em] text-sm uppercase"
                >
                    Use Arrow Keys to Navigate
                </motion.div>
                
            </div>
        </Slide>
    );
}
