const STEPS = [
  ['git clone <repo-url> && cd avacom-website',       'Clonar el repositorio'],
  ['npm install',                                       'Instalar dependencias'],
  ['npm run dev',                                       'Iniciar el servidor de desarrollo — abre localhost:3000'],
  ['npx tsc --noEmit',                                  'Verificar TypeScript — debe retornar 0 errores'],
  ['Comparar con www.avacomworld.com',                  'Revisar la home visualmente en el navegador'],
]

export default function Onboarding() {
  return (
    <section id="onboarding">
      <h1>Onboarding</h1>
      <p className="lead">
        Guía para empezar a trabajar en el proyecto desde cero.
      </p>

      <h2>Requisitos previos</h2>
      <ul>
        <li>Node.js 20+ y npm 10+</li>
        <li>VS Code con extensiones: ESLint, Prettier, TypeScript</li>
        <li>Acceso al repositorio y a las carpetas de assets</li>
      </ul>

      <h2>Primeros pasos</h2>
      <ol className="step-list">
        {STEPS.map(([cmd, desc]) => (
          <li key={cmd}>
            <div>
              <code>{cmd}</code>
              <p style={{ marginTop: 4, marginBottom: 0, fontSize: '0.88rem' }}>{desc}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2>Antes de hacer un commit</h2>
      <div className="callout callout-yellow">
        Correr <code>npx tsc --noEmit</code> y verificar que no haya errores TypeScript.
        No hacer commit con errores de tipo.
      </div>

      <h2>Flujo de trabajo</h2>
      <pre><code>{`# 1. Crear branch desde main
git checkout -b feat/nombre-de-la-feature

# 2. Desarrollar — npm run dev en localhost:3000

# 3. Verificar TypeScript
npx tsc --noEmit

# 4. Comparar visualmente con el sitio original

# 5. Commit y push
git add .
git commit -m "feat: descripción clara del cambio"
git push origin feat/nombre-de-la-feature`}</code></pre>

      <h2>Convenciones de commit</h2>
      <table>
        <thead>
          <tr><th>Prefijo</th><th>Cuándo usarlo</th></tr>
        </thead>
        <tbody>
          {[
            ['feat:', 'Nueva funcionalidad o sección'],
            ['fix:', 'Corrección de bug'],
            ['css:', 'Solo cambios de estilos'],
            ['i18n:', 'Cambios en archivos de mensajes'],
            ['refactor:', 'Reorganización sin cambio de comportamiento'],
          ].map(([prefix, when]) => (
            <tr key={prefix}>
              <td><code>{prefix}</code></td>
              <td>{when}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
