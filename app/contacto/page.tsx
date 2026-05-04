import type { Metadata } from "next";
import RelatedLinks from "../components/RelatedLinks";

export const metadata: Metadata = {
  title: "Contacto | J.I Asesoría & Courier",
  description:
    "Contacta a J.I Asesoría & Courier para servicios de courier, agencia aduanal, transporte, soluciones empresariales y recursos humanos.",
  alternates: { canonical: "https://jiasesoria.com/contacto" },
};

const relatedLinks = [
  { href: "/courier", title: "Courier Internacional", text: "Compras internacionales, rastreo y prealerta." },
  { href: "/aduanas", title: "Agencia Aduanal", text: "Trámites, importaciones, exportaciones y cumplimiento." },
  { href: "/empresas", title: "Soluciones para Empresas", text: "Tarifas por volumen y acompañamiento B2B." },
];

export default function ContactoPage() {
  return (
    <main>
      <section id="contacto" className="section contact-section">
        <div className="container">
          <div className="cta-box">
            <span className="section-kicker section-kicker-gold">Contacto</span>
            <h1>Hablemos de tu operación o proyecto.</h1>
            <p>
              Completa el formulario o escríbenos por WhatsApp. Te ayudamos a revisar
              la mejor solución según tu necesidad.
            </p>

            <div className="contact-grid">
              <form action="https://formspree.io/f/TU_ID_AQUI" method="POST" className="contact-form">
                <h3>Envíanos tu consulta</h3>
                <input type="text" name="nombre" placeholder="Nombre completo" required />
                <input type="text" name="contacto" placeholder="Teléfono o WhatsApp" required />
                <input type="email" name="email" placeholder="Correo electrónico" required />
                <textarea name="mensaje" placeholder="Cuéntanos qué necesitas..." required />
                <button type="submit" className="btn btn-primary">Enviar consulta</button>
                <p className="form-note">Te respondemos en menos de 24 horas hábiles.</p>
              </form>

              <div className="contact-info">
                <h3>Contacto directo</h3>
                <p>También puedes escribirnos de forma inmediata para consultas, cotizaciones o seguimiento.</p>
                <div className="content-actions">
                  <a href="https://wa.me/50663939073" className="btn btn-light">WhatsApp</a>
                  <a href="mailto:info@jiasesoria.com" className="btn btn-ghost">info@jiasesoria.com</a>
                </div>
                <div className="contact-emails">
                  <p><strong>Courier:</strong> info@couriercr.com</p>
                  <p><strong>Servicios empresariales:</strong> info@jiasesoria.com</p>
                  <p><strong>WhatsApp:</strong> 6393-9073</p>
                </div>
                <div className="cta-note">Compras seguras, entregas confiables.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
