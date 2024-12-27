"use client";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({ title, description, imageUrl, link, tech_stack }) => {
  useEffect(() => {
    console.log("ProjectCard component mounted");
    return () => {
      console.log("ProjectCard component unmounted");
    };
  }, []);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center my-4 md:my-0" // Added margin for spacing
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-xs w-full transform hover:scale-105 transition-transform duration-300" // Improved hover effect
      >
        <div className="relative h-48 w-full"> {/* Added relative wrapper */}
        <Image
          src={imageUrl}
          alt={title}
          fill // Use fill to cover the container
          sizes="100vw" // Make image responsive
          style={{ objectFit: "cover" }}
        />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-gray-400 text-base mb-2 line-clamp-3"> {/* Added line clamp for multi-line descriptions */}
            {description}
          </p>
          <p className="text-gray-300 text-sm mt-2">Tech stack: {tech_stack}</p> {/* Added some top margin */}
        </div>
      </motion.div>
    </a>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tech_stack: PropTypes.string.isRequired,
};

export default ProjectCard;

