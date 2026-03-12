import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Le Cabinet", href: "/le-cabinet" },
  { label: "Nos Soins", href: "/nos-soins" },
  { label: "Notre Équipe", href: "/notre-equipe" },
  { label: "Nos Équipements", href: "/nos-equipements" },
  { label: "Nos Sourires", href: "/nos-sourires" },
  { label: "U.Smile Formations", href: "#formations" },
];

const services = [
  "Consultation Orthodontique",
  "Arthodontie Pédiatrique",
  "Orthodontie Interceptive de L'enfant",
  "Empreinte Optique Itero",
  "Radiologie Panoramique Numérique",
  "Orthodontie de L'adulte",
];

export default function Footer() {
  return (
    <footer className="bg-[#393939] text-white/70">
      {/* ── Main footer content ── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* ─── Column 1: Logo + Partner badges ─── */}
          <div className="flex flex-col gap-6">
            <Link href="/">
              <Image
                src="/images/logos/USMILE LOGO Horizontal - White.svg"
                alt="U-Smile Orthodontie"
                width={145}
                height={42}
              />
            </Link>
            <span className="text-[11px] uppercase tracking-[0.15em] text-white/35 font-medium">
              Orthodontie
            </span>

            {/* Partner logos (text placeholders matching the reference) */}
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-white/60 tracking-tight">
                  iTero
                </span>
                <span className="text-[9px] uppercase tracking-wider text-white/35 leading-tight block">
                  Digital<br />Practice
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-white/60 tracking-tight">
                  ✦ invisalign
                </span>
                <span className="text-[9px] uppercase tracking-wider text-white/35 block">
                  Provider
                </span>
              </div>
            </div>
          </div>

          {/* ─── Column 2: Liens Utiles ─── */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-6 font-sans">
              Liens Utiles
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Column 3: Services ─── */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-6 font-sans">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/nos-soins"
                    className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Column 4: Contact ─── */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-6 font-sans">
              Contact
            </h4>

            <div className="space-y-5">
              {/* Addresses */}
              <div className="space-y-3 text-sm text-white/60 leading-relaxed">
                <p>
                  6 Rue Abou Zaid Eddaboussi, Vélodrome.
                  <br />
                  Casablanca, 20000
                </p>
                <p>
                  Rés Malak 4 – 1<sup>er</sup> Étage Bureau N° 15 –
                  <br />
                  Bouskoura Ville Verte
                </p>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <a
                  href="tel:+212700722556"
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4 shrink-0 text-white/35"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  (212) 700-722556
                </a>
                <a
                  href="tel:+212522396210"
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors pl-[26px]"
                >
                  (212) 522-396210
                </a>
              </div>

              {/* Email */}
              <a
                href="mailto:contact@usmile.com"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-spearmint-light transition-colors"
              >
                <svg
                  className="w-4 h-4 shrink-0 text-white/35"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                contact@usmile.com
              </a>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-2.5 text-[12px] font-semibold uppercase tracking-wider text-white/80 hover:bg-white/10 hover:border-white/40 transition-all duration-300 mt-2"
              >
                Prendre Rendez-Vous
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/30 uppercase tracking-wider">
            © 2026{" "}
            <span className="text-white/50 font-medium">U.Smile.</span>{" "}
            Tous les droits réservés
          </p>
          <div className="flex gap-6 text-[11px] text-white/30 uppercase tracking-wider">
            <a
              href="#"
              className="hover:text-white/50 transition-colors duration-300"
            >
              Mentions Légales
            </a>
            <a
              href="#"
              className="hover:text-white/50 transition-colors duration-300"
            >
              Politique de Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
