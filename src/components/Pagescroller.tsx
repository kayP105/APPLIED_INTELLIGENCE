'use client'

import { useEffect, useState, useCallback } from 'react'

const SECTIONS = [
  { id: 'hero',           label: 'Home' },
  { id: 'problem',        label: 'The Gap' },
  { id: 'program1',       label: 'AI Certification' },
  { id: 'program1-outcomes', label: 'What Students Gain' },
  { id: 'program2',       label: 'Interview Lab' },
  { id: 'transformation', label: 'Transformation' },
  { id: 'testimonials',   label: 'Students' },
  { id: 'testimonials-video', label:'Videos'},
  { id: 'delivery',       label: 'How It Works' },
  { id: 'about',          label: 'About' },
  { id: 'faq',            label: 'FAQ' },
  { id: 'cta',            label: 'CTA'},
  { id: 'contact',        label: 'Contact' },
  { id: 'footer',label:'footer'},
]

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
        ([entry]) => {
          if (entry.isIntersecting) setActiveIdx(i)
        },
        { threshold: 0.1 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  // Hide dots when nav is open on mobile or when over footer
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

  const scrollTo = useCallback((idx: number) => {
    const el = document.getElementById(SECTIONS[idx].id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [])

  // Arrow key navigation
 useEffect(() => {
  const onKey = (e: KeyboardEvent) => {
    const tag = (e.target as HTMLElement).tagName
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tag)) return

    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault()
      
      const currentEl = document.getElementById(SECTIONS[activeIdx].id)
      
      // Only scroll within section if it's actually scrollable AND not near bottom
      if (currentEl) {
        const isScrollable = currentEl.scrollHeight > currentEl.clientHeight + 5
        const atBottom = currentEl.scrollHeight - currentEl.scrollTop - currentEl.clientHeight < 50
        
        if (isScrollable && !atBottom) {
          currentEl.scrollBy({ top: 300, behavior: 'smooth' })
          return
        }
        // If at bottom of scrollable section, reset its scroll and go next
        if (isScrollable && atBottom) {
          setActiveIdx(prev => {
            const next = Math.min(prev + 1, SECTIONS.length - 1)
            scrollTo(next)
            return next
          })
          return
        }
      }

      // Not scrollable — just go to next section
      setActiveIdx(prev => {
        const next = Math.min(prev + 1, SECTIONS.length - 1)
        scrollTo(next)
        return next
      })
    }

    if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault()

      const currentEl = document.getElementById(SECTIONS[activeIdx].id)

      if (currentEl) {
        const isScrollable = currentEl.scrollHeight > currentEl.clientHeight + 5
        const atTop = currentEl.scrollTop < 50

        if (isScrollable && !atTop) {
          currentEl.scrollBy({ top: -300, behavior: 'smooth' })
          return
        }
      }

      setActiveIdx(prev => {
        const next = Math.max(prev - 1, 0)
        scrollTo(next)
        return next
      })
    }
  }
  window.addEventListener('keydown', onKey)
  return () => window.removeEventListener('keydown', onKey)
}, [scrollTo, activeIdx])

  if (!visible) return null

  return (
    <>
      {/* Side dot navigation */}
      <nav className="page-dots" aria-label="Page navigation">
        {SECTIONS.map((sec, i) => (
          <button
            key={sec.id}
            className={`page-dot-btn${activeIdx === i ? ' active' : ''}`}
            onClick={() => scrollTo(i)}
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
          onClick={() => scrollTo(Math.max(activeIdx - 1, 0))}
          disabled={activeIdx === 0}
          aria-label="Previous section"
        >
          ↑
        </button>
        <button
          className="page-arrow-btn"
          onClick={() => scrollTo(Math.min(activeIdx + 1, SECTIONS.length - 1))}
          disabled={activeIdx === SECTIONS.length - 1}
          aria-label="Next section"
        >
          ↓
        </button>
      </div>
    </>
  )
}