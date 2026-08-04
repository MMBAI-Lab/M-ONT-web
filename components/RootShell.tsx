import { Inter, Source_Serif_4 } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyRibbon from "@/components/StickyRibbon";
import type { Lang } from "@/lib/i18n";

/**
 * The `<html>`/`<body>` shell, shared by the two root layouts.
 *
 * There are two root layouts — `app/(en)/layout.tsx` and `app/(es)/layout.tsx` —
 * because the `lang` attribute has to differ per language tree, and only a root
 * layout may render `<html>`. Next.js allows multiple root layouts via route
 * groups as long as there is no `app/layout.tsx` above them. Everything that is
 * genuinely shared lives here so the two layouts stay thin.
 *
 * Both families are variable fonts, so a single face covers the 400–700 range
 * the site uses; no `weight` list is needed. `next/font` downloads and
 * self-hosts them at build time — the static export ships the woff2 files, so
 * there is no runtime request to Google. The CSS variables feed `--font-sans` /
 * `--font-serif` in globals.css. Only the normal style is loaded because
 * nothing on the site is italic.
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif",
});

export default function RootShell({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Nav />
        <StickyRibbon />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
