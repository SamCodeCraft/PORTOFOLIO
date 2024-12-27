import React from 'react';
import Contact from './contact-Client';


// Metadata for the page 
export const metadata = {
  title: "Contact Samuel Siyajari | Portfolio",
  description: "Get in touch with Samuel Siyajari, a Full Stack Software Developer. Whether you have questions or collaboration opportunities, I would love to hear from you.",
  keywords: "contact, portfolio, full stack developer, software engineer, web development, projects, skills, Samuel Siyajari",
  author: "Samuel Siyajari",
};

// Main component for the page
const Page = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Contact />
    </div>
  );
};

export default Page;

