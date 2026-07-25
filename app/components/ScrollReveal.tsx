"use client";

import { useEffect } from "react";

// Revela suavemente los bloques al entrar en pantalla.
// No requiere tocar el resto de páginas: observa selectores existentes.
const SELECTORS = [
  ".section-head",
  ".stat-card",
  ".service-card",
  ".trust-item",
  ".split-grid .content-box",
  ".split-grid .visual-box",
  ".enterprise-layout > *",
  ".cta-box",
  ".quick-access",
].join(",");

export default function ScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(SELECTORS));

    if (reduce || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("reveal-in"));
      return;
    }

    nodes.forEach((n, i) => {
      n.classList.add("reveal");
      n.style.setProperty("--reveal-delay", `${Math.min(i % 4, 3) * 70}ms`);
    });

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach((n) => io.observe(n));

    // Failsafe: si por cualquier motivo el observador no revela un bloque
    // (pestaña en segundo plano, navegador que no compone, etc.), garantizamos
    // que TODO el contenido se vuelva visible pasado un tiempo. El contenido
    // nunca queda oculto de forma permanente.
    const failsafe = window.setTimeout(() => {
      nodes.forEach((n) => n.classList.add("reveal-in"));
    }, 1500);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return null;
}
