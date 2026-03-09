import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm";
import SoinDetail from "@/components/SoinDetail";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Apnée du Sommeil | U-Smile Orthodontie",
  description: "Solutions personnalisées pour l'apnée du sommeil avec des orthèses d'avancée mandibulaire.",
};

export default function ApneeSommeil() {
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
               Apnée du sommeil
            </h1>
          </div>
        </section>

        <SoinDetail
          categoryTitle="Apnée du sommeil"
          title={<>Apnée <br /> du sommeil</>}
          description="L’apnée du sommeil peut altérer la qualité du sommeil et avoir un impact sur la santé au quotidien. Chez U.smile Orthodontie, sur prescription de votre médecin du sommeil, nous proposons des Orthèses d’Avancée Mandibulaire (OAM) réalisées sur mesure, permettant, d’améliorer la respiration nocturne en favorisant l’ouverture des voies aériennes."
          secondaryDescription="Cette solution personnalisée vise à offrir un meilleur confort pendant le sommeil et à contribuer à un repos plus réparateur, dans une prise en charge sécurisée et adaptée à chaque patient."
          icon={
            <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M5 12a7 7 0 0114 0c0 4-3 7-7 7s-7-3-7-7z" />
              <path d="M9 12h6" />
              <path d="M12 12v4" />
              <path d="M8 8a4 4 0 018 0" />
            </svg>
          }
          showButton={false}
        />

        <AppointmentForm />
      </main>

      <Footer />
    </>
  );
}
