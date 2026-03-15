import { useEffect, useState } from "react"
import "./Home.css"

function Home () {

    const [foto,setFoto] = useState([])
    const [fotoAttiva,setFotoAttiva] = useState(0)

    const [servizi,setServizi] = useState([])

    const [lavori, setLavori] = useState([])

useEffect(() => {
    async function scambiaHero() {
        const trans = await fetch("hero.json")
        const res = await trans.json()
        setFoto(res)
    }
    scambiaHero()
},[])

useEffect(() => {
    const timer = setInterval(() => {
        setFotoAttiva(prev => (prev + 1) % foto.length)
    }, 6000);
    return() => clearInterval(timer)
},[foto])

useEffect(() => {
    async function serviziCard() {
        const serv = await fetch("servizi.json")
        const servRes = await serv.json()
        setServizi(servRes)
    }
    serviziCard()
},[])


useEffect(() => {
    async function nsLavori() {
        const lav = await fetch("lavori.json")
        const lavRes = await lav.json()
        setLavori(lavRes)
    }
    nsLavori()
}, [])

return(
    <>
    <div className="hero">
        <img 
        key={fotoAttiva}
        src={foto[fotoAttiva]?.immagine} 
        alt={foto[fotoAttiva]?.titolo} 
        style={{objectPosition: foto[fotoAttiva]?.position}}/>
        <h1>{foto[fotoAttiva]?.titolo}</h1>
        
    </div>
    <div className="servizi">
    {servizi.map((servizio) => (
        <div className="servizi-card" key={servizio.id}>
            <p className="servizi-icona">{servizio.icona}</p>
            <h2>{servizio.titolo}</h2>
            <p>{servizio.descrizione}</p>
        </div>
    ))}
    </div>
    <div className="lavori-grid">
        {lavori.map((lavoro) => (
            <div key={lavoro.id} className="lavoro-card">
            <img src={lavoro.foto} alt={lavoro.titolo}  style={{objectPosition: lavoro.position}}/>
            <div className="lavoro-overlay">
                <p>{lavoro.titolo}</p>
                </div>
            </div>
        ))}
    </div>
</>
)
}
export default Home
