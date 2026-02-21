"use client";

import Image from "next/image";
import { Cpu, Users, BookOpen, Bot, Menu, X, Zap, LogIn, UserCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { getSession, type Session } from "@/lib/session";

const navLinks = [
  { label: "Inicio",        href: "/",              path: "/",      section: "",             icon: <Bot size={18} /> },
  { label: "Quiénes Somos", href: "/#quienes-somos", path: "/",     section: "quienes-somos", icon: <Users size={18} /> },
  { label: "Blog",          href: "/#blog",          path: "/",     section: "blog",          icon: <BookOpen size={18} /> },
  { label: "Lek 2",         href: "/lek-2",          path: "/lek-2", section: "lek2pro",      icon: <Cpu size={18} /> },
  { label: "App Control",   href: "/#app",           path: "/",     section: "app",           icon: <Zap size={18} /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [visible, setVisible]           = useState(true);
  const [lastY,   setLastY]             = useState(0);
  const [scrollSection, setScrollSection] = useState("");
  const [open,    setOpen]              = useState(false);
  const [session, setSession]           = useState<Session | null>(null);

  // Leer sesión al montar
  useEffect(() => {
    setSession(getSession());
  }, [pathname]); // re-chequea al cambiar de ruta (por si hizo login/logout)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastY || currentY < 80);
      setLastY(currentY);

      const ids = navLinks.map((l) => l.section).filter(Boolean);
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) current = id;
      }
      setScrollSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  useEffect(() => {
    if (open) setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollSection]);

  const isActive = (link: (typeof navLinks)[0]) => {
    if (pathname === "/lek-2") return link.path === "/lek-2";
    return link.path === "/" && link.section !== "" && scrollSection === link.section;
  };

  const firstName = session?.name?.split(" ")[0] ?? "";

  return (
    <nav
      className={`bg-black/95 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-white/10
                  transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Barra principal */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center w-40">
          <Image
            src="/logo.png"
            alt="LekBot Logo"
            width={100}
            height={100}
            className="h-12.5 w-12.5 rounded-md ring-2 ring-[#dc2a36]"
          />
        </div>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <li key={link.label} className="whitespace-nowrap">
                {active ? (
                  <span className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium
                                   text-[#dc2a36] bg-white/5 cursor-default select-none">
                    {link.icon}
                    {link.label}
                  </span>
                ) : (
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium
                               text-gray-300 hover:text-[#dc2a36] hover:bg-white/5 transition-all duration-200"
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center justify-end gap-3 w-40">
          {session ? (
            <Link
              href="/perfil"
              className="flex items-center gap-2 bg-white/10 text-white text-sm font-bold
                         px-4 py-2.5 rounded-full hover:bg-white/20 transition-all duration-200"
            >
              <UserCircle size={16} />
              Hola, {firstName}
            </Link>
          ) : (
            <Link
              href="/checkouts"
              className="flex items-center gap-2 bg-[#dc2a36] text-white text-sm font-bold
                         px-5 py-2.5 rounded-full hover:bg-[#f03344] transition-all duration-200"
            >
              <LogIn size={15} />
              Ingresar
            </Link>
          )}
        </div>

        {/* Hamburger mobile */}
        <button
          className="md:hidden text-white p-2 hover:text-[#dc2a36] transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menú mobile desplegable */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
                    ${open ? "max-h-96 border-t border-white/10" : "max-h-0"}`}
      >
        <ul className="flex flex-col px-4 pb-4 pt-2 gap-1">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <li key={link.label}>
                {active ? (
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium
                                  text-[#dc2a36] bg-white/5 pointer-events-none select-none">
                    {link.icon}
                    {link.label}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium
                               text-gray-300 hover:text-[#dc2a36] hover:bg-white/5 transition-all duration-200"
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}

          {/* CTA mobile */}
          <li className="mt-2">
            {session ? (
              <Link
                href="/perfil"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-white/10 text-white text-sm font-bold
                           px-5 py-3 rounded-full hover:bg-white/20 transition-all duration-200 w-full"
              >
                <UserCircle size={15} />
                Hola, {firstName}
              </Link>
            ) : (
              <Link
                href="/checkouts"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#dc2a36] text-white text-sm font-bold
                           px-5 py-3 rounded-full hover:bg-[#f03344] transition-all duration-200 w-full"
              >
                <LogIn size={15} />
                Ingresar
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
