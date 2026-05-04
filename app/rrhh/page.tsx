import type { Metadata } from "next";
import RelatedLinks from "../components/RelatedLinks";

export const metadata: Metadata = {
  title: "Servicios de Recursos Humanos para Empresas en Costa Rica",
  description: "Apoyo en recursos humanos para empresas: reclutamiento, selección, administración de planilla, evaluaciones, capacitación y procesos internos.",
  alternates: { canonical: "https://jiasesoria.com/rrhh" },
  openGraph: {
    title: "Servicios de Recursos Humanos para Empresas en Costa Rica",
    description: "Apoyo en recursos humanos para empresas: reclutamiento, selección, administración de planilla, evaluaciones, capacitación y procesos internos.",
    url: "https://jiasesoria.com/rrhh",
    type: "website",
    images: ["/images/rrhh.webp"],
  },
};

const items = [
  'Reclutamiento y selección',
  'Administración de planilla',
  'Evaluaciones de personal',
  'Capacitación',
  'Procesos internos'
];

const relatedLinks = [
  { href: "/empresas", title: "Soluciones para empresas", text: "Servicios para empresas que requieren estructura operativa." },
  { href: "/contacto", title: "Contacto", text: "Consulta cómo podemos apoyar tu empresa." },
  { href: "/transporte", title: "Transporte y logística", text: "Soluciones complementarias para operación empresarial." }
];

export default function Page() {
  return (
    <main>
      <section className="service-hero service-hero-premium">
        <div className="container service-hero-grid">
          <div className="service-hero-copy">
            <span className="section-kicker section-kicker-gold">Recursos Humanos</span>
            <h1>Servicios de recursos humanos para empresas que buscan orden y continuidad.</h1>
            <p>Brindamos apoyo en reclutamiento, administración de planilla, evaluaciones, capacitación y procesos internos para empresas que necesitan fortalecer su operación.</p>
            <div className="content-actions">
              <a href="/contacto" className="btn btn-light">Solicitar apoyo empresarial</a>
              <a href="mailto:info@jiasesoria.com" className="btn btn-ghost">info@jiasesoria.com</a>
            </div>
          </div>

          <div className="service-visual">
            <img src="/images/rrhh.webp" alt="Servicios de recursos humanos para empresas que buscan orden y continuidad." className="service-hero-image" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container seo-grid">
          <div className="seo-content">
            <span className="section-kicker">Información del servicio</span>
            <h2>Recursos humanos con enfoque práctico y operativo.</h2>
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
