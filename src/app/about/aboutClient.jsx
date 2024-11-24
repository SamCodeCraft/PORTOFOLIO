// pages/about.js
"use client";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  //SiExpress,
  SiPython,
  SiDjango,
  SiFlask,
  //SiFirebase,
} from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 text-3xl" />,
  },
  { name: "React", icon: <SiReact className="text-blue-500 text-3xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-200 text-3xl" /> },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-500 text-3xl" />,
  },
//   {
//     name: "Express.js",
//     icon: <SiExpress className="text-gray-300 text-3xl" />,
//   },
  { name: "Python", icon: <SiPython className="text-blue-400 text-3xl" /> },
  { name: "Django", icon: <SiDjango className="text-green-400 text-3xl" /> },
  { name: "Flask", icon: <SiFlask className="text-gray-500 text-3xl" /> },
  //{ name: "Firebase", icon: <SiFirebase className="text-gray-500 text-3xl" /> },
];

export default function About() {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 ">
      <div className="container mx-auto px-8">
        {/* Header */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>

        {/* Bio Section */}
        <motion.div
          className="md:flex md:space-x-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg leading-relaxed">
                I am a dedicated full-stack developer with a strong passion for designing seamless user experiences 
                and developing reliable, scalable solutions. 
                My expertise lies in building interactive applications using modern technologies like React, 
                Next.js, and Tailwind CSS for the frontend, complemented by backend frameworks such as Node.js, 
                Express, Django, and Flask.
                I strive to merge aesthetics with functionality, creating applications that are efficient,
                secure, and capable of meeting the diverse needs of users across multiple platforms.
            </p>

            <p className="text-lg leading-relaxed mt-4">
                As a passionate coder who thrives on creativity, 
                I find my perfect flow state with a steaming cup of black coffee by my side. 
                When I'm not immersed in lines of code or diving into articles about emerging technologies, 
                you'll likely find me on the road – whether I'm behind the wheel or riding out, 
                I cherish exploring undiscovered destinations. 
                This mix of focused coding sessions, staying current with tech trends, 
                and adventurous journeys fuels my creative spirit and keeps me inspired.
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

        {/* Skills Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-8">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 py-4 rounded-lg text-center shadow-md hover:bg-gray-700 flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: "100" }}
              >
                {skill.icon}
                <span className="mt-2">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}