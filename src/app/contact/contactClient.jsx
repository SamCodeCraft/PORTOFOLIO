"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdSend } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/movqavlo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      alert("Failed to send message");
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-gray-900 to-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-2xl text-center"
        >
          <p className="text-3xl font-bold text-indigo-300 mb-2">Thank you!</p>
          <p className="text-lg text-gray-200">Your message has been sent.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-gray-900 to-black flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 border border-white/10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-indigo-300 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-gradient">
          Get In Touch
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-indigo-200 font-semibold">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              className="w-full p-3 rounded-lg bg-gray-800/80 text-white border border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-indigo-200 font-semibold">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              className="w-full p-3 rounded-lg bg-gray-800/80 text-white border border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-indigo-200 font-semibold">Message</label>
            <textarea
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
              className="w-full p-3 rounded-lg bg-gray-800/80 text-white border border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              rows="5"
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 text-white font-bold py-3 rounded-xl shadow-lg hover:from-indigo-600 hover:to-yellow-500 transition-all duration-200"
          >
            <MdSend className="text-2xl" />
            Send Message
          </motion.button>
        </form>
        <div className="mt-10 text-center">
          <a
            href="mailto:siyajalis@gmail.com"
            className="text-indigo-300 hover:text-pink-400 underline transition"
          >
            siyajalis@gmail.com
          </a>
        </div>
      </motion.div>
      <style jsx global>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 4s ease-in-out infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Contact;