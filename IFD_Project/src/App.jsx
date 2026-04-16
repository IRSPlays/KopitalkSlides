import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import IFD_Scene3D from './components/IFD_Scene3D';
import Slide1_Title from './components/slides/Slide1_Title';
import Slide2_WhatIs from './components/slides/Slide2_WhatIs';
import Slide3_ASEAN from './components/slides/Slide3_ASEAN';
import Slide4_Cambodia from './components/slides/Slide4_Cambodia';
import Slide5_Vietnam from './components/slides/Slide5_Vietnam';
import Slide6_Laos from './components/slides/Slide6_Laos';
import Slide7_Quiz from './components/slides/Slide7_Quiz';
import Slide8_SkitWalkway from './components/slides/Slide8_SkitWalkway';
import Slide9_GuessLanguage from './components/slides/Slide9_GuessLanguage';
import Slide10_Conclusion from './components/slides/Slide10_Conclusion';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSubStep, setCurrentSubStep] = useState(0);
  
  const totalSlides = 10;
  const maxSubStepsPerSlide = [3, 4, 2, 3, 3, 3, 6, 3, 2, 3];

  const handleNext = () => {
    setCurrentSubStep((prevSub) => {
      const maxSub = maxSubStepsPerSlide[currentSlide];
      if (prevSub < maxSub - 1) return prevSub + 1;
      
      if (currentSlide < totalSlides - 1) {
        setCurrentSlide(currentSlide + 1);
        return 0;
      }
      return prevSub;
    });
  };

  const handlePrev = () => {
    setCurrentSubStep((prevSub) => {
      if (prevSub > 0) return prevSub - 1;
      
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
        return maxSubStepsPerSlide[currentSlide - 1] - 1;
      }
      return 0;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-ifd-navy text-white font-sans">
      
      {/* 3D Immersive Environment replaces the static background */}
      <IFD_Scene3D currentSlide={currentSlide} />

      {/* Main Content Area */}
      <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none">
        <div className="w-full h-full pointer-events-auto">
          <AnimatePresence mode="wait">
            {currentSlide === 0 && <Slide1_Title key="slide1" currentSubStep={currentSubStep} />}
            {currentSlide === 1 && <Slide2_WhatIs key="slide2" currentSubStep={currentSubStep} />}
            {currentSlide === 2 && <Slide3_ASEAN key="slide3" currentSubStep={currentSubStep} />}
            {currentSlide === 3 && <Slide4_Cambodia key="slide4" currentSubStep={currentSubStep} />}
            {currentSlide === 4 && <Slide5_Vietnam key="slide5" currentSubStep={currentSubStep} />}
            {currentSlide === 5 && <Slide6_Laos key="slide6" currentSubStep={currentSubStep} />}
            {currentSlide === 6 && <Slide7_Quiz key="slide7" currentSubStep={currentSubStep} />}
            {currentSlide === 7 && <Slide8_SkitWalkway key="slide8" currentSubStep={currentSubStep} />}
            {currentSlide === 8 && <Slide9_GuessLanguage key="slide9" currentSubStep={currentSubStep} />}
            {currentSlide === 9 && <Slide10_Conclusion key="slide10" currentSubStep={currentSubStep} />}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-20 flex items-end pb-8 justify-center pointer-events-auto group">
        <div className="flex items-center gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 active:scale-95 backdrop-blur-md transition-all shadow-lg"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="flex gap-3 bg-black/20 backdrop-blur-md px-6 py-4 rounded-full border border-white/5">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  currentSlide === i 
                    ? 'bg-ifd-gold w-10 shadow-[0_0_15px_rgba(255,209,102,0.8)]' 
                    : 'bg-white/30 hover:bg-white/50 cursor-pointer'
                }`}
                onClick={() => {
                  setCurrentSlide(i);
                  setCurrentSubStep(0);
                }}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 active:scale-95 backdrop-blur-md transition-all shadow-lg text-ifd-emerald"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute top-8 right-8 z-20 font-display text-xl font-light text-white/50 bg-black/10 backdrop-blur border border-white/10 px-4 py-2 rounded-full">
        {currentSlide + 1} <span className="opacity-50 mx-1">/</span> {totalSlides}
      </div>
    </div>
  );
}
