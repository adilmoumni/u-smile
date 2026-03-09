"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Le Cabinet", href: "#about" },
  { label: "Notre Équipe", href: "#team" },
  { label: "Nos Équipements", href: "#equipments" },
  { label: "Nos Soins", href: "#services" },
  { label: "Nos Sourires", href: "#smiles" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ── Top Info Bar ── */}
      <div className="bg-[#96928E] text-white text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8">
          {/* Phone numbers */}
          <div className="flex items-center gap-5">
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
            <span className="uppercase tracking-wider">
              Lundi – Vendredi
            </span>
            <span className="w-8 h-px bg-white/30" />
            <span>8:30 – 18H30</span>
          </div>
        </div>
      </div>

      {/* ── Main Navigation Bar ── */}
      <nav className="bg-white dark:bg-[#1c1b18] border-b border-foreground/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          {/* Logo */}
          <a href="/" className="shrink-0">
            <Image
              src="/images/logos/USMILE LOGO Horizontal - Dark Taupe.svg"
              alt="U-Smile Orthodontie"
              width={150}
              height={44}
              className="dark:hidden"
              priority
            />
            <Image
              src="/images/logos/USMILE LOGO Horizontal - White.svg"
              alt="U-Smile Orthodontie"
              width={150}
              height={44}
              className="hidden dark:block"
              priority
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium uppercase tracking-[0.06em] text-foreground/65 hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side: CTA + FAQ */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#formations"
              className="rounded-full bg-dark-taupe dark:bg-white/10 px-5 py-2 text-[12px] font-semibold uppercase tracking-wider text-white hover:bg-dark-taupe/85 dark:hover:bg-white/20 transition-all duration-300"
            >
              U.Smile Formations
            </a>
            <a
              href="#faq"
              className="text-[13px] font-medium uppercase tracking-[0.06em] text-foreground/65 hover:text-foreground transition-colors duration-300 px-2"
            >
              FAQ
            </a>
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
            mobileOpen ? "max-h-[500px] border-t border-foreground/5" : "max-h-0"
          }`}
        >
          <div className="px-6 py-6 space-y-1 bg-white dark:bg-[#1c1b18]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground/70 hover:bg-spearmint/5 hover:text-accent transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-foreground/5 mt-3 flex flex-col gap-2">
              <a
                href="#formations"
                className="block rounded-xl bg-dark-taupe px-4 py-3 text-sm font-semibold text-white text-center"
              >
                U.Smile Formations
              </a>
              <a
                href="#faq"
                className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground/70 text-center hover:bg-foreground/5 transition-all"
              >
                FAQ
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
