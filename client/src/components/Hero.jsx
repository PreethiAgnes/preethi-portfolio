import { useEffect, useState } from 'react'
import { profile, stats } from '../data/portfolioData'

const ROLES = ['Senior DevOps Engineer', 'Cloud Security Engineer', 'Site Reliability Engineer', 'DevSecOps Practitioner']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const full = ROLES[roleIndex]
    const speed = deleting ? 35 : 70
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = full.slice(0, displayed.length + 1)
        setDisplayed(next)
        if (next === full) setTimeout(() => setDeleting(true), 1400)
      } else {
        const next = full.slice(0, displayed.length - 1)
        setDisplayed(next)
        if (next === '') {
          setDeleting(false)
          setRoleIndex((i) => (i + 1) % ROLES.length)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <p className="mono greeting">
          <span className="accent">$</span> whoami
        </p>
        <h1>
          Hi, I'm <span className="accent">{profile.name.split(' ')[0]}</span>.
        </h1>
        <h2 className="mono role-line">
          {displayed}
          <span className="cursor">_</span>
        </h2>
        <p className="summary">{profile.summary}</p>
        <div className="hero-cta">
          <a href="#projects" className="btn solid">
            view projects
          </a>
          <a href="#contact" className="btn">
            get in touch
          </a>
        </div>
        <div className="stat-row">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-value mono">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 90px;
          background:
            radial-gradient(circle at 15% 20%, rgba(255,180,84,0.08), transparent 40%),
            var(--bg);
          border-bottom: 1px solid var(--border);
        }
        .hero-inner {
          max-width: 760px;
        }
        .greeting {
          color: var(--text-dim);
          margin: 0 0 18px;
          font-size: 0.95rem;
        }
        h1 {
          font-size: clamp(2.2rem, 6vw, 3.4rem);
          color: var(--text-bright);
          margin: 0 0 10px;
          font-weight: 800;
        }
        .role-line {
          font-size: clamp(1.1rem, 3vw, 1.5rem);
          color: var(--text);
          margin: 0 0 26px;
          min-height: 1.6em;
        }
        .cursor {
          color: var(--accent);
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        .summary {
          color: var(--text-dim);
          max-width: 620px;
          font-size: 1.02rem;
          margin-bottom: 36px;
        }
        .hero-cta {
          display: flex;
          gap: 16px;
          margin-bottom: 64px;
          flex-wrap: wrap;
        }
        .stat-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          border-top: 1px solid var(--border);
          padding-top: 32px;
        }
        .stat-value {
          font-size: 1.6rem;
          color: var(--accent);
          font-weight: 700;
        }
        .stat-label {
          color: var(--text-dim);
          font-size: 0.8rem;
          margin-top: 4px;
        }
        @media (max-width: 640px) {
          .stat-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  )
}
