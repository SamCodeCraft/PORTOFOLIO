'use client';

import React from "react";

// Named export for InteractiveComponent
export function InteractiveComponent() {
    return (
        <button onClick={() => alert('Button clicked!')}>
            Click me
        </button>
    );
}

// Custom icons using SVG paths
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);

const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const navItems = [
  { label: "Home", href: "/", icon: <HomeIcon /> },
  { label: "About", href: "/about", icon: <UserIcon /> },
  { label: "Projects", href: "/projects", icon: <FolderIcon /> },
  { label: "Contact", href: "/contact", icon: <EnvelopeIcon /> },
  { label: "Interests", href: "/interests", icon: <FolderIcon /> },
  { label: "Learning", href: "/learning", icon: <CodeIcon /> },
];

// Default export for HorizontalNavbar
export default function HorizontalNavbar() {
  const handleNavigation = (href) => {
    // Simple client-side navigation
    window.location.href = href;
  };

  return (
    <header className="w-full bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-center items-center space-x-4">
          {navItems.map((item, index) => (
            <button 
              key={index} 
              onClick={() => handleNavigation(item.href)}
              className="flex items-center justify-center 
                         bg-blue-500 text-white 
                         px-4 py-2 rounded-lg 
                         hover:bg-blue-400 
                         transition duration-300 
                         ease-in-out 
                         transform hover:scale-105 
                         min-w-[120px]"
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
