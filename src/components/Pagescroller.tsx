'use client'

import { useEffect, useState, useCallback } from 'react'

const SECTIONS = [
  { id: 'hero',              label: 'Home' },
  { id: 'problem',           label: 'The Gap' },
  { id: 'program1',          label: 'AI Certification' },
  { id: 'program1-outcomes', label: 'What Students Gain' },
  { id: 'program2',          label: 'Interview Lab' },
  { id: 'transformation',    label: 'Transformation' },
  { id: 'testimonials',      label: 'Students' },
  { id: 'testimonials-video',label: 'Videos' },
  { id: 'delivery',          label: 'How It Works' },
  { id: 'about',             label: 'About' },
  { id: 'faq',               label: 'FAQ' },
  { id: 'cta',               label: 'CTA' },
  { id: 'contact',           label: 'Contact' },
  { id: 'footer',            label: 'footer' },
]

/** Returns true if el has more scrollable content in the given direction */
function canScrollInside(el: HTMLElement, direction: 'down' | 'up'): boolean {
  const scrollable = el.scrollHeight > el.clientHeight + 5
  if (!scrollable) return false
  if (direction === 'down') {
    return el.scrollHeight - el.scrollTop - el.clientHeight > 50
  }
  return el.scrollTop > 50
}

export default function PageScroller() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [visible, setVisible] = useState(true)

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    SECTIONS.forEach((sec, i) => {
      const el = document.getElementById(sec.id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIdx(i) },
        { threshold: 0.1 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  // Hide dots when footer is visible
  useEffect(() => {
    const footer = document.getElementById('footer')
    if (!footer) return
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    )
    obs.observe(footer)
    return () => obs.disconnect()
  }, [])

  /** Jump straight to a section by index */
  const jumpTo = useCallback((idx: number) => {
    const el = document.getElementById(SECTIONS[idx].id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [])

  /**
   * Smart navigate: if the current section has more to scroll internally,
   * scroll it. Otherwise jump to the next/prev section.
   */
  const navigate = useCallback((direction: 'down' | 'up') => {
  setActiveIdx(prev => {
    const next = direction === 'down'
      ? Math.min(prev + 1, SECTIONS.length - 1)
      : Math.max(prev - 1, 0)

    jumpTo(next)
    return next
  })
}, [jumpTo])

  // Keyboard arrow / page key navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tag)) return

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault()
        navigate('down')
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        navigate('up')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate])

  if (!visible) return null

  return (
    <>
      {/* Side dot navigation */}
      <nav className="page-dots" aria-label="Page navigation">
        {SECTIONS.map((sec, i) => (
          <button
            key={sec.id}
            className={`page-dot-btn${activeIdx === i ? ' active' : ''}`}
            onClick={() => { setActiveIdx(i); jumpTo(i) }}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            aria-label={`Go to ${sec.label}`}
          >
            <span className="page-dot" />
            <span className={`page-dot-label${hoveredIdx === i ? ' visible' : ''}`}>
              {sec.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Up / Down arrow buttons */}
      <div className="page-arrows">
        <button
          className="page-arrow-btn"
          onClick={() => navigate('up')}
          disabled={activeIdx === 0}
          aria-label="Previous section"
        >
          ↑
        </button>
        <button
          className="page-arrow-btn"
          onClick={() => navigate('down')}
          disabled={activeIdx === SECTIONS.length - 1}
          aria-label="Next section"
        >
          ↓
        </button>
      </div>
    </>
  )
}