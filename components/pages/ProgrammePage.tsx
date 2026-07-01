import FadeIn from "@/components/FadeIn";
import { PROGRAMME } from "@/data/content/programme";
import type { Lang } from "@/lib/i18n";

const TYPE_STYLES: Record<string, string> = {
  talk: "bg-bg border-border",
  tbc: "bg-elevated border-border border-dashed text-muted",
  break: "bg-elevated/50 border-transparent text-subtle",
  lunch: "bg-elevated/50 border-transparent text-subtle",
  session: "bg-accent/5 border-accent/30",
};

const TYPE_DOT: Record<string, string> = {
  talk: "bg-accent",
  tbc: "bg-subtle",
  break: "bg-transparent",
  lunch: "bg-transparent",
  session: "bg-accent/60",
};

export default function ProgrammePage({ lang }: { lang: Lang }) {
  const days = PROGRAMME[lang];
  const isEs = lang === "es";

  return (
    <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          {isEs ? "Programa" : "Programme"}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          {isEs ? "Programa Preliminar" : "Preliminary Programme"}
        </h1>
        <p className="mt-4 text-sm font-medium text-subtle">
          {isEs
            ? "Montevideo, Uruguay · 23–27 de febrero de 2027 · Sujeto a cambios."
            : "Montevideo, Uruguay · 23–27 February 2027 · Subject to change."}
        </p>
        {/* Under-construction notice */}
        <div className="mt-6 rounded-lg border border-dashed border-accent/40 bg-accent/5 px-5 py-4 text-sm text-muted">
          {isEs
            ? "🚧 Este programa está en construcción. Los títulos de las charlas y algunos oradores están aún por confirmar."
            : "🚧 This programme is under construction. Talk titles and some speakers are still to be confirmed."}
        </div>
      </FadeIn>

      <div className="mt-14 space-y-14">
        {days.map((day, di) => (
          <FadeIn key={day.day} delay={di * 0.06}>
            <div>
              <div className="mb-5 flex items-baseline gap-3">
                <h2 className="font-serif text-2xl font-semibold text-ink">
                  {day.day}
                </h2>
                <span className="text-sm font-medium text-subtle">{day.date}</span>
              </div>
              <div className="space-y-2">
                {day.slots.map((slot, si) => (
                  <div
                    key={si}
                    className={`flex gap-4 rounded-lg border px-4 py-3 ${TYPE_STYLES[slot.type]}`}
                  >
                    <span className="w-28 shrink-0 pt-0.5 text-xs font-mono text-subtle">
                      {slot.time}
                    </span>
                    <div className="flex flex-1 items-start gap-3">
                      {(slot.type === "talk" || slot.type === "tbc" || slot.type === "session") && (
                        <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${TYPE_DOT[slot.type]}`} />
                      )}
                      <div>
                        {slot.speaker && (
                          <p className="text-sm font-semibold text-ink">
                            {slot.speaker}
                          </p>
                        )}
                        <p className={`text-sm leading-snug ${slot.speaker ? "text-muted" : "font-medium text-ink"}`}>
                          {slot.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
