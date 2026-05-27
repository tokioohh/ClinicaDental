import { Link } from 'react-router-dom'
import './Nosotros.css'

export default function Nosotros() {
  return (
    <div className="about-page">
      {/* ── HERO DE BIENVENIDA ── */}
      <header className="about-header">
        <span className="about-eyebrow">Nuestra Historia</span>
        <h1 className="about-title">Odontología de alta gama con calidez humana</h1>
        <p className="about-subtitle-page">
          Fundada bajo la premisa de cambiar la experiencia de ir al dentista. Combinamos 
          tecnología de vanguardia con un entorno relajante diseñado para tu bienestar.
        </p>
      </header>

      {/* ── SECCIÓN DIVIDIDA: MANIFESTO ── */}
      <section className="about-manifesto-section">
        <div className="manifesto-visual">
          <div className="manifesto-badge-circle">
            <span>15+</span>
            <p>Años cuidándote</p>
          </div>
        </div>
        
        <div className="manifesto-text">
          <h2>Un concepto diferente de salud dental</h2>
          <p>
            Creemos que una sonrisa sana no debe construirse a base de experiencias estresantes o 
            dolorosas. En nuestra clínica, cada detalle —desde la música ambiental hasta la 
            atenuación visual de nuestros gabinetes— está pensado para disminuir la ansiedad clínica.
          </p>
          <p>
            Nuestro enfoque es estrictamente interdisciplinario. Esto significa que no verás a un 
            médico general intentando realizar un tratamiento de ortodoncia avanzada; cada caso es 
            derivado y supervisado minuciosamente por el especialista certificado de esa rama específica.
          </p>
        </div>
      </section>

      {/* ── SECCIÓN CARDINAL: VALORES CORPORATIVOS ── */}
      <section className="about-values-section">
        <div className="values-header">
          <h2>Los pilares de nuestra clínica</h2>
          <p>La ética médica y el perfeccionismo estético guían cada consulta.</p>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <span className="value-icon">✦</span>
            <h3>Ética y Transparencia</h3>
            <p>Te explicamos con claridad y honestidad cada diagnóstico mediante cámaras intraorales. No sugerimos tratamientos innecesarios.</p>
          </div>
          
          <div className="value-card">
            <span className="value-icon">✦</span>
            <h3>Bioseguridad Estricta</h3>
            <p>Contamos con protocolos de esterilización de grado hospitalario autoclave, garantizando espacios 100% seguros.</p>
          </div>

          <div className="value-card">
            <span className="value-icon">✦</span>
            <h3>Innovación Mínima</h3>
            <p>Priorizamos técnicas mínimamente invasivas para conservar la mayor cantidad de estructura dental natural posible.</p>
          </div>
        </div>
      </section>

      {/* ── BANNER INFERIOR DE ACCIÓN ── */}
      <div className="about-cta-banner">
        <h2>Experimenta la odontología boutique</h2>
        <p>Permítenos diseñar un plan preventivo o restaurador a la medida de tus expectativas.</p>
        <Link to="/agendar-cita" className="about-btn-cta">
          Conocer la Clínica
        </Link>
      </div>
    </div>
  )
}