import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Oswald } from "next/font/google";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";
import { EMPRESA } from "@/lib/constants";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  preload: false,
});

const title = "Aceros Marín E.I.R.L. — Corte, doblez y rolado en Ate";
const description =
  "Aceros Marín E.I.R.L.: corte, doblez, rolado, bombeado y pestañado de tapas. Parque Industrial El Asesor, Ate.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10243E",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.acerosmarin-atte.com"),
  title,
  description,
  keywords: [
    "Aceros Marín",
    "rolado de cono Lima",
    "bombeado y pestañado",
    "guillotina 6 metros",
    "plegadora 6 metros",
    "corte y plegado Lima",
    "Parque Industrial El Asesor Ate",
  ],
  authors: [{ name: EMPRESA.razonSocial }],
  creator: EMPRESA.razonSocial,
  robots: { index: true, follow: true },
  icons: { icon: EMPRESA.logo, apple: EMPRESA.logo },
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: EMPRESA.nombre,
    title,
    description,
    url: "https://www.acerosmarin-atte.com",
    images: [
      {
        url: EMPRESA.logo,
        alt: `${EMPRESA.nombre} — logo`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [EMPRESA.logo],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: EMPRESA.razonSocial,
  description,
  ...(EMPRESA.whatsapp ? { telephone: `+${EMPRESA.whatsapp}` } : {}),
  ...(EMPRESA.emails.ventas ? { email: EMPRESA.emails.ventas } : {}),
  areaServed: "Ate, Lima",
  openingHours: "Mo-Sa 08:00-18:00",
  address: {
    "@type": "PostalAddress",
    streetAddress: EMPRESA.direccion,
    addressLocality: "Ate",
    addressRegion: "Lima",
    addressCountry: "PE",
  },
  hasMap: EMPRESA.mapsUrl,
  logo: `https://www.acerosmarin-atte.com${EMPRESA.logo}`,
  image: `https://www.acerosmarin-atte.com${EMPRESA.logo}`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-PE"
      className={`${oswald.variable} ${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full bg-bone font-body text-ink"
        suppressHydrationWarning
      >
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
