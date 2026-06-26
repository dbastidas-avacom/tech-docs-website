import { useState } from 'react'
import Repos        from './sections/Repos.jsx'
import Overview     from './sections/Overview.jsx'
import Stack        from './sections/Stack.jsx'
import Structure    from './sections/Structure.jsx'
import Components   from './sections/Components.jsx'
import I18n         from './sections/I18n.jsx'
import Tokens       from './sections/Tokens.jsx'
import Architecture from './sections/Architecture.jsx'
import Env          from './sections/Env.jsx'
import Onboarding   from './sections/Onboarding.jsx'
import Issues       from './sections/Issues.jsx'
import Audit        from './sections/Audit.jsx'
import Backend      from './sections/Backend.jsx'

const NAV = [
  { id: 'repos',        label: '00 · Repositorios',      icon: '◈' },
  { id: 'overview',     label: '01 · Visión general',     icon: '◎' },
  { id: 'stack',        label: '02 · Stack',              icon: '⚙' },
  { id: 'structure',    label: '03 · Estructura',         icon: '🗂' },
  { id: 'components',   label: '04 · Componentes',        icon: '⬡' },
  { id: 'i18n',         label: '05 · i18n y rutas',       icon: '🌐' },
  { id: 'tokens',       label: '06 · Tokens de diseño',   icon: '🎨' },
  { id: 'architecture', label: '07 · Arquitectura',       icon: '📐' },
  { id: 'env',          label: '08 · Config y entorno',   icon: '🔧' },
  { id: 'onboarding',   label: '09 · Onboarding',         icon: '🚀' },
  { id: 'issues',       label: '10 · Issues resueltos',   icon: '✓'  },
  { id: 'audit',        label: '11 · Auditoría',          icon: '🔍' },
  { id: 'backend',      label: '12 · Backend AWS',        icon: '☁'  },
]

const SECTIONS = {
  repos: Repos, overview: Overview, stack: Stack, structure: Structure,
  components: Components, i18n: I18n, tokens: Tokens,
  architecture: Architecture, env: Env, onboarding: Onboarding,
  issues: Issues, audit: Audit, backend: Backend,
}

export default function App() {
  const [active, setActive] = useState('overview')
  const [open, setOpen]     = useState(false)

  function navigate(id) {
    setActive(id)
    setOpen(false)
    window.scrollTo(0, 0)
  }

  const Section = SECTIONS[active]

  return (
    <div className="app">
      {open && <div className="overlay" onClick={() => setOpen(false)} />}

      <aside className={`sidebar${open ? ' open' : ''}`}>
        <div className="sidebar-brand">
          <span className="brand-dot" />
          <span>
            AVACOM
            <span className="brand-sub"> · Tech Docs</span>
          </span>
        </div>
        <nav className="sidebar-nav">
          {NAV.map(item => (
            <button
              key={item.id}
              className={`nav-item${active === item.id ? ' active' : ''}`}
              onClick={() => navigate(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <span className="version-chip">v1.0 · 2026</span>
        </div>
      </aside>

      <div className="mobile-header">
        <button className={`burger${open ? ' is-open' : ''}`} onClick={() => setOpen(o => !o)}>
          <span /><span /><span />
        </button>
        <span className="mobile-title">
          {NAV.find(n => n.id === active)?.label}
        </span>
      </div>

      <main className="main">
        <div className="content-inner">
          <Section />
        </div>
      </main>
    </div>
  )
}
