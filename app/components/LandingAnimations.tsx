"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LandingAnimations() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Solo animaciones de entrada, sin ScrollTrigger
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    heroTl.fromTo(
      ".hero-badge",
      { opacity: 0, y: -20, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6 }
    );

    heroTl.fromTo(
      ".hero-title",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.3"
    );

    heroTl.fromTo(
      ".hero-circle",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)" },
      "-=0.5"
    );

    heroTl.fromTo(
      ".hero-robot",
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    );

    heroTl.fromTo(
      ".hero-cta",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.15 },
      "-=0.4"
    );

    heroTl.fromTo(
      ".hero-desc",
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      "-=0.3"
    );

    heroTl.fromTo(
      ".hero-specs",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.2"
    );

    // Pulso suave en círculos
    gsap.to(".hero-circle", {
      scale: 1.03,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.15,
      delay: 1.5,
    });

  }, []);

  return null;
}
