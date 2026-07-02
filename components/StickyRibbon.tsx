"use client";
import { usePathname } from "next/navigation";
import BarsRibbon from "@/components/BarsRibbon";

const HOME_ROUTES = new Set(["/", "/es", "/es/"]);

export default function StickyRibbon() {
  const pathname = usePathname() ?? "/";
  if (HOME_ROUTES.has(pathname)) return null;

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
