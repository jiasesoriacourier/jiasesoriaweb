type ServiceIconType =
  | "courier"
  | "aduanas"
  | "transporte"
  | "rrhh"
  | "atencion"
  | "cumplimiento"
  | "seguridad"
  | "tecnologia"
  | "experiencia"
  | "clientes"
  | "paquetes"
  | "mundo";

function ServiceIcon({ type }: { type: ServiceIconType }) {
  const icons = {
    courier: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M2.5 15.5 21.5 9 2.5 4.5v4l13 1-13 2v4Z" />
        <path d="M13.5 10.5 7 19.5" />
      </svg>
    ),
    aduanas: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M6 3h8l4 4v14H6V3Z" />
        <path d="M14 3v5h5" />
        <path d="M8.5 12h7" />
        <path d="M8.5 15.5h7" />
        <path d="M8.5 19h4" />
      </svg>
    ),
    transporte: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M3 7h11v9H3V7Z" />
        <path d="M14 10h4l3 3v3h-7v-6Z" />
        <path d="M6.5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M17.5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </svg>
    ),
    rrhh: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M2.5 21v-1.3A6.5 6.5 0 0 1 9 13.2a6.5 6.5 0 0 1 6.5 6.5V21" />
        <path d="M17 11a3 3 0 1 0-1.2-5.8" />
        <path d="M18 21v-1a5 5 0 0 0-3.2-4.7" />
      </svg>
    ),
    atencion: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </svg>
    ),
    cumplimiento: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M12 3 4 6v6c0 5 3.4 8 8 9 4.6-1 8-4 8-9V6l-8-3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </svg>
    ),
    seguridad: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M5 11V8a7 7 0 0 1 14 0v3" />
        <path d="M4 11h16v10H4V11Z" />
        <path d="M12 15v3" />
      </svg>
    ),
    tecnologia: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M4 5h16v11H4V5Z" />
        <path d="M8 20h8" />
        <path d="M12 16v4" />
        <path d="m8 12 2-2 2 2 4-5" />
      </svg>
    ),
    experiencia: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M12 6v6l4 2" />
        <path d="M21 12a9 9 0 1 1-3-6.7" />
        <path d="M21 4v6h-6" />
      </svg>
    ),
    clientes: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M2 21v-1a6 6 0 0 1 12 0v1" />
        <path d="M17 11a3 3 0 1 0-1-5.8" />
        <path d="M18 21v-1a4.8 4.8 0 0 0-3.2-4.5" />
      </svg>
    ),
    paquetes: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M3 7.5 12 3l9 4.5-9 4.5-9-4.5Z" />
        <path d="M3 7.5v9L12 21l9-4.5v-9" />
        <path d="M12 12v9" />
      </svg>
    ),
    mundo: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c3 3.2 3 14.8 0 18" />
        <path d="M12 3c-3 3.2-3 14.8 0 18" />
      </svg>
    ),
  };

  return <div className="icon-box">{icons[type]}</div>;
}

function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Accesos rápidos flotantes">
      <a href="#inicio" className="floating-button floating-home" aria-label="Ir al inicio" title="Ir al inicio">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path d="M3 10.8 12 3l9 7.8" />
          <path d="M5.5 10v10h13V10" />
          <path d="M9.5 20v-6h5v6" />
        </svg>
      </a>

      <a href="https://wa.me/50663939073" className="floating-button floating-whatsapp" aria-label="Escribir por WhatsApp" title="WhatsApp">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path d="M4.2 19.8 5.4 16A8 8 0 1 1 8 18.5l-3.8 1.3Z" />
          <path d="M9.3 8.8c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c.7 1.2 1.6 2.1 2.8 2.8l.5-.4c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.5.7-.6.3-1.3.4-2 .2-3-.8-5.2-3-6-6-.2-.7-.1-1.4.2-2Z" />
        </svg>
      </a>
    </div>
  );
}

export default function Home() {
  const services: Array<{ title: string; text: string; link: string; icon: ServiceIconType }> = [
    {
      title: "Courier Internacional",
      text: "Compras internacionales desde Miami, España, México, China y Colombia.",
      link: "#courier",
      icon: "courier",
    },
    {
      title: "Agencia Aduanal",
      text: "Revisión documental, clasificación arancelaria, importación, exportación y trámites aduaneros.",
      link: "#aduanas",
      icon: "aduanas",
    },
    {
      title: "Transporte y Seguro",
      text: "Transporte internacional, transporte local y protección de carga para operaciones comerciales.",
      link: "#transporte",
      icon: "transporte",
    },
    {
      title: "Recursos Humanos",
      text: "Apoyo empresarial en reclutamiento, planilla, evaluaciones, capacitación y procesos internos.",
      link: "#rrhh",
      icon: "rrhh",
    },
  ];

  const differentiators: Array<{ title: string; text: string; icon: ServiceIconType }> = [
    {
      title: "Atención personalizada",
      text: "Acompañamiento directo, respuesta ágil y seguimiento continuo.",
      icon: "atencion",
    },
    {
      title: "Cumplimiento normativo",
      text: "Procesos alineados a regulaciones para operar sin contratiempos.",
      icon: "cumplimiento",
    },
    {
      title: "Seguridad operativa",
      text: "Gestión de riesgos en cada etapa de la cadena logística.",
      icon: "seguridad",
    },
    {
      title: "Tecnología y trazabilidad",
      text: "Visibilidad de envíos, prealertas y control de operaciones.",
      icon: "tecnologia",
    },
  ];

  const stats: Array<{ number: string; label: string; text: string; icon: ServiceIconType }> = [
    {
      number: "+20",
      label: "años de experiencia",
      text: "en aduanas, logística y transporte internacional.",
      icon: "experiencia",
    },
    {
      number: "+30",
      label: "clientes activos",
      text: "con operaciones constantes y atención personalizada.",
      icon: "clientes",
    },
    {
      number: "+10.000",
      label: "paquetes entregados",
      text: "mediante procesos de courier y coordinación logística.",
      icon: "paquetes",
    },
    {
      number: "Global",
      label: "red de aliados",
      text: "importamos y exportamos a casi todo el mundo.",
      icon: "mundo",
    },
  ];

  const courierOrigins = ["Miami", "España", "México", "China", "Colombia"];

  const aduanaItems = [
    "Revisión documental",
    "Clasificación arancelaria",
    "Importación y exportación",
    "Trámites aduaneros",
    "Asesoría normativa",
    "Coordinación logística",
  ];

  const transportItems = [
    {
      title: "Transporte Internacional",
      text: "Coordinación de carga desde origen hasta destino con planificación y seguimiento.",
      image: "/images/transporte.png",
      alt: "Transporte internacional de carga",
    },
    {
      title: "Transporte Local",
      text: "Distribución dentro del país con trazabilidad y cumplimiento operativo.",
      image: "/images/transporte-local.png",
      alt: "Transporte local de mercancías",
    },
    {
      title: "Seguro de Carga",
      text: "Protección para mercancías durante el proceso logístico y reducción de riesgos.",
      image: "/images/seguro-carga.png",
      alt: "Seguro y control de carga",
    },
  ];

  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#inicio" className="brand" aria-label="J.I Asesoría & Courier">
            <img src="/images/logo-ji.png" alt="J.I Asesoría & Courier" className="brand-logo" />
            <div>
              <div className="brand-title">J.I Asesoría & Courier</div>
              <div className="brand-subtitle">Compras seguras, entregas confiables.</div>
            </div>
          </a>

          <nav className="main-nav" aria-label="Navegación principal">
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#courier">Courier</a>
            <a href="#aduanas">Aduanas</a>
            <a href="#transporte">Transporte</a>
            <a href="#empresas">Empresas</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <div className="header-actions">
            <a href="#contacto" className="btn btn-outline">Asesoría</a>
            <a href="https://wa.me/50663939073" className="btn btn-primary">WhatsApp</a>
          </div>
        </div>
      </header>

      <section id="inicio" className="hero hero-minimal">
        <div className="container hero-grid">
          <div className="hero-copy fade-up">
            <span className="eyebrow">Logística internacional, aduanas y courier</span>

            <h1>Logística confiable para mover tu operación con seguridad.</h1>

            <p>
              Integramos courier internacional, aduanas, transporte y soluciones empresariales
              con más de 20 años de experiencia y una red de aliados estratégicos globales.
            </p>

            <div className="hero-actions">
              <a href="#contacto" className="btn btn-light">Solicitar asesoría</a>
              <a href="#servicios" className="btn btn-ghost">Ver soluciones</a>
            </div>

            <div className="hero-proof">
              <span>+20 años de experiencia</span>
              <span>+30 clientes activos</span>
              <span>+10.000 paquetes entregados</span>
            </div>
          </div>

          <div className="hero-visual clean-visual fade-up delay-1">
            <img
              src="/images/hero-corporativo.png"
              alt="Equipo corporativo y operación logística"
              className="hero-main-image"
            />

            <div className="hero-floating-card card-shadow">
              <p className="panel-kicker">Red internacional</p>
              <h3>Agentes y aliados estratégicos para operaciones globales.</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-strip-inner">
          <span>Operación desde Miami</span>
          <span>Cobertura internacional</span>
          <span>Gestión aduanal completa</span>
          <span>Atención empresarial directa</span>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container trust-grid" aria-label="Beneficios clave">
          {differentiators.map((item) => (
            <article className="trust-item" key={item.title}>
              <ServiceIcon type={item.icon} />
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="quick-access-section" id="plataforma">
        <div className="container quick-access">
          <div>
            <span className="section-kicker">Plataforma</span>
            <h2>Accesos rápidos</h2>
            <p>Gestioná tus envíos y consultas operativas desde couriercr.com.</p>
          </div>

          <div className="quick-buttons">
            <a href="https://couriercr.com" className="btn btn-primary">Rastrear paquete</a>
            <a href="https://couriercr.com" className="btn btn-outline">Prealertar compra</a>
            <a href="https://wa.me/50663939073" className="btn btn-outline">Contactar</a>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <div className="section-head centered-head">
            <span className="section-kicker">Respaldo operativo</span>
            <h2>Experiencia, estructura y cobertura para operaciones exigentes.</h2>
            <p>
              Combinamos trayectoria, atención directa y una red internacional de agentes para
              acompañar operaciones de importación, exportación, courier y transporte.
            </p>
          </div>

          <div className="stats-grid">
            {stats.map((item) => (
              <article className="stat-card" key={item.label}>
                <ServiceIcon type={item.icon} />
                <strong>{item.number}</strong>
                <h3>{item.label}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="section services-section">
        <div className="container">
          <div className="section-head centered-head">
            <span className="section-kicker">Servicios principales</span>
            <h2>Una estructura clara para operar mejor.</h2>
            <p>
              Soluciones diseñadas para personas, importadores, empresas courier y negocios
              que necesitan continuidad operativa, cumplimiento y trazabilidad.
            </p>
          </div>

          <div className="cards-grid cards-grid-4">
            {services.map((service) => (
              <article className="service-card minimalist-card" key={service.title}>
                <ServiceIcon type={service.icon} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href={service.link} className="card-link">Conocer más</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="courier" className="section section-soft">
        <div className="container split-grid">
          <div className="visual-box clean-box">
            <img src="/images/hero-courier.png" alt="Operación courier internacional" className="feature-image" />
          </div>

          <div className="content-box">
            <span className="eyebrow eyebrow-gold">Courier Internacional</span>
            <h2>Compras internacionales con seguimiento y atención clara.</h2>
            <p>
              Miami es nuestro principal punto operativo por su velocidad y frecuencia,
              complementado con servicios desde otros orígenes estratégicos.
            </p>

            <div className="origins-bar">
              {courierOrigins.map((origin) => (
                <span key={origin} className={origin === "Miami" ? "origin-chip highlight" : "origin-chip"}>
                  {origin === "Miami" ? "Miami · vuelos diarios" : origin}
                </span>
              ))}
            </div>

            <div className="compact-list">
              <span>Dirección libre de impuestos</span>
              <span>Desde $6 por libra</span>
              <span>Rastreo y prealerta en línea</span>
              <span>Compras en Amazon, eBay y más</span>
            </div>

            <div className="content-actions">
              <a href="https://couriercr.com" className="btn btn-primary">Ir a plataforma</a>
              <a href="mailto:info@couriercr.com" className="btn btn-outline">info@couriercr.com</a>
            </div>
          </div>
        </div>
      </section>

      <section id="aduanas" className="section">
        <div className="container split-grid">
          <div className="content-box">
            <span className="section-kicker">Agencia Aduanal</span>
            <h2>Gestión aduanal con control documental y cumplimiento.</h2>
            <p>
              Más de 20 años de experiencia en procesos aduaneros, revisión documental,
              clasificación arancelaria y acompañamiento en operaciones de importación y exportación.
            </p>

            <div className="compact-list">
              {aduanaItems.map((item) => <span key={item}>{item}</span>)}
            </div>

            <div className="compliance-note">
              <strong>Seguridad y BASC:</strong> acompañamiento bajo contrato BASC,
              orientado al fortalecimiento de controles, gestión de riesgos y buenas prácticas.
            </div>

            <div className="content-actions">
              <a href="#contacto" className="btn btn-primary">Consultar servicio aduanal</a>
            </div>
          </div>

          <div className="visual-box clean-box">
            <img src="/images/aduanas.png" alt="Gestión documental y aduanal" className="feature-image" />
          </div>
        </div>
      </section>

      <section id="transporte" className="section section-soft">
        <div className="container">
          <div className="section-head centered-head">
            <span className="section-kicker">Transporte y protección de carga</span>
            <h2>Movemos tu carga con eficiencia, control y respaldo.</h2>
            <p>
              Coordinamos transporte internacional, distribución local y protección de mercancías
              mediante una red de agentes y aliados estratégicos.
            </p>
          </div>

          <div className="cards-grid cards-grid-3">
            {transportItems.map((item) => (
              <article className="service-card rich-card" key={item.title}>
                <img src={item.image} alt={item.alt} className="section-image" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="rrhh" className="section">
        <div className="container split-grid">
          <div className="visual-box clean-box">
            <img src="/images/rrhh.png" alt="Equipo profesional de recursos humanos" className="feature-image" />
          </div>

          <div className="content-box">
            <span className="section-kicker">Recursos Humanos</span>
            <h2>Apoyo empresarial para fortalecer talento y procesos.</h2>
            <p>
              Brindamos soporte en reclutamiento, administración de planilla, evaluaciones,
              capacitación y procesos internos para empresas que buscan operar con mayor orden.
            </p>

            <div className="compact-list">
              <span>Reclutamiento y selección</span>
              <span>Administración de planilla</span>
              <span>Evaluaciones y capacitación</span>
              <span>Acompañamiento empresarial</span>
            </div>

            <div className="content-actions">
              <a href="mailto:info@jiasesoria.com" className="btn btn-outline">info@jiasesoria.com</a>
            </div>
          </div>
        </div>
      </section>

      <section id="empresas" className="section section-dark">
        <div className="container enterprise-layout">
          <div className="content-box white-text">
            <span className="section-kicker section-kicker-gold">Soluciones para empresas</span>
            <h2>Estructura logística para empresas que operan con volumen.</h2>
            <p>
              Diseñamos soluciones para importadores, empresas courier y negocios que requieren
              costos claros, continuidad operativa y control total de sus envíos.
            </p>

            <div className="enterprise-badges">
              <span>Tarifas por volumen</span>
              <span>Courier por gramo desde Miami</span>
              <span>Operación constante</span>
              <span>Soporte empresarial</span>
            </div>

            <div className="enterprise-minimal-list">
              <div>
                <strong>Tarifa por volumen</strong>
                <span>Condiciones preferenciales según kilos mensuales y frecuencia operativa.</span>
              </div>
              <div>
                <strong>Courier por gramo desde Miami</strong>
                <span>Modelo flexible para empresas courier y negocios con alto flujo de compras.</span>
              </div>
              <div>
                <strong>Plataforma y trazabilidad</strong>
                <span>Rastreo, prealerta y visibilidad para tu equipo o tus propios clientes.</span>
              </div>
            </div>

            <div className="content-actions">
              <a href="#contacto" className="btn btn-gold">Solicitar propuesta</a>
              <a href="mailto:info@couriercr.com" className="btn btn-ghost">info@couriercr.com</a>
            </div>
          </div>

          <div className="enterprise-visual-card">
            <img src="/images/empresas.png" alt="Reunión empresarial enfocada en courier" className="feature-image" />

            <div className="enterprise-summary">
              <p className="panel-kicker">B2B</p>
              <h3>Para empresas que necesitan operar con continuidad.</h3>
              <p>
                Menos fricción operativa, mejores costos y una experiencia más profesional para tu equipo
                y tus clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="section contact-section">
        <div className="container">
          <div className="cta-box">
            <span className="section-kicker section-kicker-gold">Contacto</span>

            <h2>Hablemos de tu próxima operación o proyecto.</h2>

            <p>
              Completa el formulario o escríbenos directamente por WhatsApp. Te ayudamos a
              revisar la mejor solución según tu necesidad.
            </p>

            <div className="contact-grid">
              <form
                action="https://formspree.io/f/TU_ID_AQUI"
                method="POST"
                className="contact-form"
              >
                <h3>Envíanos tu consulta</h3>

                <input type="text" name="nombre" placeholder="Nombre completo" required />
                <input type="text" name="contacto" placeholder="Teléfono o WhatsApp" required />
                <input type="email" name="email" placeholder="Correo electrónico" required />
                <textarea name="mensaje" placeholder="Cuéntanos qué necesitas..." required />

                <button type="submit" className="btn btn-primary">
                  Enviar consulta
                </button>

                <p className="form-note">Te respondemos en menos de 24 horas hábiles.</p>
              </form>

              <div className="contact-info">
                <h3>Contacto directo</h3>

                <p>
                  También puedes escribirnos de forma inmediata para consultas, cotizaciones
                  o seguimiento de servicios.
                </p>

                <div className="content-actions">
                  <a href="https://wa.me/50663939073" className="btn btn-light">WhatsApp</a>
                  <a href="mailto:info@jiasesoria.com" className="btn btn-ghost">info@jiasesoria.com</a>
                </div>

                <div className="contact-emails">
                  <p><strong>Courier:</strong> info@couriercr.com</p>
                  <p><strong>Servicios empresariales:</strong> info@jiasesoria.com</p>
                </div>

                <div className="cta-note">Compras seguras, entregas confiables.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FloatingActions />

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h4>J.I Asesoría & Courier</h4>
            <p>
              Soluciones integrales en logística, aduanas, transporte, recursos humanos y courier
              con enfoque en confianza, eficiencia y atención personalizada.
            </p>
          </div>

          <div>
            <h5>Servicios</h5>
            <ul>
              <li><a href="#courier">Courier Internacional</a></li>
              <li><a href="#aduanas">Agencia Aduanal</a></li>
              <li><a href="#transporte">Transporte y Seguro</a></li>
              <li><a href="#rrhh">Recursos Humanos</a></li>
              <li><a href="#empresas">Soluciones para Empresas</a></li>
            </ul>
          </div>

          <div>
            <h5>Accesos</h5>
            <ul>
              <li><a href="https://couriercr.com">Rastrear paquete</a></li>
              <li><a href="https://couriercr.com">Prealertar compra</a></li>
              <li><a href="#empresas">Empresas</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="#inicio">Regresar al inicio</a></li>
            </ul>
          </div>

          <div>
            <h5>Contacto</h5>
            <ul>
              <li><a href="https://wa.me/50663939073">WhatsApp: 6393-9073</a></li>
              <li><a href="mailto:info@couriercr.com">Courier: info@couriercr.com</a></li>
              <li><a href="mailto:info@jiasesoria.com">Servicios: info@jiasesoria.com</a></li>
              <li>Horario: Lunes a Viernes</li>
              <li>Atención nacional</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
