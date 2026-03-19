'use client'

import { useEffect, useRef, useState } from 'react'

const outcomes = [
  'Deliver structured and confident professional introductions',
  'Articulate internship and project outcomes with clarity and impact',
  'Handle specialisation based technical questioning effectively',
  'Demonstrate commercial reasoning and business awareness',
  'Show measurable, tracked improvement between two evaluation rounds',
]

const phases = [
  {
    num: '01',
    label: 'Stage 1 · Per Batch',
    title: 'Structured Group Workshop',
    duration: '1.5–2 Hours',
    accent: '#38b2c5',
    bg: '#ffffff',
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
    accent: '#205d99',
    bg: '#ffffff',
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
    duration: 'Scheduled per college preference',
    accent: '#111072',
    bg: '#ffffff',
    items: [
      'Reinforcement of learning from Round 1',
      'Advanced refinement and correction',
      'Comparative performance sheet showing measurable improvement',
      'Structured gap ensures consolidation, not short-term correction',
    ],
  },
  {
    num: '04',
    label: 'Full Rollout Model',
    title: '360 Students · 6 Batches',
    duration: '1 batch per week · 60 students per batch',
    accent: '#0f023d',
    bg: '#ffffff',
    items: [
      'Institutional performance report per batch',
      'Consolidated cohort insights shared with placement team',
      'Evaluation team: Regional Managers, Senior Recruiters, Business Heads',
    ],
  },
]

const specialisations = ['Finance', 'International Finance', 'Marketing', 'Sales', 'Human Resources', 'Data Analytics']

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
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      id="program2"
      ref={ref}
      style={{
        height: isMobile ? 'auto' : '100vh',
        boxSizing: 'border-box',
        paddingTop: 68,
        background: '#fdf6e3',
        display: 'flex',
        flexDirection: 'column',
        overflow: isMobile ? 'visible' : 'hidden',
        paddingBottom: isMobile ? 40 : 0,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <style>{`
        .p2-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease !important;
        }
        .p2-card:hover {
          transform: translateY(-8px) scale(1.03) !important;
          box-shadow: 0 20px 48px rgba(0,0,0,0.15) !important;
          z-index: 2;
          position: relative;
        }
        @keyframes p2FadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .p2-card-0 { animation: p2FadeUp 0.45s ease 0.10s both; }
        .p2-card-1 { animation: p2FadeUp 0.45s ease 0.20s both; }
        .p2-card-2 { animation: p2FadeUp 0.45s ease 0.30s both; }
        .p2-card-3 { animation: p2FadeUp 0.45s ease 0.40s both; }
      `}</style>
 

      {/* ── HEADER — matches Program1 outcomes header style ── */}
      <div style={{
        flexShrink: 0,
        padding: '18px 4% 14px',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
      }}>
        {/* Eyebrow */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#9b2020', color: '#fff', fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 10px', marginBottom: 8 }}>⭐ Programme 2</div>
        {/* Title — same font/weight as Program1 h2 */}
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1.5rem, 2.4vw, 2rem)',
          fontWeight: 900,
          color: '#1a1208',
          margin: '0 0 10px',
          lineHeight: 1.1,
        }}>
          Interview Acceleration Lab
        </h2>

        {/* Subtitle + tags + outcomes + CTA all in one horizontal row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '2fr 1.2fr auto',
          gap: '0 32px',
          alignItems: 'start',
        }}>
          {/* Col 1: description + specialisations */}
          <div>
            <p style={{ fontSize: '0.9rem', color: '#4a3e2e', lineHeight: 1.6, margin: '0 0 7px' }}>
              A structured, specialisation sensitive interview readiness program designed to prepare Management students for corporate placements with measurable improvement between two scored rounds.
            </p>
            <div style={{
              background: 'rgba(165, 217, 224, 0.3)',
              border: '1px solid rgba(165, 217, 224, 0.65)',
              borderRadius: 5,
              padding: '7px 11px',
              marginBottom: 7,
            }}>
              <p style={{ fontSize: '1.0rem', color: '#498088', lineHeight: 1.55, margin: 0 }}>
                Recruiters don&apos;t just assess subject knowledge. They assess{' '}
                <strong>structured thinking, clarity of articulation, professional presence, business awareness, and composure under pressure.</strong>
              </p>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#4a3e2e', lineHeight: 1.55, margin: '0 0 8px' }}>
              This program is built around exactly those criteria.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {specialisations.map(s => (
                <span key={s} style={{
                  fontSize: '0.6rem', fontWeight: 600, padding: '3px 9px',
                  background: '#ede8d8', color: '#4a3a28', borderRadius: 3,
                  border: '1px solid #d8d0bc',
                }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2: learning outcomes */}
          <div>
            <div style={{ fontSize: '1.0rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a7a60', marginBottom: 5 }}>
              Learning Outcomes
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {outcomes.map(o => (
                <li key={o} style={{ display: 'flex', gap: 6, alignItems: 'flex-start', fontSize: '0.9rem', color: '#3a3020', lineHeight: 1.4 }}>
                  <span style={{ color: '#0a6b5a', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {o}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start', paddingTop: 2 }}>
            <a
              href="#contact"
              style={{
                background: '#a5d9e0',
                color: '#fff',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: '0.73rem',
                padding: '10px 20px',
                textDecoration: 'none',
                borderRadius: 4,
                whiteSpace: 'nowrap',
              }}
            >
              Enquire About Interview Lab →
            </a>
            <div style={{ fontSize: '0.6rem', color: '#8a7a60', lineHeight: 1.5 }}>
              India-wide · Online &amp; On-Campus<br />
              Pilot cohort payable post execution
            </div>
          </div>
        </div>
      </div>

        {/* ── 4 CARDS HORIZONTAL ── */}
      <div style={{
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
        gap: 12,
        padding: isMobile ? '14px 4% 20px' : '14px 4%',
        boxSizing: 'border-box',
      }}>
        {phases.map((p, i) => (
          <div
            key={p.num}
            className={`p2-card p2-card-${i}`}
            style={{
              background: '#fff',
              border: '1px solid #e8e0d0',
              borderTop: `3px solid ${p.accent}`,
              borderRadius: 6,
              padding: '14px 16px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              // fade-in on scroll
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(18px)',
            }}
          >
            {/* Card header */}
            <div>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{
                  fontSize: '0.57rem', fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: p.accent, lineHeight: 1.3,
                }}>
                  {p.label}
                </span>
                <span style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.8rem', fontWeight: 900,
                  color: p.accent, opacity: 0.1, lineHeight: 1, flexShrink: 0,
                }}>
                  {p.num}
                </span>
              </div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '0.95rem', fontWeight: 800,
                color: '#1a1208', lineHeight: 1.2, marginBottom: 5,
              }}>
                {p.title}
              </div>
              <span style={{
                display: 'inline-block',
                fontSize: '0.58rem', fontWeight: 600,
                color: p.accent,
                background: `${p.accent}12`,
                border: `1px solid ${p.accent}22`,
                padding: '2px 7px', borderRadius: 3,
              }}>
                {p.duration}
              </span>
            </div>
 
            {/* Divider */}
            <div style={{ height: 1, background: '#e8e0d0', flexShrink: 0 }} />
 
            {/* Items */}
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
              {p.items.map(item => (
                <li key={item} style={{
                  display: 'flex', gap: 8, alignItems: 'flex-start',
                  fontSize: '0.67rem', color: '#3a3020', lineHeight: 1.45,
                }}>
                  <span style={{
                    width: 5, height: 5, borderRadius: '50%',
                    background: p.accent, flexShrink: 0, marginTop: 5,
                  }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
 
    </div>
  )
}