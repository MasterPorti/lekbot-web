import Image from "next/image";
import {
  ChevronRight,
  Star,
  Package,
  Cable,
  Smartphone,
  Code2,
  Truck,
  Heart,
  Globe,
  Lightbulb,
  Play,
  Zap,
  Check,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: <Package size={28} strokeWidth={1.5} />,
    title: "Recibe tu kit",
    desc: "Recibes todas las piezas del Lek 2: estructura, motores, sensores y electrónica lista para ensamblar.",
  },
  {
    number: "02",
    icon: <Cable size={28} strokeWidth={1.5} />,
    title: "Arma el robot",
    desc: "Conecta los cables y monta el cuerpo paso a paso con la guía incluida. Sin soldadura, sin herramientas especiales.",
  },
  {
    number: "03",
    icon: <Smartphone size={28} strokeWidth={1.5} />,
    title: "Vincula tu teléfono",
    desc: "Abre la LekApp, escanea el código QR de tu robot y en segundos queda conectado vía Bluetooth.",
  },
  {
    number: "04",
    icon: <Code2 size={28} strokeWidth={1.5} />,
    title: "Programalo a distancia",
    desc: "Crea rutinas, controla movimientos y personaliza comportamientos desde cualquier lugar del mundo.",
  },
];

export default function Home() {
  return (
    <main
      className="min-h-screen bg-[#f3f4de]"
      style={{
        backgroundImage:
          "radial-gradient(circle, #9ca3af 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <Navbar />

      {/* HERO */}
      <section
        id="lek2pro"
        className="min-h-screen pt-24 pb-16 px-6 max-w-7xl mx-auto
                   flex flex-col items-center text-center
                   min-[920px]:flex-row min-[920px]:items-center min-[920px]:text-left min-[920px]:gap-4"
      >
        {/* ── DERECHA: imagen (solo desktop) ── */}
        <div className="hidden min-[920px]:flex w-1/2 items-center justify-center relative order-last">
          <div className="absolute z-0 rounded-full bg-[#dc2a36] w-[90%]  aspect-square" />
          <div className="absolute z-0 rounded-full bg-[#e84d5a] w-[70%]  aspect-square" />
          <div className="absolute z-0 rounded-full bg-[#f07078] w-[52%]  aspect-square" />
          <div className="absolute z-0 rounded-full bg-[#f8a0a8] w-[34%]  aspect-square" />
          <Image
            src="/lekprov22.png"
            alt="Lek 2"
            width={480}
            height={480}
            className="relative z-10 object-contain drop-shadow-xl w-full"
            priority
          />
        </div>

        {/* ── IZQUIERDA (desktop) / CENTRO (mobile): texto ── */}
        <div className="w-full min-[920px]:w-2/3 flex flex-col items-center min-[920px]:items-start">
          {/* Badge */}
          <div className="flex items-center gap-2 bg-[#dc2a36] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <Star size={12} fill="white" />
            Nuevo — Lek 2
          </div>

          {/* Título */}
          <h1 className="text-4xl sm:text-5xl min-[920px]:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-2">
            El robot que
            <br />
            <span className="text-[#dc2a36]">armas tú mismo.</span>
          </h1>

          {/* Robot + círculos — solo mobile */}
          <div className="relative flex min-[920px]:hidden items-center justify-center my-6">
            <div className="absolute z-0 rounded-full bg-[#dc2a36] w-37 h-37 sm:w-51 sm:h-51" />
            <div className="absolute z-0 rounded-full bg-[#e84d5a] w-30 h-30 sm:w-40 sm:h-40" />
            <div className="absolute z-0 rounded-full bg-[#f07078] w-20 h-20 sm:w-27 sm:h-27" />
            <div className="absolute z-0 rounded-full bg-[#f8a0a8] w-12 h-12 sm:w-17 sm:h-17" />
            <Image
              src="/lekprov22.png"
              alt="Lek 2"
              width={320}
              height={320}
              className="relative z-10 object-contain drop-shadow-xl w-64 sm:w-80"
              priority
            />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center min-[920px]:items-start gap-4 mb-8 w-full sm:w-auto">
            <Link
              href="/lek-2"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#dc2a36] text-white text-base font-bold
                         px-8 py-4 rounded-full hover:bg-[#c02030] transition-all duration-200 hover:scale-105"
            >
              Comprar ahora — $499
              <ChevronRight size={18} />
            </Link>
            <a
              href="#como-funciona"
              className="w-full sm:w-auto flex items-center justify-center gap-2 text-gray-700 text-base font-medium bg-[#f8f8f8] 
                         px-8 py-4 rounded-full border-2 border-gray-300 hover:border-gray-500
                         hover:bg-white transition-all duration-200"
            >
              Ver más
              <ChevronRight size={18} />
            </a>
          </div>

          {/* Descripción */}
          <p className="text-base min-[920px]:text-lg text-gray-600 leading-relaxed mb-6">
            Construye, programa y controla tu robot desde cualquier lugar con la{" "}
            <strong className="text-[#dc2a36]">LekApp</strong>.{" "}
            <span className="text-gray-900 font-medium">
              Sin soldadura, sin experiencia previa.
            </span>
          </p>

          {/* Edad */}
          <div className="flex items-center gap-1.5 text-gray-500 text-xs font-medium mb-5">
            <span className="bg-gray-900 text-white text-[10px] font-bold px-2 py-0.5 rounded">
              +8
            </span>
            Para mayores de 8 años
          </div>

          {/* Specs */}
          <div className="grid grid-cols-3 divide-x divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden w-full max-w-sm bg-white">
            {[
              { value: "BT", label: "Bluetooth" },
              { value: "360°", label: "Movimiento" },
              { value: "LekApp", label: "Control" },
            ].map((spec) => (
              <div
                key={spec.label}
                className="flex flex-col items-center py-5 px-2 hover:bg-[#dc2a36] transition-colors duration-200 group"
              >
                <p className="text-lg font-bold text-[#dc2a36] group-hover:text-white transition-colors duration-200">
                  {spec.value}
                </p>
                <p className="text-xs text-gray-400 group-hover:text-white/80 mt-1 uppercase tracking-wider transition-colors duration-200">
                  {spec.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ENVÍO GRATIS — banner */}
      <section className="bg-[#dc2a36] py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-white text-center">
          <Truck size={22} strokeWidth={2} className="shrink-0" />
          <p className="text-sm md:text-base font-semibold tracking-wide">
            Envío <strong>gratis</strong> a toda la República Mexicana en todos
            los pedidos.
          </p>
          <a
            href="#comprar"
            className="shrink-0 bg-white text-[#dc2a36] text-xs font-bold px-4 py-1.5 rounded-full
                       hover:bg-gray-100 transition-colors duration-200"
          >
            Comprar ahora
          </a>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="py-16 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-10 md:mb-20">
            <p className="text-[#dc2a36] text-sm font-bold uppercase tracking-widest mb-3">
              De la caja a tu control
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Así funciona el <span className="text-[#dc2a36]">Lek 2.</span>
            </h2>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative">
            {/* Línea conectora */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gray-100 z-0" />

            {steps.map((step) => (
              <div
                key={step.number}
                className="relative z-10 flex flex-col items-center text-center bg-[#f8f8f8]
                           border border-gray-200 rounded-2xl p-5 md:p-8
                           hover:-translate-y-1 transition-all duration-300 hover:border-[#dc2a36]"
              >
                {/* Ícono */}
                <div
                  className="w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-white border border-gray-200 flex items-center justify-center
                              text-[#dc2a36] mb-4 relative"
                >
                  {step.icon}
                  <span
                    className="absolute -top-2 -right-2 bg-[#dc2a36] text-white text-[10px]
                               font-bold w-5 h-5 rounded-full flex items-center justify-center"
                  >
                    {step.number.replace("0", "")}
                  </span>
                </div>

                <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 md:mb-2">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed hidden sm:block">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA final */}
          <div className="text-center mt-16">
            <Link
              href="/lek-2"
              className="inline-flex items-center gap-2 bg-[#dc2a36] text-white font-bold
                         px-10 py-4 rounded-full hover:bg-[#c02030] transition-all duration-200 hover:scale-105"
            >
              Quiero mi Lek 2
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* LANZAMIENTO — descuento especial */}
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
            href="/lek-2"
            className="inline-flex items-center gap-2 bg-[#dc2a36] text-white text-lg font-bold
                       px-12 py-5 rounded-full hover:bg-[#f03344] transition-all duration-200 hover:scale-105"
          >
            Quiero mi Lek 2 — $499
            <ChevronRight size={20} />
          </a>

          <p className="text-gray-600 text-xs mt-6">
            Precio válido para las primeras 100 unidades · IVA incluido · Envío
            gratis
          </p>
        </div>
      </section>

      {/* VIDEO CREADOR */}
      <section className="bg-black py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-white text-center">
          <Play
            size={22}
            strokeWidth={2}
            className="shrink-0 text-[#dc2a36]"
            fill="#dc2a36"
          />
          <p className="text-sm md:text-base font-semibold tracking-wide">
            Conoce a <strong>nuestro creador</strong> y la historia detrás del
            Lek 2.
          </p>
          <a
            href="#video"
            className="shrink-0 bg-[#dc2a36] text-white text-xs font-bold px-4 py-1.5 rounded-full
                       hover:bg-[#c02030] transition-colors duration-200"
          >
            Ver video
          </a>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section
        id="quienes-somos"
        className="py-24 px-6 bg-[#f3f4de]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #9ca3af 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-16">
            <p className="text-[#dc2a36] text-sm font-bold uppercase tracking-widest mb-3">
              Nuestra misión
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Quiénes <span className="text-[#dc2a36]">somos.</span>
            </h2>
          </div>

          {/* Frase principal */}
          <div className="bg-white border border-gray-200 rounded-3xl p-10 md:p-16 text-center mb-10">
            <p className="text-xl md:text-3xl font-bold text-gray-900 leading-snug tracking-tight">
              Creemos que la robótica no debe ser un lujo.
              <br />
              <span className="text-[#dc2a36]">
                Debe estar en cada casa, en cada niño, en cada sueño.
              </span>
            </p>
          </div>

          {/* Pilares */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: <Lightbulb size={24} strokeWidth={1.5} />,
                title: "Accesible",
                desc: "Diseñamos el Lek 2 con el mínimo presupuesto posible sin sacrificar calidad, para que cualquier familia pueda acceder.",
              },
              {
                icon: <Heart size={24} strokeWidth={1.5} />,
                title: "Inclusivo",
                desc: "Hecho para niños y niñas de todo México, sin importar dónde vivan o cuánto sepan de tecnología.",
              },
              {
                icon: <Globe size={24} strokeWidth={1.5} />,
                title: "Democratizando",
                desc: "Queremos que México sea un país de creadores, no solo consumidores. La robótica empieza en casa.",
              },
            ].map((pilar) => (
              <div
                key={pilar.title}
                className="bg-white border border-gray-200 rounded-2xl p-7 hover:border-[#dc2a36]
                           hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#dc2a36] text-white flex items-center justify-center mb-4">
                  {pilar.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {pilar.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {pilar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
