import type { Lang } from "@/lib/i18n";

/**
 * Placeholder copy for the inner section pages. Real content (programme
 * grid, speaker bios, venue info, registration form) gets layered in
 * later — these dicts let us ship a navigable site immediately.
 */
export type SectionDict = {
  eyebrow: string;
  title: string;
  intro: string;
  placeholder: string;
};

export type SectionsContent = {
  programme: SectionDict;
  speakers: SectionDict;
  venue: SectionDict;
  registration: SectionDict;
  sponsors: SectionDict;
  contact: SectionDict;
};

const en: SectionsContent = {
  programme: {
    eyebrow: "Programme",
    title: "A week of lectures, workshops and panels.",
    intro:
      "The full programme — sessions, hands-on workshops, and discussion panels — will be published here as it is finalized.",
    placeholder: "Detailed schedule coming soon.",
  },
  speakers: {
    eyebrow: "Speakers",
    title: "International faculty.",
    intro:
      "Confirmed lecturers and panelists will appear here, with affiliations and short bios.",
    placeholder: "Speaker line-up coming soon.",
  },
  venue: {
    eyebrow: "Venue & travel",
    title: "Montevideo, Uruguay.",
    intro:
      "The school takes place in Montevideo. Practical information on the venue, accommodation, visa requirements and travel will be posted here.",
    placeholder: "Venue and travel details coming soon.",
  },
  registration: {
    eyebrow: "Registration",
    title: "How to apply.",
    intro:
      "Applications, fees, deadlines, and travel grants will be announced here. Subscribe via the contact page to be notified when registration opens.",
    placeholder: "Registration opens soon.",
  },
  sponsors: {
    eyebrow: "Sponsors",
    title: "Partners that make M-ONT possible.",
    intro:
      "M-ONT is supported by academic, governmental, and industry partners. Sponsoring organizations will be acknowledged here.",
    placeholder: "Sponsor logos coming soon.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Get in touch.",
    intro:
      "For scientific or organizational questions, write to the M-ONT organizing committee.",
    placeholder: "Contact details coming soon.",
  },
};

const es: SectionsContent = {
  programme: {
    eyebrow: "Programa",
    title: "Una semana de clases, talleres y paneles.",
    intro:
      "El programa completo — clases, talleres prácticos y paneles de discusión — se publicará aquí a medida que se vaya cerrando.",
    placeholder: "Cronograma detallado próximamente.",
  },
  speakers: {
    eyebrow: "Oradores",
    title: "Cuerpo docente internacional.",
    intro:
      "Aquí van a aparecer los docentes y panelistas confirmados, con afiliación y una breve biografía.",
    placeholder: "Lista de oradores próximamente.",
  },
  venue: {
    eyebrow: "Sede y viaje",
    title: "Montevideo, Uruguay.",
    intro:
      "La escuela se realiza en Montevideo. La información práctica sobre la sede, el alojamiento, los requisitos de visa y el viaje se publicará aquí.",
    placeholder: "Detalles de sede y viaje próximamente.",
  },
  registration: {
    eyebrow: "Registro",
    title: "Cómo postularse.",
    intro:
      "Postulaciones, aranceles, fechas límite y becas de viaje se anunciarán aquí. Suscribite desde la página de contacto para enterarte cuando abra el registro.",
    placeholder: "El registro abre próximamente.",
  },
  sponsors: {
    eyebrow: "Sponsors",
    title: "Las instituciones que hacen posible M-ONT.",
    intro:
      "M-ONT cuenta con el apoyo de socios académicos, estatales y de la industria. Los logos de las organizaciones que sponsorean aparecerán aquí.",
    placeholder: "Logos de sponsors próximamente.",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Comunicate con nosotros.",
    intro:
      "Para consultas científicas u organizativas, escribí al comité organizador de M-ONT.",
    placeholder: "Datos de contacto próximamente.",
  },
};

export const SECTIONS: Record<Lang, SectionsContent> = { en, es };
