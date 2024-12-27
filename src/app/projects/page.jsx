'use client';
import React from 'react';
import Projects from './projectsClient';

export const metadata = {
  title: "Samuel Siyajari - Projects",
  description: "Explore my portfolio of projects, showcasing my skills in full-stack development",
  keywords: "projects, portfolio, full-stack development, web applications, React, Flask, Django, Next.js, Express.js, PostgreSQL",
  author: "Samuel Siyajari",
  url: "https://yourwebsite.com/projects", // Or the actual URL path.  Important for SEO!
};

const Page = () => {
  return <Projects />; // Directly render the Projects component
};

export default Page;

