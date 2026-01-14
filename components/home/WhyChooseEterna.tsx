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
    <section ref={ref} className="py-24 bg-eterna-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-eterna-accent mb-4">
            Why Choose <span className="text-eterna-maroon">Eterna</span>
          </h2>
          <div className="w-24 h-1 bg-eterna-maroon mx-auto mb-6"></div>
          <p className="text-xl text-eterna-accent/70 max-w-3xl mx-auto">
            We bring your vision to life with unparalleled expertise, creativity, and dedication
            to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className="bg-eterna-maroon/5 border border-eterna-maroon/20 p-8 hover:bg-eterna-maroon/10 transition-all duration-300 group"
            >
              <motion.div 
                className="text-5xl mb-4 text-eterna-maroon"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon />
              </motion.div>
              <h3 className="text-2xl font-serif font-bold text-eterna-accent mb-3 group-hover:text-eterna-maroon transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-eterna-accent/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseEterna
