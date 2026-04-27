"use client"
import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { Hero } from "@/types/service";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSlideShow () {
    const [activePhoto, setActivePhoto] = useState(0);

    const { data: photos, loading: loadingPhotos, error: errorPhotos } = useFetch<Hero>("/data/hero.json");

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
    
    return(
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
    )
}