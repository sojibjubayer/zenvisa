"use client";

import { Destination } from "@/types/destination";
import { Clock, CheckCircle, ArrowRight } from "lucide-react";

type Props = {
  country: Destination;
  onClick: () => void;
};

function getEstimatedDate(processingDays: number) {
  const today = new Date();

  const estimated = new Date(today);
  estimated.setDate(today.getDate() + processingDays);

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    timeZone: "Asia/Qatar",
  }).format(estimated);
}

export default function CountryCard({ country, onClick }: Props) {
  const estimatedDate = getEstimatedDate(country.processingDays);

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer relative aspect-4/5 sm:aspect-auto sm:min-h-100 rounded-4xl md:rounded-[2.5rem] overflow-hidden border border-white/10 transition-all duration-500 hover:border-brand-violet shadow-xl"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={country.image}
          alt={country.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-brand-dark/20 to-brand-dark z-1" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
        <div className="absolute top-4 right-4 md:top-5 md:right-5 bg-brand-dark/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
          <CheckCircle className="w-3 h-3 text-brand-sky" />
          <span className="text-[9px] font-black tracking-widest uppercase">
            {country.success} Done
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-black mb-1 group-hover:text-brand-sky transition-colors leading-tight">
          {country.name}
        </h3>

        <div className="flex items-center gap-2 text-brand-sky font-bold text-xs md:text-sm">
          <Clock className="w-3.5 h-3.5" />
          <span className="uppercase tracking-wide">
            Get on {estimatedDate}
          </span>
        </div>

        <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span className="text-[9px] font-black uppercase tracking-widest text-brand-lavender">
            View Requirements
          </span>
          <ArrowRight className="w-3 h-3 text-brand-sky" />
        </div>
      </div>
    </div>
  );
}