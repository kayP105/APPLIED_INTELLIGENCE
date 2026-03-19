'use client'

import { useEffect, useRef, useState } from 'react'

export default function About() {
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

  const fadeStyle = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(14px)',
    transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
  })

  return (
    <div
      id="about"
      ref={ref}
      style={{
        height: isMobile ? 'auto' : '100vh',
        minHeight: isMobile ? 'unset' : undefined,
        boxSizing: 'border-box',
        paddingTop: 68,
        paddingBottom: isMobile ? 40 : 0,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'visible',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/gradient-mesh.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
      {/* Overlay — light enough to see gradient, heavy enough for readability */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(253,246,227,0.78)' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.55fr' }}>

        {/* ── LEFT COLUMN — profile card ── */}
        <div style={{
          borderRight: '1px solid rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column',
          overflow: isMobile ? 'visible' : 'hidden',
          ...fadeStyle(0.05),
        }}>
          {/* Top — dark navy header */}
          <div style={{
          background: '#0f2a5c',
          flexShrink: 0,
          display: 'flex',
          height: '180px',
        }}>
          {/* Left — photo fills half */}
          <div style={{
            width: '45%',
            flexShrink: 0,
            overflow: 'hidden',
          }}>
            <img
              src="/godwin.jpg"
              alt="Godwin Paul"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
            />
          </div>

          {/* Right — details */}
          <div style={{
            flex: 1,
            padding: '20px 18px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 4,
          }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 900, color: '#fff' }}>Godwin Paul</div>
            <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.4 }}>Founder, Applied Intelligence Academy</div>
            <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>Corporate Readiness &amp; Talent Professional</div>
          </div>
        </div>

          {/* Body — vanilla glass */}
          <div style={{
            flex: 1, minHeight: 0, overflowY: 'auto',
            padding: '20px 28px',
            background: 'rgba(253,246,227,0.65)',
            backdropFilter: 'blur(8px)',
            display: 'flex', flexDirection: 'column', gap: 16,
          }}>
            {/* Experience */}
            <div>
              <div style={{ fontSize: '0.58rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8a7a60', marginBottom: 8 }}>Experience</div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                {[
                  'Worked closely with leadership teams on strategy and execution',
                  'Involved in evaluating talent across roles and functions',
                  'Designed and conducted multiple career training programs for MBA and UG students focused on real-world employability',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: '0.72rem', color: '#3a2e1e', lineHeight: 1.55 }}>
                    <span style={{ color: '#3b82f6', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ height: 1, background: 'rgba(0,0,0,0.07)' }} />

            {/* Evaluation Team */}
            <div>
              <div style={{ fontSize: '0.58rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8a7a60', marginBottom: 8 }}>Evaluation Team Includes</div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                {[
                  'Regional Managers & Heads of Business Verticals',
                  'Senior Recruiters at global organisations',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: '0.72rem', color: '#3a2e1e', lineHeight: 1.55 }}>
                    <span style={{ color: '#3b82f6', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ height: 1, background: 'rgba(0,0,0,0.07)' }} />

            {/* Approach tags */}
            <div>
              <div style={{ fontSize: '0.58rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8a7a60', marginBottom: 8 }}>His Approach</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['Structured Thinking', 'AI-Enabled Workflows', 'Outcome Execution'].map(t => (
                  <span key={t} style={{
                    fontSize: '0.65rem', fontWeight: 600,
                    padding: '4px 11px',
                    background: 'rgba(59,130,246,0.08)',
                    border: '1px solid rgba(59,130,246,0.2)',
                    color: '#1d4ed8', borderRadius: 4,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN — about content ── */}
        <div style={{
          padding: '28px 5% 24px',
          overflowY: 'visible',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}>
          {/* Eyebrow */}
          <div style={{ ...fadeStyle(0.1), fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#3b82f6', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 20, height: 1.5, background: '#3b82f6', display: 'inline-block' }} />
            About the Founder
          </div>

          {/* Heading */}
          <h2 style={{ ...fadeStyle(0.15), fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem,2.6vw,2.2rem)', fontWeight: 900, color: '#1a1208', margin: 0, lineHeight: 1.1 }}>
            Bridging the gap between AI and real-world careers.
          </h2>

          {/* Para 1 */}
          <p style={{ ...fadeStyle(0.2), fontSize: '0.8rem', color: '#3a2e1e', lineHeight: 1.75, margin: 0 }}>
            Applied Intelligence Academy was founded by Godwin Paul — a strategy and operations professional working at the intersection of AI, business execution, and talent development. His work is focused on a single, critical gap: while AI is transforming how work gets done, most management and commerce students are not being trained to use it effectively in real-world roles.
          </p>

          {/* Quote box */}
          <div style={{
            ...fadeStyle(0.25),
            background: '#0f2a5c',
            borderLeft: '4px solid #3b82f6',
            borderRadius: '0 8px 8px 0',
            padding: '16px 20px',
          }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: 'rgba(255,255,255,0.2)', lineHeight: 1, marginBottom: 6 }}>&ldquo;</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.95rem', fontWeight: 700, color: '#fff', lineHeight: 1.5 }}>
              AI is not replacing jobs. It is replacing people who don&apos;t know how to use it.
            </div>
            <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.55)', marginTop: 8 }}>— Godwin Paul, Founder</div>
          </div>

          {/* Para 2 */}
          <p style={{ ...fadeStyle(0.3), fontSize: '0.8rem', color: '#3a2e1e', lineHeight: 1.75, margin: 0 }}>
            Most AI education today is built for engineers. But the majority of students entering the workforce  in MBA, BBA, BCom, and management programs are expected to use AI in their day-to-day roles without any structured training to do so. That is the gap Applied Intelligence Academy was built to close.
          </p>

          {/* Vision box */}
          <div style={{
            ...fadeStyle(0.35),
            background: 'rgba(59,130,246,0.06)',
            border: '1px solid rgba(59,130,246,0.18)',
            borderRadius: 8,
            padding: '14px 18px',
          }}>
            <div style={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1d4ed8', marginBottom: 10 }}>Founder&apos;s Vision</div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
              {[
                'Build a generation of non-engineering professionals who think clearly and act decisively',
                'Train students to use AI as a professional tool not a novelty',
                'Ensure every graduate performs at the level companies expect from Day 1',
              ].map(item => (
                <li key={item} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: '0.72rem', color: '#1a2e5c', lineHeight: 1.5 }}>
                  <span style={{ color: '#3b82f6', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Closing line */}
          <div style={{
            ...fadeStyle(0.4),
            fontSize: '0.82rem', color: '#5a4e3a', lineHeight: 1.6,
            borderTop: '1px solid rgba(0,0,0,0.07)',
            paddingTop: 14,
          }}>
            This is not about learning AI.{' '}
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#0f2a5c', fontStyle: 'italic' }}>
              This is about becoming AI-enabled.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}