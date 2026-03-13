"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const carouselImages = [
  { src: "/images/cabinet/carousel/1.jpeg", alt: "Salle de traitement moderne" },
  { src: "/images/cabinet/carousel/2.jpeg", alt: "Scanner dentaire 3D" },
  { src: "/images/cabinet/carousel/3.jpeg", alt: "Couloir de la clinique" },
  { src: "/images/cabinet/carousel/4.jpeg", alt: "Zone de consultation" },
  { src: "/images/cabinet/carousel/5.jpeg", alt: "Zone de consultation" }
];

export default function CabinetCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="cabinet-carousel" className="bg-white pt-10 pb-6 sm:pt-14 sm:pb-10 overflow-hidden w-full relative">
      <div className="w-full">
        {/* Main Carousel Viewport - Using 100vw to ensure full page width */}
        <div className="relative flex items-center justify-center h-[390px] sm:h-[520px] lg:h-[640px] w-screen left-1/2 -ml-[50vw]">
          {carouselImages.map((image, index) => {
            let offset = index - currentIndex;

            // Handle Looping
            if (offset < -Math.floor(carouselImages.length / 2)) offset += carouselImages.length;
            if (offset > Math.floor(carouselImages.length / 2)) offset -= carouselImages.length;

            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            // Stacking and scaling to match the reference composition.
            let scale = 1;
            if (Math.abs(offset) === 1) scale = 0.74;
            if (Math.abs(offset) === 2) scale = 0.58;

            const opacity = 1 - Math.abs(offset) * 0.2;
            const zIndex = 30 - Math.abs(offset) * 10;

            // vw-based translateX for consistent 100% width coverage
            // Keep side cards visible while preserving center dominance.
            const translateX = offset * 19;

            return (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`absolute left-1/2 top-1/2 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer overflow-hidden rounded-2xl shadow-2xl ${
                  isCenter ? "shadow-dark-taupe/30" : "shadow-none"
                }`}
                style={{
                  transform: `translate(calc(-50% + ${translateX}vw), -50%) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  width: isCenter ? "min(84vw, 500px)" : "min(68vw, 380px)",
                  aspectRatio: "4/5",
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={`object-cover object-center transition-all duration-1000 ${!isCenter ? "blur-[1px] grayscale-[8%]" : ""}`}
                />
              </div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="mt-5 sm:mt-6 flex justify-center items-center gap-3">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full border transition-all duration-300 ${
                index === currentIndex
                  ? "bg-dark-taupe border-dark-taupe"
                  : "bg-transparent border-dark-taupe/35 hover:border-dark-taupe/55"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
