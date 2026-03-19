'use client'

import { useState, useEffect } from 'react'

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

const weekColors = ['#f9d5c5','#d5e8c5','#c5d5f0','#f0e6c5','#d5c5f0','#c5f0e8']
const weekTextColors = ['#7a3010','#2a5a10','#1a3a7a','#6a4a10','#3a1a7a','#0a5a48']

const stats = [
  { num: '6', suffix: 'Wks', desc: 'Full certification program' },
  { num: '10+', suffix: '', desc: 'Professional deliverables' },
  { num: '75%+', suffix: '', desc: 'Hands-on execution' },
  { num: '₹0', suffix: 'Risk', desc: 'Pilot before commitment' },
]

const arcColors = ['#f9c784','#a8d8a8','#84b8f9','#f9a8d4','#c4a8f9','#a8f0d8']

export default function Program1() {
  const [activeWeek, setActiveWeek] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <>
      {/* ── PAGE 1: unchanged ── */}
      <section id="program1" style={{
        position: 'relative', minHeight: '100vh', display: 'flex',
        alignItems: 'center', padding: '72px 3% 24px',
        boxSizing: 'border-box', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/program1-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center 30%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,20,10,0.65)' }} />
        <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 24, width: '100%', alignItems: 'start' }}>
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
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 5 }}>
                {deliverables.map(d => (
                  <div key={d} style={{ background: 'rgba(255,255,255,0.88)', padding: '5px 10px', fontSize: '0.72rem', color: '#1a0f0f', fontFamily: "'Plus Jakarta Sans',sans-serif", display: 'flex', gap: 7 }}>
                    <span style={{ color: '#9b2020', fontWeight: 700, fontSize: '0.65rem', flexShrink: 0 }}>{d.slice(0,2)}</span>
                    <span>{d.slice(3)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, flexDirection: isMobile ? 'column' : 'row' }}>
              <a href="#contact" style={{ background: '#9b2020', color: '#fff', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: '0.78rem', padding: '10px 22px', textDecoration: 'none' }}>Request Pilot →</a>
              <a href="#contact" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: '0.78rem', padding: '10px 22px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.35)' }}>Download Curriculum</a>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.95)', boxShadow: '0 8px 32px rgba(0,0,0,0.2)', overflow: 'hidden' }}>
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

      {/* ── PAGE 2: Outcomes + Timeline ──
        
        WHY <div> NOT <section>:
        globals.css has `#program1 { padding: 100px 0 }` which would fight our inline
        height if we used id="program1-outcomes" on a <section>. Using a plain <div>
        and overriding all layout inline keeps it clean.

        WHY calc(100vh - 68px) + marginTop 68px:
        The nav is position:fixed, height:68px. Every "100vh" section has 68px
        obscured at the top by the nav. So the actual usable height is 100vh - 68px.
        We push the div down by 68px with marginTop so it starts below the nav.

        WHY three fixed children (header + timeline + stats):
        flex:1 alone on the timeline allows it to grow beyond the container when
        the browser's 100vh calculation is off by even 1px, pushing the stats bar
        out of view. Anchoring header and stats to fixed pixel heights (88px + 72px)
        and letting the timeline fill the rest via flex:1 + minHeight:0 guarantees
        the stats bar is always visible.
      -->*/}
      {/*
        PAGE 2 — key insight:
        The PageScroller/page-snap container controls scroll, so this section
        must be exactly one viewport tall INCLUDING the nav. We use 100vh with
        paddingTop:68px so the content starts below the nav, and the section
        itself sits flush. No marginTop — that would push it outside the snap container.

        Layout (all px, no flex stretching):
          paddingTop: 68px  (nav clearance)
          header:     56px
          timeline:   calc(100vh - 68px - 56px - 60px) via flex:1
          stats:      60px
      */}
      <div
        id="program1-outcomes"
        style={{
          height: isMobile ? 'auto' : '100vh',
          boxSizing: 'border-box',
          backgroundImage: "url('/gradient-mesh.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          overflow: isMobile ? 'visible' : 'hidden',
          paddingTop: 68,
          paddingBottom: isMobile ? 40 : 0,
        }}
      >

        {/* HEADER — 56px */}
        <div style={{
          height: 56,
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 4%',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}>
          <div style={{
            fontSize: '0.8rem',
            letterSpacing: '0.16em',
            color: '#8a7a60',
            marginBottom: 2,
            fontFamily: "'Plus Jakarta Sans',sans-serif",
            textTransform: 'uppercase',
            fontWeight: 800,
          }}>
            What Students Gain
          </div>
          <h2 style={{
            fontSize: '1.4rem',
            fontWeight: 1200,
            color: '#1a1208',
            margin: 0,
            fontFamily: "'Playfair Display',serif",
            lineHeight: 1.1,
          }}>
            After 6 weeks, your students will:
          </h2>
        </div>

        {/* TIMELINE — vertical, two-column layout */}
        <div style={{
          flex: 1,
          minHeight: 0,
          position: 'relative',
          padding: '12px 6%',
          overflowY: isMobile ? 'visible' : 'hidden',
        }}>
          <style>{`
            @keyframes fadeInLeft {
              from { opacity: 0; transform: translateX(-20px); }
              to   { opacity: 1; transform: translateX(0); }
            }
            @keyframes fadeInRight {
              from { opacity: 0; transform: translateX(20px); }
              to   { opacity: 1; transform: translateX(0); }
            }
            @keyframes spineGrow {
              from { transform: translateX(-50%) scaleY(0); }
              to   { transform: translateX(-50%) scaleY(1); }
            }
            .tl-spine-animated {
              transform-origin: top center;
              animation: spineGrow 0.8s cubic-bezier(0.4,0,0.2,1) both;
            }
            .tl-left-animated  { animation: fadeInLeft  0.45s cubic-bezier(0.4,0,0.2,1) both; }
            .tl-right-animated { animation: fadeInRight 0.45s cubic-bezier(0.4,0,0.2,1) both; }
          `}</style>

          {/* Centre spine line */}
          <div style={{

            position: 'absolute',
            left: '50%',
            top: 12,
            bottom: 12,
            width: 1,
            background: 'linear-gradient(to bottom, #c9a96e44, #5a9a9088, #2a6a5a44)',
            transform: 'translateX(-50%)',
          }} />

          {/* Rows — one per outcome */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between',
          }}>
            {outcomes.map((o, i) => {
              const isLeft = i % 2 === 0
              const delay  = `${i * 0.1}s`

              const card = (
                <div
                  className={isLeft ? 'tl-left' : 'tl-right'}
                  style={{
                    width: '43%',
                    height: '130%',
                    background: '#d9f4f8',
                    borderLeft: isLeft ? '3px solid #19357c' : '1px solid #ddd6c8',
                    borderRight: isLeft ? '1px solid #ddd6c8' : '3px solid #126b8c',
                    borderTop: '1px solid #ddd6c8',
                    borderBottom: '1px solid #ddd6c8',
                    borderRadius: isLeft ? '0 4px 4px 0' : '4px 0 0 4px',
                    padding: '9px 12px',
                    boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
                    animationDelay: delay,
                  }}
                >
                  <div style={{
                    fontSize: '0.58rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#1b348f',
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    marginBottom: 3,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{
                    fontSize: '0.79rem',
                    fontWeight: 700,
                    color: '#1a1208',
                    lineHeight: 1.25,
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    marginBottom: 2,
                  }}>
                    {o.title}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#6a5a48',
                    lineHeight: 1.4,
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                  }}>
                    {o.body}
                  </div>
                </div>
              )

              const spacer = <div style={{ width: '43%' }} />

              const dot = (
                <div style={{
                  width: '14%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  flexShrink: 0,
                }}>
                  {/* dot on the spine */}
                  <div style={{
                    width: 9,
                    height: 9,
                    borderRadius: '50%',
                    background: '#f5f0e8',
                    border: '2px solid #5a7f9a',
                    zIndex: 1,
                  }} />
                </div>
              )

              return (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0,
                }}>
                  {isLeft ? <>{card}{dot}{spacer}</> : <>{spacer}{dot}{card}</>}
                </div>
              )
            })}
          </div>
        </div>

        {/* STATS BAR — 60px, always visible */}
        <div style={{
          height: 60,
          flexShrink: 0,
          background: '#0f2a5c',
          display: 'flex',
          alignItems: 'center',
        }}>
          <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', textAlign: 'center' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none', padding: '0 8px' }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#fff', lineHeight: 1.1, fontFamily: "'Playfair Display',serif" }}>
                  {s.num}
                  {s.suffix && <span style={{ color: '#eaeaea', fontSize: '0.72rem', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600 }}>{' '}{s.suffix}</span>}
                </div>
                <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.5)', fontFamily: "'Plus Jakarta Sans',sans-serif", marginTop: 1 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}