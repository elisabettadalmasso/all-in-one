"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import "./Home.css";
import useFetch from "@/hooks/useFetch";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
    const [activePhoto, setActivePhoto] = useState(0);

    const { data: photos, loading: loadingPhotos, error: errorPhotos } = useFetch("/data/hero.json");
    const { data: services, loading: loadingServices } = useFetch("/data/servizi.json");
    const { data: works, loading: loadingWorks } = useFetch("/data/lavori.json");

    useEffect(() => {

        if (!photos || photos.length === 0) return;
        const timer = setInterval(() => {
            setActivePhoto((prev) => (prev + 1) % photos.length);
        }, 6000);

        return () => {
            clearInterval(timer);
        };
    }, [photos]);

    useEffect(() => {
        AOS.refresh();
    }, [activePhoto]);

    if (errorPhotos) return <p>Errore di caricamento</p>;
    if (loadingPhotos) return <p>Caricamento..</p>;
    if (!photos || photos.length === 0) return <p>Nessuna foto disponibile</p>;

    return (
        <div className="page-container">
            <div className="hero" key={activePhoto}>
                <picture>
                    <source srcSet={photos[activePhoto]?.immagine} type="image/avif" />
                    <img
                        src={photos[activePhoto]?.immagine.replace('.avif', '.jpg')}
                        alt={photos[activePhoto]?.titolo}
                        style={{ objectPosition: photos[activePhoto]?.position }}
                        data-aos="zoom-in"
                    />
                </picture>

                <h1 data-aos="fade-left" data-aos-delay="400">
                    {photos[activePhoto]?.titolo}
                </h1>
            </div>
            
            <div className="services">
                {services.map((service, index) => (
                    <Link href="/servizi" className="service-card" key={service.id} data-aos="fade-up" data-aos-delay={index * 100}>
                        <p className="service-icon">{service.icona}</p>
                        <h2>{service.titolo}</h2>
                        <p>{service.descrizione}</p>
                    </Link>
                ))}
            </div>
            
            <div className="works-grid">
                {works.map((work, index) => (
                    <Link href="/eventi" key={work.id} className="work-card" data-aos="flip-left" data-aos-delay={index * 100}>
                        <picture>
                            <source srcSet={work.foto} type="image/avif" />
                            <img
                                src={work.fallback || work.foto.replace('.avif', '.jpg')}
                                alt={work.titolo}
                                style={{ objectPosition: work.position }}
                            />
                        </picture>
                        <div className="work-overlay">
                            <p>{work.titolo}</p>
                        </div>
                    </Link>
                ))}
            </div>
            
            <section className="cta">
                <h2>Facciamo grande il tuo evento</h2>
                <p>Contattaci per un preventivo o scopri chi siamo</p>
                <div className="cta-buttons">
                    <Link href="/contatti" className="cta-btn-primary">Contattaci</Link>
                    <Link href="/chi-siamo" className="cta-btn-secondary">Chi siamo</Link>
                </div>
            </section>
        </div>
    );
}

export default Home;