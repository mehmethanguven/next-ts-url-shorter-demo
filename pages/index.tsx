import { CTA } from '@/components/cta'
import Features from '@/components/features'
import { Footer } from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/Hero'
import { Shorten } from '@/components/shorten'
import Stats from '@/components/stats'

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Shorten />
      <Stats />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}
