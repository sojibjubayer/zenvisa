"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Clock3,
  CalendarDays,
  Plane,
  ShieldCheck,
  FileText,
} from "lucide-react";
import type { CountryVisaData } from "@/types/visa";
import RequirementCard from "./RequirementCard";
import { normalizeVisaKey, resolveVisaConfig } from "@/lib/visa";

type Props = {
  data: CountryVisaData;
  nationality?: string;
};

type TabType = "evisa" | "visit";

export default function VisaRequirementsPage({ data, nationality }: Props) {
  const resolvedConfig = useMemo(
    () => resolveVisaConfig(data, nationality),
    [data, nationality]
  );

  const hasEVisa = !!resolvedConfig?.eVisa;
  const hasVisitVisa = !!resolvedConfig?.visitVisa;

  const [activeTab, setActiveTab] = useState<TabType>(
    hasEVisa ? "evisa" : "visit"
  );

  useEffect(() => {
    setActiveTab(hasEVisa ? "evisa" : "visit");
  }, [hasEVisa, nationality]);

  const currentSection =
    activeTab === "evisa" ? resolvedConfig?.eVisa : resolvedConfig?.visitVisa;

  const normalizedNationality = nationality
    ? normalizeVisaKey(nationality)
    : "";

  if (!resolvedConfig || !currentSection) {
    return (
      <main className="min-h-screen bg-[#f8fafc] text-slate-900">
        <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-lg rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
              <FileText className="h-7 w-7" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">
              No visa information found
            </h1>
            <p className="mt-3 text-sm text-slate-600">
              We could not find visa requirements for this selection.
            </p>
          </div>
        </div>
      </main>
    );
  }

  const infoItems = [
    {
      label: "Processing Time",
      value: currentSection.processingTime,
      icon: Clock3,
    },
    {
      label: "Validity",
      value: currentSection.validity,
      icon: CalendarDays,
    },
    {
      label: "Stay Duration",
      value: currentSection.stayDuration,
      icon: Plane,
    },
    {
      label: "Entry Type",
      value: currentSection.entries,
      icon: ShieldCheck,
    },
  ].filter((item) => item.value);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#f3f6fb_45%,#ffffff_100%)] text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200/80">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 backdrop-blur">
              <ShieldCheck className="h-4 w-4" />
              Visa Requirements
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {data.countryName}
              <span className="block bg-linear-to-r from-blue-700 via-slate-900 to-violet-700 bg-clip-text text-transparent">
                Visa Requirements
              </span>
            </h1>

            {data.heroDescription && (
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                {data.heroDescription}
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {normalizedNationality && (
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
                  <span className="rounded-full bg-violet-600/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em]">
                    Passport
                  </span>
                  {nationality}
                </div>
              )}

              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
                {activeTab === "evisa" ? "Electronic Visa" : "Visit Visa"}
              </div>
            </div>

            <div className="mt-8 inline-flex flex-wrap items-center justify-center rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
              {hasEVisa && (
                <button
                  onClick={() => setActiveTab("evisa")}
                  className={`rounded-xl px-5 py-3 text-sm font-semibold transition sm:px-6 ${
                    activeTab === "evisa"
                      ? "bg-linear-to-r from-blue-700 to-violet-700 text-white shadow-[0_10px_24px_rgba(79,70,229,0.25)]"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  e-Visa
                </button>
              )}

              {hasVisitVisa && (
                <button
                  onClick={() => setActiveTab("visit")}
                  className={`rounded-xl px-5 py-3 text-sm font-semibold transition sm:px-6 ${
                    activeTab === "visit"
                      ? "bg-linear-to-r from-blue-700 to-violet-700 text-white shadow-[0_10px_24px_rgba(79,70,229,0.25)]"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  Visit Visa
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-4">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-6">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                Visa Details
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                {currentSection.title}
              </h2>
            </div>

            <div className="space-y-3">
              {infoItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold leading-6 text-slate-900">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-blue-700 via-violet-600 to-violet-700 px-5 py-4 text-sm font-bold text-white shadow-[0_16px_38px_rgba(79,70,229,0.28)] transition hover:scale-[0.99]">
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-6">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-700">
                Documents
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                Required Documents
              </h2>
            </div>

            {currentSection.requirements.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {currentSection.requirements.map((item) => (
                  <RequirementCard
                    key={`${item.label}-${item.value}`}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-500">
                No document information available yet.
              </p>
            )}
          </div>
        </div>

        {currentSection.notes && currentSection.notes.length > 0 && (
          <div className="mt-6 rounded-[28px] border border-violet-100 bg-linear-to-r from-blue-50 via-white to-violet-50 p-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-violet-700">
              Important Notes
            </h3>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {currentSection.notes.map((note) => (
                <div
                  key={note}
                  className="rounded-2xl border border-white/80 bg-white/80 px-4 py-4 text-sm leading-6 text-slate-700 shadow-sm"
                >
                  {note}
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}