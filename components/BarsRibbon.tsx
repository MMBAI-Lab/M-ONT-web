"use client";

/**
 * Slow-scrolling horizontal ribbon of small vertical color bars, mimicking
 * the chromatogram-style accent dashes on the M-ONT logo letters.
 *
 * Bars are deterministic (seeded by index) so SSR and CSR agree. The track
 * is doubled so a `translateX(-50%)` keyframe yields a seamless loop. The
 * animation is paused when the user prefers reduced motion.
 */

const COLORS = [
  "#2E5DA6", // deep blue (M start)
  "#3CB4C8", // cyan
  "#6FCFC4", // teal
  "#A8D659", // lime
  "#F2D550", // yellow
  "#F09850", // orange
  "#E5634A", // coral
  "#D14C7B", // pink
];

const COUNT = 96;

function bar(i: number) {
  // Tiny LCG for deterministic per-index pseudo-randomness.
  const s1 = (i * 9301 + 49297) % 233280;
  const s2 = (i * 1103 + 12345) % 32768;
  const height = 18 + (s1 % 56); // 18..74 px
  const color = COLORS[i % COLORS.length];
  const gap = 10 + (s2 % 14); // 10..24 px gap after this bar
  const opacity = 0.28 + ((s1 >> 4) % 30) / 100; // 0.28..0.58
  return { height, color, gap, opacity };
}

export default function BarsRibbon({
  className,
  reverse = false,
}: {
  className?: string;
  /** Run the ribbon right-to-left instead of the default left-to-right scroll. */
  reverse?: boolean;
}) {
  const bars = Array.from({ length: COUNT }, (_, i) => bar(i));
  // Render the track twice back-to-back so translateX(-50%) loops cleanly.
  const track = [...bars, ...bars];
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none overflow-hidden ${className ?? ""}`}
    >
      <div className={`ribbon-track ${reverse ? "ribbon-reverse" : ""} flex h-full items-center`}>
        {track.map((b, i) => (
          <span
            key={i}
            className="block shrink-0 rounded-[2px]"
            style={{
              width: 4,
              height: `${b.height}px`,
              background: b.color,
              opacity: b.opacity,
              marginRight: `${b.gap}px`,
            }}
          />
        ))}
      </div>
      <style>{`
        .ribbon-track {
          width: max-content;
          animation: ribbon-scroll 90s linear infinite;
          will-change: transform;
        }
        .ribbon-track.ribbon-reverse {
          animation-direction: reverse;
        }
        @keyframes ribbon-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ribbon-track { animation: none; }
        }
      `}</style>
    </div>
  );
}
