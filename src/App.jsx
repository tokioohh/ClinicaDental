import { Routes, Route } from 'react-router-dom'

// Importaciones corregidas apuntando estrictamente a la carpeta /pages
import Layout from './pages/Layout'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Endodoncia from './pages/Endodoncia'
import Limpieza from './pages/Limpieza'
import Especialidades from './pages/Especialidades'
import Doctores from './pages/Doctores'
import DoctorPerfil from './pages/DoctorPerfil'
import Nosotros from './pages/Nosotros'
import Ortodoncia from './pages/Ortodoncia'
import Implantes from './pages/Implantes'
import Blanqueamiento from './pages/Blanqueamiento'
import Odontopediatria from './pages/Odontopediatria'
import AgendarCita from './pages/Agendarcita'
export default function App() {
  return (
    <Routes>
      {/* Layout envuelve todas las páginas: Header + Breadcrumb + Outlet (Contenido) + Footer */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        
        <Route path="servicios">
          <Route index element={<Servicios />} />
          <Route path="endodoncia" element={<Endodoncia />} />
          <Route path="limpieza" element={<Limpieza />} />
          <Route path="ortodoncia" element={<Ortodoncia />} />
<Route path="implantes" element={<Implantes />} />
<Route path="blanqueamiento" element={<Blanqueamiento />} />
<Route path="odontopediatria" element={<Odontopediatria />} />
        </Route>

        <Route path="especialidades">
          <Route index element={<Especialidades />} />
          <Route path="doctores">
            <Route index element={<Doctores />} />
            <Route path=":slug" element={<DoctorPerfil />} />
          </Route>
        </Route>

        <Route path="nosotros" element={<Nosotros />} />
        <Route path="agendar-cita" element={<AgendarCita />} />
      </Route>
      
    </Routes>
  )
}