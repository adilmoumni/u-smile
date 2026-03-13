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
      title: "Une équipe spécialisée",
      icon: "/images/icon/team/network.png",
      content: "Notre équipe est composée de professionnels spécialisés, chacun intervenant à son niveau d'expertise pour garantir une prise en charge globale et cohérente :",
      contentMobile: "Une équipe pluridisciplinaire unie pour votre sourire : accueil, assistantes qualifiées et praticiens spécialisés.",
      list: ["Équipe d'accueil", "Assistantes dentaires qualifiées", "Coordinatrice de traitement", "Orthodontiste spécialiste"],
      secondaryText: "Cette organisation permet d'assurer un suivi fluide, structuré et personnalisé à chaque étape du traitement.",
   },
   {
      title: "Une expertise de pointe",
      icon: "/images/icon/team/certificate.png",
      content: "U.Smile Orthodontie s'appuie sur une expertise construite autour d'une pratique dédiée à l'orthodontie, exigeante et cohérente, commune à l'ensemble de ses centres. Chaque prise en charge repose sur une vision globale du sourire, du visage et des fonctions oro-faciales, intégrée dès la première consultation.\n\nÀ travers ses équipes et ses protocoles de soins, U.Smile Orthodontie a accompagné plus de 4 000 patients, en combinant expertise clinique, technologies numériques avancées et planification thérapeutique personnalisée. Cette approche structurée permet de proposer des traitements précis, évolutifs et adaptés aux besoins spécifiques de chaque patient, à tous les âges.",
      contentMobile: "Fort de 4 000 patients accompagnés, U.Smile combine expertise clinique et technologies numériques pour des soins personnalisés et évolutifs.",
   },
   {
      title: "Un suivi personnalisé",
      icon: "/images/icon/team/handshake.png",
      content: "Chez U.Smile Orthodontie, l'accompagnement du patient constitue un véritable pilier de notre approche et un élément distinctif du cabinet. De la première consultation au suivi post-traitement, chaque étape du parcours est pensée pour offrir une expérience fluide, claire et rassurante.\n\nL'équipe accorde une attention particulière à l'écoute, à la pédagogie et à la disponibilité, afin que chaque patient comprenne son traitement, se sente guidé dans ses choix et accompagné tout au long de son évolution.",
      contentMobile: "De la première consultation au suivi final, nous privilégions l’écoute et la pédagogie pour un accompagnement serein et une relation de confiance.",
   },
];

export default function NotreEquipe() {
   return (
      <>
         <Header />

         <main className="pt-24 lg:pt-50">
            {/* Intro Visual */}
            <section className="bg-white py-12 lg:py-5 overflow-hidden">
               <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="relative rounded-2xl lg:rounded-lg bg-[#F2F2F2] px-8 lg:px-20 py-12 lg:py-0 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                     <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl lg:text-4xl font-light text-dark-taupe font-serif leading-tight mb-6 lg:mb-8">
                           Chez U.Smile Orthodontie,
                        </h2>
                        <p className="text-[#393939] font-light leading-relaxed text-lg max-w-2xl mx-auto lg:mx-0">
                           la prise en charge repose sur un travail d'équipe rigoureux, coordonné et humain. Chaque patient bénéficie d'un accompagnement attentif dans un cadre rassurant.
                        </p>
                     </div>
                     <div className="flex-1 relative w-full aspect-[4/3] lg:aspect-square max-w-[500px]">
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
            <div className="space-y-24 lg:space-y-32 pb-24">
               {teamSections.map((section, idx) => (
                  <section key={idx} className="mx-auto max-w-7xl px-6 lg:px-8">
                     <div className="relative">
                        {/* Header with Icon and Title */}
                        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6 lg:gap-8 mb-[-30px] lg:mb-[-40px] relative z-10 lg:pl-20">
                           <div className="w-20 h-20 lg:w-24 lg:h-40 flex items-center justify-center shrink-0">
                              <div className="w-full h-full flex items-center justify-center transform translate-y-8">
                                 <Image
                                    src={section.icon as string}
                                    alt="Icon"
                                    width={70}
                                    height={70}
                                    className="w-full h-full object-contain"
                                 />
                              </div>
                           </div>
                           <h3 className="text-2xl lg:text-5xl font-light text-dark-taupe font-serif mb-0 lg:mb-[40px] leading-tight text-center lg:text-left">
                              {section.title}
                           </h3>
                        </div>

                        {/* Main Card */}
                        <div className="border border-dark-taupe/10 rounded-2xl lg:rounded-xl bg-white p-8 lg:p-20 pt-16 lg:pt-20 shadow-sm relative z-0">
                           <div className="grid lg:grid-cols-[1fr,auto] gap-10 lg:gap-20 items-start">
                              <div className="space-y-6 lg:space-y-8">
                                 {/* Desktop Content */}
                                 <p className="hidden lg:block text-[#393939] font-light leading-relaxed text-xl whitespace-pre-line">
                                    {section.content}
                                 </p>
                                 {/* Mobile Content */}
                                 <p className="block lg:hidden text-[#393939] font-light leading-relaxed text-lg text-center lg:text-left">
                                    {section.contentMobile}
                                 </p>

                                 <div className="w-full h-px bg-dark-taupe/10 my-6 lg:my-10" />

                                 {section.secondaryText && (
                                    <p className="text-[#393939] font-light leading-relaxed text-lg max-w-4xl text-center lg:text-left">
                                       {section.secondaryText}
                                    </p>
                                 )}
                              </div>

                              {section.list && (
                                 <div className="w-full lg:min-w-[300px]">
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                                       {section.list.map((item, i) => (
                                          <li key={i} className="flex items-center gap-4 text-dark-taupe font-semibold text-base lg:text-lg">
                                             <div className="w-1.5 h-1.5 bg-dark-taupe rounded-full shrink-0" />
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
               ))}
            </div>
         </main>

         <Footer />
      </>
   );
}
