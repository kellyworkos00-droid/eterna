'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaTrophy, FaLightbulb, FaHandshake, FaLeaf } from 'react-icons/fa'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const values = [
    {
      title: 'Excellence',
      description: 'We pursue perfection in every detail, delivering results that exceed expectations.',
      icon: FaTrophy,
    },
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge design trends while honoring timeless principles.',
      icon: FaLightbulb,
    },
    {
      title: 'Integrity',
      description: 'Transparent communication and honest partnerships define our client relationships.',
      icon: FaHandshake,
    },
    {
      title: 'Sustainability',
      description: 'We prioritize eco-friendly materials and practices that benefit our planet.',
      icon: FaLeaf,
    },
  ]

  const team = [
    {
      name: 'Mercy Wangeci',
      role: 'Founder & Creative Director',
      bio: 'With 20+ years in luxury design, Mercy leads our vision with passion and expertise.',
    },
    {
      name: 'James Chen',
      role: 'Senior Interior Designer',
      bio: 'Specializing in contemporary spaces, James brings technical precision to every project.',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Design Consultant',
      bio: 'Elena&apos;s eye for detail and color ensures each space tells a unique story.',
    },
    {
      name: 'Michael Thompson',
      role: 'Project Manager',
      bio: 'Michael oversees execution, ensuring seamless delivery of every project.',
    },
  ]

  return (
    <div className="min-h-screen pt-20 bg-eterna-black">
      {/* Hero Section */}
      <section className="py-24 texture-overlay bg-gradient-to-br from-eterna-maroon/20 to-eterna-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-eterna-accent mb-6">
              About <span className="text-eterna-maroon">Eterna Interiors Hub</span>
            </h1>
            <p className="text-xl text-eterna-accent/70 max-w-3xl mx-auto">
              Where timeless elegance meets modern innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-eterna-accent mb-6 text-center">
              Our <span className="text-eterna-maroon">Story</span>
            </h2>
            <div className="w-24 h-1 bg-eterna-maroon mx-auto mb-8"></div>
            <div className="space-y-6 text-eterna-accent/70 text-lg">
              <p>
                Founded in 2011, Eterna Interiors Hub was born from a vision to create spaces
                that transcend trends and stand the test of time. Based in Nairobi, Kenya, our name reflects our
                commitment to eternal beauty and our role as a central hub for luxury design
                excellence.
              </p>
              <p>
                What began as a boutique design studio in Nairobi has evolved into a full-service interior
                design firm, serving discerning clients across Kenya and East Africa in both residential and commercial
                sectors. Our philosophy is simple: every space tells a story, and we&apos;re here to
                make yours unforgettable.
              </p>
              <p>
                Today, we&apos;re proud to have transformed over 500 spaces across Kenya, each one a testament to
                our dedication to craftsmanship, innovation, and the pursuit of perfection. Our
                team of award-winning designers brings decades of combined experience to every
                project, ensuring results that consistently exceed expectations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team at Work Image */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[500px] overflow-hidden"
          >
            <Image
              src="/team-office.jpg"
              alt="Eterna Interiors Hub team creating designs and conducting research"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-eterna-black via-transparent to-transparent">
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-serif font-bold mb-2">Our Creative Process</h3>
                <p className="text-lg text-white/90">Where innovation meets craftsmanship at our design studio</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-24 bg-gradient-to-br from-eterna-black to-eterna-maroon/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-eterna-maroon/5 border border-eterna-maroon/20 p-8"
            >
              <h3 className="text-3xl font-serif font-bold text-eterna-accent mb-4">
                Our Mission
              </h3>
              <p className="text-eterna-accent/70 text-lg">
                To transform spaces into timeless environments that inspire, comfort, and
                elevate daily life. We believe exceptional design should be accessible to those
                who value quality, and we&apos;re committed to delivering unparalleled service and
                results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-eterna-maroon/5 border border-eterna-maroon/20 p-8"
            >
              <h3 className="text-3xl font-serif font-bold text-eterna-accent mb-4">
                Design Philosophy
              </h3>
              <p className="text-eterna-accent/70 text-lg">
                We believe in the marriage of form and function, where beauty serves purpose
                and purpose inspires beauty. Every project begins with listening—understanding
                your vision, lifestyle, and aspirations—and ends with a space that feels
                authentically yours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={ref} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-eterna-accent mb-4">
              Our <span className="text-eterna-maroon">Values</span>
            </h2>
            <div className="w-24 h-1 bg-eterna-maroon mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 text-eterna-maroon">
                  <value.icon />
                </div>
                <h3 className="text-2xl font-serif font-bold text-eterna-accent mb-3">
                  {value.title}
                </h3>
                <p className="text-eterna-accent/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gradient-to-br from-eterna-black to-eterna-maroon/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-eterna-accent mb-4">
              Meet Our <span className="text-eterna-maroon">Team</span>
            </h2>
            <div className="w-24 h-1 bg-eterna-maroon mx-auto mb-6"></div>
            <p className="text-xl text-eterna-accent/70 max-w-3xl mx-auto">
              The talented designers and professionals behind every successful project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-eterna-maroon/5 border border-eterna-maroon/20 p-6 text-center group hover:bg-eterna-maroon/10 transition-all duration-300"
              >
                <div className="w-32 h-32 bg-eterna-maroon/20 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl font-serif text-eterna-maroon">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-serif font-bold text-eterna-accent mb-2">
                  {member.name}
                </h3>
                <div className="text-eterna-maroon font-medium mb-3">{member.role}</div>
                <p className="text-eterna-accent/70 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-eterna-accent mb-6">
            Let&apos;s Create Something Beautiful Together
          </h2>
          <p className="text-xl text-eterna-accent/70 mb-8">
            Schedule your consultation and discover how we can transform your space.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-eterna-maroon hover:bg-eterna-maroon/80 text-white px-8 py-4 text-lg font-medium transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Office Location Map */}
      <section className="py-16 bg-gradient-to-br from-eterna-black to-eterna-maroon/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-eterna-accent mb-4">
              Visit Our <span className="text-eterna-maroon">Showroom</span>
            </h2>
            <p className="text-lg text-eterna-accent/70 max-w-2xl mx-auto">
              Located in the heart of Westlands Business District, Nairobi. 
              Schedule an appointment to explore our curated collection.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="h-96 sm:h-[500px] border-4 border-eterna-maroon/30 rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.045922768705!2d36.79231488715821!3d-1.2670200999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f171ca46d4c93%3A0x1e14c7c042a5885d!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1705252800000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Eterna Interiors Hub Showroom - Westlands, Nairobi"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-eterna-maroon/10 p-6 rounded-lg border border-eterna-maroon/20">
                <h3 className="text-eterna-maroon font-semibold mb-2">Address</h3>
                <p className="text-eterna-accent/70">Westlands Business District<br/>Nairobi, Kenya</p>
              </div>
              <div className="bg-eterna-maroon/10 p-6 rounded-lg border border-eterna-maroon/20">
                <h3 className="text-eterna-maroon font-semibold mb-2">Phone / WhatsApp</h3>
                <p className="text-eterna-accent/70">+254 118 407 660</p>
              </div>
              <div className="bg-eterna-maroon/10 p-6 rounded-lg border border-eterna-maroon/20">
                <h3 className="text-eterna-maroon font-semibold mb-2">Hours</h3>
                <p className="text-eterna-accent/70">Mon-Fri: 9AM-6PM<br/>Sat: By Appointment</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
