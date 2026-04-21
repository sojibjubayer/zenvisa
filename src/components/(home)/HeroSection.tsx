"use client";

import {
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Globe2,
  Briefcase,
  MapPin,
  PlaneTakeoff,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

type VisaType = "visit" | "work";

export default function HeroSection() {
  const [currentResidence, setCurrentResidence] = useState("");
  const [destination, setDestination] = useState("");
  const [visaType, setVisaType] = useState<VisaType | "">("");

  const residences = [
    "Qatar",
    "UAE",
    "Saudi Arabia",
    "Oman",
    "Kuwait",
    "Bahrain",
    "India",
    "Bangladesh",
    "Pakistan",
  ];

  const destinations = [
    "Switzerland",
    "Germany",
    "Italy",
    "France",
    "Spain",
    "United Kingdom",
    "Canada",
    "Australia",
  ];

  const isFormReady = Boolean(currentResidence && destination && visaType);

  const handleContinue = () => {
    if (!isFormReady) return;

    const visaSlug = visaType === "visit" ? "visit-visa" : "work-visa";
    const fromSlug = currentResidence.toLowerCase().replace(/\s+/g, "-");
    const toSlug = destination.toLowerCase().replace(/\s+/g, "-");

    window.location.href = `/${fromSlug}-to-${toSlug}-${visaSlug}`;
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8fafc] px-4 pb-20 pt-24 md:pt-32">
      {/* Soft Ambient Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3b82f615,transparent_50%)]" />
        <div className="absolute left-1/2 top-0 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md"
        >
          <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-600">
            Secure Processing 2026
          </span>
        </motion.div>

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-7xl">
            Visa applications,{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                made effortless.
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-2 left-0 -z-10 h-3 w-full bg-blue-100/50"
              />
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg">
            Skip the paperwork maze. Get a personalized roadmap for your travel
            or work goals in under 60 seconds.
          </p>
        </div>

        {/* Main Card */}
        <motion.div
          layout
          className="mt-12 overflow-hidden rounded-[2.5rem] border border-slate-200/60 bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] md:mt-16"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left Side */}
            <div className="flex-1 p-6 md:p-12 lg:border-r lg:border-slate-100">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <SelectBox
                  icon={<MapPin className="h-4 w-4" />}
                  label="I am currently in"
                  value={currentResidence}
                  onChange={(e) => setCurrentResidence(e.target.value)}
                  options={residences}
                  placeholder="Select Origin"
                />

                <SelectBox
                  icon={<PlaneTakeoff className="h-4 w-4" />}
                  label="I want to go to"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  options={destinations}
                  placeholder="Select Destination"
                />
              </div>

              <div className="mt-10 space-y-4">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-400">
                  Select Visa Category
                </label>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <VisaTypeButton
                    active={visaType === "visit"}
                    onClick={() => setVisaType("visit")}
                    icon={<Globe2 className="h-5 w-5" />}
                    title="Visit Visa"
                    desc="Tourism & Family"
                  />

                  <VisaTypeButton
                    active={visaType === "work"}
                    onClick={() => setVisaType("work")}
                    icon={<Briefcase className="h-5 w-5" />}
                    title="Work Visa"
                    desc="Employment & Work Permit"
                  />
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full bg-slate-50/60 p-6 md:p-10 lg:w-[360px]">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Your Visa Guide
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Review your selection before continuing to your personalized
                    page.
                  </p>

                  <div className="mt-6 space-y-4">
                    {[
                      {
                        label: "Leaving From",
                        val: currentResidence,
                        icon: <MapPin className="h-4 w-4" />,
                      },
                      {
                        label: "Going To",
                        val: destination,
                        icon: <PlaneTakeoff className="h-4 w-4" />,
                      },
                      {
                        label: "Visa Type",
                        val:
                          visaType === "visit"
                            ? "Visit Visa"
                            : visaType === "work"
                            ? "Work Visa"
                            : "",
                        icon: <ShieldCheck className="h-4 w-4" />,
                      },
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-3.5">
                        <div
                          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                            step.val
                              ? "border-blue-200 bg-blue-50 text-blue-600"
                              : "border-slate-200 bg-white text-slate-300"
                          }`}
                        >
                          {step.val ? (
                            <CheckCircle2 className="h-4 w-4" />
                          ) : (
                            step.icon
                          )}
                        </div>

                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            {step.label}
                          </p>
                          <p
                            className={`text-sm font-semibold ${
                              step.val
                                ? "text-slate-900"
                                : "italic text-slate-300"
                            }`}
                          >
                            {step.val || "Not selected"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleContinue}
                  disabled={!isFormReady}
                  className={`group mt-8 flex w-full items-center justify-center gap-3 rounded-2xl py-4 text-sm font-bold transition-all duration-300 ${
                    isFormReady
                      ? "bg-blue-600 text-white shadow-xl shadow-blue-600/20 hover:bg-blue-700"
                      : "cursor-not-allowed bg-slate-200 text-slate-400"
                  }`}
                >
                  Continue to Visa Guide
                  <ArrowRight
                    className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${
                      !isFormReady ? "opacity-50" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function VisaTypeButton({
  active,
  onClick,
  icon,
  title,
  desc,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      type="button"
      onClick={onClick}
      className={`relative flex items-center gap-4 overflow-hidden rounded-2xl border-2 p-4 text-left transition-all ${
        active
          ? "border-blue-600 bg-blue-50/30 ring-4 ring-blue-50"
          : "border-slate-100 bg-white shadow-sm hover:border-slate-200"
      }`}
    >
      <div
        className={`rounded-xl p-2.5 ${
          active ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-400"
        }`}
      >
        {icon}
      </div>

      <div>
        <div
          className={`text-sm font-bold ${
            active ? "text-blue-900" : "text-slate-700"
          }`}
        >
          {title}
        </div>
        <div className="text-xs font-medium text-slate-400">{desc}</div>
      </div>

      {active && (
        <motion.div layoutId="active-pill" className="absolute right-4">
          <CheckCircle2 className="h-5 w-5 text-blue-600" />
        </motion.div>
      )}
    </motion.button>
  );
}

function SelectBox({
  label,
  value,
  onChange,
  options,
  placeholder,
  icon,
}: {
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: string[];
  placeholder: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group space-y-2.5">
      <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 transition-colors group-focus-within:text-blue-600">
        {label}
      </label>

      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-blue-600">
          {icon}
        </div>

        <select
          value={value}
          onChange={onChange}
          className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50/30 py-4 pl-11 pr-11 text-sm font-bold text-slate-900 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
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