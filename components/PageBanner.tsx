"use client";
import BarsRibbon from "@/components/BarsRibbon";

/**
 * Decorative color ribbon that sits at the top of every inner page,
 * providing visual continuity with the home page hero ribbon.
 */
export default function PageBanner() {
  return (
    <div className="relative h-14 overflow-hidden border-b border-border bg-bg">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-14 w-[180%] -translate-x-1/2 -translate-y-1/2"
      >
        <BarsRibbon className="h-full w-full opacity-80" />
      </div>
    </div>
  );
}
