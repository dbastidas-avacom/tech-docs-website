const ROUTES = [
  ['EN', '/',      '/about', '/ecosystem', '…'],
  ['ES', '/es/',   '/es/about', '/es/ecosystem', '…'],
  ['ZH', '/zh/',   '/zh/about', '/zh/ecosystem', '…'],
]

const PATTERNS = [
  ['String simple',          't("key")',                                    'Texto plano'],
  ['Rich text con HTML',     't.rich("key", { em: c => <em>{c}</em> })',   'Para <em>, <strong>, etc.'],
  ['Clave de dato en hook',  'labelKey: "namespace.label"',                'Arrays estáticos en el hook'],
  ['Plurales',               't("key", { count: n })',                     'next-intl maneja plurales'],
]

export default function I18n() {
  return (
    <section id="i18n">
      <h1>i18n y rutas</h1>
      <p className="lead">
        next-intl v4 con <code>localePrefix: "as-needed"</code>. El inglés no lleva prefijo (
        <code>/</code>), el español usa <code>/es/</code> y el chino <code>/zh/</code>.
      </p>

      <h2>Estructura de rutas</h2>
      <table>
        <thead>
          <tr><th>Locale</th><th>Raíz</th><th>About</th><th>Ecosystem</th><th></th></tr>
        </thead>
        <tbody>
          {ROUTES.map(([locale, ...paths]) => (
            <tr key={locale}>
              <td><strong>{locale}</strong></td>
              {paths.map(p => <td key={p}><code>{p}</code></td>)}
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Archivos de mensajes</h2>
      <pre><code>{`src/messages/
├── en.json   ← fuente de verdad
├── es.json   ← traducción español
└── zh.json   ← traducción chino simplificado`}</code></pre>

      <div className="callout callout-red">
        Toda clave nueva en <code>en.json</code> debe añadirse <strong>al mismo tiempo</strong> en{' '}
        <code>es.json</code> y <code>zh.json</code>. Nunca dejar claves sin traducir.
      </div>

      <h2>Patrones de uso en TSX</h2>
      <table>
        <thead>
          <tr><th>Caso</th><th>Sintaxis</th><th>Cuándo usarlo</th></tr>
        </thead>
        <tbody>
          {PATTERNS.map(([caso, sintaxis, cuando]) => (
            <tr key={caso}>
              <td>{caso}</td>
              <td><code>{sintaxis}</code></td>
              <td>{cuando}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Formato JSON para rich text</h2>
      <pre><code>{`// en.json
"hero.heading": "Conectamos el <em>futuro</em> con la educación."

// TSX
{t.rich("hero.heading", { em: chunks => <em>{chunks}</em> })}`}</code></pre>

      <h2>Patrón para arrays de datos con i18n</h2>
      <pre><code>{`// useOrganismName.ts
export const STATIC_DATA = [
  { key: "item1", labelKey: "namespace.label1" },
] as const

// OrganismName.tsx
const t = useTranslations("namespace")
{STATIC_DATA.map(item => (
  <div key={item.key}>{t(item.labelKey)}</div>
))}`}</code></pre>

      <h2>Configuración next-intl</h2>
      <pre><code>{`// src/i18n/routing.ts
export const routing = defineRouting({
  locales: ['en', 'es', 'zh'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
})`}</code></pre>
    </section>
  )
}
