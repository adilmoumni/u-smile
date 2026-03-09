import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm";
import Image from "next/image";

export const metadata = {
  title: "Nos Équipements | U-Smile Orthodontie",
  description: "Découvrez nos technologies de pointe pour vos soins orthodontiques.",
};

const equipments = [
  {
    title: "Caméra intra-orale iTero – Empreinte dentaire 3D",
    description: "Des empreintes confortables et précises sans pâte, avec une visualisation immédiate de votre sourire.",
    image: "/images/cabinet/itero-scan.png",
  },
  {
    title: "Ortho Podo Metric (OPM)",
    description: "Plateforme de bilan postural.",
    image: "/images/cabinet/ortho-podo.png",
  },
  {
    title: "Radiologie numérique – Panoramique & téléradiographie de profil",
    description: "Des examens rapides et précis, à faible irradiation, pour un diagnostic fiable.",
    image: "/images/cabinet/radiology.png",
  },
  {
    title: "Photographie Numérique",
    description: "Un suivi clair et rigoureux de l'évolution de votre traitement.",
    image: "/images/cabinet/photography.png",
  },
  {
    title: "Plieuse de fil de contention 3D",
    description: "Des contentions sur mesure pour une stabilité durable du sourire.",
    image: "/images/cabinet/wire-bending.png",
  },
  {
    title: "Autoclave de stérilisation dernière génération",
    description: "Une hygiène optimale pour des soins en toute sécurité.",
    image: "/images/cabinet/autoclave.png",
  },
];

export default function NosEquipements() {
  return (
    <>
      <Header />
      
      <main className="pt-20">
        {/* Intro Section */}
        <section className="bg-white py-12 border-b border-foreground/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-light text-dark-taupe font-serif">
               Nos Équipements
            </h1>
          </div>
        </section>

        {/* Text Intro */}
        <section className="bg-[#f0f9ff] py-20">
           <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                 <h2 className="text-3xl lg:text-4xl font-light text-dark-taupe font-serif leading-tight">
                    Chez U.Smile Orthodontie,
                 </h2>
                 <div className="space-y-6 text-[#393939] font-light leading-relaxed">
                    <p>
                       Les technologies numériques de dernière génération sont intégrées pour offrir des diagnostics plus précis, des traitements mieux maîtrisés et un meilleur confort pour le patient. La digitalisation permet d&apos;limiter les approximations liées aux techniques analogiques et de sécuriser chaque étape du soin.
                    </p>
                    <p>
                       Utilisés comme des outils d&apos;aide à la décision, ces équipements contribuent à des traitements plus fiables, plus prévisibles et à une réduction des risques d&apos;erreurs, tout en plaçant l&apos;expertise clinique au cœur de la prise en charge.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* Grid Section */}
        <section className="bg-white py-24">
           <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
                 {equipments.map((item, idx) => (
                    <div key={idx} className="group border border-dark-taupe/10 rounded-[2rem] overflow-hidden bg-white hover:shadow-2xl transition-all duration-500">
                       <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                       </div>
                       <div className="p-10">
                          <h3 className="text-xl font-medium text-dark-taupe mb-4 font-serif leading-snug">
                             {item.title}
                          </h3>
                          <p className="text-[#393939]/70 font-light leading-relaxed text-sm lg:text-base">
                             {item.description}
                          </p>
                       </div>
                    </div>
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
