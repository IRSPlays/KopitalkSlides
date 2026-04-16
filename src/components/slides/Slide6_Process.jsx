import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide from '../Slide';
import { Lightbulb, PenTool, Printer, Smartphone } from 'lucide-react';

export default function Slide6_Process({ currentSubStep = 0 }) {
    const activeStep = currentSubStep;

    const steps = [
        { id: 0, icon: <Lightbulb size={24} />, title: "IDEATION" },
        { id: 1, icon: <PenTool size={24} />, title: "DESIGN" },
        { id: 2, icon: <Printer size={24} />, title: "HARDWARE" },
        { id: 3, icon: <Smartphone size={24} />, title: "SOFTWARE" }
    ];

    return (
        <Slide className="!p-0"> 
            <div className="w-full h-full flex flex-col items-center pt-8 relative z-10 px-8">
                
                <div className="flex w-full items-center justify-between mb-4">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-white to-warm-amber uppercase tracking-[0.2em]"
                    >
                        The Process
                    </motion.h2>

                    <div className="flex gap-4 items-center bg-black/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                        {steps.map((step) => {
                            const isActive = activeStep === step.id;
                            return (
                                <div
                                    key={step.id}
                                    className={`flex items-center gap-3 transition-all duration-500 px-3 py-2 rounded-full ${isActive ? 'bg-white/10 scale-110' : 'opacity-50'}`}
                                >
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500
                                        ${isActive 
                                            ? 'bg-neon-cyan text-black shadow-[0_0_20px_#00f2ff]' 
                                            : 'bg-black text-white border border-white/20'
                                        }`}
                                    >
                                        {step.icon}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="relative w-full flex-1 mb-8 bg-black/20 border border-white/5 rounded-[2rem] backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-2xl">
                    <AnimatePresence mode="wait">
                        
                        {/* IDEATION STAGE */}
                        {activeStep === 0 && (
                            <motion.div key="ideation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="w-full h-full flex flex-col">
                                <motion.div 
                                    animate={{ opacity: [0.02, 0.08, 0.02] }} 
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                >
                                    <h3 className="text-[15rem] font-black tracking-widest text-white">IDEATION</h3>
                                </motion.div>
                                <div className="flex-1 w-full h-full p-12 relative flex items-center justify-center gap-12">
                                    <motion.div 
                                        initial={{ y: 100, opacity: 0, rotate: -20 }} 
                                        animate={{ y: 0, opacity: 1, rotate: -4 }} 
                                        transition={{ type: 'spring', bounce: 0.5, delay: 0.2 }}
                                        whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
                                        className="w-1/3 aspect-square bg-gradient-to-br from-yellow-300/10 to-yellow-500/20 border-t-[12px] border-yellow-400 p-10 rounded-xl shadow-[0_0_50px_rgba(250,204,21,0.2)] flex flex-col justify-center backdrop-blur-md cursor-pointer"
                                    >
                                        <h4 className="text-3xl text-yellow-200 font-bold mb-4 uppercase">The Problem</h4>
                                        <p className="text-2xl text-yellow-50 leading-relaxed">Identifying the stark Generational Disconnect between completely different lifestyles.</p>
                                    </motion.div>
                                    
                                    <motion.div 
                                        initial={{ y: 100, opacity: 0, rotate: 20 }} 
                                        animate={{ y: 0, opacity: 1, rotate: 3, y: -48 }} 
                                        transition={{ type: 'spring', bounce: 0.5, delay: 0.5 }}
                                        whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
                                        className="w-1/3 aspect-square bg-gradient-to-br from-blue-300/10 to-blue-500/20 border-t-[12px] border-neon-cyan p-10 rounded-xl shadow-[0_0_50px_rgba(0,242,255,0.2)] flex flex-col justify-center backdrop-blur-md cursor-pointer"
                                    >
                                        <h4 className="text-3xl text-blue-200 font-bold mb-4 uppercase">The Spark</h4>
                                        <p className="text-2xl text-blue-50 leading-relaxed">How might we leverage Singapore Food Culture to build a reliable bridge?</p>
                                    </motion.div>
                                    
                                    <motion.div 
                                        initial={{ y: 100, opacity: 0, rotate: -30 }} 
                                        animate={{ y: 0, opacity: 1, rotate: -2 }} 
                                        transition={{ type: 'spring', bounce: 0.5, delay: 0.8 }}
                                        whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
                                        className="w-1/3 aspect-square bg-gradient-to-br from-purple-300/10 to-purple-500/20 border-t-[12px] border-purple-400 p-10 rounded-xl shadow-[0_0_50px_rgba(168,85,247,0.2)] flex flex-col justify-center backdrop-blur-md cursor-pointer"
                                    >
                                        <h4 className="text-3xl text-purple-200 font-bold mb-4 uppercase">The Medium</h4>
                                        <p className="text-2xl text-purple-50 leading-relaxed">Merging an interactive DIY physical board game with a deeply integrated smart digital app.</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}

                        {/* DESIGN STAGE */}
                        {activeStep === 1 && (
                            <motion.div key="design" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="w-full h-full flex flex-col items-center justify-center bg-black/40 overflow-hidden relative">
                                {/* Grid Background moving */}
                                <motion.div 
                                    animate={{ backgroundPosition: ['0px 0px', '100px 100px'] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                    className="absolute inset-0 bg-[linear-gradient(rgba(0,242,255,0.05)_2px,transparent_2px),linear-gradient(90deg,rgba(0,242,255,0.05)_2px,transparent_2px)] bg-[size:100px_100px] pointer-events-none" 
                                />
                                
                                <motion.div 
                                    initial={{ scale: 0.5, rotateX: 60, rotateZ: -45 }}
                                    animate={{ scale: 1, rotateX: [10, 20, 10], rotateY: [-10, 10, -10] }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-[80%] h-[80%] border-[6px] border-dashed border-neon-cyan/50 rounded-[3rem] flex flex-col items-center justify-center bg-neon-cyan/5 relative z-10 shadow-[inset_0_0_150px_rgba(0,242,255,0.15)] shadow-[0_0_100px_rgba(0,242,255,0.1)] perspective-[2000px]"
                                >
                                    <div className="absolute top-12 left-12 flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-red-500 animate-pulse" />
                                        <div className="w-6 h-6 rounded-full bg-yellow-500 animate-pulse delay-75" />
                                        <div className="w-6 h-6 rounded-full bg-green-500 animate-pulse delay-150" />
                                    </div>
                                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
                                        <PenTool className="w-40 h-40 text-neon-cyan mb-8" />
                                    </motion.div>
                                    <h3 className="text-6xl text-neon-cyan font-black tracking-[0.3em] uppercase mb-6 drop-shadow-[0_0_20px_#00f2ff]">Drop 3D Models Here</h3>
                                    <p className="text-2xl text-gray-300 font-light text-center max-w-3xl drop-shadow-md">This massive canvas is ready for your 3D CAD renders, wireframes, and map layouts.</p>
                                </motion.div>
                            </motion.div>
                        )}

                        {/* HARDWARE STAGE */}
                        {/* HARDWARE STAGE */}
                        {activeStep === 2 && (
                            <motion.div key="hardware" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="w-full h-full flex bg-[#0d0d0d] p-10 gap-10">
                                {/* Left Side: Professional Dashboard */}
                                <div className="w-[400px] h-full flex flex-col gap-6 z-20">
                                    <div className="flex items-center gap-4 mb-4">
                                        <Printer className="text-neon-cyan w-8 h-8" />
                                        <span className="text-2xl text-white font-black tracking-widest uppercase">PRINT CORE</span>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col gap-8 backdrop-blur-md shadow-2xl">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-400 font-mono text-sm tracking-widest">STATUS</span>
                                            <span className="text-neon-cyan font-bold tracking-widest bg-neon-cyan/10 px-3 py-1 rounded-full animate-pulse text-sm">PRINTING</span>
                                        </div>
                                        
                                        <div className="flex flex-col gap-2">
                                            <div className="flex justify-between text-sm font-mono">
                                                <span className="text-gray-400">EXTRUDER</span>
                                                <span className="text-white">215°C / 215°C</span>
                                            </div>
                                            <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-orange-600 to-red-500 w-[100%]" />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <div className="flex justify-between text-sm font-mono">
                                                <span className="text-gray-400">BED</span>
                                                <span className="text-white">60°C / 60°C</span>
                                            </div>
                                            <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-blue-600 to-neon-cyan w-[100%]" />
                                            </div>
                                        </div>

                                        <div className="h-px w-full bg-white/10 my-2" />

                                        <div className="flex flex-col gap-1">
                                            <span className="text-gray-500 font-mono text-xs">ACTIVE FILE</span>
                                            <span className="text-white font-bold tracking-wider">Causeway_Point_MRT_v3.gcode</span>
                                        </div>
                                        
                                        <div className="flex justify-between items-end">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-gray-500 font-mono text-xs">TIME REMAINING</span>
                                                <span className="text-3xl text-white font-light font-mono">04:20:15</span>
                                            </div>
                                            <div className="flex flex-col text-right gap-1">
                                                <span className="text-gray-500 font-mono text-xs">PROGRESS</span>
                                                <span className="text-3xl text-neon-cyan font-bold font-mono">78%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Right Side: Print Preview Area */}
                                <div className="flex-1 h-full relative rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/40 via-[#0a0a0a] to-[#050505] border border-white/5 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col items-center justify-center perspective-[2000px]">
                                    
                                    <div className="relative w-[500px] h-[500px] flex items-end justify-center z-10 mb-20">
                                        {/* Hologram outline */}
                                        <img 
                                            src="/images/proto3.png" 
                                            alt="Hologram" 
                                            className="absolute bottom-0 w-full h-full object-contain opacity-10 filter blur-[1px] sepia hue-rotate-[180deg]" 
                                        />

                                        {/* The flawlessly sliced true image */}
                                        <motion.img 
                                            src="/images/proto3.png" 
                                            alt="3D Print" 
                                            initial={{ clipPath: 'inset(100% 0 0 0)' }}
                                            animate={{ clipPath: 'inset(0% 0 0 0)' }}
                                            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                                            className="absolute bottom-0 w-full h-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]" 
                                        />

                                        {/* Synchronized scanline that maps precisely to the clip-path height */}
                                        <motion.div
                                            initial={{ y: "100%" }}
                                            animate={{ y: "0%" }}
                                            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                                            className="absolute bottom-0 w-full h-full pointer-events-none"
                                        >
                                            <div className="absolute top-0 left-[5%] w-[90%] h-px bg-neon-cyan shadow-[0_0_15px_#00f2ff]">
                                                {/* Nozzle dot */}
                                                <motion.div 
                                                    animate={{ x: [0, 450, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                                                    className="absolute top-[-2px] left-0 w-4 h-1.5 bg-white rounded-full shadow-[0_0_15px_white]"
                                                />
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Ultra-clean Bed Graphic */}
                                    <div className="absolute top-[55%] w-[800px] h-[800px] rounded-full transform rotate-x-[65deg] bg-white/5 border border-white/10 flex items-center justify-center pointer-events-none shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                                        <div className="absolute w-[95%] h-[95%] rounded-full border border-white/5 border-dashed" />
                                        <div className="absolute w-[80%] h-[80%] rounded-full bg-[linear-gradient(rgba(255,255,255,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.03)_2px,transparent_2px)] bg-[size:40px_40px]" />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* SOFTWARE STAGE */}
                        {activeStep === 3 && (
                            <motion.div key="software" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="w-full h-full bg-[#1e1e1e] flex flex-col font-mono text-xl relative">
                                <div className="h-16 bg-[#2d2d2d] flex items-center px-8 gap-4 border-b border-black shadow-lg">
                                    <div className="flex gap-3 mr-8">
                                        <div className="w-5 h-5 rounded-full bg-red-500" />
                                        <div className="w-5 h-5 rounded-full bg-yellow-500" />
                                        <div className="w-5 h-5 rounded-full bg-green-500" />
                                    </div>
                                    <div className="bg-[#1e1e1e] px-8 py-3 rounded-t-xl text-gray-300 font-bold border-t border-x border-gray-600/50">App.js</div>
                                </div>

                                <div className="flex-1 w-full h-full p-12 relative overflow-hidden flex">
                                    <div className="flex flex-col text-gray-600 pr-8 text-right select-none opacity-50 border-r border-gray-800">
                                        {[...Array(20)].map((_, i) => <span key={i} className="leading-[2.5] pr-4">{i + 1}</span>)}
                                    </div>
                                    
                                    <motion.div 
                                        initial="hidden"
                                        animate="visible"
                                        variants={{
                                            visible: { transition: { staggerChildren: 0.5 } }
                                        }}
                                        className="flex-1 pt-2 pl-8"
                                    >
                                        <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="text-[#569cd6] leading-[2.5]"><span className="text-[#c586c0]">import</span> <span className="text-[#9cdcfe]">React</span> <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">'react'</span>;</motion.p>
                                        <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="text-[#569cd6] leading-[2.5]"><span className="text-[#c586c0]">import</span> &#123; <span className="text-[#9cdcfe]">GameMasterAI</span> &#125; <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">'./core/ai'</span>;</motion.p>
                                        <p className="leading-[2.5]">&nbsp;</p>
                                        <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="text-[#569cd6] leading-[2.5]"><span className="text-[#c586c0]">export default function</span> <span className="text-[#dcdcaa]">SmartAssistant</span>() &#123;</motion.p>
                                        <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="pl-12 text-[#9cdcfe] leading-[2.5]">const [conversation, setConversation] <span className="text-[#d4d4d4]">=</span> <span className="text-[#dcdcaa]">useAudioAnalyzer</span>();</motion.p>
                                        <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="pl-12 text-[#9cdcfe] leading-[2.5]">const topics <span className="text-[#d4d4d4]">=</span> <span className="text-[#dcdcaa]">useTopicGenerator</span>(conversation);</motion.p>
                                        <p className="leading-[2.5]">&nbsp;</p>
                                        <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="pl-12 text-[#d4d4d4] leading-[2.5]">return (</motion.p>
                                        <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="pl-24 text-[#808080] leading-[2.5]">{`/* 📱 Insert App UI screenshot next to this */`}</motion.p>
                                        <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="pl-24 text-[#569cd6] leading-[2.5]">&lt;<span className="text-[#4ec9b0]">AppContainer</span>&gt;</motion.p>
                                        <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="pl-36 text-[#569cd6] leading-[2.5]">&lt;<span className="text-[#4ec9b0]">GameMasterAI</span> <span className="text-[#9cdcfe]">analysis</span>=<span className="text-[#569cd6]">&#123;</span>topics<span className="text-[#569cd6]">&#125;</span> /&gt;</motion.p>
                                        <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="pl-24 text-[#569cd6] leading-[2.5]">&lt;/<span className="text-[#4ec9b0]">AppContainer</span>&gt;</motion.p>
                                        <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="pl-12 text-[#d4d4d4] leading-[2.5]">)</motion.p>
                                        <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="text-[#569cd6] leading-[2.5]">&#125;</motion.p>
                                        <motion.div 
                                            animate={{ opacity: [1, 0, 1] }} 
                                            transition={{ duration: 1, repeat: Infinity }}
                                            className="w-4 h-8 bg-white/50 ml-[230px] -mt-8"
                                        />
                                    </motion.div>

                                    {/* App UI Visual Float */}
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.8, x: 100 }}
                                        animate={{ opacity: 1, scale: 1, x: 0 }}
                                        transition={{ delay: 2, duration: 1, type: "spring" }}
                                        className="absolute right-24 top-24 w-80 h-[500px] bg-gradient-to-br from-gray-900 to-black border-4 border-gray-700 rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col p-6"
                                    >
                                        <div className="w-1/2 h-2 bg-gray-800 rounded-full mx-auto mb-6" />
                                        <h4 className="text-neon-cyan font-bold text-center mb-4 tracking-widest text-sm uppercase">KopiTalk AI Assistant</h4>
                                        <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-4">
                                            <div className="bg-neon-cyan/20 p-3 rounded-lg text-xs leading-relaxed text-blue-200">Listening to conversation... "Hainanese Chicken Rice" detected.</div>
                                            <div className="bg-green-500/20 p-3 rounded-lg text-xs leading-relaxed text-green-200 ml-auto">Generating cultural trivia...</div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </Slide>
    );
}
