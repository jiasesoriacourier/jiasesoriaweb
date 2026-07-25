"use client";

import { useState } from "react";
import { FORMSPREE_ENDPOINT, FORMSPREE_READY, SITE } from "../config";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    if (!FORMSPREE_READY) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    // Timeout de seguridad: si la red se queda colgada (típico en móvil),
    // no dejamos el botón bloqueado en "Enviando..." para siempre.
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      clearTimeout(timeout);
    }
  }

  if (status === "ok") {
    return (
      <div className="contact-form form-success" role="status" aria-live="polite">
        <h3>¡Mensaje enviado! ✅</h3>
        <p>
          Gracias por escribirnos. Te responderemos en menos de 24 horas hábiles.
          Si es urgente, escríbenos por WhatsApp.
        </p>
        <div className="content-actions">
          <a href={`https://wa.me/${SITE.whatsapp}`} className="btn btn-primary">
            WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h3>Envíanos tu consulta</h3>

      <label htmlFor="cf-nombre">Nombre completo</label>
      <input id="cf-nombre" type="text" name="nombre" placeholder="Nombre completo" autoComplete="name" required />

      <label htmlFor="cf-contacto">Teléfono o WhatsApp</label>
      <input id="cf-contacto" type="text" name="contacto" placeholder="Teléfono o WhatsApp" autoComplete="tel" required />

      <label htmlFor="cf-email">Correo electrónico</label>
      <input id="cf-email" type="email" name="email" placeholder="Correo electrónico" autoComplete="email" required />

      <label htmlFor="cf-mensaje">Tu mensaje</label>
      <textarea id="cf-mensaje" name="mensaje" placeholder="Cuéntanos qué necesitas..." required />

      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Enviando..." : "Enviar consulta"}
      </button>

      {status === "error" && (
        <p className="form-error" role="alert">
          No pudimos enviar el mensaje. Escríbenos por{" "}
          <a href={`https://wa.me/${SITE.whatsapp}`}>WhatsApp</a> o a{" "}
          <a href={`mailto:${SITE.emailEmpresas}`}>{SITE.emailEmpresas}</a>.
        </p>
      )}

      <p className="form-note">Te respondemos en menos de 24 horas hábiles.</p>
    </form>
  );
}
