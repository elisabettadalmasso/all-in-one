import useFetch from "../useFetch"
import { Link } from "react-router-dom"
import "./Servizi.css"
import { useState } from "react";

function Servizi() {

    const { dati: servizi, loading, errore } = useFetch("/serviziDettaglio.json");
    const { dati: brand, loading: loadingBrand } = useFetch("/brand.json");

    const [filtroAttivo, setFiltroAttivo] = useState("tutti")

    if (errore) return <p>Errore di caricamento..</p>
    if (loading) return <p>Caricamento..</p>
    return (
        <div className="servizi-page">
            <h1>I Nostri Servizi</h1>
            <div className="servizi-completo">
                {servizi.map((servizio) => (
                    <div key={servizio.id} className="servizio-card-dettaglio">
                        <h2>{servizio.titolo}</h2>
                        <div className="servizio-content">
                            <picture className="servizio-foto-piccola">
                                <source srcSet={servizio.foto} type={"image/avif"} />
                                <img
                                    src={servizio.fallback || servizio.foto.replace('.avif', '.jpg')}
                                    alt={servizio.titolo}
                                />
                            </picture>
                            <div className="servizio-testo">
                                {servizio.isNoleggio === true ?
                                    <Link to="/contatti">Contattaci per un preventivo!</Link>
                                    :
                                    servizio.descrizioneCompleta
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <section className="brand-section">
                <h2>I nostri brand</h2>

                <div className="brand-filtri">
                    <button onClick={() => setFiltroAttivo("tutti")} className={filtroAttivo === "tutti" ? "active" : ""}>Tutti</button>
                    <button onClick={() => setFiltroAttivo("audio")} className={filtroAttivo === "audio" ? "active" : ""}>Audio</button>
                    <button onClick={() => setFiltroAttivo("luci")} className={filtroAttivo === "luci" ? "active" : ""}>Luci</button>
                    <button onClick={() => setFiltroAttivo("video")} className={filtroAttivo === "video" ? "active" : ""}>Video</button>
                    <button onClick={() => setFiltroAttivo("strutture")} className={filtroAttivo === "strutture" ? "active" : ""}>Strutture</button>
                    <button onClick={() => setFiltroAttivo("elettricita")} className={filtroAttivo === "elettricita" ? "active" : ""}>Distribuzione Elettrica</button>
                </div>

                <div className="brand-grid">
                    {brand
                        .filter(b => filtroAttivo === "tutti" || b.categoria === filtroAttivo)
                        .map(b => (
                            <div key={b.id} className="brand-logo">
                                <img src={b.logo} alt={b.nome} />
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    );
}
export default Servizi