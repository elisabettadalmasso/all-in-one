"use client"
import useFetch from "@/hooks/useFetch";
import { EventType } from "@/types/service";

export default function EventsGrid() {
  const { data: events, loading, error } = useFetch<EventType>("/data/eventTypes.json");

  if (error) return <p>Errore di caricamento...</p>;
  if (loading) return <p>Caricamento..</p>;

  return (
    <div className="event-grid">
      {events.map((event, index) => (
        <div key={event.id} className="event-card" data-aos="fade-up" data-aos-delay={index * 100}>
          <picture>
            <source srcSet={event.photo} type="image/avif" />
            <img src={event.photo.replace(".avif", ".jpg")} alt={event.category} />
          </picture>
          <h2>{event.category}</h2>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}