import React, { useEffect } from 'react';
import Projects from './projectsClient';

export const metadata = {
  title: "Samuel Siyajari - Projects",
  description: "Explore my portfolio of projects, showcasing my skills in full-stack development",
  keywords: "projects, portfolio, full-stack development, web applications, React, Flask, Django, Next.js, Express.js, PostgreSQL",
  author: "Samuel Siyajari",
  url: "https://yourwebsite.com/projects",
};

const Page = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log('User is scrolling on the Projects page');
    };

    // Add the event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup: Remove the event listener
      window.removeEventListener('scroll', handleScroll);
      console.log('Scroll listener removed from Projects page');
    };
  }, []); // Empty dependency array ensures this runs once on mount/unmount

  return (
    <div className='pt-2'>
      <Projects />
    </div>
  );
};

export default Page;
