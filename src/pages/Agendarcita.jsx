import './Pages.css'

export default function AgendarCita() {
  return (
    <section className="appointment-page">

      {/* HERO */}
      <div className="appointment-hero">

        <span className="service-tag">
          Agenda tu cita
        </span>

        <h1>
          Reserva una consulta dental
        </h1>

        <p>
          Completa el siguiente formulario y nuestro equipo se pondrá en
          contacto contigo para confirmar tu cita.
        </p>

      </div>

      {/* FORM */}
      <div className="appointment-wrapper">

        <form className="appointment-form">

          <div className="form-grid">

            <div className="form-group">
              <label>Nombre completo</label>
              <input
                type="text"
                placeholder="Ingresa tu nombre"
              />
            </div>

            <div className="form-group">
              <label>Correo electrónico</label>
              <input
                type="email"
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div className="form-group">
              <label>Teléfono</label>
              <input
                type="tel"
                placeholder="+52 999 999 9999"
              />
            </div>

            <div className="form-group">
              <label>Doctor</label>

              <select>
                <option>Selecciona un especialista</option>
                <option>Dra. Valeria Torres</option>
                <option>Dr. Marcos León</option>
                <option>Dra. Sofía Arrieta</option>
                <option>Dr. Renato Fuentes</option>
              </select>
            </div>

          </div>

          <div className="form-group">
            <label>Motivo de la consulta</label>

            <select>
              <option>Selecciona un motivo</option>
              <option>Limpieza Dental</option>
              <option>Endodoncia</option>
              <option>Ortodoncia</option>
              <option>Implantes</option>
              <option>Blanqueamiento</option>
              <option>Odontopediatría</option>
              <option>Valoración General</option>
            </select>
          </div>

          <div className="form-group">
            <label>Mensaje adicional</label>

            <textarea
              rows="5"
              placeholder="Describe brevemente tu consulta..."
            />
          </div>

          <button
            type="submit"
            className="appointment-btn"
          >
            Solicitar cita
          </button>

        </form>

      </div>

    </section>
  )
}