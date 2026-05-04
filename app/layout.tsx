import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "M-ONT — Montevideo School of Oligonucleotide Therapeutics",
    template: "%s · M-ONT",
  },
  description:
    "Montevideo School of Oligonucleotide Therapeutics (M-ONT) — an international school on the chemistry, biology, and clinical translation of oligonucleotide therapeutics.",
  openGraph: {
    title: "M-ONT — Montevideo School of Oligonucleotide Therapeutics",
    description:
      "International school on oligonucleotide therapeutics — chemistry, biology, and clinical translation.",
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
