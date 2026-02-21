import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { full_name, email, password, phone, state } = await req.json();

    if (!full_name || !email || !password) {
      return NextResponse.json(
        { error: "Nombre, correo y contraseña son requeridos." },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "La contraseña debe tener al menos 8 caracteres." },
        { status: 400 }
      );
    }

    // Verificar si el email ya existe
    const existing = await pool.query(
      "SELECT id FROM users WHERE email = $1",
      [email.toLowerCase().trim()]
    );
    if (existing.rows.length > 0) {
      return NextResponse.json(
        { error: "Ya existe una cuenta con ese correo." },
        { status: 409 }
      );
    }

    // Hashear contraseña (nunca guardar en texto plano)
    const password_hash = await bcrypt.hash(password, 12);

    await pool.query(
      `INSERT INTO users (full_name, email, password_hash, phone, state)
       VALUES ($1, $2, $3, $4, $5)`,
      [
        full_name.trim(),
        email.toLowerCase().trim(),
        password_hash,
        phone?.trim() || null,
        state || null,
      ]
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Register error:", err);
    return NextResponse.json(
      { error: "Error interno. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
