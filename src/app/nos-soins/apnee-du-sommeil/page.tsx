import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm";
import SoinDetail from "@/components/SoinDetail";
import { MoveLeft } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Apnée du Sommeil | U-Smile Orthodontie",
  description: "Solutions personnalisées pour l'apnée du sommeil avec des orthèses d'avancée mandibulaire.",
};

export default function ApneeSommeil() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <SoinDetail
          categoryTitle="Apnée du sommeil"
          title={<>Apnée <br /> du sommeil</>}
          description="L’apnée du sommeil peut altérer la qualité du sommeil et avoir un impact sur la santé au quotidien. Chez U.smile Orthodontie, sur prescription de votre médecin du sommeil, nous proposons des Orthèses d’Avancée Mandibulaire (OAM) réalisées sur mesure, permettant, d’améliorer la respiration nocturne en favorisant l’ouverture des voies aériennes."
          secondaryDescription="Cette solution personnalisée vise à offrir un meilleur confort pendant le sommeil et à contribuer à un repos plus réparateur, dans une prise en charge sécurisée et adaptée à chaque patient."
          icon={
            <Image
              src="/images/icon/home/apnee.svg"
              alt="Consultation et Diagnostic"
              width={70}
              height={70}
              className="object-contain"
            />
          }
          showButton={false}
        />
      </main>

      <Footer />
    </>
  );
}
