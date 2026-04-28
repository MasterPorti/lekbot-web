"use client";

import { useEffect, useRef } from "react";

/**
 * Genera el path SVG de un engrane circular con dientes trapezoidales.
 * - teeth: número de dientes
 * - outerR: radio exterior (punta del diente)
 * - innerR: radio interior (base del diente)
 * - holeR: radio del agujero central
 */
function gearPath(teeth: number, outerR: number, innerR: number, holeR: number) {
  const step = (Math.PI * 2) / teeth;
  const toothW = step * 0.35; // ancho angular del diente (en la punta)
  const baseW = step * 0.5; // ancho angular en la base
  let d = "";

  for (let i = 0; i < teeth; i++) {
    const a = i * step;
    const a1 = a - baseW / 2;
    const a2 = a - toothW / 2;
    const a3 = a + toothW / 2;
    const a4 = a + baseW / 2;

    const p1 = [Math.cos(a1) * innerR, Math.sin(a1) * innerR];
    const p2 = [Math.cos(a2) * outerR, Math.sin(a2) * outerR];
    const p3 = [Math.cos(a3) * outerR, Math.sin(a3) * outerR];
    const p4 = [Math.cos(a4) * innerR, Math.sin(a4) * innerR];

    d +=
      (i === 0 ? `M ${p1[0]} ${p1[1]}` : `L ${p1[0]} ${p1[1]}`) +
      ` L ${p2[0]} ${p2[1]} L ${p3[0]} ${p3[1]} L ${p4[0]} ${p4[1]}`;
  }
  d += " Z";

  // Agujero central (subpath en sentido contrario para hueco real con fill-rule:evenodd)
  d += ` M ${holeR} 0`;
  for (let i = 1; i <= 32; i++) {
    const a = (i / 32) * Math.PI * 2;
    d += ` L ${Math.cos(a) * holeR} ${Math.sin(a) * holeR}`;
  }
  d += " Z";

  return d;
}

interface GearConfig {
  cx: number;
  cy: number;
  teeth: number;
  outerR: number;
  color: string;
  /** velocidad base; el signo determina dirección */
  speed: number;
  opacity?: number;
}

const gears: GearConfig[] = [
  { cx: 100, cy: 100, teeth: 16, outerR: 70, color: "#dc2a36", speed: 0.4, opacity: 0.18 },
  { cx: 230, cy: 80, teeth: 12, outerR: 50, color: "#f07078", speed: -0.55, opacity: 0.22 },
  { cx: 320, cy: 180, teeth: 20, outerR: 85, color: "#dc2a36", speed: 0.32, opacity: 0.14 },
  { cx: 180, cy: 240, teeth: 10, outerR: 42, color: "#e84d5a", speed: -0.65, opacity: 0.2 },
];

export default function Gears({ className = "" }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const groups = Array.from(
      svg.querySelectorAll<SVGGElement>("g[data-gear]"),
    );

    let raf = 0;
    let last = performance.now();
    const angles = gears.map(() => Math.random() * 360);

    const tick = (now: number) => {
      const dt = (now - last) / 16.6667; // normalizado a frames de 60fps
      last = now;

      groups.forEach((g, i) => {
        angles[i] += gears[i].speed * dt;
        g.setAttribute(
          "transform",
          `translate(${gears[i].cx} ${gears[i].cy}) rotate(${angles[i]})`,
        );
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 420 320"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      {gears.map((g, i) => (
        <g
          key={i}
          data-gear
          transform={`translate(${g.cx} ${g.cy})`}
          style={{ opacity: g.opacity ?? 0.2 }}
        >
          <path
            d={gearPath(g.teeth, g.outerR, g.outerR * 0.78, g.outerR * 0.22)}
            fill={g.color}
            fillRule="evenodd"
          />
          {/* Detalle de tornillos internos */}
          <circle cx={0} cy={0} r={g.outerR * 0.12} fill="#000" opacity="0.15" />
        </g>
      ))}
    </svg>
  );
}
