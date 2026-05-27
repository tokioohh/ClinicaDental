import { Outlet } from 'react-router-dom'
import Header from './Header'
import Breadcrumb from './Breadcrumb' // Si usas el componente de migas de pan

export default function Layout() {
  return (
    <div className="app-layout">
      {/* El Header se mantiene fijo en todas las vistas */}
      <Header />
      
      {/* La barra de navegación interna (Breadcrumbs) */}
      <Breadcrumb />

      {/* El contenedor principal que inyecta dinámicamente la página activa */}
      <main className="main-content">
        <Outlet /> 
      </main>

      {/* Aquí puedes agregar un Footer si lo deseas */}
    </div>
  )
}