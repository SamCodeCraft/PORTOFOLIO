"use client";
import React from 'react';
import { motion } from 'framer-motion';

const videos = [
  {
    title: "React JS Crash Course",
    url: "https://www.youtube.com/embed/w7ejDZ8SWv8",
  },
  {
    title: "Deep Learning",
    url: "https://www.youtube.com/embed/wjZofJX0v4M",
  },
  // Add more video objects here
];


const LearningClient = () => {
  return (
    <motion.section
      id="learning"
      className="min-h-[calc(100vh-8rem)] bg-gray-900 text-white py-20 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
            <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-500 rounded-full filter blur-xl opacity-20 sm:animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-indigo-500 rounded-full filter blur-2xl opacity-20 sm:animate-pulse"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Learning Resources
        </motion.h2>
        <motion.p
          className="text-gray-300 text-center mb-12 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A curated collection of videos that I find interesting and informative in the world of modern frontend and backend web development.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="video-card bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <iframe
                width="100%"
                height="200" // Increased iframe height
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className="p-4"> {/* Added padding around title */}
                <h3 className="text-lg font-medium text-white">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};


export default LearningClient;
