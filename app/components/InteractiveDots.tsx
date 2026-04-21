"use client";

import { useEffect, useRef } from "react";

interface Dot {
  ox: number;
  oy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const SPACING = 20;
const DOT_RADIUS = 1;
const ATTRACT_RADIUS = 100;
const MAX_OFFSET = 7;
const SPRING = 0.1;
const DAMPING = 0.74;
const COLOR = "#9ca3af";

export default function InteractiveDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dots: Dot[] = [];
    let mouse = { x: -9999, y: -9999 };
    let animId: number;
    let W = 0,
      H = 0;

    function build() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas!.width = W;
      canvas!.height = H;
      dots = [];
      for (let x = SPACING / 2; x < W; x += SPACING) {
        for (let y = SPACING / 2; y < H; y += SPACING) {
          dots.push({ ox: x, oy: y, x, y, vx: 0, vy: 0 });
        }
      }
    }

    function tick() {
      ctx!.clearRect(0, 0, W, H);
      ctx!.fillStyle = COLOR;

      for (const d of dots) {
        const dx = mouse.x - d.ox;
        const dy = mouse.y - d.oy;
        const dist = Math.hypot(dx, dy);

        let tx = d.ox;
        let ty = d.oy;

        if (dist < ATTRACT_RADIUS && dist > 0) {
          const strength = (1 - dist / ATTRACT_RADIUS) * MAX_OFFSET;
          tx = d.ox + (dx / dist) * strength;
          ty = d.oy + (dy / dist) * strength;
        }

        d.vx += (tx - d.x) * SPRING;
        d.vy += (ty - d.y) * SPRING;
        d.vx *= DAMPING;
        d.vy *= DAMPING;
        d.x += d.vx;
        d.y += d.vy;

        ctx!.beginPath();
        ctx!.arc(d.x, d.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx!.fill();
      }

      animId = requestAnimationFrame(tick);
    }

    build();
    tick();

    const onMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => {
      mouse = { x: -9999, y: -9999 };
    };
    const onResize = () => build();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
