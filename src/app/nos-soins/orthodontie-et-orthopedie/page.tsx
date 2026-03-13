import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm";
import SoinDetail from "@/components/SoinDetail";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Orthodontie et Orthopédie | U-Smile Orthodontie",
  description: "Tratitements orthodontiques pour enfants, adolescents et adultes.",
};

export default function OrthodontiePage() {
  return (
    <>
      <Header />
      
      <main className="pt-20">
        <SoinDetail
          categoryTitle="Orthodontie & Orthopédie Dento-faciale"
          title={<>Accompagner <br /> le sourire à chaque étape <br /> de la vie.</>}
          description="L’orthodontie et l’orthopédie dento-faciale permettent d’accompagner le développement du sourire à tous les âges. Chez U.smile Orthodontie, les traitements sont personnalisés, évolutifs et pensés pour répondre aux besoins spécifiques de chaque patient, de l’enfance à l’âge adulte, en intégrant les dimensions fonctionnelles, esthétiques et médicales."
          icon={
            <Image
              src="/images/icon/home/orthodontie.svg"
              alt="Consultation et Diagnostic"
              width={70}
              height={70}
              className="object-contain"
            />
          }
          btnLink="/nos-soins/orthodontie-et-orthopedie/details"
        />
      </main>

      <Footer />
    </>
  );
}
