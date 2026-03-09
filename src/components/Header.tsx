"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Le Cabinet", href: "/le-cabinet" },
  { label: "Notre Équipe", href: "/notre-equipe" },
  { label: "Nos Équipements", href: "/nos-equipements" },
  { label: "Nos Soins", href: "/nos-soins" },
  { label: "Nos Sourires", href: "/nos-sourires" },
  { label: "U.Smile Formations", href: "/u-smile-formations" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ── Top Info Bar ── */}
      <div className="bg-[#96928E] text-white text-[10px] sm:text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-2">
          {/* Phone numbers */}
          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href="tel:+212700722556"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              (212) 700-722556
            </a>
            <span className="hidden sm:flex items-center gap-1.5 text-white/50 uppercase tracking-wider">
              Fixe
              <a
                href="tel:+212522396210"
                className="text-white/80 normal-case hover:text-white transition-colors"
              >
                (212) 522-396210
              </a>
            </span>
          </div>

          {/* Business hours */}
          <div className="hidden md:flex items-center gap-2">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="uppercase tracking-wider text-[10px]">
              Lundi – Vendredi
            </span>
            <span className="w-8 h-px bg-white/30" />
            <span className="text-[10px]">8:30 – 18H30</span>
          </div>
        </div>
      </div>

      {/* ── Main Navigation Bar ── */}
      <nav className="bg-white border-b border-foreground/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
          {/* Logo */}
          <a href="/" className="shrink-0">
            <Image
              src="/images/logos/USMILE LOGO Horizontal - Dark Taupe.svg"
              alt="U-Smile Orthodontie"
              width={140}
              height={40}
              priority
              className="lg:w-[150px] lg:h-[44px]"
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 text-[12px] font-medium uppercase tracking-[0.05em] transition-all duration-300 rounded-lg ${
                    isActive 
                      ? "bg-black text-white" 
                      : "text-black hover:text-accent"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-[5px] p-2"
            aria-label="Ouvrir le menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className={`block w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-4 h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                mobileOpen ? "w-6 -rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileOpen ? "max-h-[600px] border-t border-foreground/5" : "max-h-0"
          }`}
        >
          <div className="px-6 py-6 space-y-1 bg-white">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-black text-white"
                      : "text-black hover:bg-black/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
