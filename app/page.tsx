'use client'

import Hero from '@/components/home/Hero'
import WhyChooseEterna from '@/components/home/WhyChooseEterna'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyChooseEterna />
      <FeaturedProjects />
      <CTASection />
    </div>
  )
}
