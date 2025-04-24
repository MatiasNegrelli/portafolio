import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// Swiper library
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./globals.css";

// components
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio de Matias Negrelli",
  description: "Portafolio de Matias Negrelli",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
