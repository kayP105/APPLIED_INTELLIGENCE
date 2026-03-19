'use client'

import { useState } from 'react'
import FadeUp from './FadeUp'

// ─────────────────────────────────────────────
// EMAILJS CONFIG — replace with your credentials
// Sign up free at https://www.emailjs.com
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!      // e.g. 'user_ABC...'
const GOOGLE_SHEETS_WEBHOOK_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL!
const contactItems = [
  { icon: '', title: 'Email',         val: 'hello@appliedintelligenceacademy.com' },
  { icon: '', title: 'Delivery',      val: 'India-wide · Online & On-Campus' },
  { icon: '', title: 'Response Time', val: 'All institutional enquiries within 24 hours' },
  { icon: '', title: 'Programs',      val: 'AI Certification · Interview Acceleration Lab · Both' },
]

type FormState = {
  name: string
  desig: string
  inst: string
  email: string
  phone: string
  prog: string
  batch: string
  msg: string
}

const emptyForm: FormState = {
  name: '', desig: '', inst: '', email: '',
  phone: '', prog: '', batch: '', msg: '',
}

export default function Contact() {
  const [submitted, setSubmitted]   = useState(false)
  const [loading, setLoading]       = useState(false)
  const [error, setError]           = useState<string | null>(null)
  const [form, setForm]             = useState<FormState>(emptyForm)

  const handleSubmit = async () => {
    setError(null)

    // Basic validation
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
      from_name:   form.name,
      designation: form.desig,
      institution: form.inst,
      from_email:  form.email,
      phone:       form.phone || '—',
      program:     form.prog  || '—',
      batch_size:  form.batch || '—',
      message:     form.msg   || '—',
    }

    const results = await Promise.allSettled([

      // ── 1. EmailJS ──────────────────────────────────────────────────────────
      (async () => {
        const emailjs = await import('@emailjs/browser')
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY,
        )
      })(),

      // ── 2. Google Sheets webhook ────────────────────────────────────────────
      fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',           // Apps Script doesn't return CORS headers
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      }),

    ])

    setLoading(false)

    // If at least one succeeded we treat it as a success
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
    <section id="contact" style={{overflowY: 'auto', height: '100vh', boxSizing: 'border-box', background: '#fdf6e3' }}>
      <div className="container">
        <div className="contact-grid">

          {/* ── LEFT COLUMN ── */}
          <div>
            <FadeUp><div className="eyebrow">Get In Touch</div></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="section-title">Let&apos;s talk about your institution.</h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="contact-info" style={{ marginTop: '24px' }}>
                {contactItems.map(item => (
                  <div key={item.title} className="contact-item">
                    <div className="contact-icon-box">{item.icon}</div>
                    <div>
                      <div className="contact-item-title">{item.title}</div>
                      <div className="contact-item-val">{item.val}</div>
                    </div>
                  </div>
                ))}
                <div className="contact-callout">
                  <p>
                    This is not training.<br />
                    This is placement infrastructure.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* ── RIGHT COLUMN — FORM ── */}
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
                      <input
                        className="form-input"
                        placeholder="Dr. / Prof. / Mr. / Ms."
                        {...field('name')}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Designation</label>
                      <input
                        className="form-input"
                        placeholder="Placement Director / Dean"
                        {...field('desig')}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Institution Name *</label>
                    <input
                      className="form-input"
                      placeholder="College / University name"
                      {...field('inst')}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="you@college.ac.in"
                        {...field('email')}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="+91 98XXX XXXXX"
                        {...field('phone')}
                      />
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
                    <label className="form-label">
                      Anything specific you&apos;d like us to know?
                    </label>
                    <textarea
                      className="form-textarea"
                      placeholder="Placement challenges, timeline, department focus..."
                      {...field('msg')}
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <div className="form-error" style={{
                      background: '#fff0f0',
                      border: '1px solid #ffcccc',
                      borderRadius: '6px',
                      padding: '10px 14px',
                      marginBottom: '12px',
                      color: '#cc0000',
                      fontSize: '0.85rem',
                      lineHeight: 1.5,
                    }}>
                      {error}
                    </div>
                  )}

                  <button
                    className="form-submit"
                    onClick={handleSubmit}
                    disabled={loading}
                    style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                  >
                    {loading ? 'Sending…' : 'Send Enquiry →'}
                  </button>

                  <p className="form-note">
                    No spam. No sales pressure. Just a conversation about your students.
                  </p>
                </>
              ) : (
                <div className="form-success show">
                  <div className="fs-icon">✅</div>
                  <div className="fs-title">Enquiry Received!</div>
                  <p className="fs-sub">
                    Thank you for reaching out. We&apos;ll review your details and get
                    back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}