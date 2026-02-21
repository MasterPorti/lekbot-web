import Image from "next/image";
import Navbar from "../components/Navbar";
import {
  Truck,
  ShieldCheck,
  RotateCcw,
  Wifi,
  Smartphone,
  Cpu,
  Package,
  Star,
  Check,
  Zap,
  Play,
  ExternalLink,
} from "lucide-react";

const ML_URL =
  "https://www.mercadolibre.com.mx/disco-solido-ssd-interno-adata-ultimate-su630-asu630ss-480gq-r-480gb/p/MLM26797016";

const specs = [
  { label: "Conectividad", value: "Bluetooth" },
  { label: "Control", value: "LekApp (iOS & Android)" },
  { label: "Movimiento", value: "360° omnidireccional" },
  { label: "Sensores", value: "Proximidad + giroscopio" },
  { label: "Batería", value: "Recargable USB-C" },
  { label: "Edad recomendada", value: "+8 años" },
  { label: "Ensamblaje", value: "Sin soldadura" },
  { label: "Garantía", value: "6 meses" },
];

const incluye = [
  "Estructura del robot (piezas pre-cortadas)",
  "Motores x4 con cables incluidos",
  "Tarjeta de control LekBoard",
  "Batería recargable + cable USB-C",
  "Sensores de proximidad x2",
  "Guía de ensamblaje paso a paso",
  "Acceso gratuito a la LekApp",
  "Soporte técnico por 6 meses",
];

const garantias = [
  {
    icon: <Truck size={20} />,
    title: "Envío gratis",
    desc: "A toda la República Mexicana",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Garantía 6 meses",
    desc: "Contra defectos de fábrica",
  },
  {
    icon: <RotateCcw size={20} />,
    title: "30 días de devolución",
    desc: "Si no quedas satisfecho",
  },
];

export default function Lek2Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* HERO PRODUCTO */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Imagen */}
          <div className="w-full lg:w-1/2 flex flex-col items-center gap-4">
            <div className="relative w-full flex items-center justify-center bg-[#f8f8f8] rounded-3xl p-10 border border-gray-100">
              {/* Círculos decorativos */}
              <div className="absolute rounded-full bg-[#dc2a36] w-52 h-52 opacity-10" />
              <div className="absolute rounded-full bg-[#dc2a36] w-36 h-36 opacity-15" />
              <Image
                src="/lekprov22.png"
                alt="Lek 2"
                width={420}
                height={420}
                className="relative z-10 object-contain drop-shadow-xl"
                priority
              />
            </div>
            {/* Badge envío */}
            <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 border border-gray-200 rounded-full px-4 py-2">
              <Truck size={15} className="text-[#dc2a36]" />
              Envío gratis a toda la República Mexicana
            </div>
          </div>

          {/* Info compra */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {/* Badge nuevo */}
            <div className="flex items-center gap-2 bg-[#dc2a36] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 w-fit tracking-widest uppercase">
              <Star size={11} fill="white" />
              Nuevo — Edición 2025
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-2">
              Lek 2
            </h1>
            <p className="text-gray-500 text-base mb-6">
              El robot que armas en casa y programas desde tu teléfono.
            </p>

            {/* Precio */}
            <div className="flex items-end gap-3 mb-2">
              <span className="text-5xl font-bold text-gray-900">$499</span>
              <span className="text-gray-400 line-through text-xl mb-1">
                $699
              </span>
              <span className="bg-[#dc2a36] text-white text-xs font-bold px-2.5 py-1 rounded-full mb-1">
                -29%
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-8">
              Precio en MXN · IVA incluido
            </p>

            {/* Garantías rápidas */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {garantias.map((g) => (
                <div
                  key={g.title}
                  className="flex flex-col items-center text-center bg-gray-50 border border-gray-100 rounded-2xl p-4 gap-1"
                >
                  <span className="text-[#dc2a36]">{g.icon}</span>
                  <p className="text-xs font-bold text-gray-900">{g.title}</p>
                  <p className="text-[11px] text-gray-400 leading-tight">
                    {g.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={ML_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2.5 bg-[#FFE600] text-gray-900 text-base font-bold
                           py-4 rounded-full hover:bg-[#FFD000] transition-all duration-200 hover:scale-105
                           shadow-lg shadow-[#FFE600]/40"
              >
                <Image
                  src="/mercadolibre.svg"
                  alt="Mercado Libre"
                  width={22}
                  height={22}
                  className="shrink-0"
                />
                Comprar en Mercado Libre
                <ExternalLink size={15} />
              </a>
              <a
                href="#video"
                className="flex items-center justify-center gap-2 text-gray-700 text-base font-medium
                           px-6 py-4 rounded-full border-2 border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
              >
                <Play size={16} fill="currentColor" />
                Ver video
              </a>
            </div>

            {/* Features rápidas */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: <Wifi size={13} />, label: "Bluetooth" },
                { icon: <Smartphone size={13} />, label: "LekApp" },
                { icon: <Cpu size={13} />, label: "Programable" },
                { icon: <Package size={13} />, label: "Kit completo" },
              ].map((f) => (
                <span
                  key={f.label}
                  className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full"
                >
                  {f.icon} {f.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="py-16 px-6 bg-[#f8f8f8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Especificaciones
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-gray-200 rounded-2xl overflow-hidden bg-white">
            {specs.map((spec, i) => (
              <div
                key={spec.label}
                className={`flex items-center justify-between px-6 py-4 border-gray-100
                  ${i % 2 === 0 ? "sm:border-r" : ""} ${
                  i < specs.length - 2 ? "border-b" : ""
                }`}
              >
                <span className="text-sm text-gray-500">{spec.label}</span>
                <span className="text-sm font-semibold text-gray-900">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section id="incluye" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            ¿Qué incluye el kit?
          </h2>
          <p className="text-gray-400 text-center text-sm mb-10">
            Todo lo que necesitas para armar tu robot desde cero.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {incluye.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4"
              >
                <div className="w-5 h-5 rounded-full bg-[#dc2a36] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={11} strokeWidth={3} className="text-white" />
                </div>
                <span className="text-sm text-gray-700 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="comprar"
        className="py-20 px-6 bg-gray-900 relative overflow-hidden"
      >
        {/* Círculos decorativos */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#dc2a36] opacity-10 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#dc2a36] opacity-10 pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#dc2a36] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            <Zap size={12} fill="white" />
            Precio de lanzamiento
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
            Solo por el lanzamiento del{" "}
            <span className="text-[#dc2a36]">Lek 2</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto">
            Las primeras <strong className="text-white">100 unidades</strong>{" "}
            salen con precio especial de introducción. No pierdas tu lugar.
          </p>

          {/* Precios */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="text-gray-500 line-through text-2xl">$699</span>
            <div className="flex items-end gap-2">
              <span className="text-6xl md:text-7xl font-bold text-white">
                $499
              </span>
              <span className="text-gray-500 mb-2 text-sm">MXN</span>
            </div>
            <div className="bg-[#dc2a36] text-white text-lg font-bold px-3 py-1.5 rounded-xl">
              −29%
            </div>
          </div>

          {/* Checkmarks */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
            {[
              "Envío gratis",
              "Garantía 6 meses",
              "Kit completo",
              "Acceso LekApp",
              "30 días de devolución",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-1.5 text-sm text-gray-300"
              >
                <Check size={14} className="text-[#dc2a36]" strokeWidth={3} />
                {item}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href={ML_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#FFE600] text-gray-900 text-lg font-bold
                       px-12 py-5 rounded-full hover:bg-[#FFD600] transition-all duration-200 hover:scale-105
                       shadow-xl shadow-[#FFE600]/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              fill="none"
              viewBox="0 0 1481 866"
            >
              <path
                fill="#ffe600"
                d="M1438.43 446.78c0 231.03-310.03 419.01-691.138 419.01-381.106 0-691.132-187.98-691.132-419.01 0-231.029 310.026-419.009 691.132-419.009 381.108 0 691.138 187.98 691.138 419.009"
              />
              <path
                fill="#fff"
                d="M517.421 314.765s-7.563 7.174-3.026 12.913c10.586 12.915 43.858 20.09 78.642 12.915 19.66-4.304 46.881-24.394 71.078-43.049 27.222-20.089 54.444-41.614 81.666-48.789 28.735-8.61 46.883-4.304 58.981-1.434 13.611 4.305 28.734 12.914 54.444 30.134 46.882 33.004 237.434 190.851 270.704 218.115 25.71-11.479 143.67-58.833 303.98-93.272-13.61-80.358-65.03-154.977-143.67-215.245-108.89 43.049-243.49 66.009-375.059 5.74 0 0-71.078-31.571-142.157-30.136-104.351 2.87-148.208 44.485-196.602 90.404z"
              />
              <path
                fill="#fff"
                d="M1122.35 512.788c-1.51-1.435-223.823-185.111-273.729-220.985-28.735-20.089-45.372-25.829-62.007-28.699-9.074-1.435-21.173.001-30.247 2.871-22.685 5.74-54.442 25.829-81.664 45.918-28.734 21.525-54.445 41.615-78.642 45.92-31.759 7.175-69.566-1.435-86.202-12.915-7.561-4.305-12.098-10.044-15.123-15.784-6.049-14.35 6.049-25.83 7.562-27.265l60.493-63.139 21.173-20.09c-19.661 2.87-37.81 7.176-55.957 11.481-22.685 5.74-43.857 11.478-65.029 11.478-9.074 0-57.469-7.174-66.543-10.044-55.956-14.349-104.352-28.698-176.943-60.267-86.203 61.703-145.183 137.756-161.818 222.419 12.098 2.87 33.27 8.609 40.832 10.044 196.602 41.614 257.096 84.663 269.194 93.273 12.099-12.915 28.734-20.09 48.394-20.09 21.173 0 40.833 10.046 52.931 25.83 10.587-8.609 27.224-15.784 46.884-15.784 9.074 0 18.146 1.434 28.733 4.304 22.685 7.175 33.272 21.525 39.322 34.439 7.561-2.87 16.634-5.74 27.22-5.74 10.587 0 21.174 2.87 33.273 7.175 36.295 14.35 42.344 48.79 39.32 74.619h7.561c43.858 0 78.641 33.004 78.641 74.618q0 19.372-9.074 34.439c12.099 5.74 40.833 20.089 68.055 17.219 21.172-2.87 28.733-8.61 31.758-12.915 1.512-2.87 4.537-5.739 1.512-8.609l-55.955-58.834s-9.075-8.61-6.05-11.48 9.074 1.436 13.611 4.306c28.735 22.959 62.005 55.964 62.005 55.964s3.025 4.305 15.124 7.175c10.586 1.434 30.246-.002 43.857-10.046 3.025-2.87 7.562-5.74 9.074-8.61 13.611-17.219-1.512-34.439-1.512-34.439l-65.031-68.878s-9.072-8.61-6.048-11.48c3.025-2.87 9.073 1.436 13.61 4.306 21.172 15.784 49.908 44.484 77.13 70.313 6.049 4.305 30.246 18.653 62.005-1.436 19.66-12.915 24.2-27.264 22.68-38.743-1.51-14.35-13.61-25.831-13.61-25.831l-87.712-84.661s-9.073-7.176-6.048-11.481c3.025-2.869 9.073 1.436 13.609 4.306 28.735 22.959 104.351 88.967 104.351 88.967 1.51 0 27.22 18.655 60.49-1.434 12.1-7.175 19.66-17.22 19.66-30.134 1.52-18.655-15.12-31.571-15.12-31.571"
              />
              <path
                fill="#fff"
                d="M694.363 620.41c-13.611 0-28.735 7.175-30.247 7.175s0-5.739 1.512-8.609 19.661-54.529-24.197-73.183c-33.271-14.35-54.444 1.434-60.493 8.609-1.512 1.435-3.024 1.435-3.024 0 0-8.61-4.537-34.439-34.784-43.049-42.345-12.914-68.055 15.786-75.616 25.83-3.025-22.959-22.684-40.179-48.394-40.179-27.222 0-48.395 20.088-48.395 45.918s21.173 45.92 48.395 45.92c13.611 0 24.197-4.305 33.271-12.915v1.434c-1.513 11.48-6.05 53.095 39.32 68.879 18.148 7.175 33.272 1.435 46.883-7.174 4.537-2.87 4.536-1.436 4.536 1.434-1.512 10.045.001 33.004 34.784 45.918 25.71 10.045 40.832.001 49.906-8.609 4.537-4.305 6.05-2.869 6.05 2.871 1.512 30.134 28.734 54.528 60.493 54.528 33.271 0 60.493-25.83 60.493-57.399s-27.222-57.399-60.493-57.399"
              />
              <path
                fill="#2d3277"
                d="M1131.42 491.264c-68.05-55.964-225.334-186.545-269.191-216.68-24.197-17.219-40.832-27.264-55.955-30.134-6.05-1.435-15.124-4.305-27.223-4.305-10.586 0-22.684 1.435-34.782 5.74-27.222 8.61-54.444 28.7-81.666 48.789l-1.512 1.435c-24.197 18.654-49.907 37.309-69.567 41.614-9.074 1.435-16.636 2.869-25.71 2.869-21.173 0-40.832-5.739-48.394-14.349-1.512-1.435-.001-4.305 3.024-7.175l60.493-61.703c46.882-44.483 90.74-86.099 193.578-88.968h4.536c63.518 0 127.036 27.264 134.597 30.133 60.493 27.265 120.982 41.615 182.992 41.615 65.03 0 131.57-15.784 201.14-45.918-7.56-5.74-16.64-12.916-24.2-18.656-62 25.83-119.47 37.309-176.94 37.309s-114.936-12.914-170.892-38.743c-3.025-1.435-72.593-33.005-146.697-33.005h-6.048c-86.202 1.435-134.597 30.134-166.356 55.964-31.758 0-58.98 8.61-83.177 14.35-21.173 5.739-40.834 10.045-58.981 10.045h-22.685c-21.173 0-127.036-24.394-210.214-55.964-9.074 5.74-16.635 11.479-25.709 17.219 87.715 34.439 195.09 60.269 228.361 63.139 9.074 0 19.66 1.435 30.247 1.435 22.684 0 43.857-5.739 66.542-11.479 13.611-2.87 27.221-7.176 40.832-10.046l-12.099 11.481-60.493 63.138c-4.537 4.305-15.123 17.219-9.074 31.569 3.025 5.74 9.074 11.479 16.636 17.219 15.123 8.61 40.833 15.786 65.03 15.786 9.074 0 18.147-1.436 25.709-2.871 25.71-5.74 52.932-25.828 80.154-47.353 22.685-17.22 54.443-38.745 78.64-45.92 7.562-1.435 15.123-2.869 22.685-2.869h6.05c16.635 1.435 31.759 7.175 60.493 27.265 49.906 35.874 272.216 219.548 273.726 220.983 0 0 13.62 11.481 13.62 31.57 0 10.045-7.57 20.09-18.15 27.265-9.08 5.74-19.66 8.609-28.74 8.609-15.12 0-25.71-7.174-25.71-7.174s-77.124-66.01-104.346-88.969c-4.537-4.305-9.074-7.175-13.611-7.175-3.025 0-4.537 1.436-6.05 2.871-4.537 5.74.001 12.914 6.05 17.219l89.227 84.663s10.59 10.044 12.1 22.959c0 14.35-6.05 25.83-21.17 34.44-10.59 7.174-21.18 10.044-31.763 10.044-13.611 0-22.685-5.74-25.709-7.175l-13.612-11.479c-22.684-21.524-46.88-44.484-65.028-57.398-4.537-2.87-9.075-7.175-13.612-7.175-1.512 0-4.537-.001-6.049 2.869-1.513 1.435-3.025 5.74 1.512 12.915 1.512 2.87 4.537 4.306 4.537 4.306l65.029 68.877s13.613 15.784 1.514 28.699l-3.026 2.871-6.049 5.739c-10.587 8.609-25.71 10.045-31.759 10.045h-9.073c-6.05-1.435-10.587-2.87-13.612-5.74-3.024-4.305-36.295-34.439-63.517-55.964-3.024-2.87-7.562-5.74-12.099-5.74-1.512 0-4.537 1.436-6.05 2.871-4.537 5.74 3.025 14.349 6.05 17.219l55.957 57.398s-.001 1.436-1.514 4.306c-1.512 2.87-9.072 8.609-28.732 11.479h-7.562c-21.173 0-42.347-10.045-54.445-15.785 4.537-10.044 7.561-21.523 7.561-33.003 0-43.049-36.294-77.488-81.664-77.488H686.8c1.512-20.09-1.512-57.398-42.344-73.183-12.099-4.305-22.686-7.175-34.785-7.175-9.074 0-16.634 1.434-25.708 4.304-9.074-15.785-22.686-27.263-40.834-33.003-10.587-2.87-19.661-4.306-30.247-4.306-16.635 0-31.759 4.305-45.37 14.35-6.569-7.676-14.873-13.853-24.296-18.076-9.423-4.222-19.726-6.381-30.147-6.318-18.148 0-36.295 7.174-48.394 18.654-16.635-12.915-84.691-53.094-267.682-93.273-9.074-1.435-28.734-7.174-40.832-11.479-1.513 8.61-3.026 18.655-4.538 28.699 0 0 33.272 7.175 40.834 8.61 186.016 38.744 248.021 80.358 258.607 87.532q-4.537 12.916-4.538 25.831c0 37.309 31.759 66.008 69.567 66.008 4.537 0 9.074 0 13.611-1.435 6.05 27.264 24.198 47.354 52.932 57.399 9.074 2.87 16.635 4.303 24.197 4.303 4.537 0 10.587.001 16.637-1.434 4.537 12.915 16.634 28.698 43.856 38.743 9.073 4.305 18.148 5.74 27.222 5.74 7.562 0 15.124-1.433 21.173-4.303 12.099 28.699 42.345 48.787 75.616 48.787 22.685 0 43.858-8.609 58.981-24.394 13.611 7.175 40.833 20.09 69.567 20.09h10.585c28.735-2.87 40.833-14.349 46.882-21.524 1.513-1.435 1.514-2.871 3.026-4.306 6.049 1.435 13.611 2.871 22.685 2.871 15.123 0 30.246-4.306 45.37-15.786 15.123-10.045 25.708-24.394 25.708-37.309 4.537 1.435 10.587 1.435 15.124 1.435 15.125 0 31.755-4.305 46.885-14.35 28.73-17.219 33.27-41.612 33.27-55.962 4.54 1.435 10.58 1.435 15.12 1.435 15.13 0 30.25-4.306 43.86-12.915 18.15-11.48 28.73-27.264 30.25-45.919 1.51-12.914-3.03-25.83-9.08-37.31 48.4-20.09 157.28-57.399 287.34-86.098 0-10.045-1.51-18.655-4.53-28.699-155.77 31.569-272.22 78.923-300.96 91.838m-437.059 239.64c-30.246 0-54.443-22.961-55.955-51.66 0-2.87 0-8.61-6.05-8.61-3.024 0-4.537 1.437-7.561 2.871-6.05 5.74-15.124 11.479-27.223 11.479q-9.074 0-18.147-4.304c-31.759-12.914-33.271-33.004-31.759-41.614 0-2.87.001-4.305-1.512-5.74l-1.513-1.435h-1.512c-1.513 0-3.025-.001-6.05 2.869q-13.61 8.61-27.221 8.61c-4.537 0-10.586-1.434-15.123-2.869-42.345-15.785-39.321-53.094-36.296-64.574 0-2.87 0-4.305-1.512-5.74l-3.026-2.869-3.024 2.869c-9.074 7.175-19.66 11.48-30.246 11.48-24.197 0-43.858-18.655-43.858-41.614s19.661-41.614 43.858-41.614c21.172 0 40.833 15.784 43.858 35.874l1.511 11.48 6.05-10.046c0-1.435 18.148-27.263 51.42-25.828 6.049 0 12.097 1.434 19.659 2.869 25.709 7.175 30.246 30.136 30.246 38.745 0 5.74 4.538 5.739 4.538 5.739 1.512 0 4.536-1.434 4.536-2.869 4.537-4.305 15.125-12.915 31.76-12.915 7.562 0 15.123 1.435 24.197 5.74 40.833 17.219 22.685 66.008 22.685 67.442-3.025 8.61-4.537 11.48 0 14.35h3.024c1.512 0 4.537 0 7.561-1.434 6.05-1.435 13.612-4.304 21.173-4.304 30.247 0 55.956 24.393 55.956 53.093 1.512 31.569-24.197 54.529-54.444 54.529"
              />
            </svg>
            Comprar en Mercado Libre
            <ExternalLink size={18} />
          </a>

          <p className="text-gray-600 text-xs mt-6">
            Disponible en Mercado Libre · Envío gratis · Pago seguro
          </p>
        </div>
      </section>
    </main>
  );
}
