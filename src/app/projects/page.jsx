import React from 'react'
import Projects from './projectsClient';


export const metadata = {
  title: "Samuel Siyajari - Projects",
  description: "Explore my portfolio of projects, showcasing my skills in full-stack development",
  keywords: "projects, portfolio, full-stack development, web applications, React, Flask, Django, Next.js, Express.js, PostgreSQL",
  author: "Samuel Siyajari",
  url: "https://yourwebsite.com/projects",
 
};


const page = () => {
  return (
    <div className='pt-2'>
      <Projects/>
      
    </div>
  )
}

export default page