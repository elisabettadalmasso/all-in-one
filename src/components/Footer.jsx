import { Link } from "react-router-dom"
import "./Footer.css"
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-colonna">
                <img src="./logoAllioneB.png" alt="logo" />
                <h3 className="footer-tagline">Dove la tecnica diventa spettacolo</h3>
            </div>
            <div className="footer-colonna">
                <Link to="/">Home</Link>
                <Link to="/servizi">Servizi</Link>
                <Link to="/eventi">Eventi</Link>
                <Link to="/chi-siamo">Chi Siamo</Link>
                <Link to="/contatti">Contatti</Link>
            </div>
            <div className="footer-colonna">
                <p>email: info@allinonesncservice.com</p>
                <p>Claudio: +39 392 695 3740</p>
                <p>Paolo: +39 333 938 2155</p>
                <p>P.IVA: 04047720042</p>
                <p>SDI: W7YVJK9</p>
            </div>

            <p className="footer-legal">© 2026 All In One S.n.c. — Privacy Policy | Cookie Policy</p>
        </footer>
    )
}

export default Footer