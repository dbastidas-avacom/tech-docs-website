export default function Overview() {
  return (
    <section id="overview">
      <h1>Sitio web de AVACOM</h1>
      <p className="lead">
        Aplicación Next.js 15 App Router con TypeScript estricto, next-intl para soporte trilingüe (EN / ES / ZH)
        y diseño atómico. Este documento describe la arquitectura, las convenciones y los procedimientos para
        trabajar en el proyecto.
      </p>

      <div className="info-grid">
        <div className="info-card">
          <h3>Framework</h3>
          <p>Next.js 15 App Router con TypeScript strict. Sin <code>any</code> en ningún archivo.</p>
        </div>
        <div className="info-card">
          <h3>i18n</h3>
          <p>next-intl v4. Tres locales: EN (<code>/</code>), ES (<code>/es/</code>), ZH (<code>/zh/</code>).</p>
        </div>
        <div className="info-card">
          <h3>Estilos</h3>
          <p>Un <code>.css</code> por componente. Sin Tailwind. Sin <code>!important</code>. Tokens en <code>avacom-shared.css</code>.</p>
        </div>
        <div className="info-card">
          <h3>Producción</h3>
          <p><a href="https://www.avacomworld.com" target="_blank" rel="noreferrer">www.avacomworld.com</a></p>
        </div>
      </div>

      <h2>Estado del proyecto</h2>
      <p>
        La migración cubre la home page completa y todas las páginas internas. El sitio está en producción.
        La referencia visual es <a href="https://www.avacomworld.com" target="_blank" rel="noreferrer">www.avacomworld.com</a>.
      </p>

      <h2>Páginas activas</h2>
      <ul>
        <li>Home — hero, eco pillars, globe, aulas, social impact, voices, newsroom, showrooms</li>
        <li>About, Ecosystem, Impact, Newsroom, Contact, Support, Careers, Learn</li>
        <li>Artículos de prensa: InfoComm 2025, InfoComm 2026, ISE 2025, Armenia</li>
        <li>Guías de producto y glosario EdTech</li>
        <li>Legal y landing</li>
      </ul>

      <h2>Directriz principal</h2>
      <div className="callout callout-red">
        El sitio migrado debe ser <strong>visualmente y funcionalmente idéntico</strong> al original estático.
        Cada animación, transición, timing, nombre de clase CSS e interacción debe coincidir exactamente.
      </div>
    </section>
  )
}
