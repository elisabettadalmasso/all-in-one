import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";

export const metadata: Metadata = {
  title: "All In One S.n.c. | Audio Luci Video per Eventi",
  description: "Soluzioni audio, luci, video e strutture per ogni tipo di evento in Piemonte. Oltre 15 anni di esperienza con i migliori brand del settore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        <AOSInit/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}