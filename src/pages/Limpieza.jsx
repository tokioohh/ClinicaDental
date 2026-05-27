import { Link } from 'react-router-dom'
import './Pages.css'

export default function Limpieza() {
  return (
    <section className="service-detail-page">

      {/* HERO */}
      <div className="service-hero">

        <div className="service-hero-content">

          <span className="service-tag">
            Cuidado Preventivo
          </span>

          <h1>
            Limpieza Dental Profesional
          </h1>

          <p>
            Mantén una sonrisa saludable con nuestra limpieza dental avanzada.
            Eliminamos sarro, placa bacteriana y manchas acumuladas para prevenir
            enfermedades y mejorar tu salud oral.
          </p>

          <div className="service-actions">

            <Link
              to="/agendar-cita"
              className="primary-btn"
            >
              Agendar limpieza
            </Link>

            <Link
              to="/servicios"
              className="secondary-btn"
            >
              Ver más tratamientos
            </Link>

          </div>

        </div>

        {/* SIDEBAR CARD */}
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
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>
            </svg>

          </div>

          <h3>¿Qué incluye?</h3>

          <ul>
            <li>Eliminación de sarro</li>
            <li>Pulido dental</li>
            <li>Profilaxis profesional</li>
            <li>Evaluación preventiva</li>
          </ul>

        </div>

      </div>

      {/* BENEFICIOS */}
      <div className="service-section">

        <div className="section-heading">
          <span>Beneficios</span>
          <h2>¿Por qué es importante una limpieza dental?</h2>
        </div>

        <div className="benefits-grid">

          <div className="benefit-card">
            <h3>Previene enfermedades</h3>
            <p>
              Reduce el riesgo de caries, gingivitis y enfermedades periodontales.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Mejora tu sonrisa</h3>
            <p>
              Eliminamos manchas superficiales para devolver brillo natural a tus dientes.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Aliento fresco</h3>
            <p>
              Eliminamos bacterias acumuladas que producen mal olor oral.
            </p>
          </div>

        </div>

      </div>

      {/* PROCESO */}
      <div className="service-section alt-bg">

        <div className="section-heading">
          <span>Proceso Clínico</span>
          <h2>¿Cómo realizamos la limpieza?</h2>
        </div>

        <div className="process-steps">

          <div className="step-card">
            <div className="step-number">01</div>
            <h3>Evaluación inicial</h3>
            <p>
              Revisamos el estado general de tu salud oral antes del procedimiento.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <h3>Eliminación de sarro</h3>
            <p>
              Utilizamos ultrasonido dental para remover placa y sarro acumulado.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <h3>Pulido y protección</h3>
            <p>
              Pulimos la superficie dental y aplicamos recomendaciones preventivas.
            </p>
          </div>

        </div>

      </div>

      {/* CTA */}
      <div className="service-cta">

        <h2>Cuida tu sonrisa con prevención profesional</h2>

        <p>
          Agenda tu limpieza dental y mantén una salud oral óptima durante todo el año.
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