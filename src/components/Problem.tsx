'use client'

import { useState, useEffect } from 'react'
import FadeUp from './FadeUp'

const cards = [
  {
    img: '/problem-1.jpg',
    label: 'Strong Academics',
    title: 'Strong academics. Weak execution.',
    body: "MBA and management students graduate with knowledge but struggle to translate it into professional output. They can describe concepts. They can't produce deliverables.",
  },
  {
    img: '/problem-2.jpg',
    label: 'AI Baseline',
    title: 'AI is now a baseline expectation, not a bonus skill.',
    body: "Recruiters in finance, marketing, HR and operations now evaluate AI fluency the same way they once evaluated Excel skills. Students who can't demonstrate it are filtered out.",
  },
  {
    img: '/problem-3.jpg',
    label: 'Interview',
    title: "Interview preparation isn't the same as interview readiness.",
    body: "Students study for interviews. But under pressure, most revert to vague answers, unstructured thinking, and lack of confidence. Preparation and readiness are not the same thing.",
  },
]

export default function Problem() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section
      id="problem"
      style={{
        background: '#fdf6e3',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'stretch',
        padding: 0,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '100%',
          padding: '55px 3% 32px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: '36px',
        }}
      >
        {/* ── TOP ROW ── */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '55fr 38fr', gap: isMobile ? '24px' : '40px', alignItems: 'start' }}>

          {/* Left */}
          <div>
            <FadeUp>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: '0.68rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#8a7450',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                <span style={{ width: 24, height: 1, background: '#8a7450', flexShrink: 0, display: 'inline-block' }} />
                The Gap No One Talks About
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.8rem, 2.6vw, 2.5rem)',
                fontWeight: 900,
                color: '#081a19',
                lineHeight: 1.18,
                marginBottom: '16px',
                letterSpacing: '-0.02em',
              }}>
                Management students are entering a workforce that expects AI fluency.
                They&apos;re not being prepared for it.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.9rem', color: '#5a4e3a', lineHeight: 1.8, marginBottom: '8px' }}>
                Every recruiter evaluating your students today expects more faster thinking, structured output, and the ability to work alongside AI tools. The academic curriculum hasn&apos;t caught up. That gap shows up at every placement interview.
              </p>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.9rem', color: '#5a4e3a', lineHeight: 1.8 }}>
                This isn&apos;t a technology problem. It&apos;s a training problem. And it&apos;s solvable in six weeks.
              </p>
            </FadeUp>
          </div>

          {/* Right callouts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <FadeUp delay={0.2}>
              <div style={{ background: '#a5d9e0', borderRadius: 3, padding: '20px 22px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#000000', marginBottom: 6 }}>The Majority</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 900, color: '#ffffff', lineHeight: 1, marginBottom: 8 }}>Non-engineers</div>
                <p style={{ fontSize: '0.8rem', color: 'rgba(23, 21, 18, 0.6)', lineHeight: 1.55, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  are the largest group entering the workforce and the least prepared for AI-integrated work environments.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div style={{ background: '#ede8d8', borderLeft: '3px solid #8a7450', padding: '16px 18px' }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.95rem', fontWeight: 700, color: '#1a1208', lineHeight: 1.5 }}>
                  Colleges are producing graduates.<br />
                  Companies are hiring professionals.<br />
                  That gap is exactly where placements are lost.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* ── 3 CARDS ── */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 16 }}>
          {cards.map((card, i) => (
            <FadeUp key={card.title} delay={i * 0.1}>
              <div
                style={{
                  background: '#aecfcf',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(26,18,8,0.08)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'default',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = 'scale(1.03) translateY(-4px)'
                  el.style.boxShadow = '0 14px 36px rgba(26,18,8,0.14)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = 'scale(1) translateY(0)'
                  el.style.boxShadow = '0 2px 10px rgba(26,18,8,0.08)'
                }}
              >
                {/* Image area */}
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/5', background: '#7eb5b5', overflow: 'hidden', flexShrink: 0 }}>
                  <img
                    src={card.img}
                    alt={card.label}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'relative', zIndex: 2 }}
                    onLoad={e => {
                      const placeholder = (e.currentTarget as HTMLImageElement).nextElementSibling as HTMLElement
                      if (placeholder) placeholder.style.display = 'none'
                    }}
                    onError={e => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none'
                    }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', gap: 4,
                    background: 'linear-gradient(135deg, #7eb5b5, #6aa5a5)',
                    zIndex: 1,
                  }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#0a2a2a', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>📷 {card.label}</span>
                    <small style={{ fontSize: '0.6rem', color: '#1a4a4a', fontFamily: 'monospace' }}>Loading...</small>
                  </div>
                </div>
                {/* Text */}
                <div style={{ padding: '16px 16px 18px', flex: 1, background: '#c2dede' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.95rem', fontWeight: 700, color: '#0a2020', marginBottom: 7, lineHeight: 1.3 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: '#1a3a3a', lineHeight: 1.65, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {card.body}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}