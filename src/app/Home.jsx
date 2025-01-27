'use client'; // <-- Add this directive to mark this as a client-side component

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import Link from "next/link";
import { motion } from "framer-motion";
import EncButton from "./components/common/EncryptButton";
import Head from 'next/head';  // Importing Head for SEO

export default function Home() {
  const backgroundRef = useRef(null);

  // Metadata for SEO
  const metadata = {
    title: "Samuel Siyajari | Full Stack Developer",
    description: "Hi, I'm Samuel Siyajari, a Full Stack Developer. I specialize in crafting innovative and high-performing web applications. Let’s collaborate on your next project.",
    keywords: "Samuel Siyajari, full stack developer, web development, software engineer, React, Node.js, Flask, JavaScript, Python, portfolio",
    author: "Samuel Siyajari",
    url: "https://yourwebsite.com", // Update with your actual URL
    image: "https://your-image-url-here.jpg", // Optional: Add your own image URL for social sharing
  };

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return; // Skip Three.js rendering on mobile

    let renderer, scene, camera, particles;

    const initScene = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
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

      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(posArray, 3)
      );

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: 0x888888,
      });

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
        {/* Meta Tags for SEO */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content="index, follow" /> {/* Allows search engines to index this page */}
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
      </Head>

      <section className="relative min-h-screen bg-gray-900 text-white flex items-center py-16 md:py-0">
        {/* 3D Background */}
        <div ref={backgroundRef} className="absolute inset-0 z-0" />

        <div className="container mx-auto px-8 z-10">
          {/* Hero Section */}
          <div className="flex flex-col text-center">
            <motion.h1
              className="text-3xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hi, I&apos;m <span className="text-indigo-500">Samuel Siyajari</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-2xl leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              &quot;As a full-stack developer, I blend creativity with technical
              expertise to craft polished, high-performing applications. I&apos;m
              eager to collaborate and transform innovative ideas into exceptional
              digital solutions.&quot;
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              className="flex space-x-4 items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/projects" className="flex items-center gap-2">
                <motion.div
                  className="mt-2 sm:flex justify-center hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <svg
                    className="w-8 h-8 text-indigo-500 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h12m0 0l-4 4m4-4l-4-4"
                    />
                  </svg>
                </motion.div>
                <EncButton text={"View Projects"} />
              </Link>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-semibold"
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  About Me
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
