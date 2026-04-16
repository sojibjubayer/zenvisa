import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Our Intelligence Desk | VisaSlide 2026",
  description: "Connect with VisaSlide's Doha Strategic Command. 24/7 priority support for outbound visa logistics, document auditing, and digital payments.",
  keywords: ["VisaSlide Contact", "Doha Visa Support", "Priority Travel Desk", "VisaSlide Email"],
  alternates: {
    canonical: "https://visaslide.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-[#020202]">
      <h1 className="sr-only">Contact VisaSlide: Elite Outbound Support in Doha and Dhaka</h1>
      <ContactClient />
    </div>
  );
}