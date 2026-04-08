"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, CreditCard, FileText, X } from "lucide-react";
import { Destination } from "@/types/destination";

type Props = {
  selectedCountry: Destination | null;
  onClose: () => void;
};

export default function CountryModal({
  selectedCountry,
  onClose,
}: Props) {
  const router = useRouter();

  if (!selectedCountry) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative w-full md:max-w-xl bg-white/3 border border-white/10 
        rounded-t-[2.5rem] md:rounded-[3rem] 
        max-h-[90vh] overflow-hidden 
        flex flex-col 
        animate-in slide-in-from-bottom-10 duration-300">

        {/* Glow */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-violet/20 blur-[100px]" />

        {/* HEADER */}
        <div className="p-5 md:p-8 pb-3 md:pb-4 flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-sky animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-sky">
                Visa Details
              </span>
            </div>

            <h3 className="text-2xl md:text-4xl font-black tracking-tighter italic">
              {selectedCountry.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-3 md:p-4 bg-white/5 hover:bg-white/10 rounded-full border border-white/5 active:scale-90"
          >
            <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </button>
        </div>

        {/* SCROLLABLE BODY */}
        <div className="px-5 md:px-8 pb-6 md:pb-8 space-y-6 overflow-y-auto">

          {/* FEE */}
          <div className="relative bg-white/5 border border-white/10 rounded-3xl md:rounded-4xl p-5 md:p-6">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] font-black uppercase text-brand-lavender tracking-widest mb-2 opacity-60">
                  Application Fee
                </p>

                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-black">
                    499
                  </span>
                  <span className="text-xs md:text-sm font-bold text-brand-sky uppercase">
                    QAR
                  </span>
                </div>
              </div>

              <div className="w-10 h-10 md:w-12 md:h-12 bg-linear-to-br from-brand-violet to-pink-400 rounded-xl md:rounded-2xl flex items-center justify-center">
                <CreditCard className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>

            <span className="absolute -bottom-2 -right-2 text-5xl md:text-6xl font-black text-white/2 uppercase">
              Visa
            </span>
          </div>

          {/* DOCS */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-lavender mb-3">
              Required Dossier
            </h4>

            <div className="space-y-2">
              {selectedCountry.docs.map((doc, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 md:gap-4 bg-white/2 border border-white/5 p-3 md:p-4 rounded-xl md:rounded-2xl"
                >
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-white/5 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-xs md:text-sm font-bold text-white/80">
                    {doc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-2 relative">
            <div className="absolute inset-0 bg-linear-to-r from-pink-400 to-pink-500 blur-2xl opacity-20" />

            <button
              onClick={() =>
                router.push(`/visa/${selectedCountry.name.toLowerCase()}`)
              }
              className="relative w-full bg-linear-to-r from-pink-400 to-pink-500 py-4 md:py-5 rounded-2xl md:rounded-4xl font-black text-sm md:text-lg flex items-center justify-center gap-2 md:gap-3 active:scale-[0.98]"
            >
              Start Application
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <p className="text-center text-[10px] text-brand-lavender/40 mt-3 uppercase font-bold tracking-widest">
              Estimated Processing: 3-5 Working Days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}