"use client";
import "./globals.css";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// const inter = Inter({ subsets: ["latin"] });

// const metadata: Metadata = {
//   title: "SPAship",
//   description: "Welcoming page",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
