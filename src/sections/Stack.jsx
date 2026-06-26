const STACK = [
  ['Framework',    'Next.js 15',          'App Router, SSR, file-based routing'],
  ['Lenguaje',     'TypeScript 5',        'Estricto. Sin any en ningún archivo.'],
  ['i18n',         'next-intl v4',        "localePrefix: 'as-needed'. EN=/, ES=/es/, ZH=/zh/"],
  ['Estilos',      'CSS puro',            'Un .css por componente. Sin Tailwind. Sin !important.'],
  ['Animaciones',  'CSS keyframes',       'Equivalente 1:1 a las animaciones GSAP del sitio original.'],
  ['Scroll suave', 'Lenis',               'duration: 1.15, smoothWheel: true. Envuelto en SmoothScroll.'],
  ['Imágenes',     'next/image',          'fill + sizes en todos los Image con fill. quality={90} en pilares.'],
  ['Fuentes',      'next/font (Google)',  'Inter Tight (display), Inter (sans), JetBrains Mono, Caveat.'],
  ['Runtime',      'Node.js 22',          'arm64 en Lambda; local: cualquier Node 20+.'],
  ['Linter',       'ESLint + TypeScript', 'npx tsc --noEmit debe retornar 0 errores antes de cada commit.'],
]

const CMDS = [
  ['npm run dev',         'Servidor de desarrollo en localhost:3000'],
  ['npm run build',       'Build de producción'],
  ['npm run start',       'Servidor de producción local'],
  ['npx tsc --noEmit',    'Verificación TypeScript sin compilar'],
]

export default function Stack() {
  return (
    <section id="stack">
      <h1>Stack tecnológico</h1>
      <p className="lead">
        Todo el stack del frontend. Cada elección tiene una razón; no cambiar sin discutirlo.
      </p>

      <table>
        <thead>
          <tr><th>Tecnología</th><th>Versión / Lib</th><th>Notas</th></tr>
        </thead>
        <tbody>
          {STACK.map(([tech, lib, note]) => (
            <tr key={tech}>
              <td>{tech}</td>
              <td><code>{lib}</code></td>
              <td>{note}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Versiones de Node</h2>
      <p>
        Localmente se recomienda Node 20 LTS o superior. Lambda usa Node 22 arm64.
        Usar <code>.nvmrc</code> o Volta para fijar la versión del equipo.
      </p>

      <h2>Comandos npm</h2>
      <table>
        <thead>
          <tr><th>Comando</th><th>Descripción</th></tr>
        </thead>
        <tbody>
          {CMDS.map(([cmd, desc]) => (
            <tr key={cmd}>
              <td><code>{cmd}</code></td>
              <td>{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
