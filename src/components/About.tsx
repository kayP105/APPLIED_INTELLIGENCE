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
    transition: `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
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
        fontFamily: "'DM Sans', sans-serif",
        background: '#0a0f1e',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Serif+Display:ital@0;1&display=swap');

        #about::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.35;
        }

        #about::after {
          content: '';
          position: absolute;
          top: -10%; right: -5%;
          width: 45%; height: 50%;
          background: radial-gradient(ellipse at center, rgba(212,175,84,0.07) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .about-section-label {
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(212,175,84,0.55);
          margin-bottom: 8px;
        }

        .about-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0.07), transparent);
        }

        .about-tag {
          font-size: 0.65rem;
          font-weight: 600;
          padding: 4px 11px;
          background: rgba(212,175,84,0.08);
          border: 1px solid rgba(212,175,84,0.22);
          color: #d4af54;
          border-radius: 999px;
          letter-spacing: 0.01em;
        }

        .about-li {
          display: flex;
          gap: 9px;
          align-items: flex-start;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.62);
          line-height: 1.6;
        }

        .about-arrow {
          color: #d4af54;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 1px;
        }
      `}</style>

      <div style={{
        position: 'relative', zIndex: 1, flex: 1,
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1.55fr',
      }}>

        {/* ── LEFT — profile card ── */}
        <div style={{
          borderRight: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          flexDirection: 'column',
          overflow: isMobile ? 'visible' : 'hidden',
          ...fadeStyle(0.05),
        }}>
          {/* Photo header */}
          <div style={{
            background: '#0d1b2e',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            flexShrink: 0,
            display: 'flex',
            height: 180,
          }}>
            <div style={{ width: '45%', flexShrink: 0, overflow: 'hidden', position: 'relative' }}>
              <img
                src="/godwin.jpg"
                alt="Godwin Paul"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
              />
              <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, transparent, #d4af54, transparent)' }} />
            </div>

            <div style={{ flex: 1, padding: '20px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 5 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                background: 'rgba(212,175,84,0.1)', border: '1px solid rgba(212,175,84,0.25)',
                borderRadius: 999, padding: '2px 9px', width: 'fit-content', marginBottom: 2,
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#d4af54', display: 'inline-block' }} />
                <span style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#d4af54' }}>Founder</span>
              </div>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.15rem', fontStyle: 'italic', color: '#fff' }}>Godwin Paul</div>
              <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>Applied Intelligence Academy</div>
              <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)', marginTop: 1 }}>Corporate Readiness &amp; Talent Professional</div>
            </div>
          </div>

          {/* Body */}
          <div style={{
            flex: 1, minHeight: 0, overflowY: 'auto',
            padding: '22px 24px',
            background: '#0d1b2e',
            display: 'flex', flexDirection: 'column', gap: 16,
          }}>
            <div>
              <div className="about-section-label">Experience</div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  'Worked closely with leadership teams on strategy and execution',
                  'Involved in evaluating talent across roles and functions',
                  'Designed and conducted multiple career training programs for MBA and UG students focused on real-world employability',
                ].map(item => (
                  <li key={item} className="about-li">
                    <span className="about-arrow">→</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="about-divider" />

            <div>
              <div className="about-section-label">The Team at Applied Intelligence Includes</div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  'Regional Managers & Heads of Business Verticals',
                  'Senior Recruiters at global organisations',
                ].map(item => (
                  <li key={item} className="about-li">
                    <span className="about-arrow">→</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="about-divider" />

            <div>
              <div className="about-section-label">His Approach</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['Structured Thinking', 'AI-Enabled Workflows', 'Outcome Execution'].map(t => (
                  <span key={t} className="about-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT — about content ── */}
        <div style={{
          padding: isMobile ? '28px 5% 24px' : '36px 5% 32px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
          background: '#0a0f1e',
        }}>

          {/* Eyebrow */}
          <div style={{ ...fadeStyle(0.1), display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 22, height: 2, background: '#d4af54', display: 'inline-block', borderRadius: 2, flexShrink: 0 }} />
            <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#d4af54' }}>
              About the Founder
            </span>
          </div>

          {/* Heading */}
          <h2 style={{
            ...fadeStyle(0.15),
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)',
            fontWeight: 400, fontStyle: 'italic',
            color: '#ffffff', margin: 0, lineHeight: 1.1, letterSpacing: '-0.02em',
          }}>
            Bridging the gap between AI and real-world careers.
          </h2>

          {/* Para 1 */}
          <p style={{ ...fadeStyle(0.2), fontSize: '0.8rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.8, margin: 0 }}>
            Applied Intelligence Academy was founded by Godwin Paul — a strategy and operations professional working at the intersection of AI, business execution, and talent development. His work is focused on a single, critical gap: while AI is transforming how work gets done, most management and commerce students are not being trained to use it effectively in real-world roles.
          </p>

          {/* Quote */}
          <div style={{
            ...fadeStyle(0.25),
            background: '#0d1b2e',
            border: '1px solid rgba(255,255,255,0.07)',
            borderLeft: '3px solid #d4af54',
            borderRadius: '0 12px 12px 0',
            padding: '18px 22px',
          }}>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '2rem', color: 'rgba(212,175,84,0.18)', lineHeight: 1, marginBottom: 6 }}>&ldquo;</div>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1rem', fontStyle: 'italic', color: '#fff', lineHeight: 1.55 }}>
              AI is not replacing jobs. It is replacing people who don&apos;t know how to use it.
            </div>
            <div style={{ fontSize: '0.62rem', color: 'rgba(212,175,84,0.55)', marginTop: 10, letterSpacing: '0.04em' }}>— Godwin Paul, Founder</div>
          </div>

          {/* Para 2 */}
          <p style={{ ...fadeStyle(0.3), fontSize: '0.8rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.8, margin: 0 }}>
            Most AI education today is built for engineers. But the majority of students entering the workforce — in MBA, BBA, BCom, and management programs — are expected to use AI in their day-to-day roles without any structured training to do so. That is the gap Applied Intelligence Academy was built to close.
          </p>

          {/* Vision box — slate-grey highlight */}
          <div style={{
            ...fadeStyle(0.35),
            background: '#0d1b2e',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 12,
            padding: '18px 22px',
          }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(100,112,124,0.2)',
              border: '1px solid rgba(100,112,124,0.3)',
              borderRadius: 999, padding: '3px 10px', marginBottom: 12,
            }}>
              <span style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9aaabb' }}>
                Founder's Vision
              </span>
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Build a generation of non-engineering professionals who think clearly and act decisively',
                'Train students to use AI as a professional tool — not a novelty',
                'Ensure every graduate performs at the level companies expect from Day 1',
              ].map(item => (
                <li key={item} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', fontSize: '0.75rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.55 }}>
                  <div style={{
                    width: 16, height: 16, borderRadius: 4, flexShrink: 0, marginTop: 1,
                    background: 'rgba(212,175,84,0.1)', border: '1px solid rgba(212,175,84,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.55rem', color: '#d4af54',
                  }}>✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Closing */}
          <div style={{
            ...fadeStyle(0.4),
            fontSize: '0.82rem', color: 'rgba(255,255,255,0.38)',
            lineHeight: 1.6, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16,
          }}>
            This is not about learning AI.{' '}
            <span style={{ fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', color: '#d4af54' }}>
              This is about becoming AI-enabled.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}