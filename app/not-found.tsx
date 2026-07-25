import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main>
      <section className="section contact-section">
        <div className="container">
          <div className="cta-box" style={{ textAlign: "center" }}>
            <span className="section-kicker section-kicker-gold">Error 404</span>
            <h1>Esta página no existe o fue movida.</h1>
            <p>
              Puede que el enlace esté desactualizado. Vuelve al inicio o
              escríbenos y te ayudamos a encontrar lo que necesitas.
            </p>
            <div className="content-actions" style={{ justifyContent: "center" }}>
              <Link href="/" className="btn btn-primary">Volver al inicio</Link>
              <Link href="/contacto" className="btn btn-outline">Contacto</Link>
              <a href="https://wa.me/50663939073" className="btn btn-ghost">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
