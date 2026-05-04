function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.4 8.2H16V5.5c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.3v2.4H6.7v3h2.7v7.5h3.3v-7.5h2.7l.4-3h-3.1V10c0-.9.2-1.8 1.7-1.8Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.8 2.8h8.4a5 5 0 0 1 5 5v8.4a5 5 0 0 1-5 5H7.8a5 5 0 0 1-5-5V7.8a5 5 0 0 1 5-5Zm0 2.2a2.8 2.8 0 0 0-2.8 2.8v8.4A2.8 2.8 0 0 0 7.8 19h8.4a2.8 2.8 0 0 0 2.8-2.8V7.8A2.8 2.8 0 0 0 16.2 5H7.8Zm4.2 3.3a3.7 3.7 0 1 1 0 7.4 3.7 3.7 0 0 1 0-7.4Zm0 2.2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm4-2.8a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 8.8H3.6v11.1h2.9V8.8ZM5.1 3.7a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4Zm15.3 9.8c0-3-1.6-4.9-4.1-4.9-1.9 0-2.7 1-3.2 1.8V8.8h-2.8v11.1h2.9v-5.5c0-1.5.3-2.9 2.1-2.9 1.8 0 1.8 1.7 1.8 3v5.4h2.9v-6.4Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.2 19.8 5.4 16A8 8 0 1 1 8 18.5l-3.8 1.3Z" />
      <path d="M9.3 8.8c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c.7 1.2 1.6 2.1 2.8 2.8l.5-.4c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.5.7-.6.3-1.3.4-2 .2-3-.8-5.2-3-6-6-.2-.7-.1-1.4.2-2Z" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h4>J.I Asesoría & Courier</h4>
          <p>
            Soluciones integrales en courier internacional, aduanas, transporte,
            recursos humanos y servicios empresariales en Costa Rica.
          </p>

          <div className="social-follow">
            <strong>Síguenos para consejos, novedades y soluciones logísticas.</strong>

            <div className="social-icons" aria-label="Redes sociales">
              <a href="https://www.facebook.com/jiasesoria" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/jiasesoria" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://www.linkedin.com/in/j-i-asesor%C3%ADa-courier-948845381/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>

            <a
              href="https://whatsapp.com/channel/0029VbCZyX3JP21CTMrqIv43"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-channel"
            >
              <span className="whatsapp-channel-icon"><WhatsAppIcon /></span>
              <span>Canal oficial de WhatsApp</span>
            </a>
          </div>
        </div>

        <div>
          <h5>Servicios</h5>
          <ul>
            <li><a href="/courier">Courier Internacional</a></li>
            <li><a href="/aduanas">Agencia Aduanal</a></li>
            <li><a href="/transporte">Transporte y Seguro</a></li>
            <li><a href="/rrhh">Recursos Humanos</a></li>
            <li><a href="/empresas">Soluciones para Empresas</a></li>
          </ul>
        </div>

        <div>
          <h5>Accesos</h5>
          <ul>
            <li><a href="https://couriercr.com">Rastrear paquete</a></li>
            <li><a href="https://couriercr.com">Prealertar compra</a></li>
            <li><a href="/empresas">Empresas</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/">Regresar al inicio</a></li>
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
  );
}
