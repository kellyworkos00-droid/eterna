'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-24 texture-overlay bg-gradient-to-br from-eterna-maroon to-eterna-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let&apos;s create something extraordinary together. Schedule your complimentary
            consultation today and discover how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-eterna-maroon hover:bg-eterna-accent px-8 py-4 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Book Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-eterna-maroon px-8 py-4 text-lg font-medium transition-all duration-300"
            >
              Our Services
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-5xl font-serif font-bold text-white mb-2">500+</div>
            <div className="text-white/80">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-serif font-bold text-white mb-2">15+</div>
            <div className="text-white/80">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-serif font-bold text-white mb-2">98%</div>
            <div className="text-white/80">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
