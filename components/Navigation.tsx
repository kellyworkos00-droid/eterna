'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useCart } from '@/context/CartContext'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { cartCount } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/services', label: 'Services' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Floating Logo */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-4 left-4 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-eterna-black/80 backdrop-blur-xl shadow-2xl border border-eterna-accent/20'
            : 'bg-eterna-black/60 backdrop-blur-md'
        } rounded-full p-3`}
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Eterna Interiors Hub Logo"
            width={40}
            height={40}
            className="object-contain"
            priority
          />
        </Link>
      </motion.div>

      {/* Floating Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-eterna-black/80 backdrop-blur-xl shadow-2xl border border-eterna-accent/20'
            : 'bg-eterna-black/60 backdrop-blur-md'
        } rounded-full`}
      >
        <div className="px-6 py-3">
          <div className="flex items-center gap-6">\n            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-eterna-accent hover:text-eterna-maroon transition-colors duration-300 font-medium text-sm relative group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-eterna-maroon group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
            {/* Cart and CTA */}
            <div className="flex items-center gap-4">
              <Link
                href="/cart"
                className="relative text-eterna-accent hover:text-eterna-maroon transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-eterna-maroon text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                    {cartCount}
                  </span>
                )}
              </Link>
              
              <Link
                href="/contact"
                className="hidden lg:block bg-eterna-maroon hover:bg-eterna-maroon/80 text-white px-6 py-2 transition-all duration-300 font-medium text-sm whitespace-nowrap"
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-eterna-accent focus:outline-none p-2 hover:bg-eterna-maroon/10 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-4 right-4 z-40 bg-eterna-black/95 backdrop-blur-xl border border-eterna-accent/20 rounded-2xl shadow-2xl"
        >
          <div className="px-6 py-6 space-y-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-base text-eterna-accent hover:text-eterna-maroon hover:bg-eterna-maroon/10 transition-colors duration-300 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="pt-4"
            >
              <Link
                href="/contact"
                className="block mx-2 bg-eterna-maroon hover:bg-eterna-maroon/80 text-white px-6 py-3 text-center transition-all duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Consultation
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Navigation
