import { projects } from '../data/portfolioData'

function ProjectCard({ p }) {
  return (
    <a href={p.github} target="_blank" rel="noreferrer" className="card project-card">
      <div className="project-top">
        <span className="folder-icon mono">📁</span>
        <span className="mono github-icon" aria-label="View on GitHub">
          ↗
        </span>
      </div>
      <h3>{p.name}</h3>
      <p>{p.description}</p>
      <div className="tag-row">
        {p.tags.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
      <style>{`
        .project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .folder-icon {
          font-size: 1.6rem;
        }
        .github-icon {
          color: var(--text-dim);
          font-size: 1.2rem;
          transition: color 0.15s ease;
        }
        .project-card:hover .github-icon {
          color: var(--accent);
        }
        .project-card h3 {
          color: var(--text-bright);
          margin: 0 0 12px;
          font-size: 1.15rem;
        }
        .project-card p {
          color: var(--text-dim);
          font-size: 0.92rem;
          flex-grow: 1;
          margin: 0 0 20px;
        }
        .tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
      `}</style>
    </a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="index">03.</span>
          <h2>Things I've Built</h2>
          <span className="rule" />
        </div>
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard p={p} key={p.name} />
          ))}
        </div>
      </div>
      <style>{`
        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }
      `}</style>
    </section>
  )
}
