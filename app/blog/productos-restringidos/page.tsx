export const metadata = {
  title: "Qué productos no se pueden importar a Costa Rica",
  description:
    "Lista de productos restringidos y regulados para importar a Costa Rica. Conoce qué productos pueden requerir permisos especiales antes de comprar.",
};

export default function Page() {
  return (
    <main className="section">
      <div className="container blog-content">
        <h1>¿Qué productos no se pueden importar a Costa Rica?</h1>

        <p>
          No todos los productos pueden importarse libremente a Costa Rica.
          Algunos artículos están restringidos, regulados o pueden requerir
          permisos especiales antes de ser transportados.
        </p>

        <p>
          Antes de comprar en línea, es importante revisar si el producto puede
          ingresar al país para evitar atrasos, retenciones o costos adicionales.
        </p>

        <h2>Productos restringidos o delicados</h2>
        <ul>
          <li>Baterías de litio sueltas o fuera de su lugar</li>
          <li>Productos químicos</li>
          <li>Aerosoles</li>
          <li>Ciertos Alimentos</li>
          <li>Ciertos Medicamentos</li>
          <li>Ciertos Suplementos</li>
          <li>Líquidos inflamables</li>
        </ul>

        <h2>Productos regulados</h2>
        <ul>
          <li>Equipos electrónicos específicos</li>
          <li>Cosméticos</li>
          <li>Productos médicos</li>
          <li>Productos para uso veterinario</li>
          <li>Repuestos o piezas especiales</li>
          <li>Perfumes, lociones y similares</li>
        </ul>

        <h2>¿Qué puede pasar si compras un producto restringido?</h2>

        <p>
          Dependiendo del tipo de producto, el paquete puede requerir revisión
          adicional, permisos, documentación especial o incluso no poder ser
          transportado por courier.
        </p>

        <h2>¿Dónde ver la lista completa?</h2>

        <p>
          Para una lista más detallada y actualizada de productos restringidos,
          puedes consultarla directamente dentro de nuestra plataforma:
        </p>

        <p>
          <a href="https://couriercr.com" target="_blank" rel="noopener noreferrer">
            Ver lista en couriercr.com
          </a>
        </p>

        <div className="cta-box">
          <h3>¿No sabes si puedes importar un producto?</h3>
          <p>
            Escríbenos antes de comprar y te ayudamos a revisar si el producto
            puede ser transportado.
          </p>
          <a href="https://wa.me/50663939073" className="btn btn-primary">
            Consultar ahora
          </a>
        </div>
      </div>
    </main>
  );
}