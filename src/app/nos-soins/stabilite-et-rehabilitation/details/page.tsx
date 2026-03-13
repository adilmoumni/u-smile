import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Stabilité et Réhabilitation - Détails | U-Smile Orthodontie",
  description: "Détails sur la stabilité du traitement et la réhabilitation fonctionnelle.",
};

export default function StabiliteDetailsPage() {
  return (
    <>
      <Header />

      <main className="pt-20 bg-white min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">

          {/* Section 1: Stabilité du traitement */}
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-10">
              <Image
                src="/images/icon/steps/empty-gray.svg"
                alt="Stabilité du traitement"
                width={60}
                height={60}
              />
              <h1 className="text-4xl lg:text-5xl font-light text-[#393939] font-serif">
                Stabilité du traitement
              </h1>
            </div>

            <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 lg:p-16 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <div className="lg:col-span-7 order-2 lg:order-1 space-y-8">
                  <p className="text-[#393939]/80 font-light text-lg leading-relaxed">
                    La stabilité est une étape clé pour préserver durablement les résultats du traitement orthodontique.
                    <span className="font-bold"> Chez U.smile Orthodontie,</span> elle repose sur une approche personnalisée associant expertise clinique et technologies numériques avancées.
                  </p>
                  <p className="text-[#393939]/80 font-light text-lg leading-relaxed">
                    Selon les besoins, la contention est assurée par des gouttières nocturnes,
                    <span className="font-bold"> type Vivera®</span> ou gouttières thermoformées, et complétée par des fils de contentions collés à l&apos;intérieur des incisives.
                  </p>
                  <p className="text-[#393939]/80 font-light text-lg leading-relaxed">
                    Ces fils sont conçus sur mesure, avec une plieuse de fil de contention de dernière génération, assurant précision, confort et fiabilité afin de garantir une stabilité optimale à long terme.
                  </p>
                </div>
                <div className="lg:col-span-5 order-1 lg:order-2 relative h-[350px] flex justify-center items-center w-full lg:h-[450px]">
                  <Image
                    src="/images/stabilite_du_traitemeent.jpg"
                    alt="Stabilité du traitement"
                    fill
                    className="object-cover max-w-[400px]"
                    style={{ borderRadius: '0rem 12rem 0rem 12rem' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Réhabilitation fonctionnelle */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <Image
                src="/images/icon/steps/empty-gray.svg"
                alt="Stabilité du traitement"
                width={60}
                height={60}
              />              <h2 className="text-4xl lg:text-5xl font-light text-[#393939] font-serif">
                Réhabilitation fonctionnelle
              </h2>
            </div>

            <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 lg:p-16 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <div className="order-1 lg:col-span-7 space-y-8">
                  <p className="text-[#393939]/80 font-light text-lg leading-relaxed">
                    La réhabilitation fonctionnelle vise à rééquilibrer les fonctions orales telles que la mastication, la déglutition, la respiration ainsi que la posture corporelle.
                  </p>
                  <p className="text-[#393939]/80 font-light text-lg leading-relaxed">
                    En corrigeant ces déséquilibres, elle participe activement à la stabilité orthodontique, au confort du patient et à la santé globale du système oro-facial.
                  </p>
                  <p className="text-[#393939]/80 font-light text-lg leading-relaxed">
                    Cette approche complète permet d&apos;inscrire le traitement dans une vision intégrative et préventive.
                  </p>
                </div>
                <div className="order-2 lg:col-span-5 relative h-[350px] lg:h-[450px]">
                  <Image
                    src="/images/rehabilitation_fonctionnelle.jpg"
                    alt="Réhabilitation fonctionnelle"
                    fill
                    className="object-cover"
                    style={{ borderRadius: '0rem 12rem 0rem 12rem' }}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
