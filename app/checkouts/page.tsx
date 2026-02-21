"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession, type Session } from "@/lib/session";
import {
  Eye,
  EyeOff,
  ChevronRight,
  Check,
  Truck,
  ShieldCheck,
  RotateCcw,
  Lock,
  ArrowLeft,
  CircleCheck,
  MapPin,
  Shield,
} from "lucide-react";

type Mode = "register" | "login";

export default function CheckoutsPage() {
  const router = useRouter();
  const [session, setSession]     = useState<Session | null>(null);
  const [sessionLoaded, setSessionLoaded] = useState(false);
  const [mode, setMode]           = useState<Mode>("register");
  const [showPass, setShowPass]   = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState("");
  const [success, setSuccess]     = useState("");

  // Campos de dirección (para cuando ya inició sesión)
  const [street, setStreet]       = useState("");
  const [colonia, setColonia]     = useState("");
  const [city, setCity]           = useState("");
  const [zip, setZip]             = useState("");
  const [addrState, setAddrState] = useState("");
  const [refs, setRefs]           = useState("");

  useEffect(() => {
    const s = getSession();
    setSession(s);
    setSessionLoaded(true);
  }, []);

  // Campos del formulario
  const [fullName, setFullName]   = useState("");
  const [email, setEmail]         = useState("");
  const [password, setPassword]   = useState("");
  const [phone, setPhone]         = useState("");
  const [state, setState]         = useState("");

  function switchMode(next: Mode) {
    setMode(next);
    setError("");
    setSuccess("");
    setPassword("");
    setShowPass(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      if (mode === "register") {
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ full_name: fullName, email, password, phone, state }),
        });
        const data = await res.json();

        if (!res.ok) {
          setError(data.error);
          return;
        }

        // Éxito: mostrar mensaje y cambiar a login con el email ya cargado
        setSuccess("¡Cuenta creada! Ahora inicia sesión para continuar.");
        setPassword("");
        setFullName("");
        setPhone("");
        setState("");
        setMode("login");

      } else {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json();

        if (!res.ok) {
          setError(data.error);
          return;
        }

        // Login correcto → recargar sesión en esta misma página
        const s = getSession();
        setSession(s);
      }
    } catch {
      setError("Error de conexión. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none " +
    "focus:border-[#dc2a36] focus:ring-2 focus:ring-[#dc2a36]/20 transition-all bg-white placeholder:text-gray-400";

  if (!sessionLoaded) return null; // evita flash antes de leer la cookie

  // ── VISTA CUANDO YA INICIÓ SESIÓN ──
  if (session) {
    const firstName = session.name.split(" ")[0];
    return (
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Izquierda — dirección */}
        <div className="w-full lg:w-1/2 flex flex-col px-8 py-10 sm:px-12 lg:px-16 xl:px-24 bg-white">
          <div className="flex items-center justify-between mb-10">
            <Link href="/lek-2" className="flex items-center gap-1.5 text-gray-400 hover:text-gray-700 text-sm transition-colors">
              <ArrowLeft size={15} />
              Volver
            </Link>
            <Image src="/logo.png" alt="LekBot" width={44} height={44} className="rounded-md ring-2 ring-[#dc2a36]" />
          </div>

          <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3 mb-6">
            <CircleCheck size={17} className="text-green-600 shrink-0" />
            <p className="text-sm text-green-700">
              Hola <strong>{firstName}</strong>, ya iniciaste sesión. Solo faltan tus datos de envío.
            </p>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-1">Dirección de envío</h1>
          <p className="text-gray-400 text-sm mb-6">¿A dónde enviamos tu Lek 2?</p>

          <form className="flex flex-col gap-4 w-full max-w-sm">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Calle y número</label>
              <input type="text" placeholder="Ej. Av. Insurgentes 123" value={street} onChange={e => setStreet(e.target.value)} className={inputClass} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Colonia</label>
              <input type="text" placeholder="Ej. Roma Norte" value={colonia} onChange={e => setColonia(e.target.value)} className={inputClass} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Ciudad</label>
                <input type="text" placeholder="Ciudad" value={city} onChange={e => setCity(e.target.value)} className={inputClass} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">C.P.</label>
                <input type="text" placeholder="00000" maxLength={5} value={zip} onChange={e => setZip(e.target.value)} className={inputClass} />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Estado</label>
              <select value={addrState} onChange={e => setAddrState(e.target.value)} className={inputClass}>
                <option value="">Selecciona tu estado</option>
                {["Ciudad de México","Jalisco","Nuevo León","Puebla","Guanajuato","Veracruz","Estado de México","Otros"].map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Referencias <span className="normal-case font-normal">(opcional)</span></label>
              <input type="text" placeholder="Ej. Entre calles, color de fachada..." value={refs} onChange={e => setRefs(e.target.value)} className={inputClass} />
            </div>

            {/* Botón de pago — no funcional aún */}
            <button
              type="button"
              disabled
              className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white
                         text-sm font-bold py-4 rounded-full mt-2 opacity-70 cursor-not-allowed"
            >
              <Shield size={16} />
              Pasarela de pago segura
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full ml-1">Próximamente</span>
            </button>

            <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
              <Lock size={11} />
              Pago cifrado · Tus datos están seguros
            </div>
          </form>
        </div>

        {/* Derecha — resumen (mismo componente, ver abajo) */}
        <OrderSummary />
      </div>
    );
  }

  // ── VISTA SIN SESIÓN (auth form) ──
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">

      {/* ── IZQUIERDA: formulario ── */}
      <div className="w-full lg:w-1/2 flex flex-col px-8 py-10 sm:px-12 lg:px-16 xl:px-24 bg-white">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <Link href="/lek-2" className="flex items-center gap-1.5 text-gray-400 hover:text-gray-700 text-sm transition-colors">
            <ArrowLeft size={15} />
            Volver
          </Link>
          <Image
            src="/logo.png"
            alt="LekBot"
            width={44}
            height={44}
            className="rounded-md ring-2 ring-[#dc2a36]"
          />
        </div>

        {/* Toggle */}
        <div className="flex bg-gray-100 rounded-full p-1 mb-8 w-full max-w-xs">
          <button
            type="button"
            onClick={() => switchMode("register")}
            className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all duration-200
              ${mode === "register" ? "bg-white shadow text-gray-900" : "text-gray-400 hover:text-gray-600"}`}
          >
            Crear cuenta
          </button>
          <button
            type="button"
            onClick={() => switchMode("login")}
            className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all duration-200
              ${mode === "login" ? "bg-white shadow text-gray-900" : "text-gray-400 hover:text-gray-600"}`}
          >
            Ya tengo cuenta
          </button>
        </div>

        {/* Título */}
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          {mode === "register" ? "Crear cuenta" : "Iniciar sesión"}
        </h1>
        <p className="text-gray-400 text-sm mb-6">
          {mode === "register"
            ? "Completa tus datos para finalizar tu pedido."
            : "Ingresa a tu cuenta para continuar con tu compra."}
        </p>

        {/* Banner de éxito (viene del registro) */}
        {success && (
          <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 mb-5 text-sm">
            <CircleCheck size={17} className="shrink-0" />
            {success}
          </div>
        )}

        {/* Banner de error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 mb-5 text-sm">
            {error}
          </div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">

          {mode === "register" && (
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Nombre completo
              </label>
              <input
                type="text"
                placeholder="Tu nombre"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={inputClass}
              />
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="tucorreo@ejemplo.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder={mode === "register" ? "Mínimo 8 caracteres" : "Tu contraseña"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputClass + " pr-11"}
              />
              <button
                type="button"
                onClick={() => setShowPass((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPass ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>
          </div>

          {mode === "register" && (
            <>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Teléfono
                </label>
                <div className="flex">
                  <span className="flex items-center px-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl text-sm text-gray-500 font-medium select-none">
                    +52
                  </span>
                  <input
                    type="tel"
                    placeholder="55 0000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputClass + " rounded-l-none"}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Estado
                </label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className={inputClass}
                >
                  <option value="">Selecciona tu estado</option>
                  {["Ciudad de México","Jalisco","Nuevo León","Puebla","Guanajuato","Veracruz","Estado de México","Otros"].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </>
          )}

          {mode === "login" && (
            <div className="text-right -mt-1">
              <a href="#" className="text-xs text-[#dc2a36] hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-[#dc2a36] text-white
                       text-sm font-bold py-3.5 rounded-full hover:bg-[#c02030]
                       transition-all duration-200 hover:scale-105 mt-2
                       disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {loading
              ? "Procesando..."
              : mode === "register"
              ? "Crear cuenta y pedir"
              : "Ingresar y continuar"}
            {!loading && <ChevronRight size={16} />}
          </button>

          <p className="text-center text-xs text-gray-400">
            {mode === "register"
              ? "Al crear tu cuenta aceptas nuestros términos de uso."
              : "Tus datos están protegidos con cifrado de extremo a extremo."}
          </p>
        </form>
      </div>

      <OrderSummary />
    </div>
  );
}

// ── Resumen del pedido (reutilizable en ambas vistas) ──
function OrderSummary() {
  return (
    <div className="w-full lg:w-1/2 bg-[#f8f8f8] border-t lg:border-t-0 lg:border-l border-gray-200 flex flex-col px-8 py-10 sm:px-12 lg:px-16 xl:px-20">
      <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
        Resumen del pedido
      </h2>

      {/* Producto */}
      <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-4 mb-6">
        <div className="relative shrink-0">
          <Image src="/lekprov22.png" alt="Lek 2" width={72} height={72} className="object-contain" />
          <span className="absolute -top-1.5 -right-1.5 bg-[#dc2a36] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">1</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-gray-900 text-sm">Lek 2 — Kit completo</p>
          <p className="text-xs text-gray-400">Edición 2025 · Envío incluido</p>
        </div>
        <div className="text-right shrink-0">
          <p className="font-bold text-gray-900">$499</p>
          <p className="text-xs text-gray-400 line-through">$699</p>
        </div>
      </div>

      {/* Desglose */}
      <div className="flex flex-col gap-3 border-t border-gray-200 pt-5 mb-6">
        <div className="flex justify-between text-sm"><span className="text-gray-500">Subtotal</span><span>$699</span></div>
        <div className="flex justify-between text-sm"><span className="text-gray-500">Descuento lanzamiento</span><span className="text-[#dc2a36] font-semibold">− $200</span></div>
        <div className="flex justify-between text-sm"><span className="text-gray-500">Envío</span><span className="text-green-600 font-semibold">Gratis</span></div>
        <div className="flex justify-between font-bold text-base border-t border-gray-200 pt-3 mt-1"><span>Total</span><span>$499 MXN</span></div>
      </div>

      {/* Garantías */}
      <div className="flex flex-col gap-3 mb-8">
        {[
          { icon: <Truck size={15} />,       text: "Envío gratis a toda la República Mexicana" },
          { icon: <ShieldCheck size={15} />, text: "Garantía de 6 meses contra defectos de fábrica" },
          { icon: <RotateCcw size={15} />,   text: "30 días de devolución sin preguntas" },
          { icon: <Lock size={15} />,        text: "Datos protegidos con cifrado de extremo a extremo" },
        ].map((g) => (
          <div key={g.text} className="flex items-center gap-3 text-xs text-gray-500">
            <span className="text-[#dc2a36] shrink-0">{g.icon}</span>
            {g.text}
          </div>
        ))}
      </div>

      {/* Qué incluye */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5">
        <p className="text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">Qué incluye tu kit</p>
        <div className="grid grid-cols-1 gap-1.5">
          {[
            "Estructura del robot (piezas pre-cortadas)",
            "Motores x4 con cables",
            "Tarjeta de control LekBoard",
            "Batería recargable + cable USB-C",
            "Sensores de proximidad x2",
            "Guía de ensamblaje paso a paso",
            "Acceso gratuito a la LekApp",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs text-gray-500">
              <Check size={11} strokeWidth={3} className="text-[#dc2a36] shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
