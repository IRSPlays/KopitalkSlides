import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide from '../Slide';

export default function Slide7_MakingOf({ currentSubStep = 0 }) {
    // 0: Laptop View Idle
    // 1: Zoomed in Fullscreen Video
    // 2: Zoomed out Laptop View 
    const isZoomedIn = currentSubStep === 1;
    const videoRef = useRef(null);

    // Give it a professional MacBook look
    return (
        <Slide>
            <div className={`w-full h-full flex flex-col items-center justify-center relative ${isZoomedIn ? 'z-50' : 'z-10'}`}>
                
                {/* Title fades out when zooming in */}
                <motion.h2 
                    animate={{ opacity: isZoomedIn ? 0 : 1, y: isZoomedIn ? -50 : 0 }}
                    className="absolute top-4 text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 uppercase tracking-[0.3em] z-30"
                >
                    Pitch Video
                </motion.h2>

                <div className="relative flex flex-col items-center justify-center mt-16 w-full max-w-5xl">
                    
                    {/* The Video Container that layout-animates between Laptop Chassis and Fullscreen */}
                    <motion.div
                        layout
                        transition={{ type: "spring", stiffness: 80, damping: 20 }}
                        className={
                            isZoomedIn 
                            ? "fixed inset-0 z-[100] w-full h-full bg-black flex items-center justify-center"
                            : "relative w-[800px] aspect-video border-[16px] border-[#121212] bg-black rounded-t-2xl shadow-[inset_0_0_50px_rgba(0,0,0,1)] z-20 overflow-hidden"
                        }
                    >
                        {/* 
                            We use the video file path provided.
                            The browser correctly encodes spaces in the URL automatically when using standard string paths in React.
                        */}
                        <video 
                            ref={videoRef}
                            src="/Challenge Y (ADM SECONDARY DESIGN FORCE) Pitch Video.mp4" 
                            controls={isZoomedIn}
                            autoPlay 
                            loop
                            muted={!isZoomedIn} // Mute it when in laptop mode, play sound only when fullscreen
                            className="w-full h-full object-contain"
                        />
                    </motion.div>

                    {/* Laptop Bottom Base - Hidden & slides down when video zooms out of it */}
                    <motion.div 
                        animate={{ 
                            opacity: isZoomedIn ? 0 : 1, 
                            y: isZoomedIn ? 100 : 0,
                            scale: isZoomedIn ? 0.9 : 1
                        }}
                        transition={{ type: "spring", stiffness: 80, damping: 20 }}
                        className="w-[950px] h-5 bg-gradient-to-b from-[#b3b3b3] to-[#808080] rounded-b-3xl relative z-10 shadow-[0_40px_50px_rgba(0,0,0,0.8)] border-t border-white/20"
                    >
                        {/* Trackpad thumb notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-2 bg-[#666] rounded-b-xl shadow-[inset_0_2px_5px_rgba(0,0,0,0.5)]" />
                    </motion.div>

                </div>
            </div>
        </Slide>
    );
}
