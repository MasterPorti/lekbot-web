"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const phrases = [
  "armas tú mismo",
  "creas tú mismo",
  "programas tú mismo",
  "controlas tú mismo",
  "diseñas tú mismo",
];

export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(textRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
          gsap.set(textRef.current, { y: 20 });
          gsap.to(textRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span ref={textRef} className="text-[#dc2a36] inline-block uppercase">
      {phrases[currentIndex]}
    </span>
  );
}
