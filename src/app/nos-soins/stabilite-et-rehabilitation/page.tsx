import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm";
import SoinDetail from "@/components/SoinDetail";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Stabilité et Réhabilitation | U-Smile Orthodontie",
  description: "Assurer la durabilité et l'équilibre des résultats orthodontiques.",
};

export default function StabilitePage() {
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
               Stabilité et Réhabilitation
            </h1>
          </div>
        </section>

        <SoinDetail
          categoryTitle="Stabilité du traitement et Réhabilitation Fonctionnelle"
          title={<>Assurer la durabilité <br /> et l'équilibre des résultats.</>}
          description="La stabilité ou contention est une étape essentielle pour préserver les résultats du traitement orthodontique dans le temps. La contention et la réhabilitation fonctionnelle contribuent à maintenir un équilibre durable de la denture, en tenant compte des fonctions orales et de l’harmonie globale du système oro-facial."
          icon={
            <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M4 10c0-3 3-5 8-5s8 2 8 5" />
              <path d="M4 14c0 3 3 5 8 5s8-2 8-5" />
              <path d="M8 10h8M8 14h8" />
              <path d="M12 5v14" />
            </svg>
          }
        />

        <AppointmentForm />
      </main>

      <Footer />
    </>
  );
}
