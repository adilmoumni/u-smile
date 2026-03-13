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
        <div className="relative overflow-hidden rounded-lg lg:rounded-lg bg-[#a59c94] min-h-[500px] flex flex-col lg:flex-row">
          {/* Left Side: Text */}
          <div className="flex-1 p-10 lg:p-20 flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-4xl lg:text-6xl font-light text-white mb-10 leading-[1.1] font-serif mt-20">
                {title}
              </h3>

              <div className="space-y-6 max-w-3xl">
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
                    className="inline-flex items-center gap-3 bg-[#3a3a3a] text-white px-8 py-3 rounded-xl text-xs font-bold tracking-[0.2em] uppercase hover:bg-black transition-all duration-300 group"
                  >
                    {btnText}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Icon Badge Overlay for Desktop - Top Right */}
          <div className="hidden lg:flex absolute top-12 right-12 backdrop-blur-md p-8 w-64">
            {icon}
            <p className="text-white text-lg leading-tight">
              {categoryTitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
