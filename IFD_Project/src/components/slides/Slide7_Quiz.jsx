import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Slide7_Quiz({ currentSubStep }) {
  const questions = [
    {
      q: "What is the main purpose of International Friendship Day (IFD)?",
      opts: ["A. To celebrate only one nationality", "B. To encourage unity among different cultures and backgrounds", "C. To promote tourism in ASEAN countries", "D. To celebrate national independence"],
      ans: 1
    },
    {
      q: "Which group of countries is highlighted in the IFD activity?",
      opts: ["A. European Union countries", "B. African countries", "C. ASEAN countries", "D. American countries"],
      ans: 2
    },
    {
      q: "What is the main focus of Cambodia's Khmer New Year?",
      opts: ["A. Celebrating harvest season", "B. Strengthening bonds among friends and family", "C. Honouring national heroes", "D. Preparing for school exams"],
      ans: 1
    },
    {
      q: "What is the national dish of Vietnam mentioned?",
      opts: ["A. Pho", "B. Larb", "C. Fish Amok", "D. Nasi Lemak"],
      ans: 0
    },
    {
      q: "What happens during the Lao Baci Ceremony?",
      opts: ["A. People exchange red envelopes", "B. People tie white strings on wrists and give blessings", "C. People perform dragon dances", "D. People cook only vegetarian food"],
      ans: 1
    }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-12">
      
      <AnimatePresence mode="wait">
        {currentSubStep === 0 && (
          <motion.div
            key="intro"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-7xl md:text-9xl font-display font-extrabold text-white mb-6">
              Quiz Time !!
            </h2>
            <p className="text-3xl font-sans text-ifd-gold font-light tracking-wide">
              Let's test your listening 🎧
            </p>
          </motion.div>
        )}

        {currentSubStep > 0 && currentSubStep <= questions.length && (
          <motion.div
            key={`q${currentSubStep}`}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-full max-w-5xl flex flex-col items-center"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl w-full shadow-2xl">
              <span className="text-ifd-coral font-bold tracking-widest text-sm uppercase mb-4 block">Question {currentSubStep} of 5</span>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-10 leading-tight">
                {questions[currentSubStep - 1].q}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[currentSubStep - 1].opts.map((opt, idx) => {
                  const isCorrect = idx === questions[currentSubStep - 1].ans;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-6 rounded-2xl border border-white/10 bg-white/5 cursor-pointer flex items-center transition-colors`}
                    >
                      <p className="text-xl font-sans text-white/90">{opt}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
