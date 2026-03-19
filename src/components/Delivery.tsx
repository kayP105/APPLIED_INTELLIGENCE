'use client'

import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    num: 1,
    title: 'Pilot Cohort',
    body: 'Begin with 10–15 volunteer students. Full program execution with structured feedback collection. You receive a complete outcome report before deciding anything further.',
    tags: ['10–15 students', 'Full program', 'Outcome report', 'No long-term commitment'],
    icon: '',
  },
  {
    num: 2,
    title: 'Full Batch Rollout',
    body: 'Scale across departments and batches. Standardised delivery ensures every cohort receives the same structured experience with consistent outcomes and quality.',
    tags: ['Batch-wise execution', 'Multi-department', 'Scalable model'],
    icon: '',
  },
  {
    num: 3,
    title: 'Outcome Tracking',
    body: 'Student output quality, interview scorecard data, and cohort-level insights all documented and shared. Data you can use for placement reporting and accreditation.',
    tags: ['Per-student data', 'Performance insights', 'Institutional report'],
    icon: '',
  },
]

export default function Delivery() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

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
      id="delivery"
      ref={ref}
      style={{
        height: '100vh',
        boxSizing: 'border-box',
        paddingTop: 68,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <style>{`
        .dlv-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .dlv-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 16px 40px rgba(0,0,0,0.13) !important;
        }
        @keyframes dlvFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dlv-0 { animation: dlvFadeUp 0.45s ease 0.15s both; }
        .dlv-1 { animation: dlvFadeUp 0.45s ease 0.27s both; }
        .dlv-2 { animation: dlvFadeUp 0.45s ease 0.39s both; }
      `}</style>

      {/* ── TOP: BLUE HEADER (~38% of page) ── */}
      <div style={{
        background: '#0f2a5c',
        flexShrink: 0,
        padding: '28px 5% 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 10,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.5s ease 0.05s, transform 0.5s ease 0.05s',
      }}>
        {/* Eyebrow */}
        <div style={{
          fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: '#93c5fd',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ width: 20, height: 1.5, background: '#93c5fd', display: 'inline-block' }} />
          How We Work With Colleges
        </div>

        {/* Title + sub in a row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'end' }}>
          <div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem,3vw,2.6rem)',
              fontWeight: 900, color: '#fff',
              margin: '0 0 10px', lineHeight: 1.08,
            }}>
              Designed for institutional execution.
            </h2>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, margin: 0 }}>
              Start small. Verify results. Scale with confidence. Every step is designed to give your institution control, evidence, and low-risk entry.
            </p>
          </div>

          {/* Callout box */}
          <div style={{
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(147,197,253,0.25)',
            borderLeft: '4px solid #3b82f6',
            borderRadius: '0 8px 8px 0',
            padding: '16px 20px',
          }}>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1rem', fontWeight: 700,
              color: '#fff', lineHeight: 1.5, margin: 0,
            }}>
              Low-risk pilot.{' '}
              <span style={{ color: '#93c5fd' }}>High-impact rollout.</span>{' '}
              Results you can show to your placement companies.
            </p>
          </div>
        </div>
      </div>

      {/* ── BOTTOM: VANILLA 3 COLUMNS — no cards, info overlaid on background sections ── */}
      <div style={{
        flex: 1,
        minHeight: 0,
        background: '#fdf6e3',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        position: 'relative',
      }}>
        {steps.map((s, i) => (
          <div
            key={s.num}
            style={{
              position: 'relative',
              padding: '24px 5%',
              borderRight: i < 2 ? '1px solid rgba(0,0,0,0.08)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              // Subtle tint per column so sections feel distinct without boxes
              background: i === 0
                ? 'rgba(59,130,246,0.04)'
                : i === 1
                ? 'rgba(59,130,246,0.02)'
                : 'transparent',
              opacity: visible ? 1 : 0,
              transition: `opacity 0.5s ease ${0.15 + i * 0.12}s`,
            }}
          >
            {/* Step number */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 38, height: 38, borderRadius: '50%',
                border: '2px solid #3b82f6',
                background: 'rgba(59,130,246,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Playfair Display', serif",
                fontSize: '1rem', fontWeight: 900, color: '#3b82f6',
                flexShrink: 0,
              }}>
                {s.num}
              </div>
              <span style={{ fontSize: '1.5rem', opacity: 0.5 }}>{s.icon}</span>
            </div>

            {/* Title */}
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.15rem', fontWeight: 800,
              color: '#1a1208', margin: 0, lineHeight: 1.2,
            }}>
              {s.title}
            </h3>

            {/* Thin accent line */}
            <div style={{ width: 32, height: 2, background: '#3b82f6', borderRadius: 2 }} />

            {/* Body */}
            <p style={{
              fontSize: '0.8rem', color: '#4a3e2e',
              lineHeight: 1.75, margin: 0,
            }}>
              {s.body}
            </p>

            {/* Tags — inline, no box */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
              {s.tags.map(t => (
                <span key={t} style={{
                  fontSize: '0.6rem', fontWeight: 600,
                  padding: '3px 9px',
                  background: 'rgba(59,130,246,0.08)',
                  border: '1px solid rgba(218, 218, 218, 0.18)',
                  color: '#1d4ed8',
                  borderRadius: 3,
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}