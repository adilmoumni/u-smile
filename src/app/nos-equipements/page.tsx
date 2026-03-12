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
      image: "/images/cabinet/equipement/3.png",
   },
   {
      title: "Ortho Podo Metric (OPM)",
      description: "Plateforme de bilan postural.",
      image: "/images/cabinet/equipement/1.png",
   },
   {
      title: "Radiologie numérique – Panoramique & téléradiographie de profil",
      description: "Des examens rapides et précis, à faible irradiation, pour un diagnostic fiable.",
      image: "/images/cabinet/equipement/2.png",
   },
   {
      title: "Photographie Numérique",
      description: "Un suivi clair et rigoureux de l'évolution de votre traitement.",
      image: "/images/cabinet/equipement/6.png",
   },
   {
      title: "Plieuse de fil de contention 3D",
      description: "Des contentions sur mesure pour une stabilité durable du sourire.",
      image: "/images/cabinet/equipement/4.png",
   },
   {
      title: "Autoclave de stérilisation dernière génération",
      description: "Une hygiène optimale pour des soins en toute sécurité.",
      image: "/images/cabinet/equipement/5.png",
   },
];

export default function NosEquipements() {
   return (
      <>
         <Header />

         <main className="pt-20">

            <div className="bg-[#f0f9ff] mx-10 rounded-lg mt-20 mb-20">
               {/* Text Intro */}
               {/* i need to make the text on the top, can you do that ? not centred  */}
               
               <section className="pt-20">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                     <div className="grid lg:grid-cols-2 gap-12">
                        <h2 className="text-3xl lg:text-4xl font-light text-dark-taupe font-serif leading-tight">
                           Chez U.Smile Orthodontie,
                        </h2>
                        <div className="space-y-6 text-[#393939] font-light leading-relaxed mt-15">
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
               <section className="py-24">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                     <span className="inline-block rounded-lg border-[0.5px] border-dark-taupe/20 px-4 py-1.5 text-xs font-semibold tracking-wider text-dark-taupe uppercase mb-6">
                        NOS ÉQUIPEMENTS
                     </span>
                     <div className="grid md:grid-cols-2 gap-x-30 gap-y-16 justify-items-center ">
                        {equipments.map((item, idx) => (
                           <div key={idx} className="w-full group border-[0.25px] border-[#393939]/50 rounded-lg overflow-hidden bg-white transition-all duration-500">
                              <div className="mx-10 my-10 rounded-lg rounded-br-[5rem] relative aspect-[16/10] overflow-hidden">
                                 <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                 />
                              </div>
                              <div className="px-10 pb-10">
                                 <h3 className="text-2xl font-bold text-dark-taupe mb-4 font-serif leading-snug"
                                    style={{ fontFamily: 'var(--font-sofia-pro), sans-serif', fontStyle: 'normal' }}

                                 >
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
            </div>

         </main>

         <Footer />
      </>
   );
}
