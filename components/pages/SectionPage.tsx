import FadeIn from "@/components/FadeIn";
import { SECTIONS, type SectionsContent } from "@/data/content/sections";
import type { Lang } from "@/lib/i18n";

type SectionKey = keyof SectionsContent;

/**
 * Generic section page used for the inner pages while their real content
 * is being assembled. One file feeds all six sections to keep the surface
 * area small until each one earns its own bespoke layout.
 */
export default function SectionPage({
  lang,
  section,
}: {
  lang: Lang;
  section: SectionKey;
}) {
  const c = SECTIONS[lang][section];
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          {c.eyebrow}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          {c.title}
        </h1>
        <p className="mt-7 max-w-prose text-lg leading-relaxed text-muted">
          {c.intro}
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="mt-12 rounded-lg border border-dashed border-border bg-surface p-8 text-center text-sm uppercase tracking-[0.25em] text-subtle">
          {c.placeholder}
        </div>
      </FadeIn>
    </section>
  );
}
