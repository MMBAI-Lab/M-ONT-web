import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import sponsors from "@/data/sponsors.json";
import { HOME } from "@/data/content/home";
import { asset } from "@/lib/asset";
import type { Lang } from "@/lib/i18n";

type Sponsor = { name: string; short: string; url: string | null; logo: string | null };

export default function SponsorsSection({ lang }: { lang: Lang }) {
  const c = HOME[lang];

  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {c.sponsors_eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-ink">
            {c.sponsors_title}
          </h2>
        </FadeIn>

        {/* Main sponsors */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {sponsors.main.map((s) => (
            <FadeIn key={s.short}>
              <a
                href={s.url ?? "#"}
                target="_blank"
                rel="noreferrer"
                className="flex min-w-[200px] flex-col items-center justify-center gap-2 rounded-xl border border-border bg-bg px-8 py-6 text-center transition hover:border-accent"
              >
                {s.logo ? (
                  <Image
                    src={asset(`/figures/${s.logo}`)}
                    alt={s.name}
                    width={200}
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                ) : (
                  <span className="font-serif text-2xl font-bold text-accent">{s.short}</span>
                )}
                <span className="text-xs leading-relaxed text-muted">{s.name}</span>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Other sponsors */}
        {(sponsors.other as Sponsor[]).length > 0 && (
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {(sponsors.other as Sponsor[]).map((s) => (
              <FadeIn key={s.short}>
                {s.url ? (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-border bg-bg px-5 py-3 text-sm font-medium text-muted transition hover:border-accent hover:text-accent"
                  >
                    {s.name}
                  </a>
                ) : (
                  <span className="rounded-lg border border-border bg-bg px-5 py-3 text-sm font-medium text-muted">
                    {s.name}
                  </span>
                )}
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
