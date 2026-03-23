'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <a className="logo-wrap" href="#">
          <div className="logo-text">
            <span style={{ color: '#38b2c5' }}>A</span>pplied
            <span style={{ color: '#38b2c5' }}>I</span>ntelligence{' '}
            <span style={{ color: '#38b2c5' }}>Academy</span>
          </div>
        </a>
        <ul className="nav-links">
          <li><a href="#program1" onClick={e => smoothScroll(e, '#program1')}>AI Certification</a></li>
          <li><a href="#program2" onClick={e => smoothScroll(e, '#program2')}>Interview Lab</a></li>
          <li><a href="#testimonials" onClick={e => smoothScroll(e, '#testimonials')}>Students</a></li>
          <li><a href="#about" onClick={e => smoothScroll(e, '#about')}>About</a></li>
          <li><a href="#contact" onClick={e => smoothScroll(e, '#contact')} className="btn-nav">Request Pilot →</a></li>
        </ul>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          id="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
        <a href="#program1" onClick={e => smoothScroll(e, '#program1')}>AI Productivity Certification</a>
        <a href="#program2" onClick={e => smoothScroll(e, '#program2')}>Interview Acceleration Lab</a>
        <a href="#testimonials" onClick={e => smoothScroll(e, '#testimonials')}>Student Testimonials</a>
        <a href="#delivery" onClick={e => smoothScroll(e, '#delivery')}>How It Works</a>
        <a href="#about" onClick={e => smoothScroll(e, '#about')}>About the team</a>
        <a href="#faq" onClick={e => smoothScroll(e, '#faq')}>FAQ</a>
        <a href="#contact" onClick={e => smoothScroll(e, '#contact')} className="mob-cta">Request Pilot Program</a>
      </div>
    </>
  )
}