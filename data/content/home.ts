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
  speakers_eyebrow: string;
  speakers_title: string;
  speakers_cta: string;
  committee_eyebrow: string;
  committee_title: string;
  committee_national: string;
  committee_international: string;
  sponsors_eyebrow: string;
  sponsors_title: string;
  abstracts_eyebrow: string;
  abstracts_title: string;
  abstracts_body: string;
  abstracts_open: string;
  abstracts_fellowship_btn: string;
  abstracts_abstract_btn: string;
};

const en: HomeContent = {
  eyebrow: "Montevideo · 23–27 February 2027 · International Workshop",
  title_pre: "The chemistry, biology, and clinical use of ",
  title_accent: "oligonucleotide and RNA therapeutics",
  title_post: ".",
  intro:
    "M-ONT is a four-day international workshop in Montevideo, Uruguay (23–27 February 2027) — bringing together leading scientists, clinicians, and industry voices to teach the design, mechanism, and clinical translation of antisense oligonucleotides, siRNAs, aptamers, splice-switching ASOs, and emerging RNA therapeutics.",
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
    { label: "When", value: "23–27 February 2027" },
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
  speakers_eyebrow: "Confirmed Speakers",
  speakers_title: "An international faculty.",
  speakers_cta: "Full speaker list →",
  committee_eyebrow: "Organizing Committee",
  committee_title: "The people behind M-ONT.",
  committee_national: "National",
  committee_international: "International",
  sponsors_eyebrow: "Main Sponsors and Organizers",
  sponsors_title: "Institutions that make M-ONT possible.",
  abstracts_eyebrow: "Participate",
  abstracts_title: "Submit an abstract. Apply for a fellowship.",
  abstracts_body:
    "Graduate students and postdocs may apply for travel fellowships. Researchers from the region are encouraged to submit abstracts — selected contributions will be featured in the poster session and, potentially, as short talks.",
  abstracts_open: "Abstract submissions and fellowship applications open 15 July – 31 August 2027.",
  abstracts_fellowship_btn: "Apply for fellowship",
  abstracts_abstract_btn: "Submit abstract",
};

const es: HomeContent = {
  eyebrow: "Montevideo · 23–27 de febrero de 2027 · Workshop internacional",
  title_pre: "La química, la biología y el uso clínico de ",
  title_accent: "oligonucleótidos y ARN terapéuticos",
  title_post: ".",
  intro:
    "M-ONT es un workshop internacional de cuatro días en Montevideo, Uruguay (23–27 de febrero de 2027) — reúne a científicos, clínicos y referentes de la industria para enseñar el diseño, los mecanismos y la traslación clínica de oligonucleótidos antisentido, siRNAs, aptámeros, ASOs splice-switching y otras terapias basadas en ARN.",
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
    { label: "Cuándo", value: "23–27 de febrero de 2027" },
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
  speakers_eyebrow: "Oradores Confirmados",
  speakers_title: "Un cuerpo docente internacional.",
  speakers_cta: "Lista completa de oradores →",
  committee_eyebrow: "Comité Organizador",
  committee_title: "Las personas detrás de M-ONT.",
  committee_national: "Nacional",
  committee_international: "Internacional",
  sponsors_eyebrow: "Sponsors Principales y Organizadores",
  sponsors_title: "Las instituciones que hacen posible M-ONT.",
  abstracts_eyebrow: "Participá",
  abstracts_title: "Enviá un resumen. Aplicá a una beca.",
  abstracts_body:
    "Estudiantes de posgrado y postdocs pueden aplicar a becas de viaje. Se alienta a investigadores de la región a enviar resúmenes — las contribuciones seleccionadas serán presentadas en la sesión de posters y, potencialmente, como charlas breves.",
  abstracts_open: "El período de envío de resúmenes y solicitud de becas estará abierto del 15 de julio al 31 de agosto de 2027.",
  abstracts_fellowship_btn: "Aplicar a beca",
  abstracts_abstract_btn: "Enviar resumen",
};

export const HOME: Record<Lang, HomeContent> = { en, es };
