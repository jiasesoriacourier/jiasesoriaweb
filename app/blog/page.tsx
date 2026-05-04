import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog de Logística, Courier y Aduanas en Costa Rica",
  description:
    "Guías prácticas sobre courier internacional, importaciones, aduanas y logística en Costa Rica. Aprende cómo traer productos y optimizar tus envíos.",
};

export default function BlogPage() {
  return (
    <main className="section">
      <div className="container">

        <div className="section-head centered-head">
          <span className="section-kicker section-kicker-gold">
            Blog
          </span>
          <h1>Guías de courier, aduanas y logística</h1>
          <p>
            Aprende cómo importar, reducir costos y optimizar tus envíos
            internacionales con información clara y práctica.
          </p>
        </div>

        <div className="blog-grid">

          {/* ARTÍCULO 1 */}
          <a href="/blog/importar-miami" className="blog-card">
            <h3>Cómo importar desde Miami a Costa Rica</h3>
            <p>
              Guía completa paso a paso con costos, tiempos y recomendaciones reales.
            </p>
            <span>Leer guía</span>
          </a>

          {/* ARTÍCULO 2 */}
          <a href="/blog/costo-importar-costa-rica" className="blog-card">
            <h3>Cuánto cuesta importar a Costa Rica</h3>
            <p>
              Ejemplos reales de tarifas, factores que afectan el precio y cómo ahorrar.
            </p>
            <span>Ver costos</span>
          </a>

          {/* ARTÍCULO 3 */}
          <a href="/blog/tiempo-envio-courier" className="blog-card">
            <h3>Cuánto tarda un courier a Costa Rica</h3>
            <p>
              Tiempos reales desde Miami, China y Europa, y qué factores los afectan.
            </p>
            <span>Ver tiempos</span>
          </a>

          {/* ARTÍCULO 4 */}
          <a href="/blog/productos-restringidos" className="blog-card">
            <h3>Qué productos no se pueden importar</h3>
            <p>
              Lista de productos restringidos y recomendaciones para evitar problemas.
            </p>
            <span>Ver lista</span>
          </a>

          {/* ARTÍCULO 5 */}
          <a href="/blog/comprar-amazon-costa-rica" className="blog-card">
            <h3>Cómo comprar en Amazon desde Costa Rica</h3>
            <p>
              Aprende a comprar correctamente y recibir tus productos sin complicaciones.
            </p>
            <span>Aprender</span>
          </a>

          {/* ARTÍCULO 6 */}
          <a href="/blog/importar-para-negocio" className="blog-card">
            <h3>Cómo importar productos para negocio</h3>
            <p>
              Estrategia para importar, vender y generar ganancias en Costa Rica.
            </p>
            <span>Ver guía</span>
          </a>

        </div>

        {/* CTA FINAL */}
        <div className="cta-box centered">
          <h2>¿Tienes dudas sobre importaciones o courier?</h2>
          <p>
            Te asesoramos directamente según tu caso.
          </p>
          <a href="https://wa.me/50663939073" className="btn btn-primary">
            Escribir por WhatsApp
          </a>
        </div>

      </div>
    </main>
  );
}