import type { Metadata } from "next";
import "./globals.css";
import "latex.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Steven He</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="latex-dark">{children}</body>
    </html>
  );
}