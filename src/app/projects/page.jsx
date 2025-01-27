import React from 'react';
import Head from 'next/head'; // Import the Head component for SEO

// Metadata for the Projects Page
export const metadata = {
  title: "Projects - Samuel Siyajari",
  description: "Discover my projects showcasing expertise in full-stack development.",
  keywords: "projects, full-stack development, web development, React, Flask, software engineering, SaaS, API development, portfolio",
  author: "Samuel Siyajari",
  url: "https://yourwebsite.com/projects", // Replace with actual URL if needed
  image: "https://your-image-url-here.jpg", // Optional: set an image URL for social sharing
};

export default function ProjectsPage() {
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

      <div className="min-h-screen">
        {/* Content for the projects page */}
        <h1>Welcome to my projects page!</h1>
        <p>Here you'll find a collection of my projects showcasing my skills in full-stack development.</p>
      </div>
    </>
  );
}
