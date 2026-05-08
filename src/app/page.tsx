// "use client"
import "./Home.css";
import Cta from '@/components/Cta'
import ServiceList from "@/components/ServiceList";
import WorksGrid from "@/components/WorksGrid";
import HeroSlideShow from "@/components/HeroSlideShow";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All In One S.n.c. | Audio Luci Video per Eventi",
  description: "Soluzioni audio, luci, video e strutture per ogni tipo di evento in Piemonte. Oltre 15 anni di esperienza con i migliori brand del settore.",
};

function Home() {
    // const [activePhoto, setActivePhoto] = useState(0);

    // const { data: photos, loading: loadingPhotos, error: errorPhotos } = useFetch<Hero>("/data/hero.json");
    // const { data: services } = useFetch<Service>("/data/services.json");
    // const { data: works } = useFetch<Work>("/data/works.json");

    // useEffect(() => {

    //     if (!photos || photos.length === 0) return;
    //     const timer = setInterval(() => {
    //         setActivePhoto((prev) => (prev + 1) % photos.length);
    //     }, 6000);

    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, [photos]);

    // useEffect(() => {
    //     AOS.refresh();
    // }, [activePhoto]);

    // if (errorPhotos) return <p>Errore di caricamento</p>;
    // if (loadingPhotos) return <p>Caricamento..</p>;
    // if (!photos || photos.length === 0) return <p>Nessuna foto disponibile</p>;

    return (
        <>
        <div className="page-container">
            < HeroSlideShow />
            {/* <div className="hero" key={activePhoto}>
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
            </div> */}
            
        < ServiceList /> 
            {/* <div className="services">
                {services.map((service, index) => (
                    <Link href="/servizi" className="service-card" key={service.id} data-aos="fade-up" data-aos-delay={index * 100}>
                        <p className="service-icon">{service.icon}</p>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </Link>
                ))}
            </div> */}
            
        < WorksGrid />

            {/* <div className="works-grid">
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
            </div> */}

            <Cta
             title="Facciamo grande il tuo evento"
             description="Contattaci per un preventivo o scopri chi siamo"
             primaryButton="Contattaci"
             primaryButtonHref="/contatti"
             secondaryButton="Chi Siamo"
             secondaryButtonHref="/chi-siamo"
            />
            
            {/* <section className="cta" data-aos="flip-up">
                <h2>Facciamo grande il tuo evento</h2>
                <p>Contattaci per un preventivo o scopri chi siamo</p>
                <div className="cta-buttons">
                    <Link href="/contatti" className="btn-primary">Contattaci</Link>
                    <Link href="/chi-siamo" className="btn-secondary">Chi siamo</Link>
                </div>
            </section> */}
        </div>
        </>
    );
}

export default Home;