import Contact from './ContactClient';

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
        url: "https://your-image-url-here.jpg",
        alt: "Samuel Siyajari Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Samuel Siyajari | Portfolio",
    description: "Get in touch with Samuel Siyajari, a Full Stack Software Developer. Whether you have questions or collaboration opportunities, I would love to hear from you.",
    images: ["https://your-image-url-here.jpg"],
  },
};

export default function ContactPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 animate-gradient-move bg-gradient-to-br from-indigo-900 via-gray-900 to-black opacity-90" />
      <Contact />
    </section>
  );
}