"use client";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiFlask,
  SiFirebase,
} from "react-icons/si";
import { FaServer } from "react-icons/fa";

const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 text-4xl" />,
    gradient: "from-yellow-500 to-yellow-700",
  },
  { 
    name: "React", 
    icon: <SiReact className="text-blue-500 text-4xl" />,
    gradient: "from-blue-500 to-blue-700",
  },
  { 
    name: "Next.js", 
    icon: <SiNextdotjs className="text-gray-200 text-4xl" />,
    gradient: "from-gray-200 to-gray-400",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-500 text-4xl" />,
    gradient: "from-green-500 to-green-700",
  },
  {
    name: "Express.js",
    icon: <FaServer className="text-gray-300 text-4xl" />,
    gradient: "from-gray-300 to-gray-500",
  },
  { 
    name: "Python", 
    icon: <SiPython className="text-blue-400 text-4xl" />,
    gradient: "from-blue-400 to-blue-600",
  },
  { 
    name: "Django", 
    icon: <SiDjango className="text-green-400 text-4xl" />,
    gradient: "from-green-400 to-green-600",
  },
  { 
    name: "Flask", 
    icon: <SiFlask className="text-gray-500 text-4xl" />,
    gradient: "from-gray-500 to-gray-700",
  },
  { 
    name: "Firebase", 
    icon: <SiFirebase className="text-yellow-500 text-4xl" />,
    gradient: "from-yellow-500 to-yellow-700",
  },
];

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-8">
        {/* Header with Text Shadow and Tracking */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-12 tracking-tight 
                     text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 
                     drop-shadow-[0_4px_3px_rgba(255,255,255,0.1)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>

        {/* Bio Section with Enhanced Layout */}
        <motion.div
          className="md:flex md:space-x-12 bg-gray-800/50 rounded-xl p-8 shadow-2xl backdrop-blur-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:w-2/3 mb-8 md:mb-0">
            <p className="text-lg leading-relaxed text-gray-300 first-letter:text-5xl first-letter:text-white first-letter:mr-3 first-letter:float-left">
            I am a dedicated full-stack developer with a strong passion for
              designing seamless user experiences and developing reliable,
              scalable solutions. My expertise lies in building interactive
              applications using modern technologies like React, Next.js, and
              Tailwind CSS for the frontend, complemented by backend frameworks
              such as Node.js, Express, Django, and Flask. I strive to merge
              aesthetics with functionality, creating applications that are
              efficient, secure, and capable of meeting the diverse needs of
              users across multiple platforms.
            
              As a passionate coder who thrives on creativity, I find my perfect
              flow state with a steaming cup of black coffee by my side. When
              I'm not immersed in lines of code or diving into articles about
              emerging technologies, you'll likely find me on the road – whether
              I'm behind the wheel or riding out, I cherish exploring
              undiscovered destinations. This mix of focused coding sessions,
              staying current with tech trends, and adventurous journeys fuels
              my creative spirit and keeps me inspired.
              </p>
          </div>

         {/* Profile Image */}
         <div className="md:w-1/2 flex justify-center md:justify-end">
            <motion.img
              src="/images/profile.jpg"
              alt="Profile Picture"
              className="w-48 h-48 rounded-full object-cover shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </motion.div>

        {/* Skills Section with Enhanced Grid */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-8 
                         bg-gradient-to-r from-white to-gray-500 
                         bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${skill.gradient} 
                             py-6 rounded-xl text-center shadow-xl 
                             transform transition-all duration-300 
                             hover:scale-105 hover:shadow-2xl 
                             flex flex-col items-center 
                             border border-white/10`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {skill.icon}
                <span className="mt-3 text-sm font-medium tracking-wide">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}