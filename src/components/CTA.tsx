'use client'

import FadeUp from './FadeUp'

export default function CTA() {
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="cta">
      <div className="container">
        <div className="cta-inner">
          <FadeUp><div className="eyebrow">Ready to Close the Gap?</div></FadeUp>
          <FadeUp delay={0.1}>
            <h2>
              Your students don&apos;t need<br />
              another course.<br />
              They need an edge.
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p>
              Start with a no-commitment pilot. See the difference in six weeks.
              This is not training ,this is placement infrastructure.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="cta-btns">
              <a
                href="#contact"
                className="btn-white"
                onClick={e => smoothScroll(e, '#contact')}
              >
                Request Pilot Program
              </a>
              <a
                href="#contact"
                className="btn-ghost"
                onClick={e => smoothScroll(e, '#contact')}
              >
                Schedule a Call
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={0.4}>
            <div className="cta-note">
              No long-term commitment required for pilot · India-wide delivery · Online &amp; On-Campus
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}