# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Node.js 20+ is required. On Windows shell, prefer `npm.cmd` over `npm` (the `npm.ps1` is blocked by default ExecutionPolicy).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
```

There is no test suite. There is no separate lint step beyond `next build` (which type-checks and lints). The dev server is the fastest signal for visual / runtime regressions.

Deploys are automatic: pushing to `main` triggers `.github/workflows/nextjs.yml` (Pages via Actions, the standard GitHub-provided template). It uses `actions/configure-pages@v5` with `static_site_generator: next`, which auto-sets `NEXT_PUBLIC_BASE_PATH` from the repo's Pages config — empty when a custom domain is set under Settings → Pages, `/M-ONT-web` otherwise. The site is served from the custom domain **www.m-ont.org** (see `public/CNAME`).

## Translation-parity rule (BLOCKING)

The site is bilingual. **Every site-data file ships in two languages, and both must move together in the same change.** This is non-negotiable:

- TypeScript dicts in `data/content/*.ts` export `{ en, es }`. Add a key to `en` → add the translated key to `es` in the same edit. Add a new field to the `CommonDict` (or any `*Dict`) type → populate it in `en` and `es` simultaneously.

**Translation defaults**: Spanish is Latin American / Uruguayan (no voseo unless the original copy used it; "tú" or impersonal forms are fine; standard LATAM spelling). English is American.

When the user asks to update a section, speaker, sponsor, etc., interpret it as updating BOTH dicts. Don't ask for both versions — translate the missing language yourself. If the user explicitly only wants one language, mention that the other will drift.

## Architecture

### Static export, dual locale

`next.config.mjs` sets `output: "export"`, `trailingSlash: true`, `images.unoptimized: true`. `basePath` and `assetPrefix` come from `NEXT_PUBLIC_BASE_PATH`. Build emits one HTML file per route into `out/`.

The site is fully bilingual:

- English (default) at `/`
- Spanish at `/es/...`

The two language trees live in **route groups with one root layout each**:

```
app/
  (en)/layout.tsx      <html lang="en"> + English metadata
  (en)/page.tsx, (en)/programme/, …        → /, /programme, …
  (es)/layout.tsx      <html lang="es"> + Spanish metadata
  (es)/es/page.tsx, (es)/es/programme/, …  → /es, /es/programme, …
  not-found.tsx        renders its own shell (see below)
  globals.css
```

Route groups do not appear in the URL, so `app/(es)/es/programme/page.tsx` still serves `/es/programme/`. Each route file is a 5-line wrapper that imports from `components/pages/` and passes `lang="en"` or `lang="es"`.

**There is deliberately no `app/layout.tsx`.** Only a root layout may render `<html>`, and the `lang` attribute has to differ per tree — so the site has two root layouts, which Next.js permits *only* when nothing sits above them. Adding `app/layout.tsx` back would make both groups nest inside it and silently return every Spanish page to `lang="en"`. The shared `<html>`/`<body>`/nav/footer shell lives in `components/RootShell.tsx`; the two layouts are thin wrappers around it that differ only in `lang` and metadata.

Two consequences worth knowing:

- `app/not-found.tsx` has no layout to nest into, so it renders `RootShell` itself. Without that it falls back to Next's bare 404 — no `lang`, no nav, no fonts. It is bilingual because a static host serves one 404 for every unmatched path.
- Navigating between the two trees is a full page load, not a client transition. That is already how `LangSwitch` behaves and is fine for a static site.

To add a new section: create both wrappers (`app/(en)/<route>/page.tsx` and `app/(es)/es/<route>/page.tsx`), the shared component in `components/pages/`, the dict entry under `data/content/`, and add the section to the `SECTIONS` list in `components/Nav.tsx`.

### Content lives in typed dictionaries

Page text is **not** inline.

- **Page-level copy** (eyebrows, headings, intro paragraphs, section titles) lives in `data/content/*.ts`, each exporting `{ en, es }` keyed by `Lang`. Files: `common.ts`, `home.ts`, `programme.ts`.
- **Structured, language-neutral data** lives in `data/*.json`: `speakers.json`, `committee.json`, `sponsors.json`. These hold names, affiliations, ISO country codes, photo filenames and URLs — no translatable prose, so they are single-copy and exempt from the parity rule. Loaded via `lib/speakers.ts` and `lib/committee.ts`.
- All six inner pages now have their own bespoke component (`ProgrammePage`, `SpeakersPage`, `VenuePage`, `RegistrationPage`, `SponsorsPage`, `ContactPage`). The old generic `SectionPage.tsx` + `sections.ts` placeholder scaffolding has been removed. Copy that is specific to one page currently lives inline in that component; promote it into a dict under `data/content/` when it grows.
- Four home-page blocks double as standalone sections: `SpeakersSection`, `CommitteeSection`, `SponsorsSection`, `AbstractsSection`. Editing one changes both the home page and the corresponding inner route.

Page components in `components/pages/` are server components: they take `lang: Lang`, look up the dict for that language, and render. `Nav`, `Footer`, `LangSwitch` are **client** components that detect lang via `usePathname()` and call `detectLang(pathname)` from `lib/i18n.ts`.

`localizePath(lang, "/programme")` is the helper for building href targets that respect the locale prefix.

### basePath, asset URLs and the `asset()` helper

`next/image` with `images.unoptimized: true` (required for static export) does **not** auto-prefix the configured `basePath`. Same for raw `<img>`/`<a>` tags pointing at `/public/*` paths. Use `asset()` from `lib/asset.ts` for any URL that points at a file under `public/` — it prepends `process.env.NEXT_PUBLIC_BASE_PATH` (or empty string in dev). Already applied in `Nav` and `HomePage`.

### Theming via CSS variables (light only)

`tailwind.config.ts` resolves color tokens (`bg`, `surface`, `ink`, `accent`, etc.) to `rgb(var(--token) / <alpha-value>)`, so Tailwind's alpha modifiers (`bg-bg/80`) keep working. The single light palette is defined in `app/globals.css` under `:root`.

The site is **light-only** by user request — there is no dark mode, no `ThemeToggle`, and no `data-theme` switching. If a dark variant is reinstated later, port the structure from `web-danslab` (`:root[data-theme="dark"]`, anti-FOUC bootstrap script in `layout.tsx`, `ThemeToggle` component).

The accent color is cyan-blue (`14 116 144`) — picked to harmonize with the M-ONT logo's left-side gradient. To rebrand, update the three `--accent*` vars in `app/globals.css` together.

### Fonts

**Inter** (sans) and **Source Serif 4** (serif) are loaded via `next/font/google` in `app/layout.tsx`, which downloads and self-hosts them at build time — the export ships the woff2 files under `_next/static/media/` and makes no runtime request to Google. Both are variable fonts, so one face covers the 400–700 range the site uses; there is no `weight` list to maintain. Only the normal style is loaded because nothing on the site is italic — add `style: ["normal", "italic"]` if that changes.

The chain is: `next/font` sets `--font-inter` / `--font-source-serif` on `<html>` → `:root` in `globals.css` composes them into `--font-sans` / `--font-serif` with system fallbacks → `tailwind.config.ts` maps those to `font-sans` / `font-serif`. **All three links are load-bearing**: drop the `var()` reference in `globals.css` and the site silently falls back to Georgia and Segoe UI with no error, which is how it shipped until this was wired up.

The brand handoff package at `../grafica/brand-m-ont/` carries the same two families as installable desktop files, plus the palette. Keep it in sync if the type changes.

## Conventions worth knowing

- **Reference site**: this codebase mirrors the structure of [`MMBAI-Lab/web-danslab`](https://github.com/MMBAI-Lab/web-danslab). When in doubt about layout or conventions, check there.
- **`bash` tool on Windows**: forward slashes work; PowerShell is also available for Windows-native commands.
- **`gh` CLI is not installed** — to inspect Actions runs, open the GitHub URL directly.
- **No figures pipeline yet** — drop optimized images directly into `public/figures/`. If the count of bespoke graphics grows, port the `scripts/sync-figures.mjs` pipeline from web-danslab.
