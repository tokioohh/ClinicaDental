import { Link } from 'react-router-dom'
import './Pages.css'

export default function Implantes() {
  return (
    <section className="service-detail-page">

      {/* HERO */}
      <div className="service-hero">

        <div className="service-hero-content">

          <span className="service-tag">
            Rehabilitación Oral
          </span>

          <h1>
            Implantes Dentales
          </h1>

          <p>
            Recupera tu sonrisa con implantes dentales seguros, estéticos y
            permanentes diseñados para devolver funcionalidad y confianza.
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

        {/* CARD */}
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
              <path d="M12 3v12M8 8l4-5 4 5"/>
              <path d="M7 19c0-1.7 2.2-3 5-3s5 1.3 5 3"/>
            </svg>

          </div>

          <h3>¿Qué incluye?</h3>

          <ul>
            <li>Valoración clínica</li>
            <li>Implantes de titanio</li>
            <li>Rehabilitación estética</li>
            <li>Seguimiento postoperatorio</li>
          </ul>

        </div>

      </div>

      {/* BENEFICIOS */}
      <div className="service-section">

        <div className="section-heading">
          <span>Beneficios</span>
          <h2>¿Por qué elegir implantes dentales?</h2>
        </div>

        <div className="benefits-grid">

          <div className="benefit-card">
            <h3>Resultados permanentes</h3>
            <p>
              Recupera piezas dentales perdidas con una solución duradera y segura.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Aspecto natural</h3>
            <p>
              Los implantes se integran perfectamente con tu sonrisa y mordida.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Mayor confianza</h3>
            <p>
              Habla, come y sonríe nuevamente con total seguridad y comodidad.
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
              Evaluamos tu estructura ósea mediante estudios y radiografías digitales.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <h3>Colocación del implante</h3>
            <p>
              Insertamos el implante de titanio de forma precisa y mínimamente invasiva.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <h3>Rehabilitación estética</h3>
            <p>
              Colocamos la corona dental final para restaurar estética y función.
            </p>
          </div>

        </div>

      </div>

      {/* CTA */}
      <div className="service-cta">

        <h2>Recupera tu sonrisa con seguridad</h2>

        <p>
          Agenda una valoración profesional y descubre la mejor solución para ti.
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