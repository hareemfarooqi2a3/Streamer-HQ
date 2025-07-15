import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Font Awesome Configuration
import '@fortawesome/fontawesome-svg-core/styles.css' // Import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's imported above

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ultimate Creator HQ | Streamer Central',
  description: 'Your one-stop hub for all things StreamerName - content, merch, community, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`gradient-bg text-white min-h-screen font-sans ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}