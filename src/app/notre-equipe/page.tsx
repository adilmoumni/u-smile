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
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    content: "Notre équipe est composée de professionnels spécialisés, chacun intervenant à son niveau d'expertise pour garantir une prise en charge globale et cohérente :",
    list: ["Équipe d'accueil", "Assistantes dentaires qualifiées", "Coordinatrice de traitement", "Orthodontiste spécialiste"],
    secondaryText: "Cette organisation permet d'assurer un suivi fluide, structuré et personnalisé à chaque étape du traitement.",
  },
  {
    title: "Une expertise portée par l'expérience",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.25c-2.761 0-5.259 0.933-7.234 2.484a1.125 1.125 0 00-.411 1.054c.47 3.003 1.125 9.188 5.092 11.72a1.171 1.171 0 001.455 0c3.967-2.532 4.622-8.717 5.092-11.72a1.125 1.125 0 00-.411-1.054z" />
      </svg>
    ),
    content: "U.Smile Orthodontie s'appuie sur une expertise construite autour d'une pratique dédiée à l'orthodontie, exigeante et cohérente, commune à l'ensemble de ses centres. Chaque prise en charge repose sur une vision globale du sourire, du visage et des fonctions oro-faciales, intégrée dès la première consultation.\n\nÀ travers ses équipes et ses protocoles de soins, U.Smile Orthodontie a accompagné plus de 4 000 patients, en combinant expertise clinique, technologies numériques avancées et planification thérapeutique personnalisée. Cette approche structurée permet de proposer des traitements précis, évolutifs et adaptés aux besoins spécifiques de chaque patient, à tous les âges.\n\nSi le groupe s'appuie sur des outils digitaux de pointe, la réflexion médicale et la maîtrise clinique demeurent au cœur de chaque décision thérapeutique.",
  },
  {
    title: "Un accompagnement personnalisé à chaque étape",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
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
        <div className="space-y-24 pb-24">
           {teamSections.map((section, idx) => (
              <section key={idx} className="mx-auto max-w-7xl px-6 lg:px-8">
                 <div className="relative border border-dark-taupe/10 rounded-xl bg-white p-12 lg:p-20 transition-all duration-500">
                    <div className="absolute -top-10 left-12 lg:left-20 w-20 h-20 bg-[#a59c94] rounded-br-xl rounded-tl-full flex items-center justify-center shadow-lg">
                       {section.icon}
                    </div>
                    
                    <div className="pt-8">
                       <h3 className="text-3xl lg:text-4xl font-light text-dark-taupe font-serif mb-12">
                          {section.title}
                       </h3>
                       
                       <div className="grid lg:grid-cols-2 gap-12">
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
           ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
