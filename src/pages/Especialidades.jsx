import { Link } from 'react-router-dom'
import './Especialidades.css'

const ESPECIALIDADES_DATA = [
  {
    id: 'ortodoncia',
    name: 'Ortodoncia Avanzada',
    subtitle: 'Alineación y Estética',
    desc: 'Corrección de la posición dental y problemas de mordida mediante brackets tradicionales, cerámicos y alineadores invisibles de última generación.',
    treatments: ['Brackets Autoligados', 'Invisalign / Alineadores', 'Ortodoncia Interceptiva'],
    slugDoctor: 'dr-valeria-torres',
    doctorName: 'Dra. Valeria Torres'
  },
  {
    id: 'endodoncia',
    name: 'Endodoncia de Precisión',
    subtitle: 'Conservación Dental',
    desc: 'Especialistas en salvar piezas dentales dañadas o infectadas, eliminando el dolor desde el tejido interno mediante instrumentación rotatoria automatizada.',
    treatments: ['Tratamiento de Conductos', 'Retratamiento Endodóntico', 'Cirugía Apical'],
    slugDoctor: 'dr-marcos-leon',
    doctorName: 'Dr. Marcos León'
  },
  {
    id: 'odontopediatria',
    name: 'Odontopediatría',
    subtitle: 'Cuidado Infantil',
    desc: 'Atención odontológica adaptada para bebés, niños y adolescentes en un ambiente cálido, lúdico y de absoluta confianza para evitar el miedo al dentista.',
    treatments: ['Selladores de Fisuras', 'Pulpotomías', 'Prevención y Fluoración'],
    slugDoctor: 'dra-sofia-arrieta',
    doctorName: 'Dra. Sofía Arrieta'
  },
  {
    id: 'implantologia',
    name: 'Implantología y Cirugía',
    subtitle: 'Restauración Permanente',
    desc: 'Sustitución de piezas dentales perdidas con raíces de titanio de alta biocompatibilidad y coronas estéticas que devuelven la función masticatoria completa.',
    treatments: ['Implantes Unitarios', 'Carga Inmediata', 'Injertos Óseos'],
    slugDoctor: 'dr-renato-fuentes',
    doctorName: 'Dr. Renato Fuentes'
  }
]

export default function Especialidades() {
  return (
    <div className="spec-page">
      {/* Encabezado de la Sección */}
      <header className="spec-header">
        <span className="spec-eyebrow">Áreas Clínicas</span>
        <h1 className="spec-title">Especialidades Odontológicas</h1>
        <p className="spec-subtitle-page">
          Contamos con departamentos especializados y profesionales certificados para ofrecerte 
          soluciones interdisciplinarias bajo los más altos estándares de salud dental.
        </p>
      </header>

      {/* Rejilla de Especialidades */}
      <div className="spec-grid">
        {ESPECIALIDADES_DATA.map((spec) => (
          <div key={spec.id} className="spec-card">
            <div className="spec-card-content">
              <span className="spec-card-tag">{spec.subtitle}</span>
              <h2 className="spec-card-name">{spec.name}</h2>
              <p className="spec-card-desc">{spec.desc}</p>
              
              {/* Tratamientos incluidos */}
              <div className="spec-treatments">
                <p className="treatments-title">Tratamientos comunes:</p>
                <ul className="treatments-list">
                  {spec.treatments.map((t, index) => (
                    <li key={index} className="treatment-item">
                      <span className="bullet-gold">✦</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bloque de enlace inferior al especialista */}
            <div className="spec-footer-link">
              <div className="spec-doc-info">
                <span className="doc-label">Especialista a cargo:</span>
                <Link to={`/especialidades/doctores/${spec.slugDoctor}`} className="doc-redirect">
                  {spec.doctorName} →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Banner de Cierre (Llamada a la Acción) */}
      <div className="spec-cta-box">
        <h3>¿No estás seguro de qué especialidad necesitas?</h3>
        <p>Agenda una consulta de diagnóstico general y nuestros doctores evaluarán tu caso de forma integral.</p>
        <Link to="/agendar-cita" className="spec-btn-cta">
          Solicitar Diagnóstico Inicial
        </Link>
      </div>
    </div>
  )
}