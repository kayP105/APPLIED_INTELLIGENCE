'use client'

import { useState, useEffect, useRef } from 'react'

const deliverables = [
  '01 AI Tools & Work Map', '02 Personal Prompt Library', '03 Industry Research Brief',
  '04 Mini Business Case', '05 Professional Writing Pack', '06 Meeting-to-Action Pack',
  '07 Presentation Deck', '08 Data Insights Report', '09 Personal AI Workflow SOP',
  '10 Placement-Ready Career Kit',
]

const weeks = [
  { code: 'W1', num: 1, title: 'Context, Urgency & Foundations', sub: 'Shift from student to professional mindset',
    sessions: [
      { code: 'S1', title: 'Careers in the AI Era: Threat, Opportunity & Survival Toolkit', output: 'AI Tools & Work Map' },
      { code: 'S2', title: 'Structured Thinking → Prompting Mastery', output: 'Personal Prompt Library' },
    ]},
  { code: 'W2', num: 2, title: 'Research & Analytical Thinking Lab', sub: 'Think like professionals, not students',
    sessions: [
      { code: 'S3', title: 'Research Thinking with AI Tools', output: 'Industry Research Brief' },
      { code: 'S4', title: 'Business Analysis & Case Thinking with AI', output: 'Mini Business Case' },
    ]},
  { code: 'W3', num: 3, title: 'Professional Communication & Work Execution', sub: 'Effective communicators and reliable executors',
    sessions: [
      { code: 'S5', title: 'Professional Writing Lab with AI', output: 'Professional Writing Pack' },
      { code: 'S6', title: 'Meetings, Documentation & Project Tracking', output: 'Meeting-to-Action Pack' },
    ]},
  { code: 'W4', num: 4, title: 'Presentations & Business Storytelling', sub: 'Think before you open PowerPoint',
    sessions: [
      { code: 'S7', title: 'Slide Thinking & Storyboarding Lab', output: 'Presentation Storyboard' },
      { code: 'S8', title: 'Building Business-Ready Presentations with AI', output: 'Presentation Deck' },
    ]},
  { code: 'W5', num: 5, title: 'Excel, Data & Productivity Systems', sub: 'Decision-oriented data thinking',
    sessions: [
      { code: 'S9', title: 'Excel & Data Reasoning Lab with AI', output: 'Data Insight Report' },
      { code: 'S10', title: 'Building a Personal AI Productivity System', output: 'AI Workflow SOP' },
    ]},
  { code: 'W6', num: 6, title: 'Career Application & Placement Readiness', sub: 'Convert learning into placement outcomes',
    sessions: [
      { code: 'S11', title: 'Career Mapping & Career Intelligence Lab', output: 'Career Intelligence Report' },
      { code: 'S12', title: 'Resume, LinkedIn & Interview Readiness Lab', output: 'Career Readiness Kit' },
    ]},
]

const outcomes = [
  { icon: '🧠', title: 'Think structurally under pressure', body: 'Frame problems and communicate ideas the way professionals do.' },
  { icon: '⚙️', title: 'Use AI across real job functions', body: 'Fluent in AI tools for research, analysis, communication and data.' },
  { icon: '📋', title: 'Produce work companies can evaluate', body: '10 deliverables — real outputs that prove performance, not potential.' },
  { icon: '💬', title: 'Communicate with professional clarity', body: 'Write emails and present ideas at the standard employers expect.' },
  { icon: '🎯', title: 'Perform in interviews', body: 'STAR-structured answers, real work in resume, confidence through production.' },
  { icon: '📈', title: 'Stand out from peers', body: 'Prove skills with a real portfolio while others just talk about them.' },
]

// ── Update filenames to match your /public directory ──
const outcomeImages = [
  '/outcome-1.jpg',
  '/outcome-2.jpg',
  '/outcome-3.jpg',
  '/outcome-4.jpg',
  '/outcome-5.jpg',
  '/outcome-6.jpg',
]

const weekColors = ['#f9d5c5','#d5e8c5','#c5d5f0','#f0e6c5','#d5c5f0','#c5f0e8']
const weekTextColors = ['#7a3010','#2a5a10','#1a3a7a','#6a4a10','#3a1a7a','#0a5a48']

const stats = [
  { num: '6', suffix: 'Wks', desc: 'Full certification program' },
  { num: '10+', suffix: '', desc: 'Professional deliverables' },
  { num: '75%+', suffix: '', desc: 'Hands-on execution' },
  { num: '₹0', suffix: 'Risk', desc: 'Pilot before commitment' },
]

export default function Program1() {
  const [activeWeek, setActiveWeek] = useState(0)
  const [tlVisible, setTlVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const tlRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const el = tlRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTlVisible(true); obs.disconnect() } },
      { threshold: 0 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <style>{`
        /* ── PAGE 1 responsive ── */
        @media (max-width: 767px) {
          .p1-grid { grid-template-columns: 1fr !important; }
          .p1-section { padding: 80px 4% 32px !important; min-height: auto !important; align-items: flex-start !important; }
          .p1-calendar { display: none !important; }
          .p1-deliverables { grid-template-columns: 1fr !important; }
        }

        /* ── Outcome cards — base (desktop) ── */
        .p2-outcomes-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .outcome-card {
          display: flex;
          overflow: hidden;
        }
        .outcome-card-image {
          flex-shrink: 0;
          width: 36%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 12px;
        }
        .outcome-card-image img {
          width: 100%;
          max-height: 110px;
          object-fit: contain;
          border-radius: 4px;
          display: block;
        }
        .outcome-card-text {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 4px;
          padding: 12px 16px;
        }

        /* ── Mobile overrides ── */
        @media (max-width: 767px) {
          #program1-outcomes {
            height: auto !important;
            min-height: unset !important;
            overflow: visible !important;
          }
          .p2-page {
            height: auto !important;
            overflow-y: visible !important;
          }
          .p2-header { height: auto !important; padding: 16px 4% !important; }
          .p2-timeline {
            padding: 12px 4% !important;
            flex: none !important;
            overflow-y: visible !important;
          }
          .p2-outcomes-grid {
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
          .p2-spine { display: none !important; }
          .p2-stats-inner {
            grid-template-columns: repeat(2, 1fr) !important;
            row-gap: 14px !important;
            padding: 8px 4% !important;
          }
          /* On mobile: keep row layout but shrink image panel */
          .outcome-card {
            flex-direction: row !important;
            min-height: 80px;
          }
          .outcome-card-image {
            width: 25% !important;
            padding: 8px 8px !important;
            border-right: 1px solid rgba(221,214,200,0.5) !important;
            border-left: none !important;
            border-bottom: none !important;
          }
          .outcome-card-image img {
            max-height: 64px !important;
          }
          .outcome-card-text {
            padding: 10px 12px !important;
            justify-content: flex-start !important;
          }
        }

        /* ── Animations ── */
        @keyframes spineGrow {
          from { transform: translateX(-50%) scaleY(0); }
          to   { transform: translateX(-50%) scaleY(1); }
        }
      `}</style>

      {/* ══ PAGE 1: Cert + Calendar ══ */}
      <section id="program1" className="p1-section" style={{
        position: 'relative', minHeight: '100vh', display: 'flex',
        alignItems: 'center', padding: '72px 3% 24px',
        boxSizing: 'border-box', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/program1-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center 30%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,20,10,0.65)' }} />

        <div className="p1-grid" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, width: '100%', alignItems: 'start' }}>

          {/* LEFT */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ background: 'rgba(253,250,244,0.96)', border: '1.5px solid #9b2020', padding: '20px 24px', position: 'relative', boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}>
              <div style={{ position: 'absolute', inset: 5, border: '0.5px solid #c9a96e', pointerEvents: 'none' }} />
              <div style={{ textAlign: 'center', marginBottom: 12, paddingBottom: 12, borderBottom: '0.5px solid #c9a96e', position: 'relative' }}>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9b7040', marginBottom: 6 }}>Applied Intelligence Academy</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#9b2020', color: '#fff', fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 10px', marginBottom: 8 }}>⭐ Programme 1</div>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.4rem,2vw,1.9rem)', fontWeight: 900, color: '#1a0f0f', lineHeight: 1.15, margin: '0 0 4px' }}>AI Productivity &amp; Career Certification</h2>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.7rem', color: '#9b7040', fontStyle: 'italic' }}>A 6-Week Professional Development Programme</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
                {[['6','Weeks'],['12','Sessions'],['24hrs','Live'],['75–80%','Hands-on']].map(([n,l]) => (
                  <div key={l} style={{ textAlign: 'center', padding: '10px 4px', background: '#fff', border: '0.5px solid #ddd0b8' }}>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.1rem', fontWeight: 900, color: '#9b2020', lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9b7040', fontFamily: "'Plus Jakarta Sans',sans-serif", marginTop: 3 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.12)', padding: '14px 18px' }}>
              <p style={{ fontFamily: "'Playfair Display',serif", fontSize: '0.88rem', fontStyle: 'italic', color: '#fff', lineHeight: 1.6, margin: 0 }}>&ldquo;Students don&apos;t attend sessions — they <span style={{ color: '#f0c060', fontStyle: 'normal', fontWeight: 700 }}>produce output</span> in every single one.&rdquo;</p>
            </div>

            <div>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 8 }}>What Every Student Builds &amp; Leaves With</div>
              <div className="p1-deliverables" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
                {deliverables.map(d => (
                  <div key={d} style={{ background: 'rgba(255,255,255,0.88)', padding: '5px 10px', fontSize: '0.72rem', color: '#1a0f0f', fontFamily: "'Plus Jakarta Sans',sans-serif", display: 'flex', gap: 7 }}>
                    <span style={{ color: '#9b2020', fontWeight: 700, fontSize: '0.65rem', flexShrink: 0 }}>{d.slice(0,2)}</span>
                    <span>{d.slice(3)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="#contact" style={{ background: '#9b2020', color: '#fff', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: '0.78rem', padding: '10px 22px', textDecoration: 'none' }}>Request Pilot →</a>
              <a href="#contact" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: '0.78rem', padding: '10px 22px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.35)' }}>Download Curriculum</a>
            </div>
          </div>

          {/* RIGHT — Calendar (hidden on mobile) */}
          <div className="p1-calendar" style={{ background: 'rgba(255,255,255,0.95)', boxShadow: '0 8px 32px rgba(0,0,0,0.2)', overflow: 'hidden' }}>
            <div style={{ background: '#1a0f0f', padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: 2 }}>6-Week Programme</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1rem', fontWeight: 700, color: '#fdfaf4' }}>Session Calendar</div>
              </div>
              <div style={{ display: 'flex', gap: 5 }}>
                {weeks.map((w, i) => (
                  <button key={w.code} onClick={() => setActiveWeek(i)} style={{ width: 26, height: 26, borderRadius: '50%', border: activeWeek === i ? `2px solid ${weekColors[i]}` : '1px solid rgba(255,255,255,0.15)', background: activeWeek === i ? weekColors[i] : 'transparent', color: activeWeek === i ? weekTextColors[i] : 'rgba(255,255,255,0.5)', fontSize: '0.62rem', fontWeight: 700, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif", transition: 'all 0.2s' }}>{w.num}</button>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
              {weeks.map((w, i) => (
                <div key={w.code} onClick={() => setActiveWeek(i)} style={{ padding: '10px 12px', borderRight: i%3!==2 ? '1px solid #ede8e0' : 'none', borderBottom: i<3 ? '1px solid #ede8e0' : 'none', cursor: 'pointer', background: activeWeek===i ? weekColors[i] : '#fff', transition: 'background 0.2s' }}>
                  <span style={{ display: 'inline-block', background: activeWeek===i ? weekTextColors[i] : '#e8e2d8', color: activeWeek===i ? '#fff' : '#6a5a48', fontSize: '0.5rem', fontWeight: 800, padding: '1px 5px', marginBottom: 4, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{w.code}</span>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: activeWeek===i ? weekTextColors[i] : '#1a0f0f', lineHeight: 1.25 }}>{w.title}</div>
                  <div style={{ fontSize: '0.58rem', color: activeWeek===i ? weekTextColors[i] : '#9b7040', marginTop: 2, fontFamily: "'Plus Jakarta Sans',sans-serif", fontStyle: 'italic', opacity: 0.8 }}>{w.sub}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: '12px 16px', background: '#fdfaf4', borderTop: '1px solid #ede8e0' }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9b7040', marginBottom: 8 }}>Sessions this week</div>
              {weeks[activeWeek].sessions.map(s => (
                <div key={s.code} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 12px', marginBottom: 6, background: weekColors[activeWeek], border: `0.5px solid ${weekTextColors[activeWeek]}22` }}>
                  <span style={{ background: weekTextColors[activeWeek], color: '#fff', fontSize: '0.5rem', fontWeight: 800, padding: '2px 5px', flexShrink: 0, fontFamily: "'Plus Jakarta Sans',sans-serif", marginTop: 1 }}>{s.code}</span>
                  <div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.76rem', fontWeight: 600, color: weekTextColors[activeWeek], marginBottom: 2, lineHeight: 1.3 }}>{s.title}</div>
                    <div style={{ fontSize: '0.65rem', color: weekTextColors[activeWeek], fontWeight: 600, fontFamily: "'Plus Jakarta Sans',sans-serif", opacity: 0.8 }}>📄 {s.output}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PAGE 2: Outcomes + Timeline ══ */}
      <div
        id="program1-outcomes"
        ref={tlRef}
        className="p2-page"
        style={{
          height: '100vh',
          boxSizing: 'border-box',
          backgroundImage: "url('/gradient-mesh.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          paddingTop: 68,
        }}
      >
        {/* HEADER */}
        <div className="p2-header" style={{
          height: 64,
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 4%',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          background: 'rgba(253,246,227,0.6)',
          backdropFilter: 'blur(8px)',
        }}>
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
                What Students Gain
              </div>
          <h2 style={{ fontSize: 'clamp(1.2rem,2vw,1.6rem)', fontWeight: 900, color: '#1a1208', margin: 0, fontFamily: "'Playfair Display',serif", lineHeight: 1.1 }}>
            After 6 weeks, your students will:
          </h2>
        </div>

        {/* OUTCOMES GRID */}
        <div className="p2-timeline" style={{
          flex: 1,
          minHeight: 0,
          position: 'relative',
          padding: '14px 5%',
          overflowY: isMobile ? 'auto' : 'hidden',
        }}>
          {/* Spine — desktop only */}
          <div className="p2-spine" style={{
            position: 'absolute',
            left: '50%',
            top: 14,
            bottom: 14,
            width: 1,
            background: 'linear-gradient(to bottom, #c9a96e44, #5a9a9088, #2a6a5a44)',
            transform: 'translateX(-50%)',
            transformOrigin: 'top center',
            animation: tlVisible ? 'spineGrow 0.8s cubic-bezier(0.4,0,0.2,1) both' : 'none',
          }} />

          {/* 2×3 grid of outcome cards */}
          <div className="p2-outcomes-grid" style={{ height: '100%' }}>
            {outcomes.map((o, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={i}
                  className="outcome-card"
                  style={{
                    background: 'rgba(217,244,248,0.88)',
                    backdropFilter: 'blur(6px)',
                    borderLeft: isLeft ? '3px solid #19357c' : '1px solid rgba(221,214,200,0.7)',
                    borderRight: isLeft ? '1px solid rgba(221,214,200,0.7)' : '3px solid #126b8c',
                    borderTop: '1px solid rgba(221,214,200,0.7)',
                    borderBottom: '1px solid rgba(221,214,200,0.7)',
                    borderRadius: isLeft ? '0 6px 6px 0' : '6px 0 0 6px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                    flexDirection: isLeft ? 'row' : 'row-reverse',
                    opacity: tlVisible ? 1 : 0,
                    transform: tlVisible
                      ? 'translateX(0)'
                      : `translateX(${isLeft ? '-20px' : '20px'})`,
                    transition: `opacity 0.45s ease ${0.1 + i * 0.1}s, transform 0.45s ease ${0.1 + i * 0.1}s`,
                  }}
                >
                  {/* Image panel */}
                  <div
                    className="outcome-card-image"
                    style={{
                      borderLeft: isLeft ? 'none' : '1px solid rgba(221,214,200,0.5)',
                      borderRight: isLeft ? '1px solid rgba(221,214,200,0.5)' : 'none',
                    }}
                  >
                    <img src={outcomeImages[i]} alt={o.title} />
                  </div>

                  {/* Text panel */}
                  <div className="outcome-card-text">
                    <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1b348f', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1a1208', lineHeight: 1.25, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                      {o.title}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#3a2e1e', lineHeight: 1.5, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                      {o.body}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* STATS BAR */}
        <div style={{
          flexShrink: 0,
          background: '#0f2a5c',
          display: 'flex',
          alignItems: 'center',
          padding: '12px 0',
        }}>
          <div className="p2-stats-inner" style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', textAlign: 'center' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none', padding: '0 10px' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#fff', lineHeight: 1.1, fontFamily: "'Playfair Display',serif" }}>
                  {s.num}
                  {s.suffix && <span style={{ color: '#93c5fd', fontSize: '0.82rem', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600 }}>{' '}{s.suffix}</span>}
                </div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)', fontFamily: "'Plus Jakarta Sans',sans-serif", marginTop: 2 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}