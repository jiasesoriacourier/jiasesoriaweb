export const metadata = {
  title: "Cuánto tarda un courier a Costa Rica",
  description: "Tiempos reales de envío courier desde Miami, China, Colombia, España y México hacia Costa Rica.",
};

export default function Page() {
  return (
    <main className="section">
      <div className="container blog-content">

        <h1>¿Cuánto tarda un courier a Costa Rica?</h1>

        <p>
          El tiempo de entrega de un courier depende del país de origen,
          tipo de transporte y frecuencia de salida.
        </p>

        <h2>Tiempos de envío por país</h2>

        <ul>
          <li><strong>Miami (Aéreo):</strong> 3 a 7 días hábiles</li>
          <li><strong>Miami (Marítimo):</strong> 15 a 22 días hábiles</li>
          <li><strong>Colombia:</strong> 8 a 12 días hábiles</li>
          <li><strong>España:</strong> 5 a 12 días hábiles</li>
          <li><strong>China:</strong> 1 salida por quincena + 22 días de tránsito</li>
          <li><strong>México:</strong> 1 salida por quincena + 5 a 10 días hábiles</li>
        </ul>

        <h2>Factores que pueden afectar el tiempo</h2>

        <ul>
          <li>Procesos aduanales</li>
          <li>Condiciones climáticas</li>
          <li>Tipo de carga</li>
          <li>Frecuencia de salidas</li>
        </ul>

        <h2>Recomendación</h2>

        <p>
          Si necesitas rapidez, utiliza transporte aéreo. Si buscas reducir costos,
          el marítimo es una mejor opción.
        </p>

        <div className="cta-box">
          <h3>¿Necesitas enviar o traer mercancía?</h3>
          <a href="https://wa.me/50663939073" className="btn btn-primary">
            Consultar por WhatsApp
          </a>
        </div>

      </div>
    </main>
  );
}