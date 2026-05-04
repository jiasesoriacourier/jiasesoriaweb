export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/" className="brand" aria-label="J.I Asesoría & Courier">
          <img src="/images/logo-ji.webp" alt="J.I Asesoría & Courier" className="brand-logo" />
          <div>
            <div className="brand-title">J.I Asesoría & Courier</div>
            <div className="brand-subtitle">Compras seguras, entregas confiables.</div>
          </div>
        </a>

        <nav className="main-nav" aria-label="Navegación principal">
          <a href="/">Inicio</a>
          <a href="/courier">Courier</a>
          <a href="/aduanas">Aduanas</a>
          <a href="/transporte">Transporte</a>
          <a href="/empresas">Empresas</a>
          <a href="/rrhh">RR.HH.</a>
          <a href="/contacto">Contacto</a>
          <a href="/blog">Blog</a>
        </nav>

        <div className="header-actions">
          <a href="/contacto" className="btn btn-outline">Asesoría</a>
          <a href="https://wa.me/50663939073" className="btn btn-primary">WhatsApp</a>
        </div>
      </div>
    </header>
  );
}
