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
          title={<>Assurer la durabilité <br /> et l'équilibre des résultats.</>}
          description="La stabilité ou contention est une étape essentielle pour préserver les résultats du traitement orthodontique dans le temps. La contention et la réhabilitation fonctionnelle contribuent à maintenir un équilibre durable de la denture, en tenant compte des fonctions orales et de l’harmonie globale du système oro-facial."
          icon={
           <Image
              src="/images/icon/home/stabilite.svg"
              alt="Consultation et Diagnostic"
              width={70}
              height={70}
              className="object-contain"
            />
          }
          btnLink="/nos-soins/stabilite-et-rehabilitation/details"
        />
      </main>

      <Footer />
    </>
  );
}
