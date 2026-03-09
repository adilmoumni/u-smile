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
          <div className="relative overflow-hidden rounded-[1rem] lg:rounded-[1rem] bg-[#a59c94] min-h-[600px] flex flex-col lg:flex-row shadow-2xl shadow-dark-taupe/10">
            {/* Left – Text Side (Taupe) */}
            <div className="flex-1 p-10 lg:p-20 flex flex-col justify-center relative z-10">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal text-white leading-[1.05] tracking-tight mb-8">
                  Votre plus beau
                  <br />
                  <span className="font-light">Smile</span> commence
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
              <div className="absolute inset-0" />
              <Image
                src="/images/hero-clinic.png"
                alt="Cabinet U.Smile Réception"
                fill
                className="object-cover object-center rounded-bl-[10rem]"
                priority
              />
              {/* Vertical line separator (implied by design) */}
              <div className="absolute left-0 top-0 bottom-0 w-px hidden lg:block" />
            </div>
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
