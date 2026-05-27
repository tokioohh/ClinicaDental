import { Link } from 'react-router-dom'
import './Doctores.css'

import medico1 from '../assets/Medico1.png'
import medico2 from '../assets/Medico2.png'
import medico3 from '../assets/Medico3.png'
import medico4 from '../assets/Medico4.png'

const DOCTORS_DATA = [
  {
    name: 'Dra. Valeria Torres',
    title: 'Directora Médica & Ortodoncista',
    spec: 'Ortodoncia',
    years: '12 años exp.',
    slug: 'dr-valeria-torres',
    image: medico1,
    bio: 'Especialista en técnicas avanzadas de alineación dental y sistemas de ortodoncia invisible Invisalign.'
  },

  {
    name: 'Dr. Marcos León',
    title: 'Especialista en Endodoncia',
    spec: 'Endodoncia',
    years: '9 años exp.',
    slug: 'dr-marcos-leon',
    image: medico2,
    bio: 'Experto en tratamientos de conductos de alta complejidad utilizando micro-instrumentación rotatoria.'
  },

  {
    name: 'Dra. Sofía Arrieta',
    title: 'Odontopediatra Certificada',
    spec: 'Odontopediatría',
    years: '7 años exp.',
    slug: 'dra-sofia-arrieta',
    image: medico3,
    bio: 'Dedicada al cuidado de la salud dental infantil, creando experiencias divertidas y libres de estrés.'
  },

  {
    name: 'Dr. Renato Fuentes',
    title: 'Cirujano Maxilofacial e Implantólogo',
    spec: 'Implantología',
    years: '15 años exp.',
    slug: 'dr-renato-fuentes',
    image: medico4,
    bio: 'Especialista en rehabilitación oral completa, colocación de implantes de titanio y cirugía reconstructiva.'
  }
]

export default function Doctores() {
  return (
    <div className="docs-page">

      {/* Encabezado */}
      <header className="docs-header">
        <span className="docs-eyebrow">Cuerpo Médico</span>

        <h1 className="docs-title">
          Nuestros Especialistas
        </h1>

        <p className="docs-subtitle-page">
          Conoce al equipo de profesionales certificados dedicados a cuidar de tu salud oral.
          Cada uno de nuestros doctores cuenta con postgrados y especializaciones de primer nivel.
        </p>
      </header>

      {/* Grid de Doctores */}
      <div className="docs-grid-container">

        {DOCTORS_DATA.map((doc) => (

          <div key={doc.slug} className="doc-full-card">

            <div className="doc-visual-pane">

              <img
                src={doc.image}
                alt={doc.name}
                className="doc-large-image"
              />

              <span className="doc-spec-tag">
                {doc.spec}
              </span>

            </div>

            <div className="doc-details-pane">

              <div>
                <h2 className="doc-card-name">
                  {doc.name}
                </h2>

                <p className="doc-card-title-text">
                  {doc.title}
                </p>

                <p className="doc-card-bio">
                  {doc.bio}
                </p>
              </div>

              <div className="doc-card-footer">

                <div className="doc-experience">

                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>

                  <span>{doc.years}</span>
                </div>

                <Link
                  to={`/especialidades/doctores/${doc.slug}`}
                  className="doc-profile-btn"
                >
                  Ver Perfil Clínico →
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sección Informativa */}
      <footer className="docs-guarantee-banner">

        <div className="guarantee-item">
          <span className="guarantee-icon">✦</span>

          <h3>Educación Continua</h3>

          <p>
            Todo nuestro staff se actualiza anualmente en congresos internacionales.
          </p>
        </div>

        <div className="guarantee-vertical-line" />

        <div className="guarantee-item">
          <span className="guarantee-icon">✦</span>

          <h3>Materiales Premium</h3>

          <p>
            Utilizamos exclusivamente insumos e implantes certificados de alta gama mundial.
          </p>
        </div>

      </footer>
    </div>
  )
}