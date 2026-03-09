import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import AppointmentForm from "@/components/AppointmentForm";
import { GraduationCap, Video, School, Globe, Users } from "lucide-react";

const formations = [
  {
    title: "Certification Invisalign",
    description: "Certification officielle et MasterClass pour passer de praticien à expert Invisalign.",
    icon: <GraduationCap className="w-8 h-8" />,
    tag: "Prochainement"
  },
  {
    title: "Webinaires",
    description: "Des sessions mensuelles en ligne sur des thématiques cliniques pointues.",
    icon: <Video className="w-8 h-8" />,
    tag: "Mensuel"
  },
  {
    title: "Master en Orthodontie",
    description: "Programmes universitaires et formations cliniques approfondies.",
    icon: <School className="w-8 h-8" />,
    tag: "Universitaire"
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
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-dark-taupe min-h-[500px] flex flex-col lg:flex-row shadow-2xl">
              {/* Left Content */}
              <div className="flex-1 p-10 lg:p-20 flex flex-col justify-center relative z-10 text-white">
                <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase mb-6 animate-fade-in">
                  Partage & Savoir
                </span>
                <h1 className="text-5xl lg:text-7xl font-serif leading-tight mb-8 text-white">
                  U.Smile <br />
                  <span className="font-light text-spearmint">Formations</span>
                </h1>
                <p className="text-white/80 text-lg lg:text-xl font-light max-w-md leading-relaxed mb-10">
                  Le Dr. Bennis partage son expertise et accompagne les professionnels de santé dans l'excellence de l'orthodontie moderne.
                </p>
              </div>

              {/* Right Image */}
              <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full">
                <Image
                  src="/images/dr-bennis-formations.jpeg"
                  alt="Dr. Charafa Bennis - Formations"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-taupe/40 to-transparent lg:bg-gradient-to-l" />
              </div>
            </div>
          </div>
        </section>

        {/* Formations Section */}
        <section className="py-24 lg:py-32 bg-[#FDFCFB]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16">
              <span className="inline-block rounded-lg bg-white border-[0.5px] text-dark-taupe px-4 py-1.5 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
                PROGRAMMES
              </span>
              <h2 className="text-4xl sm:text-5xl font-light text-dark-taupe leading-tight font-serif">
                Les Formations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {formations.map((item, idx) => (
                <div key={idx} className="group relative bg-white rounded-[2rem] p-8 lg:p-10 shadow-lg border border-gray-50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-spearmint/10 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-accent mb-4 block">
                    {item.tag}
                  </span>
                  <h3 className="text-2xl font-serif text-dark-taupe mb-4">{item.title}</h3>
                  <p className="text-dark-taupe/70 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Événements Section */}
        <section className="py-24 lg:py-32 bg-dark-taupe overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
              <div>
                <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-semibold tracking-wider text-white uppercase mb-6">
                  CONGRÈS & KEYNOTES
                </span>
                <h2 className="text-4xl sm:text-5xl font-light text-white leading-tight font-serif">
                  Les Événements
                </h2>
              </div>
              <p className="text-white/60 max-w-md font-light text-lg">
                Une présence active sur la scène nationale et internationale pour rester à la pointe de l'innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {evenements.map((item, idx) => (
                <div key={idx} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-10 lg:p-16 hover:bg-white/10 transition-all duration-500">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 rounded-full bg-spearmint flex items-center justify-center text-dark-taupe shadow-lg">
                      {item.icon}
                    </div>
                    <span className="px-4 py-1 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-widest text-white/40">
                      {item.location}
                    </span>
                  </div>
                  <h3 className="text-3xl font-serif text-white mb-6">{item.title}</h3>
                  <p className="text-white/60 text-lg leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TestimonialsSection />
        
        <section className="bg-[#FDFCFB]">
            <AppointmentForm />
        </section>
      </main>

      <Footer />
    </>
  );
}
