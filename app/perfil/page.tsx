"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession, clearSession, type Session } from "@/lib/session";
import {
  UserCircle,
  Mail,
  Phone,
  MapPin,
  LogOut,
  ShoppingBag,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";

export default function PerfilPage() {
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    const s = getSession();
    if (!s) {
      router.replace("/checkouts");
    } else {
      setSession(s);
    }
  }, [router]);

  async function handleLogout() {
    setLoggingOut(true);
    await fetch("/api/auth/logout", { method: "POST" });
    clearSession();
    router.push("/");
  }

  if (!session) return null;

  const firstName = session.name.split(" ")[0];

  return (
    <main className="min-h-screen bg-[#f8f8f8]">
      {/* Header */}
      <div className="bg-black border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors">
            <ArrowLeft size={15} />
            Inicio
          </Link>
          <Image src="/logo.png" alt="LekBot" width={36} height={36} className="rounded-md ring-2 ring-[#dc2a36]" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10">

        {/* Saludo */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-full bg-[#dc2a36] flex items-center justify-center shrink-0">
            <span className="text-white text-2xl font-bold">
              {firstName[0]?.toUpperCase()}
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Hola, {firstName} 👋</h1>
            <p className="text-gray-400 text-sm">Bienvenido a tu cuenta LekBot</p>
          </div>
        </div>

        {/* Datos de cuenta */}
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mb-4">
          <div className="px-6 py-4 border-b border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Datos de cuenta</p>
          </div>

          <div className="divide-y divide-gray-100">
            <div className="flex items-center gap-4 px-6 py-4">
              <UserCircle size={18} className="text-[#dc2a36] shrink-0" />
              <div>
                <p className="text-xs text-gray-400">Nombre</p>
                <p className="text-sm font-semibold text-gray-900">{session.name}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-6 py-4">
              <Mail size={18} className="text-[#dc2a36] shrink-0" />
              <div>
                <p className="text-xs text-gray-400">Correo electrónico</p>
                <p className="text-sm font-semibold text-gray-900">{session.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-6 py-4">
              <Phone size={18} className="text-[#dc2a36] shrink-0" />
              <div>
                <p className="text-xs text-gray-400">Teléfono</p>
                <p className="text-sm font-semibold text-gray-500 italic">No registrado</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-6 py-4">
              <MapPin size={18} className="text-[#dc2a36] shrink-0" />
              <div>
                <p className="text-xs text-gray-400">Estado</p>
                <p className="text-sm font-semibold text-gray-500 italic">No registrado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mis pedidos */}
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mb-4">
          <div className="px-6 py-4 border-b border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Mis pedidos</p>
          </div>
          <div className="px-6 py-8 flex flex-col items-center text-center gap-2">
            <ShoppingBag size={32} className="text-gray-200" />
            <p className="text-sm font-medium text-gray-400">Aún no tienes pedidos</p>
            <Link
              href="/lek-2"
              className="flex items-center gap-1 text-[#dc2a36] text-xs font-bold hover:underline mt-1"
            >
              Ver el Lek 2 <ChevronRight size={13} />
            </Link>
          </div>
        </div>

        {/* Botón cerrar sesión */}
        <button
          onClick={handleLogout}
          disabled={loggingOut}
          className="w-full flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-600
                     text-sm font-semibold py-3.5 rounded-full hover:border-red-300 hover:text-red-500
                     transition-all duration-200 disabled:opacity-50"
        >
          <LogOut size={16} />
          {loggingOut ? "Cerrando sesión..." : "Cerrar sesión"}
        </button>
      </div>
    </main>
  );
}
