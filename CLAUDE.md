# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

BaakoPay frontend: a Vue 3 + TypeScript + Vite marketing site for a payment-operations platform for institutions (schools, businesses, hospitals, NGOs, merchants, etc.) across Africa. It's a public site (no auth/app views yet) built from a six-page design: Home, Solutions, Who We Serve, How It Works, Integrations, Contact.

## Commands

```bash
npm run dev       # start Vite dev server
npm run build      # type-check (vue-tsc -b) then production build
npm run preview    # preview the production build locally
npm run lint        # eslint . --fix
npm run format      # prettier . --write
```

There is no test runner configured. `eslint.config.js` imports `@vitest/eslint-plugin` and `eslint-plugin-cypress` and references `src/**/__tests__/*` and `cypress/**` globs, but neither those plugins nor `vitest`/`cypress` are installed — running `npm run lint` currently fails with `ERR_MODULE_NOT_FOUND`. This is unused leftover from the `create-vue` scaffold template, predates the marketing-site build-out, and needs those packages installed (or the config trimmed) before lint will run. Use `npx vue-tsc -b --noEmit` for type-checking in the meantime.

## Architecture

- **Entry point**: `src/main.ts` creates the app and installs `router` and `i18n`, then mounts to `#app`. Global styles/design tokens come from `src/assets/style.css`.
- **Styling**: Tailwind CSS v4 via the `@tailwindcss/vite` plugin (no `tailwind.config.js` needed). The design system's palette is registered as custom tokens in a Tailwind `@theme` block in `src/assets/style.css` (`--color-brand`, `--color-ink`, `--color-muted`, `--color-gold`, `--color-tint`, status colors, etc.) — components use them as ordinary utility classes (`bg-brand`, `text-muted`, `border-border`). Add new design tokens there rather than inlining hex values in components.
- **Path alias**: `@/*` → `./src/*`, configured in both `tsconfig.app.json` and `vite.config.ts` (`resolve.alias`, via `fileURLToPath(new URL('./src', import.meta.url))`). Keep both in sync if it ever changes.
- **Routing** (`src/router/index.ts`): all six marketing pages are children of a single `PublicLayout` parent route at `/`, named `home`, `solutions`, `who-we-serve`, `how-it-works`, `integrations`, `contact`. Route components are lazy-loaded and live in `src/views/marketing/`. A commented-out block below sketches a future `/admin` section (nested children under `MainLayout.vue`, `meta: { breadcrumb, parent }` convention) — follow that pattern if/when an authenticated admin area is added.
- **Layouts** (`src/layouts/`): `PublicLayout.vue` wraps every marketing page with `AppNavbar` + `<RouterView />` + `AppFooter`. `MainLayout.vue` is an empty placeholder reserved for the future admin shell.
- **Page → component composition**: each view in `src/views/marketing/` is thin — it composes page-specific section components from `src/components/<page-name>/` (e.g. `src/components/home/HeroSection.vue`, `src/components/solutions/SolutionsBentoGrid.vue`). Don't inline large chunks of template directly into a view; add a new section component instead. Cross-page shared pieces live in `src/components/layout/` (navbar, footer, CTA banner) and `src/components/ui/` (`SectionEyebrow`, `BaseButton`, `PageHeader`).
- **Particle canvas animation**: the hero and every CTA banner use a dot-network canvas animation, extracted into `src/composables/useParticleCanvas.ts` (`useParticleCanvas(canvasRef, "hero" | "cta")`). Add new variants there rather than duplicating the animation loop.
- **Inline icon registry**: small decorative SVG icons reused across multiple components (industry tags, tab icons, etc.) live in `src/assets/icons.ts` as an `ICONS: Record<string, string>` map of raw `<svg>` markup, rendered via `v-html` on a wrapper element (content is static/author-controlled, not user input). Icons used in only one place are inlined directly in that component's template instead.
- **i18n** (`src/i18n/`): `vue-i18n` in Composition API mode (`legacy: false`), default locale `fr`, fallback `en`. Every page's copy is namespaced by page (`home.*`, `solutions.*`, `whoWeServe.*`, `howItWorks.*`, `integrations.*`, `contact.*`), plus a `common.*` namespace for cross-page vocabulary (`common.status.*` for payment-status pill words, `common.industries.*` for industry names) — check `common` before adding a new key that might already exist elsewhere. `en/index.ts` and `fr/index.ts` must stay structurally mirrored. Repeating structured demo data (table rows, mock names/amounts in dashboard mockups) is kept as local, non-translated component data — only user-facing prose/labels go through `t()`/`tm()`.
- **TypeScript**: project-references setup (`tsconfig.json` → `tsconfig.app.json` for `src/`, `tsconfig.node.json` for `vite.config.ts`). `tsconfig.node.json` has `"types": ["node"]` (via `@types/node`) since `vite.config.ts` uses `node:url`.
