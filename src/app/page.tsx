import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm";
import TeamSection from "@/components/TeamSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Header />

      {/* ═══════════════════════════════════════════════
          HERO SECTION
         ═══════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════
          HERO SECTION
         ═══════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] bg-[#a59c94] min-h-[600px] flex flex-col lg:flex-row shadow-2xl shadow-dark-taupe/10">
            {/* Left – Text Side (Taupe) */}
            <div className="flex-1 p-10 lg:p-20 flex flex-col justify-center relative z-10">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal text-white leading-[1.05] tracking-tight mb-8">
                  Votre plus beau
                  <br />
                  <span className="italic font-light">Smile</span> commence
                  <br />
                  Avec nous
                </h1>
                
                <p className="text-white/90 text-lg lg:text-xl font-light max-w-md mb-12 leading-relaxed">
                  Au Cabinet U.Smile, chaque sourire est unique et mérite une attention particulière.
                </p>

                <a
                  href="#about"
                  className="group inline-flex items-center gap-4 bg-[#2c2c2c] text-white px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-widest hover:bg-black transition-all duration-300 shadow-xl shadow-black/10 hover:shadow-black/20"
                >
                  A PROPOS
                  <svg 
                    className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right – Image Side (Clinic Interior) */}
            <div className="lg:w-[55%] relative min-h-[400px] lg:min-h-full overflow-hidden">
              <div className="absolute inset-0 bg-black/5" /> {/* Subtle overlay */}
              <Image
                src="/images/hero-clinic.png"
                alt="Cabinet U.Smile Réception"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Vertical line separator (implied by design) */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 hidden lg:block" />
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
          SERVICES SECTION
         ═══════════════════════════════════════════════ */}
      <section id="services" className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block rounded-full bg-spearmint/10 border border-spearmint/20 px-4 py-1.5 text-xs font-semibold tracking-wider text-spearmint-dark dark:text-spearmint-light uppercase mb-4">
              Services
            </span>
            <h2 className="text-4xl sm:text-5xl font-light text-dark-taupe dark:text-warm-cream">
              Nos <span className="italic text-accent">soins</span>
            </h2>
            <p className="mt-4 text-foreground/50 max-w-xl mx-auto font-light">
              Une gamme complète de soins dentaires adaptés à chaque besoin, réalisés avec expertise et douceur.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Dentisterie Esthétique",
                desc: "Blanchiment, facettes et restaurations pour un sourire éclatant et naturel.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                  </svg>
                ),
              },
              {
                title: "Orthodontie",
                desc: "Alignement dentaire invisible avec les dernières techniques d'orthodontie moderne.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                  </svg>
                ),
              },
              {
                title: "Implantologie",
                desc: "Remplacement de dents manquantes avec des implants fiables et durables.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a1.007 1.007 0 010-1.42l.71-.71a1.007 1.007 0 011.42 0l3.54 3.54 7.07-7.07a1.007 1.007 0 011.42 0l.71.71a1.007 1.007 0 010 1.42l-8.49 8.49a1.007 1.007 0 01-1.42 0z" />
                  </svg>
                ),
              },
              {
                title: "Soins Préventifs",
                desc: "Examens réguliers et détartrages pour maintenir une santé bucco-dentaire optimale.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                title: "Pédodontie",
                desc: "Des soins adaptés et rassurants pour les plus jeunes dans une ambiance ludique.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
              },
              {
                title: "Chirurgie Buccale",
                desc: "Extractions, greffes et chirurgies réalisées avec précision et confort.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a1.007 1.007 0 010-1.42l.71-.71a1.007 1.007 0 011.42 0l3.54 3.54 7.07-7.07a1.007 1.007 0 011.42 0l.71.71a1.007 1.007 0 010 1.42l-8.49 8.49a1.007 1.007 0 01-1.42 0z" />
                  </svg>
                ),
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl bg-card border border-foreground/5 p-8 hover:shadow-xl hover:shadow-spearmint/5 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-spearmint/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark-taupe dark:text-warm-cream mb-2 font-sans">
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/50 leading-relaxed font-light">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          ABOUT SECTION
         ═══════════════════════════════════════════════ */}
      <section id="about" className="py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left – Visual */}
            <div className="relative">
              <div className="w-full aspect-[4/3] rounded-3xl bg-gradient-to-br from-spearmint/20 to-spearmint-light/30 dark:from-spearmint/10 dark:to-spearmint-light/5 flex items-center justify-center">
                <Image
                  src="/images/logos/USMILE LOGO Cicrular - Spearmint.svg"
                  alt="U-Smile"
                  width={180}
                  height={180}
                  className="opacity-80"
                />
              </div>
              {/* Stats badge */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-[#1c1b18] rounded-2xl shadow-xl p-6 border border-foreground/5">
                <div className="text-3xl font-light text-accent">10+</div>
                <div className="text-xs text-foreground/50 font-medium">Années d&apos;expérience</div>
              </div>
            </div>

            {/* Right – Content */}
            <div>
              <span className="inline-block rounded-full bg-spearmint/10 border border-spearmint/20 px-4 py-1.5 text-xs font-semibold tracking-wider text-spearmint-dark dark:text-spearmint-light uppercase mb-4">
                À propos
              </span>
              <h2 className="text-4xl sm:text-5xl font-light text-dark-taupe dark:text-warm-cream mb-6">
                Un cabinet tourné vers{" "}
                <span className="italic text-accent">l&apos;avenir</span>
              </h2>
              <p className="text-foreground/60 mb-6 font-light leading-relaxed">
                Chez U-Smile, nous croyons que chaque patient mérite des soins d&apos;exception dans un cadre
                bienveillant. Notre équipe allie expertise clinique et technologies de pointe pour vous
                offrir une expérience dentaire hors du commun.
              </p>
              <p className="text-foreground/60 mb-8 font-light leading-relaxed">
                De la prévention aux traitements les plus complexes, nous vous accompagnons avec
                douceur et professionnalisme à chaque étape de votre parcours de soins.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "5000+", label: "Patients satisfaits" },
                  { value: "100%", label: "Stérilisation" },
                  { value: "24/7", label: "Urgences" },
                  { value: "15+", label: "Spécialités" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-background">
                    <div className="text-2xl font-light text-accent mb-1">{stat.value}</div>
                    <div className="text-xs text-foreground/50 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA SECTION
         ═══════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-dark-taupe dark:text-warm-cream mb-6">
            Prêt pour un{" "}
            <span className="italic text-accent">nouveau sourire</span> ?
          </h2>
          <p className="text-lg text-foreground/50 max-w-2xl mx-auto mb-10 font-light">
            Prenez rendez-vous dès aujourd&apos;hui et découvrez la différence U-Smile.
            Votre confort et votre bien-être sont notre priorité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-10 py-4 text-base font-semibold text-white shadow-lg shadow-spearmint/25 hover:bg-accent-hover transition-all duration-300 hover:shadow-xl hover:shadow-spearmint/35 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Contactez-nous
            </a>
            <a
              href="tel:+212600000000"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-dark-taupe/15 dark:border-white/15 px-10 py-4 text-base font-medium text-foreground hover:bg-foreground/5 transition-all duration-300"
            >
              +212 6 00 00 00 00
            </a>
          </div>
        </div>
      </section>

      <AppointmentForm />
      <TeamSection />
      <ServicesSection />
      <TestimonialsSection />

      <Footer />
    </>
  );
}
