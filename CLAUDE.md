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

The two language trees are **parallel directories** under `app/`: every English route at `app/<route>/page.tsx` has a Spanish twin at `app/es/<route>/page.tsx`. Each route file is a 5-line wrapper that imports from `components/pages/` and passes `lang="en"` or `lang="es"`.

To add a new section: create both wrappers (EN and ES), the shared component in `components/pages/`, the dict entry under `data/content/`, and add the section to the `SECTIONS` list in `components/Nav.tsx`.

### Content lives in typed dictionaries

Page text is **not** inline.

- **Page-level copy** (eyebrows, headings, intro paragraphs, section titles) lives in `data/content/*.ts`, each exporting `{ en, es }` keyed by `Lang`. Files: `common.ts`, `home.ts`, `sections.ts`.
- The six inner pages (programme, speakers, venue, registration, sponsors, contact) currently share a single generic component: `components/pages/SectionPage.tsx`, which takes a `section` key and reads from `SECTIONS[lang][section]`. As any one of them earns its own bespoke layout (e.g. a real programme grid, speaker cards), promote it into its own `*Page.tsx` and a richer dict.

Page components in `components/pages/` are server components: they take `lang: Lang`, look up the dict for that language, and render. `Nav`, `Footer`, `LangSwitch` are **client** components that detect lang via `usePathname()` and call `detectLang(pathname)` from `lib/i18n.ts`.

`localizePath(lang, "/programme")` is the helper for building href targets that respect the locale prefix.

### basePath, asset URLs and the `asset()` helper

`next/image` with `images.unoptimized: true` (required for static export) does **not** auto-prefix the configured `basePath`. Same for raw `<img>`/`<a>` tags pointing at `/public/*` paths. Use `asset()` from `lib/asset.ts` for any URL that points at a file under `public/` — it prepends `process.env.NEXT_PUBLIC_BASE_PATH` (or empty string in dev). Already applied in `Nav` and `HomePage`.

### Theming via CSS variables (light only)

`tailwind.config.ts` resolves color tokens (`bg`, `surface`, `ink`, `accent`, etc.) to `rgb(var(--token) / <alpha-value>)`, so Tailwind's alpha modifiers (`bg-bg/80`) keep working. The single light palette is defined in `app/globals.css` under `:root`.

The site is **light-only** by user request — there is no dark mode, no `ThemeToggle`, and no `data-theme` switching. If a dark variant is reinstated later, port the structure from `web-danslab` (`:root[data-theme="dark"]`, anti-FOUC bootstrap script in `layout.tsx`, `ThemeToggle` component).

The accent color is cyan-blue (`14 116 144`) — picked to harmonize with the M-ONT logo's left-side gradient. To rebrand, update the three `--accent*` vars in `app/globals.css` together.

## Conventions worth knowing

- **Reference site**: this codebase mirrors the structure of [`MMBAI-Lab/web-danslab`](https://github.com/MMBAI-Lab/web-danslab). When in doubt about layout or conventions, check there.
- **`bash` tool on Windows**: forward slashes work; PowerShell is also available for Windows-native commands.
- **`gh` CLI is not installed** — to inspect Actions runs, open the GitHub URL directly.
- **No figures pipeline yet** — drop optimized images directly into `public/figures/`. If the count of bespoke graphics grows, port the `scripts/sync-figures.mjs` pipeline from web-danslab.
