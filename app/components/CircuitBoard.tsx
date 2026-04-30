"use client";

import { useEffect, useRef } from "react";

/**
 * Trazas tipo PCB: solo segmentos horizontales/verticales con esquinas en 90°.
 * Cada traza termina en un "nodo LED" que pulsa al completarse.
 */
const traces = [
  { d: "M 0 80 L 120 80 L 120 40 L 260 40", node: { x: 260, y: 40 } },
  { d: "M 0 200 L 80 200 L 80 260 L 200 260 L 200 220 L 340 220", node: { x: 340, y: 220 } },
  { d: "M 400 60 L 320 60 L 320 120 L 220 120 L 220 160 L 100 160", node: { x: 100, y: 160 } },
  { d: "M 400 280 L 360 280 L 360 320 L 200 320", node: { x: 200, y: 320 } },
  { d: "M 50 360 L 180 360 L 180 300 L 280 300", node: { x: 280, y: 300 } },
  { d: "M 380 380 L 280 380 L 280 420 L 120 420", node: { x: 120, y: 420 } },
];

export default function CircuitBoard({
  className = "",
  color = "#dc2a36",
}: {
  className?: string;
  color?: string;
}) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = Array.from(svg.querySelectorAll<SVGPathElement>("path[data-trace]"));
    const nodes = Array.from(svg.querySelectorAll<SVGCircleElement>("circle[data-node]"));

    // Inicializar dasharray con la longitud real de cada path
    paths.forEach((p) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = `${len}`;
      p.style.strokeDashoffset = `${len}`;
      p.dataset.length = String(len);
    });
    nodes.forEach((n) => {
      n.style.opacity = "0";
      n.style.transformOrigin = "center";
    });

    let raf = 0;
    const start = performance.now();
    const cycle = 6000; // ms para completar un ciclo entero

    const tick = (now: number) => {
      const t = ((now - start) % cycle) / cycle; // 0 → 1

      paths.forEach((p, i) => {
        const len = parseFloat(p.dataset.length || "0");
        // Cada traza arranca con un offset distinto en el ciclo
        const offset = (i / paths.length) * 0.5;
        let progress = (t - offset) * 2; // dura la mitad del ciclo, luego se queda
        progress = Math.max(0, Math.min(1, progress));
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic

        p.style.strokeDashoffset = `${len * (1 - eased)}`;

        // Activar nodo LED cuando la traza está casi completa
        const node = nodes[i];
        if (node) {
          if (eased > 0.95) {
            const pulse = (Math.sin(now / 250) + 1) / 2; // 0 → 1
            node.style.opacity = `${0.4 + pulse * 0.6}`;
            node.setAttribute("r", String(4 + pulse * 3));
          } else {
            node.style.opacity = "0";
          }
        }
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 400 480"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {traces.map((t, i) => (
        <g key={i}>
          {/* Sombra/glow ligero */}
          <path
            d={t.d}
            fill="none"
            stroke={color}
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.08"
          />
          {/* Línea principal animada */}
          <path
            data-trace
            d={t.d}
            fill="none"
            stroke={color}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.55"
          />
          {/* Nodo LED al final */}
          <circle
            data-node
            cx={t.node.x}
            cy={t.node.y}
            r={4}
            fill={color}
            filter="url(#glow)"
          />
          {/* Punto inicial fijo */}
          <circle
            cx={parseFloat(t.d.split(" ")[1])}
            cy={parseFloat(t.d.split(" ")[2])}
            r={2}
            fill={color}
            opacity="0.3"
          />
        </g>
      ))}
    </svg>
  );
}
