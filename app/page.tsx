import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <HowItWorks />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingContact />
    </main>
  )
}

