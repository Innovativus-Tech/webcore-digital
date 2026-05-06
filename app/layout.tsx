import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebcoreDigital | Where strategy meets technology",
  description:
    "Results-driven digital marketing agency. SEO, paid media, content, and CRO. Built on research, measured by outcomes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
