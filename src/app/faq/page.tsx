"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: "Première consultation",
    items: [
      {
        question: "À quel âge la première consultation est-elle recommandée ?",
        answer: "L'Association Française d'Orthodontie recommande une première consultation dès l'âge de 6-7 ans. Cela permet de détecter précocement des décalages de croissance des mâchoires ou des problèmes de place pour les futures dents définitives."
      },
      {
        question: "Comment se déroule le premier rendez-vous ?",
        answer: "Il s'agit d'un bilan clinique complet. Le praticien examine la dentition, les mâchoires et les fonctions (respiration, déglutition). À l'issue de cet examen, nous vous dirons si un traitement est nécessaire, quel est le moment idéal pour le débuter, et nous vous expliquerons les étapes à suivre."
      }
    ]
  },
  {
    title: "Enfants & adolescents",
    items: [
      {
        question: "Qu'est-ce qu'un traitement d'interception ?",
        answer: "C'est un traitement court (souvent 6 à 12 mois) réalisé chez l'enfant jeune (6-9 ans) pour corriger un problème fonctionnel ou squelettique important avant la fin de la croissance. Cela permet souvent de simplifier, voire d'éviter, une phase de traitement plus complexe à l'adolescence."
      },
      {
        question: "Les bagues sont-elles la seule option ?",
        answer: "Non, aujourd'hui plusieurs options existent : les appareils amovibles fonctionnels pour la croissance, les bagues multi-attaches (métal ou céramique discrète) et les aligneurs transparents adaptés aux adolescents."
      }
    ]
  },
  {
    title: "Adultes & seniors",
    items: [
      {
        question: "Est-il trop tard pour aligner mes dents ?",
        answer: "Il n'y a pas d'âge limite pour l'orthodontie, tant que vos gencives et votre support osseux sont sains. De plus en plus d'adultes et de seniors consultent pour des raisons esthétiques ou fonctionnelles."
      },
      {
        question: "Proposez-vous des solutions discrètes ?",
        answer: "Absolument. La majorité de nos patients adultes choisissent les aligneurs transparents (Invisalign) ou les bagues en céramique, qui sont quasi-invisibles au quotidien."
      }
    ]
  },
  {
    title: "Invisalign",
    items: [
      {
        question: "Comment fonctionnent les aligneurs transparents ?",
        answer: "Il s'agit d'une série de gouttières amovibles portées environ 22h/24. Chaque gouttière déplace progressivement les dents. On change d'aligneur toutes les 1 à 2 semaines selon le plan de traitement numérique établi sur mesure."
      },
      {
        question: "Puis-je manger ce que je veux pendant le traitement ?",
        answer: "Oui ! C'est l'un des grands avantages : on retire les aligneurs pour manger, boire (sauf de l'eau) et se brosser les dents. Il n'y a donc aucune restriction alimentaire."
      }
    ]
  },
  {
    title: "Durée & suivi des traitements",
    items: [
      {
        question: "Combien de temps dure un traitement ?",
        answer: "Cela dépend de la complexité du cas. En moyenne, un traitement complet dure entre 12 et 24 mois. Les traitements d'interception chez l'enfant sont plus courts."
      },
      {
        question: "À quelle fréquence sont les rendez-vous ?",
        answer: "Généralement toutes les 6 à 10 semaines. Ces rendez-vous sont essentiels pour contrôler les mouvements dentaires et ajuster l'appareil."
      }
    ]
  },
  {
    title: "Contentions & stabilité",
    items: [
      {
        question: "Pourquoi la phase de contention est-elle indispensable ?",
        answer: "Les dents ont une mémoire et ont tendance à vouloir reprendre leur position initiale juste après le retrait de l'appareil. La contention (fil collé ou gouttière de nuit) permet de stabiliser le résultat à vie."
      }
    ]
  }
];

const AccordionItem = ({ item }: { item: FAQItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-dark-taupe/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group transition-all"
      >
        <span className="text-lg font-medium text-dark-taupe group-hover:text-accent transition-colors">
          {item.question}
        </span>
        <div className={`relative w-6 h-6 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-dark-taupe/40 group-hover:bg-accent/40 rounded-full" />
          <div className="absolute top-0 left-1/2 h-full w-[2px] bg-dark-taupe/40 group-hover:bg-accent/40 rounded-full" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] pb-8 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-[#393939] font-light leading-relaxed pr-12">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

const FAQCategorySection = ({ category }: { category: FAQCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-8 py-8 lg:py-10 bg-white rounded-3xl border transition-all duration-300 ${
          isOpen ? "border-dark-taupe/20 shadow-lg" : "border-dark-taupe/10 hover:border-dark-taupe/20 hover:shadow-md"
        }`}
      >
        <span className="text-xl lg:text-2xl font-bold text-dark-taupe tracking-tight">
          {category.title}
        </span>
        <div className={`w-8 h-8 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
          <svg className="w-6 h-6 text-dark-taupe/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[2000px] mt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-10 py-2 bg-[#f8f7f5]/40 rounded-3xl border border-dark-taupe/5">
          {category.items.map((item, idx) => (
            <AccordionItem key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function FAQPage() {
  return (
    <>
      <Header />
      
      <main className="pt-20 bg-[#fbfaf8]">
        {/* Hero Section */}
        <section className="py-24 text-center px-6">
          <div className="inline-flex items-center rounded-full bg-white px-4 py-1.5 border border-dark-taupe/10 shadow-sm mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-dark-taupe/60">FAQ</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-light text-dark-taupe font-serif mb-6">
            Foire Aux Questions
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[#393939] font-light leading-relaxed">
            Retrouvez ici les réponses aux questions les plus fréquentes sur l'orthodontie, 
            nos traitements et le déroulement de votre parcours chez U-Smile.
          </p>
        </section>

        {/* FAQ Grid */}
        <section className="max-w-4xl mx-auto px-6 pb-24">
          {faqData.map((category, idx) => (
            <FAQCategorySection key={idx} category={category} />
          ))}
        </section>

        <AppointmentForm />
      </main>

      <Footer />
    </>
  );
}
