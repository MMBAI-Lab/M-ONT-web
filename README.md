# M-ONT — Montevideo Workshop in OligoNucleotide and RNA Therapeutics

Static, bilingual website for **M-ONT**, an international workshop on the chemistry, biology, delivery, and clinical translation of oligonucleotide and RNA therapeutics taking place in **Montevideo, Uruguay, 23–27 February 2027**.

Organized by [DansLab (MMBAI)](https://www.danslab.xyz) at Universidad de la República, Uruguay.

> The site is **live** at [www.m-ont.org](https://www.m-ont.org/) and every section has real content: the full five-day programme, 19 confirmed speakers, the organizing committee, venue and travel info, registration, and sponsors. A few slots in the programme are still marked *to be confirmed*, and the abstract/fellowship submission links are not wired up yet.

## Tech stack

- **Next.js 15** (App Router) with `output: "export"` for a fully static build
- **TypeScript** in strict mode
- **Tailwind CSS** with theme tokens exposed as CSS custom properties
- **framer-motion** for the on-scroll fade-ins
- **sharp** (dev only) for one-off image processing (logo background removal, mirror-tiling the skyline)
- **GitHub Pages** for hosting, deployed via GitHub Actions on every push to `main`

## Local development

Requires **Node.js 20+**. On Windows, use `npm.cmd` (the `npm.ps1` is blocked by the default PowerShell ExecutionPolicy).

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export to out/
```

There is no separate test suite or lint step beyond `next build`, which type-checks and lints. The dev server is the fastest signal for visual or runtime regressions.

> **Tip:** do not run `npm run build` while `npm run dev` is active — the two commands share the `.next/` directory and a build will leave the dev server serving stale chunks. If you see `TypeError: a[d] is not a function` in the dev log, stop the dev server, delete `.next/`, and restart.

## Deployment

[`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml) builds and publishes to GitHub Pages on every push to `main`. It uses `actions/configure-pages@v5` with `static_site_generator: next`, which automatically sets `NEXT_PUBLIC_BASE_PATH` based on the repo's Pages configuration: when a **custom domain** is set under _Settings → Pages_, the action publishes assets at root; when not, it injects `/M-ONT-web` so the site works at `https://mmbai-lab.github.io/M-ONT-web/`.

The site is served from the custom domain **https://www.m-ont.org/** — see [`public/CNAME`](public/CNAME). DNS at the registrar should have a `CNAME` record pointing `www.m-ont.org` to `mmbai-lab.github.io`.

## Site map

```
/                       Home — hero, about, at-a-glance, speakers, committee, sponsors, abstracts
/programme/             Day-by-day schedule grid, Mon 23 – Fri 27 Feb
/speakers/              19 confirmed speakers with photo, affiliation, flag, talk title
/venue/                 Facultad de Ciencias venue, travel, Montevideo & Uruguay tourism
/registration/          How to apply, fees, deadlines, fellowships
/sponsors/              Main organizers (OTS, ICGEB) and other sponsors
/contact/               Organizing committee
/es/...                 Spanish mirror of every route above
```

## Site features

- **Bilingual** — English (default) at `/`, Spanish at `/es/...`. The `LangSwitch` in the nav preserves the current section when toggling language. Every site-data file ships in EN and ES — see [Translation parity](#translation-parity).
- **Single light theme** — palette derived from the M-ONT logo (cyan-blue accent, warm gradient stops). All tokens live as CSS custom properties in [`app/globals.css`](app/globals.css); change the three `--accent*` vars together to rebrand.
- **Hero skyline** — the Montevideo skyline (Adobe Stock, attributed in the footer) is mirror-tiled into a seamless 2× composite via `sharp`, then anchored at the base of the hero with `repeat-x`.
- **Animated chromatogram ribbons** — two diagonal bands of small color bars (mirroring the sequencing-style accents on the M-ONT logo letters) scroll slowly across the page in opposite directions. Pure CSS keyframes; respects `prefers-reduced-motion`.
- **Static export** — `next.config.mjs` sets `output: "export"`, `trailingSlash: true`, and `images.unoptimized: true`. The build emits one HTML file per route into `out/`.

## Where content lives

Most copy edits don't need React.

| What                          | Edit this                                                |
| ----------------------------- | -------------------------------------------------------- |
| Nav, footer, language switch  | [data/content/common.ts](data/content/common.ts)         |
| Home page copy                | [data/content/home.ts](data/content/home.ts)             |
| Programme schedule grid       | [data/content/programme.ts](data/content/programme.ts) — one `DaySchedule` per day, EN + ES |
| Speakers                      | [data/speakers.json](data/speakers.json) — photo goes in `public/img/` |
| Organizing committee          | [data/committee.json](data/committee.json)               |
| Sponsors                      | [data/sponsors.json](data/sponsors.json) — logo goes in `public/figures/` |
| Conference logo (full)        | [public/figures/MONT_logo.png](public/figures/MONT_logo.png) — used in the hero |
| Conference logo (no text)     | [public/figures/MONT_mark.png](public/figures/MONT_mark.png) — used in the nav |
| Skyline backdrop              | [public/figures/Mdeo_skyline.jpg](public/figures/Mdeo_skyline.jpg) plus the mirror-tiled `Mdeo_skyline_tile.jpg` |

## Translation parity

The site is bilingual: every visible string exists in EN and ES. TypeScript dicts in `data/content/*.ts` export `{ en, es }`. **Both keys must move together** in the same edit — when you add a new field to a `*Dict` type, populate it in both `en` and `es` immediately. Skipping the second language will surface as `undefined` strings on the corresponding language route.

Spanish copy targets Latin American / Uruguayan readers (no voseo unless the original copy used it; "tú" or impersonal forms are fine; standard LATAM spelling). English is American.

## Project layout

```
app/                                  App-Router routes; 5-line wrappers around components/pages/
  page.tsx, programme/, speakers/, venue/,
  registration/, sponsors/, contact/  English routes (/)
  es/...                              Spanish routes (/es/...)
  layout.tsx, globals.css             Root layout + Tailwind base + theme CSS variables

components/
  Nav.tsx, Footer.tsx                 Lang-aware (read URL via usePathname)
  LangSwitch.tsx                      Language switcher
  FadeIn.tsx                          framer-motion scroll-in wrapper
  BarsRibbon.tsx                      Slow-scrolling chromatogram ribbon (deterministic, looped)
  StickyRibbon.tsx                    Ribbon pinned below the nav (hidden on home)
  PageBanner.tsx                      Eyebrow + title header for inner pages
  SpeakerCard.tsx, CommitteeCard.tsx  Portrait cards with country flag
  pages/HomePage.tsx                  Hero, about, at-a-glance, plus the *Section blocks below
  pages/SpeakersSection.tsx,          Home-page blocks, reused standalone on their own routes
    CommitteeSection.tsx,
    SponsorsSection.tsx,
    AbstractsSection.tsx
  pages/ProgrammePage.tsx,            One bespoke component per inner route
    SpeakersPage.tsx, VenuePage.tsx,
    RegistrationPage.tsx,
    SponsorsPage.tsx, ContactPage.tsx

data/
  content/common.ts, home.ts,         Typed { en, es } content dicts
    programme.ts
  speakers.json, committee.json,      Structured data, language-neutral
    sponsors.json

lib/
  i18n.ts                             Lang type, detectLang(), localizePath()
  asset.ts                            Prepend basePath to public/* URLs
  speakers.ts, committee.ts           Load + sort the JSON data
  links.ts                            External URLs shared by home + /registration/

public/
  figures/                            Logos and skyline backdrops
  img/                                Speaker portraits; img/venue/ for venue & tourism photos
  .nojekyll                           Disables Jekyll on GitHub Pages
  CNAME                               Custom domain (www.m-ont.org)
```

## Image credits

The Montevideo skyline used in the hero is by **Serhii** on [Adobe Stock](https://stock.adobe.com/uy/contributor/209474979/serhii), used under a standard licence. The credit is rendered discreetly in the site footer.

## Reference

This site mirrors the structure of [`MMBAI-Lab/web-danslab`](https://github.com/MMBAI-Lab/web-danslab) — same stack, same conventions for routing, theming, and translation parity. When in doubt about a structural decision, check there first.
