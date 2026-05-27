import { Link } from 'react-router-dom'
import './Servicios.css'

const SERVICIOS_DETALLE = [
  {
    slug: 'limpieza',
    name: 'Limpieza Dental Profesional',
    eyebrow: 'Prevención',
    desc: 'Profilaxis avanzada con ultrasonido para eliminar sarro, placa bacteriana y manchas superficiales.',
    price: 'Desde $45',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>
      </svg>
    )
  },

  {
    slug: 'endodoncia',
    name: 'Endodoncia Avanzada',
    eyebrow: 'Conservación',
    desc: 'Tratamiento de conductos especializado para salvar piezas dentales dañadas o infectadas.',
    price: 'Desde $180',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3C7 3 5 4.5 5 7c0 1.5.5 3 1 4.5S6.5 16 7 19c.3 1.5.8 2 1.5 2s1.2-.8 1.5-2l1-3.5 1 3.5c.3 1.2.8 2 1.5 2s1.2-.5 1.5-2c.5-3 .5-5.5 1-7.5S19 8.5 19 7c0-2.5-2-4-4-4-1 0-2 .5-3 1C11 3.5 10 3 9 3z"/>
      </svg>
    )
  },

  {
    slug: 'ortodoncia',
    name: 'Ortodoncia Integral',
    eyebrow: 'Estética y Función',
    desc: 'Brackets y alineadores invisibles para corregir la posición dental de forma cómoda.',
    price: 'Evaluación previa',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9h18M3 15h18M8 3v18M16 3v18"/>
      </svg>
    )
  },

  {
    slug: 'implantes',
    name: 'Implantes Dentales',
    eyebrow: 'Rehabilitación',
    desc: 'Recupera piezas dentales perdidas mediante implantes permanentes y estéticos.',
    price: 'Desde $850',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v12M8 8l4-5 4 5"/>
        <path d="M7 19c0-1.7 2.2-3 5-3s5 1.3 5 3"/>
      </svg>
    )
  },

  {
    slug: 'blanqueamiento',
    name: 'Blanqueamiento Dental',
    eyebrow: 'Estética',
    desc: 'Aclara tu sonrisa con tratamientos profesionales seguros y efectivos.',
    price: 'Desde $120',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L8 8H3l4 3-1.5 6L12 14l6.5 3L17 11l4-3h-5z"/>
      </svg>
    )
  },

  {
    slug: 'odontopediatria',
    name: 'Odontopediatría',
    eyebrow: 'Especialidad Infantil',
    desc: 'Cuidado dental especializado para niños en un entorno amigable y seguro.',
    price: 'Desde $60',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/>
      </svg>
    )
  }
]
export default function Servicios() {
  return (
    <div className="services-page">
      {/* Cabecera */}
      <header className="services-main-header">
        <span className="services-eyebrow-top">Tratamientos Clínicos</span>
        <h1 className="services-title-main">Servicios Odontológicos</h1>
        <p className="services-subtitle-main">
          Ofrecemos soluciones dentales integrales con un enfoque mínimamente invasivo. 
          Haz clic en nuestros tratamientos principales para conocer su proceso a fondo.
        </p>
      </header>

      {/* Listado de Servicios Estilo Bloques Premium */}
      <div className="services-list-wrapper">
        {SERVICIOS_DETALLE.map((servicio) => {
          // Si el slug es un enlace interno de rutas anidadas (/servicios/limpieza)
          const isInternalRoute = servicio.slug !== '#';
          const targetUrl = isInternalRoute ? `/servicios/${servicio.slug}` : '/especialidades';

          return (
            <div key={servicio.name} className="service-row-card">
              <div className="service-row-left">
                <div className="service-row-icon-box">
                  {servicio.icon}
                </div>
                <div className="service-row-text">
                  <span className="service-row-tag">{servicio.eyebrow}</span>
                  <h2>{servicio.name}</h2>
                  <p>{servicio.desc}</p>
                </div>
              </div>

              <div className="service-row-right">
                <div className="service-price-tag">
                  <span className="price-label">Inversión estimada</span>
                  <span className="price-value">{servicio.price}</span>
                </div>
                <Link to={targetUrl} className="service-row-action-btn">
                  {isInternalRoute ? 'Ver detalles del proceso →' : 'Ver área de especialidad →'}
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tarjeta Informativa de Diagnóstico */}
      <div className="services-info-banner">
        <div className="info-banner-content">
          <h3>¿Necesitas un plan de tratamiento personalizado?</h3>
          <p>Todos nuestros procedimientos mayores requieren una valoración clínica previa con radiografía digital para garantizar un diagnóstico 100% certero.</p>
        </div>
        <Link to="/agendar-cita" className="services-banner-btn">
          Agendar Valoración Inicial
        </Link>
      </div>
    </div>
  )
}