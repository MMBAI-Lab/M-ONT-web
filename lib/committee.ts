import data from "@/data/committee.json";

export type CommitteeMember = {
  name: string;
  institutions: string[];
  country: string;
  iso: string;
  photo: string | null;
  group: "national" | "international";
};

const members = data as CommitteeMember[];

export function getNational(): CommitteeMember[] {
  return members.filter((m) => m.group === "national");
}

export function getInternational(): CommitteeMember[] {
  return members.filter((m) => m.group === "international");
}
