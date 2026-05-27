import './PageTemplate.css'

/**
 * Plantilla para páginas internas.
 * El Breadcrumb ya lo pone Layout.jsx — aquí solo va el hero de página + contenido.
 */
export default function PageTemplate({ title, subtitle, children }) {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <h1 className="page-hero-title">{title}</h1>
          {subtitle && <p className="page-hero-sub">{subtitle}</p>}
        </div>
      </div>
      <div className="inner-content">
        {children}
      </div>
    </>
  )
}