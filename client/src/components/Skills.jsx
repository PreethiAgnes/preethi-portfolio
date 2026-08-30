import { skillGroups, certifications } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="index">04.</span>
          <h2>Skills & Certifications</h2>
          <span className="rule" />
        </div>
        <div className="skill-grid">
          {skillGroups.map((g) => (
            <div className="card skill-card" key={g.category}>
              <h3 className="mono">{g.category}</h3>
              <div className="tag-row">
                {g.skills.map((s) => (
                  <span className="tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="cert-row">
          {certifications.map((c) => (
            <div className="cert" key={c.name}>
              <span className="cert-badge mono">✓ cert</span>
              <div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer mono">{c.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .skill-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }
        .skill-card h3 {
          margin: 0 0 16px;
          color: var(--accent);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .cert-row {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .cert {
          display: flex;
          align-items: center;
          gap: 16px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 18px 22px;
        }
        .cert-badge {
          background: var(--accent-dim);
          color: var(--accent);
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 0.8rem;
        }
        .cert-name {
          color: var(--text-bright);
          font-weight: 600;
        }
        .cert-issuer {
          color: var(--text-dim);
          font-size: 0.78rem;
        }
      `}</style>
    </section>
  )
}
