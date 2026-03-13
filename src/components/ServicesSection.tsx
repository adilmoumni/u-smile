"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const services: { title: React.ReactNode; alt: string; icon: string, link: string }[] = [
  {
    title: (
      <>
        Consultation et
        <br />
        Diagnostic
      </>
    ),
    alt: "Consultation et Diagnostic",
    icon: "/images/icon/1.svg",
    link: "/nos-soins/consultation"
  },
  {
    title: (
      <>
        Stabilité
        <br />
        du traitement
        <br />
        et Réhabilitation
        <br />
        Fonctionnelle
      </>
    ),
    alt: "Stabilité du traitement et Réhabilitation Fonctionnelle",
    icon: "/images/icon/2.svg",
    link: "/nos-soins/stabilite-et-rehabilitation"
  },
  {
    title: (
      <>
        Orthodontie et
        <br />
        Orthopédie Dento-
        <br />
        Faciale
      </>
    ),
    alt: "Orthodontie et Orthopédie Dento-Faciale",
    icon: "/images/icon/2.svg",
    link: "/nos-soins/orthodontie-et-orthopedie"
  },
  {
    title: (
      <>
        Apnée
        <br />
        du sommeil
      </>
    ),
    alt: "Apnée du sommeil",
    icon: "/images/icon/3.svg",
    link: "/nos-soins/apnee-du-sommeil"
  },
];

export default function ServicesSection() {
  const router = useRouter();
  return (
    <section id="services" className="bg-[#a59c94] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <span className="inline-block rounded-lg border border-white/20 px-8 py-1.5 text-xs font-semibold tracking-wider text-white uppercase mb-6">
            NOS SOINS
          </span>
          <h2 className="text-4xl sm:text-5xl font-light text-white leading-tight font-serif max-w-2xl"
          >
            Accompagner <span className="font-bold">le sourire </span> à chaque étape de la vie.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              onClick={() => router.push(service.link)}
              className="group relative bg-white rounded-xl p-8 pt-12 min-h-[350px] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex justify-end relative mb-10 w-full">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[#F0FBFF] rounded-bl-full"></div>
                    <div className="relative text-dark-taupe/40 group-hover:text-accent transition-colors duration-500 z-10 w-12 h-12 flex items-center justify-center">
                      <Image
                        src={service.icon}
                        alt={service.alt}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <h3 
                  className="text-xl font-bold text-dark-taupe leading-snug mb-4"
                  style={{ fontFamily: 'var(--font-sofia-pro), sans-serif', fontStyle: 'normal' }}
                >
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
