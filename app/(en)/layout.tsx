import type { Metadata } from "next";
import "../globals.css";
import RootShell from "@/components/RootShell";

// Root layout for the English tree (/). Its Spanish twin is app/(es)/layout.tsx;
// the two exist only so `<html lang>` and the metadata can differ per language.
// Keep them in step — see components/RootShell.tsx.
export const metadata: Metadata = {
  title: {
    default: "M-ONT — Montevideo Workshop in OligoNucleotide and RNA Therapeutics",
    template: "%s · M-ONT",
  },
  description:
    "Montevideo Workshop in OligoNucleotide and RNA Therapeutics (M-ONT) — an international workshop on the chemistry, biology, and clinical translation of oligonucleotide and RNA therapeutics.",
  openGraph: {
    title: "M-ONT — Montevideo Workshop in OligoNucleotide and RNA Therapeutics",
    description:
      "International workshop on oligonucleotide and RNA therapeutics — chemistry, biology, and clinical translation.",
    siteName: "M-ONT",
    locale: "en_US",
    type: "website",
  },
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.ico` },
};

export default function EnRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootShell lang="en">{children}</RootShell>;
}
