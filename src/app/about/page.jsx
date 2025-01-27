import React from 'react';
import Head from 'next/head'; // Import the Head component for SEO

// Metadata for the About Page
export const metadata = {
  title: "About Samuel Siyajari | Portfolio",
  description: "Learn more about Samuel Siyajari, a passionate full-stack software developer with expertise in React, Flask, Python, and more. Discover his projects, skills, and experience.",
  keywords: "about, portfolio, full stack developer, software engineer, React, Flask, Python, web development, Samuel Siyajari",
  author: "Samuel Siyajari",
  image: "https://your-image-url-here.jpg", // Optional: set an image URL for social sharing
};

const AboutPage = () => {
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
        <meta property="og:url" content="https://your-portfolio-url-here.com/about" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
      </Head>

      <div className="flex min-h-screen items-center justify-center">
        {/* Add your content for the About page here */}
        <h1>About Samuel Siyajari</h1>
        <p>I am a passionate full-stack software developer specializing in modern web technologies...</p>
      </div>
    </>
  );
};

export default AboutPage;
