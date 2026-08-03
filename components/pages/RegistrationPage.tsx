import FadeIn from "@/components/FadeIn";

import type { Lang } from "@/lib/i18n";
import { ICGEB_FELLOWSHIP_URL, REGISTRATION_FORM_URL } from "@/lib/links";

export default function RegistrationPage({ lang }: { lang: Lang }) {
  const isEs = lang === "es";

  return (
    <>
      
      <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {isEs ? "Registro" : "Registration"}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            {isEs ? "Cómo participar" : "How to participate"}
          </h1>
        </FadeIn>

        {/* Registration & abstract submission */}
        <FadeIn delay={0.08}>
          <div className="mt-12 rounded-xl border border-border bg-surface p-8">
            <h2 className="font-serif text-2xl font-semibold text-ink">
              {isEs ? "Registro y envío de resúmenes" : "Registration & abstract submission"}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {isEs
                ? "Todos los participantes deben registrarse y están invitados a enviar resúmenes. Los resúmenes seleccionados serán presentados en la sesión de posters. Un pequeño número de contribuciones podrá ser seleccionado para una charla breve en el programa. La fecha límite es el 30 de septiembre de 2026, 23:59 hora de Montevideo (UTC-3)."
                : "All participants must register and are invited to submit abstracts. Selected submissions will be presented in the poster session. A small number of contributions may be selected for a short talk within the programme. The deadline is September 30, 2026, 23:59 Montevideo time (UTC-3)."}
            </p>
            <div className="mt-6 rounded-lg border border-accent/30 bg-accent/5 px-5 py-4 text-sm font-medium text-accent">
              {isEs
                ? "📅 Período de envío: 3 de agosto – 30 de septiembre de 2026"
                : "📅 Submission window: Aug 3 – Sept 30, 2026"}
            </div>
            <a
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-md bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-accent-hover"
            >
              {isEs ? "Formulario de registro (abierto)" : "Registration form (open)"}
            </a>
          </div>
        </FadeIn>

        {/* Fellowships */}
        <FadeIn delay={0.14}>
          <div className="mt-6 rounded-xl border border-border bg-surface p-8">
            <h2 className="font-serif text-2xl font-semibold text-ink">
              {isEs
                ? "Becas para investigadores en etapa inicial de carrera (ECR) seleccionados"
                : "Fellowships for selected early career researchers (ECR)"}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {isEs
                ? "Los ECR pueden solicitar una beca que cubre comidas y alojamiento. En algunos casos, el traslado podría cubrirse en parte o en su totalidad. Por favor seguí las pautas del ICGEB para solicitar una beca. Tené en cuenta que igualmente debés completar el formulario de registro que figura más arriba. La fecha límite es el 30 de septiembre de 2026."
                : "ECR can apply for a Fellowship, covering meals and accommodation. In some cases, transportation might be covered (in part or in full). Please follow ICGEB’s guidelines to apply for a fellowship. Note that you still need to complete the registration form above. The deadline is September 30, 2026."}
            </p>
            <a
              href={ICGEB_FELLOWSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-md border border-border bg-bg/70 px-5 py-3 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
            >
              {isEs
                ? "Aplicar acá (serás redirigido al sitio del ICGEB)"
                : "Apply here (you will be redirected to ICGEB’s site)"}
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-8 text-sm text-subtle">
            {isEs
              ? "Para consultas sobre el proceso de registro escribí a "
              : "For registration enquiries contact "}
            <a href="mailto:mont.workshop@gmail.com" className="text-accent hover:underline">
              mont.workshop@gmail.com
            </a>
          </p>
        </FadeIn>
      </div>
    </>
  );
}
