'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { MdHome, MdPerson, MdFolder, MdEmail, MdCode } from 'react-icons/md';

const navItems = [
  { label: "Home", href: "/", icon: <MdHome /> },
  { label: "About", href: "/about", icon: <MdPerson /> },
  { label: "Projects", href: "/projects", icon: <MdFolder /> },
  { label: "Contact", href: "/contact", icon: <MdEmail /> },
  { label: "Interests", href: "/interests", icon: <MdFolder /> },
  { label: "Learning", href: "/learning", icon: <MdCode /> },
];

const NavLink = ({ href, icon, label }) => (
  <Link href={href}>
    <motion.div
      whileHover={{ y: -2, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="flex flex-col items-center group"
    >
      <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-indigo-600 transition-colors duration-300">
        <span className="text-gray-300 group-hover:text-white text-xl">
          {icon}
        </span>
      </div>
      <span className="mt-1 text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
        {label}
      </span>
    </motion.div>
  </Link>
);

export default function HorizontalNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            whileHover={{ rotate: 360, scale: 1.2 }} 
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-lg"
          >
            <div className="text-white font-bold text-xl">LOGO</div>
          </motion.div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-start space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-indigo-600 transition-colors duration-300"
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16m-7 6h7" 
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </header>
  );
}
