import React from 'react';
import { motion } from 'framer-motion';

export default function Slide({ children, className = "" }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute inset-0 flex flex-col items-center justify-center p-12 ${className}`}
        >
            {children}
        </motion.div>
    );
}
