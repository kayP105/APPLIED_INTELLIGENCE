'use client'

import { useState } from 'react'
import FadeUp from './FadeUp'

const EMAILJS_SERVICE_ID        = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
const EMAILJS_TEMPLATE_ID       = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
const EMAILJS_PUBLIC_KEY        = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
const GOOGLE_SHEETS_WEBHOOK_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL!

const contactItems = [
  { title: 'Email',         val: 'godwin@appliedintelligenceacademy.com' },
  { title: 'Phone Number',  val: '+91 6362143358' },
  { title: 'Delivery',      val: 'India-wide · Online & On-Campus' },
  { title: 'Response Time', val: 'All institutional enquiries within 24 hours' },
  { title: 'Programs',      val: 'AI Certification · Interview Acceleration Lab · Both' },
]

type FormState = {
  name: string; desig: string; inst: string; email: string
  phone: string; prog: string; batch: string; msg: string
}

const emptyForm: FormState = {
  name: '', desig: '', inst: '', email: '',
  phone: '', prog: '', batch: '', msg: '',
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState<string | null>(null)
  const [form, setForm]           = useState<FormState>(emptyForm)

  const handleSubmit = async () => {
    setError(null)
    if (!form.name || !form.inst || !form.email) {
      setError('Please fill in your name, institution, and email to proceed.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }
    setLoading(true)
    const templateParams = {
      from_name: form.name, designation: form.desig, institution: form.inst,
      from_email: form.email, phone: form.phone || '—',
      program: form.prog || '—', batch_size: form.batch || '—', message: form.msg || '—',
    }
    const results = await Promise.allSettled([
      (async () => {
        const emailjs = await import('@emailjs/browser')
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      })(),
      fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      }),
    ])
    setLoading(false)
    const anySuccess = results.some(r => r.status === 'fulfilled')
    if (anySuccess) {
      setSubmitted(true)
    } else {
      const reasons = results
        .filter((r): r is PromiseRejectedResult => r.status === 'rejected')
        .map(r => r.reason?.message ?? 'Unknown error')
      setError(`Submission failed: ${reasons.join(' | ')}. Please email us directly.`)
    }
  }

  const field = (key: keyof FormState) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(prev => ({ ...prev, [key]: e.target.value })),
  })

  return (
    <section
      id="contact"
      style={{
        overflowY: 'auto',
        minHeight: '100vh',
        boxSizing: 'border-box',
        background: '#0a0f1e',
        fontFamily: "'DM Sans', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Serif+Display:ital@0;1&display=swap');

        #contact::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.35;
        }
        #contact::after {
          content: '';
          position: absolute;
          top: -15%; right: -8%;
          width: 50%; height: 55%;
          background: radial-gradient(ellipse at center, rgba(212,175,84,0.07) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        #contact .contact-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1.45fr;
          gap: 56px;
          align-items: start;
          padding: 72px 6%;
        }
        @media (max-width: 768px) {
          #contact .contact-inner { grid-template-columns: 1fr; gap: 32px; padding: 48px 6%; }
        }

        /* ── Left column ── */
        #contact .c-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #d4af54;
          margin-bottom: 16px;
        }
        #contact .c-eyebrow-dash {
          width: 20px; height: 2px;
          background: #d4af54;
          border-radius: 2px;
          flex-shrink: 0;
        }

        #contact .c-heading {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(1.7rem, 2.8vw, 2.4rem);
          font-weight: 400;
          font-style: italic;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0 0 28px;
        }

        /* Contact info items */
        #contact .c-items {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          margin-bottom: 20px;
        }
        #contact .c-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 14px 18px;
          background: #0d1b2e;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: background 0.2s;
        }
        #contact .c-item:last-child { border-bottom: none; }
        #contact .c-item:hover { background: #0f2035; }
        #contact .c-item-label {
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(212,175,84,0.55);
        }
        #contact .c-item-val {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.75);
          font-weight: 500;
        }

        /* Callout */
        #contact .c-callout {
          background: #0d1b2e;
          border: 1px solid rgba(255,255,255,0.07);
          border-left: 3px solid #d4af54;
          border-radius: 0 12px 12px 0;
          padding: 16px 20px;
        }
        #contact .c-callout p {
          font-family: 'DM Serif Display', serif;
          font-size: 1rem;
          font-style: italic;
          color: #ffffff;
          line-height: 1.5;
          margin: 0;
        }

        /* ── Form box ── */
        #contact .form-box {
          background: #0d1b2e;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 32px 30px;
        }

        #contact .form-title {
          font-family: 'DM Serif Display', serif;
          font-size: 1.3rem;
          font-style: italic;
          font-weight: 400;
          color: #ffffff;
          margin-bottom: 4px;
        }
        #contact .form-subtitle {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.45);
          margin-bottom: 24px;
          line-height: 1.6;
        }

        #contact .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 500px) {
          #contact .form-row { grid-template-columns: 1fr; }
        }

        #contact .form-group {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-bottom: 14px;
        }

        #contact .form-label {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(212,175,84,0.65);
        }

        #contact .form-input,
        #contact .form-select,
        #contact .form-textarea {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 0.8rem;
          font-family: 'DM Sans', sans-serif;
          color: rgba(255,255,255,0.85);
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          width: 100%;
          box-sizing: border-box;
        }
        #contact .form-input::placeholder,
        #contact .form-textarea::placeholder {
          color: rgba(255,255,255,0.25);
        }
        #contact .form-input:focus,
        #contact .form-select:focus,
        #contact .form-textarea:focus {
          border-color: rgba(212,175,84,0.45);
          background: rgba(212,175,84,0.04);
        }

        #contact .form-select {
          appearance: none;
          cursor: pointer;
          color: rgba(255,255,255,0.75);
        }
        #contact .form-select option {
          background: #0d1b2e;
          color: rgba(255,255,255,0.85);
        }

        #contact .form-textarea {
          resize: vertical;
          min-height: 90px;
        }

        #contact .form-error {
          background: rgba(220,38,38,0.1);
          border: 1px solid rgba(220,38,38,0.25);
          border-radius: 8px;
          padding: 10px 14px;
          margin-bottom: 12px;
          color: #fca5a5;
          font-size: 0.78rem;
          line-height: 1.5;
        }

        #contact .form-submit {
          width: 100%;
          background: #d4af54;
          color: #0a0f1e;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          padding: 13px 24px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          letter-spacing: 0.01em;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(212,175,84,0.2);
          margin-bottom: 12px;
        }
        #contact .form-submit:hover:not(:disabled) {
          background: #e6c76a;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(212,175,84,0.3);
        }
        #contact .form-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        #contact .form-note {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.28);
          text-align: center;
          margin: 0;
          line-height: 1.5;
        }

        /* Success state */
        #contact .form-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 40px 20px;
          gap: 12px;
        }
        #contact .fs-icon { font-size: 2.5rem; }
        #contact .fs-title {
          font-family: 'DM Serif Display', serif;
          font-size: 1.4rem;
          font-style: italic;
          color: #ffffff;
        }
        #contact .fs-sub {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.7;
          max-width: 320px;
          margin: 0;
        }
      `}</style>

      <div className="contact-inner">

        {/* ── LEFT ── */}
        <div>
          <FadeUp>
            <div className="c-eyebrow">
              <span className="c-eyebrow-dash" />
              Get In Touch
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="c-heading">Let&apos;s talk about your institution.</h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="c-items">
              {contactItems.map(item => (
                <div key={item.title} className="c-item">
                  <div className="c-item-label">{item.title}</div>
                  <div className="c-item-val">{item.val}</div>
                </div>
              ))}
            </div>
            <div className="c-callout">
              <p>
                This is not training.<br />
                This is placement infrastructure.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* ── RIGHT — FORM ── */}
        <FadeUp delay={0.2}>
          <div className="form-box">
            {!submitted ? (
              <>
                <div className="form-title">Request a Pilot Program</div>
                <div className="form-subtitle">
                  Tell us about your institution and we&apos;ll get back within 24 hours.
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input className="form-input" placeholder="Dr. / Prof. / Mr. / Ms." {...field('name')} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Designation</label>
                    <input className="form-input" placeholder="Placement Director / Dean" {...field('desig')} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Institution Name *</label>
                  <input className="form-input" placeholder="College / University name" {...field('inst')} />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input type="email" className="form-input" placeholder="you@college.ac.in" {...field('email')} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone / WhatsApp</label>
                    <input type="tel" className="form-input" placeholder="+91 98XXX XXXXX" {...field('phone')} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Program Interest</label>
                  <select className="form-select" {...field('prog')}>
                    <option value="" disabled>Select a program</option>
                    <option>AI Productivity &amp; Career Certification (6 Weeks)</option>
                    <option>Management Interview Acceleration Lab</option>
                    <option>Both Programs</option>
                    <option>Just exploring — want more information</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Approx. Batch Size</label>
                  <select className="form-select" {...field('batch')}>
                    <option value="" disabled>Select batch size</option>
                    <option>10–15 students (Pilot cohort)</option>
                    <option>20–40 students</option>
                    <option>40–80 students</option>
                    <option>80+ students</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Anything specific you&apos;d like us to know?</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Placement challenges, timeline, department focus..."
                    {...field('msg')}
                  />
                </div>

                {error && <div className="form-error">{error}</div>}

                <button
                  className="form-submit"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? 'Sending…' : 'Send Enquiry →'}
                </button>

                <p className="form-note">
                  No spam. No sales pressure. Just a conversation about your students.
                </p>
              </>
            ) : (
              <div className="form-success">
                <div className="fs-icon">✅</div>
                <div className="fs-title">Enquiry Received!</div>
                <p className="fs-sub">
                  Thank you for reaching out. We&apos;ll review your details and get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </FadeUp>

      </div>
    </section>
  )
}