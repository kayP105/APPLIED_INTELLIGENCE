'use client'

import { useState } from 'react'
import FadeUp from './FadeUp'

const faqs = [
  { q: 'How is this different from AI workshops we already have on campus?', a: 'Most AI workshops teach students what AI can do — tools, demos, concepts. We train students to use AI as a working professional does: in structured workflows, on real tasks, with output that can be evaluated. The difference shows up the moment your students are in an interview or at their first job — not in a quiz score.' },
  { q: 'Who is this designed for — engineering or management students?', a: 'Exclusively non-engineering students. MBA, BBA, BCom, BMS, BCA, and other management and commerce programs. Engineers are being trained to build AI. This program is built for students who will use AI in business, HR, finance, marketing, and operations roles — where no structured AI training exists today.' },
  { q: 'What does the pilot commitment look like?', a: 'The pilot is designed to be low-risk and low-friction. We start with 10–15 volunteer students, run the full program, and deliver a complete outcome report. There is no long-term contract before the pilot. You evaluate the results — then decide on full rollout.' },
  { q: 'Are the two programs related or independent?', a: 'They are independent programs, each with a distinct focus. The AI Productivity Certification builds AI fluency and work execution over 6 weeks. The Interview Acceleration Lab sharpens interview performance through two scored mock rounds. Both can run independently or in sequence — the Certification creates the portfolio that the Interview Lab then helps students present and articulate.' },
  { q: 'How do you measure and report outcomes?', a: 'For the Certification: output quality per session, portfolio completeness, and a final assessment. For the Interview Lab: structured scorecard per student in Round 1, and a comparative improvement sheet in Round 2 showing measurable progress. Institutional-level reporting is provided for both programs.' },
  { q: 'Online, offline, or hybrid delivery?', a: 'Flexible. Both programs run online, offline, or hybrid. Most institutional pilots run in hybrid format — live online sessions with at least one in-person session. We align with your campus schedule and batch structure.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number>(0)

  return (
    <section id="faq" style={{ background: '#fdf6e3' }}>
      <div className="container">
        <div className="faq-wrap">
          <div>
            <FadeUp><div className="eyebrow">Institutional Questions</div></FadeUp>
            <FadeUp delay={0.1}><h2 className="section-title">Questions placement heads ask us.</h2></FadeUp>
            <FadeUp delay={0.2}><p style={{ fontSize: '0.95rem', color: 'var(--ink-mid)', lineHeight: 1.8, marginTop: '16px' }}>If you have a question not answered here, reach out directly. We respond to all institutional enquiries within 24 hours.</p></FadeUp>
            <FadeUp delay={0.3}><div style={{ marginTop: '28px' }}><a href="#contact" className="btn-primary">Talk to the team. →</a></div></FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <div className="faq-list">
              {faqs.map((f, i) => (
                <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
                  <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                    <span className="faq-q-text">{f.q}</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-answer"><p>{f.a}</p></div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}