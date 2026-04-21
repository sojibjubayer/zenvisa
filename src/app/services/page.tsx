import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title:
    "Visa Services from Qatar | Visit Visa, Tourist Visa & Work Visa Assistance | Visa Slide",
  description:
    "Explore premium visa services from Qatar with Visa Slide. Get assistance for visit visa, tourist visa, family visit visa, business visa, and work visa applications with document guidance and end-to-end support.",
  keywords: [
    "visa services from Qatar",
    "visit visa services",
    "tourist visa services",
    "family visit visa assistance",
    "business visa assistance",
    "work visa services",
    "work visa from Qatar",
    "visit visa from Qatar",
    "tourist visa from Qatar",
    "visa agency Qatar",
    "visa assistance Qatar",
    "Schengen visa services from Qatar",
    "Europe work visa assistance",
    "Visa Slide services",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title:
      "Visa Services from Qatar | Visit Visa & Work Visa Assistance | Visa Slide",
    description:
      "Premium visa services for visit visa, tourist visa, family visa, business visa, and work visa applications from Qatar.",
    url: "/services",
    siteName: "Visa Slide",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Visa Services from Qatar | Visit Visa & Work Visa Assistance | Visa Slide",
    description:
      "Premium visa services for visit visa, tourist visa, family visa, business visa, and work visa applications from Qatar.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}