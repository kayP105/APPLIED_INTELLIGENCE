'use client'

import { useState, useEffect, useRef } from 'react'

const testimonials = [
  { text: "Mr. Godwin's session was really helpful and insightful. The way he explained resume building, self-introduction, and answering interview questions made things much clearer for me. His feedback helped me understand exactly where I was going wrong and what I need to improve. The tips on confidence and communication were very practical. I would definitely recommend programs like Applied Intelligence Academy for anyone preparing for placements." },
  { text: "The mock interview was the most valuable part for me. It felt very close to a real interview situation. The feedback I received on my communication and the way I structure answers was very clear and practical. It helped me see my weak areas properly. After the session, I feel more confident about how to approach interviews." },
  { text: "What I liked most was how practical the session was. It wasn't just theory. I understood how interviews actually work and what recruiters expect from us. The feedback I got was specific and easy to work on. Sessions like this from Applied Intelligence Academy really help in bridging the gap between what we learn and what companies expect." },
  { text: "The session was very helpful, especially the one-on-one feedback. I was able to clearly identify my weak areas and understand how to improve them. The guidance on handling difficult or unexpected questions was very useful. It also helped me improve my confidence while speaking." },
  { text: "It was a very informative and motivating session. The feedback was honest and practical, and it made me realize what I need to work on before attending interviews. I think programs like Applied Intelligence Academy are really useful for both UG and PG students." },
]

const videos = [
  { label: 'Student Video — Interview Experience' },
  { label: 'Student Video — Before & After' },
  { label: 'Student Video — Program Feedback' },
  { label: 'Student Video — Placement Journey' },
  { label: 'Student Video — AI Tools in Practice' },
]

export default function Testimonials() {
  const [active, setActive]       = useState(0)
  const [visible, setVisible]     = useState(false)
  const [animDir, setAnimDir]     = useState<'left'|'right'|null>(null)
  const [vidActive, setVidActive] = useState(0)
  const [vidDir, setVidDir]       = useState<'left'|'right'|null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const n = testimonials.length
  const vn = videos.length
  const touchStartX = useRef<number>(0)
  const touchStartXVid = useRef<number>(0)

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

  const go = (dir: 'left' | 'right') => {
    setAnimDir(dir)
    setTimeout(() => {
      setActive(prev => dir === 'right' ? (prev + 1) % n : (prev - 1 + n) % n)
      setAnimDir(null)
    }, 180)
  }

  const goVid = (dir: 'left' | 'right') => {
    setVidDir(dir)
    setTimeout(() => {
      setVidActive(prev => dir === 'right' ? (prev + 1) % vn : (prev - 1 + vn) % vn)
      setVidDir(null)
    }, 180)
  }

  const getPos = (i: number, act: number, total: number) => {
    const diff = ((i - act) % total + total) % total
    if (diff === 0) return 'center'
    if (diff === 1) return 'right1'
    if (diff === 2) return 'right2'
    if (diff === total - 1) return 'left1'
    if (diff === total - 2) return 'left2'
    return 'hidden'
  }

  const cardStyles = (pos: string, dir: 'left'|'right'|null): React.CSSProperties => {
    const base: React.CSSProperties = {
      borderRadius: 12,
      flexShrink: 0,
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'width 0.38s cubic-bezier(0.4,0,0.2,1), transform 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.38s ease, box-shadow 0.38s ease',
    }
    const map: Record<string, React.CSSProperties> = {
      center: { width: 360, zIndex: 10, opacity: 1, background: 'rgba(15,42,92,0.92)', backdropFilter: 'blur(12px)', boxShadow: '0 24px 64px rgba(0,0,0,0.5)', transform: dir === 'left' ? 'translateX(-16px) scale(0.97)' : dir === 'right' ? 'translateX(16px) scale(0.97)' : 'scale(1)' },
      right1: { width: 200, zIndex: 6, opacity: 0.72, background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)', transform: 'scale(0.9)' },
      right2: { width: 140, zIndex: 4, opacity: 0.38, background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(6px)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', transform: 'scale(0.8)' },
      left1:  { width: 200, zIndex: 6, opacity: 0.72, background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)', transform: 'scale(0.9)' },
      left2:  { width: 140, zIndex: 4, opacity: 0.38, background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(6px)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', transform: 'scale(0.8)' },
      hidden: { width: 0, opacity: 0, zIndex: 0 },
    }
    return { ...base, ...map[pos] }
  }

  // Shared background style used on both pages
  const bgPage: React.CSSProperties = {
    height: '100vh',
    boxSizing: 'border-box',
    paddingTop: 68,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  }

  return (
    <>
      <style>{`
        .tm-arrow {
          width: 42px; height: 42px; border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.6); background: rgba(255,255,255,0.1);
          color: #fff; font-size: 1rem; cursor: pointer;
          display: flex !important; align-items: center; justify-content: center;
          transition: background 0.2s, color 0.2s, transform 0.2s;
          flex-shrink: 0; backdrop-filter: blur(6px);
          z-index: 10; position: relative;
        }
        .tm-arrow:hover { background: rgba(255,255,255,0.25); transform: scale(1.08); }
        .tm-dot {
          width: 7px; height: 7px; border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.7); background: transparent;
          cursor: pointer; transition: background 0.2s, transform 0.2s;
          padding: 0;
        }
        .tm-dot.active { background: #fff; transform: scale(1.3); }
        .vid-card {
          border: 1.5px dashed rgba(255,255,255,0.3); border-radius: 10px;
          background: rgba(255,255,255,0.1); backdrop-filter: blur(10px);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 10px;
          cursor: pointer; padding: 20px 16px;
          transition: background 0.2s, transform 0.22s, box-shadow 0.22s;
          flex-shrink: 0;
        }
        .vid-card:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
      `}</style>

      {/* ══ PAGE 1: TEXT TESTIMONIALS ══ */}
      <div id="testimonials" ref={ref} style={bgPage}>

        {/* Background image — blurred */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('/feedback.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          filter: 'blur(3px)',
          transform: 'scale(1.05)', // prevent blur edge bleed
          zIndex: 0,
        }} />
        {/* Dark overlay for readability */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(10, 20, 50, 0.72)',
          zIndex: 1,
        }} />

        {/* Content above overlay */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>

          {/* Header */}
          <div style={{
            flexShrink: 0,
            padding: '18px 5% 14px',
            borderBottom: '1px solid rgba(255,255,255,0.12)',
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(14px)',
            transition: 'opacity 0.5s ease 0.05s, transform 0.5s ease 0.05s',
          }}>
            <div>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#93c5fd', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 20, height: 1.5, background: '#93c5fd', display: 'inline-block' }} />
                Student Voices
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.7rem,2.8vw,2.3rem)', fontWeight: 900, color: '#fff', margin: 0, lineHeight: 1.1 }}>
                What MBA students say.
              </h2>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0, maxWidth: 340, textAlign: 'right' }}>
              Real feedback from students who completed the Interview Acceleration Lab in their own words.
            </p>
          </div>

          {/* Carousel */}
          <div
            onTouchStart={e => { touchStartX.current = e.touches[0].clientX }}
            onTouchEnd={e => {
              const diff = touchStartX.current - e.changedTouches[0].clientX
              if (Math.abs(diff) > 40) go(diff > 0 ? 'right' : 'left')
            }}
            style={{
              flex: 1, minHeight: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 14, padding: '0 3%',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.5s ease 0.2s',
            }}>
            <button className="tm-arrow" onClick={() => go('left')}>←</button>

            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: '100%' }}>
              {testimonials.map((t, i) => {
                const pos = getPos(i, active, n)
                if (pos === 'hidden') return null
                const isCenter = pos === 'center'
                const style = cardStyles(pos, animDir)

                return (
                  <div
                    key={i}
                    style={{
                      ...style,
                      height: isCenter ? '82%' : pos.includes('2') ? '38%' : '55%',
                      padding: isCenter ? '22px 24px' : '12px 12px',
                      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                    }}
                    onClick={() => !isCenter && setActive(i)}
                  >
                    <div>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: isCenter ? '2.2rem' : '1.3rem', lineHeight: 1, color: isCenter ? 'rgba(255,255,255,0.28)' : 'rgba(255,255,255,0.2)', marginBottom: isCenter ? 10 : 4, flexShrink: 0 }}>&ldquo;</div>
                      <p style={{
                        fontSize: isCenter ? '0.8rem' : '0.62rem',
                        color: isCenter ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.75)',
                        lineHeight: isCenter ? 1.78 : 1.5,
                        margin: 0,
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: isCenter ? 999 : pos.includes('2') ? 3 : 5,
                        WebkitBoxOrient: 'vertical' as const,
                      }}>
                        {t.text}
                      </p>
                    </div>

                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      borderTop: '1px solid rgba(255,255,255,0.15)',
                      paddingTop: isCenter ? 12 : 8, marginTop: 10, flexShrink: 0,
                    }}>
                      <div style={{ width: isCenter ? 34 : 22, height: isCenter ? 34 : 22, borderRadius: '50%', background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: isCenter ? '0.75rem' : '0.55rem', fontWeight: 700, color: '#fff', flexShrink: 0 }}>M</div>
                      {isCenter && (
                        <>
                          <div>
                            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#fff' }}>MBA Student</div>
                            <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.6)' }}>Interview Acceleration Lab</div>
                          </div>
                          <div style={{ marginLeft: 'auto', color: '#fbbf24', fontSize: '0.72rem', letterSpacing: 1 }}>★★★★★</div>
                        </>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <button className="tm-arrow" onClick={() => go('right')}>→</button>
          </div>

          {/* Dots */}
          <div style={{ flexShrink: 0, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, borderTop: '1px solid rgba(255,255,255,0.1)', opacity: visible ? 1 : 0, transition: 'opacity 0.5s ease 0.3s' }}>
            {testimonials.map((_, i) => (
              <button key={i} className={`tm-dot${i === active ? ' active' : ''}`} onClick={() => setActive(i)} />
            ))}
          </div>
        </div>
      </div>

      {/* ══ PAGE 2: VIDEO TESTIMONIALS ══ */}
      <div id="testimonials-video" style={bgPage}>

        {/* Same background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('/feedback.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          filter: 'blur(3px)',
          transform: 'scale(1.05)',
          zIndex: 0,
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(10, 20, 50, 0.72)',
          zIndex: 1,
        }} />

        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>

          {/* Header */}
          <div style={{
            flexShrink: 0,
            padding: '18px 5% 14px',
            borderBottom: '1px solid rgba(255,255,255,0.12)',
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          }}>
            <div>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#93c5fd', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 20, height: 1.5, background: '#93c5fd', display: 'inline-block' }} />
                Video Testimonials
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.7rem,2.8vw,2.3rem)', fontWeight: 900, color: '#fff', margin: 0, lineHeight: 1.1 }}>
                Hear it from the students.
              </h2>
            </div>
            <span style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', color: '#fff', fontSize: '0.62rem', fontWeight: 700, padding: '4px 12px', borderRadius: 4, letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.25)' }}>
              Coming Soon
            </span>
          </div>

          {/* Video carousel */}
          <div
            onTouchStart={e => { touchStartXVid.current = e.touches[0].clientX }}
            onTouchEnd={e => {
              const diff = touchStartXVid.current - e.changedTouches[0].clientX
              if (Math.abs(diff) > 40) goVid(diff > 0 ? 'right' : 'left')
            }}
            style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, padding: '0 3%' }}>
            <button className="tm-arrow" onClick={() => goVid('left')}>←</button>

            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, height: '70%' }}>
              {videos.map((v, i) => {
                const pos = getPos(i, vidActive, vn)
                if (pos === 'hidden') return null
                const isCenter = pos === 'center'
                return (
                  <div
                    key={i}
                    className="vid-card"
                    style={{
                      width: isCenter ? 360 : pos.includes('2') ? 140 : 200,
                      height: '100%',
                      opacity: isCenter ? 1 : pos.includes('2') ? 0.38 : 0.72,
                      transform: isCenter ? (vidDir === 'left' ? 'translateX(-10px) scale(0.98)' : vidDir === 'right' ? 'translateX(10px) scale(0.98)' : 'scale(1)') : pos.includes('2') ? 'scale(0.82)' : 'scale(0.92)',
                      background: isCenter ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.07)',
                      border: isCenter ? '1.5px solid rgba(255,255,255,0.4)' : '1.5px dashed rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(10px)',
                      transition: 'width 0.38s cubic-bezier(0.4,0,0.2,1), transform 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.38s ease',
                      flexShrink: 0,
                      borderRadius: 12,
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14,
                      padding: '20px 16px',
                      cursor: 'pointer',
                      boxShadow: isCenter ? '0 12px 40px rgba(0,0,0,0.4)' : 'none',
                    }}
                    onClick={() => !isCenter && setVidActive(i)}
                  >
                    <div style={{ width: isCenter ? 56 : 36, height: isCenter ? 56 : 36, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', border: '1.5px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: isCenter ? '1rem' : '0.7rem', transition: 'all 0.38s', flexShrink: 0 }}>▶</div>
                    <div style={{ fontSize: isCenter ? '0.78rem' : '0.62rem', color: '#fff', textAlign: 'center', lineHeight: 1.5, fontWeight: isCenter ? 600 : 400 }}>{v.label}</div>
                    {isCenter && <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Tap to play when available</div>}
                  </div>
                )
              })}
            </div>

            <button className="tm-arrow" onClick={() => goVid('right')}>→</button>
          </div>

          {/* Dots */}
          <div style={{ flexShrink: 0, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {videos.map((_, i) => (
              <button key={i} className={`tm-dot${i === vidActive ? ' active' : ''}`} onClick={() => setVidActive(i)} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}