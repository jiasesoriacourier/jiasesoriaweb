import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "J.I Asesoría & Courier | Logística, Aduanas y Courier Internacional",
  description:
    "Soluciones integrales en courier internacional, agencia aduanal, transporte, seguro de carga y servicios empresariales. Más de 20 años de experiencia en logística y comercio internacional.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}