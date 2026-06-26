const ROUTES = [
  ['POST',   '/submit',             'avacom-forms-submit',       'Recibe formulario, valida y guarda en DynamoDB'],
  ['GET',    '/unsubscribe',        'avacom-forms-unsubscribe',  'Página de confirmación de baja'],
  ['POST',   '/unsubscribe',        'avacom-forms-unsubscribe',  'Baja con un clic (RFC 8058)'],
  ['Stream', 'DynamoDB',            'notify-client / notify-internal', 'Envían emails al activarse cada inserción'],
  ['SNS',    'avacom-forms-alerts', 'alert-mailer',              'Recibe alarmas de CloudWatch, envía alerta'],
]

const ENV = [
  ['TABLE_NAME',       'avacom-form-submissions',           'todas'],
  ['SENDER_EMAIL',     'noreply@avacomworld.com',           'todas'],
  ['INTERNAL_EMAIL',   'info@avacomworld.com',              'todas'],
  ['UNSUB_SECRET',     'SSM → /avacom/forms/unsub-secret',  'todas'],
  ['ALLOWED_ORIGIN',   'https://avacomworld.com',           'submit'],
  ['PUBLIC_API_URL',   'https://api-email.avacomworld.com', 'notify-client'],
  ['ALERT_EMAIL',      'errors@avacomworld.com',            'alert-mailer'],
]

const RESOURCES = [
  ['HTTP API Gateway',  'api-email.avacomworld.com'],
  ['DynamoDB',          'avacom-form-submissions'],
  ['Lambda ×5',         'avacom-forms-*'],
  ['SQS DLQ',           'avacom-forms-failed-emails'],
  ['SNS Topic',         'avacom-forms-alerts'],
  ['CloudWatch Alarm',  'avacom-forms-email-failures'],
  ['ACM Certificate',   'api-email.avacomworld.com'],
]

export default function Backend() {
  return (
    <section id="backend">
      <h1>Backend AWS</h1>
      <p className="lead">
        Stack serverless en AWS. Todo definido como código en <code>template.yaml</code> (SAM):
        5 Lambda functions, DynamoDB, HTTP API Gateway, SES v2, SQS DLQ y SNS.
      </p>

      <div className="info-grid">
        <div className="info-card">
          <h3>Runtime</h3>
          <p>Node.js 22 · arm64 · ESM (.mjs)</p>
        </div>
        <div className="info-card">
          <h3>Región</h3>
          <p>us-east-1</p>
        </div>
        <div className="info-card">
          <h3>Dominio API</h3>
          <p>api-email.avacomworld.com</p>
        </div>
        <div className="info-card">
          <h3>Base de datos</h3>
          <p>DynamoDB · avacom-form-submissions</p>
        </div>
      </div>

      <h2>Estructura del repositorio</h2>
      <pre><code>{`website_backend/
├── .github/workflows/deploy.yml  ← CI/CD: push a main → deploy en AWS
├── lambdas/
│   ├── avacom-forms-submit/         ← valida formulario, escribe en DynamoDB
│   ├── avacom-forms-unsubscribe/    ← página de baja, HMAC token
│   ├── avacom-forms-notify-client/  ← email de confirmación al usuario
│   ├── avacom-forms-notify-internal/ ← notificación al equipo interno
│   └── avacom-forms-alert-mailer/   ← alertas de CloudWatch vía SNS
├── docs/arquitectura.md          ← documentación detallada
├── env.json                      ← variables para desarrollo local
├── samconfig.toml                ← configuración de sam deploy
└── template.yaml                 ← toda la infraestructura (IaC)`}</code></pre>

      <h2>Rutas del API</h2>
      <table>
        <thead>
          <tr><th>Método</th><th>Ruta</th><th>Lambda</th><th>Descripción</th></tr>
        </thead>
        <tbody>
          {ROUTES.map(([method, route, lambda, desc]) => (
            <tr key={`${method}-${route}`}>
              <td><code>{method}</code></td>
              <td><code>{route}</code></td>
              <td>{lambda}</td>
              <td>{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Flujo de datos</h2>
      <pre><code>{`Frontend
  └── POST /submit
        └── SubmitFunction → DynamoDB
              └── DynamoDB Stream
                    ├── NotifyClientFunction → SES → email al usuario
                    └── NotifyInternalFunction → SES → email interno

                    Si falla 3 veces:
                    └── SQS DLQ (avacom-forms-failed-emails)
                          └── CloudWatch Alarm
                                └── SNS → AlertMailerFunction → errors@avacomworld.com`}</code></pre>

      <h2>Variables de entorno</h2>
      <p>
        En producción vienen de <code>template.yaml</code>. Para desarrollo local, editar{' '}
        <code>env.json</code> en la raíz del repo de backend.
      </p>
      <table>
        <thead>
          <tr><th>Variable</th><th>Valor producción</th><th>Funciones</th></tr>
        </thead>
        <tbody>
          {ENV.map(([name, val, fns]) => (
            <tr key={name}>
              <td><code>{name}</code></td>
              <td>{val}</td>
              <td>{fns}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Despliegue</h2>
      <p>
        Push a <code>main</code> → GitHub Actions corre <code>sam build</code> y{' '}
        <code>sam deploy</code> automáticamente.
      </p>
      <pre><code>{`# Deploy manual
sam build --parallel
sam deploy

# Desarrollo local
sam local start-api --env-vars env.json
sam local invoke SubmitFunction --env-vars env.json --event evento.json

# Secret requerido en GitHub (Settings → Secrets → Actions)
AWS_DEPLOY_ROLE_ARN  ← ARN del rol IAM con permisos OIDC`}</code></pre>

      <h2>Recursos AWS en el stack</h2>
      <table>
        <thead>
          <tr><th>Recurso</th><th>Nombre</th></tr>
        </thead>
        <tbody>
          {RESOURCES.map(([type, name]) => (
            <tr key={name}>
              <td>{type}</td>
              <td><code>{name}</code></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
