import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reuben Irantiola - Developer Portfolio",
  description:
    "Developer Portfolio of Frontend & Developer from Nigeria with 3+ years of expertise. Specializing in building scalable web applications.",
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Reuben",
   "Frontend",
    "Next.js",
   
  ],
  
 
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Ibrahim Memon",
              jobTitle: "Software Engineer",
              url: "https://ibiimemon.com",
              sameAs: [
                "https://www.linkedin.com/in/ibrahimmemonn/",
                "https://github.com/ibrahimmemonn",
              ],
            }),
          }}
        />
      </head> */}
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
