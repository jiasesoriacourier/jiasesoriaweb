import type { Metadata } from "next";
import RelatedLinks from "../components/RelatedLinks";

export const metadata: Metadata = {
  title: "Soluciones Courier para Empresas | Tarifas por Volumen Costa Rica",
  description: "Soluciones courier y logísticas para empresas en Costa Rica: tarifas por volumen, courier por gramo desde Miami, plataforma, rastreo y acompañamiento.",
  alternates: { canonical: "https://jiasesoria.com/empresas" },
  openGraph: {
    title: "Soluciones Courier para Empresas | Tarifas por Volumen Costa Rica",
    description: "Soluciones courier y logísticas para empresas en Costa Rica: tarifas por volumen, courier por gramo desde Miami, plataforma, rastreo y acompañamiento.",
    url: "https://jiasesoria.com/empresas",
    type: "website",
    images: ["/images/empresas.webp"],
  },
};

const items = [
  'Tarifas por volumen según operación',
  'Courier por gramo desde Miami',
  'Plataforma para rastreo y prealerta',
  'Acompañamiento operativo',
  'Procesos para empresas courier'
];

const relatedLinks = [
  { href: "/courier", title: "Courier Internacional", text: "Base operativa para compras internacionales y manejo de paquetes." },
  { href: "/aduanas", title: "Agencia Aduanal", text: "Cumplimiento y gestión documental para comercio internacional." },
  { href: "/contacto", title: "Contacto", text: "Solicita una propuesta ajustada a tu volumen mensual." }
];

export default function Page() {
  return (
    <main>
      <section className="service-hero service-hero-premium">
        <div className="container service-hero-grid">
          <div className="service-hero-copy">
            <span className="section-kicker section-kicker-gold">Soluciones para Empresas</span>
            <h1>Estructura courier y logística para empresas que operan con volumen.</h1>
            <p>Ayudamos a importadores, empresas courier y negocios con compras constantes a trabajar con costos claros, trazabilidad y continuidad operativa.</p>
            <div className="content-actions">
              <a href="/contacto" className="btn btn-light">Solicitar propuesta</a>
              <a href="mailto:info@couriercr.com" className="btn btn-ghost">info@couriercr.com</a>
            </div>
          </div>

          <div className="service-visual">
            <img src="/images/empresas.webp" alt="Estructura courier y logística para empresas que operan con volumen." className="service-hero-image" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container seo-grid">
          <div className="seo-content">
            <span className="section-kicker">Información del servicio</span>
            <h2>Operación preparada para crecer.</h2>
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
