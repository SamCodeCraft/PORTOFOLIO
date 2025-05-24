'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiFlask,
  SiFirebase,
} from 'react-icons/si';
import { FaServer } from 'react-icons/fa';

// Skills data
const skills = [
  {
    name: 'JavaScript',
    icon: <SiJavascript className="text-yellow-400 text-4xl" />,
    gradient: 'from-yellow-500 to-yellow-700',
    shadowColor: 'shadow-yellow-500/50',
  },
  { 
    name: 'React', 
    icon: <SiReact className="text-blue-500 text-4xl" />,
    gradient: 'from-blue-500 to-blue-700',
    shadowColor: 'shadow-blue-500/50',
  },
  { 
    name: 'Next.js', 
    icon: <SiNextdotjs className="text-gray-200 text-4xl" />,
    gradient: 'from-gray-200 to-gray-400',
    shadowColor: 'shadow-gray-400/50',
  },
  {
    name: 'Node.js',
    icon: <SiNodedotjs className="text-green-500 text-4xl" />,
    gradient: 'from-green-500 to-green-700',
    shadowColor: 'shadow-green-500/50',
  },
  {
    name: 'Express.js',
    icon: <FaServer className="text-gray-300 text-4xl" />,
    gradient: 'from-gray-300 to-gray-500',
    shadowColor: 'shadow-gray-400/50',
  },
  { 
    name: 'Python', 
    icon: <SiPython className="text-blue-400 text-4xl" />,
    gradient: 'from-blue-400 to-blue-600',
    shadowColor: 'shadow-blue-400/50',
  },
  { 
    name: 'Django', 
    icon: <SiDjango className="text-green-400 text-4xl" />,
    gradient: 'from-green-400 to-green-600',
    shadowColor: 'shadow-green-400/50',
  },
  { 
    name: 'Flask', 
    icon: <SiFlask className="text-gray-500 text-4xl" />,
    gradient: 'from-gray-500 to-gray-700',
    shadowColor: 'shadow-gray-500/50',
  },
  { 
    name: 'Firebase', 
    icon: <SiFirebase className="text-yellow-500 text-4xl" />,
    gradient: 'from-yellow-500 to-yellow-700',
    shadowColor: 'shadow-yellow-500/50',
  },
];

// Skill Button with staggered animation
const SkillButton = ({ skill, index }) => (
  <motion.button
    className={`
      relative group w-full
      overflow-hidden rounded-xl
      transition-all duration-300
      ${skill.shadowColor} shadow-lg
      hover:shadow-xl hover:-translate-y-1
    `}
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.1 + index * 0.07,
      duration: 0.5,
      type: 'spring',
      stiffness: 80,
    }}
  >
    {/* Gradient background */}
    <div className={`
      absolute inset-0 bg-gradient-to-br ${skill.gradient}
      opacity-90 group-hover:opacity-100
      transition-opacity duration-300
    `} />
    {/* Inner glow */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-white blur-xl" />
    {/* Content */}
    <div className="relative flex items-center justify-center space-x-3 py-4 px-6">
      <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
        {skill.icon}
      </div>
      <span className="text-white font-medium tracking-wide text-sm md:text-base">
        {skill.name}
      </span>
    </div>
    {/* Bottom border glow */}
    <div className={`
      absolute bottom-0 left-0 right-0 h-1
      bg-gradient-to-r ${skill.gradient}
      opacity-50 group-hover:opacity-100
      transition-opacity duration-300
    `} />
  </motion.button>
);

export default function About() {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-gray-900 to-black animate-gradient-move opacity-90" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-300 to-gray-400 drop-shadow-[0_4px_3px_rgba(255,255,255,0.1)]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About Me
        </motion.h1>

        {/* Bio Section */}
        <motion.div
          className="md:flex md:space-x-12 bg-gray-800/40 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm border border-white/10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="md:w-2/3 mb-8 md:mb-0">
            <p className="text-lg leading-relaxed text-gray-300 first-letter:text-5xl first-letter:text-white first-letter:mr-3 first-letter:float-left first-letter:font-bold">
              I am a dedicated full-stack developer with a strong passion for
              designing seamless user experiences and developing reliable,
              scalable solutions. My expertise lies in building interactive
              applications using modern technologies like React, Next.js, and
              Tailwind CSS for the frontend, complemented by backend frameworks
              such as Node.js, Express, Django, and Flask.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mt-6">
              As a passionate coder who thrives on creativity, I find my perfect
              flow state with a steaming cup of black coffee by my side. When
              I&apos;m not immersed in lines of code or diving into articles about
              emerging technologies, you&apos;ll likely find me on the road – whether
              I&apos;m behind the wheel or riding out, I cherish exploring
              undiscovered destinations.
            </p>
          </div>
          {/* Profile Image with animated ring */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-56 h-56 rounded-full bg-gradient-to-tr from-indigo-400 via-pink-400 to-yellow-400 blur-2xl opacity-60 animate-spin-slow"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                />
              </div>
              <img
                src="/images/profile.jpg"
                alt="Profile Picture"
                className="relative w-48 h-48 rounded-full object-cover border-4 border-white/10 shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-12 bg-gradient-to-r from-white via-indigo-200 to-gray-500 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillButton key={index} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
      {/* Custom animation for background gradient */}
      <style jsx global>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 12s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </section>
  );
}