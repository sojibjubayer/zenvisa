"use client";

import Link from "next/link";
import { LogIn } from "lucide-react";

export default function Navbar() { 
  return (
    <nav className="sticky top-0 z-50 bg-brand-dark/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto h-16 px-4 md:px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary shadow-[0_6px_20px_rgba(124,108,255,0.22)] flex items-center justify-center font-black text-white text-sm">
            V
          </div>
          <span className="text-lg md:text-xl font-semibold tracking-tight text-white">
            VisaSlide
          </span>
        </div>

        {/* Login Button */}
        <Link
          href="/login"
          className="inline-flex items-center gap-2 
          px-4 md:px-5 py-2 md:py-2.5 
          rounded-full 
          text-sm font-semibold 
          text-white 
          bg-white/5 border border-white/10 
          hover:bg-white/8 
          shadow-[0_4px_20px_rgba(0,0,0,0.25)]
          transition-all duration-200 
          active:scale-[0.97]"
        >
          <LogIn className="w-4 h-4" />
          <span className="hidden sm:inline">Login</span>
        </Link>

      </div>
    </nav>
  );
}