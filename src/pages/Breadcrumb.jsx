import { Link, useLocation } from 'react-router-dom'
import { segmentToLabel } from '../breadcrumbRoutes'
import './Breadcrumb.css'

const HomeIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M3 12L12 3l9 9" /><path d="M9 21V12h6v9" />
  </svg>
)

const ChevronRight = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
    aria-hidden="true">
    <path d="M9 6l6 6-6 6" />
  </svg>
)

/**
 * Breadcrumb automático basado en useLocation().
 *
 * URL: /especialidades/doctores/dr-valeria-torres
 * →   Inicio > Especialidades > Doctores > Dr Valeria Torres
 *
 * No necesita props: lee la URL actual y la descompone en segmentos.
 */
export default function Breadcrumb() {
  const { pathname } = useLocation()

  // Divide la ruta en segmentos, descarta vacíos
  const segments = pathname.split('/').filter(Boolean)

  // Construye los ítems: [{label, to}]
  const items = [
    { label: 'Inicio', to: '/' },
    ...segments.map((seg, i) => ({
      label: segmentToLabel(seg),
      to: `/${segments.slice(0, i + 1).join('/')}`,    })),
  ]

  // Si estamos en home no mostramos la barra
  if (segments.length === 0) return null

  return (
    <nav className="breadcrumb-bar" aria-label="Ruta de navegación">
      <div className="breadcrumb-inner">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <span key={item.to} className="bc-item">
              {/* Separador (excepto antes del primer elemento) */}
              {i > 0 && (
                <span className="bc-sep">
                  <ChevronRight />
                </span>
              )}

              {/* Ícono home en el primer elemento */}
              {i === 0 && (
                <Link to={item.to} className="bc-link bc-home" aria-label="Inicio">
                  <HomeIcon />
                </Link>
              )}

              {/* Segmentos intermedios → link clicable */}
              {i > 0 && !isLast && (
                <Link to={item.to} className="bc-link">
                  {item.label}
                </Link>
              )}

              {/* Último segmento → texto plano, "estás aquí" */}
              {i > 0 && isLast && (
                <span className="bc-current" aria-current="page">
                  {item.label}
                </span>
              )}
            </span>
          )
        })}
      </div>
    </nav>
  )
}