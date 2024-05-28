import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "@next/font/local";
const inter = Inter({ subsets: ["latin"] });
import favicon from "../app/favicon.ico";

export const metadata: Metadata = {
  title: "Ahmed's Playground",
  description:
    "Generation of all of Ahmed's Design Randomnes to practice shipping and iterating designs!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/mww7csz.css" />
        <link rel="stylesheet" href="https://use.typekit.net/mww7csz.css" />
        <link rel="stylesheet" href="https://use.typekit.net/mww7csz.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
