"use client";

import Image from "next/image";
import { Cpu, Users, BookOpen, Zap, Bot, Menu } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Inicio", href: "#", section: "", icon: <Bot size={16} /> },
  {
    label: "Quiénes Somos",
    href: "#quienes-somos",
    section: "quienes-somos",
    icon: <Users size={16} />,
  },
  {
    label: "Blog",
    href: "#blog",
    section: "blog",
    icon: <BookOpen size={16} />,
  },
  {
    label: "Lek 2",
    href: "#lek2pro",
    section: "lek2pro",
    icon: <Cpu size={16} />,
  },
  {
    label: "App Control",
    href: "#app",
    section: "app",
    icon: <Zap size={16} />,
  },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastY || currentY < 80);
      setLastY(currentY);

      // Detectar sección activa
      const sections = navLinks.map((l) => l.section).filter(Boolean);
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) current = id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <nav
      className={`bg-black/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-white/10
                  transition-transform duration-300 ${
                    visible ? "translate-y-0" : "-translate-y-full"
                  }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center w-40">
          <Image
            src="/logo.png"
            alt="LekBot Logo"
            width={100}
            height={100}
            className="h-12.5 w-12.5  rounded-md ring-2 ring-[#dc2a36]"
          />
        </div>

        {/* Links centrados */}
        <ul className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => {
            const isActive = active === link.section;
            return (
              <li key={link.label} className="whitespace-nowrap">
                <a
                  href={isActive ? undefined : link.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? "text-[#dc2a36] bg-white/5 cursor-default pointer-events-none select-none"
                        : "text-gray-300 hover:text-[#dc2a36] hover:bg-white/5 cursor-pointer"
                    }`}
                >
                  {link.icon}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center justify-end gap-3 w-40">
          <a
            href="#app"
            className="flex items-center gap-2 bg-[#dc2a36] text-white text-sm font-bold
                       px-5 py-2.5 rounded-full hover:bg-[#f03344] transition-all duration-200 shadow-lg shadow-[#dc2a36]/30"
          >
            <Zap size={15} />
            LekApp
          </a>
        </div>

        {/* Hamburger mobile */}
        <button className="md:hidden text-white p-2 hover:text-[#dc2a36] transition-colors">
          <Menu size={26} />
        </button>
      </div>
    </nav>
  );
}
