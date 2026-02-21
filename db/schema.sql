-- ============================================================
--  LekBot — Schema de base de datos
--  PostgreSQL
-- ============================================================

-- Extensión para UUIDs
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================
--  TABLA: users
--  Guarda cuentas de clientes que compran en el sitio
-- ============================================================
CREATE TABLE IF NOT EXISTS users (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name     TEXT        NOT NULL,
  email         TEXT        NOT NULL UNIQUE,
  password_hash TEXT        NOT NULL,           -- NUNCA guardar contraseña en texto plano
  phone         TEXT,
  state         TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Índice para búsquedas rápidas por email (login)
CREATE INDEX IF NOT EXISTS idx_users_email ON users (email);

-- ============================================================
--  TABLA: products
--  Catálogo de productos (por ahora solo Lek 2)
-- ============================================================
CREATE TABLE IF NOT EXISTS products (
  id          UUID    PRIMARY KEY DEFAULT gen_random_uuid(),
  slug        TEXT    NOT NULL UNIQUE,         -- ej: "lek-2"
  name        TEXT    NOT NULL,
  price       INTEGER NOT NULL,                -- en centavos MXN: 49900 = $499.00
  full_price  INTEGER NOT NULL,                -- precio sin descuento
  active      BOOLEAN NOT NULL DEFAULT TRUE
);

-- Producto inicial
INSERT INTO products (slug, name, price, full_price)
VALUES ('lek-2', 'Lek 2 — Kit completo', 49900, 69900)
ON CONFLICT (slug) DO NOTHING;

-- ============================================================
--  TABLA: orders
--  Registro de cada pedido realizado
-- ============================================================
CREATE TABLE IF NOT EXISTS orders (
  id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID        NOT NULL REFERENCES users (id) ON DELETE RESTRICT,
  product_id   UUID        NOT NULL REFERENCES products (id) ON DELETE RESTRICT,
  quantity     INTEGER     NOT NULL DEFAULT 1 CHECK (quantity > 0),
  unit_price   INTEGER     NOT NULL,           -- precio al momento de la compra (centavos)
  total        INTEGER     NOT NULL,           -- unit_price * quantity
  status       TEXT        NOT NULL DEFAULT 'pending'
                           CHECK (status IN ('pending', 'confirmed', 'shipped', 'delivered', 'cancelled')),
  notes        TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_orders_user_id   ON orders (user_id);
CREATE INDEX IF NOT EXISTS idx_orders_status    ON orders (status);

-- ============================================================
--  TRIGGER: actualizar updated_at automáticamente
-- ============================================================
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trg_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE OR REPLACE TRIGGER trg_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();
