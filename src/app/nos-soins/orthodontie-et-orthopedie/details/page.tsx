import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Orthodontie et Orthopédie - Détails | U-Smile Orthodontie",
  description: "Détails sur les traitements orthodontiques pour tous les âges.",
};

export default function OrthodontieDetailsPage() {
  return (
    <>
      <Header />

      <main className="pt-20 bg-white min-h-screen">
        {/* Full-width Hero Banner with Organic Shape */}
        <section className="relative px-6 lg:px-8 pt-10 pb-20 overflow-hidden mt-20">
          <div className="mx-auto max-w-7xl relative">
            <div className="relative h-[400px] lg:h-[600px] w-full overflow-hidden border border-[#393939]"
              style={{ borderRadius: '0 15rem 0 15rem' }}>
              <Image
                src="/images/cabinet/consultation-hero.jpeg"
                alt="Orthodontie et Orthopédie Dento-Faciale"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Floating Badge */}
            <div className="absolute top-10 right-10 bg-white border border-[#393939] px-6 py-4 rounded-lg flex items-center gap-4 shadow-xl">
              <p className="text-[#393939] font-bold text-sm lg:text-base leading-tight">
                Orthodontie & Orthopédie <br /> Dento-Faciale
              </p>
              <div className="flex items-center justify-center"
              >
                <Image
                  src="/images/icon/home/orthodontie.svg"
                  alt="Orthodontie Icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-32">

          {/* Section 1: Pédiatrique (Numbered Card) */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <Image
                src="/images/icon/steps/1.svg"
                alt="Stabilité du traitement"
                width={60}
                height={60}
              />
              <div className="flex flex-col">
                <span className="text-[#393939]/60 text-sm font-bold uppercase tracking-wider">Pédiatrique, Enfant & Adolescent</span>
                <h2 className="text-3xl lg:text-4xl font-light text-[#393939] font-serif">
                  Prévention orthodontique & sensibilisation précoce :
                </h2>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 lg:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="relative h-[300px] lg:h-[500px] lg:col-span-5">
                  <Image
                    src="/mom.png"
                    alt="Prévention orthodontique"
                    fill
                    className="object-cover"
                    style={{ borderRadius: '0rem 10rem 0rem 10rem' }}
                  />
                </div>
                <div className="space-y-6 lg:col-span-7">
                  <p className="text-[#393939]/80 font-light text-lg">
                    <span className="font-bold">Chez U.smile Orthodontie,</span> la prévention orthodontique débute très tôt et fait partie intégrante de la sensibilisation réalisée en consultation. Certaines fonctions influencent directement la croissance des mâchoires — la fonction crée l'organe.
                  </p>
                  <p className="text-[#393939]/80 font-light text-lg italic border-t border-gray-100 pt-6">
                    Lors des consultations, une attention particulière est portée à :
                  </p>
                  <ul className="space-y-4 text-[#393939]/80 font-light text-lg">
                    <li>
                      <span className="font-bold">• L'allaitement</span>, qui favorise un développement harmonieux des mâchoires et de la musculature oro-faciale, par opposition à une succion artificielle prolongée.
                    </li>
                    <li>
                      <span className="font-bold">• La respiration nasale</span>, indispensable à une croissance équilibrée du visage et à une bonne posture.
                    </li>
                    <li>
                      <span className="font-bold">• Les habitudes orales</span> telles que la tétine ou la succion du pouce, peuvent modifier la position des dents et la forme des mâchoires.
                    </li>
                  </ul>
                  <p className="text-[#393939]/70 text-base italic mt-8">
                    Un dépistage précoce permet d'agir à temps et de limiter l'apparition de troubles plus complexes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Numbered Card */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <Image
                src="/images/icon/steps/2.svg"
                alt="Stabilité du traitement"
                width={60}
                height={60}
              />
              <div className="flex flex-col">
                <span className="text-[#393939]/60 text-sm font-bold uppercase tracking-wider">Pédiatrique, Enfant & Adolescent</span>
                <h2 className="text-3xl lg:text-4xl font-light text-[#393939] font-serif">
                  Traitement pédiatrique & enfant :
                </h2>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 lg:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="relative h-[300px] lg:h-[500px] lg:col-span-5 lg:order-1">
                  <Image
                    src="/images/firefy.png"
                    alt="Traitement pédiatrique"
                    fill
                    className="object-cover"
                    style={{ borderRadius: '0rem 10rem 0rem 10rem' }}
                  />
                </div>
                <div className="space-y-6 lg:col-span-7 lg:order-1">
                  <p className="text-[#393939]/80 font-light text-lg leading-relaxed">
                    Chez l'enfant, l'orthodontie repose sur une approche interceptive, combinant : un volet dentaire, visant à aménager l'espace pour l'éruption des dents permanentes et à prévenir des extractions ultérieures, un volet squelettique (orthopédie dento-faciale), permettant de corriger les décalages de croissance des mâchoires.
                  </p>
                  <div className="space-y-4 pt-6 border-t border-gray-100">
                    <p className="font-bold text-[#393939] text-lg">
                      Le traitement est généralement réalisé en deux phases :
                    </p>
                    <p className="text-[#393939]/80 font-light text-lg">
                      une 1ère phase chez l'enfant à partir de 7-8 ans pour guider et accompagner la croissance, puis une 2ème phase de traitement à l'adolescence (après l'arrivée de toutes les dents permanentes) pour finaliser l'alignement dentaire et coordonner les deux mâchoires entre elles.
                    </p>
                  </div>
                  <div className="pt-6">
                    <p className="text-[#393939]/60 italic font-medium mb-4">Les solutions proposées à cet âge incluent :</p>
                    <ul className="space-y-2 text-[#393939]/80 font-light text-lg">
                      <li>• Aligneurs Invisalign First</li>
                      <li>• Appareillages orthopédiques conventionnels type activateurs de croissance, disjoncteurs</li>
                      <li>• Appareillages fixes multi-attaches précoces : D-GAINER DAMON</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Numbered Card */}
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-8">
              <Image
                src="/images/icon/steps/3.svg"
                alt="Stabilité du traitement"
                width={60}
                height={60}
              />
              <div className="flex flex-col">
                <span className="text-[#393939]/60 text-sm font-bold uppercase tracking-wider">Pédiatrique, Enfant & Adolescent</span>
                <h2 className="text-3xl lg:text-4xl font-light text-[#393939] font-serif">
                  Traitement de l'adolescent
                </h2>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 lg:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="relative h-[300px] lg:h-[500px] lg:col-span-5">
                  <Image
                    src="/images/teen.jpg"
                    alt="Traitement adolescent"
                    fill
                    className="object-cover"
                    style={{ borderRadius: '0rem 10rem 0rem 10rem' }}
                  />
                </div>
                <div className="space-y-10 lg:col-span-7">
                  <p className="text-[#393939]/80 font-light text-lg">
                    À l'adolescence, la croissance est à son maximal mais commence à se ralentir dès l'âge de 13-14ans, mais reste toujours active. À cet âge, le traitement orthodontique se fait en une seule phase, visant à corriger simultanément : l'alignement des dents, et les déséquilibres squelettiques présents.
                  </p>

                  <div className="space-y-4">
                    <p className="font-bold text-[#393939] text-xl">Chez U.smile Orthodontie,</p>
                    <p className="text-[#393939]/80 font-light text-lg italic">le traitement pourra être réalisé par :</p>
                    <p className="text-[#393939]/80 font-light text-lg">
                      <span className="font-bold">• Appareillage fixes</span> multi-attaches auto ligaturantes nouvelle génération associés si nécessaire à des activateurs de croissance,
                    </p>
                    <p className="text-[#393939]/80 font-light text-lg">
                      <span className="font-bold">• Aligneurs Invisalign Teen</span>, intégrant des fonctionnalités spécifiques permettant la correction des problèmes squelettiques en même temps que l'alignement dentaire.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 p-8 text-[#393939]/80 text-start font-bold text-lg">
                Une attention particulière est également portée à la réhabilitation fonctionnelle (respiration, posture linguale, déglutition, mauvaises habitudes), essentielle pour assurer la stabilité des résultats dans le temps.
              </div>
            </div>
          </div>
        </section>

        {/* Adult Orthodontics Section */}
        <section className="bg-[#96928E] py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-16 px-4">
              <Image
                src="/images/icon/steps/empty-white.svg"
                alt="Stabilité du traitement"
                width={60}
                height={60}
              />
              <h2 className="text-4xl lg:text-5xl font-light text-white font-serif">
                Orthodontie de l'Adulte
              </h2>
            </div>

            <div className="relative w-full aspect-[21/9] mb-20 overflow-hidden"
              style={{ borderRadius: '0 12rem 0 12rem' }}>
              <Image
                src="/images/cabinet/adult-smile.jpg"
                alt="Orthodontie Adulte"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 text-white/90 font-light text-lg leading-relaxed">
              <div className="space-y-8">
                <p>
                  Les dents peuvent être déplacées orthodontiquement à tout âge, à condition que l'os et les gencives soient sains.
                  L'orthodontie de l'adulte permet de corriger les malpositions dentaires, de rétablir l'esthétique du sourire et de préserver ainsi la santé bucco-dentaire à long terme.
                </p>
              </div>
              <div className="space-y-10">
                <p>
                  Les traitements proposés chez U.smile Orthodontie sont discrets et personnalisés, réalisés soit par :
                </p>
                <div className="space-y-4">
                  <p><span className="font-bold italic">• Aligneurs Invisalign,</span></p>
                  <p><span className="font-bold italic">• Appareillages fixes</span> à multi-attaches auto-ligaturantes nouvelle génération en céramique transparente,</p>
                </div>
                <p className="text-sm italic text-white/70">
                  Un choix éclairé pourra être effectué en tenant compte des contraintes professionnelles, esthétiques et fonctionnelles propres à chaque patient adulte. Lorsque des décalages squelettiques importants sont présents, et que le patient souhaite les corriger, nous pouvons faire appel à une chirurgie orthognatique avec une préparation orthodontique préalable afin d'optimiser le résultat fonctionnel et esthétique global.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Senior Orthodontics Section */}
        <section className="bg-[#96928E] py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-16 px-4">
              <Image
                src="/images/icon/steps/empty-white.svg"
                alt="Stabilité du traitement"
                width={60}
                height={60}
              />
              <h2 className="text-4xl lg:text-5xl font-light text-white font-serif">
                Orthodontie du Senior
              </h2>
            </div>

            <div className="relative w-full aspect-[21/9] mb-20 overflow-hidden"
              style={{ borderRadius: '0 12rem 0 12rem' }}>
              <Image
                src="/images/cabinet/senior-smile.jpg"
                alt="Orthodontie Senior"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 text-white/90 font-light text-lg leading-relaxed">
              <div className="space-y-8">
                <p>
                  Chez le patient senior, l'orthodontie permet de corriger les migrations dentaires liées au temps, et s'inscrit dans une démarche de santé globale dont les objectifs principaux sont :
                </p>
              </div>
              <div className="space-y-10">
                <div className="space-y-4">
                  <p><span className="font-bold italic">• L'esthétique du sourire</span> et l'insertion sociale</p>
                  <p><span className="font-bold italic">• Le réalignement des dents</span> afin de faciliter l'hygiène bucco-dentaire, de mieux répartir les forces masticatoires et de limiter les surcharges sur certaines dents ou restaurations existantes assurant le maintien des dents sur les arcades</p>
                </div>
                <p className="text-base italic text-white/70">
                  Ces ajustements contribuent à préserver la santé des dents et des gencives, tout en favorisant une alimentation plus équilibrée. L'orthodontie peut également accompagner ou préparer des réhabilitations prothétiques, en créant des conditions optimales pour la pose de couronnes, de bridges ou d'implants.
                </p>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-white/80 text-base leading-relaxed">
                    Grâce aux techniques d'orthodontie moderne, les traitements chez le senior utilisent des forces douces et contrôlées, avec des durées optimisées, généralement limitées à quelques mois, afin d'assurer efficacité, confort et stabilité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
