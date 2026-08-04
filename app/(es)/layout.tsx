import type { Metadata } from "next";
import "../globals.css";
import RootShell from "@/components/RootShell";

// Root layout for the Spanish tree (/es/...). Its English twin is
// app/(en)/layout.tsx; the two exist only so `<html lang>` and the metadata can
// differ per language. Keep them in step — see components/RootShell.tsx.
export const metadata: Metadata = {
  title: {
    default: "M-ONT — Workshop de Montevideo de Terapéutica con Oligonucleótidos y ARN",
    template: "%s · M-ONT",
  },
  description:
    "Workshop de Montevideo de Terapéutica con Oligonucleótidos y ARN (M-ONT) — un workshop internacional sobre la química, la biología y la traslación clínica de los oligonucleótidos y las terapias basadas en ARN.",
  openGraph: {
    title: "M-ONT — Workshop de Montevideo de Terapéutica con Oligonucleótidos y ARN",
    description:
      "Workshop internacional sobre terapéutica con oligonucleótidos y ARN — química, biología y traslación clínica.",
    siteName: "M-ONT",
    locale: "es_UY",
    type: "website",
  },
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.ico` },
};

export default function EsRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootShell lang="es">{children}</RootShell>;
}
