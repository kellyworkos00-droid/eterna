'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budgetRange: '',
    squareFootage: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('Thank you! We&apos;ll be in touch within 24 hours.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budgetRange: '',
        squareFootage: '',
        message: '',
      })

      setTimeout(() => setSubmitMessage(''), 5000)
    }, 1500)
  }

  return (
    <div className="min-h-screen pt-20 bg-eterna-black">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 texture-overlay bg-gradient-to-br from-eterna-maroon/20 to-eterna-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-eterna-accent mb-4 sm:mb-6 px-2"
          >
            Get in <span className="text-eterna-maroon">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-eterna-accent/70 max-w-3xl mx-auto px-4 leading-relaxed"
          >
            Let&apos;s discuss your vision and how we can bring it to life. Schedule a complimentary
            consultation today.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4 sm:mb-6">
                Contact Information
              </h2>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-eterna-maroon text-xl sm:text-2xl mt-1">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="text-eterna-accent font-medium mb-1">Office Location</h3>
                    <p className="text-eterna-accent/70">
                      Nairobi, Kenya
                      <br />
                      Westlands Business District
                      <br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-eterna-maroon text-xl sm:text-2xl mt-1">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="text-eterna-accent font-medium mb-1">Phone / WhatsApp</h3>
                    <p className="text-eterna-accent/70">+254 118 407 660</p>
                    <p className="text-eterna-accent/50 text-xs mt-1">Available on WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-eterna-maroon text-2xl">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="text-eterna-accent font-medium mb-1">Email</h3>
                    <p className="text-eterna-accent/70">info@eternainteriors.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-eterna-maroon text-2xl">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="text-eterna-accent font-medium mb-1">Business Hours</h3>
                    <p className="text-eterna-accent/70">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: By Appointment
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 h-64 bg-eterna-maroon/10 border border-eterna-maroon/20 flex items-center justify-center">
                <p className="text-eterna-accent/50">Google Maps Integration</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-eterna-maroon/5 border border-eterna-maroon/20 p-8">
                <h2 className="text-3xl font-serif font-bold text-eterna-accent mb-6">
                  Project Inquiry Form
                </h2>

                {submitMessage && (
                  <div className="mb-6 p-4 bg-eterna-maroon/20 border border-eterna-maroon text-eterna-accent">
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-eterna-accent mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-eterna-black border border-eterna-maroon/30 text-eterna-accent px-4 py-3 focus:outline-none focus:border-eterna-maroon transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-eterna-accent mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-eterna-black border border-eterna-maroon/30 text-eterna-accent px-4 py-3 focus:outline-none focus:border-eterna-maroon transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-eterna-accent mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-eterna-black border border-eterna-maroon/30 text-eterna-accent px-4 py-3 focus:outline-none focus:border-eterna-maroon transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-eterna-accent mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full bg-eterna-black border border-eterna-maroon/30 text-eterna-accent px-4 py-3 focus:outline-none focus:border-eterna-maroon transition-colors"
                      >
                        <option value="">Select a type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="renovation">Renovation</option>
                        <option value="consultation">Consultation Only</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budgetRange" className="block text-eterna-accent mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full bg-eterna-black border border-eterna-maroon/30 text-eterna-accent px-4 py-3 focus:outline-none focus:border-eterna-maroon transition-colors"
                      >
                        <option value="">Select a range</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="250k-500k">$250,000 - $500,000</option>
                        <option value="500k+">$500,000+</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="squareFootage" className="block text-eterna-accent mb-2">
                        Square Footage
                      </label>
                      <input
                        type="text"
                        id="squareFootage"
                        name="squareFootage"
                        value={formData.squareFootage}
                        onChange={handleChange}
                        placeholder="e.g., 2,500 sq ft"
                        className="w-full bg-eterna-black border border-eterna-maroon/30 text-eterna-accent px-4 py-3 focus:outline-none focus:border-eterna-maroon transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-eterna-accent mb-2">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Describe your vision, timeline, and any specific requirements..."
                      className="w-full bg-eterna-black border border-eterna-maroon/30 text-eterna-accent px-4 py-3 focus:outline-none focus:border-eterna-maroon transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-eterna-maroon hover:bg-eterna-maroon/80 text-white px-8 py-4 text-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Schedule Consultation'}
                  </button>

                  <p className="text-eterna-accent/60 text-sm">
                    * Required fields. We respect your privacy and will never share your
                    information.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
