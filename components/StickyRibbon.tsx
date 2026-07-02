"use client";
import BarsRibbon from "@/components/BarsRibbon";

/**
 * Thin color ribbon that sticks just below the sticky nav bar
 * and remains visible as the user scrolls on every page.
 * z-40 keeps it below the nav (z-50) but above page content.
 */
export default function StickyRibbon() {
  return (
    <div className="sticky top-[65px] z-40 h-10 overflow-hidden border-b border-border/40 bg-bg">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-10 w-[180%] -translate-x-1/2 -translate-y-1/2"
      >
        <BarsRibbon className="h-full w-full opacity-75" />
      </div>
    </div>
  );
}
