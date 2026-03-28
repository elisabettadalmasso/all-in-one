import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";

export const metadata: Metadata = {
  title: "All In One - Audio Luci Eventi",
  description: "Noleggio e servizi audio, luci e video per eventi",
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