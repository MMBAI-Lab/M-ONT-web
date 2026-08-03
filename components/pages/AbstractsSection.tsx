import FadeIn from "@/components/FadeIn";
import { HOME } from "@/data/content/home";
import type { Lang } from "@/lib/i18n";
import { ICGEB_FELLOWSHIP_URL, REGISTRATION_FORM_URL } from "@/lib/links";

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
            <a
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-accent-hover"
            >
              {c.abstracts_abstract_btn}
            </a>
            <a
              href={ICGEB_FELLOWSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border bg-bg/70 px-5 py-3 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
            >
              {c.abstracts_fellowship_btn}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
