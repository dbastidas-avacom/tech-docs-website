const REPOS = [
  {
    name: "website_3.0",
    url: "https://github.com/DigitalAvacom/website_3.0",
    desc: "Frontend Next.js. Migración de HTML/CSS/JS estático a Next.js 15 App Router con TypeScript, next-intl y diseño atómico.",
    stack: "Next.js 15 · TypeScript strict · next-intl v4 · CSS modules",
    status: "Activo",
    statusClass: "badge-green",
  },
  {
    name: "website_backend",
    url: "https://github.com/DigitalAvacom/website_backend",
    desc: "Backend serverless. 5 Lambda functions (Node.js 22), DynamoDB, HTTP API Gateway, SES v2. Definido en SAM (template.yaml).",
    stack: "AWS SAM · Node.js 22 · arm64 · DynamoDB · SES v2",
    status: "Activo",
    statusClass: "badge-green",
  },
  {
    name: "website_2.0",
    url: "https://github.com/DigitalAvacom/website_2.0",
    desc: "Sitio estático trilingüe (65 páginas HTML). Desplegado en Cloudflare Pages. Referencia visual para la migración Next.js.",
    stack: "HTML · CSS · JS · Cloudflare Pages",
    status: "Producción",
    statusClass: "badge-blue",
  },
  {
    name: "tech-docs-src",
    url: null,
    desc: "Esta documentación técnica. Fuente editable en Vite + React. El build va a tech-docs/ en el mismo folder.",
    stack: "Vite · React 18",
    status: "Interno",
    statusClass: "badge-yellow",
  },
];

export default function Repos() {
  return (
    <section id="repos">
      <h1>Repositorios</h1>
      <p className="lead">
        AVACOM tiene dos repos activos en GitHub: un frontend activo y un
        backend en producción.
      </p>

      <div className="callout callout-blue">
        <strong>Repo activo:</strong> <code>website_3.0</code> es el frontend en
        producción. Todo el trabajo de migración Next.js ocurre ahí. El backend
        vive en <code>website_backend</code>.
      </div>

      <h2>Tabla de repositorios</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>URL</th>
            <th>Descripción</th>
            <th>Stack</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {REPOS.map((r) => (
            <tr key={r.name}>
              <td>
                <code>{r.name}</code>
              </td>
              <td>
                {r.url ? (
                  <a href={r.url} target="_blank" rel="noreferrer">
                    {r.url.replace("https://", "")}
                  </a>
                ) : (
                  "—"
                )}
              </td>
              <td>{r.desc}</td>
              <td>{r.stack}</td>
              <td>
                <span className={`badge ${r.statusClass}`}>{r.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Flujo de trabajo multirepo</h2>
      <p>
        Frontend y backend son repos independientes con sus propios pipelines
        CI/CD. El frontend se despliega en Cloudflare Pages, el backend en AWS
        vía SAM. Se comunican únicamente a través de{" "}
        <code>https://api-email.avacomworld.com</code>.
      </p>
    </section>
  );
}
