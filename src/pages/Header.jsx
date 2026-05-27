import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.png' // ajusta la ruta si es diferente
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Especialidades', to: '/especialidades' },
  { label: 'Doctores', to: '/especialidades/doctores' },
  { label: 'Nosotros', to: '/nosotros' },

]

  // Evita scroll cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="main-header">
      <div className="header-inner">

        {/* LOGO */}
        <Link to="/" className="header-logo" onClick={closeMenu}>
          
          <img 
            src={logo} 
            alt="Logo Clínica Dental" 
            className="logo-image"
          />

          <div className="logo-texts">
            <span className="logo-title">Dental Clínica</span>
            <span className="logo-subtitle">
              Especialistas en tu sonrisa
            </span>
          </div>
        </Link>

        {/* NAV DESKTOP */}
        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/agendar-cita"
            className="btn-cta"
            onClick={closeMenu}
          >
            Agendar cita
          </Link>
        </nav>

        {/* BOTÓN HAMBURGUESA */}
        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  )
}