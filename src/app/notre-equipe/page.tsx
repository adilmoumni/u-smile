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
               {teamSections.map((section, idx) => (
                  <section key={idx} className="mx-auto max-w-7xl px-6 lg:px-8">
                     <div className="relative">
                        {/* Header with Icon and Title */}
                        <div className="flex items-end gap-8 mb-[-40px] relative z-10 pl-12 lg:pl-20">
                           <div className="w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center shrink-0">
                              <Image
                                 src={section.icon as string}
                                 alt="Icon"
                                 width={112}
                                 height={112}
                                 className="w-full h-full object-contain"
                              />
                           </div>
                           <h3 className="text-3xl lg:text-5xl font-light text-dark-taupe font-serif mb-[40px] leading-tight">
                              {section.title}
                           </h3>
                        </div>

                        {/* Main Card */}
                        <div className="border border-dark-taupe/10 rounded-xl bg-white p-12 lg:p-20 shadow-sm relative z-0">
                           <div className="grid lg:grid-cols-[1fr,auto] gap-12 lg:gap-20 items-start">
                              <div className="space-y-8">
                                 <p className="text-[#393939] font-light leading-relaxed text-lg lg:text-xl whitespace-pre-line">
                                    {section.content}
                                 </p>

                                 <div className="w-full h-px bg-dark-taupe/10 my-10" />

                                 {section.secondaryText && (
                                    <p className="text-[#393939] font-light leading-relaxed text-lg max-w-4xl">
                                       {section.secondaryText}
                                    </p>
                                 )}
                              </div>

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
