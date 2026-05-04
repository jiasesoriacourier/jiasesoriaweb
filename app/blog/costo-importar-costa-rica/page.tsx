import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cuánto cuesta importar a Costa Rica (guía real con ejemplos)",
  description:
    "Descubre cuánto cuesta importar a Costa Rica desde Estados Unidos o China. Ejemplos reales, tarifas y cómo ahorrar dinero.",
};

export default function Page() {
  return (
    <main className="section">
      <div className="container blog-content">

        <h1>¿Cuánto cuesta importar a Costa Rica?</h1>

        <p>
          Importar productos a Costa Rica puede ser muy rentable, pero entender los costos es clave para evitar sorpresas.
        </p>

        <h2>Factores que afectan el costo</h2>
        <ul>
          <li>Peso del paquete</li>
          <li>Dimensiones (volumen)</li>
          <li>Tipo de producto</li>
          <li>Impuestos</li>
        </ul>

        <h2>Tipos de cobro</h2>
        <h3>Por peso</h3>
        <p>Ideal para paquetes pequeños.</p>

        <h3>Por volumen</h3>
        <p>Se usa cuando el paquete es grande pero liviano.</p>

        <h2>Ejemplo real</h2>
        <p>
          Un paquete de 5 kg puede costar entre $45 y $90 dependiendo del servicio.
        </p>

        <h2>Cómo reducir costos</h2>
        <ul>
          <li>Optimizar el tamaño del paquete</li>
          <li>Consolidar envíos</li>
          <li>Elegir el tipo de tarifa correcto</li>
        </ul>

        <div className="cta-box">
          <h3>¿Quieres cotizar tu envío?</h3>
          <a href="https://wa.me/50663939073" className="btn btn-primary">
            Escríbenos
          </a>
        </div>

      </div>
    </main>
  );
}