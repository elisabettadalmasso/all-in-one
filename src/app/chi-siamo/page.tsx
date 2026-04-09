import Link from "next/link";
import "./Chisiamo.css";

function About() {
  return (
    <div className="page-container">
      <div className="about-hero">
        <h1>Chi Siamo</h1>
        <p>
          All In One è una società di servizi tecnici per eventi, fondata da
          Claudio e Paolo, con oltre 15 anni di esperienza nel settore. Siamo
          specializzati in soluzioni audio, luci, video e strutture per ogni
          tipo di evento, dal più intimo al più grandioso.
        </p>
      </div>
      <section className="about-story">
        <h2>La nostra storia</h2>
        <p>
          All In One nasce dalla passione di Claudio per il mondo audio, luci e
          video. Da oltre 15 anni progettiamo, allestiamo e gestiamo eventi di
          ogni tipo: concerti, matrimoni, teatro, fiere ed eventi aziendali,
          prevalentemente in Piemonte e dintorni.
        </p>
        <p>
          L'esperienza di Claudio affonda le radici nella tradizione familiare:
          suo padre prima di lui ha lavorato nello stesso settore, trasferendo
          competenze tecniche e visione d'insieme.
        </p>
        <p>
          Nel 2023 Paolo entra nel progetto come socio, portando con sé anni di
          esperienza come freelance che lo hanno formato su un’ampia varietà di
          lavori e realtà. Insieme, Claudio e Paolo rappresentano la
          combinazione perfetta di organizzazione rigorosa e problem‑solving
          veloce.
        </p>
        <p>
          Stiamo investendo costantemente in tecnologie all’avanguardia,
          mantenendo però lo stesso approccio semplice e diretto: capire subito
          cosa serve, quando serve e come farlo funzionare senza sorprese.
          Puntiamo sulla tecnica solida, sulla precisione e su soluzioni
          concrete, senza inutile rumore o promesse vuote.
        </p>
      </section>
      <section className="about-people">
        <h3>Claudio e Paolo: due ruoli, un unico obiettivo</h3>
        <p>
          Claudio segue la parte commerciale e relazionale: è il primo punto di
          contatto per i clienti, traduce le esigenze in proposte tecniche e
          segue il progetto dall’inizio alla fine.
        </p>
        <p>
          Paolo si occupa invece di logistica, gestione del materiale e
          pianificazione operativa: è lui a organizzare tempi, trasporti e
          montaggi, garantendo che ogni attrezzatura arrivi al momento giusto e
          sia pronta a funzionare senza intoppi.
        </p>
      </section>
      <div className="section-certificazioni">
        <h3>Sicurezza e conformità: i requisiti di All In One</h3>
        <p>
          Per poter realizzare i nostri lavori in totale sicurezza e nel
          rispetto della normativa, l’azienda è in possesso delle principali
          certificazioni tecniche e di prevenzione richieste dal settore.
        </p>
        <p>
          <strong>CERTIFICAZIONI IN ESSERE PRESSO ALL IN ONE:</strong>
        </p>
        <ul>
          <li>CERTIFICAZIONE 37/08</li>
          <li>PIANO OPERATIVO DELLA SICUREZZA</li>
          <li>PATENTINO LAVORO IN ALTEZZA</li>
          <li>CERTIFICAZIONE COLLAUDO ALL’ORIGINE DELLE STRUTTURE</li>
          <li>CERTIFICAZIONE CARICHI SOSPESI</li>
        </ul>
      </div>
      <section className="about-cta">
        <h3>Pronto per il tuo prossimo evento?</h3>
        <p>
          Lavorare con All In One vuol dire scegliere sicurezza, competenza e un
          approccio tecnico solido, senza compromessi.
        </p>
        <Link href="/contatti" className="btn-primary">
          Contattaci
        </Link>
      </section>
    </div>
  );
}

export default About;
