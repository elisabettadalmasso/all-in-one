"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import "./Home.css";
import useFetch from "@/hooks/useFetch";
import AOS from "aos";
import "aos/dist/aos.css";
import { Hero, Service, Work } from "@/types/service";

function Home() {
    const [activePhoto, setActivePhoto] = useState(0);

    const { data: photos, loading: loadingPhotos, error: errorPhotos } = useFetch<Hero>("/data/hero.json");
    const { data: services, loading: loadingServices } = useFetch<Service>("/data/services.json");
    const { data: works, loading: loadingWorks } = useFetch<Work>("/data/works.json");

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
                    <source srcSet={photos[activePhoto]?.photo} type="image/avif" />
                    <img
                        src={photos[activePhoto]?.photo.replace('.avif', '.jpg')}
                        alt={photos[activePhoto]?.title}
                        style={{ objectPosition: photos[activePhoto]?.position }}
                        data-aos="zoom-in"
                    />
                </picture>

                <h1 data-aos="fade-left" data-aos-delay="400">
                    {photos[activePhoto]?.title}
                </h1>
            </div>
            
            <div className="services">
                {services.map((service, index) => (
                    <Link href="/servizi" className="service-card" key={service.id} data-aos="fade-up" data-aos-delay={index * 100}>
                        <p className="service-icon">{service.icon}</p>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </Link>
                ))}
            </div>
            
            <div className="works-grid">
                {works.map((work, index) => (
                    <Link href="/eventi" key={work.id} className="work-card" data-aos="flip-left" data-aos-delay={index * 100}>
                        <picture>
                            <source srcSet={work.photo} type="image/avif" />
                            <img
                                src={work.fallback || work.photo.replace('.avif', '.jpg')}
                                alt={work.title}
                                style={{ objectPosition: work.position }}
                            />
                        </picture>
                        <div className="work-overlay">
                            <p>{work.title}</p>
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