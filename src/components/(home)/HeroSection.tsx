"use client";

import { ChevronDown, ArrowRight, FileText, ShieldCheck, Truck, Globe2 } from "lucide-react";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { Destination } from "@/types/destination";

type ProceedPayload = {
  currentResidence: string;
  nationality: string;
  destination: string;
  visaType: string;
  serviceType: "online" | "doorstep";
};

type Props = {
  onProceed?: (payload?: ProceedPayload) => void;
  destinations?: Destination[];
};

export default function HeroSection({ onProceed, destinations = [] }: Props) {
  const [currentResidence, setCurrentResidence] = useState("");
  const [nationality, setNationality] = useState("");
  const [destination, setDestination] = useState("");
  const [visaType, setVisaType] = useState("");
  const [serviceType, setServiceType] = useState<"online" | "doorstep">("online");

  const residences = ["Qatar", "UAE", "Saudi Arabia", "Oman", "Kuwait", "Bahrain"];
  const nationalities = ["India", "Bangladesh", "Nepal", "Pakistan", "Sri Lanka"];
  const visaTypes = ["Tourist Visa", "Visit Visa", "Business Visa", "Student Visa"];

  const selectedDestination = useMemo(
    () => destinations.find((d) => d.name === destination),
    [destination, destinations]
  );

  const requiredDocs = useMemo(() => {
    if (!selectedDestination) return [];

    // If your current Destination type already has docs: string[]
    if (Array.isArray(selectedDestination.docs)) {
      return selectedDestination.docs;
    }

    return [
      "Passport copy",
      "Passport-size photo",
      "Valid residence permit copy",
      "Travel booking",
      "Hotel booking / accommodation proof",
      "Bank statement",
    ];
  }, [selectedDestination, visaType]);

  const isFormReady =
    currentResidence && nationality && destination && visaType;

  return (
    <section className="relative overflow-hidden bg-white px-4 pb-20 pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-size-[42px_42px] opacity-40" />
        <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-emerald-100 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm"
        >
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600">
            Smart Visa Assistance
          </span>
        </motion.div>

        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
            Your Bright, Simple
            <span className="block bg-linear-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Visa Slide Experience
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
            Select your current residence, destination, nationality, and visa type
            to instantly view required documents and choose how you want to apply.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <SelectBox
              label="Select From"
              value={currentResidence}
              onChange={(e) => setCurrentResidence(e.target.value)}
              options={residences}
              placeholder="Current Residence"
            />

            <SelectBox
              label="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              options={destinations.map((d) => d.name)}
              placeholder="Choose Destination"
            />

            <SelectBox
              label="Nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              options={nationalities}
              placeholder="Choose Nationality"
            />

            <SelectBox
              label="Visa Type"
              value={visaType}
              onChange={(e) => setVisaType(e.target.value)}
              options={visaTypes}
              placeholder="Select Visa Type"
            />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-2">
                  <FileText className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Required Docs</h3>
                  <p className="text-sm text-slate-500">
                    Required documents for the selected destination
                  </p>
                </div>
              </div>

              {requiredDocs.length > 0 ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  {requiredDocs.map((doc, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      {doc}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-8 text-center text-sm text-slate-500">
                  Select a destination to view required documents.
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-emerald-100 p-2">
                  <Globe2 className="h-5 w-5 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Choose Service</h3>
                  <p className="text-sm text-slate-500">
                    Pick how you want to continue
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setServiceType("online")}
                  className={`w-full rounded-2xl border px-4 py-4 text-left transition ${
                    serviceType === "online"
                      ? "border-blue-600 bg-blue-50"
                      : "border-slate-200 bg-white hover:border-blue-300"
                  }`}
                >
                  <div className="font-semibold text-slate-900">Apply Online</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Submit your application digitally
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setServiceType("doorstep")}
                  className={`w-full rounded-2xl border px-4 py-4 text-left transition ${
                    serviceType === "doorstep"
                      ? "border-emerald-600 bg-emerald-50"
                      : "border-slate-200 bg-white hover:border-emerald-300"
                  }`}
                >
                  <div className="flex items-center gap-2 font-semibold text-slate-900">
                    <Truck className="h-4 w-4" />
                    Take Doorstep Service
                  </div>
                  <div className="mt-1 text-sm text-slate-500">
                    Get assisted collection and support at your location
                  </div>
                </button>
              </div>

              <button
                disabled={!isFormReady}
                onClick={() =>
                  onProceed?.({
                    currentResidence,
                    nationality,
                    destination,
                    visaType,
                    serviceType,
                  })
                }
                className={`mt-5 flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-bold transition ${
                  isFormReady
                    ? "bg-slate-900 text-white hover:opacity-90"
                    : "cursor-not-allowed bg-slate-200 text-slate-400"
                }`}
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type SelectBoxProps = {
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: string[];
  placeholder: string;
};

function SelectBox({
  label,
  value,
  onChange,
  options,
  placeholder,
}: SelectBoxProps) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className="w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 py-4 pr-11 text-sm font-medium text-slate-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        >
          <option value="">{placeholder}</option>
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      </div>
    </div>
  );
}