import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/servizi">Servizi</Link>
            <Link to="/eventi">Eventi</Link>
            <Link to="/chi-siamo">Chi Siamo</Link>
            <Link to="/contatti">Contatti</Link>
        </nav>
    )
}

export default Navbar