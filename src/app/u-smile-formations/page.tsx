import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import AppointmentForm from "@/components/AppointmentForm";
import { GraduationCap, Video, School, Globe, Users } from "lucide-react";

const formations = [
  {
    title: "Certifications\nInvisalign",
    tag: "Certifications Invisalign"
  },
  {
    title: "Webinaires\net Case cafés",
    tag: "Webinaires"
  },
  {
    title: "Master D’orthodontie\npar Aligneurs",
    tag: "Master"
  }
];

const evenements = [
  {
    title: "Congrès Nationaux",
    description: "Présence et interventions lors des principaux congrès d'orthodontie au Maroc.",
    icon: <Users className="w-8 h-8" />,
    location: "Maroc"
  },
  {
    title: "Congrès Internationaux",
    description: "Participation active aux congrès mondiaux : SFODF, AAO, WFO, EOS.",
    icon: <Globe className="w-8 h-8" />,
    location: "International"
  }
];

export default function FormationsPage() {
  return (
    <>
      <Header />

      <main className="pt-32">
        {/* Hero Section - Redesigned */}
        <section className="relative px-6 lg:px-8 pt-10 pb-20">
          <div className="mx-auto max-w-7xl">
            <div className="relative border border-dark-taupe/10 rounded-2xl p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 bg-white shadow-sm overflow-visible mt-20">
              
              {/* Dr. Bennis Portrait with Custom Rounding */}
              <div className="relative w-full lg:w-[45%] lg:-ml-5 lg:-mt-30 self-start">
                <div 
                  className="relative aspect-[4/5] w-full overflow-hidden border-"
                  style={{ borderRadius: '0 12rem 0 12rem' }}
                >
                  <Image
                    src="/images/team/dr-charafa.jpeg"
                    alt="Dr. Charafa Bennis"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Biography Content */}
              <div className="flex-1 space-y-8 relative">
                <div className="space-y-6 text-[#393939] font-light leading-relaxed text-lg">
                  <p>
                    Parce que l'orthodontie est une discipline en constante évolution, le 
                    <span className="font-semibold"> Dr Bennis</span> s'engage dans une démarche continue d'apprentissage 
                    et d'excellence. Cette veille permanente lui permet d'intégrer les avancées scientifiques et 
                    technologiques les plus récentes au service de sa pratique clinique.
                  </p>
                  <p>
                    Forte de plus de 35 ans d'expérience exclusive en orthodontie, elle met également son expertise 
                    au service de la transmission du savoir, en animant des formations, conférences et programmes 
                    spécialisés au Maroc et à l'étranger. À travers <span className="font-semibold">U.smile Formations</span>, 
                    le Dr Bennis partage une vision clinique rigoureuse, fondée sur l'expérience, la réflexion thérapeutique 
                    et l'usage raisonné des outils digitaux, afin d'accompagner les praticiens dans l'évolution de leur pratique.
                  </p>
                  <p className="font-bold pt-4">
                    Retrouvez ici les prochaines formations,<br />
                    et événements à venir.
                  </p>
                </div>

                {/* Signature */}
                <div className="pt-4 flex justify-end">
                  <div className="relative w-40 h-20 opacity-80">
                    <span className="font-serif italic text-3xl text-dark-taupe/40 select-none">
                      Dr Bennis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formations Section - Redesigned */}
        <section className="py-24 lg:py-32 bg-[#F0FBFF]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16">
              <span className="inline-block border-[0.5px] border-dark-taupe/20 rounded-lg px-6 py-2 text-[10px] font-bold tracking-widest uppercase text-[#393939] mb-12">
                LES FORMATIONS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {formations.map((item, idx) => (
                <div key={idx} className="group relative bg-white rounded-xl p-10 lg:p-12 shadow-sm border border-dark-taupe/5 flex flex-col justify-between min-h-[280px]">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-3xl lg:text-4xl font-bold text-[#393939] font-serif leading-tight whitespace-pre-line">
                      {item.title}
                    </h3>
                    <div className="relative w-16 h-16 shrink-0 mt-2">
                      <Image
                        src="/images/logos/USMILE LOGO Circular - Black.svg"
                        alt="U-Smile Logo"
                        fill
                        className="object-contain opacity-60"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end mt-8">
                    <a
                      href="mailto:contact@usmile.com"
                      className="bg-[#393939] text-white px-6 py-3 rounded-lg text-sm font-semibold tracking-wider flex items-center gap-2 hover:bg-[#2a2a2a] transition-all duration-300 uppercase"
                    >
                      EN SAVOIR PLUS
                      <span className="text-lg">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Événements Section - Redesigned */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16">
              <span className="inline-block border-[0.5px] border-dark-taupe/20 rounded-lg px-6 py-2 text-[10px] font-bold tracking-widest uppercase text-[#393939] mb-12">
                LES ÉVÈNEMENTS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {evenements.map((item, idx) => (
                <div key={idx} className="group relative bg-[#A89A91] rounded-xl p-10 lg:p-12 shadow-sm flex flex-col justify-between min-h-[280px]">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-3xl lg:text-5xl font-bold text-white font-serif leading-tight">
                      {item.title}
                    </h3>
                    <div className="relative w-16 h-16 shrink-0 mt-2">
                      <Image
                        src="/images/logos/USMILE LOGO Circular - White.svg"
                        alt="U-Smile Logo"
                        fill
                        className="object-contain opacity-80"
                      />
                    </div>
                  </div>

                  <div className="flex justify-start mt-8">
                    <a
                      href="mailto:contact@usmile.com"
                      className="bg-[#393939] text-white px-6 py-3 rounded-lg text-sm font-semibold tracking-wider flex items-center gap-2 hover:bg-[#2a2a2a] transition-all duration-300 uppercase"
                    >
                      EN SAVOIR PLUS
                      <span className="text-lg">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TestimonialsSection />
      </main>

      <Footer />
    </>
  );
}
