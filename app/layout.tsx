import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
 title: "METEORA — Portable AIoT Weather Station",
 description: "Stasiun cuaca portabel berbasis sensor, GPS, dan analisis data untuk memahami kondisi lingkungan.",
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="id"><body>{children}</body></html>; }
