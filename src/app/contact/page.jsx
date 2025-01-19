import React from 'react';
import Contact from './contactClient';

export const metadata = {
  title: "Contact Samuel Siyajari | Portfolio",
  description: "Get in touch with Samuel Siyajari, a Full Stack Software Developer.  Whether you have questions or collaboration opportunities, I would love to hear from you.",
  keywords: "contact, portfolio, full stack developer, software engineer, web development, projects, skills, Samuel Siyajari",
  author: "Samuel Siyajari",
};

const page = () => {
  return (
    <Contact /> // Directly render the Contact component
  );
};

export default page;

