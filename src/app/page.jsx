'use client';
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Home() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    let renderer, scene, camera, particles, animationId;

    const initScene = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (backgroundRef.current) {
        backgroundRef.current.innerHTML = "";
        backgroundRef.current.appendChild(renderer.domElement);
      }

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
        animationId = requestAnimationFrame(animate);
        particles.rotation.y += 0.001;
        renderer.render(scene, camera);
      };
      animate();
    };

    initScene();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (renderer && camera) {
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationId) cancelAnimationFrame(animationId);
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && backgroundRef.current) {
          backgroundRef.current.removeChild(renderer.domElement);
        }
      }
      if (particles) {
        particles.geometry.dispose();
        particles.material.dispose();
      }
    };
  }, []);

  return (
    <div ref={backgroundRef} style={{ width: "100vw", height: "100vh" }}>
      {/* Your content here */}
    </div>
  );
}