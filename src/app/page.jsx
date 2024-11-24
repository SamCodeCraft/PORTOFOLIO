"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import Link from "next/link";
import { motion } from "framer-motion";
import EncButton from "./components/common/EncryptButton";
import Lottie from "lottie-react";
import animationData from "/animations/animation.json";

export default function Home() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Check if the device can handle the 3D scene (avoid heavy rendering on mobile)
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    // Lazy-load the scene setup
    let renderer, scene, camera, particles;

    const initScene = () => {
      // Scene setup
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

      // Particles setup with reduced particle count
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

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        particles.rotation.y += 0.001;
        renderer.render(scene, camera);
      };
      animate();
    };

    initScene();

    // Throttling resize handling
    const handleResize = () => {
      if (renderer && camera) {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      }
    };
    let resizeTimeout;
    const throttledResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 150);
    };
    window.addEventListener("resize", throttledResize);

    // Clean up on unmount
    return () => {
      window.removeEventListener("resize", throttledResize);
      if (backgroundRef.current && renderer) {
        backgroundRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gray-900 text-white flex items-center py-16 md:py-0">
      {/* 3D Background */}
      <div ref={backgroundRef} className="absolute inset-0 z-0" />

      <div className="container mx-auto px-8 z-10">
        {/* Hero Section */}
        <div className="flex flex-col text-center">
        <div className="md:hidden relative flex items-center justify-center animate-custom-pulse">
           
           

        <Lottie animationData={animationData} loop={true} autoplay={true} />
          </div>

          <motion.h1
            className="text-3xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I&apos;m <span className="text-indigo-500">Brian Omondi</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            "As a full-stack developer, I blend creativity with technical expertise to craft polished, 
            high-performing applications. 
            I'm eager to collaborate and transform innovative ideas into exceptional digital solutions."
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
                    d="M9 12h12m0 0l-4 4m4-4l-4-4" // This line points right
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
                transition={{ type: "spring", stiffness: "100" }}
              >
                About Me
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scrolling Arrow Right */}
      </div>
    </section>
  );
}