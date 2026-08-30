import { useState } from 'react'
import { experience } from '../data/portfolioData'

export default function Experience() {
  const [active, setActive] = useState(0)
  const job = experience[active]

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="index">02.</span>
          <h2>Where I've Worked</h2>
          <span className="rule" />
        </div>
        <div className="exp-layout">
          <div className="tabs mono" role="tablist" aria-label="Work experience">
            {experience.map((e, i) => (
              <button
                key={e.company}
                className={`tab ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={i === active}
              >
                {e.company.split(' — ')[0].split(' ').slice(0, 2).join(' ')}
              </button>
            ))}
          </div>
          <div className="exp-detail">
            <h3>
              {job.role} <span className="accent">@ {job.company}</span>
            </h3>
            <p className="meta mono">
              {job.period} · {job.location}
            </p>
            <p className="blurb">{job.blurb}</p>
            <ul>
              {job.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style>{`
        .exp-layout {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 40px;
        }
        .tabs {
          display: flex;
          flex-direction: column;
          border-left: 2px solid var(--border);
        }
        .tab {
          text-align: left;
          background: none;
          border: none;
          border-left: 2px solid transparent;
          margin-left: -2px;
          color: var(--text-dim);
          padding: 12px 20px;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .tab:hover {
          color: var(--accent);
          background: var(--surface);
        }
        .tab.active {
          color: var(--accent);
          border-left-color: var(--accent);
          background: var(--surface);
        }
        .exp-detail h3 {
          color: var(--text-bright);
          font-size: 1.25rem;
          margin: 0 0 4px;
        }
        .meta {
          color: var(--text-dim);
          font-size: 0.8rem;
          margin: 0 0 16px;
        }
        .blurb {
          color: var(--text-dim);
          font-style: italic;
          margin-bottom: 18px;
        }
        .exp-detail ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .exp-detail li {
          position: relative;
          padding-left: 26px;
          margin-bottom: 14px;
          color: var(--text);
        }
        .exp-detail li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--accent);
        }
        @media (max-width: 720px) {
          .exp-layout {
            grid-template-columns: 1fr;
          }
          .tabs {
            flex-direction: row;
            overflow-x: auto;
            border-left: none;
            border-bottom: 2px solid var(--border);
          }
          .tab {
            border-left: none;
            border-bottom: 2px solid transparent;
            margin-left: 0;
            white-space: nowrap;
          }
          .tab.active {
            border-bottom-color: var(--accent);
          }
        }
      `}</style>
    </section>
  )
}
