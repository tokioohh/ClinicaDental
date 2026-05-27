import { useParams, Link } from 'react-router-dom'
import './DoctorPerfil.css'

import medico1 from '../assets/Medico1.png'
import medico2 from '../assets/Medico2.png'
import medico3 from '../assets/Medico3.png'
import medico4 from '../assets/Medico4.png'

// Base de datos de perfiles clínicos detallados
const DOCTORS_DATABASE = {
  'dr-valeria-torres': {
    name: 'Dra. Valeria Torres',
    title: 'Directora Médica & Ortodoncista',
    spec: 'Ortodoncia',
    years: '12 años de experiencia',
    image: medico1,
    university: 'Egresada de la Universidad Nacional Autónoma de México (UNAM)',
    cedula: 'C.P. 8493021 · C.E. 940231',
    bio: 'La Dra. Valeria Torres es pionera en tratamientos odontológicos interdisciplinarios. Con más de una década perfeccionando sonrisas, está certificada internacionalmente en el sistema de alineadores invisibles Invisalign y se especializa en el diseño de sonrisas mínimamente invasivo.',
    focus: [
      'Ortodoncia estética e invisible (Invisalign)',
      'Ortodoncia Damon (Autoligado avanzado)',
      'Diseño de sonrisa digital y carillas de porcelana'
    ],
    schedule: 'Lunes, Miércoles y Viernes: 9:00 AM - 6:00 PM'
  },

  'dr-marcos-leon': {
    name: 'Dr. Marcos León',
    title: 'Especialista en Endodoncia',
    spec: 'Endodoncia',
    years: '9 años de experiencia',
    image: medico2,
    university: 'Egresado de la Universidad de Guadalajara (UdeG)',
    cedula: 'C.P. 7564032 · C.E. 483920',
    bio: 'El Dr. Marcos León centra su práctica en salvar piezas dentales mediante micro-endodoncia avanzada. Su enfoque clínico permite tratar conductos severamente dañados de forma rápida, eficiente y totalmente libre de dolor mediante instrumentación rotatoria automatizada.',
    focus: [
      'Tratamientos de conductos en una sola sesión',
      'Retratamientos endodónticos de alta complejidad',
      'Microcirugía apical y diagnóstico de dolor dental'
    ],
    schedule: 'Martes y Jueves: 8:00 AM - 5:00 PM · Sábados: 9:00 AM - 2:00 PM'
  },

  'dra-sofia-arrieta': {
    name: 'Dra. Sofía Arrieta',
    title: 'Odontopediatra Certificada',
    spec: 'Odontopediatría',
    years: '7 años de experiencia',
    image: medico3,
    university: 'Egresada de la Universidad Autónoma de Nuevo León (UANL)',
    cedula: 'C.P. 9382041 · C.E. 573921',
    bio: 'La Dra. Sofía Arrieta se dedica con pasión a la salud oral de los más pequeños. Su consulta destaca por la aplicación de técnicas de manejo de conducta lúdicas y psicología infantil, transformando la visita al dentista en una experiencia divertida y educativa.',
    focus: [
      'Odontología del bebé y prevención temprana',
      'Tratamientos preventivos (selladores y fluoración)',
      'Restauraciones estéticas infantiles libres de metal'
    ],
    schedule: 'Lunes a Viernes: 2:00 PM - 7:00 PM · Sábados: 9:00 AM - 1:00 PM'
  },

  'dr-renato-fuentes': {
    name: 'Dr. Renato Fuentes',
    title: 'Cirujano Maxilofacial e Implantólogo',
    spec: 'Implantología',
    years: '15 años de experiencia',
    image: medico4,
    university: 'Egresado de la Universidad Autónoma de San Luis Potosí (UASLP)',
    cedula: 'C.P. 6473829 · C.E. 384920',
    bio: 'El Dr. Renato Fuentes es un referente en cirugía constructiva e implantología de carga inmediata. Con un extenso historial quirúrgico, está especializado en la colocación de implantes de titanio en pacientes con pérdida ósea severa utilizando técnicas avanzadas de regeneración celular.',
    focus: [
      'Implantes dentales oseointegrados y carga inmediata',
      'Cirugía de terceros molares (muelas del juicio retenidas)',
      'Injertos óseos y reconstrucción maxilar'
    ],
    schedule: 'Previa Cita · Espacios quirúrgicos programados'
  }
}

export default function DoctorPerfil() {
  const { slug } = useParams()

  // Busca el doctor en base al slug de la URL
  const doctor = DOCTORS_DATABASE[slug]

  // Estado amigable de no encontrado
  if (!doctor) {
    return (
      <div className="doc-profile-not-found">
        <h2>Especialista no encontrado</h2>

        <p>
          El perfil clínico que estás intentando consultar no está disponible o cambió de dirección.
        </p>

        <Link
          to="/especialidades/doctores"
          className="btn-back-docs"
        >
          ← Volver a Nuestros Doctores
        </Link>
      </div>
    )
  }

  return (
    <div className="profile-page">

      <div className="profile-layout">

        {/* ── SIDEBAR ── */}
        <aside className="profile-sidebar">

          <div className="profile-avatar-card">

            <img
              src={doctor.image}
              alt={doctor.name}
              className="profile-doctor-image"
            />

            <span className="profile-spec-badge">
              {doctor.spec}
            </span>

            <h1 className="profile-name-main">
              {doctor.name}
            </h1>

            <p className="profile-sub-title">
              {doctor.title}
            </p>

          </div>

          <div className="profile-meta-info-box">

            <div className="meta-info-item">
              <span className="meta-info-label">
                Cédulas Profesionales
              </span>

              <span className="meta-info-value">
                {doctor.cedula}
              </span>
            </div>

            <div className="meta-info-item">
              <span className="meta-info-label">
                Horario Clínico
              </span>

              <span className="meta-info-value">
                {doctor.schedule}
              </span>
            </div>

          </div>
        </aside>

        {/* ── CONTENIDO ── */}
        <main className="profile-main-content">

          <section className="profile-section-block">

            <h2 className="profile-section-heading">
              Biografía Clínica
            </h2>

            <p className="profile-paragraph">
              {doctor.bio}
            </p>

            <p className="profile-university-tag">
              🎓 {doctor.university}
            </p>

          </section>

          <section className="profile-section-block">

            <h2 className="profile-section-heading">
              Áreas de Enfoque y Tratamientos
            </h2>

            <ul className="profile-focus-list">

              {doctor.focus.map((item, index) => (
                <li
                  key={index}
                  className="profile-focus-item"
                >
                  <span className="focus-icon-bullet">
                    ✦
                  </span>

                  {item}
                </li>
              ))}

            </ul>
          </section>

          {/* CTA */}
          <div className="profile-appointment-card">

            <div className="appointment-text-side">

              <h3>
                ¿Deseas una valoración con este especialista?
              </h3>

              <p>
                Reserva un espacio directamente.
                Evaluaremos tu caso clínico con el {doctor.name}.
              </p>

            </div>

            <Link
              to="/agendar-cita"
              className="profile-book-btn"
            >
              Agendar Cita de Valoración
            </Link>

          </div>
        </main>

      </div>
    </div>
  )
}