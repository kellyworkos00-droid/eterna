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
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to Transform Your Space?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Let&apos;s create something extraordinary together. Schedule your complimentary
            consultation today and discover how we can bring your vision to life.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="block bg-white text-eterna-maroon hover:bg-eterna-accent px-8 py-4 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                Book Consultation
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/services"
                className="block border-2 border-white text-white hover:bg-white hover:text-eterna-maroon px-8 py-4 text-lg font-medium transition-all duration-300"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { value: '500+', label: 'Projects Completed', delay: 0.8 },
            { value: '15+', label: 'Years Experience', delay: 1.0 },
            { value: '98%', label: 'Client Satisfaction', delay: 1.2 },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: stat.delay,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <motion.div 
                className="text-5xl font-serif font-bold text-white mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: stat.delay + 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CTASection
