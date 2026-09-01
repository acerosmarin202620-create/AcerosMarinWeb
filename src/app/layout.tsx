import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Oswald } from "next/font/google";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";
import { EMPRESA } from "@/lib/constants";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  preload: false,
});

const title =
  "Aceros Marín — Estructuras metálicas y soldadura industrial en Lima";
const description =
  "Taller de estructuras metálicas, coberturas, carpintería metálica, corte, doblez y rolado en Lima. Cotiza tu proyecto por WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Aceros Marín",
    "estructuras metálicas Lima",
    "metalmecánica Lima",
    "coberturas metálicas",
    "carpintería metálica",
    "corte y doblez",
    "acero inoxidable Perú",
  ],
  authors: [{ name: EMPRESA.razonSocial }],
  creator: EMPRESA.razonSocial,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: EMPRESA.nombre,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: EMPRESA.razonSocial,
  telephone: `+${EMPRESA.whatsapp}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: EMPRESA.direccion,
    addressLocality: "Lima",
    addressCountry: "PE",
  },
  hasMap: EMPRESA.mapsUrl,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-PE"
      className={`${oswald.variable} ${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-bone font-body text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
