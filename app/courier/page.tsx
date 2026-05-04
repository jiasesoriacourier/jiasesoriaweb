import type { Metadata } from "next";
import RelatedLinks from "../components/RelatedLinks";

export const metadata: Metadata = {
  title: "Courier en Costa Rica | Envíos desde Miami, China, España y México",
  description: "Servicio de courier internacional en Costa Rica con compras desde Miami, China, España, México y Colombia. Rastreo, prealerta y atención personalizada.",
  alternates: { canonical: "https://jiasesoria.com/courier" },
  openGraph: {
    title: "Courier en Costa Rica | Envíos desde Miami, China, España y México",
    description: "Servicio de courier internacional en Costa Rica con compras desde Miami, China, España, México y Colombia. Rastreo, prealerta y atención personalizada.",
    url: "https://jiasesoria.com/courier",
    type: "website",
    images: ["/images/hero-courier.webp"],
  },
};

const items = [
  'Dirección para compras internacionales',
  'Rastreo y prealerta de paquetes',
  'Operación desde Miami',
  'Servicios desde España, México, China y Colombia',
  'Tarifas empresariales según volumen'
];

const relatedLinks = [
  { href: "/aduanas", title: "Agencia Aduanal", text: "Apoyo documental y trámites para importaciones y exportaciones." },
  { href: "/empresas", title: "Soluciones para empresas", text: "Tarifas por volumen, plataforma y operación courier B2B." },
  { href: "/transporte", title: "Transporte y seguro", text: "Movimiento y protección de carga para operaciones comerciales." }
];

export default function Page() {
  return (
    <main>
      <section className="service-hero service-hero-premium">
        <div className="container service-hero-grid">
          <div className="service-hero-copy">
            <span className="section-kicker section-kicker-gold">Courier Internacional</span>
            <h1>Courier en Costa Rica para compras internacionales con respaldo profesional.</h1>
            <p>Trae tus compras desde Miami, China, España, México y Colombia con operación clara, rastreo, prealerta y atención personalizada.</p>
            <div className="content-actions">
              <a href="https://couriercr.com" className="btn btn-light">Rastrear o prealertar</a>
              <a href="mailto:info@couriercr.com" className="btn btn-ghost">info@couriercr.com</a>
            </div>
          </div>

          <div className="service-visual">
            <img src="/images/hero-courier.webp" alt="Courier en Costa Rica para compras internacionales con respaldo profesional." className="service-hero-image" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container seo-grid">
          <div className="seo-content">
            <span className="section-kicker">Información del servicio</span>
            <h2>Compra, prealerta y recibe tus paquetes en Costa Rica.</h2>
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
