import React from 'react';
import Contact from './ContactClient'; // Your contact component

// Metadata for the Contact Page
export const metadata = {
  title: "Contact Samuel Siyajari | Portfolio",
  description: "Get in touch with Samuel Siyajari, a Full Stack Software Developer. Whether you have questions or collaboration opportunities, I would love to hear from you.",
  keywords: ["contact", "portfolio", "full stack developer", "software engineer", "web development", "projects", "skills", "Samuel Siyajari"],
  authors: [{ name: "Samuel Siyajari", url: "https://your-portfolio-url-here.com" }],
  robots: "index, follow",
  openGraph: {
    title: "Contact Samuel Siyajari | Portfolio",
    description: "Get in touch with Samuel Siyajari, a Full Stack Software Developer. Whether you have questions or collaboration opportunities, I would love to hear from you.",
    url: "https://your-portfolio-url-here.com/contact",
    images: [
      {
        url: "https://your-image-url-here.jpg", // Update with your image URL
        alt: "Samuel Siyajari Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Samuel Siyajari | Portfolio",
    description: "Get in touch with Samuel Siyajari, a Full Stack Software Developer. Whether you have questions or collaboration opportunities, I would love to hear from you.",
    images: ["https://your-image-url-here.jpg"], // Update with your image URL
  },
};

const ContactPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Contact />
    </div>
  );
};

export default ContactPage;
