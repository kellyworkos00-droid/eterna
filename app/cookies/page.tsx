'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCookie } from 'react-icons/fa'

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-eterna-black py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center text-eterna-maroon hover:text-eterna-maroon/80 transition-colors mb-6"
          >
            ← Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <FaCookie className="text-4xl text-eterna-maroon" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-eterna-accent">
              Cookie Policy
            </h1>
          </div>
          
          <p className="text-eterna-accent/60 text-lg">
            Last updated: January 14, 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8 text-eterna-accent/80"
        >
          <div className="border-l-4 border-eterna-maroon pl-6 py-4 bg-eterna-maroon/5">
            <p className="text-lg leading-relaxed">
              This Cookie Policy explains how Eterna Interiors Hub uses cookies and similar technologies 
              to recognize you when you visit our website. It explains what these technologies are, why we 
              use them, and your rights to control our use of them.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
              What Are Cookies?
            </h2>
            <p className="leading-relaxed mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit 
              a website. They are widely used to make websites work more efficiently and provide information 
              to website owners.
            </p>
            <p className="leading-relaxed">
              Cookies set by the website owner (in this case, Eterna Interiors Hub) are called &quot;first-party cookies.&quot; 
              Cookies set by parties other than the website owner are called &quot;third-party cookies.&quot; Third-party 
              cookies enable third-party features or functionality to be provided on or through the website 
              (e.g., advertising, interactive content, and analytics).
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
              Why We Use Cookies
            </h2>
            <p className="leading-relaxed mb-4">
              We use first-party and third-party cookies for several reasons:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To enable certain functions of our website</li>
              <li>To provide analytics and understand how visitors use our site</li>
              <li>To enhance security and website performance</li>
              <li>To remember your preferences and settings</li>
              <li>To improve your user experience</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
              Types of Cookies We Use
            </h2>
            
            <div className="space-y-6">
              <div className="bg-eterna-maroon/5 p-6 rounded-lg border border-eterna-maroon/20">
                <h3 className="text-xl font-serif font-bold text-eterna-maroon mb-3">
                  1. Essential Cookies
                </h3>
                <p className="leading-relaxed">
                  These cookies are strictly necessary to provide you with services available through our 
                  website and to use some of its features, such as access to secure areas. Because these 
                  cookies are strictly necessary, you cannot refuse them without impacting how our website functions.
                </p>
              </div>

              <div className="bg-eterna-maroon/5 p-6 rounded-lg border border-eterna-maroon/20">
                <h3 className="text-xl font-serif font-bold text-eterna-maroon mb-3">
                  2. Performance and Analytics Cookies
                </h3>
                <p className="leading-relaxed">
                  These cookies collect information about how you use our website, such as which pages you 
                  visit most often and if you receive error messages. These cookies don&apos;t collect information 
                  that identifies you personally. All information collected by these cookies is aggregated 
                  and used to improve how our website works.
                </p>
              </div>

              <div className="bg-eterna-maroon/5 p-6 rounded-lg border border-eterna-maroon/20">
                <h3 className="text-xl font-serif font-bold text-eterna-maroon mb-3">
                  3. Functionality Cookies
                </h3>
                <p className="leading-relaxed">
                  These cookies allow our website to remember choices you make (such as your language 
                  preference) and provide enhanced, more personalized features. They may also be used to 
                  provide services you have requested, such as watching a video or commenting on a blog.
                </p>
              </div>

              <div className="bg-eterna-maroon/5 p-6 rounded-lg border border-eterna-maroon/20">
                <h3 className="text-xl font-serif font-bold text-eterna-maroon mb-3">
                  4. Targeting and Advertising Cookies
                </h3>
                <p className="leading-relaxed">
                  These cookies are used to deliver advertisements more relevant to you and your interests. 
                  They are also used to limit the number of times you see an advertisement and help measure 
                  the effectiveness of advertising campaigns. Currently, we do not use advertising cookies, 
                  but we may do so in the future.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
              How to Control Cookies
            </h2>
            <p className="leading-relaxed mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie 
              preferences by clicking on the appropriate opt-out links provided in the cookie banner that 
              appears when you first visit our website.
            </p>
            <p className="leading-relaxed mb-4">
              You can also set or amend your web browser controls to accept or refuse cookies. If you choose 
              to reject cookies, you may still use our website, though your access to some functionality and 
              areas may be restricted.
            </p>
            
            <h3 className="text-xl font-serif font-bold text-eterna-accent mb-3 mt-6">
              Browser Controls
            </h3>
            <p className="leading-relaxed mb-3">
              Most web browsers allow you to control cookies through their settings. To find out more about 
              cookies, including how to see what cookies have been set and how to manage and delete them, visit:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Google Chrome: Settings → Privacy and security → Cookies</li>
              <li>Mozilla Firefox: Options → Privacy & Security → Cookies and Site Data</li>
              <li>Safari: Preferences → Privacy → Cookies and website data</li>
              <li>Microsoft Edge: Settings → Cookies and site permissions</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
              Third-Party Cookies
            </h2>
            <p className="leading-relaxed mb-4">
              In addition to our own cookies, we may use various third-party cookies to report usage 
              statistics of our website and deliver advertisements on and through the website.
            </p>
            <p className="leading-relaxed">
              We currently may use services such as Google Analytics to help us understand how visitors 
              interact with our website. These services may collect information such as your IP address, 
              browser type, referring/exit pages, and the dates and times of your visits.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
              Updates to This Cookie Policy
            </h2>
            <p className="leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes to the cookies we use 
              or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy 
              regularly to stay informed about our use of cookies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-eterna-accent mb-4">
              Contact Us
            </h2>
            <p className="leading-relaxed mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="bg-eterna-maroon/5 p-6 rounded-lg border border-eterna-maroon/20 space-y-2">
              <p><strong>Email:</strong> info@eternainteriors.co.ke</p>
              <p><strong>Phone:</strong> +254 118 407 660</p>
              <p><strong>WhatsApp:</strong> +254 118 407 660</p>
              <p><strong>Address:</strong> Westlands Business District, Nairobi, Kenya</p>
            </div>
          </div>

          <div className="border-t border-eterna-maroon/20 pt-8 mt-12">
            <p className="text-center text-eterna-accent/60">
              By continuing to use our website, you consent to our use of cookies as described in this 
              Cookie Policy.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/"
            className="inline-block bg-eterna-maroon hover:bg-eterna-maroon/80 text-white px-8 py-4 text-lg font-medium transition-all duration-300"
          >
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
