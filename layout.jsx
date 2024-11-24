import localFont from "next/font/local";
import StoreProvider from "./StoreProvider";
import LenisWrapper from "./components/layout/lennisWrapper";
import "./globals.css";
import Navbar from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
        <head>
          <link //rel="icon" href="/images/officialLogo.png"/>
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <LenisWrapper>
            <header><Navbar/></header>
            <div className="">          {children}</div>

          </LenisWrapper>
          <footer><Footer/></footer>
        </body>
        
      </html>
    </StoreProvider>
  );
}