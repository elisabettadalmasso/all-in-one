import Link from "next/link";
import "./Contatti.css";
import Hero from '@/components/Hero'

function Contacts() {
    return (
        <div className="page-container">
            <Hero 
            className='contact-hero'
            titleAos='fade-down'
            title='Contattaci'
            descriptionDelay='200'
            description=' Hai un progetto in mente? Siamo qui per aiutarti a realizzarlo. 
                    Contattaci direttamente via email o telefono.'
            />
            {/* <div className="hero-page contact-hero">
                <h1 data-aos="fade-down">Contattaci</h1>
                <p data-aos="fade-up" data-aos-delay="200">
                    Hai un progetto in mente? Siamo qui per aiutarti a realizzarlo. 
                    Contattaci direttamente via email o telefono.
                </p>
            </div> */}
            
            <section className="contact-grid">
                <a href="tel:+393926953740" className="contact-card" data-aos="fade-right">
                    <small>COMMERCIALE</small>
                    <strong>Claudio</strong>
                    <span>+39 392 6953740</span>
                </a>    

                <a href="tel:+393339382155" className="contact-card" data-aos="fade-left">
                    <small>LOGISTICA & MATERIALE</small>
                    <strong>Paolo</strong>
                    <span>+39 333 9382155</span>
                </a>
            </section>
            
            <section className="contact-mail" data-aos="fade-up">
                <h2>Scrivici una mail</h2>
                <p>
                    Per richieste generiche, preventivi o informazioni sui nostri servizi, 
                    siamo pronti a rispondere a ogni tua domanda.
                </p>
                <a href="mailto:info@allinonesncservice.com" className="btn-primary">
                    Invia un messaggio
                </a>
            </section>
            
            <section className="contact-cta" data-aos="flip-up">
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