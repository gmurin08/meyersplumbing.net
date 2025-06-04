import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import StructuredData from '@/components/structured-data'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'M. Meyers Plumbing - 24/7 Emergency Plumbing Services',
    template: '%s | M. Meyers Plumbing'
  },
  description: 'Professional plumbing services available 24/7. Licensed, insured plumber serving residential and commercial clients. Emergency repairs, water heaters, drain cleaning, and more.',
  keywords: 'plumber, plumbing, emergency plumbing, water heater, drain cleaning, residential plumbing, commercial plumbing, 24/7 plumber',
  authors: [{ name: 'M. Meyers Plumbing' }],
  creator: 'M. Meyers Plumbing',
  publisher: 'M. Meyers Plumbing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://meyersplumbing.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'M. Meyers Plumbing - 24/7 Emergency Plumbing Services',
    description: 'Professional plumbing services available 24/7. Licensed, insured plumber serving residential and commercial clients.',
    url: 'https://meyersplumbing.com',
    siteName: 'M. Meyers Plumbing',
    images: [
      {
        url: '/og-image.jpg', // You'll need to add this image
        width: 1200,
        height: 630,
        alt: 'M. Meyers Plumbing Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M. Meyers Plumbing - 24/7 Emergency Plumbing Services',
    description: 'Professional plumbing services available 24/7. Licensed, insured plumber.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        {/* Emergency Phone Number for Click-to-Call */}
        <meta name="format-detection" content="telephone=yes" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <StructuredData />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}