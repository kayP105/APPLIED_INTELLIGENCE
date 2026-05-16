'use client'
import { useEffect, useState } from 'react'

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [usingMouse, setUsingMouse] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setUsingMouse(true)
      setIsVisible(true)
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleTouch = () => {
      // User touched — hide cursor until mouse moves again
      setUsingMouse(false)
      setIsVisible(false)
    }

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleHover)
    window.addEventListener('touchstart', handleTouch)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleHover)
      window.removeEventListener('touchstart', handleTouch)
    }
  }, [])

  if (!mounted || !isVisible || !usingMouse) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: position.y,
          left: position.x,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
          transition: 'transform 0.2s ease-out, opacity 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          background: 'rgba(126, 204, 209, 0.4)',
          borderRadius: '50%',
          filter: 'blur(10px)',
        }} />
        <svg
          viewBox="0 0 24 24"
          style={{
            width: '24px',
            height: '24px',
            color: '#7eccd1',
            filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.5))',
          }}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z"/>
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z"/>
        </svg>
      </div>
    </div>
  )
}