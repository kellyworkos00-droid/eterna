'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BeforeAfterSlider from '@/components/portfolio/BeforeAfterSlider'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Living Room', 'Kitchen', 'Bedroom', 'Office', 'Commercial']

  const projects = [
    {
      id: 1,
      title: 'Contemporary Living Space',
      category: 'Living Room',
      description: 'Modern luxury with clean lines and sophisticated finishes.',
      before: '/projects/before1.jpg',
      after: '/projects/after1.jpg',
    },
    {
      id: 2,
      title: 'Gourmet Kitchen',
      category: 'Kitchen',
      description: 'Chef-inspired kitchen with premium appliances and custom cabinetry.',
      before: '/projects/before2.jpg',
      after: '/projects/after2.jpg',
    },
    {
      id: 3,
      title: 'Master Suite Retreat',
      category: 'Bedroom',
      description: 'Serene sanctuary with spa-like amenities and elegant design.',
      before: '/projects/before3.jpg',
      after: '/projects/after3.jpg',
    },
    {
      id: 4,
      title: 'Executive Home Office',
      category: 'Office',
      description: 'Productive workspace with sophisticated aesthetics.',
      before: '/projects/before4.jpg',
      after: '/projects/after4.jpg',
    },
    {
      id: 5,
      title: 'Boutique Hotel Lobby',
      category: 'Commercial',
      description: 'Welcoming entrance that exudes luxury and comfort.',
      before: '/projects/before5.jpg',
      after: '/projects/after5.jpg',
    },
    {
      id: 6,
      title: 'Open Concept Living',
      category: 'Living Room',
      description: 'Spacious and inviting entertainment area.',
      before: '/projects/before6.jpg',
      after: '/projects/after6.jpg',
    },
  ]

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="min-h-screen pt-20 bg-eterna-black">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 texture-overlay bg-gradient-to-br from-eterna-maroon/20 to-eterna-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-eterna-accent mb-4 sm:mb-6 px-2"
          >
            Our <span className="text-eterna-maroon">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-eterna-accent/70 max-w-3xl mx-auto px-4 leading-relaxed"
          >
            Explore our collection of transformative interior design projects that showcase
            luxury, innovation, and timeless elegance.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-eterna-black/50 sticky top-20 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {filters.map((filter, index) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-eterna-maroon text-white'
                    : 'bg-transparent border-2 border-eterna-maroon text-eterna-accent hover:bg-eterna-maroon hover:text-white'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <BeforeAfterSlider
                    beforeImage={project.before}
                    afterImage={project.after}
                  />
                  <div className="mt-6">
                    <div className="text-eterna-maroon text-sm font-medium mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-eterna-accent mb-2 group-hover:text-eterna-maroon transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-eterna-accent/70">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-eterna-accent/50">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Portfolio
