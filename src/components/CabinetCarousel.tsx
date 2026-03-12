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
    <section className="bg-white py-24 sm:py-32 overflow-hidden w-full">
      <div className="relative w-full">
        {/* Main Carousel Viewport */}
        <div className="relative flex items-center justify-center h-[500px] sm:h-[700px] w-full overflow-hidden">
          {carouselImages.map((image, index) => {
            let offset = index - currentIndex;
            
            // Handle Looping
            if (offset < -Math.floor(carouselImages.length / 2)) offset += carouselImages.length;
            if (offset > Math.floor(carouselImages.length / 2)) offset -= carouselImages.length;

            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            // Stacking and Scaling
            const scale = isCenter ? 1 : 0.85;
            const opacity = isCenter ? 1 : 0.6;
            const zIndex = 30 - Math.abs(offset) * 10;
            const translateX = offset * 25; // Smaller multiplier for overlap

            return (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`absolute transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer overflow-hidden rounded-[2rem] sm:rounded-[4rem] shadow-2xl ${
                  isCenter ? "shadow-dark-taupe/20" : "shadow-none"
                }`}
                style={{
                  transform: `translateX(${translateX}%) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  width: "min(90%, 550px)",
                  aspectRatio: "4/5",
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={`object-cover transition-all duration-700 ${!isCenter ? "blur-[2px] grayscale-[20%]" : ""}`}
                />
              </div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="mt-12 sm:mt-20 flex justify-center items-center gap-4">
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
                className={`absolute inset-0 rounded-full border border-dark-taupe/30 transition-all duration-500 ${
                  index === currentIndex ? "scale-[1.5] border-dark-taupe" : "scale-100"
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
