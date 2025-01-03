"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 mt-auto">
      <motion.div
        className="container mx-auto px-4 flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Social Media Links */}
        <div className="flex justify-center items-center space-x-6 md:space-x-8 mb-6">
          {[
            {
              icon: <FaGithub className="w-6 h-6 md:w-8 md:h-8" />,
              link: "https://github.com/SamCodeCraft",
              label: "GitHub",
            },
            {
              icon: <FaLinkedin className="w-6 h-6 md:w-8 md:h-8" />,
              link: "https://www.linkedin.com/in/samuel-siyajari-970365167/",
              label: "LinkedIn",
            },
            {
              icon: <FaTwitter className="w-6 h-6 md:w-8 md:h-8" />,
              link: "https://x.com/EchoMystere",
              label: "Twitter (X)",
            },
          ].map(({ icon, link, label }) => (
            <motion.a
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 hover:text-indigo-400 transition-all duration-300"
              aria-label={`Visit my ${label} profile`}
              whileHover={{ scale: 1.2 }}
            >
              {icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="w-full max-w-2xl mx-auto border-t border-gray-700 pt-6">
          <motion.p
            className="text-gray-400 text-center text-sm font-light tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            &copy; {new Date().getFullYear()} Samuel Siyajari. All rights reserved.
          </motion.p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
