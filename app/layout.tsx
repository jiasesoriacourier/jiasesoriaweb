import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import FloatingActions from "./components/FloatingActions";

export const metadata: Metadata = {
  metadataBase: new URL("https://jiasesoria.com"),
  title: {
    default: "J.I Asesoría & Courier | Courier, Aduanas y Logística Internacional en Costa Rica",
    template: "%s | J.I Asesoría & Courier",
  },
  description:
    "Courier internacional, agencia aduanal, importaciones, exportaciones, transporte, seguro de carga y soluciones empresariales en Costa Rica. Más de 20 años de experiencia.",
  keywords: [
    "courier Costa Rica",
    "courier internacional Costa Rica",
    "courier Miami Costa Rica",
    "agencia aduanal Costa Rica",
    "agente aduanal Costa Rica",
    "importaciones Costa Rica",
    "exportaciones Costa Rica",
    "logística internacional Costa Rica",
    "transporte internacional Costa Rica",
    "transporte local Costa Rica",
    "seguro de carga Costa Rica",
    "courier para empresas",
    "tarifas courier por volumen",
    "courier por gramo desde Miami",
    "recursos humanos Costa Rica",
    "acuerdos de seguridad BASC",
  ],
  authors: [{ name: "J.I Asesoría & Courier" }],
  creator: "J.I Asesoría & Courier",
  publisher: "J.I Asesoría & Courier",
  alternates: { canonical: "https://jiasesoria.com" },
  openGraph: {
    title: "J.I Asesoría & Courier | Courier, Aduanas y Logística Internacional",
    description:
      "Soluciones integrales en courier, aduanas, transporte internacional, seguro de carga y servicios empresariales en Costa Rica.",
    url: "https://jiasesoria.com",
    siteName: "J.I Asesoría & Courier",
    locale: "es_CR",
    type: "website",
    images: [
      {
        url: "/images/hero-corporativo.webp",
        width: 1200,
        height: 630,
        alt: "J.I Asesoría & Courier - Logística, aduanas y courier internacional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "J.I Asesoría & Courier | Courier, Aduanas y Logística Internacional",
    description:
      "Courier internacional, agencia aduanal, transporte y soluciones empresariales en Costa Rica.",
    images: ["/images/hero-corporativo.webp"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CR">
      <body>
        <SiteHeader />
        {children}
        <FloatingActions />
        <SiteFooter />
      </body>
    </html>
  );
}
