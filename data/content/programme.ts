import type { Lang } from "@/lib/i18n";

export type ScheduleEntry = {
  time: string;
  speaker: string | null;
  title: string | null;
  type: "talk" | "break" | "lunch" | "session" | "tbc";
};

export type DaySchedule = {
  day: string;
  date: string;
  slots: ScheduleEntry[];
};

const en: DaySchedule[] = [
  {
    day: "Monday",
    date: "23 Feb",
    slots: [{ time: "All day", speaker: null, title: "Arrival & registration", type: "session" }],
  },
  {
    day: "Tuesday",
    date: "24 Feb",
    slots: [
      { time: "09:00–09:50", speaker: "Laura Sepp-Lorenzino", title: "Welcome from OTS and introduction to oligonucleotide therapeutics", type: "talk" },
      { time: "09:50–10:40", speaker: "Emanuele Buratti", title: "Introduction to RNA splicing", type: "talk" },
      { time: "10:40–11:10", speaker: null, title: "Coffee break", type: "break" },
      { time: "11:10–12:00", speaker: "Alberto Kornblihtt", title: "Control of alternative splicing using siRNAs", type: "talk" },
      { time: "12:00–13:30", speaker: null, title: "Lunch", type: "lunch" },
      { time: "13:30–14:20", speaker: "Pablo D. Dans", title: "In-silico modelling of oligonucleotides", type: "talk" },
      { time: "14:20–15:10", speaker: "Victoria Calzada", title: "Therapeutic aptamers", type: "talk" },
      { time: "15:10–15:30", speaker: null, title: "Coffee break", type: "break" },
      { time: "15:30–16:20", speaker: null, title: "Invited lecture", type: "tbc" },
      { time: "16:20–17:10", speaker: null, title: "Round table: The journey from the academic lab into global biotech", type: "session" },
      { time: "17:10–18:00", speaker: null, title: "Short talks selected from submitted abstracts", type: "session" },
    ],
  },
  {
    day: "Wednesday",
    date: "25 Feb",
    slots: [
      { time: "09:00–09:50", speaker: "Manuel de la Mata", title: "miRNAs and their degradation mechanisms", type: "talk" },
      { time: "09:50–10:40", speaker: "Federico Ariel", title: "Long non-coding RNAs and RNAi in field crops for sustainable agriculture", type: "talk" },
      { time: "10:40–11:10", speaker: null, title: "Coffee break", type: "break" },
      { time: "11:10–12:00", speaker: "Rodrigo Galindo-Murillo", title: "Molecular Modeling of Antisense Oligonucleotide Analogs", type: "talk" },
      { time: "12:00–13:30", speaker: null, title: "Lunch — Winery visit", type: "lunch" },
      { time: "13:30–14:20", speaker: "Frank Slack", title: "Towards microRNA therapeutics in cancer", type: "talk" },
      { time: "14:20–15:10", speaker: "Modesto Orozco", title: "pH-driven dynamics and mechanisms of LNP-mediated siRNA delivery", type: "talk" },
      { time: "15:10–15:30", speaker: null, title: "Coffee break", type: "break" },
      { time: "15:30–16:20", speaker: "Zoya Ignatova", title: "Expanding the functional landscape of tRNAs beyond translation into therapeutics", type: "talk" },
      { time: "16:20–18:00", speaker: null, title: "Poster session", type: "session" },
      { time: "20:00 onwards", speaker: null, title: "Asado & barbecue", type: "session" },
    ],
  },
  {
    day: "Thursday",
    date: "26 Feb",
    slots: [
      { time: "09:00–09:50", speaker: "Juan Pablo Tosar", title: "Naked RNA uptake, sensing, and endosomal escape", type: "talk" },
      { time: "09:50–10:40", speaker: "Saumya Das", title: "Less may be more: the evolving role of tRNA-derived small RNAs in biology and therapeutics", type: "talk" },
      { time: "10:40–11:10", speaker: null, title: "Coffee break", type: "break" },
      { time: "11:10–12:00", speaker: "Macarena Hernández", title: "Therapeutic Aptamers in Clinical Translation: The ApTOLL Story", type: "talk" },
      { time: "12:00–13:30", speaker: null, title: "Lunch", type: "lunch" },
      { time: "13:30–14:20", speaker: "Samir El Andaloussi", title: "Extrahepatic delivery of RNA and CRISPR therapeutics using engineered non-viral delivery systems", type: "talk" },
      { time: "14:20–15:10", speaker: "Annemieke Aartsma-Rus", title: "Exon skipping for Duchenne muscular dystrophy: applying 25 years of expertise to future optimization", type: "talk" },
      { time: "15:10–15:30", speaker: null, title: "Coffee break", type: "break" },
      { time: "15:30–16:20", speaker: "Adrián R. Krainer", title: "The making of Nusinersen and current frontiers in splice-switching ASOs", type: "talk" },
      { time: "16:20–17:10", speaker: "Alberto Kornblihtt", title: "ASOs, transcription and chromatin structure", type: "talk" },
      { time: "17:10–18:00", speaker: "Isabel Aznarez", title: "Regulation of mRNA decay with ASOs for gene expression activation", type: "talk" },
    ],
  },
  {
    day: "Friday",
    date: "27 Feb",
    slots: [
      { time: "09:00–09:50", speaker: null, title: "Invited talk to be confirmed", type: "tbc" },
      { time: "09:50–10:40", speaker: "Muthiah Manoharan", title: "New frontiers and current challenges in siRNA design", type: "talk" },
      { time: "10:40–11:10", speaker: null, title: "Coffee break", type: "break" },
      { time: "11:10–12:00", speaker: "Laura Sepp-Lorenzino", title: "CRISPR Therapeutics: ex vivo and in vivo", type: "talk" },
      { time: "12:00–18:00", speaker: null, title: "Winery visit & farewell", type: "session" },
    ],
  },
];

const es: DaySchedule[] = [
  {
    day: "Lunes",
    date: "23 feb",
    slots: [{ time: "Todo el día", speaker: null, title: "Llegada y registro", type: "session" }],
  },
  {
    day: "Martes",
    date: "24 feb",
    slots: [
      { time: "09:00–09:50", speaker: "Laura Sepp-Lorenzino", title: "Bienvenida de OTS e introducción a la terapéutica con oligonucleótidos", type: "talk" },
      { time: "09:50–10:40", speaker: "Emanuele Buratti", title: "Introducción al splicing de ARN", type: "talk" },
      { time: "10:40–11:10", speaker: null, title: "Pausa café", type: "break" },
      { time: "11:10–12:00", speaker: "Alberto Kornblihtt", title: "Control del splicing alternativo con siRNAs", type: "talk" },
      { time: "12:00–13:30", speaker: null, title: "Almuerzo", type: "lunch" },
      { time: "13:30–14:20", speaker: "Pablo D. Dans", title: "Modelado in silico de oligonucleótidos", type: "talk" },
      { time: "14:20–15:10", speaker: "Victoria Calzada", title: "Aptámeros terapéuticos", type: "talk" },
      { time: "15:10–15:30", speaker: null, title: "Pausa café", type: "break" },
      { time: "15:30–16:20", speaker: null, title: "Conferencia invitada", type: "tbc" },
      { time: "16:20–17:10", speaker: null, title: "Mesa redonda: Del laboratorio académico a la biotecnología global", type: "session" },
      { time: "17:10–18:00", speaker: null, title: "Charlas seleccionadas de resúmenes enviados", type: "session" },
    ],
  },
  {
    day: "Miércoles",
    date: "25 feb",
    slots: [
      { time: "09:00–09:50", speaker: "Manuel de la Mata", title: "miRNAs y sus mecanismos de degradación", type: "talk" },
      { time: "09:50–10:40", speaker: "Federico Ariel", title: "ARN largos no codificantes y RNAi en cultivos para agricultura sostenible", type: "talk" },
      { time: "10:40–11:10", speaker: null, title: "Pausa café", type: "break" },
      { time: "11:10–12:00", speaker: "Rodrigo Galindo-Murillo", title: "Modelado molecular de análogos de oligonucleótidos antisentido", type: "talk" },
      { time: "12:00–13:30", speaker: null, title: "Almuerzo — Visita a bodega", type: "lunch" },
      { time: "13:30–14:20", speaker: "Frank Slack", title: "Hacia terapéuticos con microARN en cáncer", type: "talk" },
      { time: "14:20–15:10", speaker: "Modesto Orozco", title: "Dinámica dependiente de pH y mecanismos de delivery de siRNA mediado por LNPs", type: "talk" },
      { time: "15:10–15:30", speaker: null, title: "Pausa café", type: "break" },
      { time: "15:30–16:20", speaker: "Zoya Ignatova", title: "Expandiendo el paisaje funcional de los ARNt más allá de la traducción", type: "talk" },
      { time: "16:20–18:00", speaker: null, title: "Sesión de posters", type: "session" },
      { time: "20:00 en adelante", speaker: null, title: "Asado", type: "session" },
    ],
  },
  {
    day: "Jueves",
    date: "26 feb",
    slots: [
      { time: "09:00–09:50", speaker: "Juan Pablo Tosar", title: "Captación de ARN desnudo, sensing y escape endosomal", type: "talk" },
      { time: "09:50–10:40", speaker: "Saumya Das", title: "Menos puede ser más: el rol de los ARN pequeños derivados de ARNt en biología y terapéutica", type: "talk" },
      { time: "10:40–11:10", speaker: null, title: "Pausa café", type: "break" },
      { time: "11:10–12:00", speaker: "Macarena Hernández", title: "Aptámeros terapéuticos en traslación clínica: la historia de ApTOLL", type: "talk" },
      { time: "12:00–13:30", speaker: null, title: "Almuerzo", type: "lunch" },
      { time: "13:30–14:20", speaker: "Samir El Andaloussi", title: "Delivery extrahepático de terapéuticos de ARN y CRISPR usando sistemas de entrega no virales", type: "talk" },
      { time: "14:20–15:10", speaker: "Annemieke Aartsma-Rus", title: "Exon skipping para distrofia muscular de Duchenne: 25 años de experiencia hacia la optimización futura", type: "talk" },
      { time: "15:10–15:30", speaker: null, title: "Pausa café", type: "break" },
      { time: "15:30–16:20", speaker: "Adrián R. Krainer", title: "La creación de Nusinersen y las fronteras actuales de los ASOs splice-switching", type: "talk" },
      { time: "16:20–17:10", speaker: "Alberto Kornblihtt", title: "ASOs, transcripción y estructura de cromatina", type: "talk" },
      { time: "17:10–18:00", speaker: "Isabel Aznarez", title: "Regulación de la degradación de ARNm con ASOs para la activación de la expresión génica", type: "talk" },
    ],
  },
  {
    day: "Viernes",
    date: "27 feb",
    slots: [
      { time: "09:00–09:50", speaker: null, title: "Charla invitada por confirmar", type: "tbc" },
      { time: "09:50–10:40", speaker: "Muthiah Manoharan", title: "Nuevas fronteras y desafíos actuales en el diseño de siRNA", type: "talk" },
      { time: "10:40–11:10", speaker: null, title: "Pausa café", type: "break" },
      { time: "11:10–12:00", speaker: "Laura Sepp-Lorenzino", title: "Terapéuticos CRISPR: ex vivo e in vivo", type: "talk" },
      { time: "12:00–18:00", speaker: null, title: "Visita a bodega y despedida", type: "session" },
    ],
  },
];

export const PROGRAMME: Record<Lang, DaySchedule[]> = { en, es };
