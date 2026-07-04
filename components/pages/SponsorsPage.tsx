import Image from "next/image";
import FadeIn from "@/components/FadeIn";

import sponsors from "@/data/sponsors.json";
import { asset } from "@/lib/asset";
import type { Lang } from "@/lib/i18n";

type Sponsor = { name: string; short: string; url: string | null; logo: string | null };
function SponsorCard({ s }: { s: Sponsor }) {
  const inner = (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-bg p-8 text-center transition hover:border-accent min-h-[140px]">
      {s.logo ? (
        <Image
          src={asset(`/figures/${s.logo}`)}
          alt={s.name}
          width={220}
          height={80}
          className="h-16 w-auto max-w-[220px] object-contain"
        />
      ) : (
        <span className="font-serif text-2xl font-bold text-accent">{s.short}</span>
      )}
      <span className="text-xs text-muted leading-snug max-w-[200px]">{s.name}</span>
    </div>
  );
  return s.url ? (
    <a href={s.url} target="_blank" rel="noreferrer">{inner}</a>
  ) : (
    <div>{inner}</div>
  );
}

export default function SponsorsPage({ lang }: { lang: Lang }) {
  const isEs = lang === "es";
  return (
    <>
      
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {isEs ? "Sponsors" : "Sponsors"}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            {isEs ? "Las instituciones que hacen posible M-ONT." : "The institutions that make M-ONT possible."}
          </h1>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h2 className="mt-14 mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-subtle">
            {isEs ? "Organizadores principales" : "Main organizers"}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {sponsors.main.map((s) => (
              <SponsorCard key={s.short} s={s} />
            ))}
          </div>
        </FadeIn>

        {(sponsors.other as Sponsor[]).length > 0 && (
          <FadeIn delay={0.14}>
            <h2 className="mt-14 mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-subtle">
              {isEs ? "Otros sponsors" : "Other sponsors"}
            </h2>

            <div className="grid gap-4 sm:grid-cols-3">
              {(sponsors.other as Sponsor[]).map((s) => (
                <SponsorCard key={s.short} s={s} />
              ))}
            </div>
          </FadeIn>
        )}

        <FadeIn delay={0.2}>
          <div className="mt-16 rounded-xl border border-dashed border-border bg-surface p-8">
            <h2 className="font-serif text-xl font-semibold text-ink">
              {isEs ? "¿Querés sponsorear M-ONT?" : "Interested in sponsoring M-ONT?"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {isEs
                ? "Si tu institución o empresa quiere apoyar el workshop, escribinos a "
                : "If your institution or company would like to support the workshop, contact us at "}
              <a href="mailto:mont.workshop@gmail.com" className="text-accent hover:underline">
                mont.workshop@gmail.com
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </>
  );
}
