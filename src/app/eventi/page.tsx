"use client";
import useFetch from "@/hooks/useFetch";
import { EventType } from "@/types/service";
import Link from "next/link";
import "./Eventi.css";

function Events() {
  const {
    data: events,
    loading,
    error,
  } = useFetch<EventType>("/data/eventTypes.json");

  if (error) return <p>Errore di caricamento...</p>;
  if (loading) return <p>Caricamento..</p>;
  return (
    <div className="page-container">
      {/*HERO*/}
      <div className="event-hero">
        <div className="hero-badge" data-aos="fade-down">ALL IN ONE</div>
        <h1 data-aos="fade-up" data-aos-delay="200">
          Ogni evento merita
          <br />
          la tecnica giusta
        </h1>
        <p data-aos="fade-up" data-aos-delay="400">
          Eventi corporate, produzioni teatrali, festival musicali, grandi concerti. Ogni evento è unico, noi ci adattiamo alle tue
          esigenze.
        </p>
      </div>
      {/*EVENT GRID*/}
      <div className="event-grid">
        {events.map((event, index) => (
          <div key={event.id} 
          className="event-card"
          data-aos="fade-up"
          data-aos-delay={index * 100}
          >
            <picture>
              <source srcSet={event.photo} type="image/avif" />
              <img
                src={event.photo.replace(".avif", ".jpg")}
                alt={event.category}
              />
            </picture>
            <h2>{event.category}</h2>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
      {/* CTA */}
        <div className="event-cta" data-aos="flip-up">
            <h2>Hai un evento in mente?</h2>
            <p>Ti affianchiamo dalla progettazione all'esecuzione 
   per creare la soluzione perfetta per te.</p>
   <Link href="/contatti" className="btn btn-primary">
     Richiedi un preventivo
   </Link>
        </div>
    </div>
  );
}

export default Events;
