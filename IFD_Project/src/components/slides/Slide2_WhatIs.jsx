import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Users, CalendarHeart } from 'lucide-react';

export default function Slide2_WhatIs({ currentSubStep }) {
  const cards = [
    {
      icon: Globe2,
      color: "text-ifd-blue",
      bgColor: "bg-ifd-blue/10",
      borderColor: "border-ifd-blue/20",
      title: "Celebrating Cultures",
      text: "Dedicated to celebrating the rich, diverse cultures of various nationalities across the globe."
    },
    {
      icon: Users,
      color: "text-ifd-coral",
      bgColor: "bg-ifd-coral/10",
      borderColor: "border-ifd-coral/20",
      title: "Uniting Humanity",
      text: "Encouraging people to come together and unite, looking past our differences to forge meaningful bonds."
    },
    {
      icon: CalendarHeart,
      color: "text-ifd-gold",
      bgColor: "bg-ifd-gold/10",
      borderColor: "border-ifd-gold/20",
      title: "Commemoration",
      text: "Actually commemorated on April 10, 2026, marking a special day of global unity."
    }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-4">
          What is <span className="text-ifd-emerald">IFD</span>?
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-ifd-emerald to-transparent mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {cards.map((card, index) => {
          const isVisible = currentSubStep > index;
          const Icon = card.icon;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              animate={{ 
                opacity: isVisible ? 1 : 0, 
                y: isVisible ? 0 : 50,
                rotateX: isVisible ? 0 : 45
              }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              style={{ transformOrigin: "bottom center" }}
              className={`p-8 rounded-3xl border ${card.borderColor} bg-white/5 backdrop-blur-xl relative overflow-hidden group`}
            >
              {/* Hover effect gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${card.bgColor}`} />
              
              <div className={`w-16 h-16 rounded-2xl ${card.bgColor} ${card.color} flex items-center justify-center mb-6`}>
                <Icon size={32} />
              </div>
              
              <h3 className="text-2xl font-display font-semibold mb-4 text-white">
                {card.title}
              </h3>
              
              <p className="text-lg font-sans text-blue-100/80 leading-relaxed font-light">
                {card.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
