/**
 * Mapa de rutas → etiquetas para el Breadcrumb.
 * Las rutas dinámicas (ej: :slug) se resuelven en el componente
 * Breadcrumb con el hook useParams + este mapa como fallback.
 */
export const ROUTE_LABELS = {
  '':               'Inicio',
  'servicios':      'Servicios',
  'endodoncia':     'Endodoncia',
  'limpieza':       'Limpieza Dental',
  'especialidades': 'Especialidades',
  'doctores':       'Doctores',
  'nosotros':       'Nosotros',
  'agendar-cita':   'Agendar Cita',
}

/**
 * Convierte un segmento de ruta en etiqueta legible.
 * Si no está en el mapa, capitaliza y reemplaza guiones.
 */
export function segmentToLabel(segment) {
  if (ROUTE_LABELS[segment] !== undefined) return ROUTE_LABELS[segment]
  return segment
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}