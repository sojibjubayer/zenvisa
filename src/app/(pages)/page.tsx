"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import HeroSection from "@/components/(home)/HeroSection";
import PopularSection from "@/components/(home)/PopularSection";
import CountryModal from "@/components/(home)/CountryModal";

import { destinations } from "@/data/destinations";
import type { Destination } from "@/types/destination";

type ProceedPayload = {
  currentResidence: string;
  nationality: string;
  destination: string;
  visaType: string;
  serviceType: "online" | "doorstep";
};

export default function Page() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState<Destination | null>(null);

  useEffect(() => {
    if (selectedCountry) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      document.documentElement.style.overflow = "";
    };
  }, [selectedCountry]);

  const slugify = (value: string) =>
    value
      .toLowerCase()
      .trim()
      .replace(/&/g, "and")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

  const handleProceed = (payload?: ProceedPayload) => {
    if (
      !payload?.currentResidence ||
      !payload?.nationality ||
      !payload?.destination ||
      !payload?.visaType ||
      !payload?.serviceType
    ) {
      return;
    }

    const countrySlug = slugify(payload.destination);

    router.push(
      `/visa/${countrySlug}?nationality=${encodeURIComponent(
        payload.nationality
      )}&from=${encodeURIComponent(
        payload.currentResidence
      )}&visaType=${encodeURIComponent(
        payload.visaType
      )}&serviceType=${encodeURIComponent(payload.serviceType)}`
    );
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white pb-10 font-sans text-slate-900 selection:bg-blue-100">
      <HeroSection
      />

      <PopularSection
        destinations={destinations}
        setSelected={setSelectedCountry}
      />

      <CountryModal
        selectedCountry={selectedCountry}
        onClose={() => setSelectedCountry(null)}
      />
    </div>
  );
}