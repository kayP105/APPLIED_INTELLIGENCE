'use client'

import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    num: '01',
    title: 'Pilot Cohort',
    body: 'Begin with 10–15 volunteer students. Full program execution with structured feedback collection. You receive a complete outcome report before deciding anything further.',
    tags: ['10–15 students', 'Full program', 'Outcome report', 'No long-term commitment'],
  },
  {
    num: '02',
    title: 'Full Batch Rollout',
    body: 'Scale across departments and batches. Standardised delivery ensures every cohort receives the same structured experience with consistent outcomes and quality.',
    tags: ['Batch-wise execution', 'Multi-department', 'Scalable model'],
  },
  {
    num: '03',
    title: 'Outcome Tracking',
    body: 'Student output quality, interview scorecard data, and cohort-level insights all documented and shared. Data you can use for placement reporting and accreditation.',
    tags: ['Per-student data', 'Performance insights', 'Institutional report'],
  },
]

export default function Delivery() {
  const [visible, setVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.05 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      id="delivery"
      ref={ref}
      style={{
        minHeight: '100vh',
        boxSizing: 'border-box',
        paddingTop: 68,
        background: '#64707c',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'DM Sans', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Serif+Display:ital@0;1&display=swap');

        /* Noise overlay */
        #delivery::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.35;
        }

        .dlv-inner { position: relative; z-index: 1; }

        /* Step cards */
        .dlv-card {
          background: #0d1b2e;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 22px 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease;
        }
        .dlv-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #d4af54, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .dlv-card:hover {
          border-color: rgba(212,175,84,0.25);
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(212,175,84,0.08);
        }
        .dlv-card:hover::before { opacity: 1; }

        /* Staggered animation */
        @keyframes dlvUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dlv-card-0.dlv-animate { animation: dlvUp 0.55s cubic-bezier(0.22,1,0.36,1) 0.10s both; }
        .dlv-card-1.dlv-animate { animation: dlvUp 0.55s cubic-bezier(0.22,1,0.36,1) 0.22s both; }
        .dlv-card-2.dlv-animate { animation: dlvUp 0.55s cubic-bezier(0.22,1,0.36,1) 0.34s both; }

        @keyframes dlvHeaderFade {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dlv-header-anim { animation: dlvHeaderFade 0.6s cubic-bezier(0.22,1,0.36,1) 0.05s both; }

        /* Tags */
        .dlv-tag {
          font-size: 0.72rem;
          font-weight: 600;
          padding: 4px 11px;
          border-radius: 999px;
          background: rgba(212,175,84,0.08);
          border: 1px solid rgba(212,175,84,0.2);
          color: #d4af54;
          letter-spacing: 0.01em;
          white-space: nowrap;
          transition: background 0.2s, border-color 0.2s;
        }
        .dlv-tag:hover {
          background: rgba(212,175,84,0.15);
          border-color: rgba(212,175,84,0.4);
        }

        /* Divider */
        .dlv-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0.08), transparent);
        }

        /* CTA */
        .dlv-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #d4af54;
          color: #0a0f1e;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 0.8rem;
          padding: 10px 20px;
          border-radius: 8px;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(212,175,84,0.25);
        }
        .dlv-cta:hover {
          background: #e6c76a;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(212,175,84,0.35);
        }

        @media (max-width: 768px) {
          .dlv-top-grid { grid-template-columns: 1fr !important; }
          .dlv-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="dlv-inner" style={{ flex: 1, padding: isMobile ? '20px 5% 32px' : '24px 5% 36px', display: 'flex', flexDirection: 'column', gap: 20 }}>

        {/* ── HEADER ── */}
        <div
          className="dlv-header-anim"
          style={{
            background: '#0d1b2e',
            borderRadius: 16,
            padding: isMobile ? '22px 20px' : '28px 36px',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {/* Eyebrow */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            marginBottom: 16,
          }}>
            <span style={{ width: 24, height: 2, background: '#d4af54', display: 'inline-block', borderRadius: 2, flexShrink: 0 }} />
            <span style={{
              fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: '#d4af54',
            }}>
              How We Work With Colleges
            </span>
          </div>

          {/* Headline + right column */}
          <div
            className="dlv-top-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1.1fr 1fr',
              gap: 32,
              alignItems: 'center',
            }}
          >
            {/* Headline — reduced from clamp(2rem,4vw,3rem) */}
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#ffffff',
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}>
              Designed for institutional execution.
            </h2>

            {/* Sub + callout + CTA */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>
                Start small. Verify results. Scale with confidence. Every step gives your institution control, evidence, and a low-risk entry point.
              </p>
              <div style={{
                background: 'rgba(212,175,84,0.06)',
                border: '1px solid rgba(212,175,84,0.18)',
                borderLeft: '3px solid #d4af54',
                borderRadius: '0 8px 8px 0',
                padding: '10px 14px',
              }}>
                <p style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: '0.88rem', fontStyle: 'italic',
                  color: '#ffffff', lineHeight: 1.5, margin: 0,
                }}>
                  Low-risk pilot.{' '}
                  <span style={{ color: '#d4af54' }}>High-impact rollout.</span>{' '}
                  Results you can show to your placement companies.
                </p>
              </div>
              <div>
                <a href="#contact" className="dlv-cta">
                  Start a Pilot Cohort →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── STEP CARDS ── */}
        <div
          className="dlv-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: 14,
          }}
        >
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`dlv-card dlv-card-${i}${visible ? ' dlv-animate' : ''}`}
            >
              {/* Ghost number */}
              <div style={{
                position: 'absolute',
                top: 10, right: 16,
                fontFamily: "'DM Serif Display', serif",
                fontSize: '3.5rem', fontWeight: 400,
                color: 'rgba(212,175,84,0.06)',
                lineHeight: 1,
                pointerEvents: 'none',
                userSelect: 'none',
              }}>
                {s.num}
              </div>

              {/* Step badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 32, height: 32,
                  borderRadius: '50%',
                  border: '1.5px solid rgba(212,175,84,0.4)',
                  background: 'rgba(212,175,84,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: '0.85rem', fontWeight: 400,
                  color: '#d4af54',
                  flexShrink: 0,
                }}>
                  {s.num}
                </div>
                <span style={{
                  fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: 'rgba(212,175,84,0.65)',
                }}>
                  Step {parseInt(s.num)}
                </span>
              </div>

              {/* Title */}
              <div style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '1.05rem', fontWeight: 400,
                fontStyle: 'italic',
                color: '#ffffff', lineHeight: 1.25,
              }}>
                {s.title}
              </div>

              <div className="dlv-divider" />

              {/* Body — bumped to 0.8rem */}
              <p style={{
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.62)',
                lineHeight: 1.7,
                margin: 0,
                flex: 1,
              }}>
                {s.body}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 2 }}>
                {s.tags.map(t => (
                  <span key={t} className="dlv-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}