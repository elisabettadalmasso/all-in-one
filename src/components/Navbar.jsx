import { Link } from 'react-router-dom'
import "./Navbar.css"
import { useState } from 'react'

function Navbar() {

    const [isOpen,setIsOpen] = useState(false)

    return (
        <nav>
            <Link to="/"><img src="/logoAllioneB.png" alt="All In One" className="navbar-logo" /></Link>

             <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`navbar-links ${isOpen? "isOpen" : ""}`}>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/servizi" onClick={() => setIsOpen(false)}>Servizi</Link>
            <Link to="/eventi" onClick={() => setIsOpen(false)}>Eventi</Link>
            <Link to="/chi-siamo" onClick={() => setIsOpen(false)}>Chi Siamo</Link>
            <Link to="/contatti" onClick={() => setIsOpen(false)}>Contatti</Link>
            </div>
        </nav>
    )
}

export default Navbar