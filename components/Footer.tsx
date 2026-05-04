"use client";

import { usePathname } from "next/navigation";
import { detectLang } from "@/lib/i18n";
import { COMMON } from "@/data/content/common";

export default function Footer() {
  const pathname = usePathname() || "/";
  const lang = detectLang(pathname);
  const dict = COMMON[lang].footer;
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {dict.rights}
        </p>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-6 text-[11px] leading-relaxed text-subtle">
        {dict.skyline_credit_pre}
        <a
          href="https://stock.adobe.com/uy/contributor/209474979/serhii"
          target="_blank"
          rel="noreferrer"
          className="underline-offset-2 hover:text-accent hover:underline"
        >
          {dict.skyline_credit_author}
        </a>
        {dict.skyline_credit_post}
      </div>
    </footer>
  );
}
