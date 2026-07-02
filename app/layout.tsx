import type { Metadata } from "next";
import { Bebas_Neue, Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CustomCursor from "@/app/components/CustomCursor";
import SmoothScroll from "@/app/components/SmoothScroll";

// Set up Google Fonts using next/font/google
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nitin Kewat | Professional Photographer & Cinematic Videographer",
  description: "Explore the luxury, cinematic portfolio of Nitin Kewat - award-winning photographer & filmmaker. Specializing in royal weddings, fashion lookbooks, drone cinematography, and commercial branding campaigns.",
  metadataBase: new URL("https://nitinkewat.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nitin Kewat | Professional Photographer & Cinematic Videographer",
    description: "Explore the luxury, cinematic portfolio of Nitin Kewat. Capturing emotions, creating stories, and preserving memories across 30+ countries.",
    url: "https://nitinkewat.com",
    siteName: "Nitin Kewat Portfolio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Nitin Kewat Cinematic Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitin Kewat | Photographer & Videographer",
    description: "Cinematic, luxury portfolio of Nitin Kewat. Capturing weddings, editorials, and commercial campaigns globally.",
    images: ["https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true, 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${poppins.variable} ${inter.variable} antialiased bg-black text-white selection:bg-yellow-400 selection:text-black min-h-screen flex flex-col font-body`}
      >
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main className="flex-grow z-10">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
