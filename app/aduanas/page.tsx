import type { Metadata } from "next";
import RelatedLinks from "../components/RelatedLinks";

export const metadata: Metadata = {
  title: "Agencia Aduanal en Costa Rica | Importaciones y Exportaciones",
  description: "Servicios de agencia aduanal en Costa Rica: revisión documental, clasificación arancelaria, importación, exportación, trámites aduaneros y cumplimiento.",
  alternates: { canonical: "https://jiasesoria.com/aduanas" },
  openGraph: {
    title: "Agencia Aduanal en Costa Rica | Importaciones y Exportaciones",
    description: "Servicios de agencia aduanal en Costa Rica: revisión documental, clasificación arancelaria, importación, exportación, trámites aduaneros y cumplimiento.",
    url: "https://jiasesoria.com/aduanas",
    type: "website",
    images: ["/images/aduanas.webp"],
  },
};

const items = [
  'Revisión documental',
  'Clasificación arancelaria',
  'Importaciones',
  'Exportaciones',
  'Trámites aduaneros',
  'Acuerdos de seguridad para requisitos BASC'
];

const relatedLinks = [
  { href: "/courier", title: "Courier Internacional", text: "Compras internacionales con rastreo, prealerta y entrega confiable." },
  { href: "/transporte", title: "Transporte y seguro", text: "Coordinación de carga internacional, local y protección de mercancías." },
  { href: "/empresas", title: "Soluciones para empresas", text: "Estructura logística para empresas con operación frecuente." }
];

export default function Page() {
  return (
    <main>
      <section className="service-hero service-hero-premium">
        <div className="container service-hero-grid">
          <div className="service-hero-copy">
            <span className="section-kicker section-kicker-gold">Agencia Aduanal</span>
            <h1>Agencia aduanal en Costa Rica con control documental y cumplimiento.</h1>
            <p>Más de 20 años de experiencia apoyando operaciones de importación y exportación con revisión documental, clasificación arancelaria y trámites aduaneros.</p>
            <div className="content-actions">
              <a href="/contacto" className="btn btn-light">Consultar trámite aduanero</a>
              <a href="mailto:info@jiasesoria.com" className="btn btn-ghost">info@jiasesoria.com</a>
            </div>
          </div>

          <div className="service-visual">
            <img src="/images/aduanas.webp" alt="Agencia aduanal en Costa Rica con control documental y cumplimiento." className="service-hero-image" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container seo-grid">
          <div className="seo-content">
            <span className="section-kicker">Información del servicio</span>
            <h2>Trámites aduaneros con acompañamiento profesional.</h2>
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
