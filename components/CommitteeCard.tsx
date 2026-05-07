import Image from "next/image";
import { asset } from "@/lib/asset";
import type { CommitteeMember } from "@/lib/committee";

export default function CommitteeCard({ member }: { member: CommitteeMember }) {
  const photoSrc = member.photo ? asset(`/img/${member.photo}`) : null;

  return (
    <article className="flex flex-col items-center gap-3 rounded-xl border border-border bg-surface p-5 text-center transition hover:border-accent">
      {/* Portrait */}
      <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-border bg-elevated">
        {photoSrc ? (
          <Image
            src={photoSrc}
            alt={member.name}
            fill
            className="object-cover object-top"
            sizes="96px"
          />
        ) : (
          /* Placeholder initials avatar */
          <span className="flex h-full w-full items-center justify-center font-serif text-2xl font-semibold text-muted">
            {member.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="font-serif text-base font-semibold leading-snug text-ink">
        {member.name}
      </h3>

      {/* Institutions */}
      <div className="space-y-0.5 text-xs leading-relaxed text-muted">
        {member.institutions.map((inst) => (
          <p key={inst}>{inst}</p>
        ))}
      </div>

      {/* Country + flag */}
      <p className="flex items-center gap-1.5 text-xs font-medium text-subtle">
        {member.country}
        <Image
          src={asset(`/figures/${member.iso}.svg`)}
          alt={member.country}
          width={20}
          height={13}
          className="inline-block h-[1.1em] w-auto align-middle"
        />
      </p>
    </article>
  );
}
