"use client";
import React, { useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({ title, description, imageUrl, link, tech_stack }) => {
  useEffect(() => {
    // Placeholder for any side effects
    console.log("ProjectCard component mounted");

    return () => {
      // Cleanup function to manage any listeners or side effects
      console.log("ProjectCard component unmounted");
    };
  }, []);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-xs w-full mx-4"
      >
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
          width={400}
          height={200}
        />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-gray-400 mb-2">{description}</p>
          <p className="text-gray-300 text-sm">Tech stack: {tech_stack}</p>
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
