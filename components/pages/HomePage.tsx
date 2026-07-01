import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import BarsRibbon from "@/components/BarsRibbon";
import CommitteeSection from "@/components/pages/CommitteeSection";
import SpeakersSection from "@/components/pages/SpeakersSection";
import SponsorsSection from "@/components/pages/SponsorsSection";
import AbstractsSection from "@/components/pages/AbstractsSection";
import { localizePath, type Lang } from "@/lib/i18n";
import { HOME } from "@/data/content/home";
import { asset } from "@/lib/asset";

export default function HomePage({ lang }: { lang: Lang }) {
  const c = HOME[lang];

  return (
    <>
      {/* HERO — light, airy: white bg, the Montevideo skyline tiled at the
          base of the section, a slow chromatogram ribbon crossing diagonally. */}
      <section className="relative isolate overflow-hidden border-b border-border bg-bg">
        {/* Skyline tile: native height (471 px) anchored at the bottom and
            repeated horizontally. The image is a mirror-doubled composite, so
            repeat-x produces a seamless continuous skyline. Kept crisp (no
            blur) at moderate opacity. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `url(${asset("/figures/Mdeo_skyline_tile.jpg")})`,
            backgroundSize: "auto 471px",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center bottom",
            opacity: 0.72,
          }}
        />
        {/* Light top wash so the eyebrow / title stay readable; bottom barely
            washed so the skyline keeps its presence. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.80) 0%, rgba(255,255,255,0.20) 30%, rgba(255,255,255,0.10) 70%, rgba(255,255,255,0.55) 100%), radial-gradient(55rem 26rem at 78% 8%, rgba(34,211,238,0.08), transparent 60%)",
          }}
        />
        {/* Diagonal chromatogram ribbon — crosses the hero from lower-left
            to upper-right, behind the content. The wrapper is wider/taller
            than the section to avoid clipped corners after rotation. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-[180%] -translate-x-1/2 -translate-y-1/2 -rotate-[14deg]"
        >
          <BarsRibbon className="h-full w-full opacity-90" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-10 pb-20 md:pt-14 md:pb-28">
          <FadeIn>
            <p className="mb-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              {/* "Montevideo" is always the first segment; the flag sits right after it. */}
              {c.eyebrow.split(" · ")[0]}
              <Image
                src={asset("/figures/uy.svg")}
                alt="Uruguay"
                width={24}
                height={16}
                className="inline-block h-[1.1em] w-auto align-middle"
                aria-hidden="true"
              />
              {" · " + c.eyebrow.split(" · ").slice(1).join(" · ")}
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <Image
              src={asset("/figures/MONT_logo.png")}
              alt="M-ONT — Montevideo Workshop on Oligonucleotide Therapeutics"
              width={803}
              height={241}
              priority
              className="mb-8 h-auto w-full max-w-[560px] select-none object-contain"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-6xl">
              {c.title_pre}
              <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-orange-500 bg-clip-text text-transparent">
                {c.title_accent}
              </span>
              {c.title_post}
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-7 max-w-prose text-lg leading-relaxed text-muted">
              {c.intro}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={localizePath(lang, "/registration")}
                className="rounded-md bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-accent-hover"
              >
                {c.cta_register}
              </Link>
              <Link
                href={localizePath(lang, "/programme")}
                className="rounded-md border border-border bg-bg/70 px-5 py-3 text-sm font-medium text-ink backdrop-blur-sm transition hover:border-accent hover:text-accent"
              >
                {c.cta_programme}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-b border-border bg-bg">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[2fr_1fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              {c.about_eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {c.about_title}
            </h2>
            <div className="mt-8 space-y-5 leading-relaxed text-muted">
              {c.about_paragraphs.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {c.pillars.map((pillar) => (
                <article
                  key={pillar.kicker}
                  className="rounded-lg border border-border bg-surface p-5 transition hover:border-accent"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                    {pillar.kicker}
                  </p>
                  <p className="mt-2 font-serif text-base font-semibold leading-snug text-ink">
                    {pillar.title}
                  </p>
                </article>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-lg border border-border bg-surface p-6">
              <h3 className="font-serif text-lg font-semibold text-ink">
                {c.quicklinks_title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {c.quicklinks.map((q) => (
                  <li key={q.href}>
                    <Link
                      href={localizePath(lang, q.href)}
                      className="group flex items-center justify-between text-muted hover:text-accent"
                    >
                      {q.label}
                      <span className="text-subtle group-hover:text-accent">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* RIBBON OVERLAY — sits at the boundary between ABOUT and AT A GLANCE,
          but on the top layer so its diagonal bars overlap both neighbouring
          sections instead of being hidden behind them. Zero-height parent
          keeps the document flow tidy; the rotated ribbon is centred on the
          boundary line and bleeds 80 px into each side. */}
      <div className="relative z-30 h-0">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-40 w-[180%] -translate-x-1/2 -translate-y-1/2 rotate-[10deg]"
        >
          <BarsRibbon className="h-full w-full opacity-90" reverse />
        </div>
      </div>

      {/* AT-A-GLANCE FACTS */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              {c.facts_eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {c.facts_title}
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {c.facts.map((f, i) => (
              <FadeIn key={f.label} delay={Math.min(i * 0.06, 0.24)}>
                <article className="h-full rounded-lg border border-border bg-bg p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-subtle">
                    {f.label}
                  </p>
                  <p className="mt-2 font-serif text-lg font-semibold leading-snug text-ink">
                    {f.value}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIRMED SPEAKERS */}
      <SpeakersSection lang={lang} />

      {/* ORGANIZING COMMITTEE */}
      <CommitteeSection lang={lang} />

      {/* MAIN SPONSORS */}
      <SponsorsSection lang={lang} />

      {/* ABSTRACTS & FELLOWSHIPS */}
      <AbstractsSection lang={lang} />
    </>
  );
}
