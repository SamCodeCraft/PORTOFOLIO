"use client";

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import StoreProvider from './StoreProvider';
import LenisWrapper from './components/layout/lennisWrapper';
import './globals.css';
import Navbar from './components/layout/Header';
import Footer from './components/layout/Footer';
import { ThemeProvider } from './ThemeContext'; // Import ThemeProvider

// Dynamically import Lottie only on client side
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
const animationDataPromise = import('./animations/animation.json');

const Layout = ({ children }) => {
  useEffect(() => {
    const handleResize = () => {
      console.log("Window resized!");
    };

    // Throttle resize handler
    let throttleTimeout = null;
    const throttledResize = () => {
      if (throttleTimeout === null) {
        throttleTimeout = setTimeout(() => {
          handleResize();
          throttleTimeout = null;
        }, 200);
      }
    };

    window.addEventListener("resize", throttledResize);

    return () => {
      window.removeEventListener("resize", throttledResize);
      console.log("Resize listener removed");
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Lottie Animation (optional if needed across all pages) */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Lottie
          autoplay
          loop
          animationData={require('./animations/animation.json')} // Static import fallback
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
      </div>

      {children}
    </div>
  );
};

function RootLayout({ children }) {
  const geistMonoLink = "https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100;900&display=swap";
  const geistSansLink = "https://fonts.googleapis.com/css2?family=Geist+Sans:wght@100;900&display=swap";

  const metadata = {
    title: "Samuel Siyajari | Portfolio",
    description: "Explore my projects and skills as a Full Stack Software Developer. Discover my journey in building innovative web applications.",
    keywords: "portfolio, full stack developer, software engineer, web development, projects, skills",
    author: "Samuel Siyajari",
    openGraph: {
      title: "Samuel Siyajari | Portfolio",
      description: "Explore my projects and skills as a Full Stack Software Developer.",
      url: "https://github.com/SamCodeCraft/PORTOFOLIO",
      type: "website",
    },
    link: [
      { rel: "stylesheet", href: geistMonoLink },
      { rel: "stylesheet", href: geistSansLink },
    ],
  };

  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
          <meta name="author" content={metadata.author} />
          <meta property="og:title" content={metadata.openGraph.title} />
          <meta property="og:description" content={metadata.openGraph.description} />
          <meta property="og:url" content={metadata.openGraph.url} />
          <meta property="og:type" content={metadata.openGraph.type} />
          {metadata.link.map((link, index) => (
            <link key={index} rel={link.rel} href={link.href} />
          ))}
        </head>
        <body className="antialiased">
          <ThemeProvider>
            <LenisWrapper>
              <Navbar />
              <Layout>{children}</Layout>
            </LenisWrapper>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
