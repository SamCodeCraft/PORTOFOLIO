"use client";
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({ title, description, imageUrl, link, tech_stack }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: "100" }}
        className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
      >
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
          width={1000}
          height={1000}
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
          <p className="text-gray-300">Tech stack: {tech_stack}</p>
        </div>
      </motion.div>
    </a>
  );
};

// Define propTypes for validation
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tech_stack: PropTypes.string.isRequired,
};

export default ProjectCard;
