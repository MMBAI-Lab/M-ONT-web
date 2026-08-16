import FadeIn from "@/components/FadeIn";

import { PROGRAMME } from "@/data/content/programme";
import type { Lang } from "@/lib/i18n";

// Colors from the BarsRibbon palette, cycling through for talks
const TALK_COLORS = [
  "#2E5DA6", "#3CB4C8", "#6FCFC4", "#A8D659",
  "#F2D550", "#F09850", "#E5634A", "#D14C7B",
];

// Anchor targets for the at-a-glance strip. Language-neutral and index-based,
// so the same #hash works on /programme and /es/programme.
const DAY_IDS = ["mon-22", "tue-23", "wed-24", "thu-25", "fri-26"];

// A contiguous run of the chromatogram series (cyan → orange), left to right.
// All five carry dark ink text at >7:1 contrast, so the row stays uniform.
const DAY_COLORS = ["#3CB4C8", "#6FCFC4", "#A8D659", "#F2D550", "#F09850"];

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
            ? "Montevideo, Uruguay · 23–26 de febrero de 2027 · Llegada el lunes 22."
            : "Montevideo, Uruguay · 23–26 February 2027 · Arrival Monday 22."}
        </p>
        {/* Under-construction notice */}
        <div className="mt-6 rounded-lg border border-dashed border-accent/40 bg-accent/5 px-5 py-4 text-sm text-muted">
          {isEs
            ? "🚧 Este programa está en construcción. Los títulos de las charlas y algunos oradores están aún por confirmar."
            : "🚧 This programme is under construction. Talk titles and some speakers are still to be confirmed."}
        </div>
      </FadeIn>

      {/* At-a-glance day strip — each box jumps to its day below. */}
      <FadeIn delay={0.08}>
        <nav
          aria-label={isEs ? "Resumen por días" : "Day overview"}
          className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 md:gap-3"
        >
          {days.map((day, di) => (
            <a
              key={day.day}
              href={`#${DAY_IDS[di]}`}
              style={{ background: DAY_COLORS[di % DAY_COLORS.length] }}
              className="group flex flex-col justify-center rounded-xl px-4 py-3.5 text-center transition duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              <span className="text-sm font-semibold leading-tight text-ink">
                {day.day} {day.date}
              </span>
              <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/70">
                {day.kind}
              </span>
            </a>
          ))}
        </nav>
      </FadeIn>

      <div className="mt-14 space-y-14">
        {days.map((day, di) => (
          <FadeIn key={day.day} delay={di * 0.06}>
            <div id={DAY_IDS[di]} className="scroll-mt-24">
              <div className="mb-5 flex items-baseline gap-3">
                <h2 className="font-serif text-2xl font-semibold text-ink">
                  {day.day}
                </h2>
                <span className="text-sm font-medium text-subtle">{day.date}</span>
                <span
                  className="ml-auto rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink"
                  style={{ background: DAY_COLORS[di % DAY_COLORS.length] }}
                >
                  {day.kind}
                </span>
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
