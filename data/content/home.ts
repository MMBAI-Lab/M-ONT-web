import type { Lang } from "@/lib/i18n";

export type HomeContent = {
  eyebrow: string;
  title_pre: string;
  title_accent: string;
  title_post: string;
  intro: string;
  cta_register: string;
  cta_programme: string;
  about_eyebrow: string;
  about_title: string;
  about_paragraphs: string[];
  pillars: { kicker: string; title: string }[];
  facts_eyebrow: string;
  facts_title: string;
  facts: { label: string; value: string }[];
  quicklinks_title: string;
  quicklinks: { label: string; href: string }[];
  committee_eyebrow: string;
  committee_title: string;
  committee_national: string;
  committee_international: string;
};

const en: HomeContent = {
  eyebrow: "Montevideo · 23–26 February 2027 · International Workshop",
  title_pre: "The chemistry, biology, and clinical use of ",
  title_accent: "oligonucleotide and RNA therapeutics",
  title_post: ".",
  intro:
    "M-ONT is a four-day international workshop in Montevideo, Uruguay (23–26 February 2027) — bringing together leading scientists, clinicians, and industry voices to teach the design, mechanism, and clinical translation of antisense oligonucleotides, siRNAs, aptamers, splice-switching ASOs, and emerging RNA therapeutics.",
  cta_register: "Registration",
  cta_programme: "See programme",
  about_eyebrow: "About M-ONT",
  about_title: "A four-day, international workshop on oligo therapeutics.",
  about_paragraphs: [
    `M-ONT is the <strong class="text-ink">Montevideo Workshop in OligoNucleotide and RNA Therapeutics</strong> — an intensive, internationally focused workshop covering chemistry, biology, delivery, and clinical translation of oligonucleotide and RNA drugs. The programme combines introductory lectures by the organizing committee with research talks from leading invited speakers, plus poster sessions and case-study discussions on landmark approved therapies.`,
  ],
  pillars: [
    { kicker: "Chemistry", title: "Backbones, modifications, conjugates" },
    { kicker: "Biology", title: "Mechanisms, targets, delivery" },
    { kicker: "Clinic", title: "From bench to approved therapies" },
    { kicker: "Bioinformatics", title: "In silico predictions and design" },
  ],
  facts_eyebrow: "At a glance",
  facts_title: "What to expect.",
  facts: [
    { label: "When", value: "23–26 February 2027" },
    { label: "Format", value: "Lectures, research talks, posters" },
    { label: "Audience", value: "Graduate students, postdocs, clinicians, industry" },
    { label: "Language", value: "English" },
  ],
  quicklinks_title: "Quick links",
  quicklinks: [
    { label: "Programme", href: "/programme" },
    { label: "Speakers", href: "/speakers" },
    { label: "Venue & travel", href: "/venue" },
    { label: "Register", href: "/registration" },
  ],
  committee_eyebrow: "Organizing Committee",
  committee_title: "The people behind M-ONT.",
  committee_national: "National",
  committee_international: "International",
};

const es: HomeContent = {
  eyebrow: "Montevideo · 23–26 de febrero de 2027 · Workshop internacional",
  title_pre: "La química, la biología y el uso clínico de la ",
  title_accent: "terapéutica con oligonucleótidos y ARN",
  title_post: ".",
  intro:
    "M-ONT es un workshop internacional de cuatro días en Montevideo, Uruguay (23–26 de febrero de 2027) — reúne a científicos, clínicos y referentes de la industria para enseñar el diseño, los mecanismos y la traslación clínica de oligonucleótidos antisentido, siRNAs, aptámeros, ASOs splice-switching y otras terapias basadas en ARN.",
  cta_register: "Registro",
  cta_programme: "Ver programa",
  about_eyebrow: "Sobre M-ONT",
  about_title: "Un workshop internacional de cuatro días sobre terapéutica con oligonucleótidos.",
  about_paragraphs: [
    `M-ONT es el <strong class="text-ink">Workshop de Montevideo de Terapéutica con Oligonucleótidos y ARN</strong> — un workshop intensivo e internacional que cubre la química, la biología, la entrega celular y la traslación clínica de los oligofármacos y las terapias basadas en ARN. El programa combina clases introductorias dictadas por el comité organizador con charlas de investigación de oradores invitados de primer nivel, sesiones de posters y discusiones de casos sobre terapias aprobadas emblemáticas.`,
  ],
  pillars: [
    { kicker: "Química", title: "Esqueletos, modificaciones, conjugados" },
    { kicker: "Biología", title: "Mecanismos, blancos, delivery" },
    { kicker: "Clínica", title: "Del laboratorio a las terapias aprobadas" },
    { kicker: "Bioinformática", title: "Predicciones y diseño in silico" },
  ],
  facts_eyebrow: "En pocas líneas",
  facts_title: "Qué esperar.",
  facts: [
    { label: "Cuándo", value: "23–26 de febrero de 2027" },
    { label: "Formato", value: "Clases, charlas de investigación, posters" },
    { label: "Público", value: "Estudiantes de posgrado, postdocs, clínicos, industria" },
    { label: "Idioma", value: "Inglés" },
  ],
  quicklinks_title: "Enlaces rápidos",
  quicklinks: [
    { label: "Programa", href: "/programme" },
    { label: "Oradores", href: "/speakers" },
    { label: "Sede y viaje", href: "/venue" },
    { label: "Registrarse", href: "/registration" },
  ],
  committee_eyebrow: "Comité Organizador",
  committee_title: "Las personas detrás de M-ONT.",
  committee_national: "Nacional",
  committee_international: "Internacional",
};

export const HOME: Record<Lang, HomeContent> = { en, es };
