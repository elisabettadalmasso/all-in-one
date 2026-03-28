"use client"
import Link from "next/link";
import "./Navbar.css"
import { useState } from 'react'

function Navbar() {

    const [isOpen,setIsOpen] = useState(false)

    return (
        <nav className='navbar'>
            <div className="nav-left">
                {/* TODO: Optimize with Next.js Image component later */}
            <Link href="/"><img src="/logoAllioneB.png" alt="All In One" className="navbar-logo" /></Link>
            </div>
             <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`navbar-links ${isOpen? "isOpen" : ""}`}>
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/servizi" onClick={() => setIsOpen(false)}>Servizi</Link>
            <Link href="/eventi" onClick={() => setIsOpen(false)}>Eventi</Link>
            <Link href="/chi-siamo" onClick={() => setIsOpen(false)}>Chi Siamo</Link>
            <Link href="/contatti" onClick={() => setIsOpen(false)}>Contatti</Link>
            </div>
        </nav>
    )
}

export default Navbar