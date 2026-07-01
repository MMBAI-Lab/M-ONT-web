import data from "@/data/speakers.json";

export type Speaker = {
  first: string;
  last: string;
  name: string;
  institution: string;
  country: string;
  iso: string;
  talk_title: string;
  talk_confirmed: boolean;
  photo: string | null;
  confirmed: boolean;
};

export const speakers = data as Speaker[];

export function getConfirmedSpeakers(): Speaker[] {
  return speakers.filter((s) => s.confirmed);
}
