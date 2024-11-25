import localFont from 'next/font/local';
import StoreProvider from './StoreProvider';
import LenisWrapper from './components/layout/lennisWrapper';
import './globals.css';
import Navbar from './components/layout/Header';
import Footer from './components/layout/Footer';

const geistSans = localFont({
  src: '/fonts/GeistVF.woff', 
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: '/fonts/GeistMonoVF.woff', 
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: "Samuel Siyajari | Portfolio",
  description: "Explore my projects and skills as a Full Stack Software Developer. Discover my journey in building innovative web applications.",
  keywords: "portfolio, full stack developer, software engineer, web development, projects, skills",
  author: "Samuel Siyajari",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
       <head> {/* ... head tags */}</head>

        <body className={`${geistSans.className} ${geistMono.className} antialiased`}> {/* Updated! */}
          <LenisWrapper>
              <Navbar /> {/* The font will be applied to elements within Navbar */}
              {children} {/*  ...and to any children rendered here */}
          </LenisWrapper>

          <Footer/>  {/* Also applied here */}

        </body>
      </html>
    </StoreProvider>
  );
}