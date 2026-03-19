'use client'

import { useEffect, useState } from 'react'

export default function Splash() {
  const [phase, setPhase] = useState<'visible' | 'fading' | 'gone'>('visible')

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase('fading'), 4000)
    const goneTimer = setTimeout(() => setPhase('gone'), 4200)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(goneTimer)
    }
  }, [])

  if (phase === 'gone') return null

  return (
    <div className={`splash${phase === 'fading' ? ' splash-fade' : ''}`}>
      {/* Background image via CSS — most reliable approach */}
      <div className="splash-bg" />

      {/* Dark overlay */}
      <div className="splash-overlay" />

      {/* Animated title */}
      <div className="splash-content">
        <div className="splash-eyebrow">Welcome to</div>
        <h1 className="splash-title">
          <span className="splash-word splash-word-1">Applied</span>
          <span className="splash-word splash-word-2">Intelligence</span>
          <span className="splash-word splash-word-3">Academy</span>
        </h1>
        <div className="splash-tagline">AI skills for non-engineers who need to get hired.</div>
      </div>

      {/* Progress bar */}
      <div className="splash-progress">
        <div className="splash-progress-bar" />
      </div>
    </div>
  )
}