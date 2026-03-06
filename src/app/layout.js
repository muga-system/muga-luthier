import React from "react";

import { IBM_Plex_Mono, Manrope, Spectral } from "next/font/google";
import "./globals.css";

import { Suspense } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-spectral",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata = {
  title: "Di corato Luthier",
  description: "Creado por Concepto Hexágono",
};

export const viewport = {
  themeColor: "#040405",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${spectral.variable} ${plexMono.variable}`}>
        <a href="#main-content" className="skip-link">
          Ir al contenido principal
        </a>
        <Suspense>
          <main id="main-content">{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
