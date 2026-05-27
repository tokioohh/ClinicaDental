// ─────────────────────────────────────────────────────────────────────────────
// Servicios.jsx
// ─────────────────────────────────────────────────────────────────────────────
import { Link } from 'react-router-dom'
import PageTemplate from './PageTemplate'

export function Servicios() {
  const items = [
    { label: 'Limpieza Dental', to: '/servicios/limpieza',   desc: 'Profilaxis y prevención.' },
    { label: 'Endodoncia',      to: '/servicios/endodoncia', desc: 'Tratamiento de conductos.' },
  ]
  return (
    <PageTemplate title="Servicios" subtitle="Todos nuestros tratamientos dentales.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px,1fr))', gap: '1.25rem' }}>
        {items.map(i => (
          <Link key={i.to} to={i.to} style={{ background: '#fff', borderRadius: 16, padding: '1.5rem', border: '1px solid rgba(74,124,111,.12)', textDecoration: 'none', display: 'block', transition: 'transform .18s', color: 'var(--charcoal)' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', marginBottom: 4 }}>{i.label}</div>
            <div style={{ fontSize: '.85rem', color: 'var(--mist)', fontWeight: 300 }}>{i.desc}</div>
          </Link>
        ))}
      </div>
    </PageTemplate>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Endodoncia.jsx
// ─────────────────────────────────────────────────────────────────────────────
export function Endodoncia() {
  return (
    <PageTemplate title="Endodoncia" subtitle="Tratamiento de conductos radiculares.">
      <div className="placeholder-card">
        <strong>Endodoncia</strong>
        Ruta activa: <code>Inicio › Servicios › Endodoncia</code><br />
        Aquí irá el contenido detallado del tratamiento.
      </div>
    </PageTemplate>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Limpieza.jsx
// ─────────────────────────────────────────────────────────────────────────────
export function Limpieza() {
  return (
    <PageTemplate title="Limpieza Dental" subtitle="Profilaxis y prevención dental.">
      <div className="placeholder-card">
        <strong>Limpieza Dental</strong>
        Ruta activa: <code>Inicio › Servicios › Limpieza Dental</code><br />
        Aquí irá el contenido detallado del tratamiento.
      </div>
    </PageTemplate>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Especialidades.jsx
// ─────────────────────────────────────────────────────────────────────────────
export function Especialidades() {
  return (
    <PageTemplate title="Especialidades" subtitle="Áreas médicas de nuestra clínica.">
      <div className="placeholder-card">
        <strong>Especialidades</strong>
        Ruta activa: <code>Inicio › Especialidades</code>
      </div>
    </PageTemplate>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Doctores.jsx
// ─────────────────────────────────────────────────────────────────────────────
const DOCTORS_DATA = [
  { name: 'Dra. Valeria Torres', title: 'Ortodoncista',          initials: 'VT', slug: 'dr-valeria-torres',  spec: 'Ortodoncia',      years: '12 años' },
  { name: 'Dr. Marcos León',     title: 'Endodoncista',          initials: 'ML', slug: 'dr-marcos-leon',     spec: 'Endodoncia',      years: '9 años'  },
  { name: 'Dra. Sofía Arrieta',  title: 'Odontopediatra',        initials: 'SA', slug: 'dra-sofia-arrieta',  spec: 'Odontopediatría', years: '7 años'  },
  { name: 'Dr. Renato Fuentes',  title: 'Cirujano Maxilofacial', initials: 'RF', slug: 'dr-renato-fuentes',  spec: 'Implantología',   years: '15 años' },
]

export { DOCTORS_DATA }

export function Doctores() {
  return (
    <PageTemplate title="Doctores" subtitle="Nuestro equipo de especialistas.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px,1fr))', gap: '1.25rem' }}>
        {DOCTORS_DATA.map(d => (
          <Link key={d.slug} to={`/especialidades/doctores/${d.slug}`}
            style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(74,124,111,.12)', textDecoration: 'none', display: 'block', transition: 'transform .18s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ height: 120, background: 'var(--sage-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--sage-dark)', opacity: .7 }}>{d.initials}</span>
            </div>
            <div style={{ padding: '1rem 1.25rem' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--charcoal)', marginBottom: 2 }}>{d.name}</div>
              <div style={{ fontSize: '.8rem', color: 'var(--mist)', fontWeight: 300 }}>{d.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </PageTemplate>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// DoctorPerfil.jsx  ← usa useParams para leer :slug
// Ruta: /especialidades/doctores/:slug
// Breadcrumb: Inicio › Especialidades › Doctores › Nombre del doctor
// ─────────────────────────────────────────────────────────────────────────────
import { useParams } from 'react-router-dom'

export function DoctorPerfil() {
  const { slug } = useParams()
  const doctor = DOCTORS_DATA.find(d => d.slug === slug)

  if (!doctor) {
    return (
      <PageTemplate title="Doctor no encontrado" subtitle="">
        <div className="placeholder-card">No se encontró el perfil solicitado.</div>
      </PageTemplate>
    )
  }

  return (
    <PageTemplate
      title={doctor.name}
      subtitle={`${doctor.title} · ${doctor.spec}`}
    >
      {/*
        El Breadcrumb automático leerá la URL:
        /especialidades/doctores/dr-valeria-torres
        y construirá: Inicio › Especialidades › Doctores › Dr Valeria Torres

        segmentToLabel('dr-valeria-torres') → 'Dr Valeria Torres'
        Si prefieres el nombre exacto, añade el slug al mapa ROUTE_LABELS
        en breadcrumbRoutes.js:
        'dr-valeria-torres': 'Dra. Valeria Torres'
      */}
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ width: 160, height: 160, borderRadius: 16, background: 'var(--sage-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', color: 'var(--sage-dark)', opacity: .7 }}>{doctor.initials}</span>
        </div>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--charcoal)', marginBottom: 4 }}>{doctor.name}</h2>
          <p style={{ color: 'var(--sage-dark)', fontWeight: 500, marginBottom: 8 }}>{doctor.title}</p>
          <p style={{ color: 'var(--mist)', fontSize: '.9rem', fontWeight: 300, marginBottom: 4 }}>Especialidad: {doctor.spec}</p>
          <p style={{ color: 'var(--mist)', fontSize: '.9rem', fontWeight: 300 }}>Experiencia: {doctor.years}</p>
        </div>
      </div>
    </PageTemplate>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Nosotros.jsx
// ─────────────────────────────────────────────────────────────────────────────
export function Nosotros() {
  return (
    <PageTemplate title="Nosotros" subtitle="Conoce más sobre Dental Clínica.">
      <div className="placeholder-card">
        <strong>Nosotros</strong>
        Ruta activa: <code>Inicio › Nosotros</code>
      </div>
    </PageTemplate>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// AgendarCita.jsx
// ─────────────────────────────────────────────────────────────────────────────
export function AgendarCita() {
  return (
    <PageTemplate title="Agendar Cita" subtitle="Reserva tu consulta fácilmente.">
      <div className="placeholder-card">
        <strong>Formulario de cita</strong>
        Ruta activa: <code>Inicio › Agendar Cita</code><br />
        Aquí irá el formulario de agendamiento.
      </div>
    </PageTemplate>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// NotFound.jsx
// ─────────────────────────────────────────────────────────────────────────────
export function NotFound() {
  return (
    <PageTemplate title="Página no encontrada" subtitle="">
      <div className="placeholder-card">
        <strong>404</strong>
        La ruta solicitada no existe.
      </div>
    </PageTemplate>
  )
}