'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { FaRulerCombined, FaPalette, FaGem, FaProjectDiagram, FaCouch, FaLightbulb } from 'react-icons/fa'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      id: 'space-planning',
      title: 'Space Planning',
      description:
        'Transform your environment with strategic layouts that maximize functionality while maintaining aesthetic appeal. Our expert planners analyze your space to create optimal flow and purpose.',
      features: [
        'Comprehensive space analysis',
        'Traffic flow optimization',
        'Furniture layout planning',
        'Multi-functional space design',
      ],
      icon: FaRulerCombined,
    },
    {
      id: '3d-rendering',
      title: '3D Rendering & Visualization',
      description:
        'Experience your space before construction begins with photo-realistic 3D renderings. We bring your vision to life digitally, allowing you to make confident decisions.',
      features: [
        'Photo-realistic renderings',
        'Virtual walkthroughs',
        'Multiple design options',
        'Material and color previews',
      ],
      icon: FaPalette,
    },
    {
      id: 'material-selection',
      title: 'Material Selection',
      description:
        'Curate the perfect palette of materials and finishes from our extensive network of luxury suppliers. We source only the finest quality materials to ensure lasting beauty.',
      features: [
        'Premium material sourcing',
        'Color consultation',
        'Texture coordination',
        'Sustainable options',
      ],
      icon: FaGem,
    },
    {
      id: 'project-management',
      title: 'Full Project Management',
      description:
        'From concept to completion, we handle every detail. Our comprehensive project management ensures your project is delivered on time, within budget, and exceeding expectations.',
      features: [
        'Timeline development',
        'Contractor coordination',
        'Budget management',
        'Quality control',
      ],
      icon: FaProjectDiagram,
    },
    {
      id: 'custom-furniture',
      title: 'Custom Furniture Design',
      description:
        'Create one-of-a-kind pieces that perfectly complement your space. Our custom furniture design service ensures every element is tailored to your exact specifications.',
      features: [
        'Bespoke designs',
        'Artisan craftsmanship',
        'Material customization',
        'Unique statement pieces',
      ],
      icon: FaCouch,
    },
    {
      id: 'lighting-design',
      title: 'Lighting Design',
      description:
        'Illuminate your space with carefully planned lighting that enhances ambiance and functionality. We design layered lighting schemes that transform environments.',
      features: [
        'Ambient lighting plans',
        'Task lighting solutions',
        'Accent lighting design',
        'Smart home integration',
      ],
      icon: FaLightbulb,
    },
  ]

  return (
    <div className="min-h-screen pt-20 bg-eterna-black">
      {/* Hero Section */}
      <section className="py-24 texture-overlay bg-gradient-to-br from-eterna-maroon/20 to-eterna-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-serif font-bold text-eterna-accent mb-6"
          >
            Our <span className="text-eterna-maroon">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-eterna-accent/70 max-w-3xl mx-auto"
          >
            Comprehensive interior design solutions tailored to your vision. From initial
            consultation to final installation, we provide white-glove service every step of
            the way.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-eterna-maroon/5 border border-eterna-maroon/20 p-8 hover:bg-eterna-maroon/10 transition-all duration-300 group"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 text-eterna-maroon">
                  <service.icon />
                </div>
                <h2 className="text-3xl font-serif font-bold text-eterna-accent mb-4">
                  {service.title}
                </h2>
                <p className="text-eterna-accent/70 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-eterna-maroon mr-3 mt-1 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-eterna-accent/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-eterna-black to-eterna-maroon/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-eterna-accent mb-4">
              Our <span className="text-eterna-maroon">Process</span>
            </h2>
            <div className="w-24 h-1 bg-eterna-maroon mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We meet to discuss your vision, requirements, and budget.',
              },
              {
                step: '02',
                title: 'Design',
                description: 'Our team creates detailed plans and 3D visualizations.',
              },
              {
                step: '03',
                title: 'Approval',
                description: 'Review and refine designs until they perfectly match your vision.',
              },
              {
                step: '04',
                title: 'Implementation',
                description: 'We manage the entire execution from start to finish.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl font-serif font-bold text-eterna-maroon/30 mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-serif font-bold text-eterna-accent mb-3">
                  {item.title}
                </h3>
                <p className="text-eterna-accent/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-eterna-accent mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-eterna-accent/70 mb-8">
            Schedule a complimentary consultation to discuss your project.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-eterna-maroon hover:bg-eterna-maroon/80 text-white px-8 py-4 text-lg font-medium transition-all duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
