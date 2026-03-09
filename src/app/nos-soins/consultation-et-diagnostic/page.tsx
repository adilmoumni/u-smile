"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm";
import Image from "next/image";
import Link from "next/link";
import { MoveLeft, Smartphone, Monitor, ShieldCheck, Microscope } from "lucide-react";

const techFeatures = [
  {
    title: "QR Code Smile View",
    description: "L'outil Smile View vous permet de découvrir une première simulation de votre sourire en seulement 60 secondes avant même de commencer le traitement, pour vous aider à vous projeter en toute sérénité.",
    note: "cette simulation est réalisée par l'IA.",
    image: "/images/cabinet/smile-view.jpeg",
    icon: <Smartphone className="w-5 h-5" />
  },
  {
    title: "Scanner iTero",
    description: "Il permet de réaliser une empreinte dentaire 3D rapide, précise et confortable, sans pâte. Il offre une analyse digitale fiable de la dentition, facilitant le diagnostic et un échange clair et concret entre le praticien et le patient.",
    image: "/images/cabinet/itero-action.jpeg",
    icon: <Microscope className="w-5 h-5" />
  },
  {
    title: "L'outcome Simulator",
    description: "Il offre une simulation dentaire du résultat potentiel en se basant sur le scan 3D via iTero®, renforçant ainsi la qualité du diagnostic et la prévisibilité du traitement.",
    note: "cette simulation est réalisée par l'IA.",
    image: "/images/cabinet/outcome-simulator.jpeg",
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    title: "L'outil ClinCheck Pro 6.0",
    description: "Ce logiciel permet à l’orthodontiste de planifier le traitement orthodontique en 3D, étape par étape, en y apportant toute son expertise clinique. Un 2ème rendez-vous vous sera proposé afin de visualiser votre sourire Final réel et discuter des différentes options de traitement.",
    image: "/images/cabinet/clincheck.jpeg",
    icon: <Monitor className="w-5 h-5" />
  }
];

export default function ConsultationDiagnostic() {
  return (
    <>
      <Header />
      
      <main className="pt-20 bg-[#FDFCFB]">
        {/* Navigation / Page Title Section */}
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
               Consultation et Diagnostic
            </h1>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-2xl h-[400px] lg:h-[600px]">
              <Image
                src="/images/cabinet/consultation-hero.jpeg"
                alt="Consultation et Diagnostic au cabinet U-Smile"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-black/5" />
              
              {/* Badge Overlay */}
              <div className="absolute top-8 right-8 lg:top-12 lg:right-12 bg-white/90 backdrop-blur-md rounded-2xl p-4 lg:p-6 shadow-xl border border-white/20 flex items-center gap-4 animate-fade-in">
                <div className="p-3 bg-dark-taupe rounded-xl text-white">
                  <Monitor className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-dark-taupe/40 mb-1">Détail du soin</p>
                  <p className="text-dark-taupe font-serif text-lg lg:text-xl font-medium leading-none">Consultation et <br />Diagnostic</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="pb-24 lg:pb-32 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
              <div className="lg:w-1/2">
                <h2 className="text-4xl lg:text-5xl font-light text-dark-taupe leading-tight font-serif mb-8">
                  Grâce aux outils numériques <br /> 
                  utilisés au cabinet,
                </h2>
              </div>
              <div className="lg:w-1/2 space-y-6 text-dark-taupe/70 font-light text-lg leading-relaxed">
                <p>
                  notamment le scanner iTero et le logiciel de planification de traitement Clincheck Pro 3D, vous bénéficiez dès cette 1ère visite d’une simulation 3D avant/après dentaire et de votre sourire. Ces éléments sont expliqués en toute transparence par l’équipe afin de vous permettre de mieux comprendre les objectifs du traitement et de faire votre choix parmi les différentes options thérapeutiques proposées.
                </p>
                <p>
                  À l’issue de cette première visite, un devis personnalisé vous est présenté. Tout au long de votre parcours, notre coordinatrice de traitement vous accompagne, répond à vos questions et veille à ce que chaque décision soit prise sereinement et en toute confiance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Features Grid */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {techFeatures.map((tech, idx) => (
                <div key={idx} className="group relative flex flex-col bg-[#FDFCFB] rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
                  <div className="relative h-72 lg:h-80 overflow-hidden">
                    <Image
                      src={tech.image}
                      alt={tech.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-dark-taupe/5 group-hover:bg-dark-taupe/0 transition-colors duration-500" />
                  </div>
                  
                  <div className="p-10 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center text-accent">
                          {tech.icon}
                        </div>
                        <h3 className="text-2xl font-serif text-dark-taupe font-medium">{tech.title}</h3>
                      </div>
                      <p className="text-dark-taupe/70 font-light leading-relaxed mb-6">
                        {tech.description}
                      </p>
                    </div>
                    
                    {tech.note && (
                      <p className="text-accent/60 text-sm font-light">
                        {tech.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AppointmentForm />
      </main>

      <Footer />
    </>
  );
}
