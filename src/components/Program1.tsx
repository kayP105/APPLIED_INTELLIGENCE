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
  /* ───────────────── PAGE 1 ───────────────── */

  .p1-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
    align-items: start;
  }

  /* Hide calendar everywhere — desktop and mobile */
  .p1-calendar {
    display: none !important;
  }

  @media (max-width: 767px) {
    .p1-section {
      min-height: unset !important;
      height: auto !important;
      align-items: flex-start !important;
      padding: 80px 5% 40px !important;
      overflow: visible !important;
    }

    .p1-grid {
      gap: 16px !important;
    }

    .p1-deliverables {
      grid-template-columns: 1fr !important;
    }

    .p1-stats-row {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 6px !important;
    }
  }

  /* ───────────────── PAGE 2 REDESIGN ───────────────── */

  #program1-outcomes{
    background:
      radial-gradient(circle at top right, rgba(31, 55, 101, 0.36), transparent 30%),
      radial-gradient(circle at left center, rgba(31, 55, 101, 0.36), transparent 25%),
      #071225 !important;
  }

  .p2-page{
    min-height:100vh;
    padding-top:68px;
  }

  .p2-header{
  padding:30px 4% 18px;
}

  .p2-label{
    display:flex;
    align-items:center;
    gap:12px;
    color:#d8b56a;
    font-size:.72rem;
    letter-spacing:.24em;
    text-transform:uppercase;
    font-weight:700;
    margin-bottom:20px;
  }

  .p2-label::before{
    content:'';
    width:34px;
    height:1px;
    background:#3b82f6;
  }

  .p2-title{
  font-size:1.7rem;
  line-height:1.08;
  font-weight:800;
  color:#fff;
  letter-spacing:-0.035em;
  max-width:950px;
  font-style: 'italic',
}

  .p2-title span{
    color:#60a5fa;
  }

  .p2-sub{
    margin-top:18px;
    color:rgba(255,255,255,.72);
    font-size:1.05rem;
    line-height:1.8;
    max-width:760px;
  }

  .p2-timeline{
    padding:18px 4%;
  }

  .p2-outcomes-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:18px;
  }

  .outcome-card{
  position:relative;
  overflow:hidden;
  border-radius:14px;
  min-height:128px;
  border:1px solid rgba(96,165,250,.18);
  background:#091427;
  box-shadow:0 10px 24px rgba(0,0,0,.24);
  transition:all .3s ease;
}

  .outcome-card:hover{
    transform:translateY(-4px);
    border-color:rgba(96,165,250,.42);
    box-shadow:
      0 0 24px rgba(37,99,235,.16),
      0 24px 44px rgba(0,0,0,.42);
  }

  .outcome-card-bg{
    position:absolute;
    inset:0;
    background-size:cover;
    background-position:center;
    opacity:.72;
    transition:transform .45s ease;
  }

  .outcome-card:hover .outcome-card-bg{
    transform:scale(1.05);
  }

  .outcome-card-overlay{
    position:absolute;
    inset:0;
    background:
      linear-gradient(
        to top,
        rgba(2,8,23,.96),
        rgba(2,8,23,.45)
      );
  }

  .outcome-badge{
  position:absolute;
  top:14px;
  left:14px;
  z-index:3;
  width:42px;
  height:26px;
  border-radius:999px;
  background:rgba(11,31,58,.88);
  border:1px solid rgba(96,165,250,.35);
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:.68rem;
  font-weight:700;
}

  .outcome-card-text{
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  z-index:2;
  padding:12px 16px;
}

  .outcome-card-text h4{
  color:#fff;
  font-size:.82rem;
  line-height:1.15;
  margin-bottom:4px;
  font-weight:700;
}

  .outcome-card-text p{
  color:rgba(255,255,255,.72);
  font-size:.68rem;
  line-height:1.4;
}

  .p2-stats{
    margin:24px 4%;
    border-radius:12px;
    overflow:hidden;
    border:1px solid rgba(96,165,250,.18);
    background:rgba(4,12,28,.84);
    backdrop-filter:blur(10px);
  }

  .p2-stats-inner{
    display:grid;
    grid-template-columns:repeat(4,1fr);
  }

  .p2-stat{
  padding:16px 14px;
  border-right:1px solid rgba(255,255,255,.06);
}

  .p2-stat:last-child{
    border-right:none;
  }

  .p2-stat-num{
  color:#fff;
  font-size:1.55rem;
  font-weight:800;
  line-height:1;
  margin-bottom:4px;
}

  .p2-stat-num span{
  color:#60a5fa;
  font-size:.72rem;
}

  .p2-stat-text{
  color:rgba(255,255,255,.72);
  font-size:.68rem;
  line-height:1.35;
}

  /* ───────────────── MOBILE ───────────────── */

  @media (max-width:767px){

    #program1-outcomes {
      height: auto !important;
      min-height: unset !important;
      overflow: visible !important;
    }

    .p2-page {
      height: auto !important;
      overflow-y: visible !important;
    }

    .p2-header{
      padding:32px 5% 22px !important;
    }

    .p2-title{
      font-size:1.5rem;
      font-style: 'italic',
    }

    .p2-timeline{
      padding:14px 4% !important;
      flex:none !important;
      overflow-y:visible !important;
    }

    .p2-outcomes-grid{
      display:grid;
      grid-template-columns:1fr !important;
      gap:14px !important;
    }

    .outcome-card{
      min-height:200px !important;
    }

    .outcome-card-text{
      padding:20px;
    }

    .outcome-card-text h4{
      font-size:1.15rem;
    }

    .outcome-card-text p{
      font-size:.82rem;
    }

    .p2-stats{
      margin:20px 5%;
    }

    .p2-stats-inner{
      grid-template-columns:1fr 1fr !important;
    }

    .p2-stat{
      padding:22px 16px;
    }

    .p2-stat-num{
      font-size:2rem;
    }

    .p2-stat-text{
      font-size:.8rem;
    }
  }

  /* ───────────────── ANIMATIONS ───────────────── */

  @keyframes spineGrow {
    from {
      transform: translateX(-50%) scaleY(0);
    }
    to {
      transform: translateX(-50%) scaleY(1);
    }
  }
`}</style>

      {/* ══ PAGE 1: Cert + Calendar ══ */}
      <section
        id="program1"
        className="p1-section"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '72px 3% 40px',
          boxSizing: 'border-box',
        }}
      >
        {/* Background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('/program1-bg.png')",
          backgroundSize: 'cover', backgroundPosition: 'center 30%',
          zIndex: 0,
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,31,58,0.65), rgba(15,42,92,0.65))', zIndex: 1 }} />

        <div
          className="p1-grid"
          style={{ position: 'relative', zIndex: 2 }}
        >

          {/* ── LEFT COLUMN ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

            {/* Certificate card */}
            <div style={{
              background: 'rgba(253,250,244,0.96)',
              border: '1.5px solid #9b2020',
              padding: '20px 24px',
              position: 'relative',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            }}>
              <div style={{ position: 'absolute', inset: 5, border: '0.5px solid #c9a96e', pointerEvents: 'none' }} />

              <div style={{ textAlign: 'center', marginBottom: 12, paddingBottom: 12, borderBottom: '0.5px solid #c9a96e', position: 'relative' }}>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9b7040', marginBottom: 6 }}>
                  Applied Intelligence Academy
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#9b2020', color: '#fff', fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 10px', marginBottom: 8 }}>
                  ⭐ Programme 1
                </div>
                <h2 style={{ fontFamily: "'Playfair Display',serif",fontStyle: 'italic', fontSize: 'clamp(1.4rem,2vw,1.9rem)', fontWeight: 900, color: '#1a0f0f', lineHeight: 1.15, margin: '0 0 4px' }}>
                  AI Productivity &amp; Career Certification
                </h2>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.7rem', color: '#9b7040', fontStyle: 'italic' }}>
                  A 6-Week Professional Development Programme
                </div>
              </div>

              {/* Stats row */}
              <div className="p1-stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
                {[['6','Weeks'],['12','Sessions'],['24hrs','Live'],['75–80%','Hands-on']].map(([n,l]) => (
                  <div key={l} style={{ textAlign: 'center', padding: '10px 4px', background: '#fff', border: '0.5px solid #ddd0b8' }}>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.1rem', fontWeight: 900, color: '#9b2020', lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9b7040', fontFamily: "'Plus Jakarta Sans',sans-serif", marginTop: 3 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.12)', padding: '14px 18px' }}>
              <p style={{ fontFamily: "'Playfair Display',serif", fontSize: '0.88rem', fontStyle: 'italic', color: '#fff', lineHeight: 1.6, margin: 0 }}>
                &ldquo;Students don&apos;t attend sessions — they{' '}
                <span style={{ color: '#f0c060', fontStyle: 'normal', fontWeight: 700 }}>produce output</span>{' '}
                in every single one.&rdquo;
              </p>
            </div>

            {/* Deliverables */}
            <div>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 8 }}>
                What Every Student Builds &amp; Leaves With
              </div>
              <div className="p1-deliverables" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
                {deliverables.map(d => (
                  <div key={d} style={{ background: '#d7dce0', padding: '5px 10px', fontSize: '0.72rem', color: '#1a0f0f', fontFamily: "'Plus Jakarta Sans',sans-serif", display: 'flex', gap: 7 }}>
                    <span style={{ color: '#9b2020', fontWeight: 700, fontSize: '0.65rem', flexShrink: 0 }}>{d.slice(0,2)}</span>
                    <span>{d.slice(3)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="#contact" style={{ background: '#9b2020', color: '#fff', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: '0.78rem', padding: '10px 22px', textDecoration: 'none' }}>
                Request Pilot →
              </a>
              <a href="#contact" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: '0.78rem', padding: '10px 22px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.35)' }}>
                Download Curriculum
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Calendar hidden temporarily ── */}
          <div className="p1-calendar">

            {/* Calendar header */}
            <div style={{ background: '#1a0f0f', padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: 2 }}>
                  6-Week Programme
                </div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1rem', fontWeight: 700, color: '#fdfaf4' }}>
                  Session Calendar
                </div>
              </div>
              <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', justifyContent: 'flex-end', maxWidth: 180 }}>
                {weeks.map((w, i) => (
                  <button
                    key={w.code}
                    onClick={() => setActiveWeek(i)}
                    style={{
                      width: 26, height: 26, borderRadius: '50%',
                      border: activeWeek === i ? `2px solid ${weekColors[i]}` : '1px solid rgba(255,255,255,0.15)',
                      background: activeWeek === i ? weekColors[i] : 'transparent',
                      color: activeWeek === i ? weekTextColors[i] : 'rgba(255,255,255,0.5)',
                      fontSize: '0.62rem', fontWeight: 700, cursor: 'pointer',
                      fontFamily: "'Plus Jakarta Sans',sans-serif", transition: 'all 0.2s',
                    }}
                  >
                    {w.num}
                  </button>
                ))}
              </div>
            </div>

            {/* Week grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
              {weeks.map((w, i) => (
                <div
                  key={w.code}
                  onClick={() => setActiveWeek(i)}
                  style={{
                    padding: '10px 12px',
                    borderRight: i%3!==2 ? '1px solid #ede8e0' : 'none',
                    borderBottom: i<3 ? '1px solid #ede8e0' : 'none',
                    cursor: 'pointer',
                    background: activeWeek===i ? weekColors[i] : '#fff',
                    transition: 'background 0.2s',
                  }}
                >
                  <span style={{ display: 'inline-block', background: activeWeek===i ? weekTextColors[i] : '#e8e2d8', color: activeWeek===i ? '#fff' : '#6a5a48', fontSize: '0.5rem', fontWeight: 800, padding: '1px 5px', marginBottom: 4, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                    {w.code}
                  </span>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: activeWeek===i ? weekTextColors[i] : '#1a0f0f', lineHeight: 1.25 }}>
                    {w.title}
                  </div>
                  <div style={{ fontSize: '0.58rem', color: activeWeek===i ? weekTextColors[i] : '#9b7040', marginTop: 2, fontFamily: "'Plus Jakarta Sans',sans-serif", fontStyle: 'italic', opacity: 0.8 }}>
                    {w.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Session detail */}
            <div style={{ padding: '12px 16px', background: '#fdfaf4', borderTop: '1px solid #ede8e0' }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9b7040', marginBottom: 8 }}>
                Sessions this week
              </div>
              {weeks[activeWeek].sessions.map(s => (
                <div key={s.code} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 12px', marginBottom: 6, background: weekColors[activeWeek], border: `0.5px solid ${weekTextColors[activeWeek]}22` }}>
                  <span style={{ background: weekTextColors[activeWeek], color: '#fff', fontSize: '0.5rem', fontWeight: 800, padding: '2px 5px', flexShrink: 0, fontFamily: "'Plus Jakarta Sans',sans-serif", marginTop: 1 }}>
                    {s.code}
                  </span>
                  <div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.76rem', fontWeight: 600, color: weekTextColors[activeWeek], marginBottom: 2, lineHeight: 1.3 }}>
                      {s.title}
                    </div>
                    <div style={{ fontSize: '0.65rem', color: weekTextColors[activeWeek], fontWeight: 600, fontFamily: "'Plus Jakarta Sans',sans-serif", opacity: 0.8 }}>
                      📄 {s.output}
                    </div>
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
    minHeight: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    paddingTop: 68,
  }}
>

  {/* HEADER */}
  <div className="p2-header">

    <div className="p2-label">
      WHAT STUDENTS GAIN
    </div>

    <h2 className="p2-title">
      In just <span>6 weeks</span>, students learn to think,
      build, communicate, and perform like professionals.
    </h2>

  </div>

  {/* OUTCOMES GRID */}
  <div
    className="p2-timeline"
    style={{
      flex: 1,
      minHeight: 0,
      position: 'relative',
      overflowY: isMobile ? 'auto' : 'hidden',
    }}
  >

    <div className="p2-outcomes-grid">

      {outcomes.map((o, i) => (

        <div
          key={i}
          className="outcome-card"
          style={{
            opacity: tlVisible ? 1 : 0,
            transform: tlVisible
              ? 'translateY(0)'
              : 'translateY(18px)',
            transition: `opacity 0.45s ease ${0.08 + i * 0.08}s, transform 0.45s ease ${0.08 + i * 0.08}s`,
          }}
        >

          {/* IMAGE */}
          <div
            className="outcome-card-bg"
            style={{
              backgroundImage: `url(${outcomeImages[i]})`
            }}
          />

          {/* DARK OVERLAY */}
          <div className="outcome-card-overlay" />

          {/* NUMBER BADGE */}
          <div className="outcome-badge">
            {String(i + 1).padStart(2, '0')}
          </div>

          {/* TEXT */}
          <div className="outcome-card-text">

            <h4>
              {o.title}
            </h4>

            <p>
              {o.body}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

  {/* STATS BAR */}
  <div className="p2-stats">

    <div className="p2-stats-inner">

      {stats.map((s, i) => (

        <div
          className="p2-stat"
          key={i}
        >

          <div className="p2-stat-num">
            {s.num}

            {s.suffix && (
              <span> {s.suffix}</span>
            )}
          </div>

          <div className="p2-stat-text">
            {s.desc}
          </div>

        </div>

      ))}

    </div>

  </div>

</div>
    </>
  )
}