const ENV_VARS = [
  ['NEXT_PUBLIC_SITE_URL', 'Opcional', 'URL absoluta del sitio en producción. Se incluye como metadato en el payload del formulario de contacto. Por defecto https://www.avacomworld.com.'],
]

export default function Env() {
  return (
    <section id="env">
      <h1>Config y entorno</h1>
      <p className="lead">
        Variables de entorno requeridas y cómo conectarlo al frontend.
      </p>

      <h2>Clonar y configurar</h2>
      <pre><code>{`# Frontend
git clone https://github.com/DigitalAvacom/website_3.0.git
cd website_3.0
npm install
npm run dev         # http://localhost:3000

# Backend (repo separado)
git clone https://github.com/DigitalAvacom/website_backend.git
cd website_backend
sam build --parallel
sam local start-api --env-vars env.json`}</code></pre>

      <h2>Variables de entorno del frontend</h2>
      <p>
        Crear <code>.env.local</code> en la raíz del repo. En desarrollo puedes omitirlo —
        la URL por defecto es <code>http://localhost:3000</code>.
      </p>
      <table>
        <thead>
          <tr><th>Variable</th><th>Requerida</th><th>Descripción</th></tr>
        </thead>
        <tbody>
          {ENV_VARS.map(([name, req, desc]) => (
            <tr key={name}>
              <td><code>{name}</code></td>
              <td><span className={`badge ${req === 'Requerida' ? 'badge-red' : 'badge-yellow'}`}>{req}</span></td>
              <td>{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Servicio de contacto</h2>
      <p>
        Los formularios de contacto, ticket y newsletter del frontend envían un <code>POST</code> a{' '}
        <code>https://api-email.avacomworld.com/submit</code>. En desarrollo local, el backend
        debe estar corriendo con <code>sam local start-api</code> en el puerto 3001.
      </p>
      <pre><code>{`# .env.local (desarrollo)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# El endpoint del API se configura directamente en el componente del formulario
# Para apuntar al backend local, cambia la URL en el fetch a:
# http://localhost:3001/submit`}</code></pre>

      <h2>next.config.ts</h2>
      <pre><code>{`import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.asp.events" },
    ],
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
export default withNextIntl(nextConfig);`}</code></pre>

      <h2>proxy.ts (middleware)</h2>
      <pre><code>{`export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.svg|Video|SVG|Images|video|images).*)",
  ],
};`}</code></pre>
      <div className="callout callout-red">
        No modificar el matcher sin mantener las exclusiones de assets estáticos:{' '}
        <code>Video|SVG|Images|video|images|_next|api|favicon</code>.
        Si se eliminan, los assets devuelven 404.
      </div>
    </section>
  )
}
