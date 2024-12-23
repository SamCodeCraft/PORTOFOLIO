"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    const response = await fetch('https://formspree.io/f/movqavlo', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSubmitted(true);
      setError("");
      // Clear the form data if needed
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      const errorData = await response.json();
      setError(errorData.errors[0].message || "Something went wrong");
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-500 rounded-full filter blur-xl opacity-20 sm:animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-indigo-500 rounded-full filter blur-2xl opacity-20 sm:animate-pulse"></div>

      <div className="container mx-auto px-2 sm:px-8 relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h1>

        {isSubmitted ? (
          <motion.div
            className="text-center text-2xl mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Many thanks for your note - I&apos;ll be in touch soon.
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-gray-800 rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="mb-6 relative">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <FiUser className="absolute left-3 top-10 text-gray-400" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full p-3 pl-10 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-6 relative">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <FiMail className="absolute left-3 top-10 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full p-3 pl-10 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-6 relative">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <FiMessageSquare className="absolute left-3 top-10 text-gray-400" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
                rows="5"
                className="w-full p-3 pl-10 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
              transition={{type:"spring", stiffness:"100"}}
            >
              Send Message
            </motion.button>
          </motion.form>
        )}

        {/* Social Media Links */}
        <div className="text-center mt-12">
          <p>Or connect with me on:</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/samuel-siyajari-970365167/" className="text-indigo-500 hover:text-indigo-400 flex items-center space-x-2">
              <FaLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/SamCodeCraft" className="text-indigo-500 hover:text-indigo-400 flex items-center space-x-2">
              <FaGithub className="text-xl" />
              <span>GitHub</span>
            </a>
            <a href="mailto:siyajalis@gmail.com" className="text-indigo-500 hover:text-indigo-400 flex items-center space-x-2">
              <FiMail className="text-xl" />
              <span>Gmail</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}