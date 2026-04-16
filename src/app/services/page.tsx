import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

// 2026 SEO Metadata Object
export const metadata: Metadata = {
  title: "Premium Visa Services | Accuracy, Speed & Global Fluency | VisaSlide",
  description: "Elite outbound logistics for Qatar and Bangladesh. Experience 100% embassy compliance with our document auditing and expedited processing protocols.",
  keywords: ["Outbound Visa Doha", "Visa Processing Bangladesh", "Premium Visa Service", "GCC Travel Logistics 2026"],
  alternates: {
    canonical: "https://visaslide.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-[#020202]">
      {/* Search engines crawl this title directly from the server */}
      <h1 className="sr-only">Premium Outbound Visa Services in Doha and Dhaka</h1>
      
      <ServicesClient />
    </div>
  );
}