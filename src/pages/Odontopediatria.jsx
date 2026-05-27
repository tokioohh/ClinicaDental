import { Link } from 'react-router-dom'
import './Pages.css'

export default function Odontopediatria() {
  return (
    <section className="service-detail-page">

      {/* HERO */}
      <div className="service-hero">

        <div className="service-hero-content">

          <span className="service-tag">
            Especialidad Infantil
          </span>

          <h1>
            Odontopediatría
          </h1>

          <p>
            Brindamos atención dental especializada para niños en un ambiente
            cálido, seguro y amigable, promoviendo hábitos saludables desde
            temprana edad.
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
              <circle cx="12" cy="8" r="4"/>
              <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/>
            </svg>

          </div>

          <h3>Servicios infantiles</h3>

          <ul>
            <li>Limpiezas infantiles</li>
            <li>Aplicación de flúor</li>
            <li>Control preventivo</li>
            <li>Educación dental</li>
          </ul>

        </div>

      </div>

      {/* BENEFICIOS */}
      <div className="service-section">

        <div className="section-heading">
          <span>Beneficios</span>
          <h2>¿Por qué es importante la odontopediatría?</h2>
        </div>

        <div className="benefits-grid">

          <div className="benefit-card">
            <h3>Prevención temprana</h3>
            <p>
              Detectamos y prevenimos problemas dentales desde edades tempranas.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Experiencia positiva</h3>
            <p>
              Creamos un ambiente amigable para reducir miedo y ansiedad.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Hábitos saludables</h3>
            <p>
              Enseñamos técnicas de higiene oral adaptadas para niños.
            </p>
          </div>

        </div>

      </div>

      {/* PROCESO */}
      <div className="service-section alt-bg">

        <div className="section-heading">
          <span>Atención Infantil</span>
          <h2>¿Cómo cuidamos a los pequeños?</h2>
        </div>

        <div className="process-steps">

          <div className="step-card">
            <div className="step-number">01</div>
            <h3>Evaluación inicial</h3>
            <p>
              Revisamos el desarrollo dental y la salud oral del niño.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <h3>Prevención y limpieza</h3>
            <p>
              Realizamos limpiezas suaves y aplicamos tratamientos preventivos.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <h3>Seguimiento continuo</h3>
            <p>
              Supervisamos el crecimiento dental y reforzamos hábitos saludables.
            </p>
          </div>

        </div>

      </div>

      {/* CTA */}
      <div className="service-cta">

        <h2>Una sonrisa sana desde pequeños</h2>

        <p>
          Agenda una valoración infantil y acompaña el crecimiento dental de tus hijos.
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