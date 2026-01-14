'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center texture-overlay bg-eterna-black">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-eterna-black via-eterna-maroon/10 to-eterna-black"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-eterna-maroon">Timeless</span>{' '}
            <span className="text-eterna-accent">Elegance</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-eterna-accent/80 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your space with luxury interior design that reflects your
            unique style and sophistication.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="bg-eterna-maroon hover:bg-eterna-maroon/80 text-white px-8 py-4 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-eterna-maroon text-eterna-accent hover:bg-eterna-maroon hover:text-white px-8 py-4 text-lg font-medium transition-all duration-300"
            >
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        >
          <svg
            className="w-6 h-6 text-eterna-maroon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-eterna-maroon/20 rotate-45"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 border-2 border-eterna-maroon/10 rotate-12"></div>
    </section>
  )
}

export default Hero
