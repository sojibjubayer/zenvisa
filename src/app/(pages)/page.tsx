"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "@/components/(home)/Navbar";
import HeroSection from "@/components/(home)/HeroSection";
import PopularSection from "@/components/(home)/PopularSection";
import Footer from "@/components/(home)/Footer";
import CountryModal from "@/components/(home)/CountryModal";

import { destinations } from "@/data/destinations";
import type { Destination } from "@/types/destination";

export default function Page() {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Destination | null>(null);
  const [navSelection, setNavSelection] = useState("");

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

  const handleProceed = () => {
    if (!navSelection) return;
    router.push(`/visa/${navSelection.toLowerCase()}`);
  };

  if (!mounted) {
    return <div className="min-h-screen bg-brand-dark" />;
  }

  return (
    <div className="min-h-screen pb-10 bg-brand-dark text-white font-sans selection:bg-white/10">
      <div className="absolute inset-0 -z-10 bg-glow" />

      <Navbar />

      <HeroSection
        destinations={destinations}
        navSelection={navSelection}
        setNavSelection={setNavSelection}
        onProceed={handleProceed}
      />

      <PopularSection
        destinations={destinations}
        setSelected={setSelectedCountry}
      />

      <Footer />

      <CountryModal
        selectedCountry={selectedCountry}
        onClose={() => setSelectedCountry(null)}
      />
    </div>
  );
}