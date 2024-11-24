import React from 'react'
import About from './aboutClient';


export const metadata = {
  title: "About Samuel Siyajari | Portfolio",
  description: "Learn more about Samuel Siyajari, a passionate Full Stack Software Developer. Discover my skills, experience, and journey in the world of web development.",
  keywords: "about, portfolio, full stack developer, software engineer, web development, skills, experience, Brian Omondi",
  author: "Samuel Siyajari",
 
};


const page = () => {

  
  return (
    <div className='pt-2'>
      <About/>
      
    </div>
  )
}

export default page