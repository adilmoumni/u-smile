import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/* ── Ivy Presto – elegant serif for headlines ── */
const ivyPresto = localFont({
  variable: "--font-ivy-presto",
  src: [
    {
      path: "../../public/fonts/ivy-presto/ivy-presto-text-thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/ivy-presto/ivy-presto-text.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ivy-presto/ivy-presto-headline-semi-bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/ivy-presto/ivy-presto-display-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ivy-presto/ivy-presto-display.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ivy-presto/ivy-presto-display-semi-bold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
});

/* ── Sofia Pro – clean sans-serif for body ── */
const sofiaPro = localFont({
  variable: "--font-sofia-pro",
  src: [
    {
      path: "../../public/fonts/sofia-pro/Sofia Pro UltraLight Az.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/sofia-pro/Sofia Pro ExtraLight Az.otf",
      weight: "250",
      style: "normal",
    },
    {
      path: "../../public/fonts/sofia-pro/Sofia Pro Light Az.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/sofia-pro/Sofia Pro Regular Az.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/sofia-pro/Sofia Pro Regular Italic Az.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/sofia-pro/Sofia Pro Medium Az.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/sofia-pro/Sofia Pro Semi Bold Az.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/sofia-pro/Sofia Pro Bold Az.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/sofia-pro/Sofia Pro Black Az.otf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "U-Smile | Cabinet Dentaire",
  description:
    "U-Smile — votre cabinet dentaire de confiance. Des soins modernes, un sourire éclatant.",
  keywords: ["dentiste", "cabinet dentaire", "U-Smile", "soins dentaires", "sourire"],
  openGraph: {
    title: "U-Smile | Cabinet Dentaire",
    description:
      "Des soins dentaires modernes pour un sourire éclatant.",
    type: "website",
  },
  icons: {
    icon: "/images/logos/USMILE LOGO Symbol - Dark Taupe.svg",
  },
};

import FirebaseProvider from "@/components/FirebaseProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${ivyPresto.variable} ${sofiaPro.variable} antialiased`}
      >
        <FirebaseProvider>
          {children}
        </FirebaseProvider>
      </body>
    </html>
  );
}
