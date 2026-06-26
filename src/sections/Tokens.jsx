const TOKENS = [
  {
    group: 'Colores',
    items: [
      ['--color-bg',           '#0f1117',                    'Fondo principal'],
      ['--color-text',         '#e8eaf0',                    'Texto principal'],
      ['--color-accent',       '#E5262B',                    'Rojo AVACOM'],
      ['--color-accent-hover', '#c91f23',                    'Hover del acento'],
      ['--color-accent-soft',  'rgba(229,38,43,0.18)',       'Acento suave (focus rings)'],
      ['--color-text-muted',   'rgba(232,234,240,0.55)',     'Texto secundario'],
      ['--color-line',         'rgba(232,234,240,0.10)',     'Separadores'],
      ['--color-glass',        'rgba(252,254,255,0.06)',     'Tarjetas con efecto vidrio'],
    ],
  },
  {
    group: 'Tipografía',
    items: [
      ['--font-display', 'Inter Tight',    'Títulos y encabezados'],
      ['--font-sans',    'Inter',          'Cuerpo y UI'],
      ['--font-mono',    'JetBrains Mono', 'Código'],
      ['--font-script',  'Caveat',         'Énfasis informal'],
    ],
  },
  {
    group: 'Radios',
    items: [
      ['--r-sm',   '6px',    ''],
      ['--r-md',   '10px',   ''],
      ['--r-lg',   '16px',   'Tarjetas'],
      ['--r-xl',   '24px',   'Modales grandes'],
      ['--r-pill', '999px',  'Pills y botones redondeados'],
    ],
  },
  {
    group: 'Layout',
    items: [
      ['--container-max',    '1280px', 'Ancho máximo del contenedor'],
      ['--space-side',       '64px',   'Padding lateral desktop'],
      ['--space-side-mobile','24px',   'Padding lateral móvil'],
    ],
  },
  {
    group: 'Easing',
    items: [
      ['--ease-smooth', 'cubic-bezier(0.22,1,0.36,1)', 'Movimientos suaves'],
      ['--ease-expo',   'cubic-bezier(0.16,1,0.3,1)',  'Entradas con ímpetu'],
    ],
  },
  {
    group: 'Sombras',
    items: [
      ['--shadow-sm', '0 2px 8px rgba(0,0,0,0.18)',  ''],
      ['--shadow-md', '0 4px 24px rgba(0,0,0,0.28)', ''],
      ['--shadow-lg', '0 8px 48px rgba(0,0,0,0.42)', ''],
    ],
  },
]

export default function Tokens() {
  return (
    <section id="tokens">
      <h1>Tokens de diseño</h1>
      <p className="lead">
        Definidos en <code>avacom-shared.css :root</code>. Referenciar siempre mediante
        propiedades CSS custom. Nunca hardcodear colores, fuentes ni espaciados en los
        archivos CSS de componentes.
      </p>

      {TOKENS.map(group => (
        <div key={group.group}>
          <h2>{group.group}</h2>
          <table>
            <thead>
              <tr><th>Variable</th><th>Valor</th><th>Uso</th></tr>
            </thead>
            <tbody>
              {group.items.map(([variable, value, uso]) => (
                <tr key={variable}>
                  <td><code>{variable}</code></td>
                  <td><code>{value}</code></td>
                  <td>{uso}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <h2>Regla</h2>
      <div className="callout callout-red">
        Nunca escribir un valor de color, fuente o radio directamente en un <code>.css</code> de componente.
        Usar siempre la variable correspondiente: <code>var(--color-accent)</code>,{' '}
        <code>var(--font-sans)</code>, etc.
      </div>
    </section>
  )
}
