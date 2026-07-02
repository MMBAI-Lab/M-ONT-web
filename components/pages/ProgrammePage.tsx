import FadeIn from "@/components/FadeIn";
import PageBanner from "@/components/PageBanner";
import { PROGRAMME } from "@/data/content/programme";
import type { Lang } from "@/lib/i18n";

// Colors from the BarsRibbon palette, cycling through for talks
const TALK_COLORS = [
  "#2E5DA6", "#3CB4C8", "#6FCFC4", "#A8D659",
  "#F2D550", "#F09850", "#E5634A", "#D14C7B",
];

const TYPE_STYLES: Record<string, string> = {
  talk: "bg-bg border-border/60",
  tbc: "bg-elevated border-dashed border-border",
  break: "bg-elevated/30 border-transparent",
  lunch: "bg-elevated/30 border-transparent",
  session: "bg-surface border-border/60",
};

function DaySlots({ slots, dayIndex }: { slots: { time: string; speaker: string | null; title: string | null; type: string }[]; dayIndex: number }) {
  let colorIdx = dayIndex * 3; // offset per day so colors don't repeat the same start
  return (
    <div className="space-y-2">
      {slots.map((slot, si) => {
        const isColored = slot.type === "talk" || slot.type === "session";
        const color = isColored ? TALK_COLORS[(colorIdx++) % TALK_COLORS.length] : null;
        return (
          <div key={si} className={`flex overflow-hidden rounded-lg border ${TYPE_STYLES[slot.type]}`}>
            <div className="w-1 shrink-0" style={color ? { background: color } : {}} />
            <div className="flex flex-1 gap-4 px-4 py-3">
              <span className="w-28 shrink-0 pt-0.5 font-mono text-xs text-subtle">{slot.time}</span>
              <div className="flex-1">
                {slot.speaker && (
                  <p className="text-sm font-semibold" style={color ? { color } : { color: "rgb(var(--ink))" }}>
                    {slot.speaker}
                  </p>
                )}
                <p className={`text-sm leading-snug ${slot.speaker ? "text-muted" : "font-medium text-ink"}`}>
                  {slot.title}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ProgrammePage({ lang }: { lang: Lang }) {
  const days = PROGRAMME[lang];
  const isEs = lang === "es";

  return (
    <>
    <PageBanner />
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
              <DaySlots slots={day.slots} dayIndex={di} />
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
    </>
  );
}
