import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import sponsors from "@/data/sponsors.json";
import { HOME } from "@/data/content/home";
import { asset } from "@/lib/asset";
import type { Lang } from "@/lib/i18n";

type Sponsor = { name: string; short: string; url: string | null; logo: string | null };

const HOME_SPONSOR_SHORTS = ["OTS", "ICGEB", "UdelaR", "IPMon"];

export default function SponsorsSection({ lang }: { lang: Lang }) {
  const c = HOME[lang];
  const allSponsors = [...sponsors.main, ...(sponsors.other as Sponsor[])];
  const homeSponsors = HOME_SPONSOR_SHORTS
    .map((short) => allSponsors.find((s) => s.short === short))
    .filter((s): s is Sponsor => s !== undefined);

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

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {homeSponsors.map((s) => (
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
      </div>
    </section>
  );
}
