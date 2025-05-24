'use client';

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdHome, MdPerson, MdFolder, MdEmail, MdCode, MdMenu, MdClose } from 'react-icons/md';

const navItems = [
  { label: "Home", href: "/", icon: <MdHome /> },
  { label: "About", href: "/about", icon: <MdPerson /> },
  { label: "Projects", href: "/projects", icon: <MdFolder /> },
  { label: "Contact", href: "/contact", icon: <MdEmail /> },
  { label: "Interests", href: "/interests", icon: <MdFolder /> },
  { label: "Learning", href: "/learning", icon: <MdCode /> },
];

const NavLink = ({ href, icon, label, onClick }) => (
  <Link href={href} passHref legacyBehavior>
    <a
  onClick={onClick}
  className="nav-btn"
      style={{ minWidth: 110, justifyContent: "center" }}
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </a>
  </Link>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-lg border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-gradient">
            Samuel Siyajari
          </span>
        </Link>

        {/* Desktop Nav - aligned right */}
        <nav className="hidden md:flex items-center space-x-4 ml-auto">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl text-blue-400 hover:text-blue-500 transition"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
        >
          {menuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-gray-900/95 px-6 pb-4 flex flex-col space-y-3"
          >
            {navItems.map((item) => (
              <NavLink key={item.href} {...item} onClick={() => setMenuOpen(false)} />
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Gradient animation (optional, for logo) */}
      <style jsx>{`
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
    </header>
  );
}