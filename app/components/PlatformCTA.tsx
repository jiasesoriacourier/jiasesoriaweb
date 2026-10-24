import { SITE } from "../config";

type Props = {
  /** Título principal del llamado a la acción. */
  title?: string;
  /** Texto descriptivo. */
  text?: string;
};

/**
 * Llamado a la acción hacia la plataforma de aduanas en línea
 * (registro de clientes y solicitud de cotizaciones).
 * Reutilizable en Aduanas, Transporte y la página de inicio.
 */
export default function PlatformCTA({
  title = "Registrá tu cuenta y solicitá cotizaciones en línea.",
  text = "Creá una cuenta en nuestra plataforma de aduanas para solicitar cotizaciones, dar seguimiento a tus trámites y mantener el historial de tus operaciones en un solo lugar.",
}: Props) {
  const url = SITE.platformAduanas;
  const benefits = [
    "Cotizaciones en línea",
    "Seguimiento de trámites",
    "Historial de operaciones",
  ];

  return (
    <section className="section platform-cta-section" aria-label="Plataforma de aduanas en línea">
      <div className="container">
        <div className="platform-cta">
          <div className="platform-cta-copy">
            <span className="platform-cta-kicker">
              <span className="platform-cta-dot" aria-hidden="true" />
              Plataforma en línea · aduanas.jiasesoria.com
            </span>

            <h2>{title}</h2>
            <p>{text}</p>

            <ul className="platform-cta-benefits">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="platform-cta-actions">
            <a href={url} className="btn btn-gold" target="_blank" rel="noopener noreferrer">
              Crear cuenta
            </a>
            <a href={url} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
              Solicitar cotización
            </a>
            <a href={url} className="platform-cta-login" target="_blank" rel="noopener noreferrer">
              ¿Ya tenés cuenta? Iniciar sesión →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
