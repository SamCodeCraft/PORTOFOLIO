"use client";
import React from 'react';
import { motion } from 'framer-motion';

const interests = [
  "Full-Stack Development",
  "API Development",
  "Frontend User Experience (UX)",
  "Software Testing and Quality Assurance",
  "Team Collaboration and Project Leadership",
  "Problem-Solving with Technology",
  "Machine Learning and AI",
  "Cloud Computing and DevOps",
];

const InterestsClient = () => {
  return (
    <motion.section
      id="interests"
      className="min-h-[calc(100vh-8rem)] bg-gray-900 text-white py-20 relative overflow-hidden" // Added min height to ensure section takes up full viewport minus header/footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >

        <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-500 rounded-full filter blur-xl opacity-20 sm:animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-indigo-500 rounded-full filter blur-2xl opacity-20 sm:animate-pulse"></div>


      <div className="container mx-auto px-4 md:px-8 relative z-10"> {/* Added container for responsiveness */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Interests
        </motion.h2>
        <motion.p
          className="text-gray-300 text-center mb-12 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My passions lie in various areas of technology and software development. Here are some of the key interests that drive my work:
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <motion.button
              key={index}
              className="interest-button bg-gray-800 hover:bg-gray-700 rounded-lg py-3 px-4 text-base font-medium text-white transition duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {interest}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default InterestsClient;
