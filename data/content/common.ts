import type { Lang } from "@/lib/i18n";

export type CommonDict = {
  nav: {
    home: string;
    programme: string;
    speakers: string;
    venue: string;
    registration: string;
    sponsors: string;
    contact: string;
  };
  footer: {
    rights: string;
    skyline_credit_pre: string;
    skyline_credit_author: string;
    skyline_credit_post: string;
  };
  langSwitch: {
    en: string;
    es: string;
  };
};

const en: CommonDict = {
  nav: {
    home: "Home",
    programme: "Programme",
    speakers: "Speakers",
    venue: "Venue",
    registration: "Registration",
    sponsors: "Sponsors",
    contact: "Contact",
  },
  footer: {
    rights: "M-ONT — Montevideo Workshop in OligoNucleotide and RNA Therapeutics.",
    skyline_credit_pre: "Montevideo skyline by ",
    skyline_credit_author: "Serhii",
    skyline_credit_post: " — Adobe Stock (standard licence).",
  },
  langSwitch: { en: "EN", es: "ES" },
};

const es: CommonDict = {
  nav: {
    home: "Inicio",
    programme: "Programa",
    speakers: "Oradores",
    venue: "Sede",
    registration: "Registro",
    sponsors: "Sponsors",
    contact: "Contacto",
  },
  footer: {
    rights: "M-ONT — Workshop de Montevideo de Terapéutica con Oligonucleótidos y ARN.",
    skyline_credit_pre: "Skyline de Montevideo por ",
    skyline_credit_author: "Serhii",
    skyline_credit_post: " — Adobe Stock (licencia estándar).",
  },
  langSwitch: { en: "EN", es: "ES" },
};

export const COMMON: Record<Lang, CommonDict> = { en, es };
