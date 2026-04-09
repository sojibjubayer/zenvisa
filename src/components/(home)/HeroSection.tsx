"use client";

import { ChevronDown, ArrowRight, ShieldCheck } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Steps from "./Steps";

type Destination = {
  id: string | number;
  name: string;
};

type Props = {
  destinations?: Destination[];
  onProceed: (payload?: { nationality: string; destination: string }) => void;
};

const EVISA_BY_NATIONALITY: Record<string, string[]> = {
  India: [
    "Armenia",
    "Azerbaijan",
    "Bahrain",
    "Benin",
    "Cambodia",
    "Colombia",
    "Côte d’Ivoire",
    "Djibouti",
    "Ethiopia",
    "Gabon",
    "Georgia",
    "Iran",
    "Kazakhstan",
    "Kenya",
    "Laos",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Moldova",
    "Myanmar",
    "Nigeria",
    "Oman",
    "Russia",
    "Rwanda",
    "São Tomé and Príncipe",
    "Saudi Arabia",
    "Singapore",
    "South Sudan",
    "Sri Lanka",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Turkey",
    "Uganda",
    "Uzbekistan",
    "Vietnam",
    "Zambia",
    "Zimbabwe",
  ],
  Bangladesh: [
    "Bahrain",
    "Benin",
    "Cambodia",
    "Colombia",
    "Malaysia",
    "Moldova",
    "Oman",
    "Pakistan",
    "São Tomé and Príncipe",
    "Singapore",
    "South Korea",
    "South Sudan",
  ],
  Nepal: [
    "Azerbaijan",
    "Bahrain",
    "Benin",
    "Cambodia",
    "Iran",
    "Malaysia",
    "Moldova",
    "Myanmar",
    "Oman",
  ],
  Pakistan: [
    "Bahrain",
    "Benin",
    "Cambodia",
    "Malaysia",
    "Moldova",
    "Myanmar",
    "Oman",
    "Saudi Arabia",
    "South Korea",
    "South Sudan",
  ],
  "Sri Lanka": [
    "Azerbaijan",
    "Bahrain",
    "Cambodia",
    "Malaysia",
    "Moldova",
  ],
};

export default function HeroSection({ onProceed }: Props) {
  const [nationality, setNationality] = useState("");
  const [destination, setDestination] = useState("");

  const nationalities = useMemo(
    () => Object.keys(EVISA_BY_NATIONALITY),
    []
  );

  const availableDestinations = useMemo(() => {
    if (!nationality) return [];
    return EVISA_BY_NATIONALITY[nationality] || [];
  }, [nationality]);

  useEffect(() => {
    setDestination("");
  }, [nationality]);

  const handleProceed = () => {
    if (!nationality || !destination) return;
    onProceed({ nationality, destination });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 py-20 text-center">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/hero-bg.webp"
          alt="Travel background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-dark/90 via-brand-dark/80 to-brand-dark/95" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <ShieldCheck className="w-4 h-4 text-brand-sky" />
          <span className="text-xs font-bold uppercase tracking-widest text-brand-sky">
            Official 100% Online Process
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-white">
          Apply for Your <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-sky to-white">
            Visa in Minutes
          </span>
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <Steps />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-2 sm:p-3 shadow-2xl transition-all hover:border-white/20">
            <div className="flex flex-col lg:flex-row gap-3">
              <div className="relative flex-1">
                <select
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  className={`w-full appearance-none rounded-2xl bg-white/5 border border-white/10 px-6 py-4 pr-12 text-sm sm:text-base font-medium outline-none focus:ring-2 focus:ring-brand-sky/30 transition-all cursor-pointer ${
                    !nationality ? "text-white/40" : "text-white"
                  }`}
                >
                  <option
                    value=""
                    disabled
                    className="bg-brand-dark text-white/50"
                  >
                    Select your nationality
                  </option>

                  {nationalities.map((item) => (
                    <option
                      key={item}
                      value={item}
                      className="bg-brand-dark text-white"
                    >
                      {item}
                    </option>
                  ))}
                </select>

                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40 transition-colors">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>

              <div className="relative flex-1">
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  disabled={!nationality}
                  className={`w-full appearance-none rounded-2xl bg-white/5 border border-white/10 px-6 py-4 pr-12 text-sm sm:text-base font-medium outline-none focus:ring-2 focus:ring-brand-sky/30 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
                    !destination ? "text-white/40" : "text-white"
                  }`}
                >
                  <option
                    value=""
                    disabled
                    className="bg-brand-dark text-white/50"
                  >
                    {nationality
                      ? "Where are you traveling to?"
                      : "Select nationality first"}
                  </option>

                  {availableDestinations.map((country) => (
                    <option
                      key={country}
                      value={country}
                      className="bg-brand-dark text-white"
                    >
                      {country}
                    </option>
                  ))}
                </select>

                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40 transition-colors">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>

              <button
                onClick={handleProceed}
                disabled={!nationality || !destination}
                className="group w-full lg:w-auto px-8 py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-2 bg-brand-sky hover:bg-brand-sky/90 shadow-lg shadow-brand-sky/20 transition-all active:scale-95 disabled:opacity-30 disabled:grayscale disabled:cursor-not-allowed"
              >
                Start Application
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[10px] sm:text-xs font-bold text-white/30 uppercase tracking-[0.2em]">
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-brand-sky" />
              No Embassy Visit
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-brand-sky" />
              Secure Encrypted Payment
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-brand-sky" />
              24/7 Support
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-brand-dark to-transparent z-10" />
    </section>
  );
}