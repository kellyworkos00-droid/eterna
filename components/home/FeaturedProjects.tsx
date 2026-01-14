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
    <section ref={ref} className="py-24 bg-gradient-to-br from-eterna-black to-eterna-maroon/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-eterna-maroon/10 h-80 mb-4">
                {/* Placeholder for image */}
                <div className="absolute inset-0 flex items-center justify-center text-eterna-accent/20 text-6xl font-serif">
                  E.I.H
                </div>
                <div className="absolute inset-0 bg-eterna-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="bg-eterna-maroon text-white px-6 py-3 font-medium"
                  >
                    View Project
                  </Link>
                </div>
              </div>
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
          <Link
            href="/portfolio"
            className="inline-block border-2 border-eterna-maroon text-eterna-accent hover:bg-eterna-maroon hover:text-white px-8 py-4 text-lg font-medium transition-all duration-300"
          >
            View Full Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects
