import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import ProductCarousel from "../components/ProductCarousel";
import WaitlistButton from "../components/WaitlistModal";
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
  MessageCircle,
  ChevronDown,
  Quote,
  Award,
  Users,
  Clock,
} from "lucide-react";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://lekbot.com";

const ML_URL =
  "https://www.mercadolibre.com.mx/disco-solido-ssd-interno-adata-ultimate-su630-asu630ss-480gq-r-480gb/p/MLM26797016";

export const metadata: Metadata = {
  title:
    "Lek 2 — Kit de robótica para niños en México | Robot educativo programable",
  description:
    "Lek 2: kit de robótica para niños que se arma en casa y se programa desde el celular con la LekApp. Robot educativo sin soldadura, desde 8 años. Envío gratis a todo México. $1,600 MXN.",
  keywords: [
    "Lek 2",
    "robótica para niños",
    "kit de robótica para niños",
    "robot educativo para niños",
    "robot programable",
    "robot armable para niños",
    "juguete STEM México",
    "robótica educativa México",
    "regalo educativo niños 8 años",
    "kit robot bluetooth",
  ],
  alternates: {
    canonical: "/lek-2",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: `${SITE_URL}/lek-2`,
    siteName: "LekBot",
    title:
      "Lek 2 — Kit de robótica para niños programable desde el celular",
    description:
      "El robot educativo que los niños arman en casa y programan desde el celular. Kit completo, sin soldadura, desde 8 años. Envío gratis a todo México.",
    images: [
      {
        url: "/lekprov22.png",
        width: 1200,
        height: 630,
        alt: "Lek 2 — Kit de robótica educativa para niños",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lek 2 — Kit de robótica para niños en México",
    description:
      "Robot educativo que los niños arman y programan desde el celular. Envío gratis en México.",
    images: ["/lekprov22.png"],
  },
};

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

const faqs = [
  {
    q: "¿Es seguro para mi hijo?",
    a: "Sí. El Lek 2 no requiere soldadura ni herramientas cortantes. Todas las piezas son de plástico ABS no tóxico y los bordes están redondeados. Cumple con normas de seguridad mexicanas.",
  },
  {
    q: "¿Qué pasa si se rompe una pieza?",
    a: "Contáctanos por WhatsApp y te enviamos la pieza de repuesto sin costo durante los primeros 6 meses. Después, las piezas tienen un costo mínimo.",
  },
  {
    q: "¿Necesita baterías adicionales?",
    a: "No. El Lek 2 incluye una batería recargable de larga duración (4-6 horas) con cable USB-C. Solo necesitas un cargador de celular estándar.",
  },
  {
    q: "¿Funciona sin internet?",
    a: "Sí. La conexión es por Bluetooth directo entre tu teléfono y el robot. No necesitas WiFi ni datos móviles para controlarlo.",
  },
  {
    q: "¿En cuánto tiempo llega mi pedido?",
    a: "Enviamos en 24-48 horas hábiles. El tiempo de entrega es de 3-7 días dependiendo de tu ubicación. Recibirás un número de rastreo por correo.",
  },
  {
    q: "¿La app está en español?",
    a: "Sí. La LekApp está 100% en español y fue diseñada pensando en niños mexicanos. Incluye tutoriales paso a paso y ejemplos de proyectos.",
  },
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Lek 2 — Kit de robótica educativa para niños",
  alternateName: ["Lek 2", "LekBot Lek 2", "Kit Lek 2"],
  description:
    "Kit de robótica para niños. Lek 2 es un robot educativo programable que se arma en casa sin soldadura y se controla desde el celular por Bluetooth con la LekApp. Recomendado desde 8 años.",
  image: [`${SITE_URL}/lekprov22.png`],
  sku: "LEK-2",
  mpn: "LEK-2",
  brand: {
    "@type": "Brand",
    name: "LekBot",
  },
  manufacturer: {
    "@type": "Organization",
    name: "LekBot",
  },
  category: "Juguetes educativos / Robótica STEM",
  audience: {
    "@type": "PeopleAudience",
    suggestedMinAge: 8,
  },
  offers: {
    "@type": "Offer",
    url: `${SITE_URL}/lek-2`,
    priceCurrency: "MXN",
    price: "1600",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: {
      "@type": "Organization",
      name: "LekBot",
    },
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: {
        "@type": "MonetaryAmount",
        value: "0",
        currency: "MXN",
      },
      shippingDestination: {
        "@type": "DefinedRegion",
        addressCountry: "MX",
      },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: {
          "@type": "QuantitativeValue",
          minValue: 1,
          maxValue: 2,
          unitCode: "DAY",
        },
        transitTime: {
          "@type": "QuantitativeValue",
          minValue: 3,
          maxValue: 7,
          unitCode: "DAY",
        },
      },
    },
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: "MX",
      returnPolicyCategory:
        "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 30,
      returnMethod: "https://schema.org/ReturnByMail",
      returnFees: "https://schema.org/FreeReturn",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "María González" },
      reviewBody:
        "Mi hijo de 10 años lo armó completamente solo en una tarde. Ahora no suelta el teléfono programándolo. ¡La mejor inversión!",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "Roberto Hernández" },
      reviewBody:
        "Buscaba algo educativo que no fuera una pantalla más. El Lek 2 superó mis expectativas. Mi hija aprendió conceptos de programación jugando.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "Ana Martínez" },
      reviewBody:
        "El soporte técnico es excelente. Tuve una duda con un sensor y me respondieron en minutos por WhatsApp.",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Lek 2 — Kit de robótica para niños",
      item: `${SITE_URL}/lek-2`,
    },
  ],
};

export default function Lek2Page() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />

      {/* HERO PRODUCTO */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Imagen */}
          <div className="w-full lg:w-1/2 flex flex-col items-center gap-4">
            <ProductCarousel />
            {/* Badge envío */}
            <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 border border-gray-200 rounded-full px-4 py-2">
              <Truck size={15} className="text-[#dc2a36]" />
              Envío gratis a toda la República Mexicana
            </div>
          </div>

          {/* Info compra */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {/* Precio lanzamiento */}
            <div className="inline-flex items-center gap-2 mb-4 bg-[#fff3f3] border border-[#dc2a36]/30 rounded-lg px-3 py-1.5">
              <span className="text-[#dc2a36] font-black text-sm leading-none">!</span>
              <p className="text-[#dc2a36] text-xs font-semibold">
                Spoiler: nunca va a estar más barato que esto.
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-2">
              Lek 2 <span className="text-gray-400 font-normal text-2xl md:text-3xl block mt-1">Kit de robótica para niños</span>
            </h1>
            <p className="text-gray-500 text-base mb-6">
              Robot educativo programable que los niños arman en casa y controlan desde el celular con la LekApp. Desde 8 años.
            </p>

            {/* Precio */}
            <div className="flex items-end gap-3 mb-2">
              <span className="text-5xl font-bold text-gray-900">$1,600</span>
              <span className="text-gray-400 line-through text-xl mb-1">
                $2,199
              </span>
              <span className="bg-[#dc2a36] text-white text-xs font-bold px-2.5 py-1 rounded-full mb-1">
                -27%
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              Precio en MXN · IVA incluido
            </p>
            {/* Urgencia */}
            <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
              <p className="text-sm text-amber-800 font-medium">
                <strong>Solo quedan 17 unidades</strong> a precio de lanzamiento
              </p>
            </div>

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
              <WaitlistButton variant="hero" />
              <a
                href="/lek-2/video"
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

      {/* TESTIMONIOS */}
      <section className="py-16 px-6 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#dc2a36] text-sm font-bold uppercase tracking-widest mb-3">
              Lo que dicen los padres
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              +200 familias ya tienen su <span className="text-[#dc2a36]">Lek 2</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                name: "María González",
                location: "Guadalajara, JAL",
                text: "Mi hijo de 10 años lo armó completamente solo en una tarde. Ahora no suelta el teléfono programándolo. ¡La mejor inversión!",
                rating: 5,
              },
              {
                name: "Roberto Hernández",
                location: "CDMX",
                text: "Buscaba algo educativo que no fuera una pantalla más. El Lek 2 superó mis expectativas. Mi hija aprendió conceptos de programación jugando.",
                rating: 5,
              },
              {
                name: "Ana Martínez",
                location: "Monterrey, NL",
                text: "El soporte técnico es excelente. Tuve una duda con un sensor y me respondieron en minutos por WhatsApp. 100% recomendado.",
                rating: 5,
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <Quote size={24} className="text-[#dc2a36] opacity-30 mb-3" />
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#facc15" className="text-yellow-400" />
                  ))}
                </div>
                <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                <p className="text-xs text-gray-400">{t.location}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-8 mt-10">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#dc2a36]">4.9</p>
              <p className="text-xs text-gray-500">Calificación promedio</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#dc2a36]">200+</p>
              <p className="text-xs text-gray-500">Robots vendidos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#dc2a36]">98%</p>
              <p className="text-xs text-gray-500">Clientes satisfechos</p>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ LEK 2 - COMPARACIÓN */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#dc2a36] text-sm font-bold uppercase tracking-widest mb-3">
              Compara y decide
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              ¿Por qué elegir <span className="text-[#dc2a36]">Lek 2</span>?
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-3 font-semibold text-gray-500"></th>
                  <th className="py-4 px-3 text-center">
                    <span className="bg-[#dc2a36] text-white text-xs font-bold px-3 py-1 rounded-full">Lek 2</span>
                  </th>
                  <th className="py-4 px-3 text-center text-gray-400">Kits genéricos</th>
                  <th className="py-4 px-3 text-center text-gray-400">LEGO Mindstorms</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Precio", "$1,600 MXN", "$800 - $1,500", "$8,000+"],
                  ["App en español", "✓", "Algunos", "✗"],
                  ["Soporte en México", "✓ WhatsApp directo", "✗", "Limitado"],
                  ["Sin soldadura", "✓", "Variable", "✓"],
                  ["Garantía", "6 meses", "30 días", "1 año"],
                  ["Edad recomendada", "8-14 años", "12+", "10+"],
                  ["Envío gratis", "✓ Todo México", "Variable", "✗"],
                ].map(([feature, lek, generic, lego], i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-700">{feature}</td>
                    <td className="py-3 px-3 text-center font-semibold text-gray-900">{lek}</td>
                    <td className="py-3 px-3 text-center text-gray-400">{generic}</td>
                    <td className="py-3 px-3 text-center text-gray-400">{lego}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* GARANTÍA DESTACADA */}
      <section className="py-10 px-6 bg-green-50 border-y border-green-100">
        <div className="max-w-3xl mx-auto text-center">
          <ShieldCheck size={40} className="text-green-600 mx-auto mb-4" />
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            Garantía de satisfacción de 30 días
          </h3>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Si el Lek 2 no cumple tus expectativas, <strong>te devolvemos el 100% de tu dinero</strong>.
            Sin preguntas, sin complicaciones. Así de seguros estamos de nuestro producto.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#dc2a36] text-sm font-bold uppercase tracking-widest mb-3">
              Preguntas frecuentes
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              ¿Tienes dudas?
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className="text-gray-400 group-open:rotate-180 transition-transform duration-200"
                  />
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">
            ¿Tienes otra pregunta?{" "}
            <a
              href="https://wa.me/5215512345678?text=Hola,%20tengo%20una%20pregunta%20sobre%20el%20Lek%202"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#dc2a36] font-semibold hover:underline"
            >
              Escríbenos por WhatsApp
            </a>
          </p>
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
            <span className="text-gray-500 line-through text-2xl">$2,199</span>
            <div className="flex items-end gap-2">
              <span className="text-6xl md:text-7xl font-bold text-white">
                $1,600
              </span>
              <span className="text-gray-500 mb-2 text-sm">MXN</span>
            </div>
            <div className="bg-[#dc2a36] text-white text-lg font-bold px-3 py-1.5 rounded-xl">
              −27%
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
          <WaitlistButton variant="footer" />

          <p className="text-gray-600 text-xs mt-6">
            Disponible en Mercado Libre · Envío gratis · Pago seguro
          </p>
        </div>
      </section>

      {/* WHATSAPP FLOTANTE */}
      <a
        href="https://wa.me/5215512345678?text=Hola,%20me%20interesa%20el%20Lek%202"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white
                   pl-4 pr-5 py-3 rounded-full shadow-lg hover:bg-[#20bd5a]
                   transition-all duration-200 hover:scale-105 group"
      >
        <MessageCircle size={22} fill="white" />
        <span className="text-sm font-semibold hidden sm:inline">¿Dudas? Escríbenos</span>
      </a>
    </main>
  );
}
