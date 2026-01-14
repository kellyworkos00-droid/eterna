'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center texture-overlay overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(128, 0, 0, 0.15) 0%, transparent 70%), linear-gradient(135deg, #0a0a0a 0%, #1a0505 30%, #0a0a0a 70%, #050a0a 100%)'
        }}
      >
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #800000 0%, transparent 70%)' }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)' }}
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #800000 0%, transparent 70%)', transform: 'translate(-50%, -50%)' }}
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Decorative geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 border-2 border-eterna-maroon/30"
          animate={{ rotate: 360, scale: [1, 1.5, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-3 h-3 border-2 border-eterna-gold/20"
          animate={{ rotate: -360, scale: [1, 2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-1 h-20 bg-gradient-to-b from-eterna-maroon/20 to-transparent"
          animate={{ scaleY: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 sm:mb-6 px-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-eterna-maroon">Timeless</span>{' '}
            <span className="text-eterna-accent">Elegance</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-eterna-accent/80 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Transform your space with luxury interior design that reflects your
            unique style and sophistication.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="block bg-eterna-maroon hover:bg-eterna-maroon/80 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-2xl text-center"
              >
                Schedule Consultation
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/portfolio"
                className="block border-2 border-eterna-maroon text-eterna-accent hover:bg-eterna-maroon hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 text-center"
              >
                View Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.4, 1, 0.4],
            y: [0, 10, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
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
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 border-2 border-eterna-maroon/20"
        animate={{ rotate: 45 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 border-2 border-eterna-maroon/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
    </section>
  )
}

export default Hero
