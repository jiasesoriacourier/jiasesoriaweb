"use client";

import { useEffect, useRef, useState } from "react";

// Anima un número contando hacia arriba cuando entra en pantalla.
// Conserva prefijos ("+"), separador de miles ("10.000") y texto ("Global").
export default function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^(\D*)([\d.]+)(\D*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const [, prefix, numStr, suffix] = match;
    const hadThousands = numStr.includes(".");
    const target = parseInt(numStr.replace(/\./g, ""), 10);
    if (!Number.isFinite(target)) {
      setDisplay(value);
      return;
    }

    const fmt = (n: number) =>
      prefix + (hadThousands ? n.toLocaleString("de-DE") : String(n)) + suffix;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      setDisplay(fmt(target));
      return;
    }

    setDisplay(fmt(0));

    const animate = () => {
      const duration = 1400;
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        setDisplay(fmt(Math.round(eased * target)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !done.current) {
            done.current = true;
            animate();
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return <span ref={ref}>{display}</span>;
}
