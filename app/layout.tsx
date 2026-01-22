import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import PWAInstallPrompt from '@/components/PWAInstallPrompt'

export const metadata: Metadata = {
  title: 'Eterna Interiors Hub | Luxury Interior Design',
  description: 'Transform your space with timeless elegance. Eterna Interiors Hub offers high-end interior design services for residential and commercial properties.',
  keywords: ['interior design', 'luxury interiors', 'home design', 'commercial design', 'space planning', '3D rendering'],
  authors: [{ name: 'Eterna Interiors Hub' }],
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Eterna Interiors',
  },
  openGraph: {
    title: 'Eterna Interiors Hub | Luxury Interior Design',
    description: 'Transform your space with timeless elegance',
    type: 'website',
  },
  themeColor: '#d4af37',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#d4af37" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body>
        <ScrollProgress />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <PWAInstallPrompt />
      </body>
    </html>
  )
}
