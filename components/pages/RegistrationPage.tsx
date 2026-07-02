import FadeIn from "@/components/FadeIn";

import type { Lang } from "@/lib/i18n";

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

        {/* Abstract submissions */}
        <FadeIn delay={0.08}>
          <div className="mt-12 rounded-xl border border-border bg-surface p-8">
            <h2 className="font-serif text-2xl font-semibold text-ink">
              {isEs ? "Envío de resúmenes" : "Abstract submissions"}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {isEs
                ? "Investigadores y estudiantes de posgrado están invitados a enviar resúmenes de sus trabajos. Los resúmenes aceptados serán presentados en la sesión de posters. Algunos podrán ser seleccionados para una charla breve en el programa."
                : "Researchers and graduate students are invited to submit abstracts. Accepted submissions will be presented in the poster session. A number of contributions may be selected for a short talk within the programme."}
            </p>
            <div className="mt-6 rounded-lg border border-accent/30 bg-accent/5 px-5 py-4 text-sm font-medium text-accent">
              {isEs
                ? "📅 Período de envío: 15 de julio – 31 de agosto de 2027"
                : "📅 Submission window: 15 July – 31 August 2027"}
            </div>
            <button
              disabled
              className="mt-6 cursor-not-allowed rounded-md border border-border bg-elevated px-5 py-3 text-sm font-medium text-subtle"
              title={isEs ? "Abre el 15 de julio de 2027" : "Opens 15 July 2027"}
            >
              {isEs ? "Enviar resumen (abre en julio)" : "Submit abstract (opens July)"}
            </button>
          </div>
        </FadeIn>

        {/* Fellowships */}
        <FadeIn delay={0.14}>
          <div className="mt-6 rounded-xl border border-border bg-surface p-8">
            <h2 className="font-serif text-2xl font-semibold text-ink">
              {isEs ? "Becas para estudiantes" : "Student fellowships"}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {isEs
                ? "M-ONT ofrecerá un número limitado de becas de viaje y/o estadía dirigidas a estudiantes de doctorado y postdocs de la región. Las condiciones y el formulario de solicitud se publicarán próximamente."
                : "M-ONT will offer a limited number of travel and/or accommodation fellowships for PhD students and postdocs from the region. Conditions and application form will be announced soon."}
            </p>
            <p className="mt-4 text-sm font-medium text-subtle">
              {isEs ? "🔜 Condiciones próximamente." : "🔜 Conditions coming soon."}
            </p>
            <button
              disabled
              className="mt-6 cursor-not-allowed rounded-md border border-border bg-elevated px-5 py-3 text-sm font-medium text-subtle"
              title={isEs ? "Abre el 15 de julio de 2027" : "Opens 15 July 2027"}
            >
              {isEs ? "Solicitar beca (abre en julio)" : "Apply for fellowship (opens July)"}
            </button>
          </div>
        </FadeIn>

        {/* General info */}
        <FadeIn delay={0.2}>
          <div className="mt-6 rounded-xl border border-border bg-surface p-8">
            <h2 className="font-serif text-2xl font-semibold text-ink">
              {isEs ? "Participantes externos" : "External participants"}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {isEs
                ? "Los investigadores y estudiantes que no reciban beca son igualmente bienvenidos a participar. Deberán gestionar su propio traslado y hospedaje en Montevideo."
                : "Researchers and students who do not receive a fellowship are equally welcome to attend. They are responsible for arranging their own travel and accommodation in Montevideo."}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.26}>
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
