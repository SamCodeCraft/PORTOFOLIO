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
            { icon: <FaGithub />, link: "https://github.com/SamCodeCraft" },
            { icon: <FaLinkedin />, link: "https://linkedin.com/in/samuel-siyajari-970365167/" },
            { icon: <FaTwitter />, link: "https://x.com/EchoMystere" },
          ].map(({ icon, link }) => (
            <motion.a
              key={link}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 hover:text-indigo-400 transition-all duration-300"
              whileHover={{ scale: 1.2 }}
            >
              {icon}
            </motion.a>
          ))}
        </div>
        <p className="text-gray-400 text-center text-sm font-light tracking-wider">
          &copy; {new Date().getFullYear()} Samuel Siyajari. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;