"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SoinDetailProps {
  title: React.ReactNode;
  categoryTitle: string;
  description: string;
  secondaryDescription?: string;
  icon: React.ReactNode;
  btnText?: string;
  btnLink?: string;
  showButton?: boolean;
}

export default function SoinDetail({
  title,
  categoryTitle,
  description,
  secondaryDescription,
  icon,
  btnText = "EN SAVOIR PLUS",
  btnLink = "#",
  showButton = true,
}: SoinDetailProps) {
  return (
    <section className="py-24 bg-[#FDFCFB]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] bg-[#a59c94] min-h-[500px] flex flex-col lg:flex-row shadow-2xl">
          {/* Left Side: Text */}
          <div className="flex-1 p-10 lg:p-20 flex flex-col justify-center">
            <div className="mb-8">
              {/* Top Right "Badge" inside the card on mobile, but positioned relative to the card */}
              <div className="flex items-center justify-between lg:justify-start gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
                    {icon}
                  </div>
                  <h2 className="text-xl lg:text-2xl font-medium text-white/90 font-serif">
                    {categoryTitle}
                  </h2>
                </div>
              </div>
              
              <h3 className="text-4xl lg:text-6xl font-light text-white mb-10 leading-[1.1] font-serif">
                {title}
              </h3>
              
              <div className="space-y-6 max-w-xl">
                <p className="text-white/80 font-light leading-relaxed text-lg">
                  {description}
                </p>
                {secondaryDescription && (
                  <p className="text-white/80 font-light leading-relaxed text-lg">
                    {secondaryDescription}
                  </p>
                )}
              </div>
              
              {showButton && (
                <div className="mt-12">
                  <Link
                    href={btnLink}
                    className="inline-flex items-center gap-3 bg-[#3a3a3a] text-white px-8 py-4 rounded-xl text-xs font-bold tracking-[0.2em] uppercase hover:bg-black transition-all duration-300 group"
                  >
                    {btnText}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Icon Badge Overlay for Desktop - Top Right */}
          <div className="hidden lg:block absolute top-12 right-12 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 w-64">
            <div className="mb-4 text-white">
              {icon}
            </div>
            <p className="text-white text-lg font-serif leading-tight">
              {categoryTitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
