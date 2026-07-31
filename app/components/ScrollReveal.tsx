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
  ".feature-image",
  ".enterprise-layout > *",
  ".cta-box",
  ".quick-access",
].join(",");

export default function ScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ---------- Revelado (fade + subida) ----------
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(SELECTORS));
    let io: IntersectionObserver | null = null;
    let failsafe = 0;

    if (reduce || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("reveal-in"));
    } else {
      nodes.forEach((n, i) => {
        n.classList.add("reveal");
        n.style.setProperty("--reveal-delay", `${Math.min(i % 4, 3) * 70}ms`);
      });

      io = new IntersectionObserver(
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

      nodes.forEach((n) => io!.observe(n));

      // Failsafe: asegura SOLO lo que ya está en pantalla (por si el
      // observador no disparó), sin revelar de más el contenido de abajo,
      // para que la animación al hacer scroll sí se vea.
      failsafe = window.setTimeout(() => {
        const vh = window.innerHeight;
        nodes.forEach((n) => {
          const r = n.getBoundingClientRect();
          if (r.top < vh * 0.95 && r.bottom > 0) n.classList.add("reveal-in");
        });
      }, 1200);
    }

    // ---------- Parallax: las imágenes grandes flotan más lento que el
    // scroll (sensación de profundidad). Solo escritorio y sin reduced-motion.
    // Se hace con JavaScript + requestAnimationFrame para máxima compatibilidad. ----------
    const desktop = window.matchMedia("(min-width: 861px)").matches;
    const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>(".visual-box"));
    let onScroll: (() => void) | null = null;

    if (!reduce && desktop && parallaxEls.length > 0) {
      const AMPLITUDE = 46; // px de deriva a cada lado
      let ticking = false;

      const update = () => {
        const vh = window.innerHeight;
        for (const el of parallaxEls) {
          const rect = el.getBoundingClientRect();
          // Solo si está (o casi) en pantalla, para no hacer trabajo de más.
          if (rect.bottom < -200 || rect.top > vh + 200) continue;
          const center = rect.top + rect.height / 2;
          // -1 (saliendo por arriba) .. 0 (centrado) .. +1 (entrando por abajo)
          const raw = (center - vh / 2) / (vh / 2 + rect.height / 2);
          const p = Math.max(-1, Math.min(1, raw));
          el.style.transform = `translateY(${(p * AMPLITUDE).toFixed(1)}px)`;
        }
        ticking = false;
      };

      onScroll = () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
      update();
    }

    return () => {
      if (io) io.disconnect();
      if (failsafe) window.clearTimeout(failsafe);
      if (onScroll) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        parallaxEls.forEach((el) => {
          el.style.transform = "";
        });
      }
    };
  }, []);

  return null;
}
