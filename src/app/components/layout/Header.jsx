'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { MdHome, MdPerson, MdFolder, MdEmail, MdCode } from 'react-icons/md';

// Navigation items
const navItems = [
  { label: "Home", href: "/", icon: <MdHome /> },
  { label: "About", href: "/about", icon: <MdPerson /> },
  { label: "Projects", href: "/projects", icon: <MdFolder /> },
  { label: "Contact", href: "/contact", icon: <MdEmail /> },
  { label: "Interests", href: "/interests", icon: <MdFolder /> },
  { label: "Learning", href: "/learning", icon: <MdCode /> },
];

// NavLink Component
const NavLink = ({ href, icon, label }) => (
  <Link href={href} passHref>
    <motion.div
      whileHover={{ y: -2, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="flex flex-row items-center group cursor-pointer space-x-2"
    >
      <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-indigo-600 transition-colors duration-300">
        <span className="text-gray-300 group-hover:text-white text-xl">
          {icon}
        </span>
      </div>
      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
        {label}
      </span>
    </motion.div>
  </Link>
);

// HorizontalNavbar Component
export default function HorizontalNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-800 flex items-center justify-between px-6 py-4">
      
      {/* Left Section - Logo or Title */}
      <div className="text-white text-2xl font-bold">My Portfolio</div>

      {/* Navbar Items (Evenly Spaced) */}
      <nav className="flex items-center space-x-6">
        {navItems.map((item) => (
          <NavLink key={item.href} {...item} />
        ))}
      </nav>

    </header>
  );
}
