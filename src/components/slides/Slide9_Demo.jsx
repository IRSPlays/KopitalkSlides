import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../Slide';

export default function Slide4_Demo() {
    return (
        <Slide>
            <div className="flex flex-col items-center w-full h-full justify-center">
                <h1 className="text-4xl font-bold text-white mb-8">LIVE DEMO: THE GAMIFIED LOOP</h1>

                <motion.div
                    initial={{ rotateX: 20, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="relative w-[960px] h-[540px] bg-gray-900 rounded-t-2xl border-8 border-gray-800 shadow-2xl overflow-hidden"
                >
                    {/* Laptop Camera */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full z-20 border border-gray-700"></div>

                    {/* Iframe */}
                    <iframe
                        src="https://sturdy-giggle-jvwx79v964r2p9vx-3000.app.github.dev"
                        className="w-full h-full bg-white"
                        title="KopiTalk Demo"
                    />

                    {/* Reflection Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10"></div>
                </motion.div>

                {/* Laptop Base */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="w-[1100px] h-6 bg-gray-800 rounded-b-xl shadow-xl relative"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-2 bg-gray-700 rounded-b-md"></div>
                </motion.div>
            </div>
        </Slide>
    );
}
