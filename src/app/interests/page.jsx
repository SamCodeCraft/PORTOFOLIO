import React from 'react';
import Head from 'next/head'; // Import the Head component for SEO
import InterestsClient from './interestsClient'; // Your Interests component

// Metadata for the Interests Page
export const metadata = {
  title: "Samuel Siyajari - Interests",
  description: "A showcase of my key interests in technology and software development, highlighting my passion for full-stack development, API design, and machine learning.",
  keywords: "interests, technology, software development, full-stack development, API development, machine learning, AI, DevOps, UX, team collaboration",
  author: "Samuel Siyajari",
  url: "https://yourwebsite.com/interests", // Replace with actual URL if needed
  image: "https://your-image-url-here.jpg", // Optional: set an image URL for social sharing
};

const Page = () => {
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
        {/* Render InterestsComponent here */}
        <InterestsClient />
      </div>
    </>
  );
};

export default Page;
