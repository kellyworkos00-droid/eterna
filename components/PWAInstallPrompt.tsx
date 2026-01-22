'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)

  useEffect(() => {
    // Check if already installed
    const checkStandalone = () => {
      const standalone = 
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as any).standalone === true
      setIsStandalone(standalone)
    }

    checkStandalone()

    // Listen for the install prompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      
      // Check if user has dismissed before
      const dismissed = localStorage.getItem('pwa-install-dismissed')
      if (!dismissed) {
        setShowPrompt(true)
      }
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    await deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt')
    }

    setDeferredPrompt(null)
    setShowPrompt(false)
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    localStorage.setItem('pwa-install-dismissed', 'true')
  }

  // Don't show if already installed or no prompt available
  if (isStandalone || !showPrompt || !deferredPrompt) {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50 animate-slide-up">
      <div className="bg-gradient-to-br from-eterna-maroon/95 to-eterna-accent/95 backdrop-blur-lg border border-eterna-accent/30 rounded-lg shadow-2xl p-6">
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-white/60 hover:text-white transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-eterna-black rounded-lg flex items-center justify-center">
              <span className="text-2xl font-serif font-bold text-eterna-accent">E</span>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-white font-serif text-lg font-semibold mb-2">
              Install Eterna Interiors Hub
            </h3>
            <p className="text-white/80 text-sm mb-4">
              Install our app for a better experience and quick access to our luxury designs.
            </p>

            <div className="flex space-x-3">
              <button
                onClick={handleInstallClick}
                className="flex-1 bg-white text-eterna-maroon font-semibold px-4 py-2 rounded-lg hover:bg-eterna-accent hover:text-eterna-black transition-colors duration-300"
              >
                Install Now
              </button>
              <button
                onClick={handleDismiss}
                className="px-4 py-2 text-white/80 hover:text-white text-sm transition-colors"
              >
                Not Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PWAInstallPrompt
