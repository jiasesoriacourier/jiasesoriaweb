export default function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Accesos rápidos flotantes">
      <a href="/" className="floating-button floating-home" aria-label="Ir al inicio" title="Ir al inicio">
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
