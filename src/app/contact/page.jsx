import React from 'react';
import Head from 'next/head'; // Import the Head component for SEO
import Contact from './contact-Client'; // Your contact component

// Metadata for the Contact Page
export const metadata = {
  title: "Contact Samuel Siyajari | Portfolio",
  description: "Get in touch with Samuel Siyajari, a Full Stack Software Developer. Whether you have questions or collaboration opportunities, I would love to hear from you.",
  keywords: "contact, portfolio, full stack developer, software engineer, web development, projects, skills, Samuel Siyajari",
  author: "Samuel Siyajari",
  image: "https://your-image-url-here.jpg", // Optional: set an image URL for social sharing
};

const ContactPage = () => {
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
        <meta property="og:url" content="https://your-portfolio-url-here.com/contact" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
      </Head>

      <div className="flex min-h-screen items-center justify-center">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
