import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Procedures from '@/components/Procedures'
import BeforeAfter from '@/components/BeforeAfter'
import Differentials from '@/components/Differentials'
import Testimonials from '@/components/Testimonials'
import Location from '@/components/Location'
import CTAFinal from '@/components/CTAFinal'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Procedures />
      <BeforeAfter />
      <Differentials />
      <Testimonials />
      <Location />
      <CTAFinal />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
