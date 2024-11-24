import React from 'react';
import InterestsClient from './interestsClient';

export const metadata = {
  title: "Samuel Siyajari - Interests",
  description: "A showcase of my key interests in technology and software development, highlighting my passion for full-stack development, API design, and machine learning.",
  keywords: "interests, technology, software development, full-stack development, API development, machine learning, AI, DevOps, UX, team collaboration",
  author: "Samuel Siyajari",
  url: "https://yourwebsite.com/interests",
};

const page = () => {
  return (
    <div className="pt-2">
      <InterestsClient />
    </div>
  );
};

export default page;
