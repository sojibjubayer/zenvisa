"use client";

import Link from "next/link";
import { LogIn } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        className={`mx-auto flex h-17 w-full max-w-7xl items-center justify-between rounded-2xl border px-4 sm:px-5 lg:px-6 transition-all duration-300 ${
          scrolled
            ? "border-white/12 bg-brand-dark/75 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            : "border-white/8 bg-white/5 backdrop-blur-xl"
        }`}
      >
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 via-violet-500 to-violet-700 shadow-[0_12px_35px_rgba(99,102,241,0.4)]">
            <div className="absolute inset-px rounded-2xl bg-linear-to-br from-white/20 to-transparent" />
            <span className="relative text-sm font-black tracking-tight text-white">
              V
            </span>
          </div>

          <div className="min-w-0">
            <p className="truncate text-lg font-semibold tracking-tight text-white">
              VisaSlide
            </p>
            <p className="hidden text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40 sm:block">
              Global Visa Platform
            </p>
          </div>
        </Link>

        <Link
          href="/login"
          className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 sm:px-5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.22)] backdrop-blur-md transition-all duration-200 hover:border-white/20 hover:bg-white/12 active:scale-[0.98]"
        >
          <LogIn className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          <span className="hidden sm:inline">Login</span>
        </Link>
      </nav>
    </header>
  );
}