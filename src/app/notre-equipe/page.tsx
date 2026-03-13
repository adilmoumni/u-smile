import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm";
import Image from "next/image";

export const metadata = {
  title: "Notre Équipe | U-Smile Orthodontie",
  description: "Une équipe spécialisée dédiée à votre sourire.",
};

const teamSections = [
  {
    title: "Une équipe spécialisée dédiée à votre sourire",
    icon: "/images/icon/team/network.png",
    content: "Notre équipe est composée de professionnels spécialisés, chacun intervenant à son niveau d'expertise pour garantir une prise en charge globale et cohérente :",
    list: ["Équipe d'accueil", "Assistantes dentaires qualifiées", "Coordinatrice de traitement", "Orthodontiste spécialiste"],
    secondaryText: "Cette organisation permet d'assurer un suivi fluide, structuré et personnalisé à chaque étape du traitement.",
  },
  {
    title: "Une expertise portée par l'expérience",
    icon: "/images/icon/team/certificate.png",
    content: "U.Smile Orthodontie s'appuie sur une expertise construite autour d'une pratique dédiée à l'orthodontie, exigeante et cohérente, commune à l'ensemble de ses centres. Chaque prise en charge repose sur une vision globale du sourire, du visage et des fonctions oro-faciales, intégrée dès la première consultation.\n\nÀ travers ses équipes et ses protocoles de soins, U.Smile Orthodontie a accompagné plus de 4 000 patients, en combinant expertise clinique, technologies numériques avancées et planification thérapeutique personnalisée. Cette approche structurée permet de proposer des traitements précis, évolutifs et adaptés aux besoins spécifiques de chaque patient, à tous les âges.\n\nSi le groupe s'appuie sur des outils digitaux de pointe, la réflexion médicale et la maîtrise clinique demeurent au cœur de chaque décision thérapeutique.",
  },
  {
    title: "Un accompagnement personnalisé à chaque étape",
    icon: "/images/icon/team/handshake.png",
    content: "Chez U.Smile Orthodontie, l'accompagnement du patient constitue un véritable pilier de notre approche et un élément distinctif du cabinet. De la première consultation au suivi post-traitement, chaque étape du parcours est pensée pour offrir une expérience fluide, claire et rassurante.\n\nL'équipe accorde une attention particulière à l'écoute, à la pédagogie et à la disponibilité, afin que chaque patient comprenne son traitement, se sente guidé dans ses choix et accompagné tout au long de son évolution. Cette exigence dans la relation de soin permet de construire une relation de confiance durable, essentielle à la réussite thérapeutique et au confort du patient.",
  },
];

export default function NotreEquipe() {
  return (
    <>
      <Header />
      
      <main className="pt-50">
        {/* Intro Visual */}
        <section className="bg-white py-5 overflow-hidden">
           <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="relative rounded-lg lg:rounded-lg bg-[#F2F2F2] px-20 flex flex-col lg:flex-row items-center gap-16">
                 <div className="flex-1">
                    <h2 className="text-2xl lg:text-4xl font-light text-dark-taupe font-serif leading-tight mb-8">
                       Chez U.Smile Orthodontie,
                    </h2>
                    <p className="text-[#393939] font-light leading-relaxed text-lg max-w-2xl">
                       la prise en charge repose sur un travail d'équipe rigoureux, coordonné et humain. Chaque patient bénéficie d'un accompagnement attentif, dans un cadre rassurant, où l'écoute, la précision et la qualité des soins sont au cœur de notre démarche.
                    </p>
                 </div>
                 <div className="flex-1 relative w-full aspect-square max-w-[500px]">
                    <Image
                      src="/images/cabinet/clear-aligner-illustration.png"
                      alt="U-Smile Orthodontie - Expertise"
                      fill
                      className="object-contain"
                    />
                 </div>
              </div>
           </div>
        </section>

        {/* Content Sections */}
        <div className="space-y-32 pb-24">
           {teamSections.map((section, idx) => {
              if (idx === 0) {
                return (
                  <section key={idx} className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative">
                      {/* Header with Icon and Title */}
                      <div className="flex items-end gap-8 mb-[-2px] relative z-10">
                        <div className="w-32 h-32 lg:w-40 lg:h-40 bg-[#96928E] rounded-tl-[100px] flex items-center justify-center shrink-0 shadow-sm">
                           <div className="relative w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                             {/* Re-implementing the EXACT people network icon from the reference */}
                             <svg viewBox="0 0 100 100" className="w-full h-full text-white/90" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                               {/* Bottom Left Person */}
                               <circle cx="28" cy="70" r="10" />
                               <path d="M15 90 C 15 80, 41 80, 41 90" />
                               
                               {/* Bottom Right Person */}
                               <circle cx="72" cy="70" r="10" />
                               <path d="M59 90 C 59 80, 85 80, 85 90" />
                               
                               {/* Top Center Person */}
                               <circle cx="50" cy="30" r="10" />
                               <path d="M37 50 C 37 40, 63 40, 63 50" />
                               
                               {/* Connecting lines */}
                               <path d="M50 45 L 35 65" className="opacity-40" />
                               <path d="M50 45 L 65 65" className="opacity-40" />
                             </svg>
                           </div>
                        </div>
                        <h3 className="text-3xl lg:text-5xl font-light text-dark-taupe font-serif mb-6 leading-tight">
                           {section.title}
                        </h3>
                      </div>

                      {/* Main Card */}
                      <div className="border border-dark-taupe/10 rounded-xl rounded-tl-none bg-white p-12 lg:p-20 shadow-sm">
                        <div className="grid lg:grid-cols-[1fr,auto] gap-12 lg:gap-20 items-start mb-12">
                          <p className="text-[#393939] font-light leading-relaxed text-lg lg:text-xl max-w-2xl">
                             {section.content}
                          </p>
                          
                          {section.list && (
                             <div className="lg:min-w-[300px]">
                                <ul className="space-y-4">
                                   {section.list.map((item, i) => (
                                      <li key={i} className="flex items-center gap-4 text-dark-taupe font-semibold text-lg">
                                         <div className="w-1.5 h-1.5 bg-dark-taupe rounded-full" />
                                         {item}
                                      </li>
                                   ))}
                                </ul>
                             </div>
                          )}
                        </div>

                        <div className="w-full h-px bg-dark-taupe/10 mb-12" />

                        {section.secondaryText && (
                           <p className="text-[#393939] font-light leading-relaxed text-lg max-w-4xl">
                              {section.secondaryText}
                           </p>
                        )}
                      </div>
                    </div>
                  </section>
                );
              }

              return (
              <section key={idx} className="mx-auto max-w-7xl px-6 lg:px-8">
                 <div className="relative border border-dark-taupe/10 rounded-xl bg-white p-12 lg:p-20 transition-all duration-500">
                    <div className="absolute -top-10 left-12 lg:left-20 w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center">
                       <Image 
                         src={section.icon as string} 
                         alt="Icon" 
                         width={112} 
                         height={112} 
                         className="w-full h-full object-contain"
                       />
                    </div>
                    
                    <div className="pt-8">
                       <h3 className="text-3xl lg:text-4xl font-light text-dark-taupe font-serif mb-12">
                          {section.title}
                       </h3>
                       
                       <div className="grid gap-12">
                          <div className="space-y-8">
                             <p className="text-[#393939] font-light leading-relaxed whitespace-pre-line">
                                {section.content}
                             </p>
                             {section.secondaryText && (
                                <p className="text-[#393939] font-light leading-relaxed border-l-2 border-dark-taupe/20 pl-6">
                                   {section.secondaryText}
                                </p>
                             )}
                          </div>
                          
                          {section.list && (
                             <div className="bg-[#f8f7f5] rounded-3xl p-10 lg:p-14 border border-dark-taupe/5 h-fit">
                                <ul className="space-y-6">
                                   {section.list.map((item, i) => (
                                      <li key={i} className="flex items-center gap-4 text-dark-taupe font-medium">
                                         <div className="w-1.5 h-1.5 bg-dark-taupe rounded-full" />
                                         {item}
                                      </li>
                                   ))}
                                </ul>
                             </div>
                          )}
                       </div>
                    </div>
                 </div>
              </section>
              );
           })}
        </div>
      </main>

      <Footer />
    </>
  );
}
