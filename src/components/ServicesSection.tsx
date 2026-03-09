"use client";

import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Consultation et Diagnostic",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M7 21h10M12 17v4" />
        <path d="M10 10c0-1.5 1-2.5 2-2.5s2 1 2 2.5-1 2.5-2 2.5" />
        <path d="M12 12.5v1" />
      </svg>
    ),
  },
  {
    title: "Stabilité du traitement et Réhabilitation Fonctionnelle",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M4 10c0-3 3-5 8-5s8 2 8 5" />
        <path d="M4 14c0 3 3 5 8 5s8-2 8-5" />
        <path d="M8 10h8M8 14h8" />
        <path d="M12 5v14" />
      </svg>
    ),
  },
  {
    title: "Orthodontie et Orthopédie Dento-Faciale",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M3 10c0-2 2-4 9-4s9 2 9 4" />
        <path d="M3 14c0 2 2 4 9 4s9-2 9-4" />
        <rect x="6" y="8" width="2" height="4" rx="0.5" />
        <rect x="11" y="8" width="2" height="4" rx="0.5" />
        <rect x="16" y="8" width="2" height="4" rx="0.5" />
      </svg>
    ),
  },
  {
    title: "Apnée du sommeil",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M5 12a7 7 0 0114 0c0 4-3 7-7 7s-7-3-7-7z" />
        <path d="M9 12h6" />
        <path d="M12 12v4" />
        <path d="M8 8a4 4 0 018 0" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#a59c94] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-semibold tracking-wider text-white uppercase mb-6">
            NOS SOINS
          </span>
          <h2 className="text-4xl sm:text-5xl font-light text-white leading-tight font-serif max-w-2xl">
            Accompagner le sourire à chaque étape de la vie.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-3xl p-8 pt-12 min-h-[320px] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="relative mb-10">
                  <div className="absolute inset-0 bg-blue-50/50 rounded-2xl -m-4 scale-110"></div>
                  <div className="relative text-dark-taupe/40 group-hover:text-accent transition-colors duration-500">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-dark-taupe leading-snug mb-4">
                  {service.title}
                </h3>
              </div>
              
              <div className="flex justify-end">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-dark-taupe/30 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
