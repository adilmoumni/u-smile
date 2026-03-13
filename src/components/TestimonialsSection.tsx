"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    text: "La pédagogie de Dr Bennis est remarquable. Les concepts sont clairs, structurés et applicables immédiatement en clinique.",
    author: "Dr Assia",
    role: "Chirurgien-dentiste",
  },
  {
    text: "Une formation marquée par une grande générosité dans le partage d&apos;expérience, bien au-delà du programme annoncé.",
    author: "Dr Malika",
    role: "Orthodontiste",
  },
  {
    text: "La richesse et la diversité des cas cliniques apportent une vision concrète et réaliste de la pratique orthodontique.",
    author: "Dr Salwa",
    role: "Chirurgien-dentiste",
  },
  {
    text: "Je n&apos;utilisais pas les aligneurs chez l&apos;enfant avant cette formation. Les cas présentés m&apos;ont permis d&apos;en comprendre les indications et de les intégrer en toute sécurité.",
    author: "Dr Idriss",
    role: "Chirurgien-dentiste",
  },
  {
    text: "La prise en charge orthodontique de l&apos;enfant est abordée avec une grande justesse, notamment sur la croissance et le bon timing thérapeutique.",
    author: "Dr Rita",
    role: "Chirurgien-dentiste",
  },
  {
    text: "Une formation qui a enrichi ma pratique quotidienne, avec des enseignements concrets et directement transposables.",
    author: "Dr Chadi",
    role: "Chirurgien-dentiste",
  },
  {
    text: "L&apos;approche de Dr Bennis est profondément bienveillante. Elle prend le temps d&apos;accompagner chaque praticien, dans un climat à la fois exigeant et respectueux.",
    author: "Dr Nabil",
    role: "Chirurgien-dentiste",
  },
  {
    text: "La formation met en lumière l&apos;apport du numérique tout en rappelant clairement que l&apos;outil reste au service du clinicien. La planification demeure une décision médicale guidée par l&apos;expertise de l&apos;orthodontiste.",
    author: "Dr Ouafae",
    role: "Orthodontiste",
  },
  {
    text: "La digitalisation est abordée comme un véritable outil de précision clinique. Les flux numériques présentés permettent d&apos;optimiser le diagnostic et la planification, tout en gardant une maîtrise totale du traitement.",
    author: "Dr Moulay",
    role: "Orthodontiste",
  },
  {
    text: "L&apos;approche numérique enseignée améliore clairement l&apos;expérience patient : meilleure compréhension du traitement, suivi plus fluide et communication plus efficace, sans jamais perdre la dimension humaine du soin.",
    author: "Dr Saâd",
    role: "Chirurgien-dentiste",
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
          <span className="inline-block rounded-lg bg-white border-[0.5px] text-dark-taupe px-4 py-1.5 text-xs font-semibold tracking-wider text-dark-taupe uppercase mb-6">
            TÉMOIGNAGES
          </span>
          <h2 className="text-4xl sm:text-5xl font-light text-dark-taupe leading-tight">
            Témoignages Participants
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
                className="min-w-full sm:min-w-[450px] lg:min-w-[600px] snap-center rounded-xl p-8 lg:p-12 bg-[#F4F5F7] relative flex flex-col justify-between"
              >
                <div className="absolute top-10 left-10">
                 <Image
                 src="/images/icon/quote.svg"
                 alt="quote"
                 width={56}
                 height={47}
                 />
                </div>
                
                <div className="relative z-10 pt-14">
                  <p className="text-lg lg:text-xl text-[#393939] leading-relaxed font-light mb-10">
                    &ldquo; {t.text} &rdquo;
                  </p>
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-px bg-dark-taupe/20 mb-4"></div>
                  <p className="text-sm font-bold text-dark-taupe tracking-wider uppercase">
                    {t.author}
                  </p>
                  <p className="text-xs text-dark-taupe/70 mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8 justify-center lg:mt-0">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-dark-taupe/20 flex items-center justify-center text-dark-taupe hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 lg:absolute lg:left-[-60px] lg:top-1/2 lg:-translate-y-1/2"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-dark-taupe/20 flex items-center justify-center text-dark-taupe hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 lg:absolute lg:right-[-60px] lg:top-1/2 lg:-translate-y-1/2"
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
