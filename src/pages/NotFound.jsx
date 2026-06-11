import { Link } from 'react-router-dom'
import Header from '../pages/Header'
import './NotFound.css'
import toothImg from '../assets/dental_tooth_icon_149293.webp'

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="page-404">
        {/* Tooth + 404 */}
        <div className="card-404">
          <div className="tooth-stack" aria-hidden="true">
  <span className="num-bg">4</span>
  <img src={toothImg} alt="" className="tooth-svg" />
  <span className="num-bg">4</span>
</div>
<div></div>
          {/* Badge */}
          <div className="badge-404">
            <span className="badge-dot" />
            Error 404
          </div>

          <h1 className="title-404">Esta página no existe</h1>
          <p className="sub-404">
            El enlace que buscas se perdió en el camino, como una muela que ya
            no está. Pero no te preocupes, podemos llevarte a donde necesitas ir.
          </p>

          {/* Botones principales */}
          <div className="actions-404">
            <Link to="/" className="btn-404-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true">
                <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
                <path d="M9 21V12h6v9"/>
              </svg>
              Ir al inicio
            </Link>
            <Link to="/agendar-cita" className="btn-404-ghost">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Agendar cita
            </Link>
          </div>

          {/* Quick links */}
          <div className="divider-404" />
          <p className="quick-label">O visita alguna sección</p>
          <nav className="quick-links" aria-label="Páginas principales">
            <Link to="/servicios"     className="quick-link">Servicios</Link>
            <Link to="/especialidades" className="quick-link">Especialidades</Link>
            <Link to="/especialidades/doctores" className="quick-link">Doctores</Link>
            <Link to="/nosotros"      className="quick-link">Nosotros</Link>
          </nav>
        </div>
      </main>
    </>
  )
}