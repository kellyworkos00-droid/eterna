'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlus, FaMinus } from 'react-icons/fa'

interface FAQItem {
  question: string
  answer: string
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: 'What is the typical timeline for an interior design project?',
      answer:
        'Project timelines vary based on scope and complexity. A complete home design typically takes 3-6 months from initial consultation to final installation. Smaller projects like single rooms can be completed in 4-8 weeks. We provide detailed timelines during the consultation phase.',
    },
    {
      question: 'How much does interior design cost in Kenya?',
      answer:
        'Our services are customized to your budget and needs. We offer packages starting from KES 150,000 for single rooms, with complete home designs ranging from KES 500,000 to several million depending on size and finishes. We provide transparent pricing during the initial consultation.',
    },
    {
      question: 'Do you work outside of Nairobi?',
      answer:
        'Yes! While based in Nairobi, we serve clients throughout Kenya and East Africa. We have successfully completed projects in Mombasa, Kisumu, Nakuru, and neighboring countries. Travel costs are factored into the project quote.',
    },
    {
      question: 'What is included in your design services?',
      answer:
        'Our comprehensive service includes initial consultation, space planning, 3D renderings, material selection, furniture sourcing, project management, and installation coordination. We handle everything from concept to completion.',
    },
    {
      question: 'Do you provide furniture and materials, or just design?',
      answer:
        'We offer both options. We can provide full-service procurement of furniture, materials, and accessories through our trusted suppliers, or we can work with items you source yourself. Many clients prefer our turnkey approach for convenience and quality assurance.',
    },
    {
      question: 'Can you work with my existing furniture?',
      answer:
        'Absolutely! We excel at incorporating cherished pieces into new designs. We evaluate your existing furniture and create layouts that blend old and new seamlessly, helping you maintain sentimental items while refreshing your space.',
    },
    {
      question: 'Do you offer virtual consultations?',
      answer:
        'Yes, we offer virtual consultations via video call for clients unable to visit our Westlands showroom. We can discuss your project, review plans, and present designs remotely. However, we recommend at least one in-person meeting for accurate measurements.',
    },
    {
      question: 'What makes Eterna different from other interior designers?',
      answer:
        'Our commitment to timeless design, personalized service, and meticulous attention to detail sets us apart. We combine over 20 years of experience with the latest trends, prioritize sustainable materials, and maintain transparent communication throughout every project.',
    },
    {
      question: 'Do you offer payment plans?',
      answer:
        'Yes, we offer flexible payment structures. Typically, we require a 30-50% deposit to begin, with remaining payments tied to project milestones. We discuss payment terms during the contract phase to ensure they work with your budget.',
    },
    {
      question: 'What if I\'m not satisfied with the design?',
      answer:
        'Client satisfaction is our priority. We include revision rounds in our contracts and work closely with you at every stage. We present 3D renderings before execution, allowing you to visualize and approve designs. We don\'t proceed until you\'re completely satisfied.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-eterna-black to-eterna-maroon/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-eterna-accent mb-3 sm:mb-4">
            Frequently Asked <span className="text-eterna-maroon">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-eterna-maroon mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-eterna-accent/70">
            Everything you need to know about working with Eterna Interiors Hub
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border-2 border-eterna-maroon/20 bg-eterna-black/50 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-eterna-maroon/5 transition-colors duration-300"
              >
                <h3 className="text-base sm:text-lg font-semibold text-eterna-accent pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-eterna-maroon flex-shrink-0"
                >
                  {openIndex === index ? <FaMinus className="text-xl" /> : <FaPlus className="text-xl" />}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 sm:p-6 pt-0 text-eterna-accent/80 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-eterna-maroon/10 p-8 border-2 border-eterna-maroon/30"
        >
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-eterna-accent mb-4">
            Still Have Questions?
          </h3>
          <p className="text-eterna-accent/70 mb-6">
            Our team is here to help. Contact us for personalized answers to your queries.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-block bg-eterna-maroon hover:bg-eterna-maroon/80 text-white px-8 py-3 text-lg font-medium transition-colors duration-300"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
