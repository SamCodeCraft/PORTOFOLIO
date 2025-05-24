import About from './aboutClient';

// Metadata for the About Page (Next.js will inject these into <head>)
export const metadata = {
  title: "About Samuel Siyajari | Portfolio",
  description: "Learn more about Samuel Siyajari, a passionate full-stack software developer with expertise in React, Flask, Python, and more. Discover his projects, skills, and experience.",
  keywords: "about, portfolio, full stack developer, software engineer, React, Flask, Python, web development, Samuel Siyajari",
  authors: [{ name: "Samuel Siyajari" }],
  openGraph: {
    title: "About Samuel Siyajari | Portfolio",
    description: "Learn more about Samuel Siyajari, a passionate full-stack software developer.",
    url: "https://your-portfolio-url-here.com/about",
    type: "website",
    images: [
      {
        url: "https://your-image-url-here.jpg",
        width: 1200,
        height: 630,
        alt: "Samuel Siyajari Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Samuel Siyajari | Portfolio",
    description: "Learn more about Samuel Siyajari, a passionate full-stack software developer.",
    images: ["https://your-image-url-here.jpg"],
  },
  robots: "index, follow",
};

export default function AboutPage() {
  return <About />;
}