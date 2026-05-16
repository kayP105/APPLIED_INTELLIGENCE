'use client'

import { useEffect, useState } from 'react'

export default function Splash() {
  const [mounted, setMounted] = useState(false)
  const [phase, setPhase] = useState<'visible' | 'fading' | 'gone'>('visible')

  useEffect(() => {
    setMounted(true)
    const fadeTimer = setTimeout(() => setPhase('fading'), 2800)
    const goneTimer = setTimeout(() => setPhase('gone'), 4000)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(goneTimer)
    }
  }, [])

  if (!mounted || phase === 'gone') return null

  return (
    <div className={`splash${phase === 'fading' ? ' splash-fade' : ''}`}>
      <div className="splash-bg" />
      <div className="splash-overlay" />

      <div className="splash-content">
        <div className="splash-brain-wrapper">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="splash-brain-icon"
          >
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z"/>
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z"/>
          </svg>
        </div>

        <div className="splash-text-container">
          <div className="splash-eyebrow">Welcome to</div>
          <h1 className="splash-title">
            <span className="splash-word splash-word-1">Applied</span>
            <span className="splash-word splash-word-2">Intelligence</span>
            <span className="splash-word splash-word-3">Academy</span>
          </h1>
          <div className="splash-tagline">AI skills for non-engineers who need to get hired.</div>
        </div>
      </div>

      <div className="splash-progress">
        <div className="splash-progress-bar" />
      </div>
    </div>
  )
}