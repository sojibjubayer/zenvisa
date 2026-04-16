import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About VisaSlide | E-Visa, Visit & Business Tourist Engine",
  description: "100% Digital outbound gateway for Qatar and Bangladesh residents. Apply from home for Visit, Tourist, and Business E-Visas with high-velocity auditing and secure remote verification.",
  keywords: [
    "Apply E-Visa from Home",
    "Tourist Visa Online Qatar",
    "Visit Visa Bangladesh Outbound",
    "Business Visit Visa Engine",
    "Digital Visa Engine Doha",
    "Remote Visa Verification 2026",
    "GCC Outbound Travel Logistics"
  ],
  alternates: {
    canonical: "https://visaslide.com/about",
  },
  openGraph: {
    title: "VisaSlide | Precision Outbound E-Visa Architecture",
    description: "Apply from Home. 100% Digital. The future of global mobility for Visit, Tourist, and Business travelers.",
    images: ["/og-about-premium.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#020202]">
      {/* Invisible SEO structure for 2026 Crawlers */}
      <h1 className="sr-only">
        VisaSlide: Automated E-Visa, Visit, and Business Tourist Infrastructure in Doha and Dhaka
      </h1>
      <AboutClient />
    </div>
  );
}

