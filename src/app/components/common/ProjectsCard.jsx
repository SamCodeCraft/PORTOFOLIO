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
  className="flex justify-center items-center my-4"
>
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 100 }}
    className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full max-w-xs transform hover:scale-105 transition-transform duration-300"
  >
    <div className="relative h-48 w-full">
      <Image
        src={imageUrl}
        alt={title}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-base mb-2 line-clamp-3">
        {description}
      </p>
      <p className="text-gray-300 text-sm mt-2">Tech stack: {tech_stack}</p>
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

