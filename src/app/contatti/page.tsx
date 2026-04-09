import Link from "next/link";
import "./Contatti.css";

function Contacts() {
    return (
        <div className="page-container">
            <div className="contact-hero">
                <h1>Contattaci</h1>
                <p>Hai un progetto in mente? Siamo qui per aiutarti a realizzarlo. Contattaci direttamente via email o telefono.</p>
            </div>
            <section className="contact-grid">
                <a href="tel:+393926953740" className="contact-card">
                    <small>COMMERCIALE</small>
                    <strong>Claudio</strong>
                    <span>+39 392 6953740</span>
                </a>    

                <a href="tel:+393339382155" className="contact-card">
                    <small>LOGISTICA & MATERIALE</small>
                    <strong>Paolo</strong>
                    <span>+39 333 9382155</span>
                </a>
            </section>
            <section className="contact-mail">
                <h2>Scrivici una mail</h2>
                <p>
                    Per richieste generiche, preventivi o informazioni sui nostri servizi, 
                    siamo pronti a rispondere a ogni tua domanda.
                </p>
                <a href="mailto:info@allinonesncservice.com" className="btn-primary">
                    Invia un messaggio
                </a>
            </section>
            <section className="contact-cta">
                <h2>Il tuo prossimo evento inizia qui</h2>
                <p>Siamo a tua completa disposizione per sopralluoghi tecnici e preventivi personalizzati.</p>
                
                <div className="cta-buttons">
                    <Link href="/chi-siamo" className="cta-btn-primary">
                        Scopri chi siamo
                    </Link>
                    <Link href="/servizi" className="cta-btn-secondary">
                        I nostri servizi
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Contacts;