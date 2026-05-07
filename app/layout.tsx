import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
    type: "website",
  },
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.ico` },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
