# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**LekBot** is an e-commerce marketing website for Lek 2, an educational robotics kit for children in Mexico. The site showcases the product, provides educational content, and integrates with Mercado Libre for payments.

## Tech Stack

- **Framework**: Next.js 16.1.6 with App Router
- **Language**: TypeScript 5
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4 with PostCSS
- **Animations**: GSAP 3.14.2
- **Icons**: Lucide React 0.575.0
- **Fonts**: Space Grotesk (body) and Bebas Neue (display) from Google Fonts

## Development Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint (via eslint-config-next)
```

## Project Structure

```
app/
  ├── layout.tsx           # Root layout with global metadata, fonts, SEO schema
  ├── page.tsx             # Landing page (/)
  ├── globals.css          # Global styles
  ├── robots.ts            # robots.txt generation
  ├── sitemap.ts           # sitemap.xml generation
  ├── components/          # Reusable React components
  │   ├── Navbar.tsx
  │   ├── LandingAnimations.tsx
  │   ├── RotatingText.tsx
  │   ├── InteractiveDots.tsx
  │   └── ProductCarousel.tsx
  └── lek-2/               # Lek 2 product section
      ├── page.tsx         # /lek-2 route
      └── video/
          └── page.tsx     # /lek-2/video route
```

## Architecture Notes

### Server-First Approach
- Next.js 13+ App Router: all components are Server Components by default
- Use `"use client"` only when client-side interactivity is needed (animations, state)
- API routes and data fetching use the App Router conventions

### Styling Strategy
- **Tailwind CSS 4** for utility-first styling across all components
- Custom fonts configured in `layout.tsx` using `next/font`
- Theme colors: cream background (#f3f4de), red accent (#dc2a36)
- No CSS-in-JS or traditional CSS files except `globals.css`

### Animations & Interactivity
- **GSAP** used for complex timeline-based animations in components like `LandingAnimations.tsx`
- Client components using GSAP: import with `"use client"` at top
- Interactive elements: `InteractiveDots.tsx`, `RotatingText.tsx`
- Lucide React for consistent icon usage throughout

### SEO & Metadata
- Comprehensive metadata setup in `layout.tsx` (title templates, OpenGraph, Twitter cards, schema.org)
- JSON-LD structured data for Organization and WebSite (in `layout.tsx`)
- Dynamic metadata can be added per-route in route-specific layouts
- Robots and sitemap auto-generated from `robots.ts` and `sitemap.ts`

### Content & Localization
- Site language: Spanish (es-MX)
- Content structure: landing → product showcase → video page
- Integration point: Mercado Libre links for product purchase/checkout

## Key Dependencies & Patterns

- **next/image**: Use for all images for automatic optimization and responsive handling
- **next/font**: Pre-configured fonts (Space Grotesk, Bebas Neue) — avoid importing fonts directly
- **lucide-react**: Icon library; components are named exports (e.g., `<ChevronRight />`)
- **GSAP**: For animations requiring frame-by-frame control or complex timelines; ensure components are client-side

## Configuration Files

- `tsconfig.json`: Path alias `@/*` maps to root; target ES2017 with strict mode enabled
- `tailwind.config.ts`: Default Tailwind 4 config (if exists); customize here for color extensions or plugins
- `postcss.config.mjs`: Processes Tailwind CSS
- `next.config.ts`: Minimal config; extend here for image domains, redirects, or middleware
- `eslint.config.mjs`: Uses eslint-config-next (Core Web Vitals + TypeScript rules)

## Common Development Patterns

### Adding a New Page/Route
1. Create a folder in `app/` (e.g., `app/new-page/`)
2. Add `page.tsx` with default export of the React component
3. Optional: add `layout.tsx` for route-specific metadata/layout
4. Use `Link` from `next/link` for navigation

### Creating an Animated Component
1. Add `"use client"` at the top
2. Use GSAP for complex animations or CSS animations for simple effects
3. Import GSAP only in client components: `import gsap from "gsap"`
4. Use `useEffect` to initialize animations after mount

### Styling Best Practices
- Use Tailwind utility classes exclusively for styling
- Use `cn()` helper (from classname library if available) to merge conditional classes
- Avoid inline styles unless necessary for dynamic values
- For theme colors, define as Tailwind classes in components

## Testing & Linting

- ESLint configuration enforces Next.js and TypeScript best practices
- Run `npm run lint` to check for issues
- No automated test runner currently configured; tests would use Jest or Vitest if added

## Deployment

- Optimized for Vercel (created with `create-next-app`)
- Static files in `public/` directory
- Build output to `.next/`
- Environment variables: use `NEXT_PUBLIC_` prefix for client-side access (e.g., `NEXT_PUBLIC_SITE_URL`)
