"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/courier", label: "Courier" },
  { href: "/aduanas", label: "Aduanas" },
  { href: "/transporte", label: "Transporte" },
  { href: "/empresas", label: "Empresas" },
  { href: "/rrhh", label: "RR.HH." },
  { href: "/contacto", label: "Contacto" },
  { href: "/blog", label: "Blog" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Sombra sutil en el header al hacer scroll (sensación de profundidad).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del fondo cuando el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Cierra con la tecla Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="container header-inner">
        <Link href="/" className="brand" aria-label="J.I Asesoría & Courier">
          <img
            src="/images/logo-ji.webp"
            alt="J.I Asesoría & Courier"
            className="brand-logo"
            width={58}
            height={58}
          />
          <div>
            <div className="brand-title">J.I Asesoría &amp; Courier</div>
            <div className="brand-subtitle">Compras seguras, entregas confiables.</div>
          </div>
        </Link>

        <nav className="main-nav" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "active" : undefined}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link href="/contacto" className="btn btn-outline">Asesoría</Link>
          <a href="https://wa.me/50663939073" className="btn btn-primary">WhatsApp</a>
        </div>

        <button
          type="button"
          className={`nav-toggle${open ? " is-open" : ""}`}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        </div>
      </header>

      <div className={`mobile-nav-portal${open ? " is-open" : ""}`}>
        <div
          className="mobile-nav-overlay"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Navegación móvil"
          aria-hidden={!open}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "active" : undefined}
              aria-current={isActive(link.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mobile-nav-actions">
            <Link href="/contacto" className="btn btn-outline" onClick={() => setOpen(false)}>
              Asesoría
            </Link>
            <a href="https://wa.me/50663939073" className="btn btn-primary" onClick={() => setOpen(false)}>
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
