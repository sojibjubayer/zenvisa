"use client";

import Image from "next/image"; // Optimization if using Next.js
import { Destination } from "@/types/destination";
import { ChevronDown, ArrowRight, ShieldCheck } from "lucide-react";
import Steps from "./Steps";

type Props = {
  destinations: Destination[];
  navSelection: string;
  setNavSelection: (val: string) => void;
  onProceed: () => void;
};

export default function HeroSection({
  destinations,
  navSelection,
  setNavSelection,
  onProceed,
}: Props) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 py-20 text-center">
      {/* 1. Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/hero-bg.webp"
          alt="Travel background"
          className="h-full w-full object-cover"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-brand-dark/90 via-brand-dark/80 to-brand-dark/95" />
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <ShieldCheck className="w-4 h-4 text-brand-sky" />
          <span className="text-xs font-bold uppercase tracking-widest text-brand-sky">
            Official 100% Online Process
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-white">
          Apply for Your <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-sky to-white">
            Visa in Minutes
          </span>
        </h1>

        {/* <p className="max-w-2xl mx-auto text-base md:text-lg text-white/70 leading-relaxed mb-10">
          Skip the embassy queues. Register, upload documents, and receive your 
          visa via email — fast, secure, and entirely digital.
        </p> */}

        {/* Visual Steps Guide */}
        <div className="max-w-4xl mx-auto mb-12">
          <Steps />
        </div>

        {/* Search/Selection Box */}
        <div className="max-w-3xl mx-auto">
          <div className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-2 sm:p-3 shadow-2xl transition-all hover:border-white/20">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1 group">
                <select
                  value={navSelection}
                  onChange={(e) => setNavSelection(e.target.value)}
                  className={`w-full appearance-none rounded-2xl bg-white/5 border border-white/10 px-6 py-4 pr-12 text-sm sm:text-base font-medium outline-none focus:ring-2 focus:ring-brand-sky/30 transition-all cursor-pointer
                    ${!navSelection ? "text-white/40" : "text-white"}`}
                >
                  <option value="" disabled className="bg-brand-dark text-white/50">
                    Where are you traveling to?
                  </option>
                  {destinations.map((d) => (
                    <option key={d.id} value={d.name} className="bg-brand-dark text-white">
                      {d.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40 group-hover:text-brand-sky transition-colors">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>

              <button
                onClick={onProceed}
                disabled={!navSelection}
                className="group w-full md:w-auto px-8 py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-2 bg-brand-sky hover:bg-brand-sky/90 shadow-lg shadow-brand-sky/20 transition-all active:scale-95 disabled:opacity-30 disabled:grayscale disabled:cursor-not-allowed"
              >
                Start Application
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
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

      {/* Subtle bottom fade to blend with the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-brand-dark to-transparent z-10" />
    </section>
  );
}