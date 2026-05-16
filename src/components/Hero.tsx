'use client'

const CalendarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6b7fd4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    <rect x="7" y="14" width="2" height="2" fill="#6b7fd4" stroke="none"/><rect x="11" y="14" width="2" height="2" fill="#6b7fd4" stroke="none"/><rect x="15" y="14" width="2" height="2" fill="#6b7fd4" stroke="none"/>
  </svg>
)

const PeopleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6b7fd4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="3"/><circle cx="15" cy="7" r="3"/>
    <path d="M3 20c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6"/>
  </svg>
)

const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b8b8b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/>
  </svg>
)

const StarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const stats = [
  { num: '6',    label: 'Weeks',    Icon: CalendarIcon },
  { num: '12',   label: 'Sessions', Icon: PeopleIcon   },
  { num: '24',   label: 'Hours',    Icon: ClockIcon    },
  { num: '75%+', label: 'Hands-On', Icon: StarIcon     },
]

const deliverables = [
  'AI Tools & Work Map',
  'Personal Prompt Library',
  'Mini Business Case Document',
  'Data Insights Report',
  'Placement-Ready Career Kit',
]

export default function Hero() {
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero-new">
      <img 
        src="/hero-bg.png" 
        alt="" 
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 30%',
          zIndex: 0,
        }}
      />
      <div className="hero-new-overlay" />

      <div className="container hero-new-inner">

        <div className="hero-new-left">
          <div className="hero-new-tag">For Management · Commerce · Non Engineering Students</div>

          <h1 className="hero-new-h1">
            AI skills built for<br />
            <span className="hero-new-accent">non-engineers.</span><br />
            Built to get hired.
          </h1>

          <p className="hero-new-body">
            Most AI programs are designed for people who build AI. Applied Intelligence Academy is designed for the majority — management and commerce students who need to confidently navigate the AI-driven world of work from Day 1
          </p>

          <div className="hero-new-ctas">
            <a href="#program1" onClick={e => smoothScroll(e, '#program1')} className="hero-btn-green">
              Explore AI Certification →
            </a>
            <a href="#contact" onClick={e => smoothScroll(e, '#contact')} className="hero-btn-outline">
              Request Pilot
            </a>
          </div>

          <div className="hero-new-trust">
            <span className="hero-new-stars">★★★★★</span>
            <span>Rated 5/5 by MBA students · Interview Acceleration Lab</span>
          </div>
        </div>

        <div className="hero-new-right">
          <div className="hero-card-white">
            <div className="hero-card-white-header">
              <h3>AI Productivity &amp; Career Certification</h3>
              <p>The flagship program for management &amp; MBA students</p>
            </div>
            <div className="hero-card-white-body">
              <div className="panel-stat-row">
                {stats.map(({ num, label, Icon }) => (
                  <div key={label} className="panel-stat">
                    <div className="panel-stat-icon"><Icon /></div>
                    <div className="panel-stat-num">{num}</div>
                    <div className="panel-stat-label">{label}</div>
                  </div>
                ))}
              </div>
              {deliverables.map(item => (
                <div key={item} className="panel-item">
                  <div className="panel-check">✓</div>
                  <span style={{ flex: 1 }}>{item}</span>
                  <span className="panel-chevron">›</span>
                </div>
              ))}
            </div>
            <div className="hero-card-white-footer">
              <span className="panel-footer-text">Complete Professional Portfolio</span>
              <span className="panel-badge">10 Deliverables</span>
            </div>
          </div>

          <div className="hero-card-green">
            <div className="hero-card-green-tag">Also Available</div>
            <h4>Interview Acceleration Lab</h4>
            <p>Structured mock interviews, scorecards, and measurable improvement for placement season.</p>
            <a href="#program2" onClick={e => smoothScroll(e, '#program2')} className="hero-card-green-link">
              Learn more →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}