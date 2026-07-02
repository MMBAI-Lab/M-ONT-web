import FadeIn from "@/components/FadeIn";
import PageBanner from "@/components/PageBanner";
import type { Lang } from "@/lib/i18n";

export default function ContactPage({ lang }: { lang: Lang }) {
  const isEs = lang === "es";
  return (
    <>
      <PageBanner />
      <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {isEs ? "Contacto" : "Contact"}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            {isEs ? "Comunicate con nosotros" : "Get in touch"}
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted">
            {isEs
              ? "Para consultas científicas u organizativas, escribí al comité organizador de M-ONT."
              : "For scientific or organizational questions, write to the M-ONT organizing committee."}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-8 py-6">
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="shrink-0 text-accent"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 7l10 7 10-7" />
            </svg>
            <a
              href="mailto:mont.workshop@gmail.com"
              className="font-mono text-lg font-medium text-ink hover:text-accent transition-colors"
            >
              mont.workshop@gmail.com
            </a>
          </div>
        </FadeIn>
      </div>
    </>
  );
}
