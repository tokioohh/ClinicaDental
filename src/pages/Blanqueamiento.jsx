import { Link } from 'react-router-dom'
import './Pages.css'

export default function Blanqueamiento() {
  return (
    <section className="service-detail-page">

      {/* HERO */}
      <div className="service-hero">

        <div className="service-hero-content">

          <span className="service-tag">
            Estética Dental
          </span>

          <h1>
            Blanqueamiento Dental
          </h1>

          <p>
            Ilumina tu sonrisa con tratamientos seguros, modernos y visibles
            desde la primera sesión realizados por especialistas.
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
              <path d="M12 2L8 8H3l4 3-1.5 6L12 14l6.5 3L17 11l4-3h-5z"/>
            </svg>

          </div>

          <h3>Beneficios</h3>

          <ul>
            <li>Resultados rápidos</li>
            <li>Procedimiento seguro</li>
            <li>Sin desgaste dental</li>
            <li>Mejora estética inmediata</li>
          </ul>

        </div>

      </div>

      {/* BENEFICIOS */}
      <div className="service-section">

        <div className="section-heading">
          <span>Resultados</span>
          <h2>¿Por qué realizar un blanqueamiento?</h2>
        </div>

        <div className="benefits-grid">

          <div className="benefit-card">
            <h3>Sonrisa más brillante</h3>
            <p>
              Aclara el tono dental y mejora la apariencia general de tu sonrisa.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Procedimiento profesional</h3>
            <p>
              Utilizamos materiales seguros que protegen el esmalte dental.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Resultados visibles</h3>
            <p>
              Observa cambios notorios desde las primeras sesiones clínicas.
            </p>
          </div>

        </div>

      </div>

      {/* PROCESO */}
      <div className="service-section alt-bg">

        <div className="section-heading">
          <span>Proceso Clínico</span>
          <h2>¿Cómo realizamos el tratamiento?</h2>
        </div>

        <div className="process-steps">

          <div className="step-card">
            <div className="step-number">01</div>
            <h3>Evaluación inicial</h3>
            <p>
              Revisamos tu salud oral y el tono actual de tus dientes.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <h3>Aplicación clínica</h3>
            <p>
              Aplicamos agentes blanqueadores profesionales de forma segura.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <h3>Resultados finales</h3>
            <p>
              Obtienes una sonrisa más blanca y luminosa con apariencia natural.
            </p>
          </div>

        </div>

      </div>

      {/* CTA */}
      <div className="service-cta">

        <h2>Haz que tu sonrisa destaque</h2>

        <p>
          Agenda una valoración estética y descubre el tono ideal para tu sonrisa.
        </p>

        <Link
          to="/agendar-cita"
          className="primary-btn"
        >
          Reservar cita
        </Link>

      </div>

    </section>
  )
}