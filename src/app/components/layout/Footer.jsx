"use client";
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';  // Added FaTwitter
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <motion.div
        className="container mx-auto flex justify-center items-center space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Social Media Links */}
        <a
          href="https://github.com/SamCodeCraft"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
          aria-label="Visit my GitHub profile"
        >
          <FaGithub className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/samuel-siyajari-970365167/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
          aria-label="Visit my LinkedIn profile"
        >
          <FaLinkedin className="w-8 h-8" />
        </a>
        
        <a
          href="https://x.com/EchoMystere"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
          aria-label="Visit my Twitter profile"
        >
          <FaTwitter className="w-8 h-8" />
        </a>
      </motion.div>

      {/* Copyright Section */}
      <div className="text-center mt-4 border-t border-gray-700 pt-4">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Samuel Siyajari. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
