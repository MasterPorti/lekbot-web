# SEO Setup — LekBot

Guía completa para indexar y posicionar LekBot en búsquedas de "robótica para niños" en Google.

## ✅ Completado

- [x] **Sitemap XML** — Generado en `app/sitemap.ts`
  - `/` (prioridad 1.0)
  - `/lek-2` (prioridad 0.95)
  - `/lek-2/video` (prioridad 0.8)
  - Auto-actualizable en `https://lekbot.com/sitemap.xml`

- [x] **Robots.txt** — Creado en `public/robots.txt`
  - Permite rastreo completo
  - Apunta a sitemap
  - Accesible en `https://lekbot.com/robots.txt`

- [x] **Metadata & HTML Semántico**
  - Etiquetas `<title>` y `<meta description>` únicas por página
  - Etiquetas `<link rel="canonical">` en cada ruta
  - Server-Side Rendering (Next.js App Router)
  - OpenGraph + Twitter cards configuradas

- [x] **Schema.org JSON-LD**
  - Organization (con datos de contacto y ubicación)
  - WebSite (para búsqueda por sitio)
  - Product (Lek 2 con precio, disponibilidad, valoración)

---

## 📋 Próximos Pasos (Manuales en Google Search Console)

### 1. **Crear cuenta en Google Search Console**
   - Ve a https://search.google.com/search-console
   - Inicia sesión con tu cuenta de Google
   - Haz clic en "Agregar propiedad"

### 2. **Verificar propiedad**
   - **Opción A (recomendada)**: DNS
     - En tu proveedor de dominio (Namecheap, GoDaddy, etc.)
     - Agrega el registro TXT que Google Search Console proporcione
     - Espera 24-48h para propagación DNS
   
   - **Opción B**: HTML
     - Descarga el archivo HTML que proporciona Google
     - Súbelo a `public/` en tu proyecto
     - Verifica después de deployar

### 3. **Enviar Sitemap**
   - En Google Search Console → Menú lateral → "Sitemaps"
   - Haz clic en "Agregar/probar sitemap"
   - Ingresa: `https://lekbot.com/sitemap.xml`
   - Haz clic en "Enviar"
   - Espera 24-48h para que Google lo procese

### 4. **Solicitar Indexación Manual**
   - En Google Search Console → Barra superior (lupa)
   - Inspecciona estas URLs:
     - `https://lekbot.com`
     - `https://lekbot.com/lek-2`
     - `https://lekbot.com/lek-2/video`
   - Haz clic en "Solicitar indexación"
   - Esto acelera el rastreo (normalmente 24-48h)

### 5. **Monitorear Estado de Indexación**
   - En Google Search Console → "Cobertura"
   - Verifica que todas tus páginas aparezcan como "URL válida sin problemas"
   - Si hay errores, revisa y soluciona (generalmente meta tags duplicadas)

---

## 🔍 Keywords Target para Posicionamiento

Tu sitio está optimizado para:

- **Primarias**: "robótica para niños", "kit de robótica", "robot educativo"
- **Secundarias**: "robot programable", "robot Bluetooth", "STEM México"
- **Longtail**: "robot que se arma en casa", "robot sin soldadura niños 8 años"

---

## 🚀 Estrategia de Contenido para Mejorar Ranking

### Página Principal (`/`)
- ✅ Incluye "robótica para niños" en H1
- ✅ Párrafos introductorios con keywords naturales
- ✅ Enlaces internos a `/lek-2` y `/lek-2/video`
- 📝 **Mejora**: Agrega sección de "FAQ" (What, How, Where) con esquema FAQSchema

### Página del Producto (`/lek-2`)
- ✅ Metadata optimizado con "Lek 2", "robot educativo", "programable"
- ✅ Schema de producto con precio y disponibilidad
- 📝 **Mejora**: Agregar especificaciones técnicas en tabla estructurada
- 📝 **Mejora**: Agregar reviews/testimonios (schema ReviewSchema)

### Página de Video (`/lek-2/video`)
- ✅ Metadata y OpenGraph configurados
- 📝 **Mejora**: Encrustar video con `<iframe>` (mejora indexación de video)
- 📝 **Mejora**: Transcripción debajo del video para SEO

---

## 📊 Checklist Post-Deploy

- [ ] Sitemap accesible: `https://lekbot.com/sitemap.xml` (busca en navegador)
- [ ] Robots.txt accesible: `https://lekbot.com/robots.txt`
- [ ] Verificar propiedad en Google Search Console (DNS o HTML)
- [ ] Sitemap enviado a Google
- [ ] URLs solicitadas a indexación manual
- [ ] Sin errores en "Cobertura" de GSC
- [ ] Rich Snippets activos (verifica con https://schema.org/validator)

---

## 🎯 Monitoreo Continuo

- **Semanal**: Revisa "Rendimiento" en GSC para CTR y posición promedio
- **Mensual**: Analiza "Cobertura" para nuevos errores
- **Trimestral**: Revisa backlinks potenciales (GSC → Enlaces)

---

## 📌 Notas Técnicas

- **Environment Variable**: `NEXT_PUBLIC_SITE_URL` debe estar configurada correctamente
  - Desarrollo: no es crítica (usa default `https://lekbot.com`)
  - Producción: **DEBES establecerla a tu dominio real** en Vercel/hosting

- **Canonical Tags**: Ya configuradas automáticamente por Next.js metadata
- **Mobile First**: Google prioriza versión mobile (tu sitio es responsive ✅)
- **Page Speed**: Monitora en https://pagespeed.web.dev

---

## ⚠️ Problemas Comunes y Soluciones

| Problema | Causa | Solución |
|----------|-------|----------|
| Sitemap no aparece en GSC | URLs no son accesibles | Verifica dominio correcto en `NEXT_PUBLIC_SITE_URL` |
| "URL no enviada" en inspección | Robots.txt bloquea rastreo | Verifica `Allow: /` en robots.txt |
| No hay snippets enriquecidos | Schema JSON-LD inválido | Valida en https://schema.org/validator |
| Bajo ranking | Falta contenido de calidad | Agrega más texto, FAQs, reviews, testimonios |

---

**Última actualización**: 2026-04-24
**Responsable**: SEO Setup automático con Next.js
