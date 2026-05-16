'use client'

import { useEffect, useRef, useState } from 'react'

const rows = [
  ['Vague, rambling answers',        'Structured, crisp communication'],
  ['No real work outputs',           'Portfolio of 10 deliverables'],
  ['Unfamiliar with AI tools',       'AI-fluent across workflows'],
  ['Low interview confidence',       'Measured performance improvement'],
  ['Describes skills in theory',     'Proves skills with real output'],
  ['Indistinguishable from peers',   'Differentiated in the placement pool'],
]

export default function Transformation() {
  const [visible, setVisible] = useState(false)
  const [activeRow, setActiveRow] = useState<number | null>(null)
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
      id="transformation"
      ref={ref}
      style={{
        height: '100vh',
        boxSizing: 'border-box',
        paddingTop: 68,
        background: '#0d1b2e',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <style>{`
        @keyframes tfRowIn {
          from { opacity: 0; transform: translateX(-22px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes tfAfterIn {
          from { opacity: 0; transform: translateX(22px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .tf-before-cell { animation: tfRowIn   0.5s cubic-bezier(0.4,0,0.2,1) both; }
        .tf-after-cell  { animation: tfAfterIn 0.5s cubic-bezier(0.4,0,0.2,1) both; }
        .tf-row {
          display: grid;
          grid-template-columns: 1fr 52px 1fr;
          align-items: stretch;
          border-radius: 8px;
          transition: background 0.22s ease, transform 0.22s ease;
          cursor: default;
          border: 1px solid transparent;
        }
        .tf-row:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.15);
          transform: scale(1.008);
        }
        .tf-row:hover .tf-before-txt {
          text-decoration: line-through;
          text-decoration-color: rgba(232,195,122,0.5);
          color: rgba(255,255,255,0.35) !important;
        }
        .tf-row:hover .tf-after-txt {
          color: #e8c37a !important;
          font-weight: 700 !important;
        }
        .tf-arrow-icon {
          transition: color 0.2s, transform 0.2s;
        }
        .tf-row:hover .tf-arrow-icon {
          color: #e8c37a !important;
          transform: translateX(4px) scale(1.2);
        }
      `}</style>

      {/* ── HEADER ── */}
      <div style={{
        flexShrink: 0,
        padding: '28px 5% 20px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(14px)',
        transition: 'opacity 0.55s ease 0.05s, transform 0.55s ease 0.05s',
      }}>
        {/* Original elegant italic eyebrow — preserved exactly */}
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: 'italic',
          fontSize: '0.68rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(232,195,122,0.85)',
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          <span style={{ width: 24, height: 1, background: 'rgba(232,195,122,0.6)', flexShrink: 0, display: 'inline-block' }} />
          The Transformation
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center' }}>
          <div>
            {/* Original large Playfair title — preserved, just white on dark bg */}
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.7rem, 2.8vw, 2.3rem)',
              fontWeight: 900,
              fontStyle: 'italic',
              color: '#ffffff',
              margin: '0 0 8px',
              lineHeight: 1.1,
            }}>
              From student answers to<br />professional thinking.
            </h2>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0, maxWidth: 580 }}>
              The shift isn&apos;t about knowing more. It&apos;s about operating differently — with structured thinking, professional confidence, and the ability to produce work rather than just explain it.
            </p>
          </div>

          {/* Quote + CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-end' }}>
            <div style={{
              background: 'rgba(11,31,58,0.55)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderLeft: '3px solid #e8c37a',
              padding: '10px 16px',
              borderRadius: '0 6px 6px 0',
              maxWidth: 300,
              backdropFilter: 'blur(10px)',
            }}>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '0.9rem', fontWeight: 700,
                color: '#ffffff', lineHeight: 1.5,
                margin: 0, fontStyle: 'italic',
              }}>
                &ldquo;Students don&apos;t just learn.<br />They leave with proof they can perform.&rdquo;
              </p>
            </div>
            <a href="#contact" style={{
              background: '#e8c37a',
              color: '#0b1f3a',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700, fontSize: '0.75rem',
              padding: '10px 22px', textDecoration: 'none',
              borderRadius: 4, whiteSpace: 'nowrap',
            }}>
              See How It Works →
            </a>
          </div>
        </div>
      </div>

      {/* ── TABLE AREA ── */}
      <div style={{
        flex: 1, minHeight: 0,
        padding: '16px 5%',
        display: 'flex',
        flexDirection: 'column',
      }}>

        {/* Column headers */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 52px 1fr',
          marginBottom: 8,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.4s ease 0.3s',
        }}>
          <div style={{
            background: 'rgba(11,31,58,0.55)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '6px 0 0 6px',
            padding: '8px 16px',
            fontSize: '0.62rem', fontWeight: 800,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'rgba(232,195,122,0.8)',
            backdropFilter: 'blur(10px)',
          }}>
            Before the Program
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)' }} />
          <div style={{
            background: 'rgba(11,31,58,0.55)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '0 6px 6px 0',
            padding: '8px 16px',
            fontSize: '0.62rem', fontWeight: 800,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'rgba(232,195,122,0.8)',
            backdropFilter: 'blur(10px)',
          }}>
            After the Program
          </div>
        </div>

        {/* Rows */}
        <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 4 }}>
          {rows.map(([before, after], i) => (
            <div
              key={i}
              className="tf-row"
              onMouseEnter={() => setActiveRow(i)}
              onMouseLeave={() => setActiveRow(null)}
              style={{ flex: 1 }}
            >
              {/* Before cell */}
              <div
                className="tf-before-cell"
                style={{
                  padding: '0 16px',
                  display: 'flex', alignItems: 'center',
                  background: activeRow === i ? 'transparent' : 'rgb(151, 168, 174)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRight: 'none',
                  borderRadius: '6px 0 0 6px',
                  animationDelay: visible ? `${0.3 + i * 0.07}s` : '9999s',
                  opacity: visible ? undefined : 0,
                  transition: 'background 0.22s',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div
                  className="tf-before-txt"
                  style={{
                    fontSize: '0.82rem',
                    color: 'rgba(0, 0, 0, 0.6)',
                    lineHeight: 1.4,
                    transition: 'color 0.2s',
                    display: 'flex', alignItems: 'center', gap: 10,
                  }}
                >
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: 'rgba(232,195,122,0.35)', flexShrink: 0,
                    border: '1.5px solid rgba(232,195,122,0.5)',
                  }} />
                  {before}
                </div>
              </div>

              {/* Arrow */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(189, 202, 202, 0.83)',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}>
                <span
                  className="tf-arrow-icon"
                  style={{
                    fontSize: '1rem',
                    color: activeRow === i ? '#000000' : 'rgba(5, 5, 5, 0.3)',
                  }}
                >
                  →
                </span>
              </div>

              {/* After cell */}
              <div
                className="tf-after-cell"
                style={{
                  padding: '0 16px',
                  display: 'flex', alignItems: 'center',
                  background: activeRow === i ? 'rgba(232,195,122,0.08)' : 'rgb(151, 168, 174)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderLeft: 'none',
                  borderRadius: '0 6px 6px 0',
                  animationDelay: visible ? `${0.35 + i * 0.07}s` : '9999s',
                  opacity: visible ? undefined : 0,
                  transition: 'background 0.22s',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div
                  className="tf-after-txt"
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: activeRow === i ? '#e8c37a' : 'rgba(0, 0, 0, 0.85)',
                    lineHeight: 1.4,
                    transition: 'color 0.2s',
                    display: 'flex', alignItems: 'center', gap: 10,
                  }}
                >
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: activeRow === i ? '#e8c37a' : 'rgba(232,195,122,0.5)',
                    flexShrink: 0,
                    border: '1.5px solid rgba(232,195,122,0.6)',
                    transition: 'background 0.2s',
                  }} />
                  {after}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}