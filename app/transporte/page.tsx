import type { Metadata } from "next";
import RelatedLinks from "../components/RelatedLinks";

export const metadata: Metadata = {
  title: "Transporte Internacional y Local en Costa Rica | Seguro de Carga",
  description: "Coordinación de transporte internacional, transporte local y seguro de carga para empresas e importadores en Costa Rica.",
  alternates: { canonical: "https://jiasesoria.com/transporte" },
  openGraph: {
    title: "Transporte Internacional y Local en Costa Rica | Seguro de Carga",
    description: "Coordinación de transporte internacional, transporte local y seguro de carga para empresas e importadores en Costa Rica.",
    url: "https://jiasesoria.com/transporte",
    type: "website",
    images: ["/images/transporte.webp"],
  },
};

const items = [
  'Transporte internacional',
  'Transporte local',
  'Seguro de carga',
  'Coordinación con aliados',
  'Trazabilidad operativa'
];

const relatedLinks = [
  { href: "/aduanas", title: "Agencia Aduanal", text: "Gestión documental y cumplimiento para importaciones y exportaciones." },
  { href: "/courier", title: "Courier Internacional", text: "Compras y paquetes desde Miami, China, España, México y Colombia." },
  { href: "/empresas", title: "Soluciones para empresas", text: "Tarifas por volumen y soporte para operaciones constantes." }
];

export default function Page() {
  return (
    <main>
      <section className="service-hero service-hero-premium">
        <div className="container service-hero-grid">
          <div className="service-hero-copy">
            <span className="section-kicker section-kicker-gold">Transporte y Seguro</span>
            <h1>Transporte internacional y local para mover tu carga con respaldo.</h1>
            <p>Coordinamos soluciones de transporte para importadores, empresas y negocios que necesitan continuidad logística, trazabilidad y protección de mercancías.</p>
            <div className="content-actions">
              <a href="/contacto" className="btn btn-light">Cotizar transporte</a>
              <a href="mailto:info@jiasesoria.com" className="btn btn-ghost">info@jiasesoria.com</a>
            </div>
          </div>

          <div className="service-visual">
            <img src="/images/transporte.webp" alt="Transporte internacional y local para mover tu carga con respaldo." className="service-hero-image" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container seo-grid">
          <div className="seo-content">
            <span className="section-kicker">Información del servicio</span>
            <h2>Soluciones para operaciones comerciales.</h2>
            <p>
              Trabajamos con atención clara, procesos ordenados y acompañamiento profesional
              para que cada operación tenga mejor control, trazabilidad y respaldo.
            </p>
            <p>
              Nuestro enfoque está pensado para personas, emprendedores y empresas que buscan
              soluciones confiables en Costa Rica con visión internacional.
            </p>
          </div>

          <div className="seo-list-card">
            <h3>Incluye</h3>
            <ul>
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
