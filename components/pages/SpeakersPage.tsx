import FadeIn from "@/components/FadeIn";
import PageBanner from "@/components/PageBanner";
import SpeakerCard from "@/components/SpeakerCard";
import { getConfirmedSpeakers } from "@/lib/speakers";
import { HOME } from "@/data/content/home";
import type { Lang } from "@/lib/i18n";

export default function SpeakersPage({ lang }: { lang: Lang }) {
  const c = HOME[lang];
  const speakers = getConfirmedSpeakers();

  return (
    <>
    <PageBanner />
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          {c.speakers_eyebrow}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          {c.speakers_title}
        </h1>
        <p className="mt-4 text-sm text-muted">
          {lang === "es"
            ? "La lista está sujeta a cambios. Quedan dos confirmaciones pendientes."
            : "List subject to change. Two confirmations still pending."}
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {speakers.map((s, i) => (
          <FadeIn key={s.name} delay={Math.min(i * 0.04, 0.3)}>
            <SpeakerCard speaker={s} />
          </FadeIn>
        ))}
        {[...Array(2)].map((_, i) => (
          <FadeIn key={`tbc-${i}`} delay={Math.min((speakers.length + i) * 0.04, 0.3)}>
            <article className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border bg-surface p-5 text-center">
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
    </section>
    </>
  );
}
