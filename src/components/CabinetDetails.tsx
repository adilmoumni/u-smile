"use client";

import Image from "next/image";
import SectionBadge from "./SectionBadge";

export default function CabinetDetails() {
  return (
    <section className="bg-[#f2fbff] py-24 lg:py-32 overflow-hidden lg:mx-12 mx-6 rounded-xl mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top: Photo + Main Text */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <div className="relative">
            <div className="relative w-full aspect-[4/5] rounded-tr-[6rem] lg:rounded-tr-[15rem] rounded-bl-[6rem] lg:rounded-bl-[15rem] overflow-hidden">
              <Image
                src="/images/hero-clinic.png"
                alt="Cabinet U.Smile"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="mb-10">
              <SectionBadge title="A PROPOS DU CABINET" className="mb-6" />
              <h2 className="text-4xl lg:text-5xl font-light text-dark-taupe leading-tight font-serif mb-8">
                Chez U.Smile Orthodontie,
              </h2>
              <div className="space-y-6 text-[#393939] font-light leading-relaxed">
                <p>
                  l'orthodontie va bien au-delà de l'alignement dentaire et prend en compte l'esthétique du sourire en harmonie avec le visage de nos patients.
                </p>
                <p>
                  Nous accompagnons chaque patient avec une approche personnalisée, fondée sur l'écoute, la précision et la compréhension globale de ses besoins, à chaque étape de son parcours de soin.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle: Vision and Engagement */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-24">
          <div>
            <SectionBadge title="NOTRE VISION" className="mb-6" />
            <p className="text-[#393939] font-light leading-relaxed">
              Corriger un sourire, c'est aussi améliorer la posture, la fonction masticatoire, la respiration et la qualité de vie. Nous vous accompagnons à tout âge avec des solutions personnalisées, évolutives et adaptées à votre développement.
            </p>
          </div>
          <div>
            <SectionBadge title="NOTRE ENGAGEMENT" className="mb-6" />
            <p className="text-[#393939] font-light leading-relaxed">
              Offrir un suivi attentif et clair, expliquer chaque étape du traitement et proposer des solutions en adéquation avec les avancées actuelles de l'orthodontie. Parce qu'un sourire vaut plus que mille mots.
            </p>
          </div>
        </div>

        {/* Bottom: Values */}
        <div>
          <SectionBadge title="NOS VALEURS" className="mb-10" />
          <h3 className="text-4xl lg:text-5xl font-light text-dark-taupe font-serif mb-12 flex flex-wrap items-center gap-x-6 gap-y-4">
            Confiance <span className="w-2 h-2 bg-accent/30 rounded-full" /> Accompagnement <span className="w-2 h-2 bg-accent/30 rounded-full" /> Performance
          </h3>
          <div className="max-w-3xl space-y-8 text-[#393939] font-light leading-relaxed">
            <p>
              Chaque traitement est pensé sur mesure, dans un cadre où le dialogue, la pédagogie et l'exigence clinique sont essentiels pour construire une relation durable avec nos patients. L'accompagnement est personnalisé, afin que chaque patient se sente en confiance tout au long de son parcours.
            </p>
            <p>
              Aussi, l'intégration d'outils digitaux avancés permet de vous offrir une expérience plus confortable et de garantir des résultats précis et durables.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
