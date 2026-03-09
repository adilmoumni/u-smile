"use client";

import { useRef } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Un grand merci au cabinet du Dr Charafa Bennis. L&apos;accueil est chaleureux, le personnel très humain et à l&apos;écoute. On se sent accompagné avec beaucoup de professionnalisme et de bienveillance. Je recommande vivement !",
    author: "Ghita Agallal",
  },
  {
    text: "Superbe expérience au cabinet Usmile chez dr bennis. J&apos;avais un problème de mâchoire et d&apos;alignement Grâce a la technique des mini vices et Invisalign sans passer par la chirurgie mon sourire a été transformé grâce au dr bennis (professionnalisme et accompagnement à 100%) ",
    author: "Nouhayla Lyoubi",
  },
  {
    text: "Une équipe formidable et des résultats incroyables. Mon traitement Invisalign s&apos;est déroulé parfaitement et je ne pourrais pas être plus satisfaite de mon nouveau sourire. Merci à toute l&apos;équipe U-Smile !",
    author: "Karima B.",
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials" className="bg-[#fdfcfb] py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <span className="inline-block rounded-full bg-spearmint/10 border border-spearmint/20 px-4 py-1.5 text-xs font-semibold tracking-wider text-spearmint uppercase mb-6">
            TÉMOIGNAGES
          </span>
          <h2 className="text-4xl sm:text-5xl font-light text-dark-taupe leading-tight font-serif">
            Nos patients <span className="italic">satisfaits</span>
          </h2>
        </div>

        <div className="relative">
          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="min-w-full sm:min-w-[450px] lg:min-w-[600px] snap-center bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-xl border border-gray-50 relative flex flex-col justify-between"
              >
                <div className="absolute top-10 left-10 text-spearmint/20">
                  <Quote className="w-16 h-16 fill-current" />
                </div>
                
                <div className="relative z-10 pt-10">
                  <p className="text-lg lg:text-xl text-dark-taupe/80 leading-relaxed font-light mb-10 italic">
                    &ldquo; {t.text} &rdquo;
                  </p>
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-px bg-dark-taupe/20 mb-4"></div>
                  <p className="text-sm font-bold text-dark-taupe tracking-wider uppercase">
                    {t.author}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8 justify-center lg:justify-start lg:absolute lg:top-[-100px] lg:right-0">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-dark-taupe/20 flex items-center justify-center text-dark-taupe hover:bg-accent hover:border-accent hover:text-white transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-dark-taupe/20 flex items-center justify-center text-dark-taupe hover:bg-accent hover:border-accent hover:text-white transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
