import { Link } from 'react-router-dom'
import './Pages.css'

export default function Endodoncia() {
  return (
    <section className="service-detail-page">

      {/* HERO */}
      <div className="service-hero">
        <div className="service-hero-content">

          <span className="service-tag">
            Conservación Dental
          </span>

          <h1>
            Tratamiento de Endodoncia
          </h1>

          <p>
            Salvamos piezas dentales dañadas o infectadas mediante tratamientos
            de conductos modernos, precisos y completamente seguros.
          </p>

          <div className="service-actions">
            <Link
              to="/agendar-cita"
              className="primary-btn"
            >
              Agendar valoración
            </Link>

            <Link
              to="/servicios"
              className="secondary-btn"
            >
              Ver más tratamientos
            </Link>
          </div>
        </div>

        {/* CARD LATERAL */}
        <div className="service-side-card">
          <div className="side-card-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 3C7 3 5 4.5 5 7c0 1.5.5 3 1 4.5S6.5 16 7 19c.3 1.5.8 2 1.5 2s1.2-.8 1.5-2l1-3.5 1 3.5c.3 1.2.8 2 1.5 2s1.2-.5 1.5-2c.5-3 .5-5.5 1-7.5S19 8.5 19 7c0-2.5-2-4-4-4-1 0-2 .5-3 1C11 3.5 10 3 9 3z"/>
            </svg>
          </div>

          <h3>¿Qué trata la endodoncia?</h3>

          <ul>
            <li>Dolor intenso</li>
            <li>Infección dental</li>
            <li>Sensibilidad extrema</li>
            <li>Inflamación del nervio</li>
          </ul>
        </div>
      </div>

      {/* BENEFICIOS */}
      <div className="service-section">
        <div className="section-heading">
          <span>Beneficios</span>
          <h2>¿Por qué realizar una endodoncia?</h2>
        </div>

        <div className="benefits-grid">

          <div className="benefit-card">
            <h3>Alivia el dolor</h3>
            <p>
              Eliminamos la infección interna del diente y reducimos molestias
              inmediatamente.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Conserva tu pieza dental</h3>
            <p>
              Evita la extracción del diente manteniendo su funcionalidad natural.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Procedimiento seguro</h3>
            <p>
              Utilizamos anestesia moderna y técnicas avanzadas para máxima comodidad.
            </p>
          </div>

        </div>
      </div>

      {/* PROCESO */}
      <div className="service-section alt-bg">

        <div className="section-heading">
          <span>Proceso Clínico</span>
          <h2>¿Cómo funciona el tratamiento?</h2>
        </div>

        <div className="process-steps">

          <div className="step-card">
            <div className="step-number">01</div>
            <h3>Diagnóstico</h3>
            <p>
              Evaluamos la infección mediante revisión clínica y radiografía digital.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <h3>Limpieza interna</h3>
            <p>
              Eliminamos el tejido dañado y desinfectamos cuidadosamente el conducto.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <h3>Sellado final</h3>
            <p>
              Sellamos el conducto para proteger el diente y evitar nuevas infecciones.
            </p>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="service-cta">
        <h2>Recupera tu salud dental sin dolor</h2>

        <p>
          Agenda una valoración profesional y recibe un diagnóstico personalizado.
        </p>

        <Link
          to="/agendar-cita"
          className="primary-btn"
        >
          Reservar consulta
        </Link>
      </div>

    </section>
  )
}