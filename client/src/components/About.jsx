import { profile, education } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="index">01.</span>
          <h2>About Me</h2>
          <span className="rule" />
        </div>
        <div className="about-grid">
          <div>
            <p>
              I'm a Senior DevOps & Platform Engineer based in {profile.location}, with 9+ years building and
              securing cloud infrastructure for large-scale enterprise systems — most recently supporting
              production aviation applications for United Airlines.
            </p>
            <p>
              My work sits at the intersection of <span className="accent">infrastructure</span>,{' '}
              <span className="accent">security</span>, and <span className="accent">reliability</span>: designing
              highly available AWS architectures, hardening CI/CD pipelines against vulnerable code, and building
              the disaster-recovery and observability practices that keep systems trustworthy under failure.
            </p>
            <p>
              I've also been an early adopter of agentic AI in the DevOps workflow — using tools like Claude Code
              to accelerate infrastructure automation and troubleshooting, and pairing Dynatrace's Davis AI with
              disaster-recovery exercises for smarter, less manual resilience validation.
            </p>
            <p className="education">
              <span className="accent mono">education</span> — {education.degree}, {education.school}
            </p>
          </div>
          <div className="terminal-card mono">
            <div className="terminal-bar">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="terminal-title">focus.sh</span>
            </div>
            <pre>{`$ cat focus.txt

- AWS & Cloud Infrastructure
- CI/CD & Pipeline Automation
- DevSecOps & Security Integration
- Site Reliability Engineering
- Workload Identity (IRSA, OIDC)
- Kubernetes Security (RBAC)
- IAM Governance
- Secure Software Supply Chain
- Agentic AI Engineering

$ _`}</pre>
          </div>
        </div>
      </div>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 56px;
          align-items: start;
        }
        .about-grid p {
          color: var(--text);
          margin: 0 0 18px;
        }
        .education {
          font-size: 0.9rem;
          color: var(--text-dim);
        }
        .terminal-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
        }
        .terminal-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border);
          background: var(--bg-alt);
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot.red { background: #ff5f56; }
        .dot.yellow { background: #ffbd2e; }
        .dot.green { background: #27c93f; }
        .terminal-title {
          margin-left: 8px;
          font-size: 0.75rem;
          color: var(--text-dim);
        }
        .terminal-card pre {
          margin: 0;
          padding: 20px;
          font-size: 0.82rem;
          line-height: 1.7;
          color: var(--text);
          white-space: pre-wrap;
        }
        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
