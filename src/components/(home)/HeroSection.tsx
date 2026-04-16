"use client";

import { ChevronDown, ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Steps from "./Steps";

export default function HeroSection({ onProceed, destinations }: any) {
  const [nationality, setNationality] = useState("");
  const [destination, setDestination] = useState("");

  const nationalities = ["India", "Bangladesh", "Nepal", "Pakistan", "Sri Lanka"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#09090b] px-4 pt-32 pb-20">
      
      {/* --- Solid Background Architecture --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[45px_45px] opacity-20" />
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-200 h-125 bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Compliance Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 mb-8"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500">
            Doha Strategic Center Verified
          </span>
        </motion.div>

        <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase leading-[0.8] mb-12 text-zinc-100">
          Real-Time <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-zinc-200 to-zinc-500">
            Visa Guide.
          </span>
        </h1>

        <div className="max-w-3xl mx-auto mb-20 opacity-30 grayscale">
          <Steps />
        </div>

        {/* Selection Console */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-3xl p-3 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-2">
              
              {/* 1. Citizenship Selection */}
              <div className="relative flex-1 group">
                <select 
                  className={`w-full appearance-none rounded-xl bg-zinc-950 border px-6 py-5 text-[10px] font-black uppercase tracking-widest outline-none transition-all cursor-pointer ${
                    nationality ? "border-blue-500 text-white" : "border-zinc-800 text-zinc-500"
                  }`}
                  value={nationality}
                  onChange={(e) => {
                    setNationality(e.target.value);
                    setDestination(""); // Reset destination if nationality changes
                  }}
                >
                  <option value="">Citizenship</option>
                  {nationalities.map(n => <option key={n} value={n}>{n}</option>)}
                </select>
                <ChevronDown className={`absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${nationality ? "text-blue-500" : "text-zinc-700"}`} />
              </div>

              {/* 2. Destination Selection (Unlocked by Nationality) */}
              <div className="relative flex-1 group">
                <select 
                  disabled={!nationality}
                  className={`w-full appearance-none rounded-xl bg-zinc-950 border px-6 py-5 text-[10px] font-black uppercase tracking-widest outline-none transition-all ${
                    !nationality ? "opacity-20 cursor-not-allowed border-zinc-800" : 
                    destination ? "border-blue-500 text-white cursor-pointer" : "border-zinc-800 text-zinc-200 cursor-pointer"
                  }`}
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                >
                  <option value="">Destination</option>
                  {destinations?.map((d: any) => (
                    <option key={d.id} value={d.name}>{d.name}</option>
                  ))}
                </select>
                <ChevronDown className={`absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${destination ? "text-blue-500" : "text-zinc-700"}`} />
              </div>

              {/* 3. Action Button (Unlocked by Destination) */}
              <button 
                disabled={!destination}
                onClick={() => onProceed({ nationality, destination })}
                className={`px-10 py-5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${
                  !destination 
                  ? "bg-zinc-800 text-zinc-600 opacity-50 cursor-not-allowed" 
                  : "bg-blue-600 text-white hover:bg-blue-500 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                }`}
              >
                Verify Requirements
                <ArrowRight size={14} className={destination ? "animate-pulse" : ""} />
              </button>

            </div>
          </div>
          
          {/* Helper Text */}
          {!nationality && (
            <p className="mt-4 text-[9px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Select your citizenship to begin the automated check</p>
          )}
        </div>
      </div>
    </section>
  );
}