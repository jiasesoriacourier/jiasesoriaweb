import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "J.I Asesoría & Courier",
  description: "Soluciones logísticas, courier y empresariales con atención personalizada, cobertura nacional y plataforma integrada."
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
