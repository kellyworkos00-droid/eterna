'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaStar, FaPaintBrush, FaTrophy, FaGem, FaBullseye, FaCrown } from 'react-icons/fa'

const WhyChooseEterna = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: FaStar,
      title: 'Timeless Design',
      description:
        'Our designs transcend trends, creating spaces that remain elegant and relevant for years to come.',
    },
    {
      icon: FaPaintBrush,
      title: 'Bespoke Solutions',
      description:
        'Every project is tailored to your unique vision, lifestyle, and functional needs.',
    },
    {
      icon: FaTrophy,
      title: 'Premium Quality',
      description:
        'We source only the finest materials and work with master craftsmen to ensure exceptional results.',
    },
    {
      icon: FaGem,
      title: 'Luxury Experience',
      description:
        'From consultation to completion, we provide a seamless, white-glove service experience.',
    },
    {
      icon: FaBullseye,
      title: 'Attention to Detail',
      description:
        'Every element is meticulously planned and executed to perfection.',
    },
    {
      icon: FaCrown,
      title: 'Award-Winning',
      description:
        'Recognized for excellence in luxury interior design by leading industry organizations.',
    },
  ]

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #150505 50%, #0a0a0a 100%)'
      }}>
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(128, 0, 0, 0.15) 0%, transparent 60%)'
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-full h-full opacity-20"
          style={{
            background: 'radial-gradient(circle at 70% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 60%)'
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-eterna-accent mb-3 sm:mb-4 px-2">
            Why Choose <span className="text-eterna-maroon">Eterna</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-eterna-maroon mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-eterna-accent/70 max-w-3xl mx-auto px-4">
            We bring your vision to life with unparalleled expertise, creativity, and dedication
            to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-eterna-maroon/5 border border-eterna-maroon/20 p-6 sm:p-8 hover:bg-eterna-maroon/10 transition-all duration-300 group"
            >
              <motion.div 
                className="text-4xl sm:text-5xl mb-3 sm:mb-4 text-eterna-maroon"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-eterna-accent mb-2 sm:mb-3 group-hover:text-eterna-maroon transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-eterna-accent/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseEterna
