import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm";
import TeamSection from "@/components/TeamSection";
import CabinetDetails from "@/components/CabinetDetails";
import CabinetCarousel from "@/components/CabinetCarousel";

export const metadata = {
  title: "Le Cabinet | U-Smile Orthodontie",
  description: "Découvrez notre cabinet et l'expertise du Dr Charafa Bennis Hamoumi.",
};

export default function LeCabinet() {
  return (
    <>
      <Header />
      
      <main className="pt-20">

        {/* Cabinet Details (Vision, Values, etc.) */}
        <CabinetDetails />

        {/* Dr. Charafa's Profile */}
        <TeamSection/>

        {/* Appointment Form */}
        <AppointmentForm />
        
        {/* Cabinet Photo Carousel */}
        <CabinetCarousel />

      </main>

      <Footer />
    </>
  );
}
