import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.css";
import useFetch from "../useFetch";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
    const [fotoAttiva, setFotoAttiva] = useState(0);

    const { dati: foto, loading: loadingFoto, errore: erroreFoto } = useFetch("/hero.json");
    const { dati: servizi, loading: loadingServizi } = useFetch("/servizi.json");
    const { dati: lavori, loading: loadingLavori } = useFetch("/lavori.json");

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
        });

        if (!foto || foto.length === 0) return;
        const timer = setInterval(() => {
            setFotoAttiva((prev) => (prev + 1) % foto.length);
        }, 6000);

        return () => {
            clearInterval(timer);
        };
    }, [foto]);

    useEffect(() => {
        AOS.refresh();
    }, [fotoAttiva]);

    if (erroreFoto) return <p>Errore di caricamento</p>;
    if (loadingFoto) return <p>Caricamento..</p>;
    if (!foto || foto.length === 0) return <p>Nessuna foto disponibile</p>;

    return (
        <>
            <div className="hero" key={fotoAttiva}>
                <picture>
                    <source srcSet={foto[fotoAttiva]?.immagine} type="image/avif" />
                    <img
                        src={foto[fotoAttiva]?.immagine.replace('.avif', '.jpg')}
                        alt={foto[fotoAttiva]?.titolo}
                        style={{ objectPosition: foto[fotoAttiva]?.position }}
                        data-aos="zoom-in"
                    />
                </picture>

                <h1 data-aos="fade-left" data-aos-delay="400">
                    {foto[fotoAttiva]?.titolo}
                </h1>
            </div>
            <div className="servizi">
                {servizi.map((servizio, index) => (
                    <Link to="/servizi" className="servizi-card" key={servizio.id} data-aos="fade-up" data-aos-delay={index * 100}>
                        <p className="servizi-icona">{servizio.icona}</p>
                        <h2>{servizio.titolo}</h2>
                        <p>{servizio.descrizione}</p>
                    </Link>
                ))}
            </div>
            <div className="lavori-grid">
                {lavori.map((lavoro, index) => (
                    <Link to="/eventi" key={lavoro.id} className="lavoro-card" data-aos="flip-left" data-aos-delay={index * 100}>

                        <picture>
                            <source srcSet={lavoro.foto} type="image/avif" />
                            <img
                                src={lavoro.fallback || lavoro.foto.replace('.avif', '.jpg')}
                                alt={lavoro.titolo}
                                style={{ objectPosition: lavoro.position }}
                            />
                        </picture>
                        <div className="lavoro-overlay">
                            <p>{lavoro.titolo}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <section className="cta">
                <h2>Facciamo grande il tuo evento</h2>
                <p>Contattaci per un preventivo o scopri chi siamo</p>
                <div className="cta-bottoni">
                    <Link to="/contatti" className="cta-btn-primary">Contattaci</Link>
                    <Link to="/chi-siamo" className="cta-btn-secondary">Chi siamo</Link>
                </div>
            </section>

        </>
    );
}

export default Home;