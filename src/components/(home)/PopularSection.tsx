"use client";

import type { Destination } from "@/types/destination";
import CountryCard from "./CountryCard";

type Props = {
  destinations: Destination[];
  setSelected: (country: Destination) => void;
};

export default function PopularSection({
  destinations,
  setSelected,
}: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex items-center gap-4 mb-8 md:mb-12">
        <h2 className="text-xl md:text-4xl font-black uppercase tracking-tighter shrink-0">
          Popular
        </h2>
        <div className="h-px flex-1 bg-white/10" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {destinations.map((country) => (
          <CountryCard
            key={country.id}
            country={country}
            onClick={() => setSelected(country)}
          />
        ))}
      </div>
    </section>
  );
}