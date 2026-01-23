'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '@/context/CartContext'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartCount } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const mainNavLinks = [
    { href: '/', label: 'Home', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )},
    { href: '/portfolio', label: 'Portfolio', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )},
    { href: '/products', label: 'Products', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )},
  ]

  const menuLinks = [
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Floating Logo at Top Left */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-4 left-6 z-50 transition-all duration-300 ${
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

      {/* Main Floating Navigation Below */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-eterna-black/80 backdrop-blur-xl shadow-2xl border border-eterna-accent/20'
            : 'bg-eterna-black/60 backdrop-blur-md'
        } rounded-full`}
      >
        <div className="px-6 py-3">
          <div className="flex items-center gap-3">
            {/* Main Nav Links - Home, Portfolio, Products */}
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-eterna-accent hover:text-eterna-maroon transition-colors duration-300 px-4 py-2 rounded-full hover:bg-eterna-maroon/10"
                title={link.label}
              >
                {link.icon}
                <span className="hidden lg:inline font-medium text-sm">{link.label}</span>
              </Link>
            ))}

            {/* Menu Icon (Center) - Opens popup for Services, About, Contact */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 text-eterna-accent hover:text-eterna-maroon transition-colors duration-300 px-4 py-2 rounded-full hover:bg-eterna-maroon/10"
              title="Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="hidden lg:inline font-medium text-sm">Menu</span>
            </button>

            {/* Cart Icon */}
            <Link
              href="/cart"
              className="relative flex items-center gap-2 text-eterna-accent hover:text-eterna-maroon transition-colors duration-300 px-4 py-2 rounded-full hover:bg-eterna-maroon/10"
              title="Cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-eterna-maroon text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
              )}
              <span className="hidden lg:inline font-medium text-sm">Cart</span>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Menu Popup Modal */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            
            {/* Menu Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-eterna-black/95 backdrop-blur-xl border-2 border-eterna-accent/30 rounded-3xl shadow-2xl p-8 w-96 max-w-[90vw]"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-serif font-bold text-eterna-accent">Menu</h3>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-eterna-accent hover:text-eterna-maroon transition-colors p-2 rounded-full hover:bg-eterna-maroon/10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-2">
                {menuLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-6 py-4 text-lg text-eterna-accent hover:text-white hover:bg-eterna-maroon rounded-xl transition-all duration-300 font-medium"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4 mt-4 border-t border-eterna-accent/20"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full bg-eterna-maroon hover:bg-eterna-maroon/90 text-white px-6 py-4 rounded-xl text-center transition-all duration-300 font-semibold"
                  >
                    Book Consultation
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
