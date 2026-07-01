import Image from "next/image";
import { asset } from "@/lib/asset";
import type { Speaker } from "@/lib/speakers";

export default function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const photoSrc = speaker.photo ? asset(`/img/${speaker.photo}`) : null;
  const initials = [speaker.first[0], speaker.last[0]].join("");

  return (
    <article className="flex flex-col items-center gap-3 rounded-xl border border-border bg-bg p-5 text-center transition hover:border-accent">
      {/* Portrait */}
      <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-border bg-elevated">
        {photoSrc ? (
          <Image
            src={photoSrc}
            alt={speaker.name}
            fill
            className="object-cover object-top"
            sizes="96px"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center font-serif text-2xl font-semibold text-muted">
            {initials}
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="font-serif text-base font-semibold leading-snug text-ink">
        {speaker.name}
      </h3>

      {/* Institution */}
      <p className="text-xs leading-relaxed text-muted">{speaker.institution}</p>

      {/* Country + flag */}
      <p className="flex items-center gap-1.5 text-xs font-medium text-subtle">
        {speaker.country}
        <Image
          src={asset(`/figures/${speaker.iso}.svg`)}
          alt={speaker.country}
          width={20}
          height={13}
          className="inline-block h-[1.1em] w-auto align-middle"
        />
      </p>
    </article>
  );
}
