import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm";
import SoinDetail from "@/components/SoinDetail";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Stabilité et Réhabilitation | U-Smile Orthodontie",
  description: "Assurer la durabilité et l'équilibre des résultats orthodontiques.",
};

export default function StabilitePage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <SoinDetail
          categoryTitle="Consultation et Diagnostic"
          title={<>Comprendre,<br /> analyser, personnaliser.</>}
          description="Chez U.Smile Orthodontie, la consultation initiale intègre un bilan orthodontique complet pour poser les bases d'un traitement sur mesure. Un examen clinique approfondi, une empreinte optique dentaire iTero en 3D, une prise de photographies et de radiographies ainsi qu'un bilan postural vous seront proposés, afin d'établir un diagnostic global et précis. Dès votre arrivée, notre coordinatrice de traitement vous accompagne et vous guide à chaque étape pour une prise en charge claire, sereine et personnalisée."
          icon={
            <Image
              src="/images/icon/home/consultation.svg"
              alt="Consultation et Diagnostic"
              width={70}
              height={70}
              className="object-contain"
            />
          }
        />
      </main>

      <Footer />
    </>
  );
}
