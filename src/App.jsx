import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Scene3D from './components/Scene3D';
import Slide1_Title from './components/slides/Slide1_Title';
import Slide2_WhatIs from './components/slides/Slide2_WhatIs';
import Slide3_Problem from './components/slides/Slide3_Problem';
import Slide4_Solution from './components/slides/Slide4_Solution';
import Slide5_Unique from './components/slides/Slide5_Unique';
import Slide6_Process from './components/slides/Slide6_Process';
import Slide7_MakingOf from './components/slides/Slide7_MakingOf';
import Slide8_Prototype from './components/slides/Slide8_Prototype';
import Slide9_Demo from './components/slides/Slide9_Demo';
import Slide10_Prizes from './components/slides/Slide10_Prizes';
import Slide10_Summary from './components/slides/Slide10_Summary';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSubStep, setCurrentSubStep] = useState(0);
  
  const totalSlides = 11;
  const maxSubStepsPerSlide = [1, 1, 2, 3, 1, 4, 3, 5, 1, 5, 1];

  const handleNext = () => {
    setCurrentSubStep((prevSub) => {
      const maxSub = maxSubStepsPerSlide[currentSlide];
      if (prevSub < maxSub - 1) return prevSub + 1;
      
      if (currentSlide < totalSlides - 1) {
        setCurrentSlide(currentSlide + 1);
        return 0; // Reset sub-step on new slide
      }
      return prevSub;
    });
  };

  const handlePrev = () => {
    setCurrentSubStep((prevSub) => {
      if (prevSub > 0) return prevSub - 1;
      
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
        return maxSubStepsPerSlide[currentSlide - 1] - 1; // Jump to end of previous slide
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
    <div className="relative w-full h-screen overflow-hidden bg-void-black text-white">
      
      {/* Background Media Preloader - Eliminates buffering by silently caching the heavy video before we reach its slide */}
      <video 
        preload="auto" 
        src="/Challenge Y (ADM SECONDARY DESIGN FORCE) Pitch Video.mp4" 
        style={{ display: 'none' }} 
      />

      {/* 3D Universe */}
      <Scene3D currentSlide={currentSlide} />

      {/* Main Content Area */}
      <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none">
        {/* Enable pointer events for interactive children */}
        <div className="w-full h-full pointer-events-auto">
          <AnimatePresence mode="wait">
            {currentSlide === 0 && <Slide1_Title key="slide1" currentSubStep={currentSubStep} />}
            {currentSlide === 1 && <Slide2_WhatIs key="slide2" currentSubStep={currentSubStep} />}
            {currentSlide === 2 && <Slide3_Problem key="slide3" currentSubStep={currentSubStep} />}
            {currentSlide === 3 && <Slide4_Solution key="slide4" currentSubStep={currentSubStep} />}
            {currentSlide === 4 && <Slide5_Unique key="slide5" currentSubStep={currentSubStep} />}
            {currentSlide === 5 && <Slide6_Process key="slide6" currentSubStep={currentSubStep} />}
            {currentSlide === 6 && <Slide7_MakingOf key="slide7" currentSubStep={currentSubStep} />}
            {currentSlide === 7 && <Slide8_Prototype key="slide8" currentSubStep={currentSubStep} />}
            {currentSlide === 8 && <Slide9_Demo key="slide9" currentSubStep={currentSubStep} />}
            {currentSlide === 9 && <Slide10_Prizes key="slide10_prizes" currentSubStep={currentSubStep} />}
            {currentSlide === 10 && <Slide10_Summary key="slide11_summary" currentSubStep={currentSubStep} />}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls - Hidden until hover near bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-20 flex items-end pb-8 justify-center pointer-events-auto group">
        <div className="flex items-center gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === i ? 'bg-neon-cyan w-8' : 'bg-white/30'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute top-8 right-8 z-20 font-display text-xl opacity-50">
        0{currentSlide + 1} / 0{totalSlides}
      </div>
    </div>
  );
}
