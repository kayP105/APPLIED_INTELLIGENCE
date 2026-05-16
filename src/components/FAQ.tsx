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
    <section
      id="faq"
      style={{
        background: '#64707c',
        fontFamily: "'DM Sans', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Serif+Display:ital@0;1&display=swap');

        /* Noise grain */
        #faq::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.4;
        }

        /* Gold glow bottom-left */
        #faq::after {
          content: '';
          position: absolute;
          bottom: -10%; left: -5%;
          width: 40%; height: 50%;
          background: radial-gradient(ellipse at center, rgba(212,175,84,0.07) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        #faq .faq-inner {
          position: relative;
          z-index: 1;
        }

        #faq .faq-wrap {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 56px;
          align-items: start;
          padding: 80px 6%;
        }

        @media (max-width: 768px) {
          #faq .faq-wrap { grid-template-columns: 1fr; gap: 32px; padding: 48px 6%; }
        }

        /* Left column */
        #faq .faq-eyebrow {
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
        #faq .faq-eyebrow-dash {
          width: 20px; height: 2px;
          background: #d4af54;
          border-radius: 2px;
          flex-shrink: 0;
        }

        #faq .faq-heading {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(1.7rem, 2.8vw, 2.4rem);
          font-weight: 400;
          font-style: italic;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0 0 16px;
        }

        #faq .faq-sub {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.8;
          margin: 0 0 28px;
        }

        #faq .faq-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #d4af54;
          color: #0a0f1e;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 0.8rem;
          padding: 12px 22px;
          border-radius: 8px;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(212,175,84,0.25);
        }
        #faq .faq-cta:hover {
          background: #e6c76a;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(212,175,84,0.35);
        }

        /* FAQ list */
        #faq .faq-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
        }

        #faq .faq-item {
          background: #0d1b2e;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: background 0.25s ease;
          overflow: hidden;
        }
        #faq .faq-item:last-child { border-bottom: none; }

        #faq .faq-item.open {
          background: #0f2035;
        }

        #faq .faq-q {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 22px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        #faq .faq-q-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: rgba(255,255,255,0.88);
          line-height: 1.45;
          flex: 1;
          transition: color 0.2s;
        }
        #faq .faq-item.open .faq-q-text {
          color: #d4af54;
        }

        #faq .faq-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          color: rgba(255,255,255,0.4);
          flex-shrink: 0;
          transition: border-color 0.25s, color 0.25s, transform 0.3s ease, background 0.25s;
          line-height: 1;
        }
        #faq .faq-item.open .faq-icon {
          border-color: rgba(212,175,84,0.5);
          color: #d4af54;
          background: rgba(212,175,84,0.08);
          transform: rotate(45deg);
        }

        #faq .faq-answer {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        #faq .faq-item.open .faq-answer {
          grid-template-rows: 1fr;
        }
        #faq .faq-answer > div {
          overflow: hidden;
        }
        #faq .faq-answer p {
          margin: 0;
          padding: 0 22px 18px;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.8;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 14px;
        }
      `}</style>

      <div className="faq-inner">
        <div className="faq-wrap">

          {/* ── Left: intro ── */}
          <div>
            <FadeUp>
              <div className="faq-eyebrow">
                <span className="faq-eyebrow-dash" />
                Institutional Questions
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="faq-heading">Questions placement heads ask us.</h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="faq-sub">
                If you have a question not answered here, reach out directly. We respond to all institutional enquiries within 24 hours.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <a href="#contact" className="faq-cta">Talk to the team →</a>
            </FadeUp>
          </div>

          {/* ── Right: accordion ── */}
          <FadeUp delay={0.2}>
            <div className="faq-list">
              {faqs.map((f, i) => (
                <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
                  <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                    <span className="faq-q-text">{f.q}</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-answer">
                    <div>
                      <p>{f.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}