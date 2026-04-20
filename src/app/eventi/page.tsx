'use client'
import useFetch from '@/hooks/useFetch'
import { EventType } from '@/types/service'
import Hero from '@/components/Hero'
import './Eventi.css'
import Cta from '@/components/Cta'

function Events() {
  const { data: events, loading, error } = useFetch<EventType>('/data/eventTypes.json')

  if (error) return <p>Errore di caricamento...</p>
  if (loading) return <p>Caricamento..</p>
  return (
    <>
      <div className="page-container">
        {/*HERO*/}
        <Hero
        className="event-hero"
          badge="ALL IN ONE"
          titleAos = 'fade-up'
          titleDelay='200'
          title={
            <>
              Ogni evento merita
              <br />
              la tecnica giusta
            </>
          }
          descriptionDelay='400'
          description="Eventi corporate, produzioni teatrali, festival musicali, grandi concerti. Ogni evento è unico, noi ci adattiamo alle tue esigenze."
        />
        {/* <div className="hero-page event-hero">
          <div className="hero-badge" data-aos="fade-down">
            ALL IN ONE
          </div>
          <div >
            <h1 data-aos="fade-up" data-aos-delay="200">
              Ogni evento merita
              <br />
              la tecnica giusta
            </h1>
            <p data-aos="fade-up" data-aos-delay="400">Eventi corporate, produzioni teatrali, festival musicali, grandi concerti. Ogni evento è unico, noi ci adattiamo alle tue esigenze.</p>
          </div>
        </div> */}
        {/*EVENT GRID*/}
        <div className="event-grid">
          {events.map((event, index) => (
            <div key={event.id} className="event-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <picture>
                <source srcSet={event.photo} type="image/avif" />
                <img src={event.photo.replace('.avif', '.jpg')} alt={event.category} />
              </picture>
              <h2>{event.category}</h2>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
        {/* CTA */}
         <Cta
           title="Hai un evento in mente?"
           description="Ti affianchiamo dalla progettazione all'esecuzione per creare la soluzione perfetta per te."
           primaryButton="Richiedi un preventivo"
           primaryButtonHref="/contatti"
         />
        {/* <section className="event-cta cta" data-aos="flip-up">
          <h2>Hai un evento in mente?</h2>
          <p>Ti affianchiamo dalla progettazione all'esecuzione per creare la soluzione perfetta per te.</p>
          <div className="cta-buttons">
          <Link href="/contatti" className="btn-primary">
            Richiedi un preventivo
          </Link>
          </div>
        </section> */}
      </div>
    </>
  )
}

export default Events
