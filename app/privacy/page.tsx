'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Privacy = () => {
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
            Privacy <span className="text-eterna-maroon">Policy</span>
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
                Introduction
              </h2>
              <p className="leading-relaxed">
                Eterna Interiors Hub (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services in Kenya and East Africa.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-eterna-accent mb-2">Personal Information</h3>
                  <p className="leading-relaxed">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Request a consultation or quote</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Contact us via phone, email, or WhatsApp</li>
                    <li>Fill out forms on our website</li>
                  </ul>
                  <p className="mt-3 leading-relaxed">
                    This information may include: name, email address, phone number, physical address, 
                    project details, and budget information.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-eterna-accent mb-2">Automatically Collected Information</h3>
                  <p className="leading-relaxed">
                    When you visit our website, we may automatically collect certain information about 
                    your device, including IP address, browser type, operating system, and browsing behavior.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
                How We Use Your Information
              </h2>
              <p className="leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Provide and deliver our interior design services</li>
                <li>Respond to your inquiries and fulfill your requests</li>
                <li>Send you project updates and communications</li>
                <li>Improve our website and services</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Comply with legal obligations under Kenyan law</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
                Information Sharing and Disclosure
              </h2>
              <p className="leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                your information with:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Service providers who assist in our operations (e.g., contractors, suppliers)</li>
                <li>Professional advisors (lawyers, accountants)</li>
                <li>Law enforcement or regulatory authorities when required by law</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
                Data Security
              </h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your 
                personal information. However, no method of transmission over the internet or electronic 
                storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
                Data Retention
              </h2>
              <p className="leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes 
                outlined in this Privacy Policy, unless a longer retention period is required or permitted 
                by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
                Your Rights
              </h2>
              <p className="leading-relaxed mb-3">
                Under Kenyan data protection laws, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-3 leading-relaxed">
                To exercise these rights, please contact us using the information below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
                Cookies
              </h2>
              <p className="leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your experience. 
                You can control cookies through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. The updated version will be indicated 
                by an updated &quot;Last updated&quot; date at the top of this page.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
                Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4 space-y-2">
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

export default Privacy
