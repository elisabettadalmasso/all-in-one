
import "./Chisiamo.css";
import Hero from "@/components/Hero";
import Cta from '@/components/Cta'

function About() {
  return (
    <div className="page-container">
      <Hero
      className='about-hero'
      titleAos='fade-down'
      title='Chi Siamo'
      descriptionDelay='200'
      description='All In One è una società di servizi tecnici per eventi, fondata da
          Claudio e Paolo, con oltre 15 anni di esperienza nel settore. Siamo
          specializzati in soluzioni audio, luci, video e strutture per ogni
          tipo di evento, dal più intimo al più grandioso.'
      />
      {/* <div className="hero-page about-hero">
        <h1 data-aos="fade-down">Chi Siamo</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          All In One è una società di servizi tecnici per eventi, fondata da
          Claudio e Paolo, con oltre 15 anni di esperienza nel settore. Siamo
          specializzati in soluzioni audio, luci, video e strutture per ogni
          tipo di evento, dal più intimo al più grandioso.
        </p>
      </div> */}
      
      <section className="about-story" data-aos="fade-up">
        <h2 data-aos="fade-down">La nostra storia</h2>
        <p>
          All In One nasce dalla passione di Claudio per il mondo audio, luci e
          video. Da oltre 15 anni progettiamo, allestiamo e gestiamo eventi di
          ogni tipo: concerti, matrimoni, teatro, fiere ed eventi aziendali,
          prevalentemente in Piemonte e dintorni.
        </p>
        <p>
          Stiamo investendo costantemente in tecnologie all'avanguardia,
          mantenendo però lo stesso approccio semplice e diretto: capire subito
          cosa serve, quando serve e come farlo funzionare senza sorprese.
          Puntiamo sulla tecnica solida, sulla precisione e su soluzioni
          concrete.
        </p>
      </section>
      
      <div className="section-certificazioni" data-aos="fade-up">
        <h3 data-aos="fade-down">Sicurezza e conformità: i requisiti di All In One</h3>
        <p>
          Per poter realizzare i nostri lavori in totale sicurezza e nel
          rispetto della normativa, l'azienda è in possesso delle principali
          certificazioni tecniche e di prevenzione richieste dal settore.
        </p>
        <p data-aos="fade-left">
          <strong>CERTIFICAZIONI IN ESSERE PRESSO ALL IN ONE:</strong>
        </p>
        <ul>
  <li data-aos="fade-right" data-aos-delay="100">CERTIFICAZIONE 37/08</li>
  <li data-aos="fade-left" data-aos-delay="200">PIANO OPERATIVO DELLA SICUREZZA</li>
  <li data-aos="fade-right" data-aos-delay="300">PATENTINO LAVORO IN ALTEZZA</li>
  <li data-aos="fade-left" data-aos-delay="400">CERTIFICAZIONE COLLAUDO ALL'ORIGINE DELLE STRUTTURE</li>
  <li data-aos="fade-right" data-aos-delay="500">CERTIFICAZIONE CARICHI SOSPESI</li>
</ul>
      </div>
      
    <Cta 
      title="Pronto per il tuo prossimo evento?"
      description=" Lavorare con All In One vuol dire scegliere sicurezza, competenza e un
          approccio tecnico solido, senza compromessi."
      primaryButton="Contattaci"
      primaryButtonHref="/contatti"
    />  
      {/* <section className="about-cta cta" data-aos="flip-up">
        <h2>Pronto per il tuo prossimo evento?</h2>
        <p>
          Lavorare con All In One vuol dire scegliere sicurezza, competenza e un
          approccio tecnico solido, senza compromessi.
        </p>
        <div className="cta-buttons">
        <Link href="/contatti" className="btn-primary">
          Contattaci
        </Link>
        </div>
      </section> */}
    </div>
  );
}

export default About;