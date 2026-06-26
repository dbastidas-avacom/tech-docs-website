const RESOLVED = [
  ['Hero sub no visible',     'hero-sub usaba animation en vez de transition+delay. Movido a HeroBanner.css con delay 1.8s.'],
  ['Verb tags desaparecen',   'Faltaba .hero .verb.is-active .verb-tag { opacity: 1 } explícito en HeroBanner.css.'],
  ['Navbar SSR flash',        'Reemplazado CSS animation por isMounted + inline styles para evitar flash en hidratación.'],
  ['Conflictos CSS hero*',    'Reglas duplicadas en múltiples archivos. Consolidadas en HeroBanner.css únicamente.'],
  ['Static asset 404s',       'Matcher de proxy.ts no excluía Video|SVG|Images. Corrección aplicada.'],
  ['Pillar images quality',   'next/image sizes no reflejaba el tamaño renderizado real. Corregido a (max-width: 980px) 100vw, (max-width: 1280px) 50vw, 600px con quality={90}.'],
]

const KNOWN = [
  ['InfoComm 2026 cover',    'Imagen de portada del artículo pendiente de actualizar.'],
]

export default function Issues() {
  return (
    <section id="issues">
      <h1>Issues resueltos</h1>
      <p className="lead">
        Bugs corregidos durante la migración. Documentados para evitar regresiones.
      </p>

      <h2>Resueltos — {RESOLVED.length}</h2>
      <table>
        <thead>
          <tr><th>Issue</th><th>Solución aplicada</th></tr>
        </thead>
        <tbody>
          {RESOLVED.map(([issue, fix]) => (
            <tr key={issue}>
              <td>
                <span className="badge badge-green" style={{ marginRight: 8 }}>FIXED</span>
                {issue}
              </td>
              <td>{fix}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Pendientes — {KNOWN.length}</h2>
      <table>
        <thead>
          <tr><th>Issue</th><th>Detalle</th></tr>
        </thead>
        <tbody>
          {KNOWN.map(([issue, detail]) => (
            <tr key={issue}>
              <td>
                <span className="badge badge-yellow" style={{ marginRight: 8 }}>MINOR</span>
                {issue}
              </td>
              <td>{detail}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="callout callout-blue">
        Antes de agregar una nueva feature, verificar que no haya issues activos en la sección
        correspondiente. Los issues de CSS tienen prioridad porque pueden afectar a múltiples
        componentes.
      </div>
    </section>
  )
}
