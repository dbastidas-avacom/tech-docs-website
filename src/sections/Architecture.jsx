const NEVER = [
  ['Lógica en .tsx',               'Estado, refs, datos y efectos van en el hook (.ts). El .tsx es JSX puro.'],
  ['Strings hardcodeados en TSX',  'Todo texto visible pasa por useTranslations().'],
  ['any en TypeScript',            'Interfaces explícitas siempre. Para librerías CDN, usar window extension interfaces.'],
  ['import de videos como módulo', 'Referenciar videos como strings: "/Video/ruta/archivo.mp4"'],
  ['CSS fuera del componente',     'Las reglas CSS de un componente viven solo en su propio .css. No en global.'],
  ['Renombrar clases CSS',         'Los nombres de clase del sitio original se preservan exactamente.'],
  ['!important en CSS',            'Aumentar especificidad con .root .child en su lugar.'],
  ['Archivos innecesarios',        'Sin README, NOTES, backups ni scratch files dentro del proyecto.'],
  ['Código comentado',             'Borrar el código muerto. Sin bloques archivados en comentarios.'],
]

const GSAP_MAP = [
  ['gsap.from(el, { y:-40, opacity:0, duration:0.8 })', 'transition en opacity y transform, activado por isMounted state'],
  ['gsap.to(el, { opacity:1, y:0, stagger:0.07 })',     'CSS animation con @keyframes y animation-delay'],
  ['ScrollTrigger reveal',                               'IntersectionObserver → agrega clase is-revealed'],
  ['gsap.set(el, { opacity:0 })',                        'CSS base state: opacity: 0'],
]

const TIMINGS = [
  ['Verb morph out',      '0.45s cubic-bezier(0.55,0,1,0.45)'],
  ['Verb morph in',       '0.75s cubic-bezier(0.16,1,0.3,1)'],
  ['First verb entry',    '0.9s cubic-bezier(0.16,1,0.3,1) 0.35s'],
  ['Navbar entry',        '0.8s cubic-bezier(0.16,1,0.3,1) 0.1s'],
  ['Scroll reveal',       '1.15s cubic-bezier(0.16,1,0.3,1)'],
  ['Hero sub delay',      '1.8s'],
  ['Hero actions delay',  '2s'],
  ['Verb indicators',     '1.5s'],
  ['Lenis duration',      '1.15'],
  ['Verb cycle interval', '4800ms'],
  ['Ken Burns',           '28s ease-in-out infinite alternate'],
]

export default function Architecture() {
  return (
    <section id="architecture">
      <h1>Arquitectura</h1>
      <p className="lead">
        Reglas que no se negocian. Cada excepción crea deuda técnica que afecta a todos los componentes futuros.
      </p>

      <h2>Lista NEVER</h2>
      <table>
        <thead>
          <tr><th>Prohibido</th><th>Por qué / alternativa</th></tr>
        </thead>
        <tbody>
          {NEVER.map(([what, why]) => (
            <tr key={what}>
              <td><code>{what}</code></td>
              <td>{why}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>GSAP → CSS equivalencias</h2>
      <p>
        El sitio original usa GSAP. La migración React lo reemplaza con CSS animations y transitions.
        El resultado visual debe ser idéntico.
      </p>
      <table>
        <thead>
          <tr><th>Original GSAP</th><th>React CSS equivalente</th></tr>
        </thead>
        <tbody>
          {GSAP_MAP.map(([gsap, css]) => (
            <tr key={gsap}>
              <td><code>{gsap}</code></td>
              <td>{css}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Timings — no modificar sin aprobación</h2>
      <table>
        <thead>
          <tr><th>Elemento</th><th>Valor</th></tr>
        </thead>
        <tbody>
          {TIMINGS.map(([el, val]) => (
            <tr key={el}>
              <td>{el}</td>
              <td><code>{val}</code></td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Patrón hook obligatorio</h2>
      <pre><code>{`// useOrganismName.ts
"use client"; // solo si usa APIs del browser

export const STATIC_DATA = [...] as const  // datos fuera del hook

export interface ItemData { key: string; labelKey: string }

export function useOrganismName() {
  // useState, useEffect, useRef, useCallback — todo aquí
  // Sin JSX, sin useTranslations
  return { /* solo lo que necesita el TSX */ }
}

// OrganismName.tsx
"use client";
import { useTranslations } from "next-intl";
import { useOrganismName, STATIC_DATA } from "./useOrganismName";
import "./OrganismName.css";

export function OrganismName() {
  const t = useTranslations("namespace");
  const { stateA, handlerB } = useOrganismName();
  return ( /* JSX puro */ );
}`}</code></pre>
    </section>
  )
}
