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
    image: "/images/qr.png",
    icon: <Smartphone className="w-5 h-5" />
  },
  {
    title: "Scanner iTero",
    description: "Il permet de réaliser une empreinte dentaire 3D rapide, précise et confortable, sans pâte. Il offre une analyse digitale fiable de la dentition, facilitant le diagnostic et un échange clair et concret entre le praticien et le patient.",
    image: "/itoro.png",
    icon: <Microscope className="w-5 h-5" />
  },
  {
    title: "L'outcome Simulator",
    description: "Il offre une simulation dentaire du résultat potentiel en se basant sur le scan 3D via iTero®, renforçant ainsi la qualité du diagnostic et la prévisibilité du traitement.",
    note: "cette simulation est réalisée par l'IA.",
    image: "/simulator.png",
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    title: "L'outil ClinCheck Pro 6.0",
    description: "Ce logiciel permet à l’orthodontiste de planifier le traitement orthodontique en 3D, étape par étape, en y apportant toute son expertise clinique. Un 2ème rendez-vous vous sera proposé afin de visualiser votre sourire Final réel et discuter des différentes options de traitement.",
    image: "/clincheck.png",
    icon: <Monitor className="w-5 h-5" />
  }
];

export default function ConsultationDiagnostic() {
  return (
    <>
      <Header />
      
      <main className="pt-20 bg-[#FDFCFB]">
        {/* Hero Section */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative overflow-visible">
              {/* Organic Shape Container */}
              <div 
                className="relative aspect-[16/9] w-full overflow-hidden z-0"
                style={{ borderRadius: '0rem 12rem 0rem 12rem' }}
              >
                <Image
                  src="/images/cabinet/cabinet-consultation.png"
                  alt="Consultation et Diagnostic au cabinet U-Smile"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Redesigned Floating Badge */}
              <div className="absolute top-0 right-0 lg:top-16 lg:-right-10 bg-white rounded-lg border border-[#393939] overflow-hidden flex items-stretch z-10 animate-fade-in group pointer-events-none">
                <div className=" px-8 flex flex-col justify-center bg-white">
                  <p className="text-[#393939] font-bold text-lg lg:text-xl leading-tight">
                    Consultation et <br /> Diagnostic
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/icon/home/consultation.svg"
                    alt="Consultation et Diagnostic"
                    width={70}
                    height={70}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="pb-24 lg:pb-32 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
              <div>
                <h2 className="text-4xl lg:text-5xl font-light text-[#393939] leading-tight font-serif">
                  Grâce aux outils numériques <br /> 
                  utilisés <span className="italic font-bold text-[#393939]">au cabinet,</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8 text-[#393939] font-light text-lg leading-relaxed">
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

        {/* Tech Features Grid - Redesigned */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {techFeatures.map((tech, idx) => (
                <div key={idx} className="group relative flex flex-col bg-white rounded-2xl p-8 lg:p-12 border border-gray-100 hover:shadow-xl transition-all duration-500">
                  <div className="relative h-64 lg:h-80 overflow-hidden mb-10" style={{ borderRadius: '0.5rem 0.5rem 5.5rem 0.5rem' }}>
                    <Image
                      src={tech.image}
                      alt={tech.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl lg:text-3xl font-bold font-serif text-[#393939] mb-8">
                      {tech.title}
                    </h3>
                    
                    <div className="space-y-6">
                      <p className="text-[#393939] font-light text-lg leading-relaxed">
                        {tech.description}
                      </p>
                      
                      {tech.note && (
                        <p className="text-[#393939]/70 italic text-sm font-medium">
                          {tech.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
