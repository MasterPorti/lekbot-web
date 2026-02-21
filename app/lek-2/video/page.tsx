import Image from "next/image";
import Navbar from "../../components/Navbar";
import {
  Cpu,
  Wifi,
  Package,
  Play,
  ExternalLink,
  Check,
  ChevronLeft,
  Zap,
} from "lucide-react";
import Link from "next/link";

const ML_URL =
  "https://www.mercadolibre.com.mx/disco-solido-ssd-interno-adata-ultimate-su630-asu630ss-480gq-r-480gb/p/MLM26797016";

export default function Lek2VideoPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Link
            href="/lek-2"
            className="inline-flex items-center gap-1.5 text-gray-500 hover:text-white text-sm transition-colors mb-8"
          >
            <ChevronLeft size={15} />
            Volver al Lek 2
          </Link>

          <div className="inline-flex items-center gap-2 bg-[#dc2a36]/10 border border-[#dc2a36]/30 text-[#dc2a36] text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <Play size={11} fill="currentColor" />
            En acción
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Mira el <span className="text-[#dc2a36]">Lek 2</span> en movimiento
          </h1>
          <p className="text-gray-400 text-base md:text-lg">
            Ensámblalo en minutos y contrólalo desde tu celular.
          </p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-sm rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-[#dc2a36]/10">
          <video
            src="https://supabase.robokidsedu.com/storage/v1/object/public/videos//WhatsApp%20Video%202026-02-20%20at%207.09.23%20PM.mp4"
            poster="/lekprov22.png"
            controls
            playsInline
            preload="metadata"
            className="w-full"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: <Cpu size={22} />,
              title: "Programable",
              desc: "Aprende robótica desde cero con la LekApp",
            },
            {
              icon: <Wifi size={22} />,
              title: "Control Bluetooth",
              desc: "Controla tu robot desde el celular en tiempo real",
            },
            {
              icon: <Package size={22} />,
              title: "Kit completo",
              desc: "Todo incluido. Sin compras extra, sin sorpresas",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-center text-center bg-white/5 border border-white/10 hover:border-[#dc2a36]/30 rounded-2xl p-6 gap-3 transition-colors duration-200"
            >
              <span className="text-[#dc2a36]">{f.icon}</span>
              <p className="text-white font-bold text-sm">{f.title}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#dc2a36] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <Zap size={11} fill="white" />
            Precio de lanzamiento
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-gray-600 line-through text-xl">$699</span>
            <span className="text-5xl font-bold text-white">$499</span>
            <div className="flex flex-col items-start gap-1">
              <span className="bg-[#dc2a36] text-white text-xs font-bold px-2 py-0.5 rounded-md">
                -29%
              </span>
              <span className="text-gray-500 text-xs">MXN</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-8">
            {[
              "Envío gratis",
              "Garantía 6 meses",
              "Kit completo",
              "Acceso LekApp",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-1.5 text-sm text-gray-400"
              >
                <Check size={13} className="text-[#dc2a36]" strokeWidth={3} />
                {item}
              </span>
            ))}
          </div>

          <a
            href={ML_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#FFE600] text-gray-900 text-base font-bold
                       px-10 py-4 rounded-full hover:bg-[#FFD000] transition-all duration-200 hover:scale-105
                       shadow-2xl shadow-[#FFE600]/20 w-full justify-center"
          >
            <Image
              src="/mercadolibre.svg"
              alt="Mercado Libre"
              width={20}
              height={20}
              className="shrink-0"
            />
            Comprar ahora en Mercado Libre
            <ExternalLink size={15} />
          </a>

          <p className="text-gray-600 text-xs mt-4">
            Disponible en Mercado Libre · Pago seguro · 30 días de devolución
          </p>
        </div>
      </section>
    </main>
  );
}
