import { useState } from 'react'
import { profile } from '../data/portfolioData'

const API_BASE = import.meta.env.VITE_API_URL || ''

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container contact-wrap">
        <div className="section-heading">
          <span className="index">05.</span>
          <h2>Get In Touch</h2>
          <span className="rule" />
        </div>
        <p className="lede">
          I'm always open to talking DevOps, platform engineering, or interesting reliability problems. Send a
          message, or reach me directly:
        </p>
        <div className="direct-links mono">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            linkedin.com/in/preethi-agnes-thomas
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            github.com/preethiagnes
          </a>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-row">
            <label className="mono" htmlFor="name">
              name
            </label>
            <input id="name" name="name" required value={form.name} onChange={onChange} placeholder="Jane Doe" />
          </div>
          <div className="form-row">
            <label className="mono" htmlFor="email">
              email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={onChange}
              placeholder="jane@example.com"
            />
          </div>
          <div className="form-row">
            <label className="mono" htmlFor="message">
              message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={onChange}
              placeholder="Let's talk about..."
            />
          </div>
          <button className="btn solid" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'sending...' : 'send message'}
          </button>
          {status === 'sent' && <p className="status ok mono">✓ message sent — thank you!</p>}
          {status === 'error' && <p className="status err mono">✕ {errorMsg}</p>}
        </form>
      </div>
      <style>{`
        .contact-wrap {
          max-width: 640px;
        }
        .lede {
          color: var(--text-dim);
          margin-bottom: 28px;
        }
        .direct-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 48px;
          font-size: 0.9rem;
        }
        .direct-links a {
          color: var(--accent);
          width: fit-content;
        }
        .direct-links a:hover {
          text-decoration: underline;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-row {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-row label {
          color: var(--accent);
          font-size: 0.8rem;
        }
        .form-row input,
        .form-row textarea {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 6px;
          color: var(--text-bright);
          padding: 12px 14px;
          font-family: var(--sans);
          font-size: 0.95rem;
          resize: vertical;
        }
        .form-row input:focus,
        .form-row textarea:focus {
          outline: none;
          border-color: var(--accent);
        }
        .contact-form button {
          align-self: flex-start;
        }
        .status {
          font-size: 0.85rem;
        }
        .status.ok { color: var(--accent); }
        .status.err { color: #ff6b6b; }
      `}</style>
    </section>
  )
}
