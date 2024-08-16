import React from 'react'
import './Header.css'
import logo_header from '../assets/logo.png'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <>
            <Link to="/" id="logo_header"><img src={logo_header} alt="Logo Edu Holding Group" draggable="false"/></Link>
            <header>
                <nav>
                    <ul>
                        <li><Link className="nav_button" to="/productos">Productos</Link></li>
                        <li><Link className="nav_button" to="/nosotros">Nosotros</Link></li>
                        <li><Link className="nav_button" to="/capacitaciones">Capacitaciones</Link></li>
                        <li><Link className="nav_button" to="noticias">Noticias</Link></li>
                        <li><Link className="nav_button" to="/contactanos">Contáctanos</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header