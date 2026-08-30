import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="footer mono">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with the MERN stack</span>
      </div>
      <style>{`
        .footer {
          padding: 32px 0;
          color: var(--text-dim);
          font-size: 0.78rem;
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
        }
      `}</style>
    </footer>
  )
}
