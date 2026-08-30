import { useEffect, useState } from 'react'
import { profile } from '../data/portfolioData'

const links = [
  { href: '#about', label: 'about', num: '01' },
  { href: '#experience', label: 'experience', num: '02' },
  { href: '#projects', label: 'projects', num: '03' },
  { href: '#skills', label: 'skills', num: '04' },
  { href: '#contact', label: 'contact', num: '05' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#top" className="logo mono">
          <span className="accent">&gt;_</span> preethi
        </a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="mono">
              <span className="accent">{l.num}.</span> {l.label}
            </a>
          ))}
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn resume-btn">
            resume
          </a>
        </nav>
      </div>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          padding: 20px 0;
          transition: background 0.2s ease, padding 0.2s ease, box-shadow 0.2s ease;
        }
        .navbar.scrolled {
          background: rgba(10, 14, 20, 0.85);
          backdrop-filter: blur(10px);
          padding: 14px 0;
          box-shadow: 0 1px 0 var(--border);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-bright);
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .nav-links a {
          font-size: 0.85rem;
          color: var(--text);
          transition: color 0.15s ease;
        }
        .nav-links a:hover {
          color: var(--accent);
        }
        .resume-btn {
          padding: 8px 16px;
          font-size: 0.8rem;
        }
        @media (max-width: 720px) {
          .nav-links a:not(.resume-btn) {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}
