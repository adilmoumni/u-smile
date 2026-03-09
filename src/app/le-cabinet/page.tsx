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
        {/* Intro Section */}
        <section className="bg-white py-12 border-b border-foreground/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-light text-dark-taupe font-serif">
              Le Cabinet
            </h1>
          </div>
        </section>

        {/* Cabinet Details (Vision, Values, etc.) */}
        <CabinetDetails />

        {/* Dr. Charafa's Profile */}
        <TeamSection doctorName="Charafa" />

        {/* Cabinet Photo Carousel */}
        <CabinetCarousel />

        {/* Appointment Form */}
        <AppointmentForm />
      </main>

      <Footer />
    </>
  );
}
