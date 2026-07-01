import FadeIn from "@/components/FadeIn";
import { HOME } from "@/data/content/home";
import type { Lang } from "@/lib/i18n";

export default function AbstractsSection({ lang }: { lang: Lang }) {
  const c = HOME[lang];

  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {c.abstracts_eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {c.abstracts_title}
          </h2>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-muted">
            {c.abstracts_body}
          </p>
          <p className="mt-4 text-sm font-medium text-accent">
            {c.abstracts_open}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-4">
            {/* Buttons disabled until submission window opens */}
            <button
              disabled
              className="cursor-not-allowed rounded-md border border-border bg-elevated px-5 py-3 text-sm font-medium text-subtle"
              title="Opens 15 July 2027"
            >
              {c.abstracts_fellowship_btn}
            </button>
            <button
              disabled
              className="cursor-not-allowed rounded-md border border-border bg-elevated px-5 py-3 text-sm font-medium text-subtle"
              title="Opens 15 July 2027"
            >
              {c.abstracts_abstract_btn}
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
