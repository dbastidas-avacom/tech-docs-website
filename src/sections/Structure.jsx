const ASSETS = [
  ['Imágenes locales', 'src/app/assets/Images/',  'import como módulo, usar .src'],
  ['Videos',           'public/Video/',            '"/Video/ruta/archivo.mp4"'],
  ['SVGs',             'public/SVG/',              '"/SVG/archivo.svg"'],
  ['Imágenes remotas', 'CDN externo',              'hostname en next.config.ts remotePatterns'],
]

const FILES = ['.tsx', '.ts', '.css', '.json', '.jpg', '.jpeg', '.png', '.svg', '.mp4']

export default function Structure() {
  return (
    <section id="structure">
      <h1>Estructura del proyecto</h1>
      <p className="lead">
        Todo el código fuente vive en <code>avacom-website/src/</code>. No hay páginas fuera de App Router.
      </p>

      <pre><code>{`src/
├── app/
│   ├── layout.tsx              ← root layout: fuentes, CSS global, ScrollProgress, SmoothScroll
│   └── [locale]/
│       ├── layout.tsx          ← NextIntlClientProvider
│       └── page.tsx            ← compone todos los organismos en orden
├── components/
│   ├── atoms/
│   │   ├── ArrowIcon/
│   │   ├── CloseIcon/
│   │   ├── Counter/            ← contador animado, IntersectionObserver threshold 0.4
│   │   ├── HeroBgSlide/
│   │   ├── ScrollProgress/     ← barra roja fija, z-index 99999, scaleX en scroll
│   │   ├── SmoothScroll/       ← Lenis, duration 1.15, smoothWheel true
│   │   └── VerbIndicator/
│   ├── molecules/
│   │   ├── HeroBg/
│   │   ├── HeroIndicators/
│   │   ├── LangSwitch/
│   │   ├── NavLinks/
│   │   ├── SinglePillar/
│   │   ├── VerbItem/
│   │   └── VerbStage/
│   └── organisms/
│       ├── Navbar/             ← Navbar.tsx + useNavbar.ts + Navbar.css
│       ├── InfoCommTopbar/
│       ├── HeroBanner/         ← HeroBanner.tsx + useHeroBanner.ts + HeroBanner.css
│       ├── EcoPillars/
│       ├── GlobeSection/
│       ├── AulasSection/
│       ├── SocialImpact/
│       ├── VoicesCarousel/
│       ├── Newsroom/
│       ├── Showrooms/
│       └── Footer/
├── hooks/
│   └── useReveal.ts            ← IntersectionObserver → agrega "is-revealed", threshold 0.25
├── i18n/
│   ├── config.ts
│   ├── routing.ts
│   └── request.ts
├── messages/
│   ├── en.json
│   ├── es.json
│   └── zh.json
└── proxy.ts                    ← middleware next-intl`}</code></pre>

      <h2>Archivos permitidos</h2>
      <p>
        Solo estos tipos de archivo dentro del proyecto:{' '}
        {FILES.map((f, i) => (
          <span key={f}><code>{f}</code>{i < FILES.length - 1 ? ', ' : '.'}</span>
        ))}
        {' '}Cualquier otro tipo requiere aprobación explícita.
      </p>

      <h2>Assets — dónde van y cómo referenciarlos</h2>
      <table>
        <thead>
          <tr><th>Tipo</th><th>Ubicación</th><th>Cómo referenciar</th></tr>
        </thead>
        <tbody>
          {ASSETS.map(([type, loc, ref]) => (
            <tr key={type}>
              <td>{type}</td>
              <td><code>{loc}</code></td>
              <td><code>{ref}</code></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
