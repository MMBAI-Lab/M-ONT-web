import Link from "next/link";
import "./globals.css";
import RootShell from "@/components/RootShell";

/**
 * Because the app has two root layouts under route groups, there is no
 * `app/layout.tsx` for a top-level `not-found` to nest into — so this file has
 * to render the shell itself, which is what `RootShell` provides. Without it,
 * Next falls back to its own bare 404 page: no `lang`, no nav, no site fonts.
 *
 * A static host serves one 404 for every unmatched path, English or Spanish, so
 * the copy is bilingual and offers a way into both trees. `lang="en"` is the
 * document-level declaration, with the Spanish sentence marked up as `lang="es"`
 * so screen readers switch pronunciation for it.
 */
export const metadata = {
  title: "Page not found · M-ONT",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <RootShell lang="en">
      <div className="mx-auto max-w-2xl px-6 py-32 text-center md:py-40">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          404
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 leading-relaxed text-muted">
          The page you are looking for does not exist or has been moved.
        </p>
        <p className="mt-2 leading-relaxed text-muted" lang="es">
          La página que buscás no existe o fue movida.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-md bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-accent-hover"
          >
            Back to home
          </Link>
          <Link
            href="/es"
            className="rounded-md border border-border bg-bg/70 px-5 py-3 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
            lang="es"
          >
            Ir al inicio
          </Link>
        </div>
      </div>
    </RootShell>
  );
}
