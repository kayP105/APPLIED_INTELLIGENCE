'use client'

export default function Hero() {
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero-new">
      <div className="hero-new-bg" />
      <div className="hero-new-overlay" />

      <div className="container hero-new-inner">

        {/* ── LEFT COLUMN ── */}
        <div className="hero-new-left">
          <div className="hero-new-tag"> For Management · Commerce · Non Engineering Students</div>

          <h1 className="hero-new-h1">
            AI skills built for<br />
            <span className="hero-new-accent">non-engineers</span><br />
            Built to get hired.
          </h1>

          <p className="hero-new-body">
            Most AI programs are designed for people who build AI. Applied Intelligence Academy is designed for the majority - management and commerce students who need to confidently navigate the AI-driven world of work from Day 1
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

        {/* ── RIGHT COLUMN ── */}
        <div className="hero-new-right">
          {/* Certification box */}
          <div className="hero-card-white">
            <div className="hero-card-white-header">
              <h3>AI Productivity &amp; Career Certification</h3>
              <p>The flagship program for management &amp; MBA students</p>
            </div>
            <div className="hero-card-white-body">
              <div className="panel-stat-row">
                {[['6','Weeks'],['12','Sessions'],['24','Hours'],['75%+','Hands-on']].map(([num, label]) => (
                  <div key={label} className="panel-stat">
                    <div className="panel-stat-num">{num}</div>
                    <div className="panel-stat-label">{label}</div>
                  </div>
                ))}
              </div>
              <div className="panel-divider" />
              {['AI Tools & Work Map','Personal Prompt Library','Mini Business Case Document','Data Insights Report','Placement-Ready Career Kit'].map(item => (
                <div key={item} className="panel-item">
                  <div className="panel-check">✓</div>{item}
                </div>
              ))}
            </div>
            <div className="hero-card-white-footer">
              <span className="panel-footer-text">Complete Professional Portfolio</span>
              <span className="panel-badge">10 Deliverables</span>
            </div>
          </div>

          {/* Interview Lab card */}
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