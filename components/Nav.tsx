"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LangSwitch from "@/components/LangSwitch";
import { detectLang, localizePath } from "@/lib/i18n";
import { COMMON } from "@/data/content/common";
import { asset } from "@/lib/asset";

const SECTIONS = [
  { path: "programme", key: "programme" as const },
  { path: "speakers", key: "speakers" as const },
  { path: "venue", key: "venue" as const },
  { path: "registration", key: "registration" as const },
  { path: "sponsors", key: "sponsors" as const },
  { path: "contact", key: "contact" as const },
];

export default function Nav() {
  const pathname = usePathname() || "/";
  const lang = detectLang(pathname);
  const dict = COMMON[lang].nav;
  const home = localizePath(lang, "/");

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href={home}
            className="flex items-center gap-3 text-ink hover:text-accent"
          >
            <Image
              src={asset("/figures/MONT_mark.png")}
              alt="M-ONT"
              width={764}
              height={172}
              className="h-9 w-auto object-contain"
              priority
            />
            <span className="sr-only">M-ONT</span>
          </Link>
          <div className="flex items-center gap-5 md:gap-7">
            <ul className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
              <li>
                <Link href={home} aria-label="Home" className="hover:text-ink">
                  <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7A1 1 0 003 11h1v6a1 1 0 001 1h4v-4h2v4h4a1 1 0 001-1v-6h1a1 1 0 00.707-1.707l-7-7z"/>
                  </svg>
                </Link>
              </li>
              {SECTIONS.map((s) => (
                <li key={s.path}>
                  <Link
                    href={localizePath(lang, `/${s.path}`)}
                    className="hover:text-ink"
                  >
                    {dict[s.key]}
                  </Link>
                </li>
              ))}
            </ul>
            <LangSwitch />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-drawer"
              className="flex h-9 w-9 items-center justify-center rounded border border-border text-ink transition hover:border-accent hover:text-accent md:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          role="dialog"
          aria-modal="true"
          id="mobile-nav-drawer"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setMenuOpen(false)}
          />
          <aside className="nav-drawer relative h-full w-72 max-w-[82vw] border-r border-border bg-surface shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <Link
                href={home}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-ink"
              >
                <Image
                  src={asset("/figures/MONT_mark.png")}
                  alt="M-ONT"
                  width={764}
                  height={172}
                  className="h-7 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-8 w-8 items-center justify-center rounded text-muted transition hover:text-accent"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col gap-0.5 p-3">
              {SECTIONS.map((s) => {
                const target = localizePath(lang, `/${s.path}`);
                const active =
                  pathname === target || pathname.startsWith(`${target}/`);
                return (
                  <li key={s.path}>
                    <Link
                      href={target}
                      onClick={() => setMenuOpen(false)}
                      className={`block rounded px-3 py-2.5 text-sm font-medium transition ${
                        active
                          ? "bg-elevated text-accent"
                          : "text-muted hover:bg-elevated hover:text-ink"
                      }`}
                    >
                      {dict[s.key]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>
          <style>{`
            .nav-drawer { animation: nav-slide-in 0.22s cubic-bezier(0.2, 0.7, 0.3, 1); }
            @keyframes nav-slide-in {
              from { transform: translateX(-100%); }
              to   { transform: translateX(0); }
            }
            @media (prefers-reduced-motion: reduce) {
              .nav-drawer { animation: none; }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
