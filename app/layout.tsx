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
      <body className="latex-dark">{children}</body>
    </html>
  );
}