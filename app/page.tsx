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
  Quote,
  ShieldCheck,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Link from "next/link";
import RotatingText from "./components/RotatingText";
import LandingAnimations from "./components/LandingAnimations";
import InteractiveDots from "./components/InteractiveDots";

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
    <>
      <InteractiveDots />
      <main className="min-h-screen">
      <div className="relative z-[1]">
      <LandingAnimations />
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
          <div className="hero-circle absolute z-0 rounded-full border-[3px] border-black bg-[#dc2a36] w-[90%] aspect-square" />
          <div className="hero-circle absolute z-0 rounded-full border-[3px] border-black bg-[#fff3f3] w-[70%] aspect-square" />
          <div className="hero-circle absolute z-0 rounded-full border-[3px] border-black bg-[#dc2a36] w-[50%] aspect-square" />
          <div className="hero-circle absolute z-0 rounded-full border-[3px] border-black bg-white w-[30%] aspect-square shadow-[4px_4px_0px_0px_#000]" />
          <Image
            src="/lekprov22.png"
            alt="Lek 2 — Kit de robótica educativa para niños, robot programable desde el celular"
            width={480}
            height={480}
            className="hero-robot relative z-10 object-contain drop-shadow-xl w-full"
            priority
          />
        </div>

        {/* ── IZQUIERDA (desktop) / CENTRO (mobile): texto ── */}
        <div className="w-full min-[920px]:w-2/3 flex flex-col items-center min-[920px]:items-start">
          {/* Precio lanzamiento */}
          <div className="hero-badge inline-flex items-center gap-2 mb-6 bg-[#facc15] border-2 border-black rounded-lg px-3 py-1.5 shadow-[2px_2px_0px_0px_#000]">
            <span className="bg-black text-[#facc15] font-black text-xs w-4 h-4 rounded-full flex items-center justify-center">!</span>
            <p className="text-black text-xs font-bold uppercase tracking-wider">
              Spoiler: nunca va a estar más barato que esto.
            </p>
          </div>

          {/* Título */}
          <h1 className="hero-title text-5xl sm:text-6xl min-[920px]:text-7xl font-normal text-gray-900 leading-none tracking-wide mb-2 font-(family-name:--font-display) uppercase">
            El robot que
            <br />
            <RotatingText />
          </h1>

          {/* Robot + círculos — solo mobile */}
          <div className="relative flex min-[920px]:hidden items-center justify-center my-6 w-full max-w-[280px] aspect-square">
            <div className="hero-circle absolute z-0 rounded-full border-[3px] border-black bg-[#dc2a36] w-[90%] aspect-square" />
            <div className="hero-circle absolute z-0 rounded-full border-[3px] border-black bg-[#fff3f3] w-[70%] aspect-square" />
            <div className="hero-circle absolute z-0 rounded-full border-[3px] border-black bg-[#dc2a36] w-[50%] aspect-square" />
            <div className="hero-circle absolute z-0 rounded-full border-[3px] border-black bg-white w-[30%] aspect-square shadow-[4px_4px_0px_0px_#000]" />
            <Image
              src="/lekprov22.png"
              alt="Lek 2 — Robot educativo programable para niños, kit de robótica armable en casa"
              width={320}
              height={320}
              className="hero-robot relative z-10 object-contain drop-shadow-xl w-56 sm:w-72"
              priority
            />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center min-[920px]:items-start gap-4 mb-8 w-full sm:w-auto">
            <Link
              href="/lek-2"
              className="hero-cta w-full sm:w-auto flex items-center justify-center gap-2 bg-[#dc2a36] text-white text-base font-black
                         px-8 py-4 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl
                         hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                         active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                         transition-all duration-100 ease-in-out"
            >
              Comprar ahora — $1,600
              <ChevronRight size={18} strokeWidth={2.5} />
            </Link>
            <a
              href="#como-funciona"
              className="hero-cta w-full sm:w-auto flex items-center justify-center gap-2 text-black text-base font-bold bg-[#white]
                         px-8 py-4 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl
                         hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                         active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                         transition-all duration-100 ease-in-out bg-white"
            >
              Ver más
              <ChevronRight size={18} strokeWidth={2.5} />
            </a>
          </div>

          {/* Descripción */}
          <p className="hero-desc text-base min-[920px]:text-lg text-gray-600 leading-relaxed mb-6">
            El <strong className="text-gray-900">kit de robótica programable</strong>{" "}
            más accesible de México. Construye y controla desde tu celular,{" "}
            <span className="text-gray-900 font-medium">
              sin soldar ni experiencia previa.
            </span>
          </p>

          {/* Edad */}
          <div className="hero-desc flex items-center gap-1.5 text-gray-500 text-xs font-medium mb-5">
            <span className="bg-gray-900 text-white text-[10px] font-bold px-2 py-0.5 rounded">
              +8
            </span>
            Para mayores de 8 años
          </div>

          {/* Specs */}
          <div className="hero-specs grid grid-cols-3 divide-x-[3px] divide-black border-[3px] border-black rounded-xl overflow-hidden w-full max-w-sm bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {[
              { value: "BT", label: "Bluetooth" },
              { value: "360°", label: "Movimiento" },
              { value: "LekApp", label: "Control" },
            ].map((spec) => (
              <div
                key={spec.label}
                className="flex flex-col items-center py-5 px-2 hover:bg-[#dc2a36] transition-colors duration-100 group"
              >
                <p className="text-lg font-black text-[#dc2a36] group-hover:text-white transition-colors duration-100">
                  {spec.value}
                </p>
                <p className="text-[10px] font-black text-gray-600 group-hover:text-white/90 mt-1 uppercase tracking-wider transition-colors duration-100">
                  {spec.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ENVÍO GRATIS — banner */}
      <section className="banner-shipping bg-[#dc2a36] py-5 px-6 border-y-[3px] border-black">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-white text-center">
          <Truck size={22} strokeWidth={2.5} className="shrink-0 text-white" />
          <p className="text-sm md:text-base font-extrabold tracking-wide uppercase">
            Envío <span className="underline decoration-wavy decoration-[#facc15] decoration-2">gratis</span> a toda la República Mexicana en todos los pedidos.
          </p>
          <a
            href="#comprar"
            className="shrink-0 bg-[#facc15] text-black text-xs font-black px-4 py-2 border-2 border-black rounded-lg
                       shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                       active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-100"
          >
            Comprar ahora
          </a>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="py-16 md:py-28 px-6 bg-white border-b-[3px] border-black">
        <div className="max-w-7xl mx-auto">
          {/* Encabezado */}
          <div className="steps-header text-center mb-10 md:mb-20">
            <span className="inline-block bg-[#dc2a36] text-white text-xs font-black uppercase tracking-wider px-3 py-1.5 border-2 border-black mb-4 shadow-[2px_2px_0px_0px_#000]">
              De la caja a tu control
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight uppercase font-(family-name:--font-display) mt-2">
              Así funciona el <span className="underline decoration-4 decoration-[#dc2a36]">Lek 2</span>, el kit de robótica.
            </h2>
          </div>

          {/* Steps */}
          <div className="steps-grid grid grid-cols-2 md:grid-cols-4 gap-6 relative">
            {/* Línea conectora */}
            <div className="hidden md:block absolute top-14 left-[12.5%] right-[12.5%] h-1 border-t-[3px] border-dashed border-black z-0" />

            {steps.map((step) => (
              <div
                key={step.number}
                className="step-card relative z-10 flex flex-col items-center text-center bg-[#fdfdfd]
                           border-[3px] border-black rounded-xl p-5 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                           hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                           active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                           transition-all duration-100 ease-in-out"
              >
                {/* Ícono */}
                <div
                  className="w-14 h-14 md:w-20 md:h-20 rounded-xl bg-[#fff3f3] border-2 border-black flex items-center justify-center
                              text-[#dc2a36] mb-4 relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  {step.icon}
                  <span
                    className="absolute -top-2.5 -right-2.5 bg-[#facc15] text-black text-[11px]
                               font-black w-6 h-6 border-2 border-black rounded-full flex items-center justify-center shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                  >
                    {step.number.replace("0", "")}
                  </span>
                </div>

                <h3 className="text-sm md:text-lg font-black text-gray-900 mb-1 md:mb-2 uppercase">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed hidden sm:block">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA final */}
          <div className="text-center mt-16">
            <Link
              href="/lek-2"
              className="inline-flex items-center gap-2 bg-[#dc2a36] text-white font-black text-lg
                         px-10 py-4 border-[3px] border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                         hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                         active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                         transition-all duration-100 ease-in-out"
            >
              Quiero mi Lek 2
              <ChevronRight size={18} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* LANZAMIENTO — descuento especial */}
      <section
        id="comprar"
        className="launch-section py-20 px-6 bg-[#111111] relative overflow-hidden border-b-[3px] border-black"
      >
        {/* Círculos decorativos retro */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full border-4 border-black bg-[#dc2a36] opacity-20 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border-4 border-black bg-[#facc15] opacity-20 pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10 bg-white border-[3px] border-black rounded-2xl p-8 md:p-12 shadow-[8px_8px_0px_0px_#dc2a36]">
          {/* Badge */}
          <span className="launch-badge inline-flex items-center gap-2 bg-[#facc15] text-black text-xs font-black px-4 py-1.5 border-2 border-black rounded-lg mb-6 tracking-widest uppercase shadow-[2px_2px_0px_0px_#000]">
            <Zap size={12} fill="black" />
            Precio de lanzamiento
          </span>

          <h2 className="launch-title text-3xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-4 uppercase font-(family-name:--font-display)">
            Solo por el lanzamiento del{" "}
            <span className="text-[#dc2a36]">Lek 2</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-xl mx-auto font-medium">
            Las primeras <strong className="text-black">100 unidades</strong>{" "}
            salen con precio especial de introducción. No pierdas tu lugar.
          </p>

          {/* Precios */}
          <div className="launch-price flex flex-col items-center gap-3 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-gray-400 line-through text-xl md:text-2xl font-bold">$2,199</span>
              <div className="bg-[#facc15] text-black text-sm md:text-lg font-black px-3 py-1 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000]">
                −27%
              </div>
            </div>
            <div className="flex items-end gap-2 justify-center">
              <span className="text-5xl md:text-7xl font-black text-[#dc2a36]">
                $1,600
              </span>
              <span className="text-gray-500 mb-2 text-sm font-bold">MXN</span>
            </div>
          </div>

          {/* Checkmarks */}
          <div className="launch-checks flex flex-wrap justify-center gap-x-4 gap-y-3 mb-10">
            {[
              "Envío gratis",
              "Garantía 6 meses",
              "Kit completo",
              "Acceso LekApp",
              "30 días de devolución",
            ].map((item) => (
              <span
                key={item}
                className="launch-check flex items-center gap-1.5 text-sm font-bold text-gray-800 bg-gray-50 border-2 border-black px-3.5 py-1.5 rounded-lg shadow-[1px_1px_0px_0px_#000]"
              >
                <Check size={14} className="text-green-600" strokeWidth={4} />
                {item}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href="/lek-2"
            className="inline-flex items-center gap-2 bg-[#dc2a36] text-white text-lg font-black
                       px-12 py-5 border-[3px] border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                       hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                       active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                       transition-all duration-100 ease-in-out"
          >
            Quiero mi Lek 2 — $1,600
            <ChevronRight size={20} strokeWidth={2.5} />
          </a>

          <p className="text-gray-500 text-xs mt-6 font-bold">
            Precio válido para las primeras 100 unidades · IVA incluido · Envío
            gratis
          </p>
        </div>
      </section>

      {/* VIDEO CREADOR */}
      <section className="bg-black py-5 px-6 border-b-[3px] border-black">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-white text-center">
          <Play
            size={22}
            strokeWidth={2}
            className="shrink-0 text-[#facc15]"
            fill="#facc15"
          />
          <p className="text-sm md:text-base font-extrabold tracking-wide uppercase">
            Conoce a <strong className="text-[#facc15]">nuestro creador</strong> y la historia detrás del Lek 2.
          </p>
          <a
            href="#video"
            className="shrink-0 bg-[#dc2a36] text-white text-xs font-black px-4 py-2 border-2 border-black rounded-lg
                       shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)]
                       active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(255,255,255,0.2)] transition-all duration-100"
          >
            Ver video
          </a>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section
        id="quienes-somos"
        className="about-section py-24 px-6 border-b-[3px] border-black"
      >
        <div className="max-w-5xl mx-auto">
          {/* Encabezado */}
          <div className="about-header text-center mb-16">
            <span className="inline-block bg-[#facc15] text-black text-xs font-black uppercase tracking-wider px-3 py-1.5 border-2 border-black mb-4 shadow-[2px_2px_0px_0px_#000]">
              Nuestra misión
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight uppercase font-(family-name:--font-display) mt-2">
              Quiénes <span className="underline decoration-4 decoration-[#dc2a36]">somos.</span>
            </h2>
          </div>

          {/* Frase principal */}
          <div className="about-quote bg-white border-[3px] border-black rounded-2xl p-10 md:p-16 text-center mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-xl md:text-3xl font-black text-gray-900 leading-snug tracking-tight uppercase font-(family-name:--font-display)">
              Creemos que la robótica no debe ser un lujo.
              <br />
              <span className="text-[#dc2a36]">
                Debe estar en cada casa, en cada niño, en cada sueño.
              </span>
            </p>
          </div>

          {/* Pilares */}
          <div className="pilars-grid grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: <Lightbulb size={24} strokeWidth={2} />,
                title: "Accesible",
                desc: "Diseñamos el Lek 2 con el mínimo presupuesto posible sin sacrificar calidad, para que cualquier familia pueda acceder.",
              },
              {
                icon: <Heart size={24} strokeWidth={2} />,
                title: "Inclusivo",
                desc: "Hecho para niños y niñas de todo México, sin importar dónde vivan o cuánto sepan de tecnología.",
              },
              {
                icon: <Globe size={24} strokeWidth={2} />,
                title: "Democratizando",
                desc: "Queremos que México sea un país de creadores, no solo consumidores. La robótica empieza en casa.",
              },
            ].map((pilar) => (
              <div
                key={pilar.title}
                className="pilar-card bg-white border-[3px] border-black rounded-xl p-7 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                           hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                           active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                           transition-all duration-100 ease-in-out"
              >
                <div className="w-12 h-12 rounded-xl bg-[#facc15] text-black border-2 border-black flex items-center justify-center mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {pilar.icon}
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2 uppercase">
                  {pilar.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {pilar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-20 px-6 bg-white border-b-[3px] border-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#dc2a36] text-white text-xs font-black uppercase tracking-wider px-3 py-1.5 border-2 border-black mb-4 shadow-[2px_2px_0px_0px_#000]">
              Familias felices
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase font-(family-name:--font-display) mt-2">
              Ellos ya tienen su <span className="underline decoration-4 decoration-[#dc2a36]">Lek 2</span>
            </h2>
          </div>
          <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "María González",
                location: "Guadalajara, JAL",
                text: "Mi hijo de 10 años lo armó completamente solo. Ahora no suelta el teléfono programándolo. ¡La mejor inversión que he hecho!",
                rating: 5,
              },
              {
                name: "Roberto Hernández",
                location: "CDMX",
                text: "Buscaba algo educativo que no fuera una pantalla más. El Lek 2 superó mis expectativas. Mi hija aprendió programación jugando.",
                rating: 5,
              },
              {
                name: "Ana Martínez",
                location: "Monterrey, NL",
                text: "El soporte es excelente. Tuve una duda y me respondieron en minutos por WhatsApp. 100% recomendado para cualquier familia.",
                rating: 5,
              },
            ].map((t) => (
              <div
                key={t.name}
                className="testimonial-card bg-[#fdfdfd] border-[3px] border-black rounded-xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                           hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                           active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                           transition-all duration-100 ease-in-out"
              >
                <Quote size={24} className="text-[#dc2a36] opacity-40 mb-3" />
                <p className="text-gray-700 text-sm leading-relaxed mb-4 font-medium">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#facc15" className="text-yellow-400" />
                  ))}
                </div>
                <p className="font-black text-gray-900 text-sm uppercase">{t.name}</p>
                <p className="text-xs text-gray-500 font-bold">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTÍA */}
      <section className="guarantee-section py-10 px-6 bg-[#f0fbf0] border-b-[3px] border-black">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <ShieldCheck size={36} className="text-green-700 shrink-0" strokeWidth={2.5} />
          <div>
            <h3 className="text-lg font-black text-gray-900 uppercase">
              30 días de garantía de satisfacción
            </h3>
            <p className="text-sm text-gray-700 font-semibold">
              Si no te convence, te devolvemos el 100% de tu dinero. Sin preguntas.
            </p>
          </div>
        </div>
      </section>

      </div>
      </main>
    </>
  );
}
