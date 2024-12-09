"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaFolder, FaEnvelope, FaCode } from "react-icons/fa";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/", icon: <FaHome /> },
  { label: "About", href: "/about", icon: <FaUser /> },
  { label: "Projects", href: "/projects", icon: <FaFolder /> },
  { label: "Contact", href: "/contact", icon: <FaEnvelope /> },
  { label: "Interests", href: "/interests", icon: <FaFolder /> },
  { label: "Learning", href: "/learning", icon: <FaFolder /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1 },
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-lg">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <SlideTabs />
        {isOpen && (
          <>
            {/* Overlay to darken the background */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsOpen(false)} // Close the menu when clicking outside
            ></div>

            <nav className="absolute top-16 left-0 w-full bg-gray-900 md:hidden shadow-lg z-50 rounded-lg">
              <motion.ul
                className="flex flex-col p-4 space-y-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {navItems.map((item, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <Link
                      href={item.href}
                      className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white transition p-3 rounded-lg duration-200 ease-in-out"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="mr-4 text-2xl text-gray-300">{item.icon}</span>
                      <span className="font-semibold text-lg">{item.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="hidden md:flex relative w-fit rounded-full p-1"
    >
      <Tab setPosition={setPosition} link="/">
        Home
      </Tab>
      <Tab setPosition={setPosition} link="/about">
        About
      </Tab>
      <Tab setPosition={setPosition} link="/projects">
        Projects
      </Tab>
      <Tab setPosition={setPosition} link="/contact">
        Contact
      </Tab>
      <Tab setPosition={setPosition} link="/playground">
        Playground
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, link }) => {
  const ref = useRef(null);

  return (
    <Link
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      href={link}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </Link>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-gray-100 md:h-12"
    />
  );
};
