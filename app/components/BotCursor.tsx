"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Mini robot que sigue al cursor con lerp (smooth follow).
 * - Rota suavemente hacia la dirección del movimiento.
 * - Parpadea cada cierto tiempo.
 * - "Saluda" cuando el cursor lleva quieto >2s.
 * - Se oculta en touch devices.
 */
export default function BotCursor() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Detectar si es touch device → no mostrar
    const isTouch =
      window.matchMedia("(hover: none)").matches ||
      "ontouchstart" in window;
    if (isTouch) return;

    setEnabled(true);

    const wrap = wrapRef.current;
    if (!wrap) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let botX = mouseX;
    let botY = mouseY;
    let lastMoveT = performance.now();
    let blinkUntil = 0;
    let waving = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMoveT = performance.now();
      waving = false;
    };

    window.addEventListener("mousemove", onMove);

    // Parpadeo programado
    const scheduleBlink = () => {
      blinkUntil = performance.now() + 140;
      setTimeout(scheduleBlink, 2500 + Math.random() * 3000);
    };
    scheduleBlink();

    const tick = () => {
      // Lerp suave hacia el cursor (con offset para no taparlo)
      const targetX = mouseX + 28;
      const targetY = mouseY + 28;
      botX += (targetX - botX) * 0.12;
      botY += (targetY - botY) * 0.12;

      const dx = targetX - botX;
      const dy = targetY - botY;
      const moving = Math.hypot(dx, dy) > 1.2;
      const angle = moving ? Math.atan2(dy, dx) * 4 : 0; // tilt sutil
      const tilt = Math.max(-12, Math.min(12, angle));

      const now = performance.now();
      const idle = now - lastMoveT > 1800;
      if (idle && !waving) waving = true;

      const blinking = now < blinkUntil;
      const wave = waving ? Math.sin(now / 180) * 8 : 0;

      wrap.style.transform = `translate3d(${botX - 18}px, ${botY - 18}px, 0) rotate(${tilt}deg)`;

      // Aplicar estado de párpado / antena
      const lid = wrap.querySelector<SVGRectElement>("[data-lid]");
      const antenna = wrap.querySelector<SVGCircleElement>("[data-antenna]");
      if (lid) lid.setAttribute("height", blinking ? "6" : "0");
      if (antenna) {
        const pulse = (Math.sin(now / 400) + 1) / 2;
        antenna.setAttribute("r", String(2 + pulse * 1.4));
        antenna.setAttribute("opacity", String(0.6 + pulse * 0.4));
      }

      // Brazo saludando
      const arm = wrap.querySelector<SVGGElement>("[data-arm]");
      if (arm) {
        arm.setAttribute("transform", `rotate(${wave} 28 22)`);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 36,
        height: 36,
        pointerEvents: "none",
        zIndex: 9999,
        willChange: "transform",
        transition: "opacity 0.3s",
      }}
    >
      <svg viewBox="0 0 40 40" width="36" height="36">
        {/* Antena */}
        <line x1="20" y1="6" x2="20" y2="12" stroke="#dc2a36" strokeWidth="1.5" strokeLinecap="round" />
        <circle data-antenna cx="20" cy="5" r="2.5" fill="#dc2a36" />

        {/* Cabeza/cuerpo */}
        <rect
          x="8"
          y="12"
          width="24"
          height="20"
          rx="6"
          fill="#1a1a1a"
          stroke="#dc2a36"
          strokeWidth="1.5"
        />

        {/* Pantalla/cara */}
        <rect x="11" y="15" width="18" height="12" rx="3" fill="#0d0d0d" />

        {/* Ojos */}
        <circle cx="16" cy="20" r="1.8" fill="#dc2a36" />
        <circle cx="24" cy="20" r="1.8" fill="#dc2a36" />

        {/* Párpado (animado) */}
        <rect data-lid x="11" y="15" width="18" height="0" fill="#1a1a1a" rx="2" />

        {/* Sonrisa LED */}
        <path d="M 16 24 Q 20 26 24 24" stroke="#dc2a36" strokeWidth="1" fill="none" strokeLinecap="round" />

        {/* Brazo derecho (animado para saludar) */}
        <g data-arm>
          <line x1="32" y1="22" x2="36" y2="20" stroke="#dc2a36" strokeWidth="2" strokeLinecap="round" />
          <circle cx="36" cy="20" r="1.8" fill="#dc2a36" />
        </g>

        {/* Brazo izquierdo */}
        <line x1="8" y1="22" x2="4" y2="24" stroke="#dc2a36" strokeWidth="2" strokeLinecap="round" />
        <circle cx="4" cy="24" r="1.5" fill="#dc2a36" />
      </svg>
    </div>
  );
}
