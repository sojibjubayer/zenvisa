import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

// 2026 SEO Metadata - Targeted for Tourist, Business & E-Visas
export const metadata: Metadata = {
  title: "Digital Visa Engine | E-Visa, Visit & Tourist Specialist",
  description: "Elite digital processing for Visit, Tourist, and Business Tourist visas. Specialized E-Visa infrastructure for South Asian professionals and GCC residents traveling from Doha & Dhaka.",
  keywords: [
    "Visit Visa Online",
    "Tourist Visa Processing",
    "Business Tourist E-Visa",
    "Digital Visa Engine",
    "Qatar E-Visa Service",
    "Bangladesh Outbound Visas",
    "South Asia Travel Permits"
  ],
  alternates: {
    canonical: "https://visaslide.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-[#050505]">
      {/* Optimized SEO H1 for backend indexing */}
      <h1 className="sr-only">
        Digital Visa Engine: Online Visit, Tourist, and Business E-Visa Systems
      </h1>
      
      <ServicesClient />
    </div>
  );
}