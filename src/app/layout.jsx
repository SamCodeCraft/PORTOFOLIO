"use client";
import React, { useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import StoreProvider from './StoreProvider';
import LenisWrapper from './components/layout/lennisWrapper';
import './globals.css';
import Navbar from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Player } from 'lottie-react';
import animationData from './animations/animation.json'; // Make sure this path is correct

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

  return (
    <div className="relative min-h-screen">
      {/* Lottie Animation */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Player
          autoplay
          loop
          src={animationData} // Add your Lottie animation file here
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1, // Ensure the animation is behind other content
          }}
        />
      </div>

      {children} {/* Render the children here */}
    </div>
  );
};

// The layout is responsible for rendering the overall structure
function RootLayout({ children }) {
  // Metadata moved to RootLayout
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
      url: "https://github.com/SamCodeCraft/PORTOFOLIO", // Replace with your actual URL
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
          {/* Metadata will be rendered here */}
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
          <LenisWrapper>
            <Navbar /> {/* The font will be applied to elements within Navbar */}

            {/* Main Layout Component */}
            <Layout>{children}</Layout>

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

export default RootLayout;
