"use client";

import React from "react";

interface SectionBadgeProps {
  title: string;
  className?: string;
  light?: boolean;
}

export default function SectionBadge({ title, className = "", light = false }: SectionBadgeProps) {
  return (
    <span
      className={`inline-block rounded-lg border-[1.5px] uppercase font-bold tracking-[0.2em] transition-all 
        ${light 
          ? "border-white/20 text-white" 
          : "border-dark-taupe/20 text-dark-taupe"
        } 
        text-xs px-6 py-2 
        sm:text-sm sm:px-10 sm:py-3 
        mb-6 sm:mb-8 
        ${className}`}
    >
      {title}
    </span>
  );
}
