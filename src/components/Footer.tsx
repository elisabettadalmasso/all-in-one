"use client"
import Link from "next/link"
import "./Footer.css"
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-column">
                {/* TODO: Optimize with Next.js Image component later */}
                <img src="./logoAllioneB.png" alt="logo" />
                <h3 className="footer-tagline">Dove la tecnica diventa spettacolo</h3>
            </div>
            <div className="footer-column">
                <Link href="/">Home</Link>
                <Link href="/servizi">Servizi</Link>
                <Link href="/eventi">Eventi</Link>
                <Link href="/chi-siamo">Chi Siamo</Link>
                <Link href="/contatti">Contatti</Link>
            </div>
            <div className="footer-column">
                <a href="mailto:info@allinonesncservice.com">email: info@allinonesncservice.com</a>
                <a href="tel:+393926953740">Claudio: +39 392 695 3740</a>
                <a href="tel:+393339382155">Paolo: +39 333 938 2155</a>
                <a>P.IVA: 04047720042</a>
                <a>SDI: W7YVJK9</a>
            </div>

            <p className="footer-legal">© 2026 All In One S.n.c. — Privacy Policy | Cookie Policy</p>
        </footer>
    )
}

export default Footer