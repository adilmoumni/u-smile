import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Nos Sourires | U-Smile Orthodontie",
  description: "Découvrez les résultats de nos traitements orthodontiques avant et après.",
};

const SmileComparison = ({ avant, apres, category }: { avant: string, apres: string, category: string }) => (
  <section className="mb-24 last:mb-0">
    <div className="flex items-center gap-4 mb-10">
      <div className="h-[1px] flex-1 bg-dark-taupe/10" />
      <h2 className="text-3xl font-serif text-dark-taupe px-4">{category}</h2>
      <div className="h-[1px] flex-1 bg-dark-taupe/10" />
    </div>
    
    <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
      <div className="space-y-4">
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-dark-taupe/5">
          <Image
            src={avant}
            alt={`${category} - Avant`}
            fill
            className="object-cover"
          />
        </div>
        <p className="text-sm uppercase tracking-widest text-[#393939]/40 font-medium text-center">Avant</p>
      </div>
      
      <div className="space-y-4">
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-dark-taupe/5">
          <Image
            src={apres}
            alt={`${category} - Après`}
            fill
            className="object-cover"
          />
        </div>
        <p className="text-sm uppercase tracking-widest text-dark-taupe font-medium text-center">Après</p>
      </div>
    </div>
  </section>
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
            avant="/images/sourires/Smile 1 Avant.png"
            apres="/images/sourires/Smile 1 Après.png"
          />
          
          <SmileComparison 
            category="Adolescent"
            avant="/images/sourires/smile 3 avant.png"
            apres="/images/sourires/smile 3 après.png"
          />
          
          <SmileComparison 
            category="Adulte"
            avant="/images/sourires/smile 4 avant.png"
            apres="/images/sourires/smile 4 après.png"
          />
          
          <SmileComparison 
            category="Senior"
            avant="/images/sourires/smile 8 avant.png"
            apres="/images/sourires/smile 8 Après.png"
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
