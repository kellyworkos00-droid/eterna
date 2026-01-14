'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const FeaturedProjects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      category: 'Residential',
      description: 'A stunning contemporary home featuring open-concept living spaces with premium finishes.',
      image: '/projects/villa.jpg', // Placeholder
    },
    {
      id: 2,
      title: 'Executive Office Suite',
      category: 'Commercial',
      description: 'Sophisticated workspace design that balances professionalism with comfort.',
      image: '/projects/office.jpg', // Placeholder
    },
    {
      id: 3,
      title: 'Penthouse Renovation',
      category: 'Residential',
      description: 'Complete transformation of a high-rise penthouse with panoramic city views.',
      image: '/projects/penthouse.jpg', // Placeholder
    },
  ]

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Rich gradient background with animated elements */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0505 25%, #0a0a0a 50%, #050a0a 75%, #0a0a0a 100%)'
      }}>
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(128, 0, 0, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(212, 175, 55, 0.08) 0%, transparent 50%)
            `
          }}
          animate={{ rotate: [0, 5, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        {/* Decorative lines */}
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-eterna-maroon/30 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-40 h-px bg-gradient-to-l from-transparent via-eterna-gold/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-eterna-accent mb-4">
            Featured <span className="text-eterna-maroon">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-eterna-maroon mx-auto mb-6"></div>
          <p className="text-xl text-eterna-accent/70 max-w-3xl mx-auto">
            Explore our latest creations where luxury meets functionality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <motion.div 
                className="relative overflow-hidden bg-eterna-maroon/10 h-80 mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                {/* Placeholder for image */}
                <div className="absolute inset-0 flex items-center justify-center text-eterna-accent/20 text-6xl font-serif">
                  E.I.H
                </div>
                <motion.div 
                  className="absolute inset-0 bg-eterna-black/60 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="bg-eterna-maroon text-white px-6 py-3 font-medium inline-block hover:bg-eterna-maroon/80 transition-colors duration-300"
                    >
                      View Project
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
              <div className="text-eterna-maroon text-sm font-medium mb-2">
                {project.category}
              </div>
              <h3 className="text-2xl font-serif font-bold text-eterna-accent mb-2">
                {project.title}
              </h3>
              <p className="text-eterna-accent/70">{project.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/portfolio"
              className="inline-block border-2 border-eterna-maroon text-eterna-accent hover:bg-eterna-maroon hover:text-white px-8 py-4 text-lg font-medium transition-all duration-300"
            >
              View Full Portfolio
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects
