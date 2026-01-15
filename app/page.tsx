'use client'

import Hero from '@/components/home/Hero'
import WhyChooseEterna from '@/components/home/WhyChooseEterna'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import Testimonials from '@/components/home/Testimonials'
import CTASection from '@/components/home/CTASection'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyChooseEterna />
      <FeaturedProjects />
      <Testimonials />
      <CTASection />
      <ScrollToTop />
    </div>
  )
}
