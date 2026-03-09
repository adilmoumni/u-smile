"use client";

import Image from "next/image";

interface DoctorProfileProps {
  name: string;
  titles: string[];
  bio: string[];
  image: string;
  isReversed?: boolean;
}

function DoctorProfile({ name, titles, bio, image, isReversed }: DoctorProfileProps) {
  // Split name into first part and second part for the serif styling
  const nameParts = name.split(" ");
  const firstName = nameParts.slice(0, 2).join(" "); // e.g., "Dr Charafa" or "Dr Lina"
  const lastName = nameParts.slice(2).join(" "); // e.g., "Bennis Hamoumi"

  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-20 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
      {/* Left: Image with Stylized U */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <div className="relative w-full max-w-[500px] aspect-square">
          {/* Stylized U Background - Using the brand logo as a watermark/mask effect */}
          <div className="absolute inset-0 z-0 opacity-20 transform translate-x-[-10%] scale-110 select-none pointer-events-none">
            <Image
              src="/images/logos/USMILE LOGO Cicrular - Dark Taupe.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          
          {/* Doctor Portrait */}
          <div className="relative z-10 w-full h-full rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-2xl">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Decorative element - Small spearmint circle */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-spearmint/10 rounded-full blur-2xl z-0"></div>
        </div>
      </div>

      {/* Right: Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h2 className="text-4xl lg:text-5xl font-light text-[#393939] mb-8 leading-tight font-serif">
            {firstName} <br />
            <span className="text-[#393939]/80 italic">{lastName}</span>
          </h2>

          <div className="space-y-6">
            <div className="space-y-1">
              {titles.map((title, idx) => (
                <p key={idx} className={`text-sm tracking-wide uppercase font-bold text-[#393939] ${idx === 0 ? '' : 'text-[#393939]/70'}`}>
                  {title}
                </p>
              ))}
            </div>

            <div className="space-y-6">
              {bio.map((paragraph, idx) => (
                <p key={idx} className="text-foreground/70 leading-relaxed font-light text-sm lg:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const doctors = [
    {
      name: "Dr Charafa Bennis Hamoumi",
      titles: [
        "Orthodontiste – Fondatrice de U.smile Orthodontie",
        "Diplômée de l'Université Paul Sabatier – Toulouse"
      ],
      bio: [
        "Orthodontiste de référence avec plus de 35 ans d’expérience en orthodontie exclusive, le Dr Bennis a accompagné plus de 4 000 patients à chaque étape de leur traitement orthodontique, avec une exigence constante de précision et de qualité de soin.",
        "Animée par une démarche continue d’apprentissage et d’excellence, elle intègre depuis de nombreuses années les évolutions majeures de l’orthodontie moderne au sein de sa pratique. Certifiée Invisalign en 2011, elle a traité près de 2 000 patients par aligneurs transparents, tout en conservant une parfaite maîtrise des techniques orthodontiques conventionnelles.",
        "Mentor et Speaker international Invisalign, elle s’investit également dans la transmission de son expertise à travers la direction de diplômes universitaires, contribuant activement au développement des meilleures pratiques en orthodontie digitale.",
        "Sa pratique repose sur une approche globale et intégrative, prenant en compte les fonctions oro-faciales, la posture, la croissance faciale, l'esthétique du sourire et l'équilibre du visage. Elle s'inscrit dans une orthodontie moderne, digitale et personnalisée, combinant analyse numérique avancée et planification 3D, tout en restant guidée par une exigence clinique rigoureuse, où la décision thérapeutique demeure avant tout humaine et médicale."
      ],
      image: "/images/team/dr-charafa.jpeg",
      isReversed: false
    },
    {
      name: "Dr Lina Hamoumi Khanoufi",
      titles: [
        "Orthodontiste – U.smile Orthodontie Bouskoura",
        "Diplômée de la FGSOCO Paris"
      ],
      bio: [
        "Le Dr Lina Hamoumi Khanoufi exerce l’orthodontie avec une vision résolument moderne, précise et personnalisée. Formée aux approches les plus avancées, elle a complété son parcours par un Master Invisalign à Paris, un Master Expert Invisalign, un Master en Réhabilitation Neuro-Occlusale (RNO) à Valence ainsi qu’un Master DAMON à Madrid, consolidant ainsi une expertise approfondie en orthodontie digitale et fonctionnelle.",
        "Depuis 2022, elle met en œuvre une approche orthodontique intégrative, prenant en considération l’équilibre oro-facial, la fonction, l’esthétique du sourire et l’harmonie globale du visage. Chaque plan de traitement est conçu avec rigueur et précision, alliant analyse numérique avancée et décision clinique réfléchie, toujours guidée par une vision médicale avant tout humaine.",
        "Forte de plus de trois années d’expérience au sein de U.smile Orthodontie à Casa Anfa, elle s’inscrit dans la continuité d’une orthodontie d’excellence, moderne et personnalisée, où innovation technologique et exigence clinique avancent de pair."
      ],
      image: "/images/team/dr-lina.jpeg",
      isReversed: true
    }
  ];

  return (
    <section id="team" className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="divide-y divide-dark-taupe/10">
          {doctors.map((doctor, idx) => (
            <DoctorProfile key={idx} {...doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}
