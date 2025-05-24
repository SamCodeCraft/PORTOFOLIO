"use client";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import React from 'react';
import dynamic from 'next/dynamic';
import StoreProvider from './StoreProvider';
import LenisWrapper from './components/layout/lennisWrapper';
import './globals.css';
import Navbar from './components/layout/Header';
import Footer from './components/layout/Footer';
import { ThemeProvider } from './ThemeContext';

// Dynamically import Lottie only on client side
 const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const LottieBackground = () => (
  <div className="absolute top-0 left-0 w-full h-full z-0">
    <Lottie
      autoplay
      loop
      animationData={require('./animations/animation.json')}
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
); 

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <head>
          <title>Samuel Siyajari | Portfolio</title>
          <meta name="description" content="Explore my projects and skills as a Full Stack Software Developer. Discover my journey in building innovative web applications." />
          <meta name="keywords" content="portfolio, full stack developer, software engineer, web development, projects, skills" />
          <meta name="author" content="Samuel Siyajari" />
          <meta property="og:title" content="Samuel Siyajari | Portfolio" />
          <meta property="og:description" content="Explore my projects and skills as a Full Stack Software Developer." />
          <meta property="og:url" content="https://github.com/SamCodeCraft/PORTOFOLIO" />
          <meta property="og:type" content="website" />
          
        </head>
        <body className="antialiased">
          <ThemeProvider>
            <LenisWrapper>
              <Navbar />
              <div className="relative min-h-screen">
                <LottieBackground />
                {children}
              </div>
            </LenisWrapper>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}