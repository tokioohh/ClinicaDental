import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

import medico1 from '../assets/Medico1.png'
import medico2 from '../assets/Medico2.png'
import medico3 from '../assets/Medico3.png'
import medico4 from '../assets/Medico4.png'

import clinica1 from "../assets/ImagenClinica1.webp";
import clinica2 from "../assets/ImagenClinica2.webp";
import clinica3 from "../assets/ImagenClinica3.webp";

const CLINIC_IMAGES = [
  clinica1,
  clinica2,
  clinica3,
]

const SERVICES = [
  {
    name: 'Limpieza Dental',
    desc: 'Profilaxis profesional para eliminar sarro y manchas.',
    to: '/servicios/limpieza',
    icon: 'clean',
  },
  {
    name: 'Endodoncia',
    desc: 'Tratamiento de conductos con técnicas modernas y sin dolor.',
    to: '/servicios/endodoncia',
    icon: 'endo',
  },
  {
    name: 'Ortodoncia',
    desc: 'Alineación dental con brackets y alineadores invisibles.',
    to: '/servicios/ortodoncia',
    icon: 'ortho',
  },
  {
    name: 'Implantes',
    desc: 'Recupera piezas dentales con implantes permanentes.',
    to: '/servicios/implantes',
    icon: 'implant',
  },
  {
    name: 'Blanqueamiento',
    desc: 'Aclara tu sonrisa con resultados visibles desde la primera sesión.',
    to: '/servicios/blanqueamiento',
    icon: 'white',
  },
  {
    name: 'Odontopediatría',
    desc: 'Atención especializada y amigable para niños.',
    to: '/servicios/odontopediatria',
    icon: 'kids',
  },
]

const DOCTORS = [
  {
    name: 'Dra. Valeria Torres',
    title: 'Ortodoncista',
    spec: 'Ortodoncia',
    years: '12 años exp.',
    slug: 'dr-valeria-torres',
    image: medico1,
  },
  {
    name: 'Dr. Marcos León',
    title: 'Endodoncista',
    spec: 'Endodoncia',
    years: '9 años exp.',
    slug: 'dr-marcos-leon',
    image: medico2,
  },
  {
    name: 'Dra. Sofía Arrieta',
    title: 'Odontopediatra',
    spec: 'Odontopediatría',
    years: '7 años exp.',
    slug: 'dra-sofia-arrieta',
    image: medico3,
  },
  {
    name: 'Dr. Renato Fuentes',
    title: 'Cirujano Maxilofacial',
    spec: 'Implantología',
    years: '15 años exp.',
    slug: 'dr-renato-fuentes',
    image: medico4,
  },
]

const PHILOSOPHY_TABS = {
  estres: {
    title: 'Espacio Cero Estrés',
    phrase:
      'Atenuación acústica y aromaterapia para que olvides que estás en el dentista.',
    tag: 'Bienestar',
  },

  diseno: {
    title: 'Tratamiento Humano',
    phrase:
      'Sin prisas. Diseñamos planes respetando tus tiempos y sensibilidad dental.',
    tag: 'Artesanal',
  },

  bioseguridad: {
    title: 'Máxima Seguridad',
    phrase:
      'Protocolos de esterilización de grado hospitalario para tu total tranquilidad.',
    tag: 'Certificado',
  },
}

const ServiceIcon = ({ type }) => {
  const paths = {
    clean: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      </>
    ),

    endo: (
      <path d="M9 3C7 3 5 4.5 5 7c0 1.5.5 3 1 4.5S6.5 16 7 19c.3 1.5.8 2 1.5 2s1.2-.8 1.5-2l1-3.5 1 3.5c.3 1.2.8 2 1.5 2s1.2-.5 1.5-2c.5-3 .5-5.5 1-7.5S19 8.5 19 7c0-2.5-2-4-4-4-1 0-2 .5-3 1C11 3.5 10 3 9 3z" />
    ),

    ortho: (
      <>
        <path d="M3 9h18M3 15h18M8 3v18M16 3v18" />
      </>
    ),

    implant: (
      <>
        <path d="M12 3v12M8 8l4-5 4 5" />
        <path d="M7 19c0-1.7 2.2-3 5-3s5 1.3 5 3" />
      </>
    ),

    white: (
      <path d="M12 2L8 8H3l4 3-1.5 6L12 14l6.5 3L17 11l4-3h-5z" />
    ),

    kids: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      </>
    ),
  }

  return (
    <div className="service-icon">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--sage-dark)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[type]}
      </svg>
    </div>
  )
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('estres')
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev =>
        prev === CLINIC_IMAGES.length - 1 ? 0 : prev + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* ── TOPBAR ───────────────────────────────────────── */}
      <section className="topbar">
        <div className="topbar-content">
          <span>Lun–Sáb · 8:00am — 7:00pm</span>
          <span>📞 (653) 123-4567</span>
        </div>
      </section>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero">

        {/* Carrusel Fondo */}
        <div className="hero-slider">

          {CLINIC_IMAGES.map((image, index) => (
            <div
              key={index}
              className={`hero-slide ${
                currentImage === index ? 'active' : ''
              }`}
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          ))}

        </div>

        {/* Overlay */}
        <div className="hero-overlay" />

        <div className="hero-inner">

          {/* LEFT */}
          <div className="hero-content">

            <div className="hero-badge">
              <span className="badge-dot" />
              Tu bienestar es nuestra prioridad
            </div>

            <h1 className="hero-title">
              Tu salud dental,
              <br />
              en <em>manos expertas.</em>
            </h1>

            <p className="hero-sub">
              Más de 15 años ofreciendo tratamientos odontológicos de alta calidad.
              Creamos un entorno clínico cálido y moderno diseñado para cuidar de ti
              sin dolor.
            </p>

            <div className="hero-actions">
              <Link to="/agendar-cita" className="btn-primary">
                Agendar mi cita
              </Link>

              <Link to="/servicios" className="btn-ghost">
                Ver servicios
              </Link>
            </div>

            {/* Dots slider */}
            <div className="hero-slider-dots">

              {CLINIC_IMAGES.map((_, index) => (
                <button
                  key={index}
                  className={`hero-dot ${
                    currentImage === index ? 'active' : ''
                  }`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}

            </div>

          </div>

          {/* RIGHT CARD */}
          <div className="hero-card philosophy-box">

            <span className="philosophy-tag">
              {PHILOSOPHY_TABS[activeTab].tag}
            </span>

            <h3 className="philosophy-title">
              {PHILOSOPHY_TABS[activeTab].title}
            </h3>

            <p className="philosophy-phrase">
              “{PHILOSOPHY_TABS[activeTab].phrase}”
            </p>

            <div className="philosophy-selectors">

              <button
                className={`philosophy-dot ${
                  activeTab === 'estres' ? 'active' : ''
                }`}
                onClick={() => setActiveTab('estres')}
              >
                Cero Estrés
              </button>

              <button
                className={`philosophy-dot ${
                  activeTab === 'diseno' ? 'active' : ''
                }`}
                onClick={() => setActiveTab('diseno')}
              >
                Cuidado Humano
              </button>

              <button
                className={`philosophy-dot ${
                  activeTab === 'bioseguridad' ? 'active' : ''
                }`}
                onClick={() => setActiveTab('bioseguridad')}
              >
                Seguridad
              </button>

            </div>

            <div className="hero-card-divider" />

            <div className="doctor-preview">

              <img
                src={medico1}
                alt="Dra. Valeria Torres"
                className="doctor-photo"
              />

              <div>
                <div className="doc-name">
                  Dra. Valeria Torres
                </div>

                <div className="doc-role">
                  Directora Médica · Ortodoncista
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section className="section">

        <div className="section-header">
          <p className="section-eyebrow">
            Lo que ofrecemos
          </p>

          <h2 className="section-title">
            Nuestros servicios dentales
          </h2>

          <p className="section-sub">
            Tecnología de vanguardia para cada tratamiento
          </p>
        </div>

        <div className="services-grid">

          {SERVICES.map(s => (
            <Link
              key={s.name}
              to={s.to}
              className="service-card"
            >

              <ServiceIcon type={s.icon} />

              <div className="service-name">
                {s.name}
              </div>

              <div className="service-desc">
                {s.desc}
              </div>

              <span className="service-link">
                Ver más

                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M2 7h10M7 2l5 5-5 5"/>
                </svg>

              </span>

            </Link>
          ))}

        </div>
      </section>

      {/* ── DOCTORS ─────────────────────────────────────── */}
      <section className="section alt">

        <div className="section-header">
          <p className="section-eyebrow">
            Nuestro equipo
          </p>

          <h2 className="section-title">
            Especialistas a tu disposición
          </h2>

          <p className="section-sub">
            Profesionales certificados con años de experiencia
          </p>
        </div>

        <div className="doctors-grid">

          {DOCTORS.map(d => (
            <Link
              key={d.slug}
              to={`/especialidades/doctores/${d.slug}`}
              className="doctor-card"
            >

              <div className="doctor-avatar-wrap">

                <img
                  src={d.image}
                  alt={d.name}
                  className="doctor-photo-card"
                />

                <div className="doctor-specialty-badge">
                  {d.spec}
                </div>

              </div>

              <div className="doctor-info">

                <div className="doctor-name">
                  {d.name}
                </div>

                <div className="doctor-title-text">
                  {d.title}
                </div>

                <div className="doctor-meta">

                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>

                  {d.years}

                </div>

              </div>

            </Link>
          ))}

        </div>
      </section>

      {/* ── APPOINTMENT ─────────────────────────────────── */}
      <section className="home-appointment-preview">

        <div className="appointment-preview-content">

          <span className="section-eyebrow">
            Reserva tu consulta
          </span>

          <h2 className="section-title">
            Agenda una cita en minutos
          </h2>

          <p className="section-sub">
            Nuestro equipo médico está listo para atenderte con un diagnóstico
            profesional y tratamientos personalizados.
          </p>

          <Link
            to="/agendar-cita"
            className="btn-primary"
          >
            Reservar cita
          </Link>

        </div>

      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <div className="contact-strip">

        <h2>
          ¿Listo para sonreír con confianza?
        </h2>

        <p>
          Agenda tu consulta inicial sin costo. Te atendemos con gusto.
        </p>

        <Link
          to="/agendar-cita"
          className="contact-btn"
        >
          Reservar cita gratuita
        </Link>

      </div>
    </>
  )
}
