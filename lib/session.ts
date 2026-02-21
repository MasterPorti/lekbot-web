export interface Session {
  id: string;
  name: string;
  email: string;
}

/** Lee la sesión desde la cookie (solo funciona en el cliente) */
export function getSession(): Session | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|; )lekbot_session=([^;]*)/);
  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match[1])) as Session;
  } catch {
    return null;
  }
}

/** Borra la cookie de sesión en el cliente */
export function clearSession() {
  document.cookie =
    "lekbot_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}
