const PAGES = [
  { url: '/',                                    status: 'PASS',  issues: 'Ninguno' },
  { url: '/about',                               status: 'PASS',  issues: 'Ninguno' },
  { url: '/ecosystem',                           status: 'PASS',  issues: 'Ninguno' },
  { url: '/impact',                              status: 'PASS',  issues: 'Ninguno' },
  { url: '/newsroom',                            status: 'PASS',  issues: 'Ninguno' },
  { url: '/contact',                             status: 'PASS',  issues: 'Teléfono actualizado a +57 (1) 601 8000. directMeta3 corregido.' },
  { url: '/support',                             status: 'PASS',  issues: 'Ninguno' },
  { url: '/careers',                             status: 'PASS',  issues: 'Ninguno' },
  { url: '/learn',                               status: 'PASS',  issues: 'Ninguno' },
  { url: '/legal',                               status: 'PASS',  issues: 'Ninguno' },
  { url: '/newsroom/infocomm-2025',              status: 'PASS',  issues: 'Página creada. Contenido completo.' },
  { url: '/newsroom/infocomm-2026',              status: 'MINOR', issues: 'Imagen de portada pendiente de actualizar.' },
  { url: '/newsroom/ise-2025-announcement',      status: 'PASS',  issues: 'Ninguno' },
  { url: '/newsroom/ise-2025-recap',             status: 'PASS',  issues: 'Ninguno' },
  { url: '/newsroom/armenia-classroom-modernization', status: 'PASS', issues: 'Ruta ES configurada.' },
  { url: '/guides/*',                            status: 'PASS',  issues: '4 guías. Link corregido a i18n navigation.' },
  { url: '/glossary/*',                          status: 'PASS',  issues: '7 términos. Link corregido a i18n navigation.' },
  { url: '/landing',                             status: 'PASS',  issues: 'Ninguno' },
]

const STATUS_CLASS = {
  PASS:  'audit-pass',
  MINOR: 'audit-minor',
  MAJOR: 'audit-major',
}

export default function Audit() {
  const pass  = PAGES.filter(p => p.status === 'PASS').length
  const minor = PAGES.filter(p => p.status === 'MINOR').length
  const major = PAGES.filter(p => p.status === 'MAJOR').length

  return (
    <section id="audit">
      <h1>Auditoría</h1>
      <p className="lead">
        Auditoría de contenido y corrección de bugs en curso.
      </p>

      <div className="info-grid">
        <div className="info-card">
          <h3>Total páginas</h3>
          <p style={{ fontSize: '2rem', fontWeight: 800 }}>{PAGES.length}</p>
        </div>
        <div className="info-card">
          <h3>PASS</h3>
          <p style={{ fontSize: '2rem', fontWeight: 800, color: '#2ecc8a' }}>{pass}</p>
        </div>
        <div className="info-card">
          <h3>MINOR</h3>
          <p style={{ fontSize: '2rem', fontWeight: 800, color: '#f3c701' }}>{minor}</p>
        </div>
        <div className="info-card">
          <h3>MAJOR</h3>
          <p style={{ fontSize: '2rem', fontWeight: 800, color: '#e5262b' }}>{major}</p>
        </div>
      </div>

      <table>
        <thead>
          <tr><th>URL</th><th>Estado</th><th>Issues</th></tr>
        </thead>
        <tbody>
          {PAGES.map(p => (
            <tr key={p.url} className={STATUS_CLASS[p.status]}>
              <td><code>{p.url}</code></td>
              <td>{p.status}</td>
              <td>{p.issues}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
