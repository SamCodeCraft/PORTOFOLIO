'use client';
import Link from "next/link"; // Import Link from Next.js
import { motion } from "framer-motion";


// Custom icons using SVG paths (no changes needed)
// ... (HomeIcon, UserIcon, FolderIcon, EnvelopeIcon, CodeIcon)

const navItems = [
  { label: "Home", href: "/", icon: <HomeIcon /> },
  { label: "About", href: "/about", icon: <UserIcon /> },
  { label: "Projects", href: "/projects", icon: <FolderIcon /> },
  { label: "Contact", href: "/contact", icon: <EnvelopeIcon /> },
  { label: "Interests", href: "/interests", icon: <FolderIcon /> },
  { label: "Learning", href: "/learning", icon: <CodeIcon /> },
];

export default function HorizontalNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900/70 backdrop-blur-md shadow-lg"> {/* Added sticky positioning, blur, and transparency */}
      <div className="container mx-auto px-4 py-2 md:py-4 flex items-center justify-between"> {/* Added container, adjusted padding, and flex properties */}
        <div className="flex items-center gap-1 md:gap-3"> {/* Added flex and gap */}
        <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >

        <div className="text-white font-bold text-xl">LOGO</div> {/* Temporary Logo */}

        </motion.div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 md:space-x-10"> {/* Navigation hidden on mobile, spaced on desktop */}
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} passHref legacyBehavior> {/* Use next/link for routing */}
                <motion.a
                 whileHover={{ scale: 1.1 }}
                 transition={{ type: "spring", stiffness: 400, damping: 17 }}

                  className="text-gray-300 hover:text-white transition duration-300 relative group"
                >
                   <span className="text-white absolute left-0 -bottom-[0.35rem] h-[2px] w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>

                  {/* Optional Icon: */}
                  <span className="mr-1 hidden md:inline">{item.icon}</span> {/* Icon only shows on larger screens */}
                  {item.label}
                </motion.a>
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button (example, replace with your menu logic) */}
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
}

