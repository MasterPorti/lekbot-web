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
  Package,
} from "lucide-react";
import { useEffect, useState } from "react";
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

  return (
    <nav
      className={`bg-white fixed top-0 left-0 right-0 z-50 border-b-[3px] border-black
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
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-extrabold
                                   text-white bg-[#dc2a36] border-2 border-black shadow-[2px_2px_0px_0px_#000] cursor-default select-none"
                  >
                    {link.icon}
                    {link.label}
                  </span>
                ) : (
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold
                               text-black hover:text-[#dc2a36] hover:bg-black/5 transition-all duration-100"
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
        <div className="hidden md:flex items-center justify-end w-44">
          <a
            href="https://app.lekbot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#facc15] text-black text-sm font-black
                       px-5 py-2 border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_#000]
                       hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000]
                       active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#000]
                       transition-all duration-100"
          >
            Ingresar
            <ChevronRight size={15} />
          </a>
        </div>

        {/* Hamburger mobile */}
        <button
          className="md:hidden text-black p-2 hover:text-[#dc2a36] transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menú mobile desplegable */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b-[3px] border-black
                    ${open ? "max-h-140 border-t-2 border-black" : "max-h-0"}`}
      >
        <ul className="flex flex-col px-4 pb-4 pt-2 gap-1 bg-white">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <li key={link.label}>
                {active ? (
                  <div
                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-base font-black
                                  text-white bg-[#dc2a36] border-2 border-black shadow-[2px_2px_0px_0px_#000] pointer-events-none select-none my-1"
                  >
                    {link.icon}
                    {link.label}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-base font-bold
                               text-black hover:text-[#dc2a36] hover:bg-black/5 transition-all duration-100 my-1"
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}

          {/* CTA mobile */}
          <li className="mt-3 flex flex-col gap-3">
            <a
              href="https://app.lekbot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#facc15] text-black text-base font-black
                         py-3 border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_#000]
                         hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000]
                         active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#000]
                         transition-all duration-100 uppercase"
            >
              Ingresar a la App
              <ChevronRight size={18} />
            </a>
            <Link
              href="/lek-2"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 text-gray-700 hover:text-black
                         text-xs font-bold transition-colors mt-1"
            >
              <Package size={13} />
              ¿Aún no tienes tu Lek 2? Consíguelo aquí
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
