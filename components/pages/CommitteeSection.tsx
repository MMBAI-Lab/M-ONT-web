import FadeIn from "@/components/FadeIn";
import CommitteeCard from "@/components/CommitteeCard";
import { getNational, getInternational } from "@/lib/committee";
import { HOME } from "@/data/content/home";
import type { Lang } from "@/lib/i18n";

export default function CommitteeSection({ lang }: { lang: Lang }) {
  const c = HOME[lang];
  const national = getNational();
  const international = getInternational();

  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {c.committee_eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {c.committee_title}
          </h2>
        </FadeIn>

        {/* National — 3 cards */}
        <FadeIn delay={0.08}>
          <h3 className="mt-12 mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-subtle">
            {c.committee_national}
          </h3>
        </FadeIn>
        <div className="grid gap-5 sm:grid-cols-3">
          {national.map((m, i) => (
            <FadeIn key={m.name} delay={0.1 + i * 0.06}>
              <CommitteeCard member={m} />
            </FadeIn>
          ))}
        </div>

        {/* International — 3+1 */}
        <FadeIn delay={0.08}>
          <h3 className="mt-12 mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-subtle">
            {c.committee_international}
          </h3>
        </FadeIn>
        <div className="grid gap-5 sm:grid-cols-3">
          {international.slice(0, 3).map((m, i) => (
            <FadeIn key={m.name} delay={0.1 + i * 0.06}>
              <CommitteeCard member={m} />
            </FadeIn>
          ))}
        </div>
        {international.length > 3 && (
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            <div className="hidden sm:block" />
            {international.slice(3).map((m, i) => (
              <FadeIn key={m.name} delay={0.1 + i * 0.06}>
                <CommitteeCard member={m} />
              </FadeIn>
            ))}
            <div className="hidden sm:block" />
          </div>
        )}
      </div>
    </section>
  );
}
