'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah & David Kimani',
      role: 'Residential Client - Karen',
      content:
        'Eterna transformed our home into a masterpiece. Their attention to detail and understanding of our vision was exceptional. Every room tells our story beautifully.',
      rating: 5,
      project: 'Modern Villa Design',
    },
    {
      name: 'James Omondi',
      role: 'Commercial Client - Westlands',
      content:
        'Our office renovation exceeded all expectations. The team created a sophisticated workspace that impresses clients and energizes our staff. Absolutely worth every shilling.',
      rating: 5,
      project: 'Executive Office Suite',
    },
    {
      name: 'Amina Hassan',
      role: 'Residential Client - Kilimani',
      content:
        'From concept to completion, the process was seamless. Mercy and her team listened to our needs and delivered a space that perfectly balances luxury and comfort.',
      rating: 5,
      project: 'Penthouse Transformation',
    },
    {
      name: 'Michael & Grace Wanjiru',
      role: 'Residential Client - Runda',
      content:
        'We have worked with several designers, but none compare to Eterna. Their creativity, professionalism, and commitment to quality are unmatched. Highly recommended!',
      rating: 5,
      project: 'Contemporary Family Home',
    },
    {
      name: 'Patricia Mutua',
      role: 'Commercial Client - CBD',
      content:
        'The retail space they designed for us has significantly improved our customer experience. Sales have increased, and we constantly receive compliments on the aesthetics.',
      rating: 5,
      project: 'Boutique Store Design',
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0505 50%, #0a0a0a 100%)'
      }}>
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(128, 0, 0, 0.15) 0%, transparent 60%)`
          }}
          animate={{ scale: [1, 1.1, 1] }}
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
            Client <span className="text-eterna-maroon">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-eterna-maroon mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-eterna-accent/70 max-w-3xl mx-auto px-4">
            Hear from our satisfied clients across Kenya
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-eterna-maroon/10 to-eterna-black/50 p-8 sm:p-10 md:p-12 border-2 border-eterna-maroon/30 relative"
          >
            {/* Quote Icon */}
            <FaQuoteLeft className="text-4xl sm:text-5xl text-eterna-maroon/30 absolute top-6 left-6" />

            {/* Stars */}
            <div className="flex justify-center mb-6 mt-4">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-eterna-gold text-xl sm:text-2xl mx-1" />
              ))}
            </div>

            {/* Content */}
            <p className="text-eterna-accent/90 text-lg sm:text-xl md:text-2xl leading-relaxed text-center mb-6 sm:mb-8 italic px-4">
              &quot;{currentTestimonial.content}&quot;
            </p>

            {/* Client Info */}
            <div className="text-center border-t border-eterna-maroon/20 pt-6">
              <h4 className="text-eterna-accent font-serif text-xl sm:text-2xl font-bold mb-1">
                {currentTestimonial.name}
              </h4>
              <p className="text-eterna-maroon text-sm sm:text-base mb-2">
                {currentTestimonial.role}
              </p>
              <p className="text-eterna-accent/60 text-sm">
                Project: {currentTestimonial.project}
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="bg-eterna-maroon hover:bg-eterna-maroon/80 text-white p-3 sm:p-4 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="text-lg sm:text-xl" />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-eterna-maroon w-8'
                        : 'bg-eterna-maroon/30 hover:bg-eterna-maroon/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="bg-eterna-maroon hover:bg-eterna-maroon/80 text-white p-3 sm:p-4 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <FaChevronRight className="text-lg sm:text-xl" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
