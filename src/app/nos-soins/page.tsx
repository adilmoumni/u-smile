import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Nos Soins | U-Smile Orthodontie",
  description: "Découvrez nos traitements orthodontiques personnalisés et innovants.",
};

const soinsHub = [
  {
    title: "Consultation et Diagnostic",
    description: "La pierre angulaire de votre traitement : un bilan complet et technologique.",
    image: "/images/cabinet/radiology.png",
    href: "/nos-soins", // Keep on this page as it's the hero
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.25c-2.761 0-5.259 0.933-7.234 2.484a1.125 1.125 0 00-.411 1.054c.47 3.003 1.125 9.188 5.092 11.72a1.171 1.171 0 001.455 0c3.967-2.532 4.622-8.717 5.092-11.72a1.125 1.125 0 00-.411-1.054z" />
      </svg>
    )
  },
  {
    title: "Orthodontie & Orthopédie",
    description: "Accompagner le sourire à chaque étape de la vie, de l'enfance à l'âge adulte.",
    image: "/images/cabinet/treatment-room.png",
    href: "/nos-soins/orthodontie-et-orthopedie",
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M3 10c0-2 2-4 9-4s9 2 9 4" />
        <path d="M3 14c0 2 2 4 9 4s9-2 9-4" />
        <rect x="6" y="8" width="2" height="4" rx="0.5" />
        <rect x="11" y="8" width="2" height="4" rx="0.5" />
        <rect x="16" y="8" width="2" height="4" rx="0.5" />
      </svg>
    )
  },
  {
    title: "Stabilité & Réhabilitation",
    description: "Assurer la durabilité et l'équilibre des résultats fonctionnels.",
    image: "/images/cabinet/photography.png",
    href: "/nos-soins/stabilite-et-rehabilitation",
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M4 10c0-3 3-5 8-5s8 2 8 5" />
        <path d="M4 14c0 3 3 5 8 5s8-2 8-5" />
        <path d="M8 10h8M8 14h8" />
        <path d="M12 5v14" />
      </svg>
    )
  },
  {
    title: "Apnée du sommeil",
    description: "Améliorer votre respiration nocturne avec des solutions sur mesure.",
    image: "/images/cabinet/itero-scan.png",
    href: "/nos-soins/apnee-du-sommeil",
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M5 12a7 7 0 0114 0c0 4-3 7-7 7s-7-3-7-7z" />
        <path d="M9 12h6" />
        <path d="M12 12v4" />
        <path d="M8 8a4 4 0 018 0" />
      </svg>
    )
  }
];

export default function NosSoins() {
  return (
    <>
      <Header />
      
      <main className="pt-20">

        {/* Hero Section: Consultation & Diagnostic (Featured) */}
        <section className="py-24 bg-[#fdfcfb]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] bg-[#a59c94] min-h-[550px] flex flex-col lg:flex-row shadow-2xl">
              <div className="flex-1 p-10 lg:p-20 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
                    {soinsHub[0].icon}
                  </div>
                  <h2 className="text-2xl font-medium text-white font-serif uppercase tracking-wider">
                    {soinsHub[0].title}
                  </h2>
                </div>
                
                <h3 className="text-4xl lg:text-6xl font-light text-white mb-10 leading-tight font-serif">
                  Comprendre, <br /> analyser, personnaliser.
                </h3>
                
                <p className="text-white/80 font-light leading-relaxed mb-12 max-w-xl text-lg">
                  Chez U.Smile Orthodontie, la consultation initiale intègre un bilan orthodontique complet pour poser les bases d’un traitement sur mesure. Un examen clinique approfondi, une empreinte optique dentaire iTero en 3D, une prise de photographies et de radiographies ainsi qu’un bilan postural vous seront proposés.
                </p>
                <Link 
                  href="/nos-soins/consultation-et-diagnostic"
                  className="inline-flex items-center gap-3 bg-[#3a3a3a] text-white px-8 py-4 rounded-xl text-xs font-bold tracking-[0.2em] uppercase hover:bg-black transition-all duration-300"
                >
                  EN SAVOIR PLUS →
                </Link>
              </div>

              <div className="lg:w-[45%] relative min-h-[400px] lg:min-h-full">
                <Image
                  src={soinsHub[0].image}
                  alt={soinsHub[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>
          </div>
        </section>

        {/* Grid of Other Treatments */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {soinsHub.slice(1).map((soin, idx) => (
                <Link 
                  key={idx} 
                  href={soin.href}
                  className="group relative flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={soin.image}
                      alt={soin.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-dark-taupe/20 group-hover:bg-dark-taupe/40 transition-colors duration-500" />
                    <div className="absolute top-6 left-6 p-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 text-white">
                      {soin.icon}
                    </div>
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-serif text-dark-taupe mb-4">{soin.title}</h3>
                      <p className="text-dark-taupe/60 font-light leading-relaxed mb-6">
                        {soin.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center text-accent font-bold text-xs uppercase tracking-widest gap-2 group-hover:gap-4 transition-all duration-300">
                      En savoir plus <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <AppointmentForm />
      </main>

      <Footer />
    </>
  );
}
