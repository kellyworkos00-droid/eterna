import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

export const metadata: Metadata = {
  title: 'Eterna Interiors Hub | Luxury Interior Design',
  description: 'Transform your space with timeless elegance. Eterna Interiors Hub offers high-end interior design services for residential and commercial properties.',
  keywords: ['interior design', 'luxury interiors', 'home design', 'commercial design', 'space planning', '3D rendering'],
  authors: [{ name: 'Eterna Interiors Hub' }],
  openGraph: {
    title: 'Eterna Interiors Hub | Luxury Interior Design',
    description: 'Transform your space with timeless elegance',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
