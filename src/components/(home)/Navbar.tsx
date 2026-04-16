"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Activity, ArrowRight, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 transition-all duration-500 md:px-10 md:py-4">
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border transition-all duration-500 ${
            scrolled
              ? "border-zinc-800 bg-zinc-950 shadow-2xl py-2 px-4 md:py-3 md:px-6"
              : "border-zinc-800/30 bg-zinc-950/50 backdrop-blur-md py-4 px-6 md:py-5 md:px-8"
          }`}
        >
          {/* Brand & Live Pulse */}
          <Link href="/" className="group flex items-center gap-3 md:gap-4">
            <div className="relative flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 transition-colors group-hover:border-blue-500/50">
              <div className="relative h-8 w-8 md:h-10 md:w-10">
                <Image
                  src="/logo.png"
                  alt="VisaSlide"
                  fill
                  sizes="(max-width: 768px) 20px, 24px" // Precise sizing for h-5 (20px) and h-6 (24px)
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 md:gap-2">
                <h1 className="text-base md:text-lg font-black tracking-tighter text-white uppercase italic leading-none">
                  Visa<span className="text-blue-500">Slide</span>
                </h1>
                <div className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                </div>
              </div>
              <span className="text-[7px] md:text-[8px] font-black text-zinc-500 tracking-[.2em] md:tracking-[.3em] uppercase">
                Automated Center
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
                    isActive ? "text-white" : "text-zinc-500 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeGlow"
                      className="absolute inset-0 bg-zinc-900 border-b-2 border-blue-500 rounded-md"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden xl:flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2">
              <Activity className="h-3 w-3 text-blue-500 animate-pulse" />
              <span className="text-[9px] font-black text-blue-500 uppercase italic tracking-tighter">
                Live Systems
              </span>
            </div>

            <Link
              href="/register"
              className="relative hidden sm:flex h-9 md:h-10 items-center justify-center rounded-xl bg-zinc-100 px-5 md:px-6 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-zinc-950 hover:bg-blue-600 hover:text-white transition-all active:scale-95"
            >
              Start Submission
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all lg:hidden ${
                isOpen
                  ? "bg-blue-600 border-blue-500 text-white"
                  : "bg-zinc-900 border-zinc-800 text-zinc-400"
              }`}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col bg-zinc-950 pt-28 px-6 pb-10 lg:hidden"
          >
            {/* Mobile Menu Content */}
            <div className="flex flex-col h-full">
              <div className="space-y-1 mb-10">
                <p className="text-[10px] font-black text-blue-500 tracking-[.4em] uppercase">
                  Navigation
                </p>
                <div className="h-0.5 w-8 bg-zinc-800" />
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-4xl md:text-5xl font-black uppercase italic tracking-tighter flex items-center justify-between group ${
                        pathname === link.href ? "text-white" : "text-zinc-800"
                      }`}
                    >
                      <span>{link.name}</span>
                      {pathname === link.href && (
                        <ArrowRight className="text-blue-500 h-8 w-8" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Footer Info */}
              <div className="mt-auto space-y-6">
                <Link
                  href="/register"
                  className="flex w-full h-14 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-950 text-xs font-black uppercase tracking-widest shadow-xl active:scale-95 transition-transform"
                >
                  Start Submission
                </Link>

                <div className="flex items-center justify-between border-t border-zinc-900 pt-6">
                  <div className="flex items-center gap-2">
                    <Globe className="h-3 w-3 text-zinc-600" />
                    <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">
                      Doha / Dhaka / London
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest italic">
                      Encrypted
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
