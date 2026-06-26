const ATOMS = [
  ['ArrowIcon',       'Flecha SVG reutilizable'],
  ['CloseIcon',       'X para cerrar modales y menús'],
  ['Counter',         'Contador animado con IntersectionObserver (threshold 0.4)'],
  ['HeroBgSlide',     'Slide individual del carrusel de fondo del hero'],
  ['MetricItem',      'Métrica con número animado y etiqueta'],
  ['ScrollProgress',  'Barra roja fija, z-index 99999, scaleX en scroll'],
  ['SmoothScroll',    'Lenis, duration 1.15, smoothWheel: true'],
  ['VerbIndicator',   'Punto indicador del verbo activo en el hero'],
]

const MOLECULES = [
  ['HeroBg',          'Carrusel Ken Burns de fondos del hero'],
  ['HeroIndicators',  'Grupo de VerbIndicators'],
  ['LangSwitch',      'Selector de idioma EN/ES/ZH'],
  ['NavLinks',        'Lista de enlaces de navegación con tipado i18n'],
  ['SinglePillar',    'Pilar individual del EcoPillars'],
  ['VerbItem',        'Un verbo del carrusel (Educamos, Conectamos, etc.)'],
  ['VerbStage',       'Escenario completo del carrusel de verbos'],
]

const ORGANISMS = [
  ['Navbar',              'Barra de navegación fija con LangSwitch y menú móvil'],
  ['InfoCommTopbar',      'Banner superior de evento InfoComm'],
  ['HeroBanner',          'Sección hero con carrusel de verbos y fondos Ken Burns'],
  ['EcoPillars',          'Accordeón de 5 pilares del ecosistema AVACOM'],
  ['GlobeSection',        'Globo 3D interactivo con métricas de presencia global'],
  ['AulasSection',        'Sección de aulas con ticker de regiones'],
  ['SocialImpact',        'Métricas de impacto social con contadores animados'],
  ['VoicesCarousel',      'Carrusel infinito de testimonios'],
  ['Newsroom',            'Grid de artículos de prensa'],
  ['Showrooms',           'Mapa de showrooms con ciudades'],
  ['Footer',              'Pie de página con PrivacyCollapse y SocialLink'],
]

function ComponentTable({ items }) {
  return (
    <table>
      <thead>
        <tr><th>Componente</th><th>Descripción</th></tr>
      </thead>
      <tbody>
        {items.map(([name, desc]) => (
          <tr key={name}>
            <td><code>{name}</code></td>
            <td>{desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default function Components() {
  return (
    <section id="components">
      <h1>Mapa de componentes</h1>
      <p className="lead">
        Diseño atómico: cada organismo tiene un <code>.tsx</code> (solo JSX) + un{' '}
        <code>useOrganismo.ts</code> (toda la lógica) + un <code>.css</code> propio.
      </p>

      <h2>Átomos — {ATOMS.length} componentes</h2>
      <ComponentTable items={ATOMS} />

      <h2>Moléculas — {MOLECULES.length} componentes</h2>
      <ComponentTable items={MOLECULES} />

      <h2>Organismos — {ORGANISMS.length} componentes</h2>
      <ComponentTable items={ORGANISMS} />

      <h2>Patrón obligatorio por organismo</h2>
      <pre><code>{`OrganismName/
├── OrganismName.tsx   ← JSX puro. Sin useState, useEffect, useRef.
├── useOrganismName.ts ← Toda la lógica, estado y datos.
└── OrganismName.css   ← Solo reglas de este componente.`}</code></pre>
    </section>
  )
}
