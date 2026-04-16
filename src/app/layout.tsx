import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/(home)/Navbar";
import Footer from "@/components/(home)/Footer";

const geistSans = Geist({ 
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Visa Slide | Automated Visa Platform",
  description: "Simple, automated, and secure visa assistance.",
  // --- ICON ADDED HERE ---
  icons: {
    icon: "/logo.png",
    apple: "/logo.png", // Optional: for iOS home screen
  },
};

export default function RootLayout({ 
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} bg-brand-dark text-white font-sans`}
      >
        <Navbar />
        {/* Adjusted pt-16 to ensure no overlap with the fixed navbar */}
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}