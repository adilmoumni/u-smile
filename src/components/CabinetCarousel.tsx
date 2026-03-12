"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const carouselImages = [
  { src: "/images/cabinet/treatment-room.png", alt: "Salle de traitement moderne" },
  { src: "/images/cabinet/scanner-3d.png", alt: "Scanner dentaire 3D" },
  { src: "/images/cabinet/hallway.png", alt: "Couloir de la clinique" },
  { src: "/images/cabinet/consultation.png", alt: "Zone de consultation" },
  { src: "/images/cabinet/itero-scan.png", alt: "Empreinte numérique iTero" },
  { src: "/images/cabinet/ortho-podo.png", alt: "Zone d'orthodontie" },
  { src: "/images/cabinet/radiology.png", alt: "Zone de radiologie" },
];

export default function CabinetCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden w-full relative">
      <div className="w-full">
        {/* Main Carousel Viewport - Using 100vw to ensure full page width */}
        <div className="relative flex items-center justify-center h-[500px] sm:h-[800px] w-screen left-1/2 -ml-[50vw]">
          {carouselImages.map((image, index) => {
            let offset = index - currentIndex;
            
            // Handle Looping
            if (offset < -Math.floor(carouselImages.length / 2)) offset += carouselImages.length;
            if (offset > Math.floor(carouselImages.length / 2)) offset -= carouselImages.length;

            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            // Stacking and Scaling based on exact User Request:
            // Center = 100% height (scale 1)
            // Sides = 70% height (scale 0.7)
            // Edge = 50% height (scale 0.5)
            let scale = 1;
            if (Math.abs(offset) === 1) scale = 0.7;
            if (Math.abs(offset) === 2) scale = 0.5;

            const opacity = 1 - Math.abs(offset) * 0.25;
            const zIndex = 30 - Math.abs(offset) * 10;
            
            // vw-based translateX for consistent 100% width coverage
            // Adjusted to 18vw to ensure 5 items are visible within the viewport
            const translateX = offset * 18; 

            return (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`absolute left-1/2 top-1/2 -translate-y-1/2 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer overflow-hidden rounded-2xl shadow-2xl ${
                  isCenter ? "shadow-dark-taupe/30" : "shadow-none"
                }`}
                style={{
                  transform: `translate(calc(-50% + ${translateX}vw), -50%) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  width: isCenter ? "min(90%, 550px)" : "min(80%, 450px)",
                  aspectRatio: "4/5",
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={`object-cover transition-all duration-1000 ${!isCenter ? "blur-[2px] grayscale-[15%]" : ""}`}
                />
              </div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="mt-2 sm:mt-4 flex justify-center items-center gap-4">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`group relative flex items-center justify-center rounded-full transition-all duration-500 ${
                index === currentIndex ? "w-4 h-4" : "w-3 h-3 hover:scale-125"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span 
                className={`absolute inset-0 rounded-full border border-dark-taupe/40 transition-all duration-500 ${
                  index === currentIndex ? "scale-[1.6] border-dark-taupe" : "scale-100"
                }`}
              />
              <span 
                className={`w-full h-full rounded-full transition-all duration-500 ${
                  index === currentIndex ? "bg-dark-taupe scale-100" : "bg-transparent scale-0"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
