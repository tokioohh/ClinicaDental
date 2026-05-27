import { Link } from 'react-router-dom'
import './Pages.css'

export default function Ortodoncia() {
  return (
    <section className="service-detail-page">

      {/* HERO */}
      <div className="service-hero">

        <div className="service-hero-content">

          <span className="service-tag">
            Especialidad Dental
          </span>

          <h1>
            Ortodoncia Moderna
          </h1>

          <p>
            Corregimos la alineación dental y mejoramos tu sonrisa mediante
            tratamientos modernos, cómodos y personalizados para cada paciente.
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
              <path d="M3 9h18M3 15h18M8 3v18M16 3v18"/>
            </svg>

          </div>

          <h3>¿Qué incluye?</h3>

          <ul>
            <li>Evaluación ortodóntica</li>
            <li>Brackets estéticos</li>
            <li>Alineadores invisibles</li>
            <li>Seguimiento personalizado</li>
          </ul>

        </div>

      </div>

      {/* BENEFICIOS */}
      <div className="service-section">

        <div className="section-heading">
          <span>Beneficios</span>
          <h2>¿Por qué iniciar ortodoncia?</h2>
        </div>

        <div className="benefits-grid">

          <div className="benefit-card">
            <h3>Mejora estética</h3>
            <p>
              Obtén una sonrisa más armónica y alineada con resultados visibles.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Mejor mordida</h3>
            <p>
              Corrige problemas funcionales y distribuye correctamente la presión dental.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Mayor salud oral</h3>
            <p>
              Facilita la higiene dental y reduce acumulación de placa bacteriana.
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
            <h3>Valoración inicial</h3>
            <p>
              Analizamos tu mordida y alineación mediante fotografías y radiografías.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <h3>Plan personalizado</h3>
            <p>
              Diseñamos un tratamiento adaptado a tus objetivos y necesidades.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <h3>Seguimiento continuo</h3>
            <p>
              Realizamos controles periódicos para asegurar resultados óptimos.
            </p>
          </div>

        </div>

      </div>

      {/* CTA */}
      <div className="service-cta">

        <h2>Transforma tu sonrisa con confianza</h2>

        <p>
          Agenda una valoración ortodóntica y descubre el tratamiento ideal para ti.
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