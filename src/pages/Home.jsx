import { useEffect, useState } from "react"
import "./Home.css"

function Home () {

    const [foto,setFoto] = useState([])
    const [fotoAttiva,setFotoAttiva] = useState(0)

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

return(
    <div className="hero">
        <img 
        key={fotoAttiva}
        src={foto[fotoAttiva]?.immagine} 
        alt={foto[fotoAttiva]?.titolo} 
        style={{objectPosition: foto[fotoAttiva]?.position}}/>
        <h1>{foto[fotoAttiva]?.titolo}</h1>
        
    </div>
    
)
}
export default Home
