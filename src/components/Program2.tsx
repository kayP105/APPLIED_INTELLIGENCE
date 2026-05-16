'use client'

import { useEffect, useRef, useState } from 'react'

const outcomes = [
  'Deliver structured and confident professional introductions',
  'Articulate internship and project outcomes with clarity and impact',
  'Handle specialisation-based technical questioning effectively',
  'Demonstrate commercial reasoning and business awareness',
  'Show measurable, tracked improvement between two evaluation rounds',
]

const phases = [
  {
    num: '01',
    label: 'Stage 1 · Per Batch',
    title: 'Structured Group Workshop',
    duration: '1.5–2 Hours',
    icon: '◈',
    items: [
      'Interview Psychology & Recruiter Evaluation Framework',
      'Structured Answering Frameworks — STAR & PAR',
      'Resume Defence Strategy',
      'Specialisation-Specific Interview Expectations',
      'Live Demonstration & Structured Analysis',
    ],
  },
  {
    num: '02',
    label: 'Stage 2 · Per Student',
    title: 'Mock Interview — Round 1',
    duration: '15–20 min per student',
    icon: '◉',
    items: [
      'Professional Introduction & Resume Deep Dive',
      'Technical Questioning (Specialisation-based)',
      'Situational & Commercial Assessment',
      'Structured evaluation scorecard per student',
      '3 Key Strengths · 3 Areas for Improvement · Action Plan',
    ],
  },
  {
    num: '03',
    label: 'Stage 3 · 1–2 Months Later',
    title: 'Mock Interview — Round 2',
    duration: 'Scheduled per preference',
    icon: '◆',
    items: [
      'Reinforcement of learning from Round 1',
      'Advanced refinement and correction',
      'Comparative performance sheet showing measurable improvement',
      'Structured gap ensures consolidation, not short-term correction',
    ],
  },
]

const specialisations = [
  { label: 'Finance', color: '#60a5fa' },
  { label: 'International Finance', color: '#a78bfa' },
  { label: 'Marketing', color: '#f472b6' },
  { label: 'Sales', color: '#fb923c' },
  { label: 'Human Resources', color: '#34d399' },
  { label: 'Data Analytics', color: '#38bdf8' },
]

export default function Program2() {
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
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
      },
      { threshold: 0.05 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      id="program2"
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

        /* ── Noise grain overlay ── */
        #program2::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.4;
        }

        /* ── Radial glow blobs ── */
        #program2::after {
          content: '';
          position: absolute;
          top: -10%;
          left: -5%;
          width: 55%;
          height: 55%;
          background: radial-gradient(ellipse at center, rgba(212,175,84,0.07) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .p2-inner { position: relative; z-index: 1; }

        /* ── Phase card ── */
        .p2-card {
          position: relative;
          background: #0d1b2e;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 28px 26px;
          transition: border-color 0.3s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease;
          overflow: hidden;
        }
        .p2-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #d4af54, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .p2-card:hover {
          border-color: rgba(212,175,84,0.25);
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(212,175,84,0.08);
        }
        .p2-card:hover::before { opacity: 1; }

        /* ── Staggered fade-up ── */
        @keyframes p2Up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .p2-card-0.p2-animate { animation: p2Up 0.55s cubic-bezier(0.22,1,0.36,1) 0.10s both; }
        .p2-card-1.p2-animate { animation: p2Up 0.55s cubic-bezier(0.22,1,0.36,1) 0.22s both; }
        .p2-card-2.p2-animate { animation: p2Up 0.55s cubic-bezier(0.22,1,0.36,1) 0.34s both; }

        @keyframes headerFade {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .p2-header-anim { animation: headerFade 0.6s cubic-bezier(0.22,1,0.36,1) 0.05s both; }

        /* ── Spec tag ── */
        .spec-tag {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          color: rgba(255,255,255,0.8);
          transition: background 0.2s, border-color 0.2s;
          white-space: nowrap;
        }
        .spec-tag:hover {
          background: rgba(212,175,84,0.1);
          border-color: rgba(212,175,84,0.3);
        }
        .spec-dot {
          width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
        }

        /* ── CTA button ── */
        .p2-cta {
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
        .p2-cta:hover {
          background: #e6c76a;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(212,175,84,0.35);
        }

        /* ── Outcome item ── */
        .outcome-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.72);
          line-height: 1.5;
          padding: 7px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .outcome-item:last-child { border-bottom: none; }
        .outcome-check {
          width: 16px; height: 16px;
          border-radius: 4px;
          background: rgba(212,175,84,0.12);
          border: 1px solid rgba(212,175,84,0.3);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 1px;
          font-size: 0.6rem; color: #d4af54;
        }

        /* ── Phase item ── */
        .phase-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          font-size: 0.79rem;
          color: rgba(255,255,255,0.68);
          line-height: 1.5;
          padding: 6px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: color 0.2s;
        }
        .phase-item:last-child { border-bottom: none; }
        .p2-card:hover .phase-item { color: rgba(255,255,255,0.8); }
        .phase-bullet {
          width: 4px; height: 4px; border-radius: 50%;
          background: #d4af54; flex-shrink: 0; margin-top: 7px; opacity: 0.7;
        }

        /* ── Section label ── */
        .section-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 10px;
        }

        /* ── Glow blob bottom-right ── */
        .p2-blob-br {
          position: absolute;
          bottom: 5%;
          right: -8%;
          width: 40%;
          height: 40%;
          background: radial-gradient(ellipse at center, rgba(212,175,84,0.05) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Divider ── */
        .p2-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          margin: 10px 0 12px;
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .p2-top-grid { grid-template-columns: 1fr !important; }
          .p2-cards-grid { grid-template-columns: 1fr !important; }
          .p2-spec-wrap { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <div className="p2-inner" style={{ flex: 1, padding: isMobile ? '24px 5% 40px' : '32px 5% 48px', display: 'flex', flexDirection: 'column', gap: 28 }}>

        {/* ── TOP SECTION ── */}
        <div className="p2-header-anim">

          {/* Eyebrow row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(212,175,84,0.12)',
              border: '1px solid rgba(212,175,84,0.3)',
              color: '#d4af54',
              fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.14em',
              textTransform: 'uppercase', padding: '4px 12px', borderRadius: 999,
            }}>
              Programme 2
            </div>
            <div style={{ height: 1, flex: 1, background: 'rgba(255,255,255,0.06)' }} />
            <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              India-wide · Online &amp; On-Campus
            </div>
          </div>

          {/* Headline */}
          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(2.5rem, 4vw, 3.2rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#ffffff',
            margin: '0 0 24px',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}>
            Interview Acceleration Lab
          </h2>

          {/* Three-column grid */}
          <div
            className="p2-top-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1.35fr 1fr 0.65fr',
              gap: 16,
              alignItems: 'stretch',
            }}
          >
            {/* Col 1: Description + specs */}
            <div style={{
              background: '#0d1b2e',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 16,
              padding: '22px 24px',
            }}>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: '0 0 16px' }}>
                A structured, specialisation-sensitive interview readiness program designed to prepare Management students for corporate placements — with{' '}
                <span style={{ color: '#d4af54', fontWeight: 600 }}>measurable improvement</span> between two scored rounds.
              </p>

              {/* Callout */}
              <div style={{
                background: 'rgba(212,175,84,0.08)',
                border: '1px solid rgba(212,175,84,0.18)',
                borderLeft: '3px solid #d4af54',
                borderRadius: 8,
                padding: '12px 16px',
                marginBottom: 18,
              }}>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>
                  Recruiters assess{' '}
                  <strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>structured thinking, clarity of articulation, professional presence, business awareness, and composure under pressure</strong>
                  {' '}— not just subject knowledge.
                </p>
              </div>

              {/* Spec tags */}
              <div className="section-label">Specialisation Tracks</div>
              <div
                className="p2-spec-wrap"
                style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 7 }}
              >
                {specialisations.map(s => (
                  <div key={s.label} className="spec-tag">
                    <span className="spec-dot" style={{ background: s.color }} />
                    {s.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Col 2: Outcomes */}
            <div style={{
              background: '#0d1b2e',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 16,
              padding: '22px 24px',
            }}>
              <div className="section-label">Learning Outcomes</div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {outcomes.map(o => (
                  <div key={o} className="outcome-item">
                    <div className="outcome-check">✓</div>
                    {o}
                  </div>
                ))}
              </div>
            </div>

            {/* Col 3: CTA */}
            <div style={{
              background: '#0d1b2e',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 16,
              padding: '22px 20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 16,
            }}>
              <div>
                <div className="section-label">Get Started</div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: '0 0 16px' }}>
                  Pilot cohort payable post execution. No upfront commitment required.
                </p>
                <a href="#contact" className="p2-cta">
                  Enquire Now
                  <span style={{ fontSize: '1rem' }}>→</span>
                </a>
              </div>
              <div style={{
                background: 'rgba(13,27,46,0.6)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 8,
                padding: '10px 14px',
              }}>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginBottom: 2 }}>Delivery</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>Online &amp; On-Campus</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: 6, marginBottom: 2 }}>Coverage</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>India-wide</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── PHASE CARDS ── */}
        {/* <div
          className="p2-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: 16,
          }}
        > */}
          {/* {phases.map((p, i) => (
            <div
              key={p.num}
              className={`p2-card p2-card-${i}${visible ? ' p2-animate' : ''}`}
            >
              {/* Card top row */}
              {/* <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{
                  fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: 'rgba(212,175,84,0.7)',
                }}>
                  {p.label}
                </span>
                <span style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: '3rem', fontWeight: 400,
                  color: 'rgba(212,175,84,0.07)',
                  lineHeight: 1, flexShrink: 0,
                  marginTop: -8,
                }}>
                  {p.num}
                </span>
              </div> */} 

              {/* Title */}
              {/* <div style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '1.15rem', fontWeight: 400,
                fontStyle: 'italic',
                color: '#ffffff', lineHeight: 1.25, marginBottom: 10,
              }}>
                {p.title}
              </div> */}

              {/* Duration badge */}
              {/* <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                fontSize: '0.65rem', fontWeight: 600,
                color: '#d4af54',
                background: 'rgba(212,175,84,0.08)',
                border: '1px solid rgba(212,175,84,0.18)',
                padding: '3px 10px', borderRadius: 999,
                marginBottom: 14,
              }}> */}
                {/* <span style={{ fontSize: '0.5rem' }}>⏱</span>
                {p.duration}
              </span> */}

              {/* <div className="p2-divider" /> */}

              {/* Phase items */}
              {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
                {p.items.map(item => (
                  <div key={item} className="phase-item">
                    <span className="phase-bullet" />
                    {item}
                  </div> */}
                {/* ))}
              </div>
            </div> */}
          {/* ))}
        </div> */}

      </div>

      {/* Bottom-right glow */}
      <div className="p2-blob-br" />
    </div>
  )
}