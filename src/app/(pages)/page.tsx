"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import HeroSection from "@/components/(home)/HeroSection";
import PopularSection from "@/components/(home)/PopularSection";
import CountryModal from "@/components/(home)/CountryModal";

import { destinations } from "@/data/destinations";
import type { Destination } from "@/types/destination";

export default function Page() {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Destination | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const handleProceed = (payload?: { nationality: string; destination: string }) => {
    if (!payload?.nationality || !payload?.destination) return;

    const countrySlug = slugify(payload.destination);

    router.push(
      `/visa/${countrySlug}?nationality=${encodeURIComponent(payload.nationality)}`
    );
  };

  if (!mounted) {
    // Ensuring fallback uses the solid Industrial Gray color
    return <div className="min-h-screen bg-[#09090b]" />;
  }

  return (
    // Changed bg-brand-dark to solid #09090b for Industrial Gray consistency
    <div className="min-h-screen pb-10 bg-[#09090b] text-white font-sans selection:bg-white/10 overflow-x-hidden">
      
      {/* FIX: DELETED THE GLOBAL bg-glow DIV. 
          The HeroSection now manages its own masked background 
          so the top area remains solid and dark for the Navbar.
      */}

      <HeroSection
        destinations={destinations}
        onProceed={handleProceed}
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