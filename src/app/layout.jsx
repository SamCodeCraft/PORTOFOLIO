import React from 'react';
import { useEffect } from "react";
import PropTypes from 'prop-types'; // Import PropTypes for validation
import StoreProvider from './StoreProvider';
import LenisWrapper from './components/layout/lennisWrapper';
import './globals.css';
import Navbar from './components/layout/Header';
import Footer from './components/layout/Footer';

const Layout = ({ children }) => {
  useEffect(() => {
    const handleResize = () => {
      console.log("Window resized!");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup
      window.removeEventListener("resize", handleResize);
      console.log("Resize listener removed");
    };
  }, []);

  return <div>{children}</div>;
};



// Define the fonts to use from Google Fonts CDN
const geistMonoLink = "https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100;900&display=swap";
const geistSansLink = "https://fonts.googleapis.com/css2?family=Geist+Sans:wght@100;900&display=swap";

// Use the Metadata API for title, description, and links
export const metadata = {
  title: "Samuel Siyajari | Portfolio",
  description: "Explore my projects and skills as a Full Stack Software Developer. Discover my journey in building innovative web applications.",
  keywords: "portfolio, full stack developer, software engineer, web development, projects, skills",
  author: "Samuel Siyajari",
  openGraph: {
    title: "Samuel Siyajari | Portfolio",
    description: "Explore my projects and skills as a Full Stack Software Developer.",
    url: "https://github.com/SamCodeCraft/PORTOFOLIO", // Replace with your actual URL
    type: "website",
  },
  link: [
    { rel: "stylesheet", href: geistMonoLink },
    { rel: "stylesheet", href: geistSansLink },
  ],
};

function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className="antialiased">
          <LenisWrapper>
            <Navbar /> {/* The font will be applied to elements within Navbar */}
            {children} {/*  ...and to any children rendered here */}
          </LenisWrapper>

          <Footer /> {/* Also applied here */}
        </body>
      </html>
    </StoreProvider>
  );
}

// Adding PropTypes validation for 'children'
RootLayout.propTypes = {
  children: PropTypes.node.isRequired, // 'children' should be a React node
};

export default Layout;