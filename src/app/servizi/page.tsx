"use client"
import useFetch from "@/hooks/useFetch"
import { ServiceDetail, Brand } from "@/types/service"
import Link from "next/link"
import "./Servizi.css"
import { useState } from "react"

function Services() {
    const {data: services, loading, error} = useFetch<ServiceDetail>("/data/servicesDetail.json")
    const {data: brands} = useFetch<Brand>("/data/brand.json")

    const [activeFilter, setActiveFilter] = useState<string>("all")

    if(error) return <p>Errore di caricamento...</p>
    if(loading) return <p>Caricamento..</p>

    return(
        <div className="page-container">
            <div className="service-page">
                <h1>I Nostri Servizi</h1>
                <div className="service-complete">
    {services.map((service) => (
        <div key={service.id} className="service-card-detail">
            <h2>{service.title}</h2>
            <div className="service-content">
                <picture className="service-photo-small">
                    <source srcSet={service.photo} type="image/avif" />
                    <img
                        src={service.fallback || service.photo.replace('.avif', '.jpg')}
                        alt={service.title}
                    />
                </picture>
                <div className="service-text">
                    {service.isRental === true ?
                        <Link href="/contatti">Contattaci per un preventivo!</Link>
                        :
                        service.fullDescription
                    }
                </div>
            </div>
        </div>
    ))}
</div>
<section className="brand-section">
    <h2>I nostri brand</h2>

    <div className="brand-filter">
        <button onClick={() => setActiveFilter("all")} className={activeFilter === "all" ? "active" : ""}>Tutti</button>
        <button onClick={() => setActiveFilter("audio")} className={activeFilter === "audio" ? "active" : ""}>Audio</button>
        <button onClick={() => setActiveFilter("lights")} className={activeFilter === "lights" ? "active" : ""}>Luci</button>
        <button onClick={() => setActiveFilter("video")} className={activeFilter === "video" ? "active" : ""}>Video</button>
        <button onClick={() => setActiveFilter("structures")} className={activeFilter === "structures" ? "active" : ""}>Strutture</button>
        <button onClick={() => setActiveFilter("electricity")} className={activeFilter === "electricity" ? "active" : ""}>Distribuzione Elettrica</button>
    </div>

    <div className="brand-grid">
        {brands
            .filter(b => activeFilter === "all" || b.category === activeFilter)
            .map(b => (
                <div key={b.id} className="brand-logo">
                    <img src={b.logo} alt={b.name} />
                </div>
            ))
        }
    </div>
</section>
            </div>
        </div>
    )
    
}

export default Services