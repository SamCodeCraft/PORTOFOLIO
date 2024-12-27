import React from 'react';
import LearningClient from './learningClient';

export const metadata = {
  title: "Samuel Siyajari - Learning",
  description:
    "A curated collection of videos that showcase my interests and expertise in modern frontend and backend web development.",
  keywords:
    "learning, video collection, web development, frontend, backend, React, Django, Flask, Node.js, development resources, programming tutorials",
  author: "Samuel Siyajari",
  url: "https://yourwebsite.com/learning", // Or the actual URL path if different
};

const page = () => {
  return <LearningClient />; // Directly render the LearningClient component
};

export default page;

