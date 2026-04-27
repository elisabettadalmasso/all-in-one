import type { Metadata } from "next";
import Hero from "@/components/Hero";
import EventsGrid from "@/components/EventsGrid";
import Cta from "@/components/Cta";
import "./Eventi.css";

export const metadata: Metadata = {
  title: "Eventi | All In One S.n.c.",
  description: "Concerti, eventi corporate, teatro e festival: All In One gestisce ogni tipo di evento con professionalità e tecnologia d'eccellenza.",
};

export default function EventsPage() {
  return (
    <div className="page-container">
      <Hero
        className="event-hero"
        badge="ALL IN ONE"
        titleAos="fade-up"
        titleDelay="200"
        title={<>Ogni evento merita<br />la tecnica giusta</>}
        descriptionDelay="400"
        description="Eventi corporate, produzioni teatrali, festival musicali, grandi concerti. Ogni evento è unico, noi ci adattiamo alle tue esigenze."
      />
      <EventsGrid />
      <Cta
        title="Hai un evento in mente?"
        description="Ti affianchiamo dalla progettazione all'esecuzione per creare la soluzione perfetta per te."
        primaryButton="Richiedi un preventivo"
        primaryButtonHref="/contatti"
      />
    </div>
  );
}