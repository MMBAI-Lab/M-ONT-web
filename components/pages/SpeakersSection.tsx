import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SpeakerCard from "@/components/SpeakerCard";
import { getConfirmedSpeakers } from "@/lib/speakers";
import { HOME } from "@/data/content/home";
import { localizePath, type Lang } from "@/lib/i18n";

export default function SpeakersSection({ lang }: { lang: Lang }) {
  const c = HOME[lang];
  const ORGANIZERS = new Set(["Pablo D. Dans", "Juan Pablo Tosar", "Victoria Calzada"]);
  const speakers = getConfirmedSpeakers().filter((s) => !ORGANIZERS.has(s.name));

  return (
    <section className="border-b border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {c.speakers_eyebrow}
          </p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {c.speakers_title}
            </h2>
            <Link
              href={localizePath(lang, "/speakers")}
              className="text-sm font-medium text-accent hover:text-accent-hover"
            >
              {c.speakers_cta}
            </Link>
          </div>
        </FadeIn>

        {/* 4-column grid — fits 15 cards as 3 full rows + last row centred */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {speakers.map((s, i) => (
            <FadeIn key={s.name} delay={Math.min(i * 0.04, 0.3)}>
              <SpeakerCard speaker={s} />
            </FadeIn>
          ))}
          {/* Placeholder slot(s) for upcoming confirmations */}
          {[...Array(2)].map((_, i) => (
            <FadeIn key={`tbc-${i}`} delay={Math.min((speakers.length + i) * 0.04, 0.3)}>
              <article className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border bg-bg p-5 text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-border bg-elevated">
                  <span className="text-2xl text-border">?</span>
                </div>
                <p className="text-xs font-medium uppercase tracking-widest text-subtle">
                  {lang === "es" ? "Por confirmar" : "To be confirmed"}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
