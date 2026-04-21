import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import ProductCarousel from "../components/ProductCarousel";
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
              <a
                href={ML_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2.5 bg-[#FFE600] text-gray-900 text-base font-bold
                           py-4 rounded-full hover:bg-[#FFD000] transition-all duration-200 hover:scale-105
                           shadow-lg shadow-[#FFE600]/40"
              >
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1447 1097" fill="none">
<g clip-path="url(#clip0_2082_5)">
<path d="M1447.13 518.575C1447.13 233.765 1123.45 0.587646 723.78 0.587646C324.111 0.587646 0.424805 233.765 0.424805 518.575V548.556C0.424805 851.687 283.08 1096.52 723.78 1096.52C1166 1096.52 1447.13 851.687 1447.13 548.556V518.575Z" fill="#2D3277"/>
<path d="M1421.3 518.575C1421.3 786.73 1109.77 1004.92 726.818 1004.92C343.866 1004.92 32.3374 786.73 32.3374 518.575C32.3374 250.421 343.866 32.2336 726.818 32.2336C1109.77 32.2336 1421.3 250.421 1421.3 518.575Z" fill="#FFE600"/>
<path d="M495.831 365.346C495.831 365.346 488.232 373.672 492.791 380.334C503.429 395.324 536.862 403.653 571.814 395.325C591.57 390.328 618.923 367.01 643.237 345.358C670.591 322.04 697.945 297.056 725.299 288.729C754.172 278.735 772.408 283.732 784.566 287.064C798.243 292.06 813.439 302.053 839.273 322.04C886.382 360.348 1077.86 543.56 1111.29 575.206C1137.13 561.881 1255.66 506.918 1416.74 466.944C1403.06 373.673 1351.4 287.064 1272.37 217.111C1162.96 267.078 1027.71 293.727 895.499 223.774C895.499 223.774 824.077 187.13 752.653 188.795C647.797 192.126 603.727 240.428 555.098 293.726L495.831 365.346Z" fill="white"/>
<path d="M1103.69 595.19C1102.17 593.525 878.785 380.333 828.636 338.694C799.763 315.376 783.045 308.714 766.329 305.383C757.211 303.717 745.054 305.384 735.936 308.715C713.141 315.378 681.23 338.695 653.876 362.012C625.003 386.996 599.168 410.315 574.853 415.311C542.94 423.639 504.95 413.645 488.234 400.321C480.635 395.324 476.076 388.662 473.037 382C466.959 365.345 479.116 352.02 480.635 350.354L541.422 277.069L562.697 253.751C542.942 257.082 524.705 262.08 506.469 267.076C483.674 273.739 462.4 280.4 441.125 280.4C432.007 280.4 383.378 272.073 374.26 268.742C318.033 252.086 269.402 235.431 196.459 198.789C109.839 270.408 50.5731 358.682 33.8569 456.95C46.0142 460.281 67.2886 466.943 74.8868 468.608C272.442 516.91 333.229 566.876 345.386 576.87C357.543 561.88 374.259 553.551 394.014 553.551C415.289 553.551 435.045 565.211 447.202 583.532C457.84 573.539 474.557 565.211 494.313 565.211C503.431 565.211 512.547 566.876 523.185 570.207C545.979 578.535 556.618 595.191 562.697 610.181C570.295 606.85 579.412 603.518 590.05 603.518C600.687 603.518 611.326 606.849 623.483 611.846C659.955 628.501 666.033 668.476 662.994 698.456H670.592C714.662 698.456 749.613 736.763 749.613 785.064C749.613 800.054 746.574 813.379 740.496 825.038C752.653 831.7 781.526 848.355 808.88 845.024C830.155 841.693 837.753 835.03 840.793 830.033C842.312 826.702 845.351 823.371 842.312 820.04L786.085 751.753C786.085 751.753 776.967 741.759 780.006 738.428C783.046 735.097 789.125 740.094 793.684 743.425C822.557 770.074 855.989 808.382 855.989 808.382C855.989 808.382 859.028 813.379 871.186 816.71C881.823 818.376 901.579 816.709 915.256 805.05C918.295 801.719 922.854 798.388 924.374 795.057C938.05 775.07 922.854 755.083 922.854 755.083L857.508 675.138C857.508 675.138 848.392 665.144 851.431 661.813C854.471 658.481 860.548 663.479 865.107 666.81C886.382 685.131 915.257 718.443 942.61 748.423C948.689 753.419 973.003 770.073 1004.92 746.755C1024.67 731.765 1029.23 715.111 1027.71 701.786C1026.19 685.131 1014.03 671.805 1014.03 671.805L925.893 573.539C925.893 573.539 916.776 565.211 919.816 560.214C922.855 556.883 928.932 561.88 933.491 565.211C962.364 591.86 1038.35 668.475 1038.35 668.475C1039.87 668.475 1065.7 690.128 1099.13 666.81C1111.29 658.482 1118.89 646.824 1118.89 631.834C1120.41 610.181 1103.69 595.19 1103.69 595.19Z" fill="white"/>
<path d="M673.631 720.107C659.954 720.107 644.758 728.434 643.238 728.434C641.718 728.434 643.238 721.773 644.757 718.441C646.277 715.11 664.513 655.151 620.443 633.498C587.011 616.843 565.736 635.164 559.657 643.491C558.137 645.157 556.618 645.157 556.618 643.491C556.618 633.498 552.059 603.518 521.666 593.525C479.115 578.535 453.281 611.847 445.683 623.506C442.644 596.857 422.889 576.869 397.055 576.869C369.701 576.869 348.425 600.186 348.425 630.166C348.425 660.146 369.701 683.465 397.055 683.465C410.732 683.465 421.369 678.468 430.486 668.475V670.14C428.967 683.464 424.407 731.766 469.997 750.087C488.233 758.415 503.431 751.753 517.108 741.76C521.667 738.429 521.666 740.094 521.666 743.425C520.146 755.084 521.666 781.732 556.618 796.722C582.453 808.381 597.648 796.722 606.766 786.729C611.325 781.732 612.845 783.399 612.845 790.061C614.365 825.038 641.718 853.351 673.631 853.351C707.063 853.351 734.417 823.371 734.417 786.729C734.417 750.087 707.063 720.107 673.631 720.107Z" fill="white"/>
<path d="M1112.81 570.207C1044.43 505.25 886.382 353.685 842.312 318.708C817.997 298.722 801.282 287.063 786.085 283.732C780.007 282.067 770.888 278.735 758.731 278.735C748.093 278.735 735.937 280.401 723.78 285.397C696.426 295.391 669.072 318.709 641.718 342.027L640.199 343.692C615.885 365.344 590.051 386.997 570.295 391.993C561.177 393.659 553.578 395.324 544.46 395.324C523.185 395.324 503.43 388.661 495.832 378.668C494.312 377.003 495.831 373.671 498.87 370.34L559.657 298.723C606.766 247.09 650.837 198.788 754.173 195.457H758.731C822.556 195.457 886.382 227.102 893.98 230.433C954.767 262.079 1015.55 278.735 1077.86 278.735C1143.2 278.735 1210.07 260.414 1279.97 225.438C1272.37 218.775 1263.26 210.447 1255.66 203.785C1193.35 233.765 1135.6 247.089 1077.86 247.089C1020.11 247.089 962.366 232.1 906.138 202.12C903.099 200.454 833.194 163.811 758.731 163.811H752.654C666.033 165.476 617.405 198.788 585.492 228.768C553.579 228.768 526.225 238.761 501.911 245.424C480.636 252.086 460.88 257.084 442.644 257.084H419.849C398.574 257.084 292.198 228.769 208.617 192.127C199.499 198.789 191.902 205.45 182.784 212.112C270.924 252.086 378.819 282.066 412.251 285.397C421.369 285.397 432.006 287.062 442.644 287.062C465.439 287.062 486.714 280.401 509.509 273.739C523.186 270.408 536.862 265.41 550.539 262.079L538.381 275.404L477.595 348.689C473.036 353.686 462.399 368.675 468.477 385.331C471.517 391.993 477.595 398.654 485.193 405.317C500.39 415.31 526.225 423.639 550.539 423.639C559.657 423.639 568.774 421.973 576.372 420.307C602.207 413.645 629.561 390.328 656.915 365.345C679.71 345.358 711.622 320.374 735.936 312.046C743.534 310.38 751.133 308.716 758.731 308.716H764.81C781.526 310.381 796.723 317.044 825.596 340.362C875.745 382 1099.13 595.19 1100.65 596.856C1100.65 596.856 1114.33 610.181 1114.33 633.499C1114.33 645.158 1106.73 656.817 1096.1 665.145C1086.98 671.807 1076.34 675.138 1067.22 675.138C1052.02 675.138 1041.39 666.81 1041.39 666.81C1041.39 666.81 963.885 590.193 936.531 563.544C931.972 558.548 927.413 555.217 922.854 555.217C919.815 555.217 918.295 556.883 916.775 558.549C912.216 565.211 916.776 573.538 922.854 578.535L1012.51 676.803C1012.51 676.803 1023.15 688.462 1024.67 703.452C1024.67 720.107 1018.59 733.432 1003.4 743.425C992.759 751.753 982.12 755.083 971.482 755.083C957.805 755.083 948.688 748.421 945.649 746.756L931.972 733.432C909.177 708.449 884.864 681.8 866.628 666.81C862.069 663.479 857.509 658.482 852.95 658.482C851.431 658.482 848.391 658.482 846.871 661.813C845.352 663.478 843.832 668.475 848.391 676.803C849.91 680.134 852.95 681.801 852.95 681.801L918.294 761.746C918.294 761.746 931.973 780.067 919.816 795.057L916.775 798.39L910.696 805.05C900.059 815.043 884.862 816.71 878.784 816.71H869.666C863.588 815.045 859.028 813.379 855.989 810.048C852.95 805.051 819.518 770.074 792.164 745.09C789.125 741.759 784.565 738.428 780.006 738.428C778.487 738.428 775.447 740.095 773.927 741.76C769.368 748.422 776.967 758.415 780.006 761.746L836.235 828.368C836.235 828.368 836.233 830.035 834.714 833.366C833.194 836.697 825.597 843.358 805.842 846.689H798.243C776.968 846.689 755.692 835.031 743.534 828.368C748.093 816.709 751.133 803.386 751.133 790.062C751.133 740.095 714.662 700.121 669.073 700.121H666.032C667.552 676.803 664.514 633.499 623.483 615.178C611.326 610.182 600.688 606.851 588.53 606.851C579.412 606.851 571.815 608.515 562.697 611.846C553.579 593.525 539.901 580.202 521.665 573.539C511.028 570.208 501.91 568.542 491.272 568.542C474.556 568.542 459.359 573.539 445.683 585.197C439.081 576.288 430.737 569.118 421.268 564.217C411.799 559.317 401.447 556.811 390.975 556.884C372.74 556.884 354.504 565.21 342.347 578.535C325.631 563.545 257.246 516.909 73.3674 470.274C64.2495 468.608 44.4948 461.947 32.3375 456.95C30.8179 466.944 29.2975 478.603 27.7778 490.262C27.7778 490.262 61.2113 498.589 68.8096 500.255C255.727 545.225 318.032 593.525 328.67 601.853C325.631 611.846 324.11 621.841 324.11 631.834C324.11 675.138 356.023 708.449 394.014 708.449C398.573 708.449 403.132 708.449 407.691 706.784C413.77 738.429 432.006 761.747 460.879 773.406C469.997 776.737 477.595 778.402 485.193 778.402C489.752 778.402 495.832 778.402 501.911 776.736C506.47 791.726 518.626 810.047 545.979 821.706C555.097 826.702 564.216 828.368 573.334 828.368C580.932 828.368 588.531 826.704 594.609 823.373C606.767 856.684 637.16 880 670.592 880C693.387 880 714.662 870.008 729.859 851.686C743.536 860.014 770.889 875.005 799.763 875.005H810.399C839.273 871.674 851.43 858.349 857.508 850.021C859.028 848.356 859.029 846.689 860.549 845.024C866.627 846.689 874.226 848.356 883.344 848.356C898.54 848.356 913.737 843.358 928.933 830.033C944.13 818.375 954.767 801.719 954.767 786.729C959.325 788.395 965.404 788.395 969.963 788.395C985.16 788.395 1001.88 783.398 1017.07 771.739C1045.95 751.752 1050.51 723.439 1050.51 706.784C1055.06 708.449 1061.14 708.449 1065.7 708.449C1080.9 708.449 1096.1 703.452 1109.77 693.459C1128.01 680.134 1138.65 661.814 1140.17 640.162C1141.69 625.172 1137.12 610.18 1131.05 596.856C1179.67 573.538 1289.09 530.233 1419.78 496.922C1419.78 485.263 1418.26 475.27 1415.22 463.611C1258.7 500.253 1141.68 555.217 1112.81 570.207ZM673.631 848.356C643.238 848.356 618.924 821.706 617.404 788.395C617.404 785.063 617.404 778.402 611.325 778.402C608.286 778.402 606.766 780.068 603.727 781.734C597.648 788.396 588.53 795.057 576.372 795.057C570.294 795.057 564.216 793.393 558.137 790.062C526.225 775.072 524.705 751.754 526.225 741.76C526.225 738.429 526.225 736.763 524.706 735.098L523.185 733.432H521.665C520.146 733.432 518.626 733.432 515.586 736.763C506.468 743.425 497.352 746.756 488.234 746.756C483.675 746.756 477.596 745.091 473.037 743.425C430.487 725.104 433.526 681.8 436.565 668.475C436.565 665.144 436.565 663.478 435.046 661.813L432.005 658.482L428.967 661.813C419.849 670.14 409.211 675.138 398.574 675.138C374.259 675.138 354.503 653.485 354.503 626.836C354.503 600.187 374.259 578.535 398.574 578.535C419.849 578.535 439.605 596.856 442.644 620.174L444.163 633.499L450.242 621.839C450.242 620.173 468.478 590.195 501.911 591.86C507.989 591.86 514.067 593.525 521.665 595.19C547.499 603.518 552.058 630.168 552.058 640.162C552.058 646.824 556.618 646.822 556.618 646.822C558.138 646.822 561.176 645.158 561.176 643.492C565.735 638.495 576.374 628.502 593.09 628.502C600.688 628.502 608.286 630.168 617.404 635.164C658.435 655.151 640.199 711.779 640.199 713.445C637.16 723.438 635.64 726.769 640.199 730.1H643.238C644.757 730.1 647.797 730.1 650.836 728.435C656.914 726.769 664.513 723.439 672.111 723.439C702.504 723.439 728.338 751.753 728.338 785.064C729.857 821.706 704.024 848.356 673.631 848.356Z" fill="#2D3277"/>
</g>
<defs>
<clipPath id="clip0_2082_5">
<rect width="1447" height="1097" fill="white"/>
</clipPath>
</defs>
</svg>
                Comprar en Mercado Libre
                <ExternalLink size={15} />
              </a>
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
