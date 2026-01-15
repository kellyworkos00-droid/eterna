'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaCheckCircle } from 'react-icons/fa'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate subscription
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubscribed(true)
      setEmail('')

      setTimeout(() => setIsSubscribed(false), 5000)
    }, 1500)
  }

  return (
    <div className="bg-gradient-to-r from-eterna-maroon/10 to-eterna-black border-t-2 border-eterna-maroon/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-eterna-accent mb-2 flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-eterna-maroon" />
              Subscribe to Our Newsletter
            </h3>
            <p className="text-eterna-accent/70 text-sm sm:text-base">
              Get exclusive design tips, project updates, and special offers delivered to your inbox
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full md:w-auto">
            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 bg-green-600/20 text-green-400 px-6 py-3 border border-green-600/50"
              >
                <FaCheckCircle />
                <span className="font-medium">Successfully subscribed!</span>
              </motion.div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 sm:w-64 px-4 py-3 bg-eterna-black border-2 border-eterna-maroon/30 text-eterna-accent placeholder-eterna-accent/40 focus:outline-none focus:border-eterna-maroon transition-colors duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-eterna-maroon hover:bg-eterna-maroon/80 text-white px-6 py-3 font-medium transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </motion.button>
              </div>
            )}
          </form>
        </div>

        <p className="text-eterna-accent/50 text-xs text-center mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  )
}

export default Newsletter
