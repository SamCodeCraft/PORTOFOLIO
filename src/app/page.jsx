// Home.jsx

'use client';

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import Link from "next/link";
import { motion } from "framer-motion";
import EncButton from "./components/common/EncryptButton";
import Head from 'next/head';
import { useTheme } from './context/ThemeContext'; // Import theme context

export default function Home() {
  const { isDarkMode, toggleTheme } = useTheme(); // Use the theme context
  const backgroundRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    let renderer, scene, camera, particles;

    const initScene = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      backgroundRef.current.appendChild(renderer.domElement);

      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 2000;
      const posArray = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
      }

      particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

      const particlesMaterial = new THREE.PointsMaterial({ size: 0.02, color: 0x888888 });

      particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);

      const animate = () => {
        requestAnimationFrame(animate);
        particles.rotation.y += 0.001;
        renderer.render(scene, camera);
      };
      animate();
    };

    initScene();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (renderer && camera && (width !== renderer.domElement.width || height !== renderer.domElement.height)) {
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (backgroundRef.current && renderer) {
        backgroundRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>Samuel Siyajari | Full Stack Developer</title>
        {/* Add other meta tags as you already did */}
      </Head>

      <section className={`relative min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'} text-white flex items-center py-16 md:py-0`}>
        {/* 3D Background */}
        <div ref={backgroundRef} className="absolute inset-0 z-0" />

        <div className="container mx-auto px-8 z-10">
          <div className="flex flex-col text-center">
            {/* Toggle Button */}
            <button 
              onClick={toggleTheme} 
              className="absolute top-5 right-5 p-2 bg-gray-800 text-white rounded-full"
            >
              {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
            
            {/* Hero Section */}
            <motion.h1
              className="text-3xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hi, I&apos;m <span className="text-indigo-500">Samuel Siyajari</span>
            </motion.h1>
            
            {/* Content */}
            {/* Rest of the content... */}
          </div>
        </div>
      </section>
    </>
  );
}
