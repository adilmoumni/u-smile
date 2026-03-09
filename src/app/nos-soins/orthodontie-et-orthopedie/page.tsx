import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm";
import SoinDetail from "@/components/SoinDetail";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Orthodontie et Orthopédie | U-Smile Orthodontie",
  description: "Tratitements orthodontiques pour enfants, adolescents et adultes.",
};

export default function OrthodontiePage() {
  return (
    <>
      <Header />
      
      <main className="pt-20">
        <section className="bg-white py-12 border-b border-foreground/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center gap-6">
            <Link 
              href="/nos-soins"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors text-dark-taupe"
              aria-label="Retour à nos soins"
            >
              <MoveLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-4xl lg:text-5xl font-light text-dark-taupe font-serif">
               Orthodontie et Orthopédie
            </h1>
          </div>
        </section>

        <SoinDetail
          categoryTitle="Orthodontie & Orthopédie Dento-faciale"
          title={<>Accompagner <br /> le sourire à chaque étape <br /> de la vie.</>}
          description="L’orthodontie et l’orthopédie dento-faciale permettent d’accompagner le développement du sourire à tous les âges. Chez U.smile Orthodontie, les traitements sont personnalisés, évolutifs et pensés pour répondre aux besoins spécifiques de chaque patient, de l’enfance à l’âge adulte, en intégrant les dimensions fonctionnelles, esthétiques et médicales."
          icon={
            <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M3 10c0-2 2-4 9-4s9 2 9 4" />
              <path d="M3 14c0 2 2 4 9 4s9-2 9-4" />
              <rect x="6" y="8" width="2" height="4" rx="0.5" />
              <rect x="11" y="8" width="2" height="4" rx="0.5" />
              <rect x="16" y="8" width="2" height="4" rx="0.5" />
            </svg>
          }
        />

        <AppointmentForm />
      </main>

      <Footer />
    </>
  );
}
