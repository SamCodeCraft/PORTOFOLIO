"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/common/ProjectsCard";

const projects = [
  {
    title: "PesaBank: Banking App Website Project",
    description:
      "PesaBank is a full-stack banking application built with React and Flask, offering users a secure platform to manage their finances. Key features include account creation, fund transfers, transaction tracking, loan applications, and savings management. With two-step authentication and SQLAlchemy-powered database management, PesaBank ensures both security and performance. Its intuitive dashboard and responsive design provide a seamless user experience for personal finance management.",
    imageUrl: "/images/PesaBank.png",
    link: "https://github.com/SamCodeCraft/pesabank-react-flask",
    tech_stack: "React.js, Flask, SQLAlchemy, PostgreSQL",
  },
  {
    title: "MyDuka Inventory Management System Project",
    description:
      "This Flask API is built to support the MyDuka inventory management system, offering endpoints for managing stock, generating reports, and handling user roles. Admins, merchants, and staff can efficiently interact with the platform, utilizing their respective access levels to perform tasks such as adding products, tracking inventory, and generating sales reports.",
    imageUrl: "/images/MyDuka.png",
    link: "https://samcodecraft.github.io/MydukaApp-client/",
    tech_stack: "Flask, Python, PostgreSQL, SQLAlchemy",
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section className="min-h-[calc(100vh-8rem)] bg-gray-900 text-white py-20 relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-500 rounded-full filter blur-xl opacity-20 sm:animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-indigo-500 rounded-full filter blur-2xl opacity-20 sm:animate-pulse"></div>

      {/* Container for content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h1>

        {/* Grid for project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
