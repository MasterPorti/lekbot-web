"use client";

import Image from "next/image";
import {
  Cpu,
  Users,
  BookOpen,
  Bot,
  Menu,
  X,
  Zap,
  ChevronRight,
  ArrowRight,
  Package,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  {
    label: "Inicio",
    href: "/",
    path: "/",
    section: "",
    icon: <Bot size={18} />,
  },
  {
    label: "Quiénes Somos",
    href: "/#quienes-somos",
    path: "/",
    section: "quienes-somos",
    icon: <Users size={18} />,
  },
  {
    label: "Blog",
    href: "/#blog",
    path: "/",
    section: "blog",
    icon: <BookOpen size={18} />,
  },
  {
    label: "Lek 2",
    href: "/lek-2",
    path: "/lek-2",
    section: "lek2pro",
    icon: <Cpu size={18} />,
  },
  {
    label: "App Control",
    href: "/#app",
    path: "/",
    section: "app",
    icon: <Zap size={18} />,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [scrollSection, setScrollSection] = useState("");
  const [open, setOpen] = useState(false);
  const [codigoOpen, setCodigoOpen] = useState(false);
  const [codigo, setCodigo] = useState("");
  const [codigoError, setCodigoError] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Cerrar popover al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        setCodigoOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    return (
      link.path === "/" && link.section !== "" && scrollSection === link.section
    );
  };

  function handleContinuar() {
    if (!codigo.trim()) return;
    setCodigoError(true);
  }

  return (
    <nav
      className={`bg-black/95 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-white/10
                  transition-transform duration-300 ${
                    visible ? "translate-y-0" : "-translate-y-full"
                  }`}
    >
      {/* Barra principal */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center w-40">
          <Link href="/" className="flex items-center gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1000 1000" fill="none">
<rect width="1000" height="1000" fill="#DC2A37"/>
<path d="M297.146 600.215L323.241 631.9L323.355 632.039V659.055L323.3 659.161L306.274 692.606H328.064L328.214 692.792L349.338 718.887L349.45 719.023V751.047L349.358 751.176L328.234 780.999L328.083 781.21H97.1323L96.9907 781.083L74.6235 761.202L74.4556 761.053V600.032H296.997L297.146 600.215ZM168.893 706.275V750.145H234.331L234.463 749.852L243.783 729.349L243.874 729.15L243.79 728.949L234.47 706.583L234.341 706.275H168.893ZM168.893 634.204V673.104H221.855L222.002 672.875L234.428 653.614L234.606 653.339L234.424 653.065L221.85 634.204H168.893Z" fill="white"/>
<path d="M67.5 168.106V561.39H394.926L342.115 466.953H186.79V168.106H67.5Z" fill="white"/>
<path d="M366.346 427.811L439.66 558.905H645.311L589.394 466.953H425.37V403.58H535.962V318.462H425.37V256.953H560.192L608.033 165H304.837V427.811H366.346Z" fill="white"/>
<path d="M668.299 558.905H718.624V403.58L829.216 558.905H962.796L842.263 354.497L962.796 165H829.216L718.624 318.462V165H645.311L608.033 271.243V427.811L668.299 558.905Z" fill="white"/>
<path d="M584.177 610.143L633.26 666.06L633.384 666.202V727.448L633.281 727.583L584.198 791.577L584.048 791.772H418.298L418.147 791.588L365.958 727.594L365.846 727.456V666.193L365.98 666.049L418.17 610.132L418.317 609.973H584.027L584.177 610.143ZM474.798 657.814L474.65 658.048L460.982 679.793L460.905 679.916V722.452L460.982 722.574L474.65 744.32L474.798 744.553H528.77L528.918 744.336L543.829 722.59L543.917 722.463V679.905L543.829 679.777L528.918 658.031L528.77 657.814H474.798Z" fill="white"/>
<path d="M750.311 652.101V791.272H845.991V652.101H945.399V610.473H629.157L667.056 652.101H750.311Z" fill="white"/>
</svg>
          </Link>
        </div>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <li key={link.label} className="whitespace-nowrap">
                {active ? (
                  <span
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium
                                   text-[#dc2a36] bg-white/5 cursor-default select-none"
                  >
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
        <div
          className="hidden md:flex items-center justify-end w-44"
          ref={popoverRef}
        >
          <div className="relative">
            <button
              onClick={() => setCodigoOpen((v) => !v)}
              className="flex items-center gap-2 bg-[#dc2a36] text-white text-sm font-bold
                         px-5 py-2.5 rounded-full hover:bg-[#f03344] transition-all duration-200"
            >
              Ingresar
              <ChevronRight
                size={15}
                className={`transition-transform duration-200 ${
                  codigoOpen ? "rotate-90" : ""
                }`}
              />
            </button>

            {/* Popover */}
            {codigoOpen && (
              <div className="absolute top-full right-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 z-50">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  Acceso con kit
                </p>
                <p className="text-sm font-semibold text-gray-900 mb-4">
                  Ingresa tu código Lek
                </p>

                <input
                  type="text"
                  value={codigo}
                  onChange={(e) => {
                    setCodigo(e.target.value);
                    setCodigoError(false);
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleContinuar()}
                  placeholder="Ej: LEK-XXXX-XXXX"
                  className={`w-full border rounded-xl px-4 py-2.5 text-sm
                             focus:outline-none transition-colors mb-1 placeholder:text-gray-300
                             ${
                               codigoError
                                 ? "border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400/20"
                                 : "border-gray-200 focus:border-[#dc2a36] focus:ring-1 focus:ring-[#dc2a36]/20"
                             }`}
                />
                {codigoError && (
                  <p className="text-xs text-red-500 font-medium mb-2">
                    Código incorrecto. Verifica e intenta de nuevo.
                  </p>
                )}
                {!codigoError && <div className="mb-2" />}

                <button
                  onClick={handleContinuar}
                  disabled={!codigo.trim()}
                  className="w-full flex items-center justify-center gap-2 bg-[#dc2a36] text-white
                             text-sm font-bold py-2.5 rounded-full hover:bg-[#f03344]
                             transition-all duration-200 disabled:opacity-40"
                >
                  Continuar
                  <ArrowRight size={15} />
                </button>

                <div className="border-t border-gray-100 mt-4 pt-4">
                  <p className="text-[11px] text-gray-400 mb-2">
                    ¿No tienes tu kit aún?
                  </p>
                  <Link
                    href="/lek-2"
                    onClick={() => setCodigoOpen(false)}
                    className="flex items-center justify-between bg-[#dc2a36]/5 hover:bg-[#dc2a36]/10
                               border border-[#dc2a36]/20 rounded-xl px-4 py-3 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Package size={15} className="text-[#dc2a36]" />
                      <span className="text-sm font-semibold text-gray-800">
                        Consigue tu Lek 2
                      </span>
                    </div>
                    <ChevronRight
                      size={14}
                      className="text-[#dc2a36] group-hover:translate-x-0.5 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            )}
          </div>
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
                    ${open ? "max-h-130 border-t border-white/10" : "max-h-0"}`}
      >
        <ul className="flex flex-col px-4 pb-4 pt-2 gap-1">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <li key={link.label}>
                {active ? (
                  <div
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium
                                  text-[#dc2a36] bg-white/5 pointer-events-none select-none"
                  >
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
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-3">
              <p className="text-xs font-semibold text-gray-400">
                Ingresa tu código Lek
              </p>
              <input
                type="text"
                value={codigo}
                onChange={(e) => {
                  setCodigo(e.target.value);
                  setCodigoError(false);
                }}
                placeholder="Ej: LEK-XXXX-XXXX"
                className={`w-full bg-white/10 border rounded-xl px-4 py-2.5 text-sm text-white
                           focus:outline-none transition-colors placeholder:text-gray-600
                           ${
                             codigoError
                               ? "border-red-500"
                               : "border-white/10 focus:border-[#dc2a36]"
                           }`}
              />
              {codigoError && (
                <p className="text-xs text-red-400 font-medium -mt-1">
                  Código incorrecto. Verifica e intenta de nuevo.
                </p>
              )}
              <button
                onClick={handleContinuar}
                disabled={!codigo.trim()}
                className="flex items-center justify-center gap-2 bg-[#dc2a36] text-white text-sm font-bold
                           py-2.5 rounded-full hover:bg-[#f03344] transition-all duration-200 disabled:opacity-40"
              >
                Continuar <ArrowRight size={14} />
              </button>
              <Link
                href="/lek-2"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 text-gray-400 hover:text-white
                           text-xs font-medium transition-colors"
              >
                <Package size={13} />
                ¿Aún no tienes tu Lek 2? Consíguelo aquí
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
