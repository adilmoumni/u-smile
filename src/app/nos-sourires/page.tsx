import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Nos Sourires | U-Smile Orthodontie",
  description: "Découvrez les résultats de nos traitements orthodontiques avant et après.",
};

const SmileComparison = ({ avant, apres, category }: { avant: string, apres: string, category: string }) => (
  <div className="relative mb-20 last:mb-0 border border-dark-taupe/20 rounded-lg p-6 sm:p-10 pt-12 sm:pt-14 bg-white">
    {/* Category Label at Top Left Group Border */}
    <div className="absolute top-0 left-8 -translate-y-1/2 bg-white px-4">
      <h2 className="text-2xl font-bold text-dark-taupe font-serif"
        style={{ fontFamily: 'var(--font-sofia-pro), sans-serif', fontStyle: 'normal' }}
      >
        {category}
      </h2>
    </div>

    <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 sm:gap-10 items-stretch">
      {/* Avant Section */}
      <div className="space-y-6 flex flex-col items-center">
        <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden">
          <Image
            src={avant}
            alt={`${category} - Avant`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Vertical Divider (Desktop) */}
      <div className="hidden md:block w-px bg-dark-taupe/10 self-stretch" />

      {/* Après Section */}
      <div className="space-y-6 flex flex-col items-center">
        <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden">
          <Image
            src={apres}
            alt={`${category} - Après`}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>

    {/* Footer with Labels and Indicator */}
    <div className="mt-8 flex items-center justify-between px-2 sm:px-6">
      <span className="text-sm sm:text-xl font-light text-[#393939]">Avant</span>

      <div className="flex-1 mx-4 sm:mx-8 flex items-center justify-center gap-3">
        <div className="flex-1 h-[0.5px] bg-dark-taupe/30" />
        <div className="flex items-center gap-1.5 text-dark-taupe/40">
          <span className="text-[10px]">&lt;</span>
          <div className="w-1.5 h-1.5 rounded-full bg-dark-taupe/60" />
          <span className="text-[10px]">&gt;</span>
        </div>
        <div className="flex-1 h-[0.5px] bg-dark-taupe/30" />
      </div>

      <span className="text-sm sm:text-xl font-light text-[#393939]">Après</span>
    </div>
  </div>
);

export default function NosSourires() {
  return (
    <>
      <Header />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="py-24 bg-[#F0FBFF] rounded-lg mx-20 mt-20 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-start">
            <h1 className="text-4xl lg:text-6xl font-light text-dark-taupe font-serif leading-tight max-w-4xl">
              Votre plus beau <br /> <span className="font-bold">Smile</span> commence avec nous.
            </h1>
            <p className="mt-8 text-lg text-[#393939] font-light max-w-3xl leading-relaxed">
              Parce que chaque sourire est unique, nous prenons à cœur de partager avec vous les résultats obtenus chez
              <span className="font-bold"> U-Smile Orthodontie</span>. Ces transformations témoignent de notre engagement quotidien, à vos côtés,
              à chaque étape de la vie. Ces sourires représentent des traitements personnalisés, réalisés avec une approche fondée sur
              l'expertise, l'écoute et l'utilisation des meilleures technologies.
            </p>
          </div>
        </section>

        {/* Comparison Sections */}
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
          <SmileComparison
            category="Enfant"
            avant="/images/sourires/smile 13 avant.png"
            apres="/images/sourires/smile 13 après.png"
          />

          <SmileComparison
            category="Adolescent"
            avant="/images/sourires/smile 3 avant.png"
            apres="/images/sourires/smile 3 après.png"
          />

          <SmileComparison
            category="Adulte"
            avant="/images/sourires/smile 8 avant.png"
            apres="/images/sourires/smile 8 après.png"
          />

          <SmileComparison
            category="Senior"
            avant="/images/sourires/smile 9 avant.png"
            apres="/images/sourires/smile 9 Après.png"
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
