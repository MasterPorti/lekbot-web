import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Bebas_Neue } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-space",
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-display",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://lekbot.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "LekBot — Robótica para niños en México | Kit Lek 2 programable desde $1,600",
    template: "%s | LekBot",
  },
  description:
    "Kit de robótica para niños en México. Lek 2: robot educativo que tu hijo arma en casa y programa desde el celular con la LekApp. Envío gratis, sin soldadura, desde 8 años. $1,600 MXN.",
  keywords: [
    "robótica para niños",
    "robotica para niños",
    "kit de robótica para niños",
    "robot educativo para niños",
    "robot programable para niños",
    "robótica educativa México",
    "juguete STEM México",
    "juguete educativo programable",
    "regalo educativo niños",
    "kit robot armable",
    "robot Arduino para niños",
    "LekBot",
    "Lek 2",
  ],
  authors: [{ name: "LekBot" }],
  creator: "LekBot",
  publisher: "LekBot",
  applicationName: "LekBot",
  category: "Educación · Juguetes STEM · Robótica",
  alternates: {
    canonical: "/",
    languages: {
      "es-MX": "/",
      "es": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "LekBot",
    title:
      "LekBot — Robótica para niños en México | Kit Lek 2 programable",
    description:
      "El robot educativo que los niños arman en casa y programan desde el celular. Kit de robótica completo, sin soldadura, desde 8 años. Envío gratis en México.",
    images: [
      {
        url: "/lekprov22.png",
        width: 1200,
        height: 630,
        alt: "Lek 2 — Robot educativo programable para niños",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "LekBot — Robótica para niños en México | Kit Lek 2",
    description:
      "Robot educativo programable para niños. Kit completo, sin soldadura, desde 8 años. Envío gratis en México.",
    images: ["/lekprov22.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/Logo.png",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#dc2a36",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LekBot",
  url: SITE_URL,
  logo: `${SITE_URL}/Logo.png`,
  description:
    "LekBot diseña kits de robótica educativa para niños en México. Nuestro robot Lek 2 se arma en casa y se programa desde el celular con la LekApp.",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "MX",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "México",
  },
  sameAs: [
    "https://www.mercadolibre.com.mx/disco-solido-ssd-interno-adata-ultimate-su630-asu630ss-480gq-r-480gb/p/MLM26797016",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "LekBot",
  url: SITE_URL,
  inLanguage: "es-MX",
  publisher: {
    "@type": "Organization",
    name: "LekBot",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${bebasNeue.variable} antialiased font-(family-name:--font-space) bg-[#f3f4de]`}
      >
        {children}
      </body>
    </html>
  );
}
