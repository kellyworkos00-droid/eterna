'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 texture-overlay relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #800000 0%, #1a0505 50%, #0a0a0a 100%)'
      }}>
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 60%),
              radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.05) 0%, transparent 40%),
              radial-gradient(circle at 100% 100%, rgba(128, 0, 0, 0.3) 0%, transparent 60%)
            `
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 2, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border border-white/10 rotate-45"
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 border border-eterna-gold/20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 sm:mb-6 px-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to Transform Your Space?
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 px-2 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Let&apos;s create something extraordinary together. Schedule your complimentary
            consultation today and discover how we can bring your vision to life.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="block bg-white text-eterna-maroon hover:bg-eterna-accent px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                Book Consultation
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/services"
                className="block border-2 border-white text-white hover:bg-white hover:text-eterna-maroon px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 px-2">
          {[
            { value: '500+', label: 'Projects Completed', delay: 0.8 },
            { value: '15+', label: 'Years Experience', delay: 1.0 },
            { value: '98%', label: 'Client Satisfaction', delay: 1.2 },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center py-4"
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
                className="text-4xl sm:text-5xl font-serif font-bold text-white mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: stat.delay + 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm sm:text-base text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CTASection
