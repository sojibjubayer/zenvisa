import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "Outbound Visa Intelligence | Global Digital Logistics 2026 | VisaSlide",
  description: "The elite digital gateway for Qatar and Bangladesh residents. High-velocity outbound visa auditing, secure remote verification, and instant digital payment protocols.",
  keywords: [
    "Digital Visa Audit Qatar", 
    "Expedited Bangladesh Outbound", 
    "Premium GCC Travel Logistics", 
    "Contactless Visa Verification 2026",
    "Secure Online Travel Payments South Asia"
  ],
  alternates: {
    canonical: "https://visaslide.com/about",
  },
  openGraph: {
    title: "VisaSlide | Precision Outbound Architecture",
    description: "100% Digital. 100% Remote. The future of global mobility from the GCC to the world.",
    images: ["/og-about-premium.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#020202]">
      {/* Invisible SEO structure for 2026 Crawlers */}
      <h1 className="sr-only">VisaSlide: Elite Digital Outbound Infrastructure in Doha and Dhaka</h1>
      <AboutClient />
    </div>
  );
}