import Nav from '@/components/Nav'
import Splash from '@/components/splash'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Program1 from '@/components/Program1'
import Program2 from '@/components/Program2'
import Transformation from '@/components/Transformation'
import Testimonials from '@/components/Testimonials'
import Delivery from '@/components/Delivery'
import About from '@/components/About'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import PageScroller from '@/components/Pagescroller'
import StatsBar from '@/components/StatsBar'

export default function Home() {
  return (
    <>
      <Splash />
      <Nav />
      <PageScroller/>
      <main>
        <Hero />
        <Problem />
        <Program1 />
        <Program2 />
        <Transformation />
        <Testimonials />
        <Delivery />
        <About />
        <FAQ />
        <CTA />
        <Contact />
        <Footer />
      </main>
    </>
  )
}