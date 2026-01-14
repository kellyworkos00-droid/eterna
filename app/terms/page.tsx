'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Terms = () => {
  return (
    <div className="min-h-screen pt-20 bg-eterna-black">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 texture-overlay bg-gradient-to-br from-eterna-maroon/20 to-eterna-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-eterna-accent mb-4 sm:mb-6"
          >
            Terms of <span className="text-eterna-maroon">Service</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-eterna-accent/70 max-w-3xl mx-auto"
          >
            Last updated: January 14, 2026
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8 text-eterna-accent/80"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
                Agreement to Terms
              </h2>
              <p className="leading-relaxed">
                These Terms of Service ("Terms") govern your use of the Eterna Interiors Hub website 
                and services. By accessing our website or engaging our services, you agree to be bound 
                by these Terms. If you do not agree with these Terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
                Services
              </h2>
              <p className="leading-relaxed mb-3">
                Eterna Interiors Hub provides luxury interior design services including:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Space planning and layout design</li>
                <li>3D rendering and visualization</li>
                <li>Material selection and sourcing</li>
                <li>Full project management</li>
                <li>Custom furniture design</li>
                <li>Renovation consulting</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
                Consultation and Proposals
              </h2>
              <p className="leading-relaxed">
                Initial consultations may be complimentary or fee-based as specified at the time of 
                booking. Detailed proposals and quotes are valid for 30 days from the date of issue. 
                Projects commence only upon signing of a service agreement and receipt of the initial deposit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
                Payment Terms
              </h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <strong>Deposits:</strong> A non-refundable deposit of 30-50% is required to commence 
                  work, depending on the project scope.
                </p>
                <p className="leading-relaxed">
                  <strong>Progress Payments:</strong> Additional payments are due at project milestones 
                  as outlined in the service agreement.
                </p>
                <p className="leading-relaxed">
                  <strong>Final Payment:</strong> Final payment is due upon project completion and before 
                  final handover.
                </p>
                <p className="leading-relaxed">
                  <strong>Late Payments:</strong> Late payments may incur interest charges and may result 
                  in project delays or suspension.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
                Project Timeline
              </h2>
              <p className="leading-relaxed">
                We strive to complete all projects within the agreed timeline. However, timelines are 
                estimates and may be affected by factors including client approvals, material availability, 
                contractor schedules, and unforeseen circumstances. We will communicate any delays promptly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
                Client Responsibilities
              </h2>
              <p className="leading-relaxed mb-3">Clients are responsible for:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Providing accurate information and measurements</li>
                <li>Timely review and approval of designs and materials</li>
                <li>Ensuring site access for our team and contractors</li>
                <li>Making timely payments as per the agreed schedule</li>
                <li>Obtaining necessary permits and approvals (where applicable)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
                Changes and Revisions
              </h2>
              <p className="leading-relaxed">
                Minor design revisions are included in our service packages. Significant changes or 
                additional revisions beyond the agreed scope may incur additional fees. All change 
                requests must be submitted in writing and approved before implementation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
                Intellectual Property
              </h2>
              <p className="leading-relaxed">
                All designs, drawings, plans, and concepts created by Eterna Interiors Hub remain our 
                intellectual property until full payment is received. Upon full payment, clients receive 
                a license to use the designs for the specific project only. Reproduction or use for other 
                projects requires prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
                Warranties and Guarantees
              </h2>
              <p className="leading-relaxed">
                We guarantee the quality of our design work and workmanship. However, we are not 
                responsible for manufacturer defects in materials or products. Third-party warranties 
                apply to furniture, fixtures, and materials as provided by their respective manufacturers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
                Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                Eterna Interiors Hub shall not be liable for any indirect, incidental, special, or 
                consequential damages arising from our services. Our total liability shall not exceed 
                the total fees paid for the specific project in question.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
                Cancellation and Termination
              </h2>
              <p className="leading-relaxed">
                Either party may terminate the agreement with written notice. Upon termination:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>The client is responsible for payment for all work completed to date</li>
                <li>Deposits are non-refundable</li>
                <li>All materials and designs remain our property until paid in full</li>
                <li>Cancellation fees may apply as outlined in the service agreement</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
                Confidentiality
              </h2>
              <p className="leading-relaxed">
                We respect your privacy and will keep all project information confidential. However, 
                we reserve the right to use project photographs and information for marketing purposes 
                unless otherwise agreed in writing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
                Governing Law
              </h2>
              <p className="leading-relaxed">
                These Terms are governed by the laws of Kenya. Any disputes arising from these Terms 
                or our services shall be resolved through arbitration in Nairobi, Kenya, or through 
                Kenyan courts.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
                Changes to Terms
              </h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. Updated Terms will be posted 
                on our website with a revised "Last updated" date. Continued use of our services 
                constitutes acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
                Contact Information
              </h2>
              <p className="leading-relaxed mb-3">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> info@eternainteriors.com</p>
                <p><strong>Phone/WhatsApp:</strong> +254 118 407 660</p>
                <p><strong>Address:</strong> Westlands Business District, Nairobi, Kenya</p>
              </div>
            </div>

            <div className="pt-8 border-t border-eterna-maroon/20">
              <Link
                href="/"
                className="inline-block text-eterna-maroon hover:text-eterna-accent transition-colors duration-300"
              >
                ← Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Terms
